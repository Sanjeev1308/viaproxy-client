import { Button } from '@/components/ui/button'; // Adjust the import based on your ShadCN setup
import { Menu } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4 flex justify-between items-center py-4">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <img
            src="https://dev.viaproxy.eu/admin/assets/images/logo/logo_dark.png"
            alt="Logo"
            className="w-40 h-15 rounded-md"
          />
        </Link>

        {/* Navigation Links (Optional) */}
        {/* <nav className="hidden md:flex space-x-6">
          <Link to="/house-of-commerce" className="hover:text-gray-300">
            House of Commerce
          </Link>
          <Link to="/men" className="hover:text-gray-300">
            Men
          </Link>
          <Link to="/company" className="hover:text-gray-300">
            Company
          </Link>
          <Link to="/stores" className="hover:text-gray-300">
            Stores
          </Link>
        </nav> */}

        {/* Action Buttons */}
        <div className="flex items-center space-x-4">
          <Link to="/auth/login" className="hover:text-gray-300">
            Login
          </Link>
          <Link to="/auth/register?role=student" className="hover:text-gray-300">
            Student Register
          </Link>
          <Button variant="ghost" className="block md:hidden" aria-label="Open menu">
            <Menu size={24} />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
