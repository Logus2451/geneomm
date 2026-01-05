import Section from '@/components/ui/Section';

export default function BlogLoading() {
    return (
        <div className="bg-neutral animate-pulse">
            {/* Hero Skeleton */}
            <div className="bg-deep-navy py-20 text-white relative overflow-hidden">
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <div className="h-10 md:h-12 bg-white/10 rounded-lg w-3/4 mx-auto mb-6"></div>
                    <div className="h-6 bg-white/10 rounded-lg w-1/2 mx-auto"></div>
                </div>
            </div>

            <Section>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                        <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-lg h-[450px]">
                            <div className="h-56 bg-neutral-200"></div>
                            <div className="p-6">
                                <div className="flex gap-4 mb-4">
                                    <div className="h-4 bg-neutral-200 rounded w-24"></div>
                                    <div className="h-4 bg-neutral-200 rounded w-24"></div>
                                </div>
                                <div className="h-6 bg-neutral-200 rounded w-full mb-3"></div>
                                <div className="h-6 bg-neutral-200 rounded w-2/3 mb-6"></div>
                                <div className="space-y-2">
                                    <div className="h-4 bg-neutral-200 rounded w-full"></div>
                                    <div className="h-4 bg-neutral-200 rounded w-full"></div>
                                    <div className="h-4 bg-neutral-200 rounded w-4/5"></div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </Section>
        </div>
    );
}
