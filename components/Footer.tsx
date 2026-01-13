import { Clock, MapPin } from "lucide-react";
import { LogoComponent } from "./Logo";
import Link from "next/link";
import { FaRegEnvelope, FaWhatsapp } from "react-icons/fa6";

export default function Footer() {
  return (
    <div className="bg-[#233450]">
      {/* Contact Section */}
      <section id="contact" className="py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
            <div className="w-full px-6">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Get In Touch
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Ready to schedule your service? Contact us today for a free
                estimate or to book an appointment.
              </p>

              <div className="space-y-6">
                {/* CONTACT INFO */}
                <div className="w-full py-4 flex flex-wrap gap-8">
                  <Link target="_blank" href={"https://wa.me/+2348032547783"}>
                    <div className="w-fit flex gap-3 items-center text-lg">
                      <div className="p-2 bg-white/10 h-fit rounded-xl">
                        <FaWhatsapp className="size-8" />
                      </div>
                      <span>Whatsapp</span>
                    </div>
                  </Link>
                  <Link
                    target="_blank"
                    href={"mailto:omoseenifadiya@gmail.com"}
                  >
                    <div className="w-fit flex gap-3 text-lg">
                      <div className="p-2 bg-white/10 h-fit rounded-xl">
                        <FaRegEnvelope className="size-8" />
                      </div>
                      <div className="w-fit flex flex-col pt-2">
                        <span>Mail:</span>
                        <span className="text-base">
                          omoseenifadiya@gmail.com
                        </span>
                      </div>
                    </div>
                  </Link>
                </div>

                {/* ======================= */}

                <div className="flex items-center">
                  <MapPin className="w-6 h-6 text-blue-400 mr-4" />
                  <div className="flex-1">
                    <h3 className="font-semibold">Address</h3>
                    <p className="text-gray-300">
                      2, Karimu Alabi Street, Jibowu Estate U-turn, Bus stop,
                      Abule Egba, Lagos.
                    </p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Clock className="w-6 h-6 text-blue-400 mr-4" />
                  <div className="flex-1">
                    <h3 className="font-semibold">Hours</h3>
                    <p className="text-gray-300">
                      Mon-Fri: 7:30 AM - 6:00 PM
                      <br />
                      Sat: 8:00 AM - 4:00 PM
                      <br />
                      Sun: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full">
              <div className="px-6 rounded-3xl w-full mx-auto">
                <h3 className="text-2xl font-bold mb-8">Pay us a visit!</h3>
                <div className="w-full h-fit rounded-xl overflow-hidden mx-auto shadow">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3962.8620054352255!2d3.302152269636091!3d6.664017854720361!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b96d9dcdb6409%3A0x9e3baeb85e55e0cd!2s02%20Karimu%20Alabi%20St%2C%20Aja%2C%20Lagos%20101232%2C%20Lagos%2C%20Nigeria!5e0!3m2!1sen!2suk!4v1768348153781!5m2!1sen!2suk"
                    className="w-full"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/20 text-white py-4 border-t-4 border-t-black/40">
        <div className="w-full mx-auto px-2 sm:px-6 lg:px-20">
          <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
            <div className="w-fit border-r border-r-gray-400 pr-14">
              <LogoComponent />
            </div>

            <div className="text-gray-400 text-sm">
              © {new Date().getFullYear()} CarSense. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
