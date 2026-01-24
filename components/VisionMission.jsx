"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";

// Lazy load the 3D background with correct path alias
const ThreeBackground = dynamic(() => import("@/components/ThreeBackground"), {
    ssr: false,
    loading: () => <div className="absolute inset-0 bg-transparent" />, // Placeholder
});

const VisionMission = () => {
    return (
        <section className="relative w-full min-h-screen overflow-hidden flex flex-col justify-center items-center py-20">
            {/* Background Image - Immediate Load */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-40 mix-blend-overlay"
                style={{ backgroundImage: 'url("/vision-bg.png")' }}
            />

            {/* 3D Background - Lazy Loaded overlay */}
            <ThreeBackground />

            {/* Content Container */}
            <div className="relative z-10 container mx-auto px-4 flex flex-col gap-12 max-w-5xl">

                {/* Vision Card */}
                <motion.div
                    className="vm-card w-full bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 md:p-12 shadow-xl hover:shadow-2xl transition-shadow duration-300"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <div className="flex flex-col md:flex-row gap-6 items-start">
                        <div className="md:w-1/4">
                            <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 mb-4">Vision</h2>
                        </div>
                        <div className="md:w-3/4">
                            <p className="text-lg md:text-xl text-gray-800 leading-relaxed font-medium">
                                Citizens for Liveable Indian Cities (CLIC) envisions an India where the next wave of urban growth is directed into 250 thoughtfully planned greenfield cities, decongesting overburdened megacities and creating compact, breathable, safe, and aesthetically pleasing urban centres. These cities will enable every resident to live a healthy, balanced life — working a 7 am to 7 pm day, spending meaningful time with family, pursuing excellence in their chosen field, practising mindfulness and spirituality, and enjoying well-maintained green spaces, cultural facilities, and community life — all within a traditional yet modern family-oriented environment.
                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* Mission Card */}
                <motion.div
                    className="vm-card w-full bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 md:p-12 shadow-xl hover:shadow-2xl transition-shadow duration-300"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                >
                    <div className="flex flex-col md:flex-row gap-6 items-start">
                        <div className="md:w-1/4">
                            <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-500 mb-4">Mission</h2>
                        </div>
                        <div className="md:w-3/4">
                            <p className="text-lg md:text-xl text-gray-800 leading-relaxed font-medium">
                                CLIC exists to advocate for and catalyse the creation of 250 new planned greenfield cities across India by 2047. Through citizen awareness, grassroots mobilisation, data-driven proposals, and constructive engagement with governments, policymakers, industry, and influencers, we seek to shift urbanisation from reactive mega-city sprawl to proactive, human-scale development. Our mission is to ensure future generations inherit cities that prioritise clean air, short commutes, safety, aesthetic harmony, family well-being, personal growth, and spiritual fulfilment — transforming liveability from a privilege into a universal right.
                            </p>
                        </div>
                    </div>
                </motion.div>

            </div>

            {/* Decorative gradient overlay at bottom */}
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent pointer-events-none" />
        </section>
    );
};

export default VisionMission;
