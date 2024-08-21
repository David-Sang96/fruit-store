import { motion } from "framer-motion";
import { useState } from "react";

import { FaLeaf } from "react-icons/fa";
import { MdMenu, MdOutlineShoppingCart } from "react-icons/md";
import ResponsiveMenu from "./ResponsiveMenu";

const NavbarMenu = [
  {
    id: 1,
    title: "Home",
    link: "/",
  },
  {
    id: 2,
    title: "Products",
    link: "#",
  },
  {
    id: 3,
    title: "About",
    link: "#",
  },
  {
    id: 4,
    title: "Shop",
    link: "#",
  },
  {
    id: 5,
    title: "Contacts",
    link: "#",
  },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="container flex items-center justify-between py-4 md:pt-4"
      >
        {/* Logo section */}
        <div className="flex items-center gap-2 text-2xl font-bold uppercase">
          <p className="text-primary">Fruit</p>
          <p className="text-secondary">Store</p>
          <FaLeaf className="text-green-500" />
        </div>

        {/* Menu section */}
        <div className="max-md:hidden">
          <ul className="flex items-center gap-8 text-gray-600">
            {NavbarMenu.map(({ id, title, link }) => (
              <li key={id} className="text-xl">
                <a
                  href={link}
                  className="hover:text-primary inline-block px-3 py-1 font-semibold hover:shadow-[0_3px_0_-1px_#ef4444]"
                >
                  {title}
                </a>
              </li>
            ))}
            <button className="hover:bg-primary rounded-full p-2 text-2xl duration-200 hover:text-white">
              <MdOutlineShoppingCart />
            </button>
          </ul>
        </div>

        {/* Mobile Hamburger Menu section */}
        <div className="md:hidden" onClick={() => setOpen(!open)}>
          <MdMenu className="size-8" />
        </div>
      </motion.div>
      <ResponsiveMenu open={open} setOpen={setOpen} />
    </nav>
  );
};

export default Navbar;
