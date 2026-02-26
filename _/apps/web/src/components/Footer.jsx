export default function Footer() {
  return (
    <footer className="bg-[#000000] border-t border-[#2F9E99]/20 font-panton">
      <div className="max-w-[1400px] mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Logo */}
          <div className="md:col-span-3">
            <img
              src="https://ucarecdn.com/f6c6f147-e809-400a-be08-dc99ead80034/-/format/auto/"
              alt="PK Logo"
              className="h-12 w-auto mb-6"
            />
            <p className="text-[#BFBFBF] text-sm leading-relaxed">
              Kenya's Top Book Club
            </p>
          </div>

          {/* Navigation Groups */}
          <div className="md:col-span-6 grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-[#2F9E99] font-bold text-sm uppercase tracking-wide mb-4">
                Explore
              </h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="/#about"
                    className="text-[#FFFFFF] hover:text-[#F28C18] transition-colors duration-300 text-sm"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="/#bookclub"
                    className="text-[#FFFFFF] hover:text-[#F28C18] transition-colors duration-300 text-sm"
                  >
                    Book Club
                  </a>
                </li>
                <li>
                  <a
                    href="/#events"
                    className="text-[#FFFFFF] hover:text-[#F28C18] transition-colors duration-300 text-sm"
                  >
                    Events
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-[#2F9E99] font-bold text-sm uppercase tracking-wide mb-4">
                Shop
              </h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="/shop"
                    className="text-[#FFFFFF] hover:text-[#F28C18] transition-colors duration-300 text-sm"
                  >
                    All Products
                  </a>
                </li>
                <li>
                  <a
                    href="/shop?category=books"
                    className="text-[#FFFFFF] hover:text-[#F28C18] transition-colors duration-300 text-sm"
                  >
                    Books
                  </a>
                </li>
                <li>
                  <a
                    href="/shop?category=merch"
                    className="text-[#FFFFFF] hover:text-[#F28C18] transition-colors duration-300 text-sm"
                  >
                    Merchandise
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-[#2F9E99] font-bold text-sm uppercase tracking-wide mb-4">
                Connect
              </h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="/#contact"
                    className="text-[#FFFFFF] hover:text-[#F28C18] transition-colors duration-300 text-sm"
                  >
                    Contact
                  </a>
                </li>
                <li>
                  <a
                    href="/newsletter"
                    className="text-[#FFFFFF] hover:text-[#F28C18] transition-colors duration-300 text-sm"
                  >
                    Newsletter
                  </a>
                </li>
                <li>
                  <a
                    href="/subscribe"
                    className="text-[#FFFFFF] hover:text-[#F28C18] transition-colors duration-300 text-sm"
                  >
                    Subscribe
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Social Links */}
          <div className="md:col-span-3">
            <h3 className="text-[#2F9E99] font-bold text-sm uppercase tracking-wide mb-4">
              Follow Us
            </h3>
            <div className="flex gap-4">
              <a
                href="https://twitter.com"
                className="text-[#FFFFFF] hover:text-[#F28C18] transition-colors duration-300 text-sm"
              >
                Twitter
              </a>
              <a
                href="https://instagram.com"
                className="text-[#FFFFFF] hover:text-[#F28C18] transition-colors duration-300 text-sm"
              >
                Instagram
              </a>
              <a
                href="https://facebook.com"
                className="text-[#FFFFFF] hover:text-[#F28C18] transition-colors duration-300 text-sm"
              >
                Facebook
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-[#2F9E99]/20">
          <p className="text-[#BFBFBF] text-sm text-center">
            © 2026 PK. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
