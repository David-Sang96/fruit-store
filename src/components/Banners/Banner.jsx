import { motion } from "framer-motion";

import { fruitSplash } from "../../assets";
import { FadeInUp } from "../../util/animation";

const Banner = () => {
  return (
    <section className="bg-secondary/10">
      <div className="container grid space-y-6 py-14 md:grid-cols-2 md:space-y-0">
        {/* left side */}
        <div className="flex items-center justify-center">
          <motion.img
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
            viewport={{ once: true }}
            src={fruitSplash}
            alt="fruit splash"
            className="h-full w-[300px] object-cover md:max-w-[400px]"
          />
        </div>

        {/* right side */}
        <div className="flex flex-col justify-center">
          <div className="space-y-4 text-center md:text-left lg:max-w-[400px]">
            <motion.h1
              variants={FadeInUp(0.5)}
              initial="hidden"
              whileInView={"visible"}
              viewport={{ once: true }}
              className="text-3xl font-bold uppercase lg:text-6xl"
            >
              Brand Info
            </motion.h1>
            <motion.p
              variants={FadeInUp(0.7)}
              initial="hidden"
              whileInView={"visible"}
              viewport={{ once: true }}
            >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil
              sunt necessitatibus dicta facere animi hic excepturi non. Quidem
              cumque doloribus molestiae aut ipsam vitae libero neque omnis
              tempore voluptatibus voluptatum voluptates, eum, id placeat
              incidunt optio quia corporis a corrupti fugiat. Quod quae deleniti
              nam aliquid nisi sunt, beatae placeat?
            </motion.p>
            <motion.p
              variants={FadeInUp(0.9)}
              initial="hidden"
              whileInView={"visible"}
              viewport={{ once: true }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta,
              esse! Quas esse vero dolore aliquam? Sapiente mollitia dicta
              laborum quos quis! Reiciendis totam mollitia vitae!
            </motion.p>
            {/* button section */}
            <motion.div
              variants={FadeInUp(1.1)}
              initial="hidden"
              whileInView={"visible"}
              viewport={{ once: true }}
              className="flex justify-center md:justify-start"
            >
              <button className="primary-btn">Learn More</button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
