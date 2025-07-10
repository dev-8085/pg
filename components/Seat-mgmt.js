"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    title: "Smart Capacity Planning",
    description: "Automatically optimize room usage based on real-time demand",
    stat: "95%",
    statLabel: "Utilization Rate"
  },
  {
    title: "Instant Availability",
    description: "See which rooms are available at a glance with our color-coded system",
    stat: "0.5s",
    statLabel: "Update Speed"
  },
  {
    title: "Dynamic Pricing",
    description: "Automatically adjust rates based on occupancy and demand",
    stat: "30%",
    statLabel: "Revenue Boost"
  },
  {
    title: "Mobile Management",
    description: "Control everything from your smartphone with our dedicated app",
    stat: "24/7",
    statLabel: "Accessibility"
  }
];

const SeatManagementV2 = () => {
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);
  const statRefs = useRef([]);
  const videoRef = useRef(null);

  useEffect(() => {
    // Section entrance animation
    gsap.from(sectionRef.current, {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%"
      }
    });

    // Card animations
    cardRefs.current.forEach((card, i) => {
      gsap.from(card, {
        opacity: 0,
        x: i % 2 === 0 ? -50 : 50,
        duration: 0.8,
        delay: i * 0.15,
        ease: "back.out(1.2)",
        scrollTrigger: {
          trigger: card,
          start: "top 75%"
        }
      });
    });

    // Stat counter animations
    statRefs.current.forEach((stat, i) => {
      gsap.from(stat, {
        innerText: 0,
        duration: 2,
        snap: { innerText: 1 },
        delay: i * 0.3,
        scrollTrigger: {
          trigger: stat,
          start: "top 80%"
        }
      });
    });

    // Video scale animation
    gsap.from(videoRef.current, {
      scale: 0.9,
      duration: 1.5,
      ease: "elastic.out(1, 0.5)",
      scrollTrigger: {
        trigger: videoRef.current,
        start: "top 75%"
      }
    });
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative py-20 px-4 sm:px-6 lg:px-8 bg-[#0a192f] overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-[#64ffda] mix-blend-screen filter blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full bg-[#112240] mix-blend-multiply filter blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#ccd6f6] mb-4">
            Next-Gen <span className="text-[#64ffda]">Room Optimization</span>
          </h2>
          <p className="text-xl text-[#8892b0] max-w-3xl mx-auto">
            Revolutionize how you manage spaces with our intelligent room management system
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left side - Dashboard UI */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, i) => (
              <div
                key={i}
                ref={el => cardRefs.current[i] = el}
                className="bg-[#112240] p-6 rounded-xl border border-[#1f2d52] hover:border-[#64ffda] transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <div className="flex items-start space-x-4">
                  <div className="bg-[#64ffda] bg-opacity-10 p-3 rounded-lg">
                    <div className="text-2xl font-bold text-[#64ffda]">
                      <span ref={el => statRefs.current[i] = el}>{feature.stat}</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#ccd6f6] mb-1">{feature.title}</h3>
                    <p className="text-[#8892b0]">{feature.description}</p>
                    <div className="mt-2 text-xs text-[#64ffda] uppercase tracking-wider">
                      {feature.statLabel}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right side - Video demo */}
          <div 
            ref={videoRef}
            className="relative rounded-2xl overflow-hidden border-2 border-[#64ffda] shadow-2xl"
          >
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-auto"
            >
              <source src="/videos/ok.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a192f] via-transparent to-transparent opacity-50"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-[#0a192f] to-transparent">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <div className="text-sm text-[#ccd6f6] ml-2">room-dashboard.exe</div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA at bottom */}
        <div className="mt-16 text-center">
          <button className="px-8 py-3 bg-transparent border-2 border-[#64ffda] text-[#64ffda] rounded-md font-medium hover:bg-[#64ffda] hover:text-[#0a192f] transition-all duration-300 group">
            <span className="relative z-10">Request Demo</span>
            <span className="absolute inset-0 bg-[#64ffda] scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default SeatManagementV2;