import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import {
    ArrowRight, CheckCircle2
} from 'lucide-react';
import { Button } from '@/Components/ui/button';
import ConversationPanel from '@/Components/contact/ConversationPanel';
import { products } from '@/lib/description';

export default function Products() {
    const [activeProduct, setActiveProduct] = useState('almedics');
    const [isContactOpen, setIsContactOpen] = useState(false);
    const contentRefs = useRef({});

    const active = products.find(s => s.id === activeProduct);

    const scrollToProduct = (productId) => {
        setActiveProduct(productId);
        contentRefs.current[productId]?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    return (
        <div className="min-h-screen bg-white">
            {/* Hero */}
            <section className="relative py-32 overflow-hidden" style={{ background: 'linear-gradient(135deg, #636669 0%, #5b876c 50%, #0d0e12 100%)' }}>
                <div className="absolute inset-0 opacity-30">
                    <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl" />
                    <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-cyan-500 rounded-full blur-3xl" />
                </div>

                <div className="relative max-w-7xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-3xl"
                    >
                        <span className="text-white font-medium text-sm tracking-wider uppercase mb-4 block">
                            Our Ecosystem
                        </span>
                        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                            Intelligent Digital
                            <span className="block text-white">Products</span>
                        </h1>
                        <p className="text-xl text-slate-300 leading-relaxed">
                            Real-world platforms combining AI, automation, storytelling, and social impact.
                            Each product stands alone, yet works together as an ecosystem.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Products Content */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col lg:flex-row gap-12">
                        {/* Sticky Navigation */}
                        <div className="lg:w-80 flex-shrink-0">
                            <div className="lg:sticky lg:top-24">
                                <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-4">
                                    Our Products
                                </h3>
                                <nav className="space-y-2">
                                    {products.map((product) => (
                                        <button
                                            key={product.id}
                                            onClick={() => scrollToProduct(product.id)}
                                            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all duration-300 ${activeProduct === product.id
                                                    ? 'bg-blue-50 text-blue-600 border-l-4 border-blue-600'
                                                    : 'text-slate-600 hover:bg-slate-50'
                                                }`}
                                        >
                                            <product.icon className="w-5 h-5 flex-shrink-0" />
                                            <span className="font-medium text-sm">{product.title}</span>
                                        </button>
                                    ))}
                                </nav>

                                <div className="mt-8 p-6 rounded-2xl bg-slate-900 text-white">
                                    <h4 className="font-semibold mb-2">Need guidance?</h4>
                                    <p className="text-sm text-slate-400 mb-4">
                                        Not sure which product fits your needs? Let's discuss.
                                    </p>
                                    <Button
                                        onClick={() => setIsContactOpen(true)}
                                        className="w-full bg-white text-slate-900 hover:bg-slate-100"
                                    >
                                        Get in Touch
                                    </Button>
                                </div>
                            </div>
                        </div>

                        {/* Product Details */}
                        <div className="flex-1 space-y-24">
                            {products.map((product, idx) => (
                                <motion.div
                                    key={product.id}
                                    ref={(el) => (contentRefs.current[product.id] = el)}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: '-100px' }}
                                    onViewportEnter={() => setActiveProduct(product.id)}
                                    className="scroll-mt-24"
                                >
                                    <div className="flex items-start gap-6 mb-8">
                                        <div className={`p-4 rounded-2xl bg-gradient-to-br ${product.color} text-white`}>
                                            <product.icon className="w-8 h-8" />
                                        </div>
                                        <div>
                                            <div className="mb-2">
                                                <h2 className="text-3xl font-bold text-slate-900">{product.title}</h2>
                                                <p className="text-slate-500 text-sm font-medium">{product.subtitle}</p>
                                            </div>
                                            <p className="text-slate-600 text-lg">{product.description}</p>
                                        </div>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-8">
                                        <div className="p-6 rounded-2xl bg-slate-50">
                                            <h3 className="font-semibold text-slate-900 mb-4">Key Capabilities</h3>
                                            <ul className="space-y-3">
                                                {product.keyCapabilities.map((item, didx) => (
                                                    <li key={didx} className="flex items-start gap-3">
                                                        <CheckCircle2 className="w-5 h-5 text-slate-900 flex-shrink-0 mt-0.5" />
                                                        <span className="text-slate-600 text-sm">{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        <div className="space-y-6">
                                            <div className="p-6 rounded-2xl border border-slate-200">
                                                <h3 className="font-semibold text-slate-900 mb-3">Technologies</h3>
                                                <div className="flex flex-wrap gap-2">
                                                    {product.technologies.map((tech, tidx) => (
                                                        <span key={tidx} className="px-3 py-1.5 text-sm bg-slate-100 text-slate-700 rounded-full">
                                                            {tech}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>

                                            <div className="p-6 rounded-2xl border border-slate-200">
                                                <h3 className="font-semibold text-slate-900 mb-1">Status</h3>
                                                <p className={`text-lg font-bold ${product.timeline === 'Live' ? 'text-green-600' : product.timeline === 'Research' ? 'text-purple-600' : 'text-blue-600'}`}>{product.timeline}</p>
                                            </div>

                                            <Button
                                                onClick={() => setIsContactOpen(true)}
                                                className="w-full bg-slate-900 hover:bg-slate-800 text-white py-6"
                                            >
                                                Learn More
                                                <ArrowRight className="w-4 h-4 ml-2" />
                                            </Button>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <ConversationPanel
                isOpen={isContactOpen}
                onClose={() => setIsContactOpen(false)}
            />
        </div>
    );
}


