import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, X } from 'lucide-react';
import { Button } from '@/Components/ui/button';
import { services } from '@/lib/description';

export default function HomeSection() {
    const [expandedId, setExpandedId] = useState(null);
    const expanded = services.find(c => c.id === expandedId);

    return (
        <section className="py-32 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                        Technology That <span className="text-blue-600">Empowers</span>
                    </h2>
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                        Explore our core technologies — each designed to solve real problems and create lasting value.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((cap, idx) => (
                        <motion.div
                            key={cap.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            onClick={() => setExpandedId(cap.id)}
                            className="group relative p-6 rounded-2xl border border-slate-200 bg-white hover:border-blue-200 hover:shadow-xl hover:shadow-blue-100/50 cursor-pointer transition-all duration-300"
                        >
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-xl bg-blue-50 text-blue-600 group-hover:bg-blue-100 transition-colors">
                                    <cap.icon className="w-6 h-6" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-lg font-semibold text-slate-900 mb-1 group-hover:text-blue-600 transition-colors">
                                        {cap.title}
                                    </h3>
                                    <p className="text-sm text-slate-600">{cap.summary}</p>
                                </div>
                                <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Expanded View Modal */}
                <AnimatePresence>
                    {expanded && (
                        <>
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-50"
                                onClick={() => setExpandedId(null)}
                            />
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                                className="fixed inset-x-4 top-1/2 -translate-y-1/2 max-w-3xl mx-auto bg-white rounded-3xl shadow-2xl z-50 overflow-hidden"
                            >
                                <div className="p-8">
                                    <div className="flex items-start justify-between mb-6">
                                        <div className="flex items-center gap-4">
                                            <div className="p-4 rounded-2xl bg-blue-50 text-blue-600">
                                                <expanded.icon className="w-8 h-8" />
                                            </div>
                                            <div>
                                                <h3 className="text-2xl font-bold text-slate-900">{expanded.title}</h3>
                                                <p className="text-slate-600">{expanded.summary}</p>
                                            </div>
                                        </div>
                                        <button
                                            onClick={() => setExpandedId(null)}
                                            className="p-2 rounded-full hover:bg-slate-100 transition-colors"
                                        >
                                            <X className="w-5 h-5 text-slate-500" />
                                        </button>
                                    </div>

                                    <p className="text-slate-600 mb-8 leading-relaxed">{expanded.description}</p>

                                    <div className="grid md:grid-cols-2 gap-8">
                                        <div>
                                            <h4 className="font-semibold text-slate-900 mb-3">Key Features</h4>
                                            <ul className="space-y-2">
                                                {expanded.features.map((feature, idx) => (
                                                    <li key={idx} className="flex items-center gap-2 text-slate-600">
                                                        <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                                                        {feature}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-slate-900 mb-3">Use Cases</h4>
                                            <ul className="space-y-2">
                                                {expanded.useCases.map((useCase, idx) => (
                                                    <li key={idx} className="flex items-center gap-2 text-slate-600">
                                                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
                                                        {useCase}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
}

