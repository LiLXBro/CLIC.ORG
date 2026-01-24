"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, MapPin, CheckCircle2 } from "lucide-react";

const slides = [
    {
        id: "polluted",
        title: "India’s Urban Challenge",
        description: "Crowded streets, heavy pollution, and deteriorating quality of life characterize many of today's megacities. We must shift from reactive sprawl to proactive planning.",
        image: "/polluted-city.png",
        region: "Current Reality",
        color: "from-gray-900 to-slate-900",
    },
    {
        id: "common",
        title: "Nationwide Essentials",
        description: "Every liveable city, regardless of geography, guarantees these basics within walking distance (800m–2km):",
        image: "/vision-bg.png", // Using the generic modern city bg
        region: "All Regions",
        color: "from-blue-900 to-indigo-900",
        listPoints: [
            "Multi-faith spaces & Schools",
            "Parks & Recreation Centers",
            "Local Markets & Fresh Produce",
            "Primary Health Centers",
            "Reliable Public Transport",
            "Safe Walking/Cycling Lanes",
            "Effective Waste Management",
            "24/7 Water & Electricity",
        ]
    },
    {
        id: "north",
        title: "Northern Plains",
        description: "Adapted for hot summers and cold, foggy winters.",
        image: "/north-city.png",
        region: "Indo-Gangetic",
        color: "from-amber-900 to-orange-900",
        listPoints: [
            "Air-purifying green belts",
            "Indoor community spaces",
            "Fog-resistant lighting",
            "Heated public shelters",
            "Dust-suppressing street design"
        ]
    },
    {
        id: "south",
        title: "Southern & Coastal",
        description: "Designed for hot-humid climates, monsoons, and cyclones.",
        image: "/south-city.png",
        region: "Peninsula",
        color: "from-teal-900 to-emerald-900",
        listPoints: [
            "Elevated & ventilated buildings",
            "Mangrove & green buffers",
            "Rainwater harvesting",
            "Flood-resilient drainage",
            "Shaded walkways & sea breeze corridors"
        ]
    },
    {
        id: "west",
        title: "Western Arid",
        description: "Built for water scarcity and hot-dry conditions.",
        image: "/west-city.png",
        region: "Arid & Semi-Arid",
        color: "from-yellow-900 to-amber-900",
        listPoints: [
            "Desert cooling architecture (Courtyards)",
            "Thick walls for insulation",
            "Water conservation (Drip irrigation)",
            "Recycled water usage",
            "Dust-resistant xeriscaping"
        ]
    },
    {
        id: "east",
        title: "Eastern & Hilly",
        description: "Tailored for humidity, heavy rainfall, and varied elevations.",
        image: "/east-city.png",
        region: "Northeast & Central",
        color: "from-green-900 to-lime-900",
        listPoints: [
            "Slope-stable housing",
            "Terraced parks & forest buffers",
            "Biodiversity corridors",
            "Earthquake-resistant design",
            "Hill-friendly mobility (Funiculars)"
        ]
    },
];

export default function DiversityCarousel() {
    const [index, setIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    const nextSlide = () => {
        setDirection(1);
        setIndex((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setDirection(-1);
        setIndex((prev) => (prev - 1 + slides.length) % slides.length);
    };

    const variants = {
        enter: (direction) => ({
            x: direction > 0 ? 1000 : -1000,
            opacity: 0,
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1,
        },
        exit: (direction) => ({
            zIndex: 0,
            x: direction < 0 ? 1000 : -1000,
            opacity: 0,
        }),
    };

    const currentSlide = slides[index];

    return (
        <section className="relative w-full h-[800px] bg-black overflow-hidden group">
            <AnimatePresence initial={false} custom={direction}>
                <motion.div
                    key={index}
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                        x: { type: "spring", stiffness: 300, damping: 30 },
                        opacity: { duration: 0.2 },
                    }}
                    className="absolute inset-0 w-full h-full"
                >
                    {/* Background Image */}
                    <div
                        className="absolute inset-0 w-full h-full bg-cover bg-center transition-transform duration-1000 hover:scale-105"
                        style={{ backgroundImage: `url(${currentSlide.image})` }}
                    />

                    {/* Gradient Overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-t ${currentSlide.color} opacity-90 mix-blend-multiply`} />
                    <div className="absolute inset-0 bg-black/30" />

                    {/* Content */}
                    <div className="absolute inset-0 flex items-center justify-center p-6 md:p-16">
                        <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">

                            {/* Left Column: Title & Main Text */}
                            <div className="text-white space-y-6">
                                <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-1.5 rounded-full text-sm font-semibold uppercase tracking-wider">
                                    <MapPin className="w-4 h-4" />
                                    {currentSlide.region}
                                </div>
                                <h2 className="text-5xl md:text-6xl font-bold leading-tight">
                                    {currentSlide.title}
                                </h2>
                                <p className="text-lg md:text-xl text-gray-200 leading-relaxed max-w-lg">
                                    {currentSlide.description}
                                </p>
                            </div>

                            {/* Right Column: List (if exists) */}
                            {currentSlide.listPoints && (
                                <div className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-2xl shadow-2xl">
                                    <h3 className="text-xl font-semibold text-white mb-6 border-b border-white/20 pb-2">Key Attributes</h3>
                                    <ul className="space-y-3">
                                        {currentSlide.listPoints.map((point, idx) => (
                                            <li key={idx} className="flex items-start gap-3 text-gray-100">
                                                <CheckCircle2 className="w-5 h-5 text-green-400 shrink-0 mt-0.5" />
                                                <span className="text-base">{point}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>
                </motion.div>
            </AnimatePresence>

            {/* Navigation Controls */}
            <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/30 text-white p-3 rounded-full backdrop-blur-md transition-all z-10"
            >
                <ChevronLeft className="w-8 h-8" />
            </button>
            <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/30 text-white p-3 rounded-full backdrop-blur-md transition-all z-10"
            >
                <ChevronRight className="w-8 h-8" />
            </button>

            {/* Progress Dots */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-10">
                {slides.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => {
                            setDirection(idx > index ? 1 : -1);
                            setIndex(idx);
                        }}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${idx === index ? "bg-white w-8" : "bg-white/40 hover:bg-white/70"
                            }`}
                    />
                ))}
            </div>
        </section>
    );
}
