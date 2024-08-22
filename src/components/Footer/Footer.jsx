import { motion } from "framer-motion";
import { FaFacebook, FaInstagram, FaLeaf, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="mt-12 bg-primary/10 py-12">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="container flex items-center justify-between max-sm:flex-col max-sm:gap-3"
      >
        {/* left side */}
        <div className="flex items-center gap-2 text-2xl font-bold uppercase">
          <p className="text-primary">Fruit</p>
          <p className="text-secondary">Store</p>
          <FaLeaf className="text-green-500" />
        </div>

        {/* right side */}
        <div className="flex items-center gap-4 text-3xl text-gray-700">
          <FaInstagram />
          <FaTwitter />
          <FaFacebook />
          <FaTwitter />
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
