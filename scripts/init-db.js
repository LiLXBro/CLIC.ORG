const { Pool } = require('pg');
const fs = require('fs');
const path = require('path');
require('dotenv').config({ path: '.env.local' }); // Load env for local run

const pool = new Pool({
    connectionString: process.env.DATABASE_URL ? process.env.DATABASE_URL.trim() : undefined,
    ssl: { rejectUnauthorized: false }, // Enforce SSL for Render
});

if (!process.env.DATABASE_URL) {
    console.error("❌ Error: DATABASE_URL is missing from .env.local");
    process.exit(1);
}

async function initDb() {
    try {
        const schemaPath = path.join(__dirname, 'schema.sql');
        const schemaSql = fs.readFileSync(schemaPath, 'utf8');

        console.log('Running schema...');
        await pool.query(schemaSql);
        console.log('Database initialized successfully.');
    } catch (err) {
        console.error('Error initializing database:', err);
    } finally {
        await pool.end();
    }
}

initDb();
