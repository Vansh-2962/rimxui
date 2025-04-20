import { PurpleBalls } from "./AnimationBalls";
import { motion } from "framer-motion";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Vinay Rajput",
      profilePic: "",
      content:
        "RiMX UI has completely transformed my workflow. The components are so intuitive and visually stunning. I’m genuinely impressed!",
      role: "Web Developer",
    },
    {
      id: 2,
      name: "Bhawani Singh",
      profilePic: "",
      content:
        "I’ve used plenty of UI kits before, but RiMX UI stands out for its simplicity, flexibility, and developer-friendly design system.",
      role: "Full Stack developer",
    },
    {
      id: 3,
      name: "Rohit Rana",
      profilePic: "",
      content:
        "From prototyping to production, RiMX UI saved me hours. The dark mode support and consistent design language are just chef’s kiss.",
      role: "MERN stack developer",
    },
  ];

  return (
    <section className="py-16 px-4 dark:bg-black" id="reviews">
      <PurpleBalls />
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold dark:text-white bg-gradient-to-b from-zinc-500 to-zinc-900  text-transparent bg-clip-text mb-4">
          What Developers Say
        </h2>
        <p className="text-zinc-500 dark:text-zinc-400 mb-12">
          Trusted by developers across the globe
        </p>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-zinc-50 dark:bg-zinc-800 rounded-xl p-6 shadow-lg border border-zinc-200 dark:border-zinc-700"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-zinc-200 dark:bg-zinc-700 rounded-full flex items-center justify-center text-zinc-600 dark:text-zinc-300 text-lg font-semibold">
                  {testimonial.name.charAt(0)}
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-zinc-800 dark:text-white">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400">
                    {testimonial.role}
                  </p>
                </div>
              </div>
              <p className="text-zinc-600 dark:text-zinc-300 text-sm">
                “{testimonial.content}”
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
