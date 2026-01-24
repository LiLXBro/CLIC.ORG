"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Cloud, Stars, Sparkles } from "@react-three/drei";
import { useRef } from "react";

function MovingClouds() {
    const group = useRef();
    useFrame((state, delta) => {
        if (group.current) {
            group.current.rotation.y += delta * 0.05;
        }
    });

    return (
        <group ref={group}>
            <Cloud position={[-10, 2, -15]} speed={0.2} opacity={0.5} />
            <Cloud position={[10, 5, -10]} speed={0.2} opacity={0.5} />
            <Cloud position={[0, 10, -20]} speed={0.2} opacity={0.5} />
            <Cloud position={[-5, -2, -10]} speed={0.2} opacity={0.3} />
        </group>
    );
}

export default function ThreeBackground() {
    return (
        <div className="absolute inset-0 z-0 pointer-events-none">
            <Canvas camera={{ position: [0, 0, 10], fov: 75 }}>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} />
                <MovingClouds />
                <Sparkles
                    count={50}
                    scale={12}
                    size={4}
                    speed={0.4}
                    opacity={0.5}
                    color="#fff" // Clean air particles
                />
            </Canvas>
        </div>
    );
}
