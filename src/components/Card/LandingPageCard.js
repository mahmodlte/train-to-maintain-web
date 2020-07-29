import React from 'react';

const LandingPageCard = ({ image, title }) => {
  return (
    <>
      <div className=" max-h-lg max-w-sm sm:w-1/2 lg:w-1/4  overflow-hidden shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 rounded">
        <img
          className="w-full"
          src="data:image/jpeg;base64,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"
        />
        <div className="font-bold text-xl text-purple-600 text-center p-10">
          Meals
        </div>
      </div>
    </>
  );
};
export default LandingPageCard;