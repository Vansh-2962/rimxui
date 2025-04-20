import { CliTabs } from "../CliTabs/CliTab";
import OtpInput from "../Otp/otp";
import PreviewWrapper from "../PreviewWrapper";

export default function OTPPage() {
  const handleOTPComplete = (otp: string) => {
    console.log("OTP entered:", otp);
    // Call API to verify
  };

  return (
    <>
      <section id="#installation">
        <h1 className="text-h4 mb-6">Installation</h1>
        <CliTabs
          commands={{
            pnpm: "pnpm dlx shadcn@latest add http://rimxui.vercel.app/registry/otpinputs.json",
            npm: "npx shadcn@latest add http://rimxui.vercel.app/registry/otpinputs.json",
            bun: "bunx shadcn@latest add http://rimxui.vercel.app/registry/otpinputs.json",
            yarn: "yarn dlx shadcn@latest add http://rimxui.vercel.app/registry/otpinputs.json",
          }}
        />
      </section>
      <div className="space-y-10 pb-16">
        <PreviewWrapper
          label="OTP Variant - Circle"
          variant="centered"
          preview={
            <OtpInput
              length={6}
              variant="circle"
              onOTPComplete={handleOTPComplete}
            />
          }
          code={`<OtpInput length={6} variant="circle" onOTPComplete={handleOTPComplete} />`}
        />

        <PreviewWrapper
          label="OTP Variant - Large"
          variant="centered"
          preview={
            <OtpInput
              length={6}
              variant="large"
              onOTPComplete={handleOTPComplete}
            />
          }
          code={`<OtpInput length={6} variant="large" onOTPComplete={handleOTPComplete} />`}
        />

        <PreviewWrapper
          label="OTP Variant - Glass"
          variant="centered"
          preview={
            <OtpInput
              length={6}
              variant="glass"
              onOTPComplete={handleOTPComplete}
            />
          }
          code={`<OtpInput length={6} variant="glass" onOTPComplete={handleOTPComplete} />`}
        />

        <PreviewWrapper
          label="OTP Variant - Animated"
          variant="centered"
          preview={
            <OtpInput
              length={6}
              variant="animated"
              onOTPComplete={handleOTPComplete}
            />
          }
          code={`<OtpInput length={6} variant="animated" onOTPComplete={handleOTPComplete} />`}
        />
      </div>
    </>
  );
}
