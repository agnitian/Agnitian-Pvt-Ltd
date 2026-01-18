import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import { Button } from '@/Components/ui/button';
import AnimatedBackground from '@/Components/ui/AnimatedBackground';

export default function HeroSection({ onOpenContact }) {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            <AnimatedBackground />

            <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8"
                    >
                        <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                        <span className="text-sm text-blue-200 font-medium">Building Systems That Truly Matter</span>
                    </motion.div>

                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight">
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.6 }}
                            className="block"
                        >
                            Intelligent
                        </motion.span>
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.6 }}
                            className="block bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent"
                        >
                            Systems
                        </motion.span>
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5, duration: 0.6 }}
                            className="block text-slate-300"
                        >
                            for Tomorrow
                        </motion.span>
                    </h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                        className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed"
                    >
                        We architect AI-powered platforms that transform how organizations
                        think, operate, and scale. Not just technology — purposeful systems.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7, duration: 0.6 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4"
                    >
                        <Button
                            size="lg"
                            onClick={onOpenContact}
                            className="bg-white text-slate-900 hover:bg-slate-100 px-8 py-6 text-lg font-medium rounded-xl group transition-all duration-300 hover:shadow-[0_0_40px_rgba(255,255,255,0.3)]"
                        >
                            Start a Conversation
                            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Button>

                        <Button
                            size="lg"
                            variant="ghost"
                            className="text-slate-300 hover:text-white hover:bg-white/10 px-8 py-6 text-lg font-medium rounded-xl"
                        >
                            <Play className="w-5 h-5 mr-2" />
                            Watch Overview
                        </Button>
                    </motion.div>
                </motion.div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2, duration: 0.6 }}
                    className="absolute bottom-12 left-1/2 -translate-x-1/2"
                >
                    <div className="w-6 h-10 rounded-full border-2 border-slate-500 flex items-start justify-center p-2">
                        <motion.div
                            animate={{ y: [0, 12, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                            className="w-1.5 h-1.5 rounded-full bg-slate-400"
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

