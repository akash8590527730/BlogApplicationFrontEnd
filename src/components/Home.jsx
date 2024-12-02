import React from 'react';
import Hero from '../Home/Hero';
import Trending from '../Home/Trending';
import Devotional from '../Home/Devotional';
import Creator from '../Home/Creator';

const Home = () => {
  return (
    <div className="bg-blue-50 min-h-screen"> {/* Light blue background color */}
      <div className="container mx-auto p-6">
        {/* Hero Section */}
        <Hero />
        
        {/* Trending Section */}
        <Trending />
        
        {/* Devotional Section */}
        <Devotional />
        
        {/* Creator Section */}
        <Creator />
      </div>
    </div>
  );
};

export default Home;
