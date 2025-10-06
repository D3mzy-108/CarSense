import BannerImage from "@/assets/images/banner-image.jpg";

export default function HeroSection() {
  return (
    <>
      <section
        id="top"
        className="pt-24 pb-32 text-white px-4 md:px-20"
        style={{
          backgroundImage: `url(${BannerImage.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundBlendMode: "darken",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
          backgroundColor: "#10182880",
        }}
      >
        <div className="container px-4 sm:px-6 lg:px-8 text-start max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Expert Auto Repair & Maintenance
          </h1>
          <p className="text-xl mb-8 text-blue-100">
            Trusted by thousands of drivers for honest, reliable, and affordable
            automotive services.
          </p>
          <a
            href="#contact"
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-center"
          >
            Schedule Service
          </a>
        </div>
      </section>
    </>
  );
}
