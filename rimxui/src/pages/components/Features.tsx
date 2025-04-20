import React from "react";
import { motion } from "framer-motion";
import {
  Palette,
  Layers,
  Zap,
  Moon,
  PenTool,
  Code,
  Sparkles,
  Smartphone,
} from "lucide-react";
import { AnimationBalls } from "./AnimationBalls";

const features = [
  {
    icon: <Palette />,
    title: "Beautiful Design",
    description:
      "Meticulously crafted components with pixel-perfect attention to detail",
  },
  {
    icon: <Layers />,
    title: "Composable Components",
    description: "Mix and match components to create complex UIs with ease",
  },
  {
    icon: <Zap />,
    title: "Performance Optimized",
    description:
      "Lightweight and fast components for excellent user experience",
  },
  {
    icon: <Moon />,
    title: "Dark Mode Support",
    description: "Seamless light and dark theme switching built-in",
  },
  {
    icon: <PenTool />,
    title: "Customizable",
    description: "Easily adapt components to match your brand identity",
  },
  {
    icon: <Code />,
    title: "Developer Friendly",
    description:
      "Intuitive API with TypeScript support and excellent documentation",
  },
  {
    icon: <Sparkles />,
    title: "Animation Ready",
    description: "Beautiful transitions and animations out of the box",
  },
  {
    icon: <Smartphone />,
    title: "Responsive",
    description: "Designed to work flawlessly on all devices and screen sizes",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
    },
  },
};

const Features: React.FC = () => {
  return (
    <>
      <section
        id="features"
        className="py-20 bg-gray-50 dark:bg-black relative overflow-hidden "
      >
        <AnimationBalls />
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/0 via-purple-100/10 to-blue-100/20 dark:from-slate-900/0 dark:via-purple-900/5 dark:to-blue-900/10 -z-10" />

        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-4 dark:text-white bg-gradient-to-b from-zinc-500 to-zinc-900  text-transparent  bg-clip-text"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Why Choose{" "}
              <span className="bg-gradient-to-b from-zinc-900 to-zinc-500 dark:from-zinc-200 dark:to-zinc-900 bg-clip-text text-transparent font-bold">
                R<span className="text-red-500 drop-shadow-md">i</span>MX UI
              </span>
              {" "} ?
            </motion.h2>
            <motion.p
              className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              A comprehensive UI library designed to streamline your development
              workflow while creating beautiful, responsive interfaces.
            </motion.p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-100 dark:border-slate-700 hover:shadow-lg transition-shadow group"
                variants={item}
                whileHover={{
                  y: -5,
                  boxShadow: "0 15px 30px -10px rgba(0, 0, 0, 0.1)",
                }}
              >
                <motion.div
                  className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-white mb-5"
                  whileHover={{ rotate: 5, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  {feature.icon}
                </motion.div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Features;
