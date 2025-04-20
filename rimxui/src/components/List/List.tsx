import clsx, { ClassValue } from "clsx";
import {
  createContext,
  ElementType,
  forwardRef,
  HTMLAttributes,
  ReactNode,
  useContext,
} from "react";
import { twMerge } from "tailwind-merge";

// #region Types
export type Nullable<T> = T | null;
export type Optional<T> = T | undefined;
export type NullableOptional<T> = Nullable<Optional<T>>;

export interface ListContextProps {
  variant: ListVariants;
  size: ListSizes;
  spacing: ListSpacings;
  bordered: boolean;
  isDarkVariant?: boolean;
}

export type PropsWithoutChildren<P = object> = Omit<P, "children">;
export type PropsWithRequiredChildren<P = object> =
  Required<React.PropsWithChildren> & PropsWithoutChildren<P>;
export type ProviderComponentProps<P = object> = PropsWithRequiredChildren<P>;
export type ProviderComponent<P = object> = React.FC<ProviderComponentProps<P>>;
export type SetStateActionSetter<State> = React.Dispatch<
  React.SetStateAction<State>
>;
export type ListVariants =
  | "default"
  | "primary"
  | "secondary"
  | "outline"
  | "dark"
  | "darkPrimary"
  | "darkSecondary";
export type ListSizes = "sm" | "md" | "lg";
export type ListSpacings = "small" | "medium" | "large";
type BaseListProps = {
  variant?: ListVariants;
  size?: ListSizes;
  spacing?: ListSpacings;
  bordered?: boolean;
  className?: string;
};
export type ListType = "unordered" | "ordered" | "plain";
export interface UnorderedListProps extends HTMLAttributes<HTMLUListElement> {
  listType?: "unordered";
}
export interface OrderedListProps extends HTMLAttributes<HTMLOListElement> {
  listType?: "ordered";
}
export interface PlainListProps extends HTMLAttributes<HTMLDivElement> {
  listType?: "plain";
}
type ListPropsBasedOnType =
  | UnorderedListProps
  | OrderedListProps
  | PlainListProps;
export type ListProps = BaseListProps & ListPropsBasedOnType;
export type ListRefType = HTMLDivElement | HTMLUListElement | HTMLOListElement;
export type ListItemType = "plain" | "list-item";
interface ListItemBaseProps extends PropsWithRequiredChildren {
  className?: string;
  itemType?: ListItemType;
  disablePadding?: boolean;
  disableGutters?: boolean;
  divider?: boolean;
  secondaryAction?: ReactNode;
  selected?: boolean;
}
export interface ListItemTypeListItemProps
  extends HTMLAttributes<HTMLLIElement> {
  itemType?: "list-item";
}
export interface ListItemTypePlainProps extends HTMLAttributes<HTMLDivElement> {
  itemType?: "plain";
}
type ListItemTypeBasedProps =
  | ListItemTypeListItemProps
  | ListItemTypePlainProps;
export type ListItemProps = ListItemBaseProps & ListItemTypeBasedProps;
export type ListItemRefType = HTMLDivElement | HTMLLIElement;
// #endregion

// #region Constants
export const LIST_VARIANTS_STYLES: Record<ListVariants, string> = {
  default: "text-neutral-900 dark:text-neutral-100",
  primary: "text-primary-700 dark:text-primary-300",
  secondary: "text-accent-700 dark:text-accent-300",
  outline:
    "text-neutral-900 dark:text-neutral-100 border border-neutral-200 dark:border-neutral-700 rounded-lg",
  dark: "bg-neutral-800 text-white rounded-lg shadow-md",
  darkPrimary: "bg-primary-800 text-white rounded-lg shadow-md",
  darkSecondary: "bg-accent-800 text-white rounded-lg shadow-md",
};

export const LIST_SIZES_STYLES: Record<ListSizes, string> = {
  sm: "text-body-sm",
  md: "text-body-md",
  lg: "text-body-lg",
};

export const LIST_SPACING_STYLES: Record<ListSpacings, string> = {
  small: "space-y-2",
  medium: "space-y-3",
  large: "space-y-4",
};

export const LIST_BORDERED_STYLES = {
  enabled: "divide-y divide-neutral-200 dark:divide-neutral-700",
  disabled: "",
  dark: "divide-y divide-neutral-700",
};

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

// #endregion

// #region Context
export const ListContext = createContext<Nullable<ListContextProps>>(null);
// #endregion

// #region Hooks
export const useListContext = () => useContext(ListContext);
// #endregion

// #region Utils
// TODO: Check if this can be used from utils instead of defining it here
const mc = (...inputs: ClassValue[]) => twMerge(clsx(inputs));
// #endregion

// #region Components
const LIST_COMPONENT_MAP: Record<ListType, ElementType> = {
  unordered: forwardRef<HTMLUListElement, UnorderedListProps>(
    ({ children, ...props }, ref) => (
      <ul ref={ref} {...props}>
        {children}
      </ul>
    ),
  ),
  ordered: forwardRef<HTMLOListElement, OrderedListProps>(
    ({ children, ...props }, ref) => (
      <ol ref={ref} {...props}>
        {children}
      </ol>
    ),
  ),
  plain: forwardRef<HTMLDivElement, PlainListProps>(
    ({ children, ...props }, ref) => (
      <div ref={ref} role="list" {...props}>
        {children}
      </div>
    ),
  ),
};

export const List = forwardRef<ListRefType, ListProps>(
  (
    {
      children,
      listType = "unordered",
      bordered = false,
      size = "md",
      spacing = "medium",
      variant = "default",
      className,
      "aria-label": ariaLabel,
      ...restProps
    },
    ref,
  ) => {
    const listVariantStyles = LIST_VARIANTS_STYLES[variant];
    const listSizeStyles = LIST_SIZES_STYLES[size];
    const listSpacingStyles = LIST_SPACING_STYLES[spacing];

    const isDarkVariant = variant.startsWith("dark");

    const borderedStyles = !bordered
      ? LIST_BORDERED_STYLES.disabled
      : isDarkVariant
        ? LIST_BORDERED_STYLES.dark
        : LIST_BORDERED_STYLES.enabled;

    const listComponentStyles = mc(
      listVariantStyles,
      listSizeStyles,
      listSpacingStyles,
      borderedStyles,
      isDarkVariant ? "text-white" : "",
      className,
    );

    const ListComponent = LIST_COMPONENT_MAP[listType];

    const contextValue = {
      variant,
      size,
      spacing,
      bordered,
      isDarkVariant,
    };

    const accessibilityProps = {
      "aria-label": ariaLabel || `${variant} list`,
    };

    return (
      <ListContext.Provider value={contextValue}>
        <ListComponent
          ref={ref}
          className={listComponentStyles}
          {...accessibilityProps}
          {...restProps}
        >
          {children}
        </ListComponent>
      </ListContext.Provider>
    );
  },
);

const LISTITEM_COMPONENT_MAP: Record<ListItemType, ElementType> = {
  "list-item": forwardRef<HTMLLIElement, HTMLAttributes<HTMLLIElement>>(
    ({ children, ...props }, ref) => (
      <li ref={ref} {...props}>
        {children}
      </li>
    ),
  ),
  plain: forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
    ({ children, ...props }, ref) => (
      <div ref={ref} role="listitem" {...props}>
        {children}
      </div>
    ),
  ),
};

export const ListItem = forwardRef<ListItemRefType, ListItemProps>(
  (
    {
      children,
      className,
      itemType = "list-item",
      disablePadding = false,
      disableGutters = false,
      divider = false,
      secondaryAction,
      selected = false,
      ...props
    },
    ref,
  ) => {
    let hoverStyles = LISTITEM_HOVER_STYLES_DEFAULT;
    let baseStyles = "";

    const listContext = useListContext();

    if (listContext && listContext.variant) {
      const variantKey =
        listContext.variant as keyof typeof LISTITEM_HOVER_STYLES;

      hoverStyles =
        LISTITEM_HOVER_STYLES[variantKey] || LISTITEM_HOVER_STYLES_DEFAULT;

      baseStyles = LISTITEM_BASE_STYLES[variantKey] || "";
    }

    const paddingStyles = disablePadding
      ? LISTITEM_PADDING_STYLES.disabled
      : LISTITEM_PADDING_STYLES.enabled;

    const guttersStyles = disableGutters
      ? LISTITEM_GUTTERS_STYLES.disabled
      : LISTITEM_GUTTERS_STYLES.enabled;

    const isDarkVariant = listContext?.isDarkVariant;

    const dividerStyles = divider
      ? isDarkVariant
        ? LISTITEM_DIVIDER_STYLES.dark
        : LISTITEM_DIVIDER_STYLES.enabled
      : LISTITEM_DIVIDER_STYLES.disabled;

    const selectedStyles = selected
      ? LISTITEM_SELECTED_STYLES.enabled
      : LISTITEM_SELECTED_STYLES.disabled;

    const listItemClasses = mc(
      "flex w-full items-center",
      baseStyles,
      paddingStyles,
      guttersStyles,
      dividerStyles,
      selectedStyles,
      hoverStyles,
      className,
    );

    const ItemComponent = LISTITEM_COMPONENT_MAP[itemType];

    return (
      <ItemComponent ref={ref} className={listItemClasses} {...props}>
        {children}
        {secondaryAction && (
          <div className="ml-auto flex items-center">{secondaryAction}</div>
        )}
      </ItemComponent>
    );
  },
);
