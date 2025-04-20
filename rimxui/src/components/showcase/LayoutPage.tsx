import { Box, Flex, Grid, Stack } from "../Layout/Layout";
import PreviewWrapper from "../PreviewWrapper";
import { Typography } from "../Typography/Typography";
import {
    ShowcaseAPIReference,
    ShowcaseGuidelines,
    ShowcaseHeader,
} from "./common";

export const LayoutPreview = () => {
  const renderIntroduction = () => (
    <div className="space-y-6">
      <ShowcaseHeader
        title="Layout"
        description="Our Layout system provides a flexible and responsive way to structure your UI. Built on top of Tailwind CSS, these components offer a type-safe way to create layouts with consistent spacing and alignment."
      />

      <PreviewWrapper
        label="Basic Usage"
        preview={
          <div className="space-y-4">
            <Box p="4" bg="bg-gray-100 dark:bg-gray-800" rounded="lg">
              <Typography>This is a basic Box component</Typography>
            </Box>
            <Flex gap="4">
              <Box
                p="4"
                bg="bg-blue-100 dark:bg-blue-900"
                rounded="lg"
                className="text-black dark:text-white"
              >
                Item 1
              </Box>
              <Box
                p="4"
                bg="bg-blue-100 dark:bg-blue-900"
                rounded="lg"
                className="text-black dark:text-white"
              >
                Item 2
              </Box>
            </Flex>
            <Grid cols={3} gap="4">
              <Box
                p="4"
                bg="bg-green-100 dark:bg-green-900"
                rounded="lg"
                className="text-black dark:text-white"
              >
                Item 1
              </Box>
              <Box
                p="4"
                bg="bg-green-100 dark:bg-green-900"
                rounded="lg"
                className="text-black dark:text-white"
              >
                Item 2
              </Box>
              <Box
                p="4"
                bg="bg-green-100 dark:bg-green-900"
                rounded="lg"
                className="text-black dark:text-white"
              >
                Item 3
              </Box>
            </Grid>
          </div>
        }
        code={`
<Box p="4" bg="bg-gray-100 dark:bg-gray-800" rounded="lg">
  <Typography>This is a basic Box component</Typography>
</Box>

<Flex gap="4">
  <Box p="4" bg="bg-blue-100 dark:bg-blue-900" rounded="lg">Item 1</Box>
  <Box p="4" bg="bg-blue-100 dark:bg-blue-900" rounded="lg">Item 2</Box>
</Flex>

<Grid cols={3} gap="4">
  <Box p="4" bg="bg-green-100 dark:bg-green-900" rounded="lg">Item 1</Box>
  <Box p="4" bg="bg-green-100 dark:bg-green-900" rounded="lg">Item 2</Box>
  <Box p="4" bg="bg-green-100 dark:bg-green-900" rounded="lg">Item 3</Box>
</Grid>
        `}
        variant="default"
      />
    </div>
  );

  const renderBoxSection = () => (
    <div className="space-y-8">
      <div>
        <Typography type="heading" level={2}>
          Box Component
        </Typography>
        <Typography>
          The Box component is the most basic layout component. It's a
          polymorphic component that can be rendered as any HTML element and
          supports all spacing, layout, and style props.
        </Typography>
      </div>

      <div className="space-y-6">
        <PreviewWrapper
          label="Basic Box"
          preview={
            <Box p="4" bg="bg-gray-100 dark:bg-gray-800" rounded="lg">
              <Typography>
                This is a basic Box with padding and background
              </Typography>
            </Box>
          }
          code={`
<Box p="4" bg="bg-gray-100 dark:bg-gray-800" rounded="lg">
  <Typography>This is a basic Box with padding and background</Typography>
</Box>
          `}
          variant="default"
        />

        <PreviewWrapper
          label="Box with Different Elements"
          preview={
            <div className="space-y-4">
              <Box
                as="section"
                p="4"
                bg="bg-blue-50 dark:bg-blue-900"
                rounded="lg"
                className="text-black dark:text-white"
              >
                <Typography>This is a section element</Typography>
              </Box>
              <Box
                as="article"
                p="4"
                bg="bg-green-50 dark:bg-green-900"
                rounded="lg"
                className="text-black dark:text-white"
              >
                <Typography>This is an article element</Typography>
              </Box>
              <Box
                as="nav"
                p="4"
                bg="bg-purple-50 dark:bg-purple-900"
                rounded="lg"
                className="text-black dark:text-white"
              >
                <Typography>This is a nav element</Typography>
              </Box>
            </div>
          }
          code={`
<Box as="section" p="4" bg="bg-blue-50 dark:bg-blue-900" rounded="lg">
  <Typography>This is a section element</Typography>
</Box>

<Box as="article" p="4" bg="bg-green-50 dark:bg-green-900" rounded="lg">
  <Typography>This is an article element</Typography>
</Box>

<Box as="nav" p="4" bg="bg-purple-50 dark:bg-purple-900" rounded="lg">
  <Typography>This is a nav element</Typography>
</Box>
          `}
          variant="default"
        />
      </div>
    </div>
  );

  const renderFlexSection = () => (
    <div className="space-y-8">
      <div>
        <Typography type="heading" level={2}>
          Flex Component
        </Typography>
        <Typography>
          The Flex component extends Box and adds flexbox-specific props for
          creating flexible layouts.
        </Typography>
      </div>

      <div className="space-y-6">
        <PreviewWrapper
          label="Basic Flex Layout"
          preview={
            <Flex
              gap="4"
              bg="bg-purple-50 dark:bg-purple-900"
              rounded="lg"
              p="4"
            >
              <Box
                p="4"
                bg="bg-white dark:bg-gray-800"
                rounded="lg"
                className="flex-1 text-black dark:text-white"
              >
                Grows to fill space
              </Box>
              <Box
                p="4"
                bg="bg-white dark:bg-gray-800"
                rounded="lg"
                className="text-black dark:text-white"
              >
                Fixed width
              </Box>
              <Box
                p="4"
                bg="bg-white dark:bg-gray-800"
                rounded="lg"
                className="flex-2 text-black dark:text-white"
              >
                Grows twice as much
              </Box>
            </Flex>
          }
          code={`
<Flex gap="4" bg="bg-purple-50 dark:bg-purple-900" rounded="lg" p="4">
  <Box p="4" bg="bg-white dark:bg-gray-800" rounded="lg" className="flex-1">
    Grows to fill space
  </Box>
  <Box p="4" bg="bg-white dark:bg-gray-800" rounded="lg">
    Fixed width
  </Box>
  <Box p="4" bg="bg-white dark:bg-gray-800" rounded="lg" className="flex-2">
    Grows twice as much
  </Box>
</Flex>
          `}
          variant="default"
        />

        <PreviewWrapper
          label="Flex with Different Directions"
          preview={
            <div className="space-y-4">
              <Flex direction="row" gap="4">
                <Box
                  p="4"
                  bg="bg-blue-100 dark:bg-blue-900"
                  rounded="lg"
                  className="text-black dark:text-white"
                >
                  Row Item 1
                </Box>
                <Box
                  p="4"
                  bg="bg-blue-100 dark:bg-blue-900"
                  rounded="lg"
                  className="text-black dark:text-white"
                >
                  Row Item 2
                </Box>
              </Flex>
              <Flex direction="col" gap="4">
                <Box
                  p="4"
                  bg="bg-blue-100 dark:bg-blue-900"
                  rounded="lg"
                  className="text-black dark:text-white"
                >
                  Column Item 1
                </Box>
                <Box
                  p="4"
                  bg="bg-blue-100 dark:bg-blue-900"
                  rounded="lg"
                  className="text-black dark:text-white"
                >
                  Column Item 2
                </Box>
              </Flex>
            </div>
          }
          code={`
<Flex direction="row" gap="4">
  <Box p="4" bg="bg-blue-100 dark:bg-blue-900" rounded="lg">Row Item 1</Box>
  <Box p="4" bg="bg-blue-100 dark:bg-blue-900" rounded="lg">Row Item 2</Box>
</Flex>

<Flex direction="col" gap="4">
  <Box p="4" bg="bg-blue-100 dark:bg-blue-900" rounded="lg">Column Item 1</Box>
  <Box p="4" bg="bg-blue-100 dark:bg-blue-900" rounded="lg">Column Item 2</Box>
</Flex>
          `}
          variant="default"
        />

        <PreviewWrapper
          label="Flex with Alignment"
          preview={
            <div className="space-y-4">
              <Flex
                justify="center"
                align="center"
                gap="4"
                h="32"
                bg="bg-gray-100 dark:bg-gray-800"
              >
                <Box
                  p="4"
                  bg="bg-blue-100 dark:bg-blue-900"
                  rounded="lg"
                  className="text-black dark:text-white"
                >
                  Centered
                </Box>
              </Flex>
              <Flex
                justify="between"
                align="center"
                gap="4"
                h="32"
                bg="bg-gray-100 dark:bg-gray-800"
              >
                <Box
                  p="4"
                  bg="bg-blue-100 dark:bg-blue-900"
                  rounded="lg"
                  className="text-black dark:text-white"
                >
                  Start
                </Box>
                <Box
                  p="4"
                  bg="bg-blue-100 dark:bg-blue-900"
                  rounded="lg"
                  className="text-black dark:text-white"
                >
                  End
                </Box>
              </Flex>
            </div>
          }
          code={`
<Flex justify="center" align="center" gap="4" h="32" bg="bg-gray-100 dark:bg-gray-800">
  <Box p="4" bg="bg-blue-100 dark:bg-blue-900" rounded="lg">Centered</Box>
</Flex>

<Flex justify="between" align="center" gap="4" h="32" bg="bg-gray-100 dark:bg-gray-800">
  <Box p="4" bg="bg-blue-100 dark:bg-blue-900" rounded="lg">Start</Box>
  <Box p="4" bg="bg-blue-100 dark:bg-blue-900" rounded="lg">End</Box>
</Flex>
          `}
          variant="default"
        />
      </div>
    </div>
  );

  const renderGridSection = () => (
    <div className="space-y-8">
      <div>
        <Typography type="heading" level={2}>
          Grid Component
        </Typography>
        <Typography>
          The Grid component extends Box and adds grid-specific props for
          creating responsive grid layouts.
        </Typography>
      </div>

      <div className="space-y-6">
        <PreviewWrapper
          label="Basic Grid"
          preview={
            <Grid cols={3} gap="4">
              <Box
                p="4"
                bg="bg-green-100 dark:bg-green-900"
                rounded="lg"
                className="text-black dark:text-white"
              >
                Item 1
              </Box>
              <Box
                p="4"
                bg="bg-green-100 dark:bg-green-900"
                rounded="lg"
                className="text-black dark:text-white"
              >
                Item 2
              </Box>
              <Box
                p="4"
                bg="bg-green-100 dark:bg-green-900"
                rounded="lg"
                className="text-black dark:text-white"
              >
                Item 3
              </Box>
              <Box
                p="4"
                bg="bg-green-100 dark:bg-green-900"
                rounded="lg"
                className="text-black dark:text-white"
              >
                Item 4
              </Box>
              <Box
                p="4"
                bg="bg-green-100 dark:bg-green-900"
                rounded="lg"
                className="text-black dark:text-white"
              >
                Item 5
              </Box>
              <Box
                p="4"
                bg="bg-green-100 dark:bg-green-900"
                rounded="lg"
                className="text-black dark:text-white"
              >
                Item 6
              </Box>
            </Grid>
          }
          code={`
<Grid cols={3} gap="4">
  <Box p="4" bg="bg-green-100 dark:bg-green-900" rounded="lg">Item 1</Box>
  <Box p="4" bg="bg-green-100 dark:bg-green-900" rounded="lg">Item 2</Box>
  <Box p="4" bg="bg-green-100 dark:bg-green-900" rounded="lg">Item 3</Box>
  <Box p="4" bg="bg-green-100 dark:bg-green-900" rounded="lg">Item 4</Box>
  <Box p="4" bg="bg-green-100 dark:bg-green-900" rounded="lg">Item 5</Box>
  <Box p="4" bg="bg-green-100 dark:bg-green-900" rounded="lg">Item 6</Box>
</Grid>
          `}
          variant="default"
        />

        <PreviewWrapper
          label="Grid with Spans"
          preview={
            <Grid cols={3} gap="4">
              <Box
                p="4"
                bg="bg-green-100 dark:bg-green-900"
                rounded="lg"
                style={{ gridColumn: "span 2" }}
                className="text-black dark:text-white"
              >
                Spans 2 columns
              </Box>
              <Box
                p="4"
                bg="bg-green-100 dark:bg-green-900"
                rounded="lg"
                className="text-black dark:text-white"
              >
                Normal
              </Box>
              <Box
                p="4"
                bg="bg-green-100 dark:bg-green-900"
                rounded="lg"
                className="text-black dark:text-white"
              >
                Normal
              </Box>
              <Box
                p="4"
                bg="bg-green-100 dark:bg-green-900"
                rounded="lg"
                style={{ gridColumn: "span 3" }}
                className="text-black dark:text-white"
              >
                Spans all columns
              </Box>
            </Grid>
          }
          code={`
<Grid cols={3} gap="4">
  <Box p="4" bg="bg-green-100 dark:bg-green-900" rounded="lg" style={{ gridColumn: 'span 2' }}>
    Spans 2 columns
  </Box>
  <Box p="4" bg="bg-green-100 dark:bg-green-900" rounded="lg">Normal</Box>
  <Box p="4" bg="bg-green-100 dark:bg-green-900" rounded="lg">Normal</Box>
  <Box p="4" bg="bg-green-100 dark:bg-green-900" rounded="lg" style={{ gridColumn: 'span 3' }}>
    Spans all columns
  </Box>
</Grid>
          `}
          variant="default"
        />
      </div>
    </div>
  );

  const renderStackSection = () => (
    <div className="space-y-8">
      <div>
        <Typography type="heading" level={2}>
          Stack Component
        </Typography>
        <Typography>
          The Stack component is a specialized Flex component that arranges
          items vertically or horizontally with optional dividers.
        </Typography>
      </div>

      <div className="space-y-6">
        <PreviewWrapper
          label="Vertical Stack"
          preview={
            <Stack direction="vertical" gap="4">
              <Box
                p="4"
                bg="bg-purple-100 dark:bg-purple-900"
                rounded="lg"
                className="text-black dark:text-white"
              >
                Item 1
              </Box>
              <Box
                p="4"
                bg="bg-purple-100 dark:bg-purple-900"
                rounded="lg"
                className="text-black dark:text-white"
              >
                Item 2
              </Box>
              <Box
                p="4"
                bg="bg-purple-100 dark:bg-purple-900"
                rounded="lg"
                className="text-black dark:text-white"
              >
                Item 3
              </Box>
            </Stack>
          }
          code={`
<Stack direction="vertical" gap="4">
  <Box p="4" bg="bg-purple-100 dark:bg-purple-900" rounded="lg">Item 1</Box>
  <Box p="4" bg="bg-purple-100 dark:bg-purple-900" rounded="lg">Item 2</Box>
  <Box p="4" bg="bg-purple-100 dark:bg-purple-900" rounded="lg">Item 3</Box>
</Stack>
          `}
          variant="default"
        />

        <PreviewWrapper
          label="Stack with Dividers"
          preview={
            <Stack direction="vertical" dividers gap="4">
              <Box
                p="4"
                bg="bg-purple-100 dark:bg-purple-900"
                rounded="lg"
                className="text-black dark:text-white"
              >
                Item 1
              </Box>
              <Box
                p="4"
                bg="bg-purple-100 dark:bg-purple-900"
                rounded="lg"
                className="text-black dark:text-white"
              >
                Item 2
              </Box>
              <Box
                p="4"
                bg="bg-purple-100 dark:bg-purple-900"
                rounded="lg"
                className="text-black dark:text-white"
              >
                Item 3
              </Box>
            </Stack>
          }
          code={`
<Stack direction="vertical" dividers gap="4">
  <Box p="4" bg="bg-purple-100 dark:bg-purple-900" rounded="lg">Item 1</Box>
  <Box p="4" bg="bg-purple-100 dark:bg-purple-900" rounded="lg">Item 2</Box>
  <Box p="4" bg="bg-purple-100 dark:bg-purple-900" rounded="lg">Item 3</Box>
</Stack>
          `}
          variant="default"
        />
      </div>
    </div>
  );

  const renderCombinedExamples = () => (
    <div className="space-y-8">
      <div>
        <Typography type="heading" level={2}>
          Combined Examples
        </Typography>
        <Typography>
          These examples showcase how different layout components work together
          in real-world scenarios.
        </Typography>
      </div>

      <div className="space-y-6">
        <PreviewWrapper
          label="Card Layout"
          preview={
            <Box
              rounded="lg"
              shadow="md"
              p="6"
              bg="bg-white dark:bg-gray-800"
              className="text-black dark:text-white"
            >
              <Stack direction="vertical" gap="4">
                <Typography type="heading" level={3}>
                  Card Title
                </Typography>
                <Typography>Card content goes here</Typography>
                <Flex justify="end" gap="2">
                  <button className="px-4 py-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md">
                    Cancel
                  </button>
                  <button className="px-4 py-2 bg-primary-500 text-white hover:bg-primary-600 dark:bg-primary-600 dark:hover:bg-primary-700 rounded-md">
                    Submit
                  </button>
                </Flex>
              </Stack>
            </Box>
          }
          code={`
<Box rounded="lg" shadow="md" p="6" bg="bg-white dark:bg-gray-800">
  <Stack direction="vertical" gap="4">
    <Typography type="heading" level={3}>Card Title</Typography>
    <Typography>Card content goes here</Typography>
    <Flex justify="end" gap="2">
      <button className="px-4 py-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md">
        Cancel
      </button>
      <button className="px-4 py-2 bg-primary-500 text-white hover:bg-primary-600 dark:bg-primary-600 dark:hover:bg-primary-700 rounded-md">
        Submit
      </button>
    </Flex>
  </Stack>
</Box>
          `}
          variant="default"
        />

        <PreviewWrapper
          label="Navigation Bar"
          preview={
            <Box as="nav" bg="bg-gray-800 dark:bg-gray-900" p="4">
              <Flex justify="between" align="center">
                <Typography type="heading" level={4} className="text-white">
                  Logo
                </Typography>
                <Flex gap="6">
                  <button className="px-4 py-2 text-white hover:bg-gray-700 dark:hover:bg-gray-800 rounded-md">
                    Home
                  </button>
                  <button className="px-4 py-2 text-white hover:bg-gray-700 dark:hover:bg-gray-800 rounded-md">
                    About
                  </button>
                  <button className="px-4 py-2 text-white hover:bg-gray-700 dark:hover:bg-gray-800 rounded-md">
                    Contact
                  </button>
                </Flex>
              </Flex>
            </Box>
          }
          code={`
<Box as="nav" bg="bg-gray-800 dark:bg-gray-900" p="4">
  <Flex justify="between" align="center">
    <Typography type="heading" level={4} className="text-white">Logo</Typography>
    <Flex gap="6">
      <button className="px-4 py-2 text-white hover:bg-gray-700 dark:hover:bg-gray-800 rounded-md">Home</button>
      <button className="px-4 py-2 text-white hover:bg-gray-700 dark:hover:bg-gray-800 rounded-md">About</button>
      <button className="px-4 py-2 text-white hover:bg-gray-700 dark:hover:bg-gray-800 rounded-md">Contact</button>
    </Flex>
  </Flex>
</Box>
          `}
          variant="default"
        />

        <PreviewWrapper
          label="Dashboard Layout"
          preview={
            <Box>
              <Box as="header" bg="bg-gray-100 dark:bg-gray-800" p="4">
                <Typography type="heading" level={2}>
                  Dashboard
                </Typography>
              </Box>
              <Flex>
                <Box
                  as="aside"
                  w="64"
                  bg="bg-gray-200 dark:bg-gray-900"
                  p="4"
                  className="text-black dark:text-white"
                >
                  <Stack direction="vertical" gap="4">
                    <Typography>Menu Item 1</Typography>
                    <Typography>Menu Item 2</Typography>
                    <Typography>Menu Item 3</Typography>
                  </Stack>
                </Box>
                <Box w="full" p="4">
                  <Grid cols={1} gap="4">
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                      <Box
                        key={i}
                        p="4"
                        bg="bg-white dark:bg-gray-800"
                        rounded="lg"
                        shadow="sm"
                        className="text-black dark:text-white"
                      >
                        <Typography>Card {i}</Typography>
                      </Box>
                    ))}
                  </Grid>
                </Box>
              </Flex>
            </Box>
          }
          code={`
<Box>
  <Box as="header" bg="bg-gray-100 dark:bg-gray-800" p="4">
    <Typography type="heading" level={2}>Dashboard</Typography>
  </Box>
  <Flex>
    <Box as="aside" w="64" bg="bg-gray-200 dark:bg-gray-900" p="4">
      <Stack direction="vertical" gap="4">
        <Typography>Menu Item 1</Typography>
        <Typography>Menu Item 2</Typography>
        <Typography>Menu Item 3</Typography>
      </Stack>
    </Box>
    <Box w="full" p="4">
      <Grid cols={1} gap="4">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <Box key={i} p="4" bg="bg-white dark:bg-gray-800" rounded="lg" shadow="sm">
            <Typography>Card {i}</Typography>
          </Box>
        ))}
      </Grid>
    </Box>
  </Flex>
</Box>
          `}
          variant="default"
        />
      </div>
    </div>
  );

  const renderGuidelines = () => {
    const bestPractices = [
      {
        title: "Use Semantic Elements",
        description:
          "Use appropriate semantic elements (as prop) for better accessibility and SEO.",
      },
      {
        title: "Responsive Design",
        description:
          "Use responsive props (like cols={{ sm: 1, md: 2, lg: 3 }}) for grid layouts to ensure good mobile experience.",
      },
      {
        title: "Consistent Spacing",
        description:
          "Use consistent spacing tokens for margins and padding to maintain visual rhythm.",
      },
    ];

    const thingsToAvoid = [
      {
        title: "Nested Flex/Grid",
        description:
          "Avoid deeply nesting Flex or Grid components as it can lead to complex layouts that are hard to maintain.",
      },
      {
        title: "Fixed Sizes",
        description:
          "Avoid using fixed pixel sizes. Use relative units or responsive props instead.",
      },
      {
        title: "Overusing Box",
        description:
          "Don't use Box when a more semantic component would be more appropriate.",
      },
    ];

    return (
      <ShowcaseGuidelines
        title="Layout Guidelines"
        description="Following these guidelines will help maintain consistency and accessibility across your application."
        bestPractices={bestPractices}
        thingsToAvoid={thingsToAvoid}
      />
    );
  };

  const renderAPIDocs = () => {
    const boxProps = [
      {
        name: "as",
        type: "React.ElementType",
        defaultValue: '"div"',
        description: "The HTML element to render.",
      },
      {
        name: "m, mx, my, mt, mr, mb, ml",
        type: "Size",
        defaultValue: "undefined",
        description: "Margin properties.",
      },
      {
        name: "p, px, py, pt, pr, pb, pl",
        type: "Size",
        defaultValue: "undefined",
        description: "Padding properties.",
      },
      {
        name: "w, h, minW, minH, maxW, maxH",
        type: "Size",
        defaultValue: "undefined",
        description: "Size properties.",
      },
      {
        name: "bg",
        type: "string",
        defaultValue: "undefined",
        description: "Background color class.",
      },
      {
        name: "rounded",
        type: "Size",
        defaultValue: "undefined",
        description: "Border radius.",
      },
      {
        name: "shadow",
        type: '"sm" | "md" | "lg" | "xl" | "2xl" | "none"',
        defaultValue: "undefined",
        description: "Box shadow.",
      },
    ];

    const flexProps = [
      ...boxProps,
      {
        name: "direction",
        type: '"row" | "row-reverse" | "col" | "col-reverse"',
        defaultValue: "undefined",
        description: "Flex direction.",
      },
      {
        name: "wrap",
        type: '"wrap" | "wrap-reverse" | "nowrap"',
        defaultValue: "undefined",
        description: "Flex wrap.",
      },
      {
        name: "justify",
        type: '"start" | "end" | "center" | "between" | "around" | "evenly"',
        defaultValue: "undefined",
        description: "Justify content.",
      },
      {
        name: "align",
        type: '"start" | "end" | "center" | "baseline" | "stretch"',
        defaultValue: "undefined",
        description: "Align items.",
      },
    ];

    const gridProps = [
      ...boxProps,
      {
        name: "cols",
        type: "number | string | ResponsiveSize<number | string>",
        defaultValue: "undefined",
        description: "Number of columns.",
      },
      {
        name: "rows",
        type: "number | string | ResponsiveSize<number | string>",
        defaultValue: "undefined",
        description: "Number of rows.",
      },
      {
        name: "colSpan",
        type: "string",
        defaultValue: "undefined",
        description: "Grid column span.",
      },
      {
        name: "rowSpan",
        type: "string",
        defaultValue: "undefined",
        description: "Grid row span.",
      },
    ];

    const stackProps = [
      ...flexProps,
      {
        name: "direction",
        type: '"horizontal" | "vertical"',
        defaultValue: '"vertical"',
        description: "Stack direction.",
      },
      {
        name: "dividers",
        type: "boolean",
        defaultValue: "false",
        description: "Whether to show dividers between items.",
      },
    ];

    return (
      <ShowcaseAPIReference
        title="API Documentation"
        propTables={[
          {
            title: "Box Props",
            props: boxProps,
          },
          {
            title: "Flex Props",
            props: flexProps,
          },
          {
            title: "Grid Props",
            props: gridProps,
          },
          {
            title: "Stack Props",
            props: stackProps,
          },
        ]}
      />
    );
  };

  return (
    <div className="space-y-16 py-8">
      {renderIntroduction()}
      {renderBoxSection()}
      {renderFlexSection()}
      {renderGridSection()}
      {renderStackSection()}
      {renderCombinedExamples()}
      {renderGuidelines()}
      {renderAPIDocs()}
    </div>
  );
};
