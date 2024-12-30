import { Button } from '@/components/ui/button';

const SupportCauses = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800">Support Causes</h2>
        {/* <p className="text-gray-600 mt-2">Handpicked items just for you, showcasing the best of the season.</p> */}
      </div>

      {/* Causes Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {/* Card 1 */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden group hover:shadow-xl transition-shadow">
          <img
            src="https://via.placeholder.com/400" // Example image URL
            alt="Cause 1"
            className="w-full h-48 object-cover group-hover:scale-105 transition-all"
          />
          <div className="p-6">
            <h3 className="text-xl font-semibold text-gray-800">Cause Name 1</h3>
            <p className="text-gray-600 mt-2">
              A short description about this cause and its impact on the community. It can involve social,
              environmental, or other important areas of support.
            </p>
          </div>
          <div className="p-4 border-t">
            <Button className="w-full">Support Now</Button>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden group hover:shadow-xl transition-shadow">
          <img
            src="https://via.placeholder.com/400" // Example image URL
            alt="Cause 2"
            className="w-full h-48 object-cover group-hover:scale-105 transition-all"
          />
          <div className="p-6">
            <h3 className="text-xl font-semibold text-gray-800">Cause Name 2</h3>
            <p className="text-gray-600 mt-2">
              A brief description of the cause, focusing on the issues it seeks to solve and the community it aims to
              support.
            </p>
          </div>
          <div className="p-4 border-t">
            <Button className="w-full">Support Now</Button>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden group hover:shadow-xl transition-shadow">
          <img
            src="https://via.placeholder.com/400" // Example image URL
            alt="Cause 3"
            className="w-full h-48 object-cover group-hover:scale-105 transition-all"
          />
          <div className="p-6">
            <h3 className="text-xl font-semibold text-gray-800">Cause Name 3</h3>
            <p className="text-gray-600 mt-2">
              Here’s a brief description of another cause that requires your support. Learn more about its mission and
              values.
            </p>
          </div>
          <div className="p-4 border-t">
            <Button className="w-full">Support Now</Button>
          </div>
        </div>

        {/* Card 4 */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden group hover:shadow-xl transition-shadow">
          <img
            src="https://via.placeholder.com/400" // Example image URL
            alt="Cause 4"
            className="w-full h-48 object-cover group-hover:scale-105 transition-all"
          />
          <div className="p-6">
            <h3 className="text-xl font-semibold text-gray-800">Cause Name 4</h3>
            <p className="text-gray-600 mt-2">
              An inspiring cause that aims to bring positive change. Your support will make a real difference in the
              lives of those in need.
            </p>
          </div>
          <div className="p-4 border-t">
            <Button className="w-full">Support Now</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportCauses;
