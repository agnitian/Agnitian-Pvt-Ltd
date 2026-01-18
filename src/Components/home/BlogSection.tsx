import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { Button } from '@/Components/ui/button';
import { blogs } from '@/lib/description';

export default function BlogSection() {
    const [hoveredId, setHoveredId] = useState(null);
    const featuredBlogs = blogs.slice(0, 3);

    return (
        <section className="py-32 bg-slate-50">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-blue-600 font-medium text-sm tracking-wider uppercase mb-4 block">
                        Knowledge
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                        Latest <span className="text-blue-600">Insights & Research</span>
                    </h2>
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                        Deep dives into AI, automation, and digital transformation. Stay updated with latest research and practical insights.
                    </p>
                </motion.div>

                {/* Blog Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                    {featuredBlogs.map((blog, idx) => (
                        <motion.article
                            key={blog.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            onMouseEnter={() => setHoveredId(blog.id)}
                            onMouseLeave={() => setHoveredId(null)}
                            className="group relative rounded-2xl border border-slate-200 bg-white overflow-hidden hover:shadow-xl hover:shadow-blue-100/50 transition-all duration-500 flex flex-col cursor-pointer"
                        >
                            {/* Image */}
                            <div className="relative h-48 overflow-hidden bg-slate-200">
                                <img
                                    src={blog.image}
                                    alt={blog.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute top-4 left-4">
                                    <span className="px-3 py-1 bg-blue-600 text-white text-xs font-semibold rounded-full">
                                        {blog.category}
                                    </span>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6 flex flex-col flex-1">
                                <h3 className="text-lg font-bold text-slate-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
                                    {blog.title}
                                </h3>

                                <p className="text-slate-600 text-sm mb-4 line-clamp-2">
                                    {blog.excerpt}
                                </p>

                                {/* Meta Info */}
                                <div className="flex flex-wrap gap-3 text-xs text-slate-500 mb-4">
                                    <div className="flex items-center gap-1">
                                        <Calendar className="w-4 h-4" />
                                        {blog.date}
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <Clock className="w-4 h-4" />
                                        {blog.readTime}
                                    </div>
                                </div>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {blog.tags.slice(0, 2).map((tag, tidx) => (
                                        <span key={tidx} className="px-2 py-1 text-xs bg-slate-100 text-slate-600 rounded-full">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* Read More Button */}
                                <button className="mt-auto inline-flex items-center gap-2 text-blue-600 font-semibold text-sm group-hover:gap-3 transition-all">
                                    Read Article
                                    <ArrowRight className="w-4 h-4" />
                                </button>
                            </div>
                        </motion.article>
                    ))}
                </div>

                {/* See All Blogs Button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex justify-center"
                >
                    <a href="/blog">
                        <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg flex items-center gap-2 rounded-xl">
                            See All Blogs
                            <ArrowRight className="w-5 h-5" />
                        </Button>
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
