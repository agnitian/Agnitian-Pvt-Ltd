import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Zap, Users, Lock, ChevronDown } from 'lucide-react';

const trustSignals = [
    {
        id: 'security',
        icon: Shield,
        title: 'Security First',
        summary: 'Enterprise-grade protection for your data',
        details: 'We implement industry-leading security practices including end-to-end encryption, regular security audits, SOC 2 compliance, and zero-trust architecture. Your data never leaves your control.',
        color: 'bg-emerald-500'
    },
    {
        id: 'scale',
        icon: Zap,
        title: 'Built to Scale',
        summary: 'From prototype to global deployment',
        details: 'Our architectures handle everything from startup MVPs to enterprise workloads processing millions of requests. Cloud-native design ensures you only pay for what you use.',
        color: 'bg-blue-500'
    },
    {
        id: 'human',
        icon: Users,
        title: 'Human-Centered',
        summary: 'AI that augments, not replaces',
        details: 'We design AI systems that enhance human capabilities while maintaining transparency and control. Every system includes explainability features and human-in-the-loop options.',
        color: 'bg-violet-500'
    },
    {
        id: 'responsible',
        icon: Lock,
        title: 'Responsible AI',
        summary: 'Ethical by design, compliant by default',
        details: 'Our AI systems are built with bias detection, fairness metrics, and compliance frameworks baked in. We follow responsible AI principles and help you meet regulatory requirements.',
        color: 'bg-amber-500'
    }
];

export default function TrustSection() {
    const [expandedId, setExpandedId] = useState(null);

    return (
        <section
  className="py-32 text-white"
  style={{ background: "var(--header-box)" }}
>
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-blue-400 font-medium text-sm tracking-wider uppercase mb-4 block">
                        Trust & Values
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Why Choose <span className="text-blue-400">AGNITIAN</span>
                    </h2>
                    <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                        We build trust through transparency, security, and a commitment to responsible AI.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-6">
                    {trustSignals.map((signal, idx) => (
                        <motion.div
                            key={signal.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="group"
                        >
                            <div
                                onClick={() => setExpandedId(expandedId === signal.id ? null : signal.id)}
                                className="relative p-6 rounded-2xl bg-slate-800/50 border border-slate-700 hover:border-slate-600 cursor-pointer transition-all duration-300"
                            >
                                <div className="flex items-start gap-4">
                                    <div className={`p-3 rounded-xl ${signal.color} text-white`}>
                                        <signal.icon className="w-6 h-6" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-lg font-semibold text-white mb-1">{signal.title}</h3>
                                        <p className="text-slate-400 text-sm">{signal.summary}</p>
                                    </div>
                                    <ChevronDown
                                        className={`w-5 h-5 text-slate-500 transition-transform duration-300 ${expandedId === signal.id ? 'rotate-180' : ''
                                            }`}
                                    />
                                </div>

                                <AnimatePresence>
                                    {expandedId === signal.id && (
                                        <motion.div
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: 'auto' }}
                                            exit={{ opacity: 0, height: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="overflow-hidden"
                                        >
                                            <div className="pt-4 mt-4 border-t border-slate-700">
                                                <p className="text-slate-300 leading-relaxed">{signal.details}</p>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </motion.div>
                    ))}
                </div>

              
            </div>
        </section>
    );
}

