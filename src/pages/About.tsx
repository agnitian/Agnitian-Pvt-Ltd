import { useState } from 'react';
import { motion } from 'framer-motion';
import {
    Target, Users, Shield, Sparkles, Heart, Zap,
    ArrowRight, CheckCircle2, Quote
} from 'lucide-react';
import { Button } from '@/Components/ui/button';
import ConversationPanel from '@/Components/contact/ConversationPanel';

const values = [
    {
        icon: Target,
        title: 'Purpose-Driven',
        description: 'Every system we build serves a meaningful purpose. We prioritize impact over features, outcomes over outputs.'
    },
    {
        icon: Shield,
        title: 'Responsible Innovation',
        description: 'We build AI that\'s ethical, transparent, and aligned with human values. Security and privacy are non-negotiable.'
    },
    {
        icon: Users,
        title: 'Human-Centered',
        description: 'Technology should augment human Home, not replace them. We design for collaboration, not automation.'
    },
    {
        icon: Sparkles,
        title: 'Excellence',
        description: 'We craft solutions with precision and care. No shortcuts, no compromises — only work we\'re proud of.'
    }
];

const approach = [
    {
        step: '01',
        title: 'Deep Understanding',
        description: 'We start by truly understanding your context, challenges, and aspirations. No templates, no assumptions.'
    },
    {
        step: '02',
        title: 'System Design',
        description: 'We architect solutions that are scalable, maintainable, and aligned with your long-term vision.'
    },
    {
        step: '03',
        title: 'Iterative Delivery',
        description: 'We build in sprints, delivering value continuously while adapting to learnings and feedback.'
    },
    {
        step: '04',
        title: 'Knowledge Transfer',
        description: 'We empower your team to own and evolve the systems we build together.'
    }
];

export default function About() {
    const [isContactOpen, setIsContactOpen] = useState(false);

    return (
        <div className="min-h-screen bg-white">
            {/* Hero */}
            <section className="relative  py-32 overflow-hidden" style={{ background: 'linear-gradient(135deg, #636669 0%, #5b876c 50%, #0d0e12 100%)' }}>
                <div className="absolute inset-0 opacity-30">
                    <div className="absolute top-1/3 right-1/3 w-96 h-96 bg-emerald-500 rounded-full blur-3xl" />
                    <div className="absolute bottom-1/3 left-1/3 w-96 h-96 bg-blue-500 rounded-full blur-3xl" />
                </div>

                <div className="relative max-w-7xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-3xl"
                    >
                        <span className="text-black font-medium text-sm tracking-wider uppercase mb-4 block">
                            About Us
                        </span>
                        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                            Building Systems
                            <span className="block text-blue-400">That Truly Matter</span>
                        </h1>
                        <p className="text-xl text-slate-400 leading-relaxed">
                            We're a team of technologists, strategists, and builders united by a
                            belief that AI should serve humanity's highest aspirations.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Mission */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <span className="text-blue-600 font-medium text-sm tracking-wider uppercase mb-4 block">
                                Our Mission
                            </span>
                            <h2 className="text-4xl font-bold text-slate-900 mb-6">
                                Transforming How Organizations Think, Operate & Scale
                            </h2>
                            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                                We believe AI is more than technology — it's a catalyst for meaningful
                                transformation. Our mission is to help organizations harness this power
                                responsibly, building systems that create lasting value.
                            </p>
                            <p className="text-lg text-slate-600 leading-relaxed">
                                Every engagement begins with a simple question: What truly matters?
                                From there, we architect solutions that align with your vision and
                                scale with your ambitions.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-3xl transform rotate-3 opacity-20" />
                            <div className="relative bg-slate-50 rounded-3xl p-8 border border-slate-200">
                                <Quote className="w-12 h-12 text-blue-600 mb-6" />
                                <blockquote className="text-2xl font-medium text-slate-900 mb-6 leading-relaxed">
                                    "We don't build technology for its own sake. We build systems that
                                    solve real problems, create real impact, and stand the test of time."
                                </blockquote>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-cyan-500" />
                                    <div>
                                        <div className="font-semibold text-slate-900">AGNITIAN Team</div>
                                        <div className="text-sm text-slate-500">Founding Philosophy</div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="py-20 bg-slate-50">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <span className="text-blue-600 font-medium text-sm tracking-wider uppercase mb-4 block">
                            Our Values
                        </span>
                        <h2 className="text-4xl font-bold text-slate-900 mb-6">
                            Principles That <span className="text-blue-600">Guide Us</span>
                        </h2>
                        <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                            These aren't just words on a page — they shape every decision we make.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {values.map((value, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="bg-white rounded-2xl p-6 border border-slate-200 hover:shadow-lg transition-all duration-300"
                            >
                                <div className="p-3 rounded-xl bg-blue-50 text-blue-600 w-fit mb-4">
                                    <value.icon className="w-6 h-6" />
                                </div>
                                <h3 className="text-lg font-semibold text-slate-900 mb-2">{value.title}</h3>
                                <p className="text-slate-600 text-sm leading-relaxed">{value.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Approach */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <span className="text-blue-600 font-medium text-sm tracking-wider uppercase mb-4 block">
                            Our Approach
                        </span>
                        <h2 className="text-4xl font-bold text-slate-900 mb-6">
                            How We <span className="text-blue-600">Work</span>
                        </h2>
                        <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                            A systematic approach that ensures every project delivers meaningful outcomes.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {approach.map((phase, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="relative"
                            >
                                <div className="text-6xl font-bold text-slate-100 mb-4">{phase.step}</div>
                                <h3 className="text-xl font-semibold text-slate-900 mb-2">{phase.title}</h3>
                                <p className="text-slate-600">{phase.description}</p>

                                {idx < approach.length - 1 && (
                                    <div className="hidden lg:block absolute top-8 right-0 w-full h-0.5 bg-gradient-to-r from-slate-200 to-transparent" />
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-slate-900">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl font-bold text-white mb-6">
                            Ready to Build Something Meaningful?
                        </h2>
                        <p className="text-xl text-slate-400 mb-10">
                            Let's discuss how we can help you achieve your vision.
                        </p>
                        <Button
                            size="lg"
                            onClick={() => setIsContactOpen(true)}
                            className="bg-white text-slate-900 hover:bg-slate-100 px-10 py-6 text-lg font-medium rounded-xl"
                        >
                            Start a Conversation
                            <ArrowRight className="w-5 h-5 ml-2" />
                        </Button>
                    </motion.div>
                </div>
            </section>

            <ConversationPanel
                isOpen={isContactOpen}
                onClose={() => setIsContactOpen(false)}
            />
        </div>
    );
}


