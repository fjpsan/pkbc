"use client";

import { useState } from "react";
import { Search, Menu, X } from "lucide-react";

export default function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#000000] border-b border-[#2F9E99]/20">
      <div className="max-w-[1400px] mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex-shrink-0">
            <img
              src="https://ucarecdn.com/f6c6f147-e809-400a-be08-dc99ead80034/-/format/auto/"
              alt="PK Logo"
              className="h-10 w-auto"
            />
          </a>

          {/* Navigation - Desktop Only */}
          <nav className="hidden md:flex items-center gap-8 ml-12 font-panton">
            <a
              href="/#about"
              className="text-[#FFFFFF] hover:text-[#F28C18] transition-colors duration-300 text-sm uppercase tracking-wide"
            >
              About
            </a>
            <a
              href="/#bookclub"
              className="text-[#FFFFFF] hover:text-[#F28C18] transition-colors duration-300 text-sm uppercase tracking-wide"
            >
              Book Club
            </a>
            <a
              href="/#events"
              className="text-[#FFFFFF] hover:text-[#F28C18] transition-colors duration-300 text-sm uppercase tracking-wide"
            >
              Events
            </a>
            <a
              href="/shop"
              className="text-[#FFFFFF] hover:text-[#F28C18] transition-colors duration-300 text-sm uppercase tracking-wide"
            >
              Shop
            </a>
            <a
              href="/#contact"
              className="text-[#FFFFFF] hover:text-[#F28C18] transition-colors duration-300 text-sm uppercase tracking-wide"
            >
              Contact
            </a>
          </nav>

          {/* Utility Items */}
          <div className="flex items-center gap-6 font-panton">
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="text-[#FFFFFF] hover:text-[#F28C18] transition-colors duration-300"
              aria-label="Search"
            >
              <Search size={20} />
            </button>
            <a
              href="/signin"
              className="text-[#FFFFFF] hover:text-[#F28C18] transition-colors duration-300 text-sm uppercase tracking-wide hidden md:block"
            >
              Sign In
            </a>
            <a
              href="/subscribe"
              className="bg-[#F28C18] text-[#000000] px-6 py-2 text-sm uppercase tracking-wide font-bold hover:bg-[#F28C18]/90 transition-colors duration-300 hidden md:block"
            >
              Subscribe
            </a>

            {/* Hamburger Menu - Mobile Only */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-[#FFFFFF] hover:text-[#F28C18] transition-colors duration-300"
              aria-label="Menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Search Bar */}
        {isSearchOpen && (
          <div className="mt-4 pb-2">
            <input
              type="text"
              placeholder="Search articles..."
              className="w-full bg-[#000000] border border-[#2F9E99] text-[#FFFFFF] px-4 py-3 focus:outline-none focus:border-[#F28C18] transition-colors duration-300 font-panton"
              autoFocus
            />
          </div>
        )}

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-[#2F9E99]/20 pt-4">
            <div className="flex flex-col gap-4 font-panton">
              <a
                href="/#about"
                className="text-[#FFFFFF] hover:text-[#F28C18] transition-colors duration-300 text-sm uppercase tracking-wide"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </a>
              <a
                href="/#bookclub"
                className="text-[#FFFFFF] hover:text-[#F28C18] transition-colors duration-300 text-sm uppercase tracking-wide"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Book Club
              </a>
              <a
                href="/#events"
                className="text-[#FFFFFF] hover:text-[#F28C18] transition-colors duration-300 text-sm uppercase tracking-wide"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Events
              </a>
              <a
                href="/shop"
                className="text-[#FFFFFF] hover:text-[#F28C18] transition-colors duration-300 text-sm uppercase tracking-wide"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Shop
              </a>
              <a
                href="/#contact"
                className="text-[#FFFFFF] hover:text-[#F28C18] transition-colors duration-300 text-sm uppercase tracking-wide"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </a>
              <div className="border-t border-[#2F9E99]/20 pt-4 flex flex-col gap-4">
                <a
                  href="/signin"
                  className="text-[#FFFFFF] hover:text-[#F28C18] transition-colors duration-300 text-sm uppercase tracking-wide"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Sign In
                </a>
                <a
                  href="/subscribe"
                  className="bg-[#F28C18] text-[#000000] px-6 py-2 text-sm uppercase tracking-wide font-bold hover:bg-[#F28C18]/90 transition-colors duration-300 text-center"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Subscribe
                </a>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
