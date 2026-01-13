import {
  Car,
  Paintbrush,
  Wind,
  Truck,
  Navigation,
  Building2,
  GraduationCap,
  KeyRound,
  Users,
  Settings,
} from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "Air-conditioning",
      icon: Wind,
      desc: "Inspection, repair, and re-gas for reliable cooling.",
    },
    {
      title: "Auto-mechatronics",
      icon: Settings,
      desc: "Electrical, sensors, and ECU troubleshooting & fixes.",
    },
    {
      title: "Body works",
      icon: Car,
      desc: "Panel repairs, dent removal, and body restoration.",
    },
    {
      title: "Spray painting",
      icon: Paintbrush,
      desc: "Full resprays, touch-ups, and colour matching.",
    },
    {
      title: "Vehicle & parts import",
      icon: Truck,
      desc: "Sourcing and importing vehicles and genuine parts.",
    },
    {
      title: "Vehicle sales",
      icon: Car,
      desc: "Quality vehicles with transparent inspection history.",
    },
    {
      title: "Vehicle Dealership",
      icon: Building2,
      desc: "Dealership support from sourcing to aftersales.",
    },
    {
      title: "Fleet Management",
      icon: Users,
      desc: "Maintenance planning, reporting, and cost control.",
    },
    {
      title: "Tracking",
      icon: Navigation,
      desc: "Vehicle tracking solutions for safety and visibility.",
    },
    {
      title: "Towing Vehicle",
      icon: Truck,
      desc: "Fast and dependable towing and recovery support.",
    },
    {
      title: "Training",
      icon: GraduationCap,
      desc: "Practical technical training for teams and individuals.",
    },
    {
      title: "Vehicle lease",
      icon: KeyRound,
      desc: "Flexible leasing options for personal and business.",
    },
    {
      title: "Hire Services",
      icon: Car,
      desc: "Short and long-term vehicle hire when you need it.",
    },
    {
      title: "Trucking/Haulage services",
      icon: Truck,
      desc: "Reliable haulage for goods and logistics needs.",
    },
  ];

  return (
    <>
      <section id="services" className="py-20 bg-white">
        <div className="max-w-[82.5rem] mx-auto px-4 sm:px-6 lg:px-8">
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map(({ title, icon: Icon, desc }, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-shadow"
              >
                <Icon className="h-6 w-6 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {title}
                </h3>
                <p className="text-gray-600">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
