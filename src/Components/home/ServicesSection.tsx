import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    ArrowRight, CheckCircle2
} from 'lucide-react';
import { Button } from '@/Components/ui/button';
import { products, productCategories } from '@/lib/description';


export default function ProductsSection({ onOpenContact }) {
    const [activeCategory, setActiveCategory] = useState('all');
    const [hoveredService, setHoveredService] = useState(null);

    const filteredProducts = activeCategory === 'all'
        ? products
        : products.filter(p => p.category === activeCategory);

    return (
        <section className="py-32 bg-slate-50">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <span className="text-blue-600 font-medium text-sm tracking-wider uppercase mb-4 block">
                        Products
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                        Transforming <span className="text-blue-600">Intelligence Into Systems</span>
                    </h2>
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                        Our products turn intelligence into real-world systems that deliver impact across healthcare, finance, and community platforms.
                    </p>
                </motion.div>

                {/* Category Filter */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-wrap justify-center gap-3 mb-12"
                >
                    {productCategories.map((cat) => (
                        <button
                            key={cat.id}
                            onClick={() => setActiveCategory(cat.id)}
                            className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${activeCategory === cat.id
                                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-200'
                                    : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                                }`}
                        >
                            {cat.label}
                        </button>
                    ))}
                </motion.div>

                {/* Products Grid */}
                <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <AnimatePresence mode="popLayout">
                        {filteredProducts.map((product, idx) => (
                            <motion.div
                                key={product.id}
                                layout
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ delay: idx * 0.05 }}
                                onMouseEnter={() => setHoveredService(product.id)}
                                onMouseLeave={() => setHoveredService(null)}
                                className="group relative bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-xl hover:shadow-blue-100/50 transition-all duration-500"
                            >
                                <div className={`absolute inset-0 bg-gradient-to-br ${product.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

                                <div className="relative p-6">
                                    <div className="flex items-start gap-4 mb-4">
                                        <div className={`p-3 rounded-xl bg-gradient-to-br ${product.color} text-white`}>
                                            <product.icon className="w-6 h-6" />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-lg font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">
                                                {product.title}
                                            </h3>
                                            <p className="text-xs text-slate-500 mt-1">{product.subtitle}</p>
                                        </div>
                                    </div>

                                    <p className="text-slate-600 mb-4 text-sm leading-relaxed">
                                        {product.description}
                                    </p>

                                    <div className="space-y-2 mb-4">
                                        {product.keyCapabilities.slice(0, 3).map((capability, fidx) => (
                                            <div key={fidx} className="flex items-center gap-2 text-xs text-slate-600">
                                                <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0" />
                                                {capability}
                                            </div>
                                        ))}
                                    </div>

                                    {product.keyCapabilities.length > 3 && (
                                        <div className="text-xs text-blue-600 font-medium mb-4">
                                            +{product.keyCapabilities.length - 3} more capabilities
                                        </div>
                                    )}
                                </div>

                                <div className="relative px-6 pb-6">
                                    <Button
                                        onClick={onOpenContact}
                                        variant="ghost"
                                        className="w-full justify-between text-blue-600 hover:bg-blue-50 group/btn"
                                    >
                                        Learn more
                                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                                    </Button>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
}

