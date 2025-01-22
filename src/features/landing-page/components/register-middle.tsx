/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from './footer';
import Header from './header';

const ServiceCard = ({ title, description, disabled, onLearnMore }: any) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden">
    <div className="bg-lime-500 p-4">
      <h2 className="text-white text-xl font-bold text-center">{title}</h2>
    </div>
    <div className="p-6 flex flex-col items-center">
      <p className="text-green-700 text-center text-lg mb-4">{description}</p>
      <Button
        disabled={disabled}
        onClick={onLearnMore}
        className="bg-lime-500 text-white px-6 py-2 rounded-full hover:bg-lime-600 transition-colors flex items-center"
      >
        Learn more
        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </Button>
    </div>
  </div>
);

const ModalContent = ({ title, onOpenChange }: any) => {
  const navigate = useNavigate();
  return (
    <div className="space-y-4">
      <div className="relative w-full h-48 bg-green-600/90 rounded-lg overflow-hidden mb-6">
        <img
          src="/api/placeholder/800/400"
          alt="Students studying"
          className="w-full h-full object-cover mix-blend-overlay"
        />
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <h3 className="text-white text-xl font-bold">{title}</h3>
        </div>
      </div>

      <div className="space-y-3">
        <div className="flex items-center space-x-2">
          <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          <p>Join the Campus Ambassadors Club, Register on the site and take advantage of the good deals!</p>
        </div>
        <div className="flex items-center space-x-2">
          <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          <p>Save smart by making the most of your surpluses, Trade-Sell your products & services </p>
        </div>
        <div className="flex items-center space-x-2">
          <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          <p>
            Choose the opportunity and carry out your projects: Strengthen your network, because your talents are
            valuable.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mt-6">
        <Button variant="destructive" className="w-full" onClick={onOpenChange}>
          Not Interested, thanks!
        </Button>
        <Button className="w-full" onClick={() => navigate(`/auth/register?role=student`)}>
          Register now!
        </Button>
      </div>

      <div className="text-center mt-4">
        <p className="text-green-600 font-semibold">Enjoy for free</p>
        <p className="text-sm text-gray-600">Optimize your students' campus experience.</p>
      </div>
    </div>
  );
};

const ServicesGrid = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<any>(null);

  const services = [
    {
      title: 'SCHOOLS/ HE/ UNIV',
      description: 'Optimize the success of your students.',
    },
    {
      title: 'AMBASSADORS',
      description: 'Enhance your social branding, become a social standard-bearer',
      disabled: true,
    },
    {
      title: 'COACHES & MENTORS',
      description: 'Offer your expertise to talents looking for support',
      disabled: true,
    },
    {
      title: 'COMPANIES & RECRUITERS',
      description: 'Access a pool of talent and boost your CSR',
      disabled: true,
    },
    {
      title: 'SUSTAINABLE DEVELOPERS',
      description: 'Localities? Associations? Support the integration of young people',
      disabled: true,
    },
    {
      title: 'SOLIDARITY ADVERTISERS',
      description: 'Communicate with an exclusive and targeted community',
      disabled: true,
    },
  ];

  const handleLearnMore = (service: any) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  return (
    <>
      <Header />
      <div className="max-w-7xl mx-auto p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} onLearnMore={() => handleLearnMore(service)} />
          ))}
        </div>
      </div>
      <Footer />

      {isModalOpen && (
        <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
          <DialogContent className="sm:max-w-[600px]">
            <DialogHeader>
              <DialogTitle>{selectedService?.title}</DialogTitle>
            </DialogHeader>
            <ModalContent title={selectedService?.title} onOpenChange={() => setIsModalOpen(false)} />
          </DialogContent>
        </Dialog>
      )}
    </>
  );
};

export default ServicesGrid;
