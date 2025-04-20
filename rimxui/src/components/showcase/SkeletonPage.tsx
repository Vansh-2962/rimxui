import { SkeletonBlock } from "../skeleton/skeleton";
import PreviewWrapper from "../PreviewWrapper";
import { CliTabs } from "../CliTabs/CliTab";

const SkeletonPage = () => {
  return (
    <>
      <section id="#installation">
        <h1 className="text-h4 mb-6">Installation</h1>
        <CliTabs
          commands={{
            pnpm: "pnpm dlx shadcn@latest add http://rimxui.vercel.app/registry/skeleton.json",
            npm: "npx shadcn@latest add http://rimxui.vercel.app/registry/skeleton.json",
            bun: "bunx shadcn@latest add http://rimxui.vercel.app/registry/skeleton.json",
            yarn: "yarn dlx shadcn@latest add http://rimxui.vercel.app/registry/skeleton.json",
          }}
        />
      </section>

      <div className="space-y-6 p-4">
        <PreviewWrapper
          label="Skeleton - Default Variant"
          variant="centered"
          preview={<SkeletonBlock width="100%" height="20px" />}
          code={`
          <SkeletonBlock width="100%" height="20px" />
          `}
        />
        {/* Avatar Variant Preview */}
        <PreviewWrapper
          label="Skeleton - Avatar Variant"
          variant="centered"
          preview={
            <div className="flex items-center space-x-4">
              <SkeletonBlock width="50px" height="50px" circle />
              <div className="flex flex-col space-y-2">
                <SkeletonBlock width="100px" height="16px" />
                <SkeletonBlock width="140px" height="12px" />
              </div>
            </div>
          }
          code={`
          <div className="flex items-center space-x-4">
          <SkeletonBlock width="50px" height="50px" circle />
          <div className="flex flex-col space-y-2">
          <SkeletonBlock width="100px" height="16px" />
          <SkeletonBlock width="140px" height="12px" />
          </div>
          </div>
          `}
        />

        {/* Card Variant Preview */}
        <PreviewWrapper
          label="Skeleton - Card Variant"
          variant="centered"
          preview={
            <div className="w-full p-4 border border-gray-200 rounded-md space-y-3">
              <SkeletonBlock width="100%" height="150px" />
              <SkeletonBlock width="60%" height="20px" />
              <SkeletonBlock width="80%" height="14px" />
            </div>
          }
          code={`
          <div className="w-full p-4 border border-gray-200 rounded-md space-y-3">
          <SkeletonBlock width="100%" height="150px" />
          <SkeletonBlock width="60%" height="20px" />
          <SkeletonBlock width="80%" height="14px" />
          </div>
          `}
        />
        {/* <PreviewWrapper
        label="Skeleton - Blog Variant"
        variant="centered"
        preview={
          <div className="space-y-3">
          <SkeletonBlock width="100%" height="150px" />
          <SkeletonBlock width="70%" height="24px" />
          <SkeletonBlock width="100%" height="14px" />
          <SkeletonBlock width="90%" height="14px" />
          </div>
          }
          code={`
          <div className="space-y-3">
          <SkeletonBlock width="100%" height="200px" />
          <SkeletonBlock width="70%" height="24px" />
          <SkeletonBlock width="100%" height="14px" />
          <SkeletonBlock width="90%" height="14px" />
          </div>
          `}
          /> */}

        <PreviewWrapper
          label="Skeleton - Classic Variant"
          variant="centered"
          preview={
            <div className="flex space-x-4 p-4 border rounded-md w-full max-w-md">
              <SkeletonBlock width="60px" height="60px" circle />
              <div className="flex flex-col space-y-3 flex-1">
                <SkeletonBlock width="40%" height="18px" />
                <SkeletonBlock width="70%" height="14px" />
                <SkeletonBlock width="100%" height="10px" />
                <SkeletonBlock width="90%" height="10px" />
              </div>
            </div>
          }
          code={`
        <div className="flex space-x-4 p-4 border rounded-md w-full max-w-md">
        <SkeletonBlock width="60px" height="60px" circle />
        <div className="flex flex-col space-y-3 flex-1">
        <SkeletonBlock width="40%" height="18px" />
        <SkeletonBlock width="70%" height="14px" />
        <SkeletonBlock width="100%" height="10px" />
        <SkeletonBlock width="90%" height="10px" />
        </div>
        </div>
        `}
        />
      </div>
    </>
  );
};

export default SkeletonPage;
