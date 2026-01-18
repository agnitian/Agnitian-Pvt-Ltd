import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/Components/ui/button';

export default function CTASection({ onOpenContact }) {
  return (
    <section className="py-32 bg-transparent">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="
            relative rounded-3xl
            p-12 md:p-16
            text-center
            overflow-hidden
          "
          style={{
            background: 'var(--header-box)',
          }}
        >
          {/* Soft red glow accents */}
          <div className="absolute inset-0 opacity-25 pointer-events-none">
            <div className="absolute top-0 right-0 w-64 h-64 bg-red-500 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-red-700 rounded-full blur-3xl" />
          </div>

          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="
                inline-flex items-center gap-2
                px-4 py-2 rounded-full
                bg-white/10 backdrop-blur-sm
                border border-white/20
                mb-8
              "
            >
              <Sparkles className="w-4 h-4 text-red-400" />
              <span className="text-sm text-white/80 font-medium">
                Ready to Transform?
              </span>
            </motion.div>

            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Let's Build Something
              <span className="block text-white/90">
                That Truly Matters
              </span>
            </h2>

            <p className="text-lg text-white/70 mb-10 max-w-xl mx-auto">
              Whether you're exploring AI possibilities or ready to implement,
              we’re here to guide your journey.
            </p>

            <Button
              size="lg"
              onClick={onOpenContact}
              className="
                bg-white-600 text-white
                hover:bg-white-700
                px-10 py-6 text-lg font-medium
                rounded-xl
                group
              "
            >
              Start a Conversation
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
