import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { LogoComponent } from "./Logo";

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
                <div className="flex items-center">
                  <Phone className="w-6 h-6 text-blue-400 mr-4" />
                  <div className="flex-1">
                    <h3 className="font-semibold">Phone</h3>
                    <p className="text-gray-300">(+234) 0803 254 7783</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Mail className="w-6 h-6 text-blue-400 mr-4" />
                  <div className="flex-1">
                    <h3 className="font-semibold">Email</h3>
                    <p className="text-gray-300">omoseenifadiya@gmail.com</p>
                  </div>
                </div>
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
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d253682.4631091547!2d3.119144481049848!3d6.548369368072229!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2ae68280c1%3A0xdc9e87a367c3d9cb!2sLagos%2C%20Nigeria!5e0!3m2!1sen!2suk!4v1759782519901!5m2!1sen!2suk"
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
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-20">
          <div className="flex flex-col md:flex-row justify-between items-center">
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
