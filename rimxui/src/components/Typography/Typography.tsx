import clsx, { ClassValue } from "clsx";
import { CSSProperties, ElementType, forwardRef, HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

// #region Types
export type TypographyHeadingLevels = 1 | 2 | 3 | 4 | 5 | 6;
export type TypographyType = "heading" | "link" | "text" | "inline";
export type TypographyVariants =
  | "default"
  | "primary"
  | "secondary"
  | "outline"
  | "dark"
  | "darkPrimary"
  | "darkSecondary";

export type TypographySizes =
  | "xs"
  | "sm"
  | "md"
  | "lg"
  | "xl"
  | "2xl"
  | "3xl"
  | "4xl";

export type TypographyWeight =
  | "thin"
  | "extralight"
  | "light"
  | "normal"
  | "medium"
  | "semibold"
  | "bold"
  | "extrabold"
  | "black";

export type TypographyColorNames =
  | "default"
  | "primary"
  | "secondary"
  | "success"
  | "warning"
  | "error"
  | "info"
  | "gray"
  | "red"
  | "green"
  | "blue"
  | "yellow";

type BaseTypographyProps = {
  variant?: TypographyVariants;
  size?: TypographySizes;
  weight?: TypographyWeight;
  color?: TypographyColorNames | string;
  className?: string;
  as?: ElementType;
};

export interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  type?: "heading";
  level?: TypographyHeadingLevels;
}

export interface LinkProps extends HTMLAttributes<HTMLAnchorElement> {
  type?: "link";
  href: string;
}

export interface TextProps extends HTMLAttributes<HTMLParagraphElement> {
  type?: "text";
}

export interface InlineProps extends HTMLAttributes<HTMLSpanElement> {
  type?: "inline";
}

type TypographyPropsBasedOnType =
  | HeadingProps
  | LinkProps
  | TextProps
  | InlineProps;

export type TypographyProps = BaseTypographyProps & TypographyPropsBasedOnType;

export type TypographyRefType =
  | HTMLHeadingElement
  | HTMLAnchorElement
  | HTMLParagraphElement
  | HTMLSpanElement;

// #endregion

// #region Constants
export const TYPOGRAPHY_VARIANTS_STYLES = {
  default: "text-gray-900 dark:text-gray-100",
  primary: "text-primary-600 dark:text-primary-400",
  secondary: "text-gray-600 dark:text-gray-400",
  outline:
    "text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600",
  dark: "text-gray-900 dark:text-white",
  darkPrimary: "text-primary-700 dark:text-primary-300",
  darkSecondary: "text-gray-700 dark:text-gray-300",
};

export const TYPOGRAPHY_COLOR_STYLES: Record<TypographyColorNames, string> = {
  default: "text-gray-900 dark:text-gray-100",
  primary: "text-primary-600 dark:text-primary-400",
  secondary: "text-gray-600 dark:text-gray-400",
  success: "text-green-600 dark:text-green-400",
  warning: "text-yellow-600 dark:text-yellow-400",
  error: "text-red-600 dark:text-red-400",
  info: "text-blue-600 dark:text-blue-400",
  gray: "text-gray-600 dark:text-gray-400",
  red: "text-red-600 dark:text-red-400",
  green: "text-green-600 dark:text-green-400",
  blue: "text-blue-600 dark:text-blue-400",
  yellow: "text-yellow-600 dark:text-yellow-400",
};

export const TEXT_SIZES_STYLES = {
  xs: "text-xs",
  sm: "text-sm",
  md: "text-base",
  lg: "text-lg",
  xl: "text-xl",
  "2xl": "text-2xl",
  "3xl": "text-3xl",
  "4xl": "text-4xl",
};

export const FONT_WEIGHT_STYLES: Record<TypographyWeight, string> = {
  thin: "font-thin",
  extralight: "font-extralight",
  light: "font-light",
  normal: "font-normal",
  medium: "font-medium",
  semibold: "font-semibold",
  bold: "font-bold",
  extrabold: "font-extrabold",
  black: "font-black",
};

// Default weights for each heading level if no weight is specified
export const DEFAULT_HEADING_WEIGHTS: Record<
  TypographyHeadingLevels,
  TypographyWeight
> = {
  1: "bold",
  2: "bold",
  3: "semibold",
  4: "semibold",
  5: "medium",
  6: "medium",
};

// Size scales without font weights (weights will be applied separately)
export const HEADING_SIZE_SCALES: Record<
  TypographyHeadingLevels,
  Record<TypographySizes, string>
> = {
  1: {
    xs: "text-lg",
    sm: "text-xl",
    md: "text-2xl",
    lg: "text-3xl",
    xl: "text-4xl",
    "2xl": "text-5xl",
    "3xl": "text-6xl",
    "4xl": "text-7xl",
  },
  2: {
    xs: "text-base",
    sm: "text-lg",
    md: "text-xl",
    lg: "text-2xl",
    xl: "text-3xl",
    "2xl": "text-4xl",
    "3xl": "text-5xl",
    "4xl": "text-6xl",
  },
  3: {
    xs: "text-sm",
    sm: "text-base",
    md: "text-lg",
    lg: "text-xl",
    xl: "text-2xl",
    "2xl": "text-3xl",
    "3xl": "text-4xl",
    "4xl": "text-5xl",
  },
  4: {
    xs: "text-xs",
    sm: "text-sm",
    md: "text-base",
    lg: "text-lg",
    xl: "text-xl",
    "2xl": "text-2xl",
    "3xl": "text-3xl",
    "4xl": "text-4xl",
  },
  5: {
    xs: "text-xs",
    sm: "text-xs",
    md: "text-sm",
    lg: "text-base",
    xl: "text-lg",
    "2xl": "text-xl",
    "3xl": "text-2xl",
    "4xl": "text-3xl",
  },
  6: {
    xs: "text-xs",
    sm: "text-xs",
    md: "text-xs",
    lg: "text-sm",
    xl: "text-base",
    "2xl": "text-lg",
    "3xl": "text-xl",
    "4xl": "text-2xl",
  },
};
// #endregion

// #region Utils
// TODO: Check if this can be used from utils instead of defining it here
export const mc = (...inputs: ClassValue[]) => twMerge(clsx(inputs));
// #endregion

// #region Components
const TYPOGRAPHY_COMPONENT_MAP: Partial<Record<TypographyType, ElementType>> = {
  link: "a",
  text: "p",
  inline: "span",
};

const getHeadingElement = (level: TypographyHeadingLevels): ElementType => {
  return `h${level}` as ElementType;
};

const isPredefinedColor = (color: string): color is TypographyColorNames =>
  Object.keys(TYPOGRAPHY_COLOR_STYLES).includes(color as TypographyColorNames);

export const Typography = forwardRef<TypographyRefType, TypographyProps>(
  (
    {
      children,
      type = "text",
      variant = "default",
      color,
      size = "md",
      weight,
      className,
      as,
      style,
      ...restProps
    },
    ref,
  ) => {
    let textColorStyles = TYPOGRAPHY_VARIANTS_STYLES[variant];
    let customStyles: CSSProperties = style || {};

    if (color) {
      if (isPredefinedColor(color)) {
        textColorStyles = TYPOGRAPHY_COLOR_STYLES[color];
      } else {
        customStyles = { ...customStyles, color };
        textColorStyles = "";
      }
    }

    let sizeStyles = "";
    let weightStyles = "";
    let Component: ElementType;

    if (type === "heading" && "level" in restProps) {
      const level = restProps.level || 1;

      const headingSizeScale = HEADING_SIZE_SCALES[level];

      sizeStyles = headingSizeScale[size];

      const headingWeight = weight || DEFAULT_HEADING_WEIGHTS[level];
      weightStyles = FONT_WEIGHT_STYLES[headingWeight];

      Component = as || getHeadingElement(level);
    } else {
      sizeStyles = TEXT_SIZES_STYLES[size];

      weightStyles = weight
        ? FONT_WEIGHT_STYLES[weight]
        : FONT_WEIGHT_STYLES.normal;

      Component = as || TYPOGRAPHY_COMPONENT_MAP[type] || "div";
    }

    const typographyComponentStyles = mc(
      textColorStyles,
      sizeStyles,
      weightStyles,
      className,
    );

    return (
      <Component
        ref={ref}
        className={typographyComponentStyles}
        style={customStyles}
        {...restProps}
      >
        {children}
      </Component>
    );
  },
);
// #endregion
