"use client";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { LogoComponent } from "./Logo";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-20 py-4">
        <div className="flex gap-4 items-center max-lg:justify-between h-20">
          <div className="w-fit border-r border-r-gray-400 pr-14">
            <LogoComponent />
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:block">
            <div className="ml-10 flex items-baseline space-x-8 text-lg">
              <a
                href="#"
                className="text-gray-900 hover:underline underline-offset-8 decoration-2 decoration-amber-600 px-3 py-2 font-medium transition-colors"
              >
                Home
              </a>
              <a
                href="#services"
                className="text-gray-900 hover:underline underline-offset-8 decoration-2 decoration-amber-600 px-3 py-2 font-medium transition-colors"
              >
                Services
              </a>
              <a
                href="#about"
                className="text-gray-900 hover:underline underline-offset-8 decoration-2 decoration-amber-600 px-3 py-2 font-medium transition-colors"
              >
                About
              </a>
              <a
                href="#testimonials"
                className="text-gray-900 hover:underline underline-offset-8 decoration-2 decoration-amber-600 px-3 py-2 font-medium transition-colors"
              >
                Reviews
              </a>
              <a
                href="#contact"
                className="text-gray-900 hover:underline underline-offset-8 decoration-2 decoration-amber-600 px-3 py-2 font-medium transition-colors"
              >
                Contact
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-900 hover:text-gray-900 focus:outline-none"
            >
              {isMenuOpen ? (
                <X className="size-8" />
              ) : (
                <Menu className="size-8" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t text-lg">
            <a
              href="#home"
              className="text-gray-900 block px-3 py-2 text-base font-medium"
            >
              Home
            </a>
            <a
              href="#services"
              className="text-gray-900 hover:underline underline-offset-8 decoration-2 decoration-amber-600 block px-3 py-2 text-base font-medium"
            >
              Services
            </a>
            <a
              href="#about"
              className="text-gray-900 hover:underline underline-offset-8 decoration-2 decoration-amber-600 block px-3 py-2 text-base font-medium"
            >
              About
            </a>
            <a
              href="#testimonials"
              className="text-gray-900 hover:underline underline-offset-8 decoration-2 decoration-amber-600 block px-3 py-2 text-base font-medium"
            >
              Reviews
            </a>
            <a
              href="#contact"
              className="text-gray-900 hover:underline underline-offset-8 decoration-2 decoration-amber-600 block px-3 py-2 text-base font-medium"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
