import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Layers, ArrowRight, X, Check, TrendingUp
} from 'lucide-react';
import { Button } from '@/Components/ui/button';
import { solutions } from '@/lib/description';

export default function SolutionsSection({ onOpenContact }) {
    const [selectedSolution, setSelectedSolution] = useState(null);
    const selected = solutions.find(s => s.id === selectedSolution);

    return (
        <section className="py-32 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-blue-600 font-medium text-sm tracking-wider uppercase mb-4 block">
                        Solutions
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                        Intelligence Into <span className="text-blue-600">Systems</span>
                    </h2>
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                        We turn intelligence into comprehensive systems that understand, decide, automate, and scale across your business.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                    {solutions.map((solution, idx) => (
                        <motion.div
                            key={solution.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            onClick={() => setSelectedSolution(solution.id)}
                            className="group relative p-8 rounded-3xl border border-slate-200 bg-white cursor-pointer hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-500 overflow-hidden"
                        >
                            {/* Background Gradient on Hover */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${solution.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

                            <div className="relative">
                                <div className="flex items-start justify-between mb-6">
                                    <div className={`p-4 rounded-2xl bg-gradient-to-br ${solution.color} text-white`}>
                                        <solution.icon className="w-8 h-8" />
                                    </div>
                                    <div className="flex items-center gap-2 text-sm text-slate-500">
                                        <Layers className="w-4 h-4" />
                                        {solution.components.length} Components
                                    </div>
                                </div>

                                <h3 className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                                    {solution.title}
                                </h3>
                                <p className="text-blue-600 font-medium mb-4">{solution.tagline}</p>
                                <p className="text-slate-600 mb-6">{solution.description}</p>

                                {/* Components Preview */}
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {solution.components.slice(0, 3).map((comp, cidx) => (
                                        <span key={cidx} className="px-3 py-1.5 text-xs font-medium bg-slate-100 text-slate-600 rounded-full">
                                            {typeof comp === 'string' ? comp : comp.name}
                                        </span>
                                    ))}
                                    {solution.components.length > 3 && (
                                        <span className="px-3 py-1.5 text-xs font-medium bg-blue-50 text-blue-600 rounded-full">
                                            +{solution.components.length - 3} more
                                        </span>
                                    )}
                                </div>

                                <div className="flex items-center text-blue-600 font-medium group-hover:gap-3 gap-2 transition-all">
                                    Explore Solution
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Solution Modal */}
                <AnimatePresence>
                    {selected && (
                        <>
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50"
                                onClick={() => setSelectedSolution(null)}
                            />
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                                className="fixed inset-4 md:inset-8 lg:inset-12 bg-white rounded-3xl shadow-2xl z-50 overflow-hidden flex flex-col"
                            >
                                {/* Header with gradient */}
                                <div className={`bg-gradient-to-r ${selected.color} p-8 text-white flex-shrink-0`}>
                                    <div className="flex items-start justify-between">
                                        <div className="flex items-center gap-4">
                                            <div className="p-4 rounded-2xl bg-white/20 backdrop-blur-sm">
                                                <selected.icon className="w-8 h-8" />
                                            </div>
                                            <div>
                                                <h3 className="text-2xl font-bold">{selected.title}</h3>
                                                <p className="text-white/80">{selected.tagline}</p>
                                            </div>
                                        </div>
                                        <button
                                            onClick={() => setSelectedSolution(null)}
                                            className="p-2 rounded-full hover:bg-white/20 transition-colors flex-shrink-0"
                                        >
                                            <X className="w-5 h-5" />
                                        </button>
                                    </div>
                                </div>

                                <div className="flex-1 overflow-y-auto p-8 bg-slate-50">
                                    <p className="text-slate-700 text-lg mb-8">{selected.description}</p>

                                    <div className="grid md:grid-cols-2 gap-8 mb-8">
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.1 }}
                                            className="p-6 rounded-xl bg-white border border-slate-200"
                                        >
                                            <div className="flex items-center gap-3 mb-4">
                                                <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${selected.color}`} />
                                                <span className="font-semibold text-slate-900">Components</span>
                                            </div>
                                            <ul className="space-y-2">
                                                {selected.components.map((comp, idx) => (
                                                    <motion.li 
                                                        key={idx} 
                                                        initial={{ opacity: 0, x: -10 }}
                                                        animate={{ opacity: 1, x: 0 }}
                                                        transition={{ delay: 0.15 + idx * 0.05 }}
                                                        className="text-sm text-slate-600 flex items-center gap-2"
                                                    >
                                                        <Check className="w-4 h-4 text-blue-600 flex-shrink-0" />
                                                        {typeof comp === 'string' ? comp : comp.name}
                                                    </motion.li>
                                                ))}
                                            </ul>
                                        </motion.div>

                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.2 }}
                                            className="p-6 rounded-xl bg-white border border-slate-200"
                                        >
                                            <div className="flex items-center gap-3 mb-4">
                                                <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${selected.color}`} />
                                                <span className="font-semibold text-slate-900">Key Benefits</span>
                                            </div>
                                            <ul className="space-y-2">
                                                {selected.benefits.map((benefit, idx) => (
                                                    <motion.li 
                                                        key={idx} 
                                                        initial={{ opacity: 0, x: -10 }}
                                                        animate={{ opacity: 1, x: 0 }}
                                                        transition={{ delay: 0.25 + idx * 0.05 }}
                                                        className="text-sm text-slate-600 flex items-center gap-2"
                                                    >
                                                        <Check className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                                                        {benefit}
                                                    </motion.li>
                                                ))}
                                            </ul>
                                        </motion.div>
                                    </div>

                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.35 }}
                                        className="p-6 rounded-xl bg-white border border-slate-200 mb-8"
                                    >
                                        <div className="flex items-center gap-3 mb-3">
                                            <TrendingUp className="w-5 h-5 text-blue-600" />
                                            <span className="font-semibold text-slate-900">Best For</span>
                                        </div>
                                        <p className="text-sm text-slate-600">{selected.forWhom}</p>
                                    </motion.div>

                                    <div className="flex flex-col sm:flex-row gap-4">
                                        <Button
                                            onClick={() => {
                                                setSelectedSolution(null);
                                                onOpenContact();
                                            }}
                                            className="bg-blue-600 hover:bg-blue-700 text-white px-8"
                                        >
                                            Discuss This Solution
                                            <ArrowRight className="w-4 h-4 ml-2" />
                                        </Button>
                                        <Button 
                                            variant="outline" 
                                            onClick={() => setSelectedSolution(null)}
                                            className="border-slate-200"
                                        >
                                            Close
                                        </Button>
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

