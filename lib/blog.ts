export interface WordPressPost {
    id: number;
    date: string;
    slug: string;
    title: {
        rendered: string;
    };
    content: {
        rendered: string;
    };
    excerpt: {
        rendered: string;
    };
    _embedded?: {
        'wp:featuredmedia'?: Array<{
            source_url: string;
            alt_text: string;
        }>;
    };
}

const BASE_URL = 'https://vignosaas.in/wp-json/wp/v2';

export async function getPosts(): Promise<WordPressPost[]> {
    const response = await fetch(`${BASE_URL}/posts?_embed=true`, {
        next: { revalidate: 60 }, // Refresh every minute
    });

    if (!response.ok) {
        throw new Error('Failed to fetch posts');
    }

    return response.json();
}

export async function getPostBySlug(slug: string): Promise<WordPressPost | null> {
    const response = await fetch(`${BASE_URL}/posts?slug=${slug}&_embed=true`, {
        next: { revalidate: 60 },
    });

    if (!response.ok) {
        throw new Error('Failed to fetch post');
    }

    const posts = await response.json();
    return posts.length > 0 ? posts[0] : null;
}
