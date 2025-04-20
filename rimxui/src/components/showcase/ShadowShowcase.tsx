import { CliTabs } from "../CliTabs/CliTab";
import PreviewWrapper from "../PreviewWrapper";

const shadowVariants = [
  {
    name: "Shadow 1",
    class: "shadow-shadow-1",
    description: "Subtle shadow for small elements",
  },
  {
    name: "Shadow 2",
    class: "shadow-shadow-2",
    description: "Medium shadow for interactive elements",
  },
  {
    name: "Shadow 3",
    class: "shadow-shadow-3",
    description: "Prominent shadow for floating elements",
  },
  {
    name: "Shadow 4",
    class: "shadow-shadow-4",
    description: "Strong shadow for modals and popovers",
  },
  {
    name: "Shadow 5",
    class: "shadow-shadow-5",
    description: "Extra strong shadow for elevated content",
  },
  {
    name: "Shadow 6",
    class: "shadow-shadow-6",
    description: "Maximum elevation shadow",
  },
];

const ShadowPreview = () => {
  return (
    <div className="grid grid-cols-2 gap-8 w-full">
      {shadowVariants.map((shadow) => (
        <div key={shadow.name} className="flex flex-col gap-4">
          <div
            className={`w-full h-32 bg-white dark:bg-neutral-900 rounded-lg ${shadow.class} flex items-center justify-center`}
          >
            <span className="text-sm font-medium text-neutral-600 dark:text-neutral-400">
              {shadow.name}
            </span>
          </div>
          <div className="space-y-1">
            <p className="text-sm font-medium text-neutral-900 dark:text-neutral-100">
              {shadow.name}
            </p>
            <p className="text-sm text-neutral-500 dark:text-neutral-400">
              {shadow.description}
            </p>
            <p className="text-sm font-mono text-neutral-500 dark:text-neutral-400">
              {shadow.class}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

const shadowCode = `// Example usage of shadows
<div className="shadow-shadow-1">Shadow 1</div>
<div className="shadow-shadow-2">Shadow 2</div>
<div className="shadow-shadow-3">Shadow 3</div>
<div className="shadow-shadow-4">Shadow 4</div>
<div className="shadow-shadow-5">Shadow 5</div>
<div className="shadow-shadow-6">Shadow 6</div>`;

export const ShadowShowcase = () => {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold mb-2">Shadows</h1>
        <p className="text-neutral-600 dark:text-neutral-400">
          A collection of shadow utilities for adding depth and elevation to
          elements.
        </p>
      </div>
      <section id="#installation">
        <h1 className="text-h4 mb-6">Installation</h1>
        <CliTabs
          commands={{
            pnpm: "pnpm dlx shadcn@latest add http://rimxui.vercel.app/registry/shadows.json",
            npm: "npx shadcn@latest add http://rimxui.vercel.app/registry/shadows.json",
            bun: "bunx shadcn@latest add http://rimxui.vercel.app/registry/shadows.json",
            yarn: "yarn dlx shadcn@latest add http://rimxui.vercel.app/registry/shadows.json",
          }}
        />
      </section>

      <PreviewWrapper
        label="Shadow Examples"
        preview={<ShadowPreview />}
        code={shadowCode}
        variant="default"
      />
    </div>
  );
};

export default ShadowShowcase;
