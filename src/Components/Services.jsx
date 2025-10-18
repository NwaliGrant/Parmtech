import { ArrowRight } from "lucide-react";
import webImage from "../assets/service-web.jpg";
import designImage from "../assets/service-design.jpg";
import aiImage from "../assets/service-ai.jpg";
import consultingImage from "../assets/service-consulting.jpg";

export default function Services() {
  const services = [
    {
      title: "Web",
      subtitle: "Web development that scales",
      description:
        "Custom websites built with modern frameworks and performance in mind",
      image: webImage,
    },
    {
      title: "Design",
      subtitle: "UI/UX design that converts",
      description: "User-centered interfaces that engage and inspire",
      image: designImage,
    },
    {
      title: "AI",
      subtitle: "AI-powered business solutions",
      description:
        "Smart automation tools that transform workflows and increase efficiency",
      image: aiImage,
    },
    {
      title: "Consulting",
      subtitle: "Strategic technology consulting",
      description:
        "Expert guidance for startups and enterprises navigating digital transformation",
      image: consultingImage,
    },
  ];

  return (
    <section id="services" className="py-12 sm:py-16 lg:py-20 bg-[#0F172A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-12 lg:mb-16">
          <p className="text-white/70 text-xs sm:text-sm uppercase tracking-wider mb-2">
            Innovate
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
            Our core services
          </h2>
          <p className="text-white/80 text-base sm:text-lg">
            Powerful digital solutions for modern businesses
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow group"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4 sm:p-6">
                <p className="text-xs sm:text-sm text-gray-500 mb-2">
                  {service.title}
                </p>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">
                  {service.subtitle}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">
                  {service.description}
                </p>
                <a
                  href="#"
                  className="inline-flex items-center text-[#0F172A] hover:text-[#0F172A]/80 font-medium transition-colors group/link"
                >
                  Learn more
                  <ArrowRight className="ml-2 h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
