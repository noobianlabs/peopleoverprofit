import React from 'react';
import { Users, Globe2, Scale, Brain } from 'lucide-react';

export default function Approach() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-emerald-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-6">Our Approach</h1>
          <p className="text-xl">Building technology through mass struggle and collective liberation</p>
        </div>
      </section>

      {/* Mass Line Method */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">The Mass Line Method</h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">From the Masses</h3>
              <p className="text-gray-600">We gather ideas, experiences, and needs directly from communities in struggle.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">To the Masses</h3>
              <p className="text-gray-600">We synthesize these insights into concrete technological solutions.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">Back to the Masses</h3>
              <p className="text-gray-600">We return these solutions to the community for implementation and refinement.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Principles */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Core Principles</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex items-start space-x-4">
              <div className="bg-emerald-100 p-3 rounded-lg">
                <Users className="h-6 w-6 text-emerald-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Collective Ownership</h3>
                <p className="text-gray-600">Technology should be owned and controlled by the communities it serves. We build tools that strengthen collective power and autonomy.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-emerald-100 p-3 rounded-lg">
                <Globe2 className="h-6 w-6 text-emerald-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">International Solidarity</h3>
                <p className="text-gray-600">We recognize that liberation struggles are interconnected globally. Our tech supports movements across borders.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-emerald-100 p-3 rounded-lg">
                <Scale className="h-6 w-6 text-emerald-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Revolutionary Ethics</h3>
                <p className="text-gray-600">Our work is guided by anti-capitalist principles and a commitment to social justice and liberation.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-emerald-100 p-3 rounded-lg">
                <Brain className="h-6 w-6 text-emerald-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Collective Intelligence</h3>
                <p className="text-gray-600">We believe in the wisdom of communities. Our development process is participatory and democratic.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Development Process</h2>
          <div className="space-y-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">1. Community Investigation</h3>
              <p className="text-gray-600">We begin by deeply engaging with communities to understand their struggles, needs, and existing solutions.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">2. Collective Design</h3>
              <p className="text-gray-600">Solutions are designed collaboratively with community members, ensuring they reflect real needs and experiences.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">3. Revolutionary Development</h3>
              <p className="text-gray-600">We build technology using anti-capitalist principles, prioritizing community control and collective liberation.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">4. Community Implementation</h3>
              <p className="text-gray-600">Tools are deployed through a process of community training, feedback, and continuous improvement.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}