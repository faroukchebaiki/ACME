
import React from 'react';

const FaroukCard: React.FC = () => {
  return (
    <div className="fixed bottom-0 left ml-5 mb-4 z-50">
      <div className="bg-[#001a00] p-2 rounded-lg shadow-lg">
        <p className="text-sm text-[#00ff00] font-mono">
          Coded by{' '}
          <a
            href="https://www.farouk.uk"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-white"
          >
            Farouk
          </a>
       
        </p>
      </div>
    </div>
  );
};

export default FaroukCard;
