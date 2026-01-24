"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled
                    ? "bg-white/70 backdrop-blur-md shadow-sm py-2"
                    : "bg-transparent py-4"
                }`}
        >
            <div className="container mx-auto px-6 h-16 flex items-center justify-between">
                {/* Brand Name */}
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="bg-gradient-to-r from-blue-600 to-teal-500 text-white p-2 rounded-lg group-hover:shadow-lg transition-all duration-300">
                        <span className="font-bold text-xl tracking-tight">CLIC</span>
                    </div>
                    <span className={`font-bold text-2xl tracking-tighter transition-colors duration-300 ${isScrolled ? "text-gray-800" : "text-white drop-shadow-md"}`}>
                        .ORG
                    </span>
                </Link>

                {/* Tagline */}
                <div className="hidden md:block">
                    <span className={`text-lg font-medium tracking-wide transition-colors duration-300 ${isScrolled ? "text-slate-600" : "text-white/90 drop-shadow-sm"}`}>
                        liveable city
                    </span>
                </div>
            </div>
        </header>
    );
}
