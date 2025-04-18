export const LISTITEM_PADDING_STYLES = {
  enabled: "py-2.5",
  disabled: "",
};

export const LISTITEM_GUTTERS_STYLES = {
  enabled: "px-4",
  disabled: "",
};

export const LISTITEM_DIVIDER_STYLES = {
  enabled: "border-b border-neutral-200 dark:border-neutral-700",
  disabled: "",
  dark: "border-b border-neutral-700",
};

export const LISTITEM_SELECTED_STYLES = {
  enabled:
    "bg-primary-50 dark:bg-primary-900/30 text-primary-900 dark:text-primary-50",
  disabled: "",
};

export const LISTITEM_BASE_STYLES = {
  default: "text-neutral-900",
  primary: "text-primary-700",
  secondary: "text-accent-700",
  outline: "text-neutral-900",
  dark: "text-white",
  darkPrimary: "text-white",
  darkSecondary: "text-white",
};

export const LISTITEM_HOVER_STYLES = {
  default:
    "transition-colors duration-200 hover:bg-neutral-50 dark:hover:bg-neutral-800",
  primary:
    "transition-colors duration-200 hover:bg-primary-50 dark:hover:bg-primary-900/50 hover:text-primary-900 dark:hover:text-primary-50",
  secondary:
    "transition-colors duration-200 hover:bg-accent-50 dark:hover:bg-accent-900/50 hover:text-accent-900 dark:hover:text-accent-50",
  outline:
    "transition-colors duration-200 hover:bg-neutral-50 dark:hover:bg-neutral-800",
  dark: "transition-colors duration-200 hover:bg-neutral-700 hover:text-white",
  darkPrimary:
    "transition-colors duration-200 hover:bg-primary-700 hover:text-white",
  darkSecondary:
    "transition-colors duration-200 hover:bg-accent-700 hover:text-white",
};

export const LISTITEM_HOVER_STYLES_DEFAULT = LISTITEM_HOVER_STYLES.default;
