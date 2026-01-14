# CLIC.ORG

Citizens for Liveable Indian Cities - Citizen Mobilization Platform.

## Tech Stack
- **Frontend/Backend**: Next.js 14 (App Router)
- **Database**: PostgreSQL
- **Styling**: Tailwind CSS
- **Maps**: React Leaflet (OpenStreetMap)

## Setup & Run Locally

### 1. Install Dependencies
```bash
npm install
```

### 2. Environment Variables
Create a `.env.local` file in the root directory:
```bash
DATABASE_URL="postgresql://user:password@localhost:5432/clic_db"
```
*Note: You need a running PostgreSQL instance.*

### 3. Initialize Database
Run the schema initialization script to create the `champions` table:
```bash
node scripts/init-db.js
```

### 4. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000)

## Deployment

### Environment Variables (Crucial!)
Since `.env.local` is not committed to Git, you must set these variables in your hosting provider's dashboard:

**Key**: `DATABASE_URL`

#### On Render (Recommended)
1.  Go to your **Web Service** dashboard.
2.  Click **Environment**.
3.  Add Variable: `DATABASE_URL` -> Value: **Internal Database URL** (from Render Postgres).

#### On Netlify / Vercel
1.  Go to **Site Settings** > **Environment Variables**.
2.  Add Variable: `DATABASE_URL` -> Value: **External Database URL** (from Render Postgres).
    *   *Note: Ensure you allow connections from 0.0.0.0/0 in Render, or the deployment might fail to connect.*

1. Creates a **Web Service** on Render connected to this repo.
2. Add Environment Variable `DATABASE_URL`.
3. Build Command: `npm run build`
4. Start Command: `npm start`
