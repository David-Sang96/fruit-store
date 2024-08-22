import { motion } from "framer-motion";

import { apple, avocado, cherry, orange } from "../../assets/fruits";
import { FadeInLeft } from "../../util/animation";

const MenusData = [
  {
    id: 1,
    title: "Fresh Red Apples",
    link: "/",
    price: "$2.00",
    img: apple,
    delay: 0.3,
  },
  {
    id: 2,
    title: "Fresh Oranges",
    link: "/",
    price: "$2.00",
    img: orange,
    delay: 0.6,
  },
  {
    id: 3,
    title: "Fresh Avocado",
    link: "/",
    price: "$4.00",
    img: avocado,
    delay: 0.9,
  },
  {
    id: 4,
    title: "Fresh Cherries",
    link: "/",
    price: "$5.00",
    img: cherry,
    delay: 1.2,
  },
];

const Menus = () => {
  return (
    <section>
      <div className="container pb-20 pt-12">
        <motion.h1
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="pb-12 text-2xl font-bold uppercase"
        >
          Our Menu
        </motion.h1>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4">
          {MenusData.map(({ id, title, price, delay, img }) => (
            <motion.div
              variants={FadeInLeft(delay)}
              initial="hidden"
              whileInView={"visible"}
              whileHover={{ scale: 1.1 }}
              className="flex items-center justify-around gap-3 rounded-3xl bg-white px-4 py-2 shadow-[0_0_22px_0_rgba(0,0,0,.15)] md:flex-col md:gap-0 md:px-3 md:py-1"
              key={id}
            >
              <img
                src={img}
                alt={title}
                className="mb-4 w-[60px] -translate-y-6 scale-125 transform md:mb-0"
              />
              <div>
                <h1 className="text-lg font-semibold">{title}</h1>
                <p className="text-lg font-semibold text-secondary">{price}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menus;
