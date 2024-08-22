import { motion } from "framer-motion";

import { IoBagHandleOutline } from "react-icons/io5";
import { fruitPlate1, leaf } from "../../assets";
import { FadeInRight } from "../../util/animation";

const Hero = () => {
  return (
    <section>
      <div className="container relative grid min-h-[650px] md:grid-cols-2">
        {/* Left Side */}
        <div className="relative z-10 flex flex-col justify-center py-14 md:py-0">
          <div className="space-y-6 text-center md:text-left lg:max-w-[400px]">
            <motion.h1
              variants={FadeInRight(0.6)}
              initial="hidden"
              animate="visible"
              className="font-averia text-5xl font-bold leading-relaxed lg:text-6xl lg:leading-loose"
            >
              Healthy
              <br />
              Fresh <span className="text-secondary">Fruits!</span>
            </motion.h1>
            <motion.p
              variants={FadeInRight(0.9)}
              initial="hidden"
              animate="visible"
              className="text-2xl tracking-wide"
            >
              Order Now For Fresh Healthy Life
            </motion.p>
            <motion.p
              variants={FadeInRight(1.2)}
              initial="hidden"
              animate="visible"
              className="text-gray-400"
            >
              Healthy and yummy food for fresh morning breakfast. Eat Daily for
              good health and mind Order now and get 20% off on your first order
            </motion.p>
            {/* button section */}
            <motion.div
              variants={FadeInRight(1.5)}
              initial="hidden"
              animate="visible"
              className="flex justify-center md:justify-start"
            >
              <button className="primary-btn flex items-center gap-2">
                <span>
                  <IoBagHandleOutline className="size-5" />
                </span>
                Order Now
              </button>
            </motion.div>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex items-center justify-center">
          <motion.img
            initial={{ opacity: 0, x: 200, rotate: 90 }}
            animate={{ opacity: 1, x: 0, rotate: 0 }}
            transition={{ duration: 1.5, delay: 0.7 }}
            src={fruitPlate1}
            alt="fruit-plate1"
            className="w-[350px] drop-shadow md:w-[550px]"
          />
        </div>

        {/* Leaf Image */}
        <div className="absolute right-1/2 top-14 rotate-[40deg] opacity-80 blur-sm md:top-0">
          <motion.img
            initial={{ opacity: 0, y: -200, rotate: 75 }}
            animate={{ opacity: 1, y: 0, rotate: 0 }}
            transition={{ duration: 1, delay: 1.5 }}
            src={leaf}
            alt="leaf image"
            className="w-full md:max-w-[300px]"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
