import { RadioGroup, RadioGroupItem } from "@/components/RadioButton/RadioButton";
import { Label } from "@/components/Label/Label";
import PreviewWrapper from "../PreviewWrapper";
import { CliTabs } from "../CliTabs/CliTab";

const RadioButtonPage = () => {
  return (
    <div className="min-h-screen px-4 py-8 bg-white dark:bg-neutral-900 text-gray-800 dark:text-gray-200 transition-colors duration-300">
      <div className="max-w-2xl flex flex-col gap-3 mx-auto">
        <div className="space-y-0.5">
          <h2 className="text-2xl font-bold tracking-tight">Radio Group</h2>
          <p className="text-muted-foreground">
            Displays a button or a component that looks like a button.
          </p>
        </div>
        <section id="#installation">
          <h1 className="text-h4 mb-6">Installation</h1>
          <CliTabs
            commands={{
              pnpm: "pnpm dlx shadcn@latest add http://rimxui.vercel.app/registry/radiogroups.json",
              npm: "npx shadcn@latest add http://rimxui.vercel.app/registry/radiogroups.json",
              bun: "bunx shadcn@latest add http://rimxui.vercel.app/registry/radiogroups.json",
              yarn: "yarn dlx shadcn@latest add http://rimxui.vercel.app/registry/radiogroups.json",
            }}
          />
        </section>
        <div className="grid">
          <PreviewWrapper
            label="Textarea Component"
            variant="centered"
            preview={
              <div>
                <RadioGroup defaultValue="option-one">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem
                      variant={"default"}
                      value="option-one"
                      id="option-one"
                    />
                    <Label htmlFor="option-one">Option One</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem
                      variant={"default"}
                      value="option-two"
                      id="option-two"
                    />
                    <Label htmlFor="option-two">Option Two</Label>
                  </div>
                </RadioGroup>
              </div>
            }
            code={`
<div>
  <RadioGroup defaultValue="option-one">
    <div className="flex items-center space-x-2">
      <RadioGroupItem
        variant={"default"}
        value="option-one"
        id="option-one"
      />
      <Label htmlFor="option-one">Option One</Label>
    </div>
    <div className="flex items-center space-x-2">
      <RadioGroupItem
        variant={"default"}
          value="option-two"
          id="option-two"
      />
    <Label htmlFor="option-two">Option Two</Label>
    </div>
  </RadioGroup>
</div>
`}
          />
        </div>
      </div>
    </div>
  );
};

export default RadioButtonPage;
