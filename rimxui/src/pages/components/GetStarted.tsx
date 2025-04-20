import React from "react";
import { motion } from "framer-motion";
import { FileCode } from "lucide-react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import Spotlight from "./Spotlight";
import { AnimationBalls } from "./AnimationBalls";

const usageCode = `import { Button, Card, Input } from 'rimx-ui';


function App() {
  return (
    <Card>
      <h2>Login</h2>
      <Input placeholder="Email" type="email" />
      <Input placeholder="Password" type="password" />
      <Button variant="primary">Sign In</Button>
    </Card>
  );
}`;

const GetStartedSection: React.FC = () => {
  return (
    <section
      id="documentation"
      className="py-20 bg-gradient-to-b dark:bg-black relative overflow-hidden"
    >
      <Spotlight />
      <AnimationBalls />
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent " />

      <div className="container mx-auto px-6 ">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white bg-gradient-to-b from-zinc-500 to-zinc-900  text-transparent bg-clip-text">
            Get Started
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Start building beautiful interfaces with RiMX UI in minutes
          </p>
        </motion.div>

        <div className="flex items-center justify-center  flex-wrap">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="md:w-1/2 w-96"
          >
            <motion.div
              className="mt-8 bg-white/80 dark:bg-slate-800/80 backdrop-blur-lg rounded-xl p-6 shadow-xl border border-gray-100 dark:border-slate-700 "
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-teal-500 flex items-center justify-center text-white">
                  <FileCode size={24} />
                </div>
                <h3 className="text-xl font-semibold ml-4 text-gray-800 dark:text-white">
                  Usage
                </h3>
              </div>

              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Import the components you need and start building your UI:
              </p>

              <div className="rounded-lg overflow-hidden">
                <SyntaxHighlighter
                  language="jsx"
                  style={atomOneDark}
                  customStyle={{
                    background: "#1e293b",
                    padding: "1rem",
                    borderRadius: "0.5rem",
                    fontSize: "0.9rem",
                  }}
                >
                  {usageCode}
                </SyntaxHighlighter>
              </div>
            </motion.div>
          </motion.div>

          {/*  */}
        </div>
      </div>
    </section>
  );
};

export default GetStartedSection;
