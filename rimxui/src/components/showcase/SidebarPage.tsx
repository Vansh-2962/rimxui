import {
  SidebarBasic,
  SidebarPro,
  SidebarCompact,
  SidebarWithSections,
} from "../Sidebar/Sidebar.tsx";
import { CliTabs } from "../CliTabs/CliTab.tsx";
import PreviewWrapper from "../PreviewWrapper";

export const SidebarPage = () => {
  return (
    <div className="space-y-10 p-6">
      <section id="#installation">
        <h1 className="text-h4 mb-6">Installation</h1>
        <CliTabs
          commands={{
            pnpm: "pnpm dlx shadcn@latest add http://rimxui.vercel.app/registry/sidebars.json",
            npm: "npx shadcn@latest add http://rimxui.vercel.app/registry/sidebars.json",
            bun: "bunx shadcn@latest add http://rimxui.vercel.app/registry/sidebars.json",
            yarn: "yarn dlx shadcn@latest add http://rimxui.vercel.app/registry/sidebars.json",
          }}
        />
      </section>
      <h2 className="text-2xl font-bold tracking-tight">Sidebar</h2>

      <PreviewWrapper
        variant="centered"
        label="Basic Sidebar"
        preview={<SidebarBasic />}
        code={`<SidebarBasic />`}
      />

      <PreviewWrapper
        variant="centered"
        label="Professional Sidebar (with Icons, Profile, Search)"
        preview={<SidebarPro />}
        code={`<SidebarPro />`}
      />

      <PreviewWrapper
        variant="centered"
        label="Compact Sidebar"
        preview={<SidebarCompact />}
        code={`<SidebarCompact />`}
      />

      <PreviewWrapper
        variant="centered"
        label="Sidebar With Sections"
        preview={<SidebarWithSections />}
        code={`<SidebarWithSections />`}
      />
    </div>
  );
};

export default SidebarPage;
