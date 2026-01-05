'use client';

import { useEffect, useState } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

export default function TopProgressBar() {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        // When the path or search params change, it means navigation has started/completed
        // In many Next.js scenarios, we can't easily hook into 'start' and 'finish' with the new router
        // so we show a quick pulse on change to acknowledge the click
        setLoading(true);
        const timer = setTimeout(() => setLoading(false), 500);
        return () => clearTimeout(timer);
    }, [pathname, searchParams]);

    return (
        <div className="fixed top-0 left-0 right-0 z-[100] pointer-events-none">
            <AnimatePresence>
                {loading && (
                    <motion.div
                        initial={{ width: '0%', opacity: 1 }}
                        animate={{ width: '100%', opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        className="h-1 bg-gradient-to-r from-primary via-secondary to-accent shadow-[0_0_10px_rgba(0,102,204,0.5)]"
                    />
                )}
            </AnimatePresence>
        </div>
    );
}
