import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/lib/utils';
import { Target, Sparkles, ArrowRight } from 'lucide-react';
import { products, solutions } from '@/lib/description';

const menuData = {
    Home: {
        description: "Intelligent digital products for real-world impact",
        items: products.slice(0, 4).map(p => ({ icon: p.icon, title: p.title, desc: p.subtitle.split(' ')[0] + " AI platform", href: "Products" }))
    },
    Products: {
        description: "Our complete ecosystem of intelligent platforms",
        items: products.map(p => ({ icon: p.icon, title: p.title, desc: p.subtitle.substring(0, 30) + "...", href: "Products" }))
    },
    Solutions: {
        description: "Turn intelligence into systems that scale",
        items: solutions.map(s => ({ icon: s.icon, title: s.title.split(' Solutions')[0], desc: s.tagline, href: "Solutions" }))
    },
    About: {
        description: "Our mission and approach",
        items: [
            { icon: Target, title: "Our Mission", desc: "Building systems that matter", href: "About" },
            { icon: Sparkles, title: "Team", desc: "World-class experts", href: "About" },
            { icon: Target, title: "Values", desc: "Responsibility first", href: "About" },
            { icon: Sparkles, title: "Approach", desc: "System-first thinking", href: "About" }
        ]
    }
};

export default function MegaMenu({ activeMenu, onClose }) {
    const data = menuData[activeMenu];

    if (!data) return null;

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="absolute top-full left-0 right-0 bg-white/95 backdrop-blur-xl border-b border-slate-200 shadow-2xl z-50"
                onMouseLeave={onClose}
            >
                <div className="max-w-7xl mx-auto px-6 py-8">
                    <div className="flex items-start gap-12">
                        <div className="w-64 flex-shrink-0">
                            <h3 className="text-xl font-semibold text-slate-900 mb-2">{activeMenu}</h3>
                            <p className="text-slate-600 text-sm leading-relaxed">{data.description}</p>
                        </div>

                        <div className="flex-1 grid grid-cols-2 lg:grid-cols-4 gap-4">
                            {data.items.map((item, idx) => (
                                <Link
                                    key={idx}
                                    to={createPageUrl(item.href)}
                                    onClick={onClose}
                                    className="group p-4 rounded-xl hover:bg-slate-50 transition-all duration-300"
                                >
                                    <div className="flex items-start gap-3">
                                        <div className="p-2 rounded-lg bg-blue-50 text-blue-600 group-hover:bg-blue-100 transition-colors">
                                            <item.icon className="w-5 h-5" />
                                        </div>
                                        <div className="flex-1">
                                            <h4 className="font-medium text-slate-900 group-hover:text-blue-600 transition-colors flex items-center gap-1">
                                                {item.title}
                                                <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                                            </h4>
                                            <p className="text-xs text-slate-500 mt-0.5">{item.desc}</p>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </motion.div>
        </AnimatePresence>
    );
}

