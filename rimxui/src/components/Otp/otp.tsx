import React, {
  useState,
  useEffect,
  useRef,
  ChangeEvent,
  KeyboardEvent,
  ClipboardEvent,
} from "react";

interface OTPInputProps {
  length: number;
  onOTPComplete?: (otp: string) => void;
  resendTimeout?: number;
  variant?:
    | "default"
    | "underline"
    | "filled"
    | "glass"
    | "circle"
    | "large"
    | "animated";
}

const OtpInput: React.FC<OTPInputProps> = ({
  length = 6,
  onOTPComplete,
  resendTimeout = 30,
  variant = "default",
}) => {
  const [otp, setOtp] = useState<string[]>(Array(length).fill(""));
  const [timer, setTimer] = useState(resendTimeout);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    if (timer > 0) {
      const interval = setTimeout(() => setTimer((prev) => prev - 1), 1000);
      return () => clearTimeout(interval);
    }
  }, [timer]);

  const handleInput = (e: ChangeEvent<HTMLInputElement>, index: number) => {
    const value = e.target.value.replace(/\D/g, "");
    if (!value) return;

    const updatedOtp = [...otp];
    updatedOtp[index] = value;
    setOtp(updatedOtp);

    if (index < length - 1) {
      inputRefs.current[index + 1]?.focus();
    }

    if (updatedOtp.every((digit) => digit !== "")) {
      onOTPComplete?.(updatedOtp.join(""));
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === "Backspace") {
      const updatedOtp = [...otp];
      if (updatedOtp[index]) {
        updatedOtp[index] = "";
        setOtp(updatedOtp);
      } else if (index > 0) {
        inputRefs.current[index - 1]?.focus();
        updatedOtp[index - 1] = "";
        setOtp(updatedOtp);
      }
    } else if (e.key === "ArrowLeft" && index > 0) {
      inputRefs.current[index - 1]?.focus();
    } else if (e.key === "ArrowRight" && index < length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handlePaste = (e: ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pasted = e.clipboardData
      .getData("Text")
      .replace(/\D/g, "")
      .slice(0, length);
    const updatedOtp = [...otp];

    for (let i = 0; i < pasted.length; i++) {
      updatedOtp[i] = pasted[i];
      if (inputRefs.current[i]) {
        inputRefs.current[i]!.value = pasted[i];
      }
    }

    setOtp(updatedOtp);

    if (updatedOtp.every((digit) => digit !== "")) {
      onOTPComplete?.(updatedOtp.join(""));
    }
  };

  const resendOTP = () => {
    setOtp(Array(length).fill(""));
    setTimer(resendTimeout);
    inputRefs.current[0]?.focus();
  };

  const getInputClasses = () => {
    const base =
      "w-12 h-12 text-center text-lg transition-all duration-200 ease-in-out outline-none";

    const variants: Record<string, string> = {
      default:
        "border border-gray-300 dark:border-gray-600 rounded text-black dark:text-white bg-white dark:bg-gray-800 focus:ring-2 focus:ring-blue-500",
      underline:
        "border-b-2 border-gray-300 dark:border-gray-600 text-black dark:text-white bg-transparent focus:ring-0",
      filled:
        "bg-gray-200 dark:bg-gray-700 text-black dark:text-white rounded focus:ring-2 focus:ring-blue-500",
      glass:
        "bg-white/40 dark:bg-gray-800/40 backdrop-blur-md border border-gray-300 dark:border-gray-600 text-black dark:text-white rounded focus:ring-2 focus:ring-blue-500",
      circle:
        "rounded-full bg-gray-200 dark:bg-gray-700 text-black dark:text-white focus:ring-2 focus:ring-blue-500",
      large:
        "w-16 h-16 text-xl bg-gray-200 dark:bg-gray-700 text-black dark:text-white rounded focus:ring-2 focus:ring-blue-500",
      animated:
        "border border-green-500 dark:border-green-400 text-green-700 dark:text-green-300 bg-white dark:bg-neutral-900 rounded hover:scale-105 focus:ring-2 focus:ring-green-500",
    };

    return `${base} ${variants[variant] ?? variants["default"]}`;
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="flex gap-3">
        {otp.map((digit, index) => (
          <input
            key={index}
            type="text"
            inputMode="numeric"
            maxLength={1}
            value={digit}
            className={getInputClasses()}
            onChange={(e) => handleInput(e, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            onPaste={handlePaste}
            ref={(el) => {
              inputRefs.current[index] = el;
            }}
          />
        ))}
      </div>
      <div className="text-sm text-gray-700 dark:text-gray-300">
        {timer > 0 ? (
          <p>Resend OTP in {timer}s</p>
        ) : (
          <button onClick={resendOTP} className="text-blue-500 hover:underline">
            Resend OTP
          </button>
        )}
      </div>
    </div>
  );
};

export default OtpInput;
