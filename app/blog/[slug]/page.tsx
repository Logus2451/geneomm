import { getPostBySlug } from '@/lib/blog';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, User, ChevronLeft, Share2 } from 'lucide-react';
import Section from '@/components/ui/Section';

interface BlogPostPageProps {
    params: {
        slug: string;
    };
}

export async function generateMetadata({ params }: BlogPostPageProps) {
    const post = await getPostBySlug(params.slug);
    if (!post) return { title: 'Post Not Found' };

    return {
        title: `${post.title.rendered} | Geneomm Medical Center`,
        description: post.excerpt.rendered.replace(/<[^>]*>/g, '').substring(0, 160),
    };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
    const post = await getPostBySlug(params.slug);

    if (!post) {
        notFound();
    }

    const featuredImage = post._embedded?.['wp:featuredmedia']?.[0]?.source_url || '/assets/hero.png';
    const formattedDate = new Date(post.date).toLocaleDateString('en-IN', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });

    return (
        <article className="bg-neutral min-h-screen pb-20">
            {/* Article Header */}
            <div className="bg-deep-navy text-white pt-12 pb-24 md:pt-20 md:pb-40 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-primary rounded-full blur-3xl -mr-48 -mt-48"></div>
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <Link
                        href="/blog"
                        className="inline-flex items-center gap-2 text-neutral-300 hover:text-white mb-8 transition-colors text-sm"
                    >
                        <ChevronLeft size={18} />
                        Back to Blogs
                    </Link>

                    <div className="max-w-4xl">
                        <h1
                            className="text-3xl md:text-5xl lg:text-6xl font-bold font-serif mb-6 leading-tight"
                            dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                        />

                        <div className="flex flex-wrap items-center gap-6 text-neutral-200">
                            <span className="flex items-center gap-2">
                                <Calendar size={18} className="text-secondary" />
                                {formattedDate}
                            </span>
                            <span className="flex items-center gap-2">
                                <User size={18} className="text-secondary" />
                                Admin
                            </span>
                            <span className="flex items-center gap-2">
                                <span className="w-2 h-2 bg-accent rounded-full"></span>
                                Medical Insights
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Article Content */}
            <div className="container mx-auto px-4 -mt-16 md:-mt-24 relative z-10">
                <div className="max-w-4xl mx-auto">
                    <div className="bg-white rounded-3xl shadow-2xl overflow-hidden mb-12">
                        <div className="relative h-[300px] md:h-[500px] w-full">
                            <Image
                                src={featuredImage}
                                alt={post.title.rendered}
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>

                        <div className="p-6 md:p-12">
                            <div
                                className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:text-deep-navy prose-p:text-neutral-800 prose-a:text-primary prose-img:rounded-2xl prose-strong:text-deep-navy"
                                dangerouslySetInnerHTML={{ __html: post.content.rendered }}
                            />
                        </div>

                        <div className="border-t border-neutral-200 p-8 md:p-12 bg-neutral-100 flex flex-wrap items-center justify-between gap-6">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                                    <User className="text-primary" />
                                </div>
                                <div>
                                    <p className="font-bold text-deep-navy">Published by Geneomm Team</p>
                                    <p className="text-sm text-neutral-800">Experts in Pediatric Genetics</p>
                                </div>
                            </div>

                            <button className="flex items-center gap-2 px-6 py-3 bg-white border border-neutral-300 rounded-full text-deep-navy font-semibold hover:bg-neutral-200 transition-colors">
                                <Share2 size={18} />
                                Share Post
                            </button>
                        </div>
                    </div>

                    <div className="text-center">
                        <Link
                            href="/blog"
                            className="inline-flex items-center gap-2 bg-primary text-white px-10 py-4 rounded-full font-bold hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl"
                        >
                            Explore More Articles
                            <ChevronLeft className="rotate-180" size={20} />
                        </Link>
                    </div>
                </div>
            </div>
        </article>
    );
}
