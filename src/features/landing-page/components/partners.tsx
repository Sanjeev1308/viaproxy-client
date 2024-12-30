import { Button } from '@/components/ui/button';

const EcoSolidarityPartners = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800">Eco-Solidarity Partners</h2>
        {/* <p className="text-gray-600 mt-2">Handpicked items just for you, showcasing the best of the season.</p> */}
      </div>

      {/* Partner Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {/* Card 1 */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <img
            src="https://via.placeholder.com/400" // Example image URL
            alt="Partner 1"
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h3 className="text-xl font-semibold">Partner Name 1</h3>
            <p className="text-gray-600 mt-2">
              Short description about the partner and their initiatives related to eco-solidarity.
            </p>
            <div className="mt-4 flex justify-between text-sm text-gray-500">
              <span>Start: Jan 2023</span>
              <span>End: Dec 2023</span>
            </div>
          </div>
          <div className="p-4 border-t">
            <Button variant="outline" className="w-full">
              See More
            </Button>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <img
            src="https://via.placeholder.com/400" // Example image URL
            alt="Partner 2"
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h3 className="text-xl font-semibold">Partner Name 2</h3>
            <p className="text-gray-600 mt-2">
              Short description about the partner and their initiatives related to eco-solidarity.
            </p>
            <div className="mt-4 flex justify-between text-sm text-gray-500">
              <span>Start: Feb 2023</span>
              <span>End: Nov 2023</span>
            </div>
          </div>
          <div className="p-4 border-t">
            <Button variant="outline" className="w-full">
              See More
            </Button>
          </div>
        </div>

        {/* Add more partner cards similarly */}
      </div>
    </div>
  );
};

export default EcoSolidarityPartners;
