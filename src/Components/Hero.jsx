import heroImage from "../assets/Image_fx.jpg"; // adjust path if needed

export default function Hero() {
  return (
    <section className="relative h-[500px] sm:h-[600px] lg:h-[800px] flex items-center justify-center overflow-hidden">
      {/* Background Image + Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
          What we do at Spider UX
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto">
          We transform ideas into exceptional digital experiences through innovative design and cutting-edge technology.
          Our team crafts software that pushes the boundaries of what technology can achieve.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
          <button className="bg-white text-[#0F172A] hover:bg-white/90 font-medium py-3 px-8 rounded-lg w-full sm:w-auto transition">
            Explore
          </button>
          <button className="border border-white text-white bg-transparent hover:bg-white hover:text-[#0F172A] font-medium py-3 px-8 rounded-lg w-full sm:w-auto transition">
            Contact
          </button>
        </div>
      </div>
    </section>
  );
}
