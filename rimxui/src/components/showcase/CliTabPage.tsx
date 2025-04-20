import { CliTabs } from "../CliTabs/CliTab";
import PreviewWrapper from "../PreviewWrapper";

const CliTabPage = () => {
  return (
    <div>
      <section id="#installation">
        <h1 className="text-h4 mb-6">Installation</h1>
        <CliTabs
          commands={{
            pnpm: "pnpm dlx shadcn@latest add http://rimxui.vercel.app/registry/clitabs.json",
            npm: "npx shadcn@latest add http://rimxui.vercel.app/registry/clitabs.json",
            bun: "bunx shadcn@latest add http://rimxui.vercel.app/registry/clitabs.json",
            yarn: "yarn dlx shadcn@latest add http://rimxui.vercel.app/registry/clitabs.json",
          }}
        />
      </section>
      <PreviewWrapper
        label="Cli Tabs"
        variant="centered"
        preview={
          <CliTabs
            commands={{
              pnpm: "pnpm's example command",
              npm: "npx's example command",
              bun: "bunx's example command",
              yarn: "yarn's example command",
            }}
          />
        }
        code={`
import { CliTabs } from "@/components/ui/clitabs"
  
function clitab () {
return (
  <CliTabs
    commands={{
      pnpm: "pnpm's example command",
      npm: "npx's example command",
      bun: "bunx's example command",
      yarn: "yarn's example command",
    }}
  />
    )
  }
`}
      />
    </div>
  );
};

export default CliTabPage;