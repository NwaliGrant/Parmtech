export default function CTA() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-[#E7E7E9]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0F172A] mb-3 sm:mb-4">
          Let's build something amazing
        </h2>

        {/* Subtext */}
        <p className="text-base sm:text-lg text-[#0F172A]/70 mb-6 sm:mb-8">
          Transform your digital vision into reality with our expert team of designers and developers
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
          <button className="bg-[#0F172A] text-[#E7E7E9] px-6 sm:px-8 py-3 rounded-lg font-semibold hover:bg-[#0F172A]/90 transition-colors duration-300 w-full sm:w-auto">
            Get started
          </button>
          <button className="border border-[#0F172A] text-[#0F172A] px-6 sm:px-8 py-3 rounded-lg font-semibold hover:bg-[#0F172A] hover:text-[#E7E7E9] transition-colors duration-300 w-full sm:w-auto">
            Contact us
          </button>
        </div>
      </div>
    </section>
  );
}


