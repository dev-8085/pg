"use client";
import { useState, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
  Smartphone,
  Tablet,
  Monitor,
} from "lucide-react";

const carouselData = [
  {
    bgGradient: "from-slate-100 via-gray-100 to-zinc-100",
    overlayPattern: "geometric",
    textColor: "text-slate-700",
    pcolor: "text-orange-600",
    title: "NO WORRY FOR HUSTLE",
    description: "TO GIVE YOUR HOSTEL / PG ON RENT",
    description1: "S-MART WAY TO RENT YOUR PROPERTY",
    buttonColor: "from-orange-500 to-red-500",
    buttonText: "NOW",
    imgSrc: "/media/now.png",
    textSize: "text-4xl lg:text-7xl",
    h4Size: "text-3xl lg:text-5xl",
    accentColor: "orange-500",
  },
  {
    bgGradient: "from-amber-200 via-yellow-100 to-orange-100",
    overlayPattern: "waves",
    textColor: "text-gray-700",
    pcolor: "text-slate-800",
    title: "Hostel/PG management On your finger tip",
    description:
      "Are you tired of juggling multiple tasks and struggling? To keep up with the demands of running a hostel or PG business..!",
    description1:
      "Say goodbye to stress & troubles Hello to efficiency with our innovative System.You assuredly boost you businesses with this S-mart system.",
    buttonColor: "from-slate-600 to-gray-700",
    buttonText: "One Stop Solution",
    imgSrc: "/media/hostelSofa.png",
    textSize: "text-3xl lg:text-5xl",
    h4Size: "text-2xl lg:text-4xl",
    accentColor: "slate-600",
  },
  {
    bgGradient: "from-gray-900 via-slate-800 to-zinc-900",
    overlayPattern: "dots",
    textColor: "text-orange-400",
    pcolor: "text-teal-400",
    title: "To manage your all business",
    description:
      "Manage all your business in just one dashboard. 10 second is much enough to access your multiple branches.",
    description1:
      "S-Mart system provides you digital platform for hassle free management to your multiple businesses, free from paper work, provides you S-Mart team , all things you needed on just one click with super secured cloud storage",
    buttonColor: "from-teal-500 to-cyan-500",
    buttonText: "One app",
    imgSrc: "/media/oneapp.png",
    textSize: "text-4xl lg:text-6xl",
    h4Size: "text-2xl lg:text-4xl",
    accentColor: "teal-500",
  },
  {
    bgGradient: "from-blue-50 via-sky-50 to-indigo-50",
    overlayPattern: "circles",
    textColor: "text-gray-700",
    pcolor: "text-gray-800",
    title:
      "Accessibility Anywhere, Anytime: Seamlessly manage your business from any device, Mobile-Tab-Desktop Compatibility",
    description: "Tailored Applications for Every Platform",
    platforms: [
      { name: "IOS", icon: <Smartphone className="w-5 h-5" /> },
      { name: "ANDROID", icon: <Tablet className="w-5 h-5" /> },
      { name: "WINDOWS", icon: <Monitor className="w-5 h-5" /> },
    ],
    buttonColor: "from-blue-500 to-indigo-500",
    buttonText: "WOW",
    imgSrc: "/media/wow1.png",
    textSize: "text-3xl lg:text-5xl",
    h4Size: "text-2xl lg:text-4xl",
    accentColor: "blue-500",
  },
];

const EnhancedCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!isPlaying || isHovered) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselData.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isPlaying, isHovered]);

  const nextSlide = () =>
    setCurrentSlide((prev) => (prev + 1) % carouselData.length);
  const prevSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + carouselData.length) % carouselData.length);

  const goToSlide = (index) => setCurrentSlide(index);
  const togglePlayPause = () => setIsPlaying((prev) => !prev);

  const current = carouselData[currentSlide];

  const renderOverlayPattern = (pattern) => {
    const patterns = {
      geometric: (
        <div className="absolute inset-0 overflow-hidden opacity-10">
          <div className="absolute top-20 left-20 w-32 h-32 bg-white transform rotate-45 animate-spin-slow"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 bg-white transform rotate-45 animate-spin-slow delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 w-16 h-16 bg-white transform rotate-45 animate-spin-slow delay-2000"></div>
        </div>
      ),
      waves: (
        <div className="absolute inset-0 overflow-hidden opacity-15">
          <svg className="absolute w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0,30 Q25,10 50,30 T100,30 V0 H0 Z" fill="currentColor" className="text-white animate-pulse" />
            <path d="M0,70 Q25,50 50,70 T100,70 V100 H0 Z" fill="currentColor" className="text-white animate-pulse delay-500" />
          </svg>
        </div>
      ),
      dots: (
        <div className="absolute inset-0 overflow-hidden opacity-10">
          <div className="grid grid-cols-8 gap-8 h-full p-8">
            {[...Array(32)].map((_, i) => (
              <div
                key={i}
                className="w-3 h-3 bg-white rounded-full animate-pulse"
                style={{ animationDelay: `${i * 150}ms` }}
              ></div>
            ))}
          </div>
        </div>
      ),
      circles: (
        <div className="absolute inset-0 overflow-hidden opacity-10">
          <div className="absolute top-10 left-10 w-40 h-40 bg-white rounded-full animate-bounce-slow"></div>
          <div className="absolute bottom-10 right-10 w-32 h-32 bg-white rounded-full animate-bounce-slow delay-1000"></div>
          <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-white rounded-full animate-bounce-slow delay-2000"></div>
        </div>
      ),
    };
    return patterns[pattern];
  };

  return (
    <div
      className={`relative h-screen w-full overflow-hidden bg-gradient-to-br ${current.bgGradient} transition-all duration-1000`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {renderOverlayPattern(current.overlayPattern)}

      <div className="absolute top-20 right-20 w-20 h-20 bg-white/5 rounded-full blur-xl animate-float"></div>
      <div className="absolute bottom-32 left-16 w-16 h-16 bg-white/5 rounded-full blur-xl animate-float delay-1000"></div>

      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className={`space-y-8 ${current.textColor}`}>
              <div className="animate-slideInUp">
                <button className={`px-8 py-4 rounded-full bg-gradient-to-r ${current.buttonColor} text-white font-bold text-lg shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl transform group`}>
                  <span className="relative z-10">{current.buttonText}</span>
                  <div className="absolute inset-0 bg-white/20 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></div>
                </button>
              </div>

              <div className="animate-slideInUp delay-200">
                <h1 className={`${current.textSize} font-bold leading-tight mb-4`}>
                  {current.title}
                </h1>
              </div>

              <div className="animate-slideInUp delay-400">
                <h4 className={`${current.h4Size} ${current.pcolor} font-semibold mb-4`}>
                  {current.description}
                </h4>
                <p className={`text-lg lg:text-xl max-w-2xl ${current.pcolor} leading-relaxed`}>
                  {current.description1}
                </p>
              </div>

              {current.platforms && (
                <div className="animate-slideInUp delay-600">
                  <div className="flex flex-wrap gap-4 mt-6">
                    {current.platforms.map((platform, index) => (
                      <div
                        key={platform.name}
                        className="flex items-center gap-3 px-6 py-3 bg-white/80 backdrop-blur-sm rounded-xl border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                        style={{ animationDelay: `${index * 200}ms` }}
                      >
                        <span className="text-gray-600">{platform.icon}</span>
                        <span className="font-semibold text-gray-700">{platform.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="hidden lg:block animate-slideInRight">
              <div className="relative group">
                <div className={`absolute inset-0 bg-gradient-to-r ${current.buttonColor} rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500`}></div>
                <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-6 border border-white/20 shadow-2xl">
                  <img
                    src={current.imgSrc}
                    alt="slide visual"
                    className="w-full h-auto max-w-lg mx-auto rounded-2xl shadow-lg transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Play/Pause and Dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center space-x-6 z-50">
        <button
          onClick={togglePlayPause}
          className="p-3 bg-white/90 backdrop-blur-sm rounded-full border border-gray-200 text-gray-600 hover:bg-white transition-all duration-300 shadow-lg hover:shadow-xl"
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
                  ? `w-8 h-3 bg-${current.accentColor}`
                  : `w-3 h-3 bg-${current.accentColor}/50 hover:bg-${current.accentColor}/75`
              }`}
            />
          ))}
        </div>
      </div>

      {/* ✅ Fixed Arrow Buttons with z-50 */}
      <button
        onClick={prevSlide}
        className="z-50 absolute left-3 top-1/2 transform -translate-y-1/2 p-4 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 border border-gray-200"
      >
        <ChevronLeft size={18} className="text-gray-600" />
      </button>
      <button
        onClick={nextSlide}
        className="z-50 absolute right-3 top-1/2 transform -translate-y-1/2 p-4 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 border border-gray-200"
      >
        <ChevronRight size={18} className="text-gray-600" />
      </button>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/30">
        <div
          className={`h-full bg-gradient-to-r ${current.buttonColor} transition-all duration-300`}
          style={{
            width: `${((currentSlide + 1) / carouselData.length) * 100}%`,
          }}
        />
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
        }

        .animate-slideInUp { animation: slideInUp 0.8s ease-out forwards; }
        .animate-slideInRight { animation: slideInRight 0.8s ease-out forwards; }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-spin-slow { animation: spin-slow 20s linear infinite; }
        .animate-bounce-slow { animation: bounce-slow 4s ease-in-out infinite; }
        .delay-200 { animation-delay: 200ms; }
        .delay-400 { animation-delay: 400ms; }
        .delay-600 { animation-delay: 600ms; }
        .delay-500 { animation-delay: 500ms; }
        .delay-1000 { animation-delay: 1000ms; }
        .delay-2000 { animation-delay: 2000ms; }
      `}</style>
    </div>
  );
};

export default EnhancedCarousel;
