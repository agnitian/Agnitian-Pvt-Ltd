import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/lib/utils';
import { X, ChevronRight, ChevronDown, MessageSquare } from 'lucide-react';
import { Button } from '@/Components/ui/button';

const navItems = [
    { title: 'Home', href: 'Home' },
    { title: 'Products', href: 'Products' },
    { title: 'Solutions', href: 'Solutions' },
    { title: 'About', href: 'About' }
];

export default function MobileDrawer({ isOpen, onClose, onOpenContact }) {
    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50"
                        onClick={onClose}
                    />

                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        className="fixed right-0 top-0 bottom-0 w-full max-w-sm bg-white z-50 flex flex-col"
                    >
                        <div className="flex items-center justify-between p-6 border-b border-slate-100">
                            <span className="text-xl font-bold text-slate-900">AGNITIAN</span>
                            <button
                                onClick={onClose}
                                className="p-2 rounded-full hover:bg-slate-100 transition-colors"
                            >
                                <X className="w-6 h-6 text-slate-600" />
                            </button>
                        </div>

                        <nav className="flex-1 overflow-y-auto py-6">
                            {navItems.map((item, idx) => (
                                <Link
                                    key={idx}
                                    to={createPageUrl(item.href)}
                                    onClick={onClose}
                                    className="flex items-center justify-between px-6 py-4 text-lg font-medium text-slate-700 hover:bg-slate-50 hover:text-blue-600 transition-all"
                                >
                                    {item.title}
                                    <ChevronRight className="w-5 h-5 text-slate-400" />
                                </Link>
                            ))}
                        </nav>

                        <div className="p-6 border-t border-slate-100">
                            <Button
                                onClick={() => {
                                    onClose();
                                    onOpenContact();
                                }}
                                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-6 text-lg font-medium rounded-xl"
                            >
                                <MessageSquare className="w-5 h-5 mr-2" />
                                Start a Conversation
                            </Button>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}

