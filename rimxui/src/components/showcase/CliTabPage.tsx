import { CliTabs } from "../CliTabs/CliTab"

const CliTabPage = () => {
  return (
    <div>
      <section id="#installation">
          <h1 className="text-h4 mb-6">Installation</h1>
          <CliTabs
            commands={{
              pnpm: "pnpm dlx shadcn@latest add http://rimxui.vercel.app/registry/clitab.json",
              npm: "npx shadcn@latest add http://rimxui.vercel.app/registry/clitab.json",
              bun: "bunx shadcn@latest add http://rimxui.vercel.app/registry/clitab.json",
              yarn: "yarn dlx shadcn@latest add http://rimxui.vercel.app/registry/clitab.json",
            }}
          />
        </section>
        <CliTabs
            commands={{
              pnpm: "pnpm's example command",
              npm: "npx's example command",
              bun: "bunx's example command",
              yarn: "yarn's example command",
            }}
          />
    </div>
  )
}

export default CliTabPage