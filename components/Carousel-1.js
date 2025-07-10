"use client";
import { useState, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
  Heart,
  Star,
  Shield,
} from "lucide-react";

const GirlsHotelCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  const carouselData = [
    {
      id: 1,
      bgGradient: "from-yellow-50 via-orange-50 to-yellow-100",
      accentColor: "from-orange-500 to-amber-500",
      title: "Safe & Secure Haven",
      subtitle: "FOR EVERY GIRL'S COMFORT",
      description:
        "Experience luxury and safety in our premium girls-only hostel with 24/7 security and modern amenities.",
      buttonText: "Book Now",
      imgSrc: "/media/now.png",
      pattern: "flowers",
      icon: <Shield className="w-6 h-6 text-orange-500" />,
    },
    {
      id: 2,
      bgGradient: "from-yellow-100 via-orange-50 to-yellow-50",
      accentColor: "from-amber-500 to-orange-400",
      title: "Luxurious Living",
      subtitle: "Designed for Modern Women",
      description:
        "Elegant rooms with premium furnishing, high-speed WiFi, and dedicated study areas for the ambitious you.",
      buttonText: "Explore Rooms",
      imgSrc: "/media/hostelSofa.png",
      pattern: "butterflies",
      icon: <Heart className="w-6 h-6 text-orange-500" />,
    },
    {
      id: 3,
      bgGradient: "from-orange-100 via-yellow-50 to-orange-50",
      accentColor: "from-orange-600 to-orange-400",
      title: "Smart Management",
      subtitle: "Effortless Hostel Experience",
      description:
        "Manage your stay, payments, and services through our intuitive app designed with women's needs in mind.",
      buttonText: "Get App",
      imgSrc: "/media/oneapp.png",
      pattern: "hearts",
      icon: <Star className="w-6 h-6 text-orange-500" />,
    },
    {
      id: 4,
      bgGradient: "from-yellow-100 via-orange-50 to-yellow-50",
      accentColor: "from-orange-500 to-amber-500",
      title: "Connect Anywhere",
      subtitle: "Stay Connected, Stay Safe",
      description:
        "Access all services from any device with our secure, user-friendly platform built for modern women.",
      buttonText: "Connect Now",
      imgSrc: "/media/wow1.png",
      pattern: "stars",
      platforms: ["iOS", "Android", "Web"],
    },
  ];

  useEffect(() => {
    if (!isPlaying || isHovered) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselData.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isPlaying, isHovered]);

  const goToSlide = (index) => setCurrentSlide(index);
  const nextSlide = () =>
    setCurrentSlide((prev) => (prev + 1) % carouselData.length);
  const prevSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + carouselData.length) % carouselData.length);
  const togglePlayPause = () => setIsPlaying((prev) => !prev);

  const renderPattern = (pattern) => {
    const sharedClass = "absolute inset-0 overflow-hidden pointer-events-none";
    switch (pattern) {
      case "flowers":
        return <div className={`${sharedClass} opacity-10`}>{/* Optional pattern */}</div>;
      case "butterflies":
        return <div className={`${sharedClass} opacity-10`}>{/* Optional pattern */}</div>;
      case "hearts":
        return (
          <div className={`${sharedClass} opacity-20`}>
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="absolute animate-float"
                style={{
                  left: `${Math.random() * 80 + 10}%`,
                  top: `${Math.random() * 80 + 10}%`,
                  animationDelay: `${i * 500}ms`,
                }}
              >
                <Heart className="w-6 h-6 text-orange-400 fill-current" />
              </div>
            ))}
          </div>
        );
      case "stars":
        return (
          <div className={`${sharedClass} opacity-20`}>
            {[...Array(12)].map((_, i) => (
              <div
                key={i}
                className="absolute animate-twinkle"
                style={{
                  left: `${Math.random() * 90 + 5}%`,
                  top: `${Math.random() * 90 + 5}%`,
                  animationDelay: `${i * 300}ms`,
                }}
              >
                <Star className="w-4 h-4 text-orange-300 fill-current" />
              </div>
            ))}
          </div>
        );
    }
  };

  return (
    <div
      className="relative h-screen w-full overflow-hidden font-serif"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background */}
      <div className={`absolute inset-0 bg-gradient-to-br ${carouselData[currentSlide].bgGradient} transition-all duration-1000 pointer-events-none z-0`}>
        {renderPattern(carouselData[currentSlide].pattern)}
        <div className="absolute top-10 right-10 w-32 h-32 bg-white/10 rounded-full blur-3xl animate-pulse pointer-events-none" />
        <div className="absolute bottom-20 left-10 w-24 h-24 bg-yellow-100/40 rounded-full blur-2xl animate-pulse delay-1000 pointer-events-none" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8 text-center lg:text-left">
              <button
                className={`inline-flex items-center px-8 py-4 rounded-full bg-gradient-to-r ${carouselData[currentSlide].accentColor} text-white font-semibold text-lg shadow-lg transform hover:scale-105 transition-all duration-300 hover:shadow-xl group`}
              >
                <span className="mr-3 group-hover:scale-110 transition-transform duration-300">
                  {carouselData[currentSlide].icon}
                </span>
                {carouselData[currentSlide].buttonText}
                <div className="ml-3 w-2 h-2 bg-white rounded-full animate-ping" />
              </button>

              <h1 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-orange-600 to-amber-500 bg-clip-text text-transparent mb-4 leading-tight">
                {carouselData[currentSlide].title}
              </h1>
              <h2 className="text-2xl lg:text-3xl font-light text-orange-700 mb-6 italic">
                {carouselData[currentSlide].subtitle}
              </h2>
              <p className="text-lg lg:text-xl text-orange-800 leading-relaxed max-w-2xl font-light">
                {carouselData[currentSlide].description}
              </p>

              {carouselData[currentSlide].platforms && (
                <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                  {carouselData[currentSlide].platforms.map((platform) => (
                    <div
                      key={platform}
                      className="px-6 py-3 bg-white/70 backdrop-blur-sm rounded-full border border-orange-200 text-orange-700 font-medium hover:bg-white/90 transition-all duration-300 transform hover:scale-105 shadow-sm"
                    >
                      {platform}
                    </div>
                  ))}
                </div>
              )}

              <div className="flex flex-wrap gap-6 justify-center lg:justify-start text-sm text-orange-700">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                  <span>24/7 Security</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                  <span>Premium Amenities</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                  <span>Girls Only</span>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="hidden lg:block z-10">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-yellow-100/30 to-orange-100/30 rounded-3xl transform rotate-3 blur-sm" />
                <div className="absolute inset-0 bg-gradient-to-bl from-orange-100/30 to-yellow-100/30 rounded-3xl transform -rotate-3 blur-sm" />
                <div className="relative bg-white/20 backdrop-blur-sm rounded-3xl p-6 border border-white/30">
                  <img
                    src={carouselData[currentSlide].imgSrc}
                    alt="slide"
                    className="w-full h-auto max-w-lg mx-auto transform hover:scale-105 transition-transform duration-500 filter drop-shadow-2xl rounded-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center space-x-6 z-50">
        <button
          onClick={togglePlayPause}
          className="p-3 bg-white/80 backdrop-blur-sm rounded-full border border-orange-200 text-orange-600 hover:bg-white/90 transition-all duration-300 shadow-lg"
        >
          {isPlaying ? <Pause size={16} /> : <Play size={16} />}
        </button>

        <div className="flex space-x-3">
          {carouselData.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-300 rounded-full ${
                index === currentSlide
                  ? "w-8 h-3 bg-gradient-to-r from-orange-500 to-amber-500"
                  : "w-3 h-3 bg-orange-300 hover:bg-orange-400"
              }`}
            />
          ))}
        </div>
      </div>

      <button
        onClick={prevSlide}
        className="z-50 absolute left-6 top-1/2 transform -translate-y-1/2 p-4 bg-white/80 backdrop-blur-sm rounded-full border border-orange-200 text-orange-600 hover:bg-white/90 transition-all duration-300 hover:scale-110 shadow-lg"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="z-50 absolute right-6 top-1/2 transform -translate-y-1/2 p-4 bg-white/80 backdrop-blur-sm rounded-full border border-orange-200 text-orange-600 hover:bg-white/90 transition-all duration-300 hover:scale-110 shadow-lg"
      >
        <ChevronRight size={24} />
      </button>

      <div className="absolute bottom-0 left-0 right-0 h-1 bg-orange-200/50 z-20">
        <div
          className={`h-full bg-gradient-to-r ${carouselData[currentSlide].accentColor} transition-all duration-300`}
          style={{
            width: `${((currentSlide + 1) / carouselData.length) * 100}%`,
          }}
        />
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        @keyframes twinkle {
          0%, 100% {
            opacity: 0.3;
            transform: scale(0.8);
          }
          50% {
            opacity: 1;
            transform: scale(1.2);
          }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-twinkle {
          animation: twinkle 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default GirlsHotelCarousel;
