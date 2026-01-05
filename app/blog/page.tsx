import { getPosts } from '@/lib/blog';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, User, ArrowRight } from 'lucide-react';
import Section from '@/components/ui/Section';

export const metadata = {
    title: 'Blogs | Geneomm Medical Center',
    description: 'Stay updated with the latest in pediatric genetics and rare diseases.',
};

export default async function BlogPage() {
    const posts = await getPosts();

    return (
        <div className="bg-neutral">
            {/* Hero Section */}
            <div className="bg-deep-navy py-20 text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary rounded-full blur-3xl -mr-32 -mt-32"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary rounded-full blur-3xl -ml-32 -mb-32"></div>
                </div>
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold font-serif mb-4">Healthy Living & Insights</h1>
                    <p className="text-xl text-neutral-300 max-w-2xl mx-auto">
                        Expert articles and updates on pediatric genetics, rare disease care, and empowering families through knowledge.
                    </p>
                </div>
            </div>

            <Section>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {posts.map((post) => {
                        const featuredImage = post._embedded?.['wp:featuredmedia']?.[0]?.source_url || '/assets/hero.png';
                        const formattedDate = new Date(post.date).toLocaleDateString('en-IN', {
                            day: 'numeric',
                            month: 'long',
                            year: 'numeric'
                        });

                        return (
                            <article
                                key={post.id}
                                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col group h-full"
                            >
                                <div className="relative h-56 w-full overflow-hidden">
                                    <Image
                                        src={featuredImage}
                                        alt={post.title.rendered}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute top-4 left-4">
                                        <span className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                                            Medical Insights
                                        </span>
                                    </div>
                                </div>

                                <div className="p-6 flex flex-col flex-grow">
                                    <div className="flex items-center gap-4 text-neutral-800 text-xs mb-3">
                                        <span className="flex items-center gap-1">
                                            <Calendar size={14} className="text-primary" />
                                            {formattedDate}
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <User size={14} className="text-primary" />
                                            Admin
                                        </span>
                                    </div>

                                    <h2
                                        className="text-xl font-bold mb-3 text-deep-navy group-hover:text-primary transition-colors line-clamp-2"
                                        dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                                    />

                                    <div
                                        className="text-neutral-800 text-sm mb-6 line-clamp-3"
                                        dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
                                    />

                                    <div className="mt-auto">
                                        <Link
                                            href={`/blog/${post.slug}`}
                                            className="inline-flex items-center gap-2 text-primary font-bold text-sm hover:gap-3 transition-all underline decoration-2 underline-offset-4"
                                        >
                                            Read Full Article
                                            <ArrowRight size={16} />
                                        </Link>
                                    </div>
                                </div>
                            </article>
                        );
                    })}
                </div>
            </Section>
        </div>
    );
}
