import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import React from 'react';

const featuredItems = [
  {
    id: 1,
    title: 'Exchange 1',
    description: 'A great opportunity to exchange your unwanted product.',
    image:
      'https://images.unsplash.com/photo-1483985988355-763728e1935b?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZmFzaGlvbnxlbnwwfHwwfHx8MA%3D%3D',
    startDate: '2024-01-01',
    endDate: '2024-12-31',
  },
  {
    id: 2,
    title: 'Excahnge 2',
    description: 'Offer your services for a great exchange deal.',
    image:
      'https://images.unsplash.com/photo-1483985988355-763728e1935b?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZmFzaGlvbnxlbnwwfHwwfHx8MA%3D%3D',
    startDate: '2024-02-01',
    endDate: '2024-11-30',
  },
  {
    id: 3,
    title: 'Exchange 3',
    description: 'A great opportunity to exchange your unwanted product.',
    image:
      'https://images.unsplash.com/photo-1483985988355-763728e1935b?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZmFzaGlvbnxlbnwwfHwwfHx8MA%3D%3D',
    startDate: '2024-01-01',
    endDate: '2024-12-31',
  },
  {
    id: 4,
    title: 'Exchange 4',
    description: 'Offer your services for a great exchange deal.',
    image:
      'https://images.unsplash.com/photo-1483985988355-763728e1935b?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZmFzaGlvbnxlbnwwfHwwfHx8MA%3D%3D',
    startDate: '2024-02-01',
    endDate: '2024-11-30',
  },
];

const LatestExchanges: React.FC = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800">Latest exchanges</h2>
          <p className="text-gray-600 mt-2">Handpicked items just for you, showcasing the best of the season.</p>
        </div>

        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {featuredItems.map((item) => (
            <Card key={item.id} className="group overflow-hidden shadow-lg hover:shadow-xl transition-all">
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <CardHeader className="">
                <CardTitle className="text-lg font-semibold text-gray-800">{item.title}</CardTitle>
                <p className="text-sm">{item.description}</p>
              </CardHeader>
              <CardContent>
                <p className="text-xs text-gray-500 mt-2">Start Date: {item.startDate}</p>
                <p className="text-xs text-gray-500">End Date: {item.endDate}</p>
              </CardContent>
              <CardFooter>
                <Button>See</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestExchanges;
