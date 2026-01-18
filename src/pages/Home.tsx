import { useState } from 'react';
import HeroSection from '@/Components/home/HeroSection';
import HomeSection from '@/Components/home/HomeSection';
import ProductsSection from '@/Components/home/ServicesSection';
import SolutionsSection from '@/Components/home/SolutionsSection';
import BlogSection from '@/Components/home/BlogSection';
import TrustSection from '@/Components/home/TrustSection';
import CTASection from '@/Components/home/CTASection';
import ConversationPanel from '@/Components/contact/ConversationPanel';

export default function Home() {
    const [isContactOpen, setIsContactOpen] = useState(false);

    return (
        <div className="min-h-screen">
            <HeroSection onOpenContact={() => setIsContactOpen(true)} />
            <HomeSection />
            <ProductsSection onOpenContact={() => setIsContactOpen(true)} />
            <SolutionsSection onOpenContact={() => setIsContactOpen(true)} />
            <BlogSection />
            <TrustSection />
            <CTASection onOpenContact={() => setIsContactOpen(true)} />

            <ConversationPanel
                isOpen={isContactOpen}
                onClose={() => setIsContactOpen(false)}
            />
        </div>
    );
}


