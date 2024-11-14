import React from 'react';
import BlogCard from '../components/BlogCard';

const blogPosts = [
  {
    title: "Tech Workers Rise Up Against Project Nimbus",
    excerpt: "How tech workers are organizing to stop their labor from being used to fuel apartheid and occupation through Google and Amazon's Project Nimbus.",
    author: "Tech Workers Coalition",
    date: "2024-03-15",
    readTime: "6 min read",
    imageUrl: "https://images.unsplash.com/photo-1596838132731-3301c3fd4317?auto=format&fit=crop&q=80",
    slug: "tech-workers-against-nimbus"
  },
  {
    title: "No Tech For Apartheid: A Call to Action",
    excerpt: "Understanding the role of technology in enabling oppression and why tech workers must organize to prevent their skills from being weaponized.",
    author: "Palestine Tech Collective",
    date: "2024-03-10",
    readTime: "5 min read",
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80",
    slug: "no-tech-for-apartheid"
  },
  {
    title: "Building Tech for Liberation",
    excerpt: "How grassroots movements are developing alternative technologies that serve communities rather than oppressive systems.",
    author: "Digital Liberation Front",
    date: "2024-03-05",
    readTime: "4 min read",
    imageUrl: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80",
    slug: "tech-for-liberation"
  }
];

export default function Blog() {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="bg-emerald-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">No Tech For Apartheid</h1>
          <p className="text-lg max-w-2xl">
            Join the movement of tech workers organizing against the use of technology
            for oppression and fighting for ethical tech that serves liberation.
          </p>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <BlogCard key={post.slug} {...post} />
          ))}
        </div>
      </div>
    </div>
  );
}