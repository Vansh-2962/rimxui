import {
  Code,
  Layers,
  Moon,
  Palette,
  Smartphone,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "../../components/Cards/Card";
import { Typography } from "../../components/Typography/Typography";
import Button from "../../components/ui/Button";
import { ROUTES } from "../../routes/routes";

const features = [
  {
    icon: <Palette size={24} />,
    title: "Modern Design",
    description: "Built with React, TypeScript, and Tailwind CSS",
  },
  {
    icon: <Layers size={24} />,
    title: "Component Library",
    description: "Comprehensive set of customizable components",
  },
  {
    icon: <Moon size={24} />,
    title: "Dark Mode",
    description: "Seamless dark mode integration out of the box",
  },
  {
    icon: <Code size={24} />,
    title: "Developer Friendly",
    description: "Type-safe with excellent documentation",
  },
  {
    icon: <Sparkles size={24} />,
    title: "Accessible",
    description: "Built with accessibility in mind",
  },
  {
    icon: <Smartphone size={24} />,
    title: "Responsive",
    description: "Works on all screen sizes",
  },
];

const IntroductionPage = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-8">
      {/* Introduction */}
      <section className="mb-12">
        <Typography
          type="heading"
          level={1}
          size="3xl"
          weight="bold"
          className="mb-6"
        >
          Welcome to RiMX UI
        </Typography>
        <Typography type="text" variant="secondary" size="lg" className="mb-8">
          RiMX UI is a modern React component library built with TypeScript and
          Tailwind CSS. It provides a comprehensive set of accessible,
          customizable components to help you build stunning web applications
          quickly and efficiently.
        </Typography>
        <div className="flex gap-4">
          <Link to={ROUTES.docs}>
            <Button variant="default" label="Documentation" />
          </Link>
          <Link to="https://github.com/bhawanibytes/rimxui">
            <Button variant="outline" label="GitHub" />
          </Link>
        </div>
      </section>

      {/* Key Features */}
      <section className="mb-12">
        <Typography
          type="heading"
          level={2}
          size="2xl"
          weight="semibold"
          className="mb-6"
        >
          Key Features
        </Typography>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="h-full">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-white mb-4">
                  {feature.icon}
                </div>
                <Typography
                  type="heading"
                  level={3}
                  size="lg"
                  weight="semibold"
                  className="mb-2"
                >
                  {feature.title}
                </Typography>
                <Typography type="text" variant="secondary">
                  {feature.description}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Next Steps */}
      <section>
        <Typography
          type="heading"
          level={2}
          size="2xl"
          weight="semibold"
          className="mb-6"
        >
          Ready to Get Started?
        </Typography>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link to={ROUTES.componentsOverview}>
            <Card className="h-full hover:border-primary-500 transition-colors hover:shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-primary-50 dark:bg-primary-900/20 flex items-center justify-center">
                    <Layers className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                  </div>
                  <Typography
                    type="heading"
                    level={3}
                    size="lg"
                    weight="semibold"
                    className="mb-2"
                  >
                    Browse Components
                  </Typography>
                </div>
                <Typography type="text" variant="secondary">
                  Explore our comprehensive collection of UI components and
                  their usage.
                </Typography>
              </CardContent>
            </Card>
          </Link>
          <Link to={ROUTES.designSystemDocs}>
            <Card className="h-full hover:border-primary-500 transition-colors hover:shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-primary-50 dark:bg-primary-900/20 flex items-center justify-center">
                    <Palette className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                  </div>
                  <Typography
                    type="heading"
                    level={3}
                    size="lg"
                    weight="semibold"
                    className="mb-2"
                  >
                    Design System
                  </Typography>
                </div>
                <Typography type="text" variant="secondary">
                  Learn about our color system, typography, and design
                  principles.
                </Typography>
              </CardContent>
            </Card>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default IntroductionPage;
