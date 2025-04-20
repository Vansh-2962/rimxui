import { useState } from "react";
import PreviewWrapper from "../PreviewWrapper";

const COLOR_ACCENTS = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];
const SPACING_SCALE = [
  0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 16, 20, 24,
  28, 32, 36, 40, 44, 48, 52, 56, 60, 64, 72, 80, 96,
];
const BORDER_RADIUS = ["none", "sm", "md", "lg", "xl", "2xl", "3xl", "full"];
const SHADOWS = ["sm", "md", "lg", "xl", "2xl", "inner", "none"];
const BREAKPOINTS = ["sm", "md", "lg", "xl", "2xl"];
const Z_INDICES = ["0", "10", "20", "30", "40", "50", "auto"];

const DesignSystemPreview = () => {
  const [activeColor, setActiveColor] = useState("primary");
  const [activeWeight, setActiveWeight] = useState(500);

  return (
    <div className="space-y-16">
      {/* Typography */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold border-b pb-2">Typography</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-neutral-700 dark:text-neutral-300">
              Text Sizes
            </h3>
            <div className="space-y-6 bg-white dark:bg-neutral-800 p-6 rounded-lg shadow-sm">
              {["xs", "sm", "base", "lg", "xl", "2xl", "3xl", "4xl"].map(
                (size) => (
                  <div
                    key={size}
                    className="flex items-center justify-between border-b last:border-b-0 pb-4 last:pb-0"
                  >
                    <p className={`text-${size} leading-relaxed`}>
                      The quick brown fox jumps over the lazy dog
                    </p>
                    <span className="text-xs text-neutral-500 dark:text-neutral-400 ml-4 whitespace-nowrap">
                      text-{size}
                    </span>
                  </div>
                ),
              )}
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-neutral-700 dark:text-neutral-300">
              Font Weights
            </h3>
            <div className="space-y-6 bg-white dark:bg-neutral-800 p-6 rounded-lg shadow-sm">
              {["thin", "light", "normal", "medium", "semibold", "bold"].map(
                (weight) => (
                  <div
                    key={weight}
                    className="flex items-center justify-between border-b last:border-b-0 pb-4 last:pb-0"
                  >
                    <p className={`font-${weight} leading-relaxed`}>
                      The quick brown fox jumps over the lazy dog
                    </p>
                    <span className="text-xs text-neutral-500 dark:text-neutral-400 ml-4 whitespace-nowrap">
                      font-{weight}
                    </span>
                  </div>
                ),
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Colors */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold border-b pb-2">Colors</h2>
        <div className="space-y-8">
          <div className="flex gap-4 overflow-x-auto pb-4">
            {[
              "primary",
              "neutral",
              "success",
              "error",
              "warning",
              "accent",
            ].map((color) => (
              <button
                key={color}
                onClick={() => setActiveColor(color)}
                className={`px-4 py-2 rounded-lg font-medium capitalize ${
                  activeColor === color
                    ? `bg-${color}-500 text-white`
                    : `bg-${color}-100 text-${color}-800 hover:bg-${color}-200`
                }`}
              >
                {color}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-5 gap-4">
            {COLOR_ACCENTS.map((weight) => (
              <div
                key={weight}
                className={`space-y-2 cursor-pointer transition-transform hover:scale-105 ${
                  activeWeight === weight
                    ? "ring-2 ring-offset-2 ring-primary-500"
                    : ""
                }`}
                onClick={() => setActiveWeight(weight)}
              >
                <div
                  className={`h-16 w-full rounded-lg bg-${activeColor}-${weight}`}
                />
                <div className="px-1">
                  <div className="text-xs font-medium text-neutral-600 dark:text-neutral-400">
                    {weight}
                  </div>
                  <div className="text-xs text-neutral-500 dark:text-neutral-400">
                    {activeColor}-{weight}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Spacing */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold border-b pb-2">Spacing</h2>
        <div className="bg-neutral-900 p-6 rounded-lg shadow-sm">
          <div className="space-y-12">
            <div>
              <h3 className="text-lg font-semibold text-neutral-300 mb-6">
                Spacing Scale
              </h3>
              <div className="grid grid-cols-6 gap-x-8 gap-y-4">
                {SPACING_SCALE.map((space) => (
                  <div
                    key={space}
                    className="col-span-2 md:col-span-1 flex flex-col gap-1"
                  >
                    <div className="flex items-center gap-2">
                      <div
                        className="flex-1 h-1.5 bg-primary-500 rounded-full"
                        style={{ width: `${Math.min(space * 4, 100)}%` }}
                      />
                      <span className="text-xs text-neutral-400 tabular-nums">
                        {space}
                      </span>
                    </div>
                    <div className="text-[10px] text-neutral-500">
                      <div>p-{space}</div>
                      <div>m-{space}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-neutral-300 mb-6">
                Common Spacing Examples
              </h3>
              <div className="space-y-8">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-neutral-300">
                      Container Padding
                    </span>
                    <div className="flex gap-2 text-[10px] font-mono">
                      <span className="px-1.5 py-0.5 rounded bg-neutral-800 text-neutral-300">
                        p-4
                      </span>
                      <span className="px-1.5 py-0.5 rounded bg-neutral-800 text-neutral-300">
                        md:p-6
                      </span>
                      <span className="px-1.5 py-0.5 rounded bg-neutral-800 text-neutral-300">
                        lg:p-8
                      </span>
                    </div>
                  </div>
                  <div className="h-16 bg-neutral-800 rounded-lg p-4 md:p-6 lg:p-8 flex items-center justify-center">
                    <div className="h-full w-full bg-neutral-700 rounded" />
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-neutral-300">
                      Vertical Spacing
                    </span>
                    <span className="px-1.5 py-0.5 rounded bg-neutral-800 text-neutral-300 text-[10px] font-mono">
                      space-y-4
                    </span>
                  </div>
                  <div className="space-y-4">
                    <div className="h-8 bg-neutral-800 rounded" />
                    <div className="h-8 bg-neutral-800 rounded" />
                    <div className="h-8 bg-neutral-800 rounded" />
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-neutral-300">
                      Grid Gap
                    </span>
                    <span className="px-1.5 py-0.5 rounded bg-neutral-800 text-neutral-300 text-[10px] font-mono">
                      gap-4
                    </span>
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="h-12 bg-neutral-800 rounded" />
                    <div className="h-12 bg-neutral-800 rounded" />
                    <div className="h-12 bg-neutral-800 rounded" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Border Radius */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold border-b pb-2">Border Radius</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {BORDER_RADIUS.map((radius) => (
            <div key={radius} className="space-y-3">
              <div
                className={`h-24 bg-primary-500 rounded-${radius} shadow-md`}
              />
              <div className="text-center">
                <div className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
                  rounded-{radius}
                </div>
                <div className="text-xs text-neutral-500">Example usage</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Shadows */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold border-b pb-2">Shadows</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {SHADOWS.map((shadow) => (
            <div key={shadow} className="space-y-3">
              <div
                className={`h-24 bg-white dark:bg-neutral-800 rounded-lg shadow-${shadow} flex items-center justify-center`}
              >
                <span className="text-sm text-neutral-500">
                  shadow-{shadow}
                </span>
              </div>
              <div className="text-center">
                <div className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
                  shadow-{shadow}
                </div>
                <div className="text-xs text-neutral-500">Example usage</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Breakpoints */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold border-b pb-2">Breakpoints</h2>
        <div className="bg-white dark:bg-neutral-800 p-6 rounded-lg shadow-sm">
          <div className="space-y-4">
            {BREAKPOINTS.map((breakpoint) => (
              <div
                key={breakpoint}
                className="flex items-center justify-between py-2 border-b last:border-b-0"
              >
                <span className="font-medium text-neutral-700 dark:text-neutral-300">
                  @{breakpoint}
                </span>
                <span className="text-sm text-neutral-500">
                  min-width:{" "}
                  {breakpoint === "sm"
                    ? "640px"
                    : breakpoint === "md"
                      ? "768px"
                      : breakpoint === "lg"
                        ? "1024px"
                        : breakpoint === "xl"
                          ? "1280px"
                          : "1536px"}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Z-Index */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold border-b pb-2">Z-Index</h2>
        <div className="bg-white dark:bg-neutral-800 p-6 rounded-lg shadow-sm">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {Z_INDICES.map((z) => (
              <div
                key={z}
                className="flex items-center justify-between p-3 bg-neutral-50 dark:bg-neutral-900 rounded"
              >
                <span className="font-medium text-neutral-700 dark:text-neutral-300">
                  z-{z}
                </span>
                <span className="text-sm text-neutral-500">
                  {z === "auto" ? "auto" : parseInt(z)}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

const designSystemCode = `// Example usage of design system elements

// Typography
<h1 className="text-4xl font-bold">Heading 1</h1>
<p className="text-base font-normal">Regular paragraph text</p>
<span className="text-sm font-medium">Small medium text</span>

// Colors
<div className="bg-primary-500 text-white">Primary background</div>
<div className="text-neutral-600">Neutral text</div>
<div className="bg-success-100 text-success-800">Success message</div>

// Spacing
<div className="p-4">Padding 4</div>
<div className="m-6">Margin 6</div>
<div className="space-y-4">Vertical spacing 4</div>

// Border Radius
<div className="rounded-lg">Large rounded corners</div>
<div className="rounded-full">Full circle</div>

// Shadows
<div className="shadow-lg">Large shadow</div>
<div className="shadow-inner">Inner shadow</div>

// Responsive Design
<div className="sm:text-lg md:text-xl lg:text-2xl">Responsive text</div>
<div className="sm:p-4 md:p-6 lg:p-8">Responsive padding</div>

// Z-Index
<div className="z-10">Above default content</div>
<div className="z-50">Modal overlay</div>`;

export const DesignSystemShowcase = () => {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold mb-2">Design System</h1>
        <p className="text-neutral-600 dark:text-neutral-400">
          A comprehensive design system with consistent colors, typography,
          spacing, and other design tokens for building beautiful interfaces.
        </p>
      </div>

      <PreviewWrapper
        label="Design System Examples"
        preview={<DesignSystemPreview />}
        code={designSystemCode}
        variant="default"
      />
    </div>
  );
};
