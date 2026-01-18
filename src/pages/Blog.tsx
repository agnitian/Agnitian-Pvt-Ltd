import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, User, ArrowRight, Search } from 'lucide-react';
import { Button } from '@/Components/ui/button';
import { blogs, blogCategories } from '@/lib/description';

export default function Blog() {
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');

    const filteredBlogs = blogs.filter(blog => {
        const matchCategory = selectedCategory === 'all' || blog.category.toLowerCase().includes(selectedCategory);
        const matchSearch = blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            blog.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
            blog.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
        return matchCategory && matchSearch;
    });

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
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
                            Knowledge Hub
                        </span>
                        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                            Research, Insights &
                            <span className="block text-blue-400">Innovation</span>
                        </h1>
                        <p className="text-xl text-slate-300 leading-relaxed">
                            Deep dives into AI, automation, creator economy, and enterprise systems. Practical insights from building intelligent products.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Blog Section */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    {/* Search & Filter */}
                    <div className="mb-16">
                        {/* Search Bar */}
                        <div className="mb-8">
                            <div className="relative max-w-2xl">
                                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                                <input
                                    type="text"
                                    placeholder="Search articles, topics, tags..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full pl-12 pr-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all"
                                />
                            </div>
                        </div>

                        {/* Category Filter */}
                        <div className="flex flex-wrap gap-2">
                            {blogCategories.map((cat) => (
                                <button
                                    key={cat.id}
                                    onClick={() => setSelectedCategory(cat.id)}
                                    className={`px-4 py-2 rounded-full font-medium text-sm transition-all duration-300 ${selectedCategory === cat.id
                                            ? 'bg-blue-600 text-white shadow-lg shadow-blue-200'
                                            : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                                        }`}
                                >
                                    {cat.label}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Blog Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                        {filteredBlogs.map((blog, idx) => (
                            <motion.article
                                key={blog.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="group relative rounded-2xl border border-slate-200 bg-white overflow-hidden hover:shadow-xl hover:shadow-blue-100/50 transition-all duration-500 flex flex-col"
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
                                        {blog.tags.length > 2 && (
                                            <span className="px-2 py-1 text-xs bg-slate-100 text-slate-600 rounded-full">
                                                +{blog.tags.length - 2}
                                            </span>
                                        )}
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

                    {/* No Results */}
                    {filteredBlogs.length === 0 && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-center py-12"
                        >
                            <p className="text-slate-600 text-lg mb-4">No articles found matching your search.</p>
                            <button
                                onClick={() => {
                                    setSearchQuery('');
                                    setSelectedCategory('all');
                                }}
                                className="text-blue-600 font-semibold hover:text-blue-700"
                            >
                                Clear filters
                            </button>
                        </motion.div>
                    )}

                    {/* See All Blog Button */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex justify-center mt-16"
                    >
                        <Button
                            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg flex items-center gap-2 rounded-xl"
                        >
                            See All Blogs
                            <ArrowRight className="w-5 h-5" />
                        </Button>
                    </motion.div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-slate-900">
                <div className="max-w-3xl mx-auto px-6 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        Stay Updated with Insights
                    </h2>
                    <p className="text-slate-300 text-lg mb-8">
                        Subscribe to our newsletter for the latest articles, research, and updates on AI, automation, and digital transformation.
                    </p>
                    <div className="flex gap-3">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="flex-1 px-4 py-3 rounded-lg border border-slate-700 bg-slate-800 text-white placeholder-slate-400 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-500/20"
                        />
                        <Button className="bg-blue-600 hover:bg-blue-700">Subscribe</Button>
                    </div>
                </div>
            </section>
        </div>
    );
}
