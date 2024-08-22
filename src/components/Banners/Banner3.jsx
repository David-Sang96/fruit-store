import { motion } from "framer-motion";

import { IoBagHandleOutline } from "react-icons/io5";
import { bannerBg } from "../../assets";
import { FadeInLeft } from "../../util/animation";

const bgStyle = {
  backgroundImage: `url(${bannerBg})`,
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
};

const Banner3 = () => {
  return (
    <section className="container mb-12">
      <div
        style={bgStyle}
        className="container grid space-y-6 rounded-3xl py-14 md:grid-cols-2 md:space-y-0"
      >
        {/* left side */}
        <div></div>

        {/* right side */}
        <div className="flex flex-col justify-center">
          <div className="space-y-4 text-center md:text-left lg:max-w-[400px]">
            <motion.h1
              variants={FadeInLeft(0.5)}
              initial="hidden"
              whileInView={"visible"}
              viewport={{ once: true }}
              className="text-3xl font-bold uppercase lg:text-6xl"
            >
              Get Fresh Fruits Today
            </motion.h1>
            <motion.p
              variants={FadeInLeft(0.7)}
              initial="hidden"
              whileInView={"visible"}
              viewport={{ once: true }}
            >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil
              sunt necessitatibus dicta facere animi hic excepturi non. Quidem
              cumque doloribus molestiae aut ipsam vitae libero neque omnis
              tempore voluptatibus voluptatum voluptates, eum, id placeat
            </motion.p>

            {/* button section */}
            <motion.div
              variants={FadeInLeft(0.9)}
              initial="hidden"
              whileInView={"visible"}
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
      </div>
    </section>
  );
};

export default Banner3;
