import { NotificationContainer } from "../ChatNotification/NotificationContainer";
import { notify } from "../ChatNotification/NotificationManager";
import { CliTabs } from "../CliTabs/CliTab";
import PreviewWrapper from "../PreviewWrapper";

function NotificationPage() {
  return (
    <>
      <section id="#installation">
        <h1 className="text-h4 mb-6">Installation</h1>
        <CliTabs
          commands={{
            pnpm: "pnpm dlx shadcn@latest add http://rimxui.vercel.app/registry/notification.json",
            npm: "npx shadcn@latest add http://rimxui.vercel.app/registry/notification.json",
            bun: "bunx shadcn@latest add http://rimxui.vercel.app/registry/notification.json",
            yarn: "yarn dlx shadcn@latest add http://rimxui.vercel.app/registry/notification.json",
          }}
        />
      </section>

      {/* Notification System Preview */}
      <PreviewWrapper
        label="Notification Example"
        variant="centered"
        preview={
          <div className="flex flex-col items-center justify-center gap-6 p-8">
            <NotificationContainer />
            <button
              className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
              onClick={() =>
                notify({
                  title: "Success",
                  message: "You just triggered a notification!",
                  type: "success",
                  duration: 4000,
                })
              }
            >
              Show Notification
            </button>
          </div>
        }
        code={`
// Notification Trigger Example
<NotificationContainer />
<button
  className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
  onClick={() =>
    notify({
      title: "Success",
      message: "You just triggered a notification!",
      type: "success",
      duration: 4000,
    })
  }
>
  Show Notification
</button>
        `}
      />
      <PreviewWrapper
        label="Error Notification"
        variant="centered"
        preview={
          <>
            <NotificationContainer />
            <button
              className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
              onClick={() =>
                notify({
                  title: "Error",
                  message: "Something went wrong!",
                  type: "error",
                  duration: 4000,
                })
              }
            >
              Show Error
            </button>
          </>
        }
        code={`
// Error Notification
<NotificationContainer />
<button onClick={() => notify({ title: "Error", message: "Something went wrong!", type: "error", duration: 4000 })}>
  Show Error
</button>
  `}
      />

      <PreviewWrapper
        label="Info Notification"
        variant="centered"
        preview={
          <>
            <NotificationContainer />
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
              onClick={() =>
                notify({
                  title: "Info",
                  message: "Here's some extra information.",
                  type: "info",
                  duration: 4000,
                })
              }
            >
              Show Info
            </button>
          </>
        }
        code={`
// Info Notification
<NotificationContainer />
<button onClick={() => notify({ title: "Info", message: "Here's some extra information.", type: "info", duration: 4000 })}>
  Show Info
</button>
  `}
      />
    </>
  );
}

export default NotificationPage;
