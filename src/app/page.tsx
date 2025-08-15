'use client';

import Image from 'next/image';

export default function Home() {
  const handleContact = () => {
    const to = encodeURIComponent('Info@sopbcenters.com');
    const subject = encodeURIComponent('contact from website');
    const body = encodeURIComponent('Message from website');
    window.open(`mailto:${to}?subject=${subject}&body=${body}`, '_blank');
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(/home_back.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-30"
      style={{opacity: '.7'}}></div>
      
      {/* Content */}
      <div className="max-w-md w-full text-center space-y-8 relative z-10">
        {/* Logo */}
        <div className="flex justify-center">
          <Image
            src="/side-out-logo.svg"
            alt="Sideout Pickleball Logo"
            width={120}
            height={120}
            priority
          />
        </div>

        {/* Title */}
        <h1 className="text-6xl font-bold text-white font-krona-one">
          Sideout Pickleball
        </h1>

        {/* Paragraph */}
        <h2 className="text-white text-2xl font-bold font-krona-one leading-relaxed leading-none">
          Best Courts, Best lighting, Best Play
        </h2>

        <p className="text-white font-krona-one text-lg">Our site is currently undergoing maintenance.</p>

        {/* Contact Button */}
        <div className="flex justify-center">
          <button
            onClick={handleContact}
            className="py-3 px-4 rounded-md hover:opacity-90 font-bold focus:outline-none focus:ring-2 focus:ring-offset-2 transition-opacity duration-200 font-medium font-krona-one"
            style={{
              backgroundColor: '#c5f381',
              color: '#43546E',
              fontWeight: 'bold',
              width: '150px'
            }}
          >
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
}
