import { useToast } from "../Toasts/toast";
import PreviewWrapper from "../PreviewWrapper";
import { CliTabs } from "../CliTabs/CliTab";

export const ToastPage = () => {
  const showToast = useToast();
  return (
    <div className="space-y-12 max-w-4xl">
      <div className="space-y-4">
        <div className="inline-flex items-center rounded-lg bg-neutral-100 dark:bg-neutral-800 px-3 py-1 text-sm font-medium">
          <span>Components</span>
          <span className="mx-2 text-neutral-400 dark:text-neutral-500">/</span>
          <span>Toast</span>
          <h1 className="text-h1 text-neutral-900 dark:text-neutral-100">
            Toasts
          </h1>
          <p className="text-body-lg text-neutral-500 dark:text-neutral-400">
            A versatile toast component for displaying brief notifications with
            customizable styles and animations.
          </p>
        </div>
        <section id="#installation">
          <h1 className="text-h4 mb-6">Installation</h1>
          <CliTabs
            commands={{
              pnpm: "pnpm dlx shadcn@latest add http://rimxui.vercel.app/registry/toasts.json",
              npm: "npx shadcn@latest add http://rimxui.vercel.app/registry/toasts.json",
              bun: "bunx shadcn@latest add http://rimxui.vercel.app/registry/toasts.json",
              yarn: "yarn dlx shadcn@latest add http://rimxui.vercel.app/registry/toasts.json",
            }}
          />
        </section>

        <PreviewWrapper
          label="Success Toast"
          variant="centered"
          preview={
            <button
              className="px-4 py-2 rounded-md bg-green-600 hover:bg-green-700 text-white transition-colors"
              onClick={() => showToast("this is a success toast!", "success")}
            >
              Success Toast
            </button>
          }
          code={`<button className="px-4 py-2 rounded-md bg-green-600 hover:bg-green-700 text-white" onClick={() => showToast("this is a success toast!", "success")}>Success Toast</button>`}
        />

        <PreviewWrapper
          label="Error Toast"
          variant="centered"
          preview={
            <button
              className="px-4 py-2 rounded-md bg-red-600 hover:bg-red-700 text-white transition-colors"
              onClick={() => showToast("this is an error toast!", "error")}
            >
              Error Toast
            </button>
          }
          code={`<button className="px-4 py-2 rounded-md bg-red-600 hover:bg-red-700 text-white" onClick={() => showToast("this is an error toast!", "error")}>Error Toast</button>`}
        />

        <PreviewWrapper
          label="Info Toast"
          variant="centered"
          preview={
            <button
              className="px-4 py-2 rounded-md bg-blue-600 hover:bg-blue-700 text-white transition-colors"
              onClick={() => showToast("this is an info toast!", "info")}
            >
              Info Toast
            </button>
          }
          code={`<button className="px-4 py-2 rounded-md bg-blue-600 hover:bg-blue-700 text-white" onClick={() => showToast("this is an info toast!", "info")}>Info Toast</button>`}
        />

        <PreviewWrapper
          label="Warning Toast"
          variant="centered"
          preview={
            <button
              className="px-4 py-2 rounded-md bg-yellow-400 hover:bg-yellow-500 text-black transition-colors"
              onClick={() => showToast("this is a warning toast!", "warning")}
            >
              Warning Toast
            </button>
          }
          code={`<button className="px-4 py-2 rounded-md bg-yellow-400 hover:bg-yellow-500 text-black" onClick={() => showToast("this is a warning toast!", "warning")}>Warning Toast</button>`}
        />
      </div>
    </div>
  );
};
