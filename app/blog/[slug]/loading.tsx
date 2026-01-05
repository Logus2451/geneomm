export default function BlogPostLoading() {
    return (
        <div className="bg-neutral min-h-screen pb-20 animate-pulse">
            {/* Article Header Skeleton */}
            <div className="bg-deep-navy text-white pt-12 pb-24 md:pt-20 md:pb-40 relative">
                <div className="container mx-auto px-4 relative z-10">
                    <div className="h-4 bg-white/10 rounded-lg w-32 mb-8"></div>
                    <div className="max-w-4xl">
                        <div className="h-10 md:h-16 bg-white/10 rounded-lg w-full mb-4"></div>
                        <div className="h-10 md:h-16 bg-white/10 rounded-lg w-2/3 mb-8"></div>
                        <div className="flex gap-6">
                            <div className="h-6 bg-white/10 rounded-lg w-32"></div>
                            <div className="h-6 bg-white/10 rounded-lg w-32"></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Article Content Skeleton */}
            <div className="container mx-auto px-4 -mt-16 md:-mt-24 relative z-10">
                <div className="max-w-4xl mx-auto">
                    <div className="bg-white rounded-3xl shadow-2xl overflow-hidden mb-12">
                        <div className="h-[300px] md:h-[500px] bg-neutral-200"></div>
                        <div className="p-6 md:p-12 space-y-6">
                            <div className="h-6 bg-neutral-200 rounded w-full"></div>
                            <div className="h-6 bg-neutral-200 rounded w-full"></div>
                            <div className="h-6 bg-neutral-200 rounded w-4/5"></div>
                            <div className="h-24 bg-neutral-200 rounded w-full"></div>
                            <div className="h-6 bg-neutral-200 rounded w-full"></div>
                            <div className="h-6 bg-neutral-200 rounded w-3/4"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
