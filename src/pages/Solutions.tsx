import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    ArrowRight, ChevronRight, TrendingUp, Check, X, Layers, Target
} from 'lucide-react';
import { Button } from '@/Components/ui/button';
import ConversationPanel from '@/Components/contact/ConversationPanel';
import { solutions } from '@/lib/description';

export default function Solutions() {
    const [selectedSolution, setSelectedSolution] = useState(null);
    const [isContactOpen, setIsContactOpen] = useState(false);

    const selected = solutions.find(s => s.id === selectedSolution);

    return (
        <div className="min-h-screen bg-white">
            {/* Hero */}
            <section className="relative  py-32 overflow-hidden" style={{ background: 'linear-gradient(135deg, #636669 0%, #5b876c 50%, #0d0e12 100%)' }}>
                <div className="absolute inset-0 opacity-30">
                    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-500 rounded-full blur-3xl" />
                    <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl" />
                </div>

                <div className="relative max-w-7xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-3xl"
                    >
                        <span className="text-white font-medium text-sm tracking-wider uppercase mb-4 block">
                            Solutions
                        </span>
                        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                            Intelligence
                            <span className="block text-blue-400">Into Systems</span>
                        </h1>
                        <p className="text-xl text-slate-300 leading-relaxed">
                            We design platforms that understand, decide, automate, and scale—grounded in real-world use cases.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Solutions Navigator */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Solution Categories</h2>
                        <p className="text-slate-600 text-lg max-w-2xl">Choose the solution that aligns with your organizational needs and goals.</p>
                    </div>
                    <div className="grid lg:grid-cols-3 gap-6">
                        {solutions.map((solution, idx) => (
                            <motion.div
                                key={solution.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                onClick={() => setSelectedSolution(solution.id)}
                                className="group relative rounded-2xl border border-slate-200 bg-white cursor-pointer hover:shadow-2xl hover:border-blue-200 transition-all duration-500 overflow-hidden"
                            >
                                {/* Background Gradient */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${solution.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

                                <div className="p-7 relative flex flex-col h-full">
                                    {/* Icon & Header */}
                                    <div className="mb-6">
                                        <div className={`p-3 rounded-xl bg-gradient-to-br ${solution.color} text-white w-fit mb-4`}>
                                            <solution.icon className="w-6 h-6" />
                                        </div>
                                        <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                                            {solution.title}
                                        </h3>
                                        <p className="text-blue-600 font-medium text-sm mb-3">{solution.tagline}</p>
                                        <p className="text-slate-600 text-sm leading-relaxed mb-4">
                                            {solution.description}
                                        </p>
                                    </div>

                                    {/* Components Preview */}
                                    <div className="mb-6 flex-1">
                                        <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">Key Components</div>
                                        <div className="flex flex-wrap gap-2">
                                            {solution.components.slice(0, 3).map((comp, cidx) => (
                                                <span
                                                    key={cidx}
                                                    className="px-2.5 py-1 text-xs font-medium bg-slate-100 text-slate-700 rounded-full"
                                                >
                                                    {comp.name}
                                                </span>
                                            ))}
                                            {solution.components.length > 3 && (
                                                <span className="px-2.5 py-1 text-xs font-medium bg-slate-100 text-slate-500 rounded-full">
                                                    +{solution.components.length - 3} more
                                                </span>
                                            )}
                                        </div>
                                    </div>

                                    {/* CTA */}
                                    <div className="flex items-center text-blue-600 font-medium group-hover:gap-3 gap-2 transition-all mt-auto">
                                        Explore
                                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Solution Detail Modal */}
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
                            initial={{ opacity: 0, y: 100 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 100 }}
                            className="fixed inset-0 md:inset-0 lg:inset-12 bg-white rounded-3xl shadow-2xl z-50 overflow-hidden flex flex-col max-h-screen md:max-h-[90vh]"
                        >
                            {/* Header */}
                            <div className={`bg-gradient-to-r ${selected.color} p-8 md:p-12 text-white flex-shrink-0`}>
                                <div className="max-w-6xl mx-auto">
                                    <div className="flex items-start justify-between gap-6">
                                        <div className="flex items-center gap-6 flex-1">
                                            <div className="p-4 rounded-2xl bg-white/20 backdrop-blur-sm hidden sm:flex">
                                                <selected.icon className="w-10 h-10" />
                                            </div>
                                            <div>
                                                <h2 className="text-3xl md:text-4xl font-bold leading-tight">{selected.title}</h2>
                                                <p className="text-white/80 text-lg mt-2">{selected.tagline}</p>
                                            </div>
                                        </div>
                                        <button
                                            onClick={() => setSelectedSolution(null)}
                                            className="p-2 hover:bg-white/20 transition-colors text-white flex-shrink-0"
                                        >
                                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="flex-1 overflow-y-auto p-8 md:p-12 bg-slate-50">
                                <div className="max-w-6xl mx-auto">
                                    <p className="text-lg text-slate-700 mb-12 leading-relaxed">
                                        {selected.description}
                                    </p>

                                    <div className="grid md:grid-cols-2 gap-12 mb-12">
                                        {/* Components */}
                                        <div>
                                            <h3 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3">
                                                <div className="p-2 rounded-lg bg-blue-100">
                                                    <Layers className="w-5 h-5 text-blue-600" />
                                                </div>
                                                System Components
                                            </h3>
                                            <div className="space-y-4">
                                                {selected.components.map((comp, idx) => (
                                                    <motion.div
                                                        key={idx}
                                                        initial={{ opacity: 0, x: -20 }}
                                                        animate={{ opacity: 1, x: 0 }}
                                                        transition={{ delay: idx * 0.05 }}
                                                        className="p-5 rounded-xl bg-white border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all"
                                                    >
                                                        <h4 className="font-semibold text-slate-900 text-base">{comp.name}</h4>
                                                        <p className="text-sm text-slate-600 mt-2">{comp.desc}</p>
                                                    </motion.div>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Benefits & For Whom */}
                                        <div className="space-y-12">
                                            <div>
                                                <h3 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3">
                                                    <div className="p-2 rounded-lg bg-emerald-100">
                                                        <Target className="w-5 h-5 text-emerald-600" />
                                                    </div>
                                                    Key Benefits
                                                </h3>
                                                <div className="space-y-4">
                                                    {selected.benefits.map((benefit, idx) => (
                                                        <motion.div
                                                            key={idx}
                                                            initial={{ opacity: 0, x: 20 }}
                                                            animate={{ opacity: 1, x: 0 }}
                                                            transition={{ delay: idx * 0.05 }}
                                                            className="flex items-start gap-4"
                                                        >
                                                            <div className="p-2 rounded-full bg-emerald-100 flex-shrink-0 mt-1">
                                                                <Check className="w-4 h-4 text-emerald-600" />
                                                            </div>
                                                            <span className="text-slate-700 font-medium">{benefit}</span>
                                                        </motion.div>
                                                    ))}
                                                </div>
                                            </div>

                                            <div className="p-6 rounded-2xl bg-white border-2 border-slate-200">
                                                <h4 className="font-bold text-slate-900 mb-3 text-lg">Perfect For</h4>
                                                <p className="text-slate-700">{selected.forWhom}</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Action Buttons */}
                                    <div className="flex flex-col sm:flex-row items-center gap-4 pt-8 border-t border-slate-200">
                                        <Button
                                            onClick={() => {
                                                setSelectedSolution(null);
                                                setIsContactOpen(true);
                                            }}
                                            size="lg"
                                            className="bg-blue-600 hover:bg-blue-700 text-white px-8 w-full sm:w-auto"
                                        >
                                            Discuss This Solution
                                            <ArrowRight className="w-4 h-4 ml-2" />
                                        </Button>
                                        <Button
                                            size="lg"
                                            variant="outline"
                                            onClick={() => setSelectedSolution(null)}
                                            className="w-full sm:w-auto"
                                        >
                                            Close
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>

            <ConversationPanel
                isOpen={isContactOpen}
                onClose={() => setIsContactOpen(false)}
            />
        </div>
    );
}


