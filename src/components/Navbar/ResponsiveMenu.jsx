/* eslint-disable react/prop-types */
import { AnimatePresence, motion } from "framer-motion";

const ResponsiveMenu = ({ open, setOpen }) => {
  return (
    <AnimatePresence mode="wait">
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.3 }}
          className="absolute left-0 top-20 z-20 h-screen w-full"
        >
          <div className="bg-primary m-6 rounded-3xl py-10 text-xl font-semibold uppercase text-white">
            <ul className="flex flex-col items-center gap-10">
              <li className="/" onClick={() => setOpen(!open)}>
                Home
              </li>
              <li className="#" onClick={() => setOpen(!open)}>
                About
              </li>
              <li className="#" onClick={() => setOpen(!open)}>
                Services
              </li>
              <li className="#" onClick={() => setOpen(!open)}>
                Contact
              </li>
            </ul>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ResponsiveMenu;
