import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import React from 'react';
import { Link } from 'react-router-dom';

const collections = [
  {
    id: 1,
    title: 'Summer Essentials',
    description: 'Shop the best of summer wear, accessories, and more.',
    image:
      'https://images.unsplash.com/photo-1483985988355-763728e1935b?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZmFzaGlvbnxlbnwwfHwwfHx8MA%3D%3D',
    link: '/collections/summer-essentials',
  },
  {
    id: 2,
    title: 'Winter Collection',
    description: 'Stay warm with the latest winter fashion and accessories.',
    image:
      'https://images.unsplash.com/photo-1483985988355-763728e1935b?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZmFzaGlvbnxlbnwwfHwwfHx8MA%3D%3D',
    link: '/collections/winter-collection',
  },
  {
    id: 3,
    title: 'Luxury Watches',
    description: 'Find your perfect luxury timepiece.',
    image:
      'https://images.unsplash.com/photo-1483985988355-763728e1935b?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZmFzaGlvbnxlbnwwfHwwfHx8MA%3D%3D',
    link: '/collections/luxury-watches',
  },
  {
    id: 4,
    title: 'Tech Gadgets',
    description: 'Explore cutting-edge technology and gadgets.',
    image:
      'https://images.unsplash.com/photo-1483985988355-763728e1935b?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZmFzaGlvbnxlbnwwfHwwfHx8MA%3D%3D',
    link: '/collections/tech-gadgets',
  },
];

const CollectionsSection: React.FC = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800">Shop Our Collections</h2>
          <p className="text-gray-600 mt-2">Curated collections for every occasion. Find your next favorite item.</p>
        </div>

        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {collections.map((collection) => (
            <Card key={collection.id} className="group overflow-hidden shadow-lg hover:shadow-xl transition-all">
              <div className="relative overflow-hidden">
                <img
                  src={collection.image}
                  alt={collection.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <CardHeader className="text-center">
                <CardTitle className="text-lg font-semibold text-gray-800">{collection.title}</CardTitle>
              </CardHeader>
              <CardContent className="p-4">
                <p className="text-gray-600 text-sm mb-3">{collection.description}</p>
                <Link
                  to={collection.link}
                  className="inline-block px-4 py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-600"
                >
                  Explore
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CollectionsSection;
