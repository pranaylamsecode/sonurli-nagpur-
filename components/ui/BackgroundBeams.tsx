"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

export const BackgroundBeams = ({ className }: { className?: string }) => {
    return (
        <div
            className={cn(
                "absolute h-full w-full inset-0 overflow-hidden bg-slate-950",
                className
            )}
        >
            <div className="absolute h-full w-full inset-0 bg-slate-950 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                transition={{ duration: 1 }}
                className="absolute inset-0 h-full w-full"
            >
                {[...Array(5)].map((_, i) => (
                    <motion.div
                        key={i}
                        className={cn(
                            "absolute top-0 left-1/2 h-full w-[1px] bg-gradient-to-b from-transparent via-brand-500 to-transparent opacity-20",
                            i % 2 === 0 ? "via-purple-500" : "via-blue-500"
                        )}
                        style={{
                            left: `${20 + i * 15}%`,
                        }}
                        animate={{
                            y: ["-100%", "100%"],
                            opacity: [0, 1, 0],
                        }}
                        transition={{
                            duration: Math.random() * 5 + 5,
                            repeat: Infinity,
                            ease: "linear",
                            delay: Math.random() * 5,
                        }}
                    />
                ))}
                {[...Array(3)].map((_, i) => (
                    <motion.div
                        key={`h-${i}`}
                        className={cn(
                            "absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-500 to-transparent opacity-20",
                            i % 2 === 0 ? "via-cyan-500" : "via-indigo-500"
                        )}
                        style={{
                            top: `${30 + i * 20}%`,
                        }}
                        animate={{
                            x: ["-100%", "100%"],
                            opacity: [0, 1, 0],
                        }}
                        transition={{
                            duration: Math.random() * 7 + 7,
                            repeat: Infinity,
                            ease: "linear",
                            delay: Math.random() * 5,
                        }}
                    />
                ))}
            </motion.div>
            <div className="absolute inset-0 bg-slate-950/80" />
        </div>
    );
};
