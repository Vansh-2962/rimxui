import React from "react";
import { twMerge } from "tailwind-merge";

export type SizeToken =
  | "xs"
  | "sm"
  | "md"
  | "lg"
  | "xl"
  | "2xl"
  | "3xl"
  | "4xl"
  | "5xl";

export type SpacingToken =
  | "0"
  | "0.5"
  | "1"
  | "1.5"
  | "2"
  | "2.5"
  | "3"
  | "3.5"
  | "4"
  | "5"
  | "6"
  | "7"
  | "8"
  | "9"
  | "10"
  | "11"
  | "12"
  | "14"
  | "16"
  | "20"
  | "24"
  | "28"
  | "32"
  | "36"
  | "40"
  | "44"
  | "48"
  | "52"
  | "56"
  | "60"
  | "64"
  | "72"
  | "80"
  | "96"
  | "auto"
  | "full"
  | "screen"
  | "min"
  | "max"
  | "fit";

export type ResponsiveSize<T> =
  | {
      sm?: T;
      md?: T;
      lg?: T;
      xl?: T;
      "2xl"?: T;
    }
  | T;

export type ArbitraryValue = string;

export type Size = SizeToken | SpacingToken | ArbitraryValue;

export type SpacingProps = {
  m?: Size;
  mx?: Size;
  my?: Size;
  mt?: Size;
  mr?: Size;
  mb?: Size;
  ml?: Size;
  p?: Size;
  px?: Size;
  py?: Size;
  pt?: Size;
  pr?: Size;
  pb?: Size;
  pl?: Size;
  gap?: Size;
};

export type LayoutProps = {
  w?: Size;
  h?: Size;
  minW?: Size;
  minH?: Size;
  maxW?: Size;
  maxH?: Size;
};

export type StyleProps = {
  bg?: string;
  rounded?: Size;
  border?: string;
  shadow?: "sm" | "md" | "lg" | "xl" | "2xl" | "none";
};

export type FlexProps = {
  direction?: "row" | "row-reverse" | "col" | "col-reverse";
  wrap?: "wrap" | "wrap-reverse" | "nowrap";
  justify?: "start" | "end" | "center" | "between" | "around" | "evenly";
  align?: "start" | "end" | "center" | "baseline" | "stretch";
  flex?: string;
  grow?: boolean | "0" | "1";
  shrink?: boolean | "0" | "1";
  basis?: Size;
};

export type GridLayoutProps = {
  cols?: number | string;
  rows?: number | string;
  autoFlow?: "row" | "col" | "dense" | "row-dense" | "col-dense";
  autoRows?: "auto" | "min" | "max" | "fr";
  autoCols?: "auto" | "min" | "max" | "fr";
  colSpan?: string;
  rowSpan?: string;
  colStart?: string;
  colEnd?: string;
  rowStart?: string;
  rowEnd?: string;
};

export type AsProps<C extends React.ElementType> = {
  as?: C;
};

export type PolymorphicProps<C extends React.ElementType> = AsProps<C> &
  React.ComponentPropsWithoutRef<C> & {
    className?: string;
  };

export type PolymorphicComponent<
  Props extends object = object,
  DefaultElement extends React.ElementType = "div",
> = <C extends React.ElementType = DefaultElement>(
  props: Props & PolymorphicProps<C>,
) => React.ReactElement | null;

const sizeToClass = (size: Size | undefined, prefix: string): string => {
  if (!size) return "";

  if (size.includes("[") && size.includes("]")) {
    return `${prefix}-${size}`;
  }

  return `${prefix}-${size}`;
};

const getSpacingClasses = (props: Partial<SpacingProps>): string => {
  const classes: string[] = [];

  if (props.m) classes.push(sizeToClass(props.m, "m"));
  if (props.mx) classes.push(sizeToClass(props.mx, "mx"));
  if (props.my) classes.push(sizeToClass(props.my, "my"));
  if (props.mt) classes.push(sizeToClass(props.mt, "mt"));
  if (props.mr) classes.push(sizeToClass(props.mr, "mr"));
  if (props.mb) classes.push(sizeToClass(props.mb, "mb"));
  if (props.ml) classes.push(sizeToClass(props.ml, "ml"));

  if (props.p) classes.push(sizeToClass(props.p, "p"));
  if (props.px) classes.push(sizeToClass(props.px, "px"));
  if (props.py) classes.push(sizeToClass(props.py, "py"));
  if (props.pt) classes.push(sizeToClass(props.pt, "pt"));
  if (props.pr) classes.push(sizeToClass(props.pr, "pr"));
  if (props.pb) classes.push(sizeToClass(props.pb, "pb"));
  if (props.pl) classes.push(sizeToClass(props.pl, "pl"));

  if (props.gap) classes.push(sizeToClass(props.gap, "gap"));

  return classes.join(" ");
};

const getLayoutClasses = (props: Partial<LayoutProps>): string => {
  const classes: string[] = [];

  if (props.w) classes.push(sizeToClass(props.w, "w"));
  if (props.h) classes.push(sizeToClass(props.h, "h"));
  if (props.minW) classes.push(sizeToClass(props.minW, "min-w"));
  if (props.minH) classes.push(sizeToClass(props.minH, "min-h"));
  if (props.maxW) classes.push(sizeToClass(props.maxW, "max-w"));
  if (props.maxH) classes.push(sizeToClass(props.maxH, "max-h"));

  return classes.join(" ");
};

const getStyleClasses = (props: Partial<StyleProps>): string => {
  const classes: string[] = [];

  if (props.bg) classes.push(props.bg);
  if (props.rounded) classes.push(sizeToClass(props.rounded, "rounded"));
  if (props.border) classes.push(`border ${props.border}`);
  if (props.shadow && props.shadow !== "none")
    classes.push(`shadow-${props.shadow}`);

  return classes.join(" ");
};

const getFlexClasses = (props: Partial<FlexProps>): string => {
  const classes: string[] = [];

  if (props.direction) {
    if (props.direction.startsWith("row"))
      classes.push(`flex-${props.direction}`);
    else classes.push(`flex-${props.direction}`);
  }

  if (props.wrap) classes.push(`flex-${props.wrap}`);
  if (props.justify) classes.push(`justify-${props.justify}`);
  if (props.align) classes.push(`items-${props.align}`);
  if (props.flex) classes.push(`flex-${props.flex}`);

  if (props.grow === true) classes.push("grow");
  else if (props.grow) classes.push(`grow-${props.grow}`);

  if (props.shrink === true) classes.push("shrink");
  else if (props.shrink) classes.push(`shrink-${props.shrink}`);

  if (props.basis) classes.push(sizeToClass(props.basis, "basis"));

  return classes.join(" ");
};

const getGridClasses = (props: Partial<GridLayoutProps>): string => {
  const classes: string[] = [];

  if (props.cols) {
    if (typeof props.cols === "number") {
      classes.push(`grid-cols-${props.cols}`);
    } else {
      classes.push(`grid-cols-${props.cols}`);
    }
  }

  if (props.rows) {
    if (typeof props.rows === "number") {
      classes.push(`grid-rows-${props.rows}`);
    } else {
      classes.push(`grid-rows-${props.rows}`);
    }
  }

  if (props.autoFlow) classes.push(`grid-flow-${props.autoFlow}`);
  if (props.autoRows) classes.push(`auto-rows-${props.autoRows}`);
  if (props.autoCols) classes.push(`auto-cols-${props.autoCols}`);

  if (props.colSpan) classes.push(`col-span-${props.colSpan}`);
  if (props.rowSpan) classes.push(`row-span-${props.rowSpan}`);
  if (props.colStart) classes.push(`col-start-${props.colStart}`);
  if (props.colEnd) classes.push(`col-end-${props.colEnd}`);
  if (props.rowStart) classes.push(`row-start-${props.rowStart}`);
  if (props.rowEnd) classes.push(`row-end-${props.rowEnd}`);

  return classes.join(" ");
};

export type BoxProps = SpacingProps & LayoutProps & StyleProps;

export const Box: PolymorphicComponent<BoxProps, "div"> = <
  C extends React.ElementType = "div",
>({
  as,
  className = "",
  children,
  m,
  mx,
  my,
  mt,
  mr,
  mb,
  ml,
  p,
  px,
  py,
  pt,
  pr,
  pb,
  pl,
  gap,
  w,
  h,
  minW,
  minH,
  maxW,
  maxH,
  bg,
  rounded,
  border,
  shadow,
  ...rest
}: BoxProps & PolymorphicProps<C>) => {
  const Component = as || "div";

  const spacingClasses = getSpacingClasses({
    m,
    mx,
    my,
    mt,
    mr,
    mb,
    ml,
    p,
    px,
    py,
    pt,
    pr,
    pb,
    pl,
    gap,
  });
  const layoutClasses = getLayoutClasses({ w, h, minW, minH, maxW, maxH });
  const styleClasses = getStyleClasses({ bg, rounded, border, shadow });

  const combinedClasses = twMerge(
    spacingClasses,
    layoutClasses,
    styleClasses,
    className,
  );

  return (
    <Component className={combinedClasses} {...rest}>
      {children}
    </Component>
  );
};

export type FlexComponentProps = BoxProps &
  FlexProps & {
    className?: string;
  };

const FlexComponent = React.forwardRef<
  HTMLDivElement,
  FlexComponentProps & { as?: React.ElementType }
>(({ className = "", as, ...rest }, ref) => {
  const flexClasses = getFlexClasses(rest);

  return (
    <Box
      ref={ref}
      as={as || "div"}
      className={twMerge("flex", flexClasses, className)}
      {...rest}
    />
  );
});

FlexComponent.displayName = "Flex";

export const Flex = FlexComponent as PolymorphicComponent<
  FlexComponentProps,
  "div"
>;

export type GridComponentProps = BoxProps &
  GridLayoutProps & {
    className?: string;
  };

const GridComponent = React.forwardRef<
  HTMLDivElement,
  GridComponentProps & { as?: React.ElementType }
>(({ className = "", as, ...rest }, ref) => {
  const gridClasses = getGridClasses(rest);

  return (
    <Box
      ref={ref}
      as={as || "div"}
      className={twMerge("grid", gridClasses, className)}
      {...rest}
    />
  );
});

GridComponent.displayName = "Grid";

export const Grid = GridComponent as PolymorphicComponent<
  GridComponentProps,
  "div"
>;

export type StackProps = Omit<FlexComponentProps, "direction"> & {
  direction?: "horizontal" | "vertical";
  dividers?: boolean;
  className?: string;
  children?: React.ReactNode;
};

const StackComponent = React.forwardRef<
  HTMLDivElement,
  StackProps & { as?: React.ElementType }
>(
  (
    { direction = "vertical", dividers, className = "", children, as, ...rest },
    ref,
  ) => {
    const flexDirection = direction === "vertical" ? "col" : "row";

    let stackChildren = children;
    if (dividers && React.Children.count(children) > 1) {
      const dividerClass = direction === "vertical" ? "border-t" : "border-l";

      stackChildren = React.Children.map(children, (child, index) => {
        if (index === 0) return child;

        return (
          <React.Fragment>
            <div className={dividerClass} />
            {child}
          </React.Fragment>
        );
      });
    }

    return (
      <Flex
        ref={ref}
        as={as || "div"}
        direction={flexDirection}
        className={className}
        {...rest}
      >
        {stackChildren}
      </Flex>
    );
  },
);

StackComponent.displayName = "Stack";

export const Stack = StackComponent as PolymorphicComponent<StackProps, "div">;
