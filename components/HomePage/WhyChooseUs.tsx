import { Clock, Star, Wrench } from "lucide-react";
import AboutUsImage from "@/assets/images/about-us.webp";
import Image from "next/image";

export default function WhyChooseUs() {
  return (
    <>
      <section id="about" className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Choose Us?
              </h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                      <Star className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Certified Technicians
                    </h3>
                    <p className="text-gray-600">
                      Our mechanics have years of experience and stay current
                      with the latest automotive technology.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                      <Wrench className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Quality Parts
                    </h3>
                    <p className="text-gray-600">
                      We use only high-quality aftermarket parts to ensure your
                      vehicle performs at its best.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Fast Service
                    </h3>
                    <p className="text-gray-600">
                      Repairs completed fast and professionally. We prioritize
                      your safety and satisfaction.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="px-4">
              <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-96 overflow-hidden">
                <Image
                  src={AboutUsImage}
                  alt="About Us"
                  className="w-full h-96 brightness-75"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
