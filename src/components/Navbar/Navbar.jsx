import { useState } from "react";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

const NavbarMenu = [
  { id: 1, title: "Home", path: "/" },
  { id: 2, title: "Services", path: "/services" },
  { id: 3, title: "E-Community", path: "/e-community" },
  { id: 4, title: "Stationery", path: "/stationery" },
  { id: 5, title: "Contact Us", path: "/contact" },
];

const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  // Toggle mobile menu
  const toggleMenu = () => setIsOpen(!isOpen);

  // Close menu when a link is clicked
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="z-50 bg-[#D4E0ED] shadow-md fixed top-0 left-0 w-full h-[70px] flex items-center">

      <div className="container mx-auto py-4 px-6 flex justify-between items-center">
        {/* Logo */}
        <Link
          to="/"
          className="font-bold text-xl hover:text-secondary transition"
          onClick={closeMenu}
        >
          eBridgePK
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center gap-6 font-medium">
          {NavbarMenu.map((menu) => (
            <li key={menu.id}>
              <Link
                to={menu.path}
                className={`inline-block py-2 px-4 rounded-md transition ${location.pathname === menu.path
                    ? "text-[#3E6899] font-semibold"
                    : "hover:bg-[#7BB661] hover:text-white"
                  }`}
              >
                {menu.title}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <div className="lg:hidden cursor-pointer" onClick={toggleMenu}>
          {isOpen ? <IoMdClose className="text-3xl" /> : <IoMdMenu className="text-3xl" />}
        </div>
      </div>

      {/* Responsive Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.3 }}
            className="absolute top-full left-0 w-full bg-[#D4E0ED] shadow-md lg:hidden"
          >
            <ul className="flex flex-col items-center gap-6 py-6">
              {NavbarMenu.map((menu) => (
                <li key={menu.id}>
                  <Link
                    to={menu.path}
                    className={`block px-6 py-2 rounded-lg text-black transition ${location.pathname === menu.path
                        ? "text-[#3E6899] font-semibold"
                        : "hover:bg-[#7BB661] hover:text-white"
                      }`}
                    onClick={closeMenu}
                  >
                    {menu.title}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
