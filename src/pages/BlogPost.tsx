import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchBlogById } from '@/lib/blogApi';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/Components/ui/button';

export default function BlogPost() {
    const { id } = useParams<{ id: string }>();
    const [blog, setBlog] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (!id) return;
        const load = async () => {
            try {
                setLoading(true);
                const res = await fetchBlogById(id);
                setBlog(res.data || null);
            } catch (err: any) {
                console.error('Error fetching blog:', err);
                setError(err?.message || 'Failed to load blog');
            } finally {
                setLoading(false);
            }
        };
        load();
    }, [id]);

    if (loading) return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
    if (error) return <div className="min-h-screen p-8">Error: {error}</div>;
    if (!blog) return <div className="min-h-screen p-8">Blog not found.</div>;

    return (
        <div className="min-h-screen bg-white py-12">
            <div className="max-w-4xl mx-auto px-6">
                <Link to="/blog">
                    <Button className="mb-6">
                        <ArrowLeft className="w-4 h-4 mr-2" /> Back to articles
                    </Button>
                </Link>

                <article>
                    <h1 className="text-4xl font-bold text-slate-900 mb-4">{blog.title}</h1>
                    <div className="flex items-center gap-4 text-sm text-slate-500 mb-6">
                        <span>{blog.author}</span>
                        <span>•</span>
                        <span>{new Date(blog.createdAt).toLocaleDateString()}</span>
                        <span>•</span>
                        <span>{blog.readTime ? `${blog.readTime} min read` : ''}</span>
                    </div>

                    {blog.image && (
                        <div className="mb-8">
                            <img src={blog.image} alt={blog.title} className="w-full rounded-lg object-cover" />
                        </div>
                    )}

                    <div className="prose max-w-none text-slate-700">
                        {/* Render raw content; adjust if storing Markdown/HTML */}
                        {blog.content.split('\n').map((p: string, i: number) => (
                            <p key={i} className="mb-4">{p}</p>
                        ))}
                    </div>
                </article>
            </div>
        </div>
    );
}
