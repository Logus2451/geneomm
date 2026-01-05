import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-neutral-800 mb-4">Page Not Found</h2>
        <p className="text-neutral-600 mb-8">The page you are looking for does not exist.</p>
        <Link
          href="/"
          className="bg-primary text-white px-8 py-3 rounded-full text-base font-semibold hover:bg-opacity-90 transition-all inline-block"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}
