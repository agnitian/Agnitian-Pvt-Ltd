import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { createPageUrl } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, MessageSquare, ArrowRight } from 'lucide-react';
import { Button } from '@/Components/ui/button';
import MegaMenu from '@/Components/navigation/MegaMenu';
import MobileDrawer from '@/Components/navigation/MobileDrawer';
import ConversationPanel from '@/Components/contact/ConversationPanel';
import AgnitianText from './lib/utils';


const navItems = ['Home', 'Products', 'Solutions', 'Blogs', 'About'];

interface LayoutProps {
    children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeMenu, setActiveMenu] = useState<string | null>(null);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isContactOpen, setIsContactOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setIsMobileMenuOpen(false);
        setActiveMenu(null);
    }, [location]);

    const isHomePage = location.pathname === '/' || location.pathname === '/Home';

    return (
        <div className="min-h-screen bg-white">
            {/* Navigation */}
            <header
                className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${isScrolled || !isHomePage
                    ? 'bg-white/95 backdrop-blur-xl shadow-sm border-b border-slate-100'
                    : 'bg-transparent'
                    }`}
            >
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex items-center justify-between h-20">

                        <Link
                            to={createPageUrl('Home')}
                            className="flex items-center"
                        >
                            <img
                                src="../image/agnitian_removebg.png"
                                alt="Agnitian Logo"
                                className="w-30 h-16 object-contain"
                            />

                            <AgnitianText
                                color={isScrolled || !isHomePage ? '#0f172a' : '#ffffff'}
                            />
                        </Link>


                        {/* Desktop Navigation */}
                        <nav className="hidden lg:flex items-center gap-1">
                            {navItems.map((item) => (
                                <div
                                    key={item}
                                    onMouseEnter={() => setActiveMenu(item)}
                                    className="relative"
                                >
                                    <Link
                                        to={createPageUrl(item === 'Home' ? 'Home' : item)}
                                        className={`px-4 py-2 rounded-lg font-medium transition-all ${isScrolled || !isHomePage
                                            ? 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                                            : 'text-slate-300 hover:text-white hover:bg-white/10'
                                            }`}
                                    >
                                        {item}
                                    </Link>
                                </div>
                            ))}
                        </nav>

                        {/* CTA Button */}
                        <div className="hidden lg:flex items-center gap-4">
                            <Button
                                onClick={() => setIsContactOpen(true)}
                                className={`transition-all duration-300 ${isScrolled || !isHomePage
                                    ? 'bg-blue-600 hover:bg-blue-700 text-white'
                                    : 'bg-white text-slate-900 hover:bg-slate-100'
                                    }`}
                            >
                                <MessageSquare className="w-4 h-4 mr-2" />
                                Start a Conversation
                            </Button>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsMobileMenuOpen(true)}
                            className={`lg:hidden p-2 rounded-lg transition-colors ${isScrolled || !isHomePage
                                ? 'text-slate-600 hover:bg-slate-100'
                                : 'text-white hover:bg-white/10'
                                }`}
                        >
                            <Menu className="w-6 h-6" />
                        </button>
                    </div>
                </div>

                {/* Mega Menu */}
                <AnimatePresence>
                    {activeMenu && (isScrolled || !isHomePage) && (
                        <MegaMenu
                            activeMenu={activeMenu}
                            onClose={() => setActiveMenu(null)}
                        />
                    )}
                </AnimatePresence>
            </header>

            {/* Mobile Drawer */}
            <MobileDrawer
                isOpen={isMobileMenuOpen}
                onClose={() => setIsMobileMenuOpen(false)}
                onOpenContact={() => setIsContactOpen(true)}
            />

            {/* Conversation Panel */}
            <ConversationPanel
                isOpen={isContactOpen}
                onClose={() => setIsContactOpen(false)}
            />

            {/* Main Content */}
            <main>{children}</main>

            {/* Footer */}
            <footer className="bg-[rgb(24,32,31)] text-white py-16">

                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid md:grid-cols-4 gap-12 mb-12">
                        <div className="md:col-span-2">
                            <Link to={createPageUrl('Home')} className="text-2xl font-bold mb-4 block">
                                <AgnitianText
                                color= '#ffffff'
                            />
                            </Link>
                            <p className="text-slate-400 mb-6 max-w-md">
                                Building Systems That Truly Matter. We architect AI-powered platforms
                                that transform how organizations think, operate, and scale.
                            </p>
                            <Button
                                onClick={() => setIsContactOpen(true)}
                                className="bg-blue-600 hover:bg-blue-700"
                            >
                                Start a Conversation
                                <ArrowRight className="w-4 h-4 ml-2" />
                            </Button>
                        </div>

                        <div>
                            <h4 className="font-semibold mb-4">Solutions</h4>
                            <ul className="space-y-2">
                                <li><Link to={createPageUrl('Solutions')} className="text-slate-400 hover:text-white transition-colors">AI & Generative AI</Link></li>
                                <li><Link to={createPageUrl('Solutions')} className="text-slate-400 hover:text-white transition-colors">Agent AI</Link></li>
                                <li><Link to={createPageUrl('Solutions')} className="text-slate-400 hover:text-white transition-colors">Creator Economy</Link></li>
                                <li><Link to={createPageUrl('Solutions')} className="text-slate-400 hover:text-white transition-colors">Marketing & SEO</Link></li>
                                <li><Link to={createPageUrl('Solutions')} className="text-slate-400 hover:text-white transition-colors">Freelancing & Work</Link></li>
                                <li><Link to={createPageUrl('Solutions')} className="text-slate-400 hover:text-white transition-colors">Web & Mobile</Link></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-semibold mb-4">Company</h4>
                            <ul className="space-y-2">
                                <li><Link to={createPageUrl('About')} className="text-slate-400 hover:text-white transition-colors">About</Link></li>
                                 <li><Link to={createPageUrl('Blog')} className="text-slate-400 hover:text-white transition-colors">Blog</Link></li>
                                <li><Link to={createPageUrl('Products')} className="text-slate-400 hover:text-white transition-colors">Products</Link></li>
                                <li><Link to={createPageUrl('Home')} className="text-slate-400 hover:text-white transition-colors">Home</Link></li>
                            </ul>
                        </div>
                    </div>

                    <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-slate-500 text-sm">
                            © {new Date().getFullYear()} AGNITIAN. All rights reserved.
                        </p>
                        <div className="flex items-center gap-6">
                            <a href="#" className="text-slate-400 hover:text-white text-sm transition-colors">Privacy</a>
                            <a href="#" className="text-slate-400 hover:text-white text-sm transition-colors">Terms</a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}


