'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="text-center">
        <h2 className="text-2xl font-semibold text-neutral-800 mb-4">Something went wrong!</h2>
        <button
          onClick={reset}
          className="bg-primary text-white px-8 py-3 rounded-full text-base font-semibold hover:bg-opacity-90 transition-all"
        >
          Try again
        </button>
      </div>
    </div>
  );
}
