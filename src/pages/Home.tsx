import React from 'react';
import { Wallet, Users, FlaskConical, HeartHandshake, Globe2, Leaf, Database, Building2 } from 'lucide-react';
import ProjectCard from '../components/ProjectCard';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4 bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              People Over Profit
              <span className="block text-emerald-400 text-2xl md:text-3xl mt-2">Technology for Liberation</span>
            </h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto text-gray-200">
              A cooperative dedicated to building tech solutions that empower grassroots movements and prioritize community well-being over corporate profit.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section id="mission" className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Mission</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="bg-emerald-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <HeartHandshake className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Community Power</h3>
              <p className="text-gray-600">Building solutions by and for grassroots movements.</p>
            </div>
            <div className="text-center p-6">
              <div className="bg-emerald-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Globe2 className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Global Solidarity</h3>
              <p className="text-gray-600">Connecting movements and amplifying collective action worldwide.</p>
            </div>
            <div className="text-center p-6">
              <div className="bg-emerald-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Leaf className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Revolutionary Tech</h3>
              <p className="text-gray-600">Developing solutions that advance social justice and liberation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="work" className="py-16 px-4 bg-gray-100">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <ProjectCard
              title="Sanduq"
              description="A community money management app inspired by traditional rotating savings systems, empowering grassroots groups to collectively manage their resources."
              icon={<Wallet className="h-6 w-6 text-emerald-600" />}
            />
            <ProjectCard
              title="Movement Infrastructure"
              description="Secure communication platforms and organizing tools built specifically for grassroots movements and community initiatives."
              icon={<Database className="h-6 w-6 text-emerald-600" />}
            />
            <ProjectCard
              title="G Exotic Oils"
              description="Community-owned subscription service bringing sustainably sourced fragrance oils while preserving cultural heritage and supporting local producers."
              icon={<FlaskConical className="h-6 w-6 text-emerald-600" />}
            />
            <ProjectCard
              title="Tech Solidarity"
              description="Supporting grassroots movements with technical expertise, focusing on security, autonomy, and collective empowerment."
              icon={<Building2 className="h-6 w-6 text-emerald-600" />}
            />
          </div>
        </div>
      </section>

      {/* Join Section */}
      <section id="join" className="py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Join Our Movement</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Whether you're a developer, organizer, or community member, there's a place for you in our struggle for tech liberation.
          </p>
          <button className="bg-emerald-600 text-white px-8 py-3 rounded-lg hover:bg-emerald-700 transition-colors">
            Get Involved
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-emerald-900 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">People Over Profit</h3>
            <p className="text-gray-300">Building technology for liberation.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Projects</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Sanduq</li>
              <li>Movement Infrastructure</li>
              <li>G Exotic Oils</li>
              <li>Tech Solidarity</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Get Involved</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Join the Movement</li>
              <li>Contribute</li>
              <li>Support Us</li>
              <li>Contact</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Twitter</li>
              <li>GitHub</li>
              <li>Matrix</li>
              <li>Newsletter</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}