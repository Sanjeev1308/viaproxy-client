import React from 'react';
import { Link } from 'react-router-dom';

const footerNav = [
  {
    title: 'LEGAL NOTICES',
    items: [
      {
        label: 'Who are we?',
        link: '#',
      },
      {
        label: 'What is JumpTalents?',
        link: '#',
      },
      {
        label: 'Social goals & values',
        link: '#',
      },
      {
        label: 'Why join us?',
        link: '#',
      },
      {
        label: 'Privacy & Terms of Use',
        link: '#',
      },
    ],
  },
  {
    title: 'STUDENT AREA',
    items: [
      {
        label: 'Become a student supporter',
        link: '#',
      },
      {
        label: 'Become a Campus Ambassador',
        link: '#',
      },
      {
        label: 'Become a Citizen Ambassador',
        link: '#',
      },
      {
        label: 'Becoming a Campus Jobber',
        link: '#',
      },
      {
        label: 'Finding challenges and good deals',
        link: '#',
      },
    ],
  },
  {
    title: 'PARTNERS AREA',
    items: [
      {
        label: 'Become a Partner Recruiter',
        link: '#',
      },
      {
        label: 'Become a Partner School',
        link: '#',
      },
      {
        label: 'Become a Partner Coach',
        link: '#',
      },
      {
        label: 'Become a territory promoter',
        link: '#',
      },
      {
        label: 'Become a solidarity trader',
        link: '#',
      },
    ],
  },
  {
    title: 'PARTNER SERVICES',
    items: [
      {
        label: 'Finding talent',
        link: '#',
      },
      {
        label: 'Find jobbers',
        link: '#',
      },
      {
        label: 'Promote your brands',
        link: '#',
      },
      {
        label: 'Become a supportive actor',
        link: '#',
      },
      {
        label: 'Initiate partnerships with schools',
        link: '#',
      },
    ],
  },
];

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Footer Column 1: About Us */}
          {/* <div>
            <h3 className="text-xl font-semibold mb-4">About Us</h3>
            <p className="text-sm text-gray-400">
              We are a leading e-commerce platform connecting people with their desired products and services.
            </p>
          </div> */}

          {/* Footer Column 2: Quick Links */}
          {footerNav.map((item) => {
            return (
              <div key={item.title}>
                <h3 className="text-lg font-medium mb-2">{item.title}</h3>
                <ul className="space-y-2">
                  {item.items.map((nestedItem) => (
                    <li key={nestedItem.label}>
                      <Link to={nestedItem.link} className="text-gray-400 hover:text-white">
                        {nestedItem.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <div className="mt-12 border-t border-gray-700 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
