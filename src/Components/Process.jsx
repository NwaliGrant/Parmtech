import { ArrowRight } from "lucide-react";
import discoveryImage from "../assets/process-discovery.jpg";
import prototypeImage from "../assets/process-prototype.jpg";
import testImage from "../assets/process-test.jpg";


const steps = [
  {
    title: "Discovery",
    heading: "Understanding your vision",
    description:
      "Deep-dive into your business goals, challenges, and user requirements",
    image: discoveryImage,
    buttons: [
      { label: "Start", primary: true },
      { label: "Explore", primary: false },
    ],
  },
  {
    title: "Design and prototype",
    heading: "Design and prototype",
    description: "Crafting intuitive and engaging solutions",
    image: prototypeImage,
    buttons: [{ label: "Review", primary: false }],
  },
  {
    title: "Test and refine",
    heading: "Test and refine",
    description: "Rigorous quality assurance and continuous improvement",
    image: testImage,
    buttons: [{ label: "Validate", primary: false }],
  },
];

export default function Process() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-[#0F172A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-12 lg:mb-16">
          <p className="text-white/70 text-xs sm:text-sm uppercase tracking-wider mb-2">
            Process
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
            How we build and deliver
          </h2>
          <p className="text-white/80 text-base sm:text-lg">
            Our systematic approach to creating exceptional digital experiences
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative rounded-lg overflow-hidden group"
            >
              <div className="aspect-[4/3] relative">
                <img
                  src={step.image}
                  alt={step.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/20" />

                {/* Overlay Content */}
                <div className="absolute inset-0 p-4 sm:p-6 flex flex-col justify-end text-white">
                  <p className="text-xs sm:text-sm text-white/80 mb-1 sm:mb-2">
                    {step.title}
                  </p>
                  <h3 className="text-xl sm:text-2xl font-semibold mb-2">
                    {step.heading}
                  </h3>
                  <p className="text-sm sm:text-base text-white/90 mb-3 sm:mb-4">
                    {step.description}
                  </p>

                  {/* Buttons */}
                  <div className="flex flex-wrap gap-2 sm:gap-3">
                    {step.buttons.map((button, btnIndex) => (
                      <a
                        key={btnIndex}
                        href="#"
                        className={`inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2 rounded-md text-xs sm:text-sm font-medium transition-colors ${
                          button.primary
                            ? "bg-white text-[#0F172A] hover:bg-white/90"
                            : "bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm"
                        }`}
                      >
                        {button.label}
                        <ArrowRight className="ml-1 sm:ml-2 h-3 w-3 sm:h-4 sm:w-4" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
