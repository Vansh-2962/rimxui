import { ElementType, forwardRef } from "react";

import {
  LIST_SIZES_STYLES,
  LIST_SPACING_STYLES,
  LIST_VARIANTS_STYLES,
} from "@constants";
import {
  ListProps,
  ListRefType,
  ListType,
  OrderedListProps,
  PlainListProps,
  UnorderedListProps,
} from "@types";
import { mc } from "@utils";

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
      <div ref={ref} {...props}>
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
      ...restProps
    },
    ref,
  ) => {
    const listVariantStyles = LIST_VARIANTS_STYLES[variant];
    const listSizeStyles = LIST_SIZES_STYLES[size];
    const listSpacingStyles = LIST_SPACING_STYLES[spacing];

    const listBorderStyles = bordered
      ? "divide-y divide-gray-200 dark:divide-gray-700"
      : "";

    const listComponentStyles = mc(
      listVariantStyles,
      listSizeStyles,
      listSpacingStyles,
      listBorderStyles,
      className,
    );

    const ListComponent = LIST_COMPONENT_MAP[listType];

    return (
      <ListComponent ref={ref} className={listComponentStyles} {...restProps}>
        {children}
      </ListComponent>
    );
  },
);
