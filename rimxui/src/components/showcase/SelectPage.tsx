import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/Select/Select";
import PreviewWrapper from "../PreviewWrapper";
import { CliTabs } from "../CliTabs/CliTab";

const SelectPage = () => {
  return (
    <div className="min-h-screen px-4 py-8 bg-white dark:bg-neutral-900 text-gray-800 dark:text-gray-200 transition-colors duration-300">
      <div className="max-w-2xl flex flex-col gap-3 mx-auto">
        <div className="space-y-0.5">
          <h2 className="text-2xl font-bold tracking-tight">Select</h2>
          <p className="text-muted-foreground">
            Displays a button or a component that looks like a button.
          </p>
        </div>
        <section id="#installation">
          <h1 className="text-h4 mb-6">Installation</h1>
          <CliTabs
            commands={{
              pnpm: "pnpm dlx shadcn@latest add http://rimxui.vercel.app/registry/selects.json",
              npm: "npx shadcn@latest add http://rimxui.vercel.app/registry/selects.json",
              bun: "bunx shadcn@latest add http://rimxui.vercel.app/registry/selects.json",
              yarn: "yarn dlx shadcn@latest add http://rimxui.vercel.app/registry/selects.json",
            }}
          />
        </section>
        <div className="grid">
          <PreviewWrapper
            label="Select Component"
            variant="centered"
            preview={
              <div className="max-w-2xl flex flex-col gap-3 mx-auto">
                <Select>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Theme" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="light">Light</SelectItem>
                    <SelectItem value="dark">Dark</SelectItem>
                    <SelectItem value="system">System</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            }
            code={`
<div>
  <Select>
    <SelectTrigger className="w-[180px]">
      <SelectValue placeholder="Theme" />
    </SelectTrigger>
    <SelectContent>
      <SelectItem value="light">Light</SelectItem>
      <SelectItem value="dark">Dark</SelectItem>
      <SelectItem value="system">System</SelectItem>
    </SelectContent>
  </Select>
</div>
`}
          />
        </div>
      </div>
    </div>
  );
};

export default SelectPage;
