import { Car, Wrench } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "General Repairs",
      description:
        "Comprehensive vehicle maintenance and repair services for all makes and models.",
    },
    {
      icon: <Car className="w-8 h-8" />,
      title: "Engine Diagnostics",
      description:
        "Advanced diagnostic equipment to quickly identify and resolve engine issues.",
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "Brake Service",
      description:
        "Complete brake inspection, pad replacement, and rotor resurfacing services.",
    },
    {
      icon: <Car className="w-8 h-8" />,
      title: "Oil Changes",
      description:
        "Premium oil and filter changes with complimentary vehicle inspection.",
    },
  ];

  return (
    <>
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {
                "From routine maintenance to complex repairs, we've got you covered with expert service and genuine parts."
              }
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-shadow"
              >
                <div className="text-blue-600 mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
