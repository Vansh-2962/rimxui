import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, PauseCircle, ChevronLeft, ChevronRight } from "lucide-react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import Button from "@/components/ui/Button";
import { Card, CardContent, CardFooter } from "@/components/Cards/Card";
import { Label } from "@/components/Label/Label";
import { Input } from "@/components/Input/Input";
import {
  Modal,
  ModalBody,
  ModalClose,
  ModalContent,
  ModalDescription,
  ModalFooter,
  ModalTitle,
  ModalTrigger,
} from "@/components/Modals/modal";
import { AnimationBalls } from "./AnimationBalls";

const components = [
  {
    name: "Buttons",
    description:
      "Versatile button components with multiple variants and states",
    demo: (
      <div className="flex flex-wrap gap-3 items-center justify-center">
        <Button label="Default" variant="default" />
        <Button label="Destructive" variant="destructive" />
        <Button label="Secondary" variant="secondary" />
        <Button label="Outline" variant="outline" />
        <Button label="" variant="icon" />
        <Button label="Search" variant="withIcon" icon="search" />
      </div>
    ),
    code: `// RiMX UI Button Examples
<Button label="Default" variant="default" />
<Button label="Destructive" variant="destructive" />
<Button label="Secondary" variant="secondary" />
<Button label="Outline" variant="outline" />
<Button label="" variant="icon" />
<Button label="Search" variant="withIcon" icon="search" />`,
  },
  {
    name: "Cards",
    description: "Elegant card components for displaying content in containers",
    demo: (
      <div className="place-items-center">
        <Card>
          <img
            src="https://images.unsplash.com/photo-1682687220063-4742bd7fd538"
            alt="Card image"
            className="w-full h-48 object-cover rounded-t-xl"
          />
          <CardContent className="pt-4">
            <h3 className="text-xl font-semibold mb-2">Beautiful Landscape</h3>
            <p className="text-gray-600">
              This is a beautiful landscape image displayed in a card with a
              title and description.
            </p>
          </CardContent>
          <CardFooter className="flex justify-between items-center">
            <span className="text-sm text-gray-500">Posted by John Doe</span>
            <button className="text-blue-500 hover:text-blue-600">
              Read more
            </button>
          </CardFooter>
        </Card>
      </div>
    ),
    code: `// RiMX UI Card Example
<div className="place-items-center">
  <Card>
    <img
        src="https://images.unsplash.com/photo-1682687220063-4742bd7fd538"
        alt="Card image"
        className="w-full h-48 object-cover rounded-t-xl"
    />
    <CardContent className="pt-4">
        <h3 className="text-xl font-semibold mb-2">Beautiful Landscape</h3>
        <p className="text-gray-600">
            This is a beautiful landscape image displayed in a card with a title
            and description.
        </p>
    </CardContent>
    <CardFooter className="flex justify-between items-center">
      <span className="text-sm text-gray-500">Posted by John Doe</span>
        <button className="text-blue-500 hover:text-blue-600">
           Read more
        </button>
    </CardFooter>
 </Card>
</div>`,
  },
  {
    name: "Inputs",
    description: "Form inputs with validation, states, and style variants",
    demo: (
      <form className="flex items-center justify-center flex-col ">
        <div>
          <Label>Email</Label>
          <Input type="email" placeholder="Email" className="mb-4 text-black" />
        </div>
        <div>
          <Label>Password</Label>
          <Input
            type="password"
            placeholder="Password"
            className="mb-4 text-black"
          />
        </div>

        <Button label="Signup" className="text-white " />
      </form>
    ),
    code: `// RiMX UI Input Examples
 <form className="flex items-center justify-center flex-col ">
    <div>
        <Label>Email</Label>
        <Input type="email" placeholder="Email" className="mb-4 text-black" />
    </div>
    <div>
        <Label>Password</Label>
        <Input type="password" placeholder="Password" className="mb-4 text-black" />
    </div>
        <Button label="Signup" className="text-white" />
</form>`,
  },
  {
    name: "Modal",
    description: "Informative Modal messages with various severity levels",
    demo: (
      <Modal>
        <div className="flex justify-center items-center ">
          <ModalTrigger>
            <button className="bg-emerald-600 text-white px-4 py-2 rounded-xl shadow">
              Complete
            </button>
          </ModalTrigger>
        </div>
        <ModalContent>
          <ModalBody>
            <div className="text-center">
              <span className="text-emerald-500 text-6xl">🎉</span>
              <ModalTitle className="mt-4">Success!</ModalTitle>
              <ModalDescription>Your changes have been saved.</ModalDescription>
            </div>
          </ModalBody>
          <ModalFooter>
            <ModalClose>
              <button className="w-full px-4 py-2 bg-emerald-600 text-white rounded">
                OK
              </button>
            </ModalClose>
          </ModalFooter>
        </ModalContent>
      </Modal>
    ),
    code: `// RiMX UI Alert Examples
<Modal>
    <div className="flex justify-center items-center ">
        <ModalTrigger>
        <button className="bg-emerald-600 text-white px-4 py-2 rounded-xl shadow">
            Complete
        </button>
        </ModalTrigger>
    </div>
    <ModalContent>
        <ModalBody>
        <div className="text-center">
            <span className="text-emerald-500 text-6xl">🎉</span>
            <ModalTitle className="mt-4">Success!</ModalTitle>
            <ModalDescription>Your changes have been saved.</ModalDescription>
        </div>
        </ModalBody>
        <ModalFooter>
        <ModalClose>
            <button className="w-full px-4 py-2 bg-emerald-600 text-white rounded">
              OK
            </button>
        </ModalClose>
        </ModalFooter>
    </ModalContent>
</Modal>`,
  },
];

const DisplayComponents: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isViewingCode, setIsViewingCode] = useState(false);

  const nextComponent = () => {
    setActiveIndex((prev) => (prev + 1) % components.length);
  };

  const prevComponent = () => {
    setActiveIndex(
      (prev) => (prev - 1 + components.length) % components.length,
    );
  };

  React.useEffect(() => {
    let interval: number | null = null;

    if (isPlaying) {
      interval = window.setInterval(() => {
        nextComponent();
      }, 5000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isPlaying]);

  return (
    <section
      id="components"
      className="py-20 relative overflow-hidden dark:bg-black"
    >
      <AnimationBalls />
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-white to-white dark:from-slate-900 dark:via-slate-900 dark:to-slate-900 -z-10" />

      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white bg-gradient-to-b from-zinc-500 to-zinc-900  text-transparent bg-clip-text">
            Beautiful Components
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Explore our versatile collection of UI components designed to make
            your applications shine.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto rounded-xl overflow-hidden backdrop-blur-lg shadow-xl border border-white/20 dark:border-slate-700/20 bg-white/70 dark:bg-slate-800/70">
          <div className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
                {components[activeIndex].name}
              </h3>
              <div className="flex space-x-3">
                <motion.button
                  onClick={() => setIsViewingCode(!isViewingCode)}
                  className="px-4 py-1 text-sm bg-gray-100 dark:bg-slate-700 text-gray-800 dark:text-gray-200 rounded-full"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {isViewingCode ? "View Demo" : "View Code"}
                </motion.button>
                <motion.button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="p-1 text-gray-800 dark:text-gray-200"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={isPlaying ? "Pause autoplay" : "Start autoplay"}
                >
                  {isPlaying ? <PauseCircle size={20} /> : <Play size={20} />}
                </motion.button>
              </div>
            </div>

            <p className="text-gray-600 dark:text-gray-400 mb-8">
              {components[activeIndex].description}
            </p>

            <div className="rounded-lg   bg-gray-50 dark:bg-slate-900 p-6 min-h-[200px] flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`component-${activeIndex}-${isViewingCode ? "code" : "demo"}`}
                  initial={{ opacity: 0, x: isViewingCode ? -20 : 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: isViewingCode ? 20 : -20 }}
                  transition={{ duration: 0.3 }}
                  className="w-full"
                >
                  {isViewingCode ? (
                    <SyntaxHighlighter
                      language="typescript"
                      style={atomOneDark}
                      className="rounded-lg text-sm"
                      customStyle={{
                        background: "transparent",
                        padding: "1rem",
                        borderRadius: "0.5rem",
                      }}
                    >
                      {components[activeIndex].code}
                    </SyntaxHighlighter>
                  ) : (
                    components[activeIndex].demo
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          <div className="bg-gray-50 dark:bg-slate-900 px-6 py-4 flex justify-between items-center">
            <motion.button
              onClick={prevComponent}
              className="p-2 rounded-full bg-white dark:bg-slate-800 text-gray-800 dark:text-gray-200 shadow-md"
              whileHover={{ scale: 1.1, x: -2 }}
              whileTap={{ scale: 0.9 }}
              disabled={components.length <= 1}
              aria-label="Previous component"
            >
              <ChevronLeft size={20} />
            </motion.button>
            <div className="flex space-x-2">
              {components.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-2 h-2 rounded-full  ${
                    index === activeIndex
                      ? "bg-blue-500"
                      : "bg-gray-300 dark:bg-slate-700"
                  }`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={`Go to component ${index + 1}`}
                />
              ))}
            </div>
            <motion.button
              onClick={nextComponent}
              className="p-2 rounded-full bg-white dark:bg-slate-800 text-gray-800 dark:text-gray-200 shadow-md"
              whileHover={{ scale: 1.1, x: 2 }}
              whileTap={{ scale: 0.9 }}
              disabled={components.length <= 1}
              aria-label="Next component"
            >
              <ChevronRight size={20} />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DisplayComponents;
