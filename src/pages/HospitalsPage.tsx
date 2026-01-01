import React from 'react';

const HospitalsPage: React.FC = () => {
  return (
    <div className="bg-neutral min-h-screen">
      {/* Header Section */}
      <div className="bg-deep-navy text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Latest Updates</h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Follow our journey and stay connected with our latest activities, patient stories, and genetic awareness initiatives.
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 py-12 space-y-12">
        {/* Facebook Feed */}
        <div className="flex flex-col items-center">
          <h2 className="text-2xl font-serif font-bold text-deep-navy mb-6">Recent Posts</h2>
          <div className="w-full max-w-[1000px] h-[800px] bg-white rounded-xl shadow-lg overflow-hidden p-4">
            <iframe
              src="https://widgets.sociablekit.com/facebook-page-posts/iframe/25632431"
              frameborder="0"
              width="1000px"
              height="100%"
              title="Facebook Posts"
              className="w-full h-full"
            ></iframe>
          </div>
        </div>

        {/* Instagram Feed */}
        <div className="flex flex-col items-center">
          <h2 className="text-2xl font-serif font-bold text-deep-navy mb-6">Photo Gallery</h2>
          <div className="w-full max-w-[1000px] h-[800px] bg-white rounded-xl shadow-lg overflow-hidden p-4">
            <iframe
              src="https://widgets.sociablekit.com/instagram-feed/iframe/25632451"
              frameborder="0"
              width="1000px"
              height="100%"
              title="Instagram Feed"
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HospitalsPage;

