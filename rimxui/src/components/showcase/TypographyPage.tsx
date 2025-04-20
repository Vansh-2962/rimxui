import PreviewWrapper from "../PreviewWrapper";
import {
  Typography,
  TypographyHeadingLevels,
  TypographySizes,
  TypographyVariants,
  TypographyWeight,
} from "../Typography/Typography";
import {
  ShowcaseAPIReference,
  ShowcaseGuidelines,
  ShowcaseHeader,
} from "./common";

export const TypographyPreview = () => {
  const TYPOGRAPHY_VARIANTS: Array<TypographyVariants> = [
    "default",
    "primary",
    "secondary",
    "outline",
    "dark",
    "darkPrimary",
    "darkSecondary",
  ];

  const TYPOGRAPHY_SIZES: Array<TypographySizes> = [
    "xs",
    "sm",
    "md",
    "lg",
    "xl",
    "2xl",
    "3xl",
    "4xl",
  ];

  const TYPOGRAPHY_WEIGHTS: Array<TypographyWeight> = [
    "thin",
    "extralight",
    "light",
    "normal",
    "medium",
    "semibold",
    "bold",
    "extrabold",
    "black",
  ];

  const renderIntroduction = () => (
    <div className="space-y-6">
      <ShowcaseHeader
        title="Typography"
        description="Our Typography system provides a flexible and consistent way to style
          text across your application. It supports four main types of text
          elements: headings, regular text, links, and inline text."
      />

      <PreviewWrapper
        label="Basic Usage"
        preview={
          <div className="space-y-4">
            <Typography type="heading" level={1} variant="default" size="2xl">
              This is a Heading
            </Typography>
            <Typography type="text" variant="default" size="md">
              This is a regular paragraph of text that demonstrates the basic
              usage of our Typography component.
            </Typography>
            <Typography type="link" variant="primary" size="md" href="#">
              This is a link
            </Typography>
          </div>
        }
        code={`
<Typography type="heading" level={1} variant="default" size="2xl">
  This is a Heading
</Typography>

<Typography type="text" variant="default" size="md">
  This is a regular paragraph of text...
</Typography>

<Typography type="link" variant="primary" size="md" href="#">
  This is a link
</Typography>
        `}
        variant="default"
      />
    </div>
  );

  const renderHeadingSection = () => (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold mb-4">Headings</h2>
        <p className="text-neutral-600 dark:text-neutral-400 mb-6">
          Headings are used to create a clear hierarchy in your content. They
          come in six levels (h1-h6) with different sizes and weights based on
          the level.
        </p>
      </div>

      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-medium mb-4">Heading Levels</h3>
          <p className="text-neutral-500 dark:text-neutral-400 mb-4">
            Each heading level (1-6) has its own default size and weight to
            establish a clear hierarchy.
          </p>
          <PreviewWrapper
            label="Heading Levels"
            preview={
              <div className="space-y-4">
                {[1, 2, 3, 4, 5, 6].map((level) => (
                  <Typography
                    key={level}
                    type="heading"
                    level={level as TypographyHeadingLevels}
                    variant="default"
                    size="md"
                  >
                    Heading Level {level}
                  </Typography>
                ))}
              </div>
            }
            code={`
{[1, 2, 3, 4, 5, 6].map((level) => (
  <Typography
    key={level}
    type="heading"
    level={level as TypographyHeadingLevels}
    variant="default"
    size="md"
  >
    Heading Level {level}
  </Typography>
))}
            `}
            variant="default"
          />
        </div>

        <div>
          <h3 className="text-lg font-medium mb-4">
            Heading Sizes for Level 1
          </h3>
          <p className="text-neutral-500 dark:text-neutral-400 mb-4">
            Each heading level has its own size scale. Here's how different
            sizes look for a level 1 heading.
          </p>
          <PreviewWrapper
            label="H1 Sizes"
            preview={
              <div className="space-y-4">
                {TYPOGRAPHY_SIZES.map((size) => (
                  <Typography
                    key={size}
                    type="heading"
                    level={1}
                    variant="default"
                    size={size}
                  >
                    H1 {size}
                  </Typography>
                ))}
              </div>
            }
            code={`
{TYPOGRAPHY_SIZES.map((size) => (
  <Typography
    key={size}
    type="heading"
    level={1}
    variant="default"
    size={size}
  >
    H1 {size}
  </Typography>
))}
            `}
            variant="default"
          />
        </div>

        <div>
          <h3 className="text-lg font-medium mb-4">
            Heading Sizes for Level 3
          </h3>
          <p className="text-neutral-500 dark:text-neutral-400 mb-4">
            Compare how the same sizes look for a level 3 heading compared to
            level 1.
          </p>
          <PreviewWrapper
            label="H3 Sizes"
            preview={
              <div className="space-y-4">
                {TYPOGRAPHY_SIZES.map((size) => (
                  <Typography
                    key={size}
                    type="heading"
                    level={3}
                    variant="default"
                    size={size}
                  >
                    H3 {size}
                  </Typography>
                ))}
              </div>
            }
            code={`
{TYPOGRAPHY_SIZES.map((size) => (
  <Typography
    key={size}
    type="heading"
    level={3}
    variant="default"
    size={size}
  >
    H3 {size}
  </Typography>
))}
            `}
            variant="default"
          />
        </div>

        <div>
          <h3 className="text-lg font-medium mb-4">Heading Variants</h3>
          <p className="text-neutral-500 dark:text-neutral-400 mb-4">
            Headings support different color variants to match your design
            system.
          </p>
          <PreviewWrapper
            label="Heading Variants"
            preview={
              <div className="space-y-4">
                {TYPOGRAPHY_VARIANTS.map((variant) => (
                  <Typography
                    key={variant}
                    type="heading"
                    level={2}
                    variant={variant}
                    size="xl"
                  >
                    {variant} variant
                  </Typography>
                ))}
              </div>
            }
            code={`
{TYPOGRAPHY_VARIANTS.map((variant) => (
  <Typography
    key={variant}
    type="heading"
    level={2}
    variant={variant}
    size="xl"
  >
    {variant} variant
  </Typography>
))}
            `}
            variant="default"
          />
        </div>

        <div>
          <h3 className="text-lg font-medium mb-4">Custom Heading Weights</h3>
          <p className="text-neutral-500 dark:text-neutral-400 mb-4">
            You can override the default weight for any heading with the weight
            prop.
          </p>
          <PreviewWrapper
            label="Heading Weights"
            preview={
              <div className="space-y-4">
                {TYPOGRAPHY_WEIGHTS.map((weight) => (
                  <Typography
                    key={weight}
                    type="heading"
                    level={2}
                    variant="default"
                    size="xl"
                    weight={weight}
                  >
                    {weight} weight
                  </Typography>
                ))}
              </div>
            }
            code={`
{TYPOGRAPHY_WEIGHTS.map((weight) => (
  <Typography
    key={weight}
    type="heading"
    level={2}
    variant="default"
    size="xl"
    weight={weight}
  >
    {weight} weight
  </Typography>
))}
            `}
            variant="default"
          />
        </div>

        <div>
          <h3 className="text-lg font-medium mb-4">Heading Use Cases</h3>
          <div className="space-y-6">
            <PreviewWrapper
              label="Page Title"
              preview={
                <Typography
                  type="heading"
                  level={1}
                  variant="primary"
                  size="3xl"
                >
                  Welcome to Our Platform
                </Typography>
              }
              code={`
<Typography type="heading" level={1} variant="primary" size="3xl">
  Welcome to Our Platform
</Typography>
              `}
              variant="default"
            />

            <PreviewWrapper
              label="Section Title"
              preview={
                <Typography
                  type="heading"
                  level={2}
                  variant="default"
                  size="2xl"
                >
                  Features Overview
                </Typography>
              }
              code={`
<Typography type="heading" level={2} variant="default" size="2xl">
  Features Overview
</Typography>
              `}
              variant="default"
            />

            <PreviewWrapper
              label="Card Title"
              preview={
                <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-6 max-w-md">
                  <Typography type="heading" level={3} variant="dark" size="lg">
                    Advanced Analytics
                  </Typography>
                  <Typography
                    type="text"
                    variant="secondary"
                    size="md"
                    className="mt-2"
                  >
                    Gain valuable insights into your business performance with
                    our powerful analytics tools.
                  </Typography>
                </div>
              }
              code={`
<div className="border border-gray-200 dark:border-gray-800 rounded-lg p-6 max-w-md">
  <Typography
    type="heading"
    level={3}
    variant="dark"
    size="lg"
  >
    Advanced Analytics
  </Typography>
  <Typography type="text" variant="secondary" size="md" className="mt-2">
    Gain valuable insights into your business performance with our powerful analytics tools.
  </Typography>
</div>
              `}
              variant="default"
            />
          </div>
        </div>
      </div>
    </div>
  );

  const renderTextSection = () => (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold mb-4">Text</h2>
        <p className="text-neutral-600 dark:text-neutral-400 mb-6">
          The text component is used for paragraphs and longer content blocks.
          It supports various sizes, weights, and color variants.
        </p>
      </div>

      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-medium mb-4">Text Sizes</h3>
          <PreviewWrapper
            label="Text Sizes"
            preview={
              <div className="space-y-4">
                {TYPOGRAPHY_SIZES.map((size) => (
                  <Typography
                    key={size}
                    type="text"
                    variant="default"
                    size={size}
                  >
                    This is a sample text in {size} size. It demonstrates how
                    the text component looks at different sizes.
                  </Typography>
                ))}
              </div>
            }
            code={`
{TYPOGRAPHY_SIZES.map((size) => (
  <Typography key={size} type="text" variant="default" size={size}>
    This is a sample text in {size} size. It demonstrates how the
    text component looks at different sizes.
  </Typography>
))}
            `}
            variant="default"
          />
        </div>

        <div>
          <h3 className="text-lg font-medium mb-4">Text Variants</h3>
          <PreviewWrapper
            label="Text Variants"
            preview={
              <div className="space-y-4">
                {TYPOGRAPHY_VARIANTS.map((variant) => (
                  <Typography
                    key={variant}
                    type="text"
                    variant={variant}
                    size="md"
                  >
                    This text uses the {variant} variant style.
                  </Typography>
                ))}
              </div>
            }
            code={`
{TYPOGRAPHY_VARIANTS.map((variant) => (
  <Typography key={variant} type="text" variant={variant} size="md">
    This text uses the {variant} variant style.
  </Typography>
))}
            `}
            variant="default"
          />
        </div>

        <div>
          <h3 className="text-lg font-medium mb-4">Text Weights</h3>
          <PreviewWrapper
            label="Text Weights"
            preview={
              <div className="space-y-4">
                {TYPOGRAPHY_WEIGHTS.map((weight) => (
                  <Typography
                    key={weight}
                    type="text"
                    variant="default"
                    size="md"
                    weight={weight}
                  >
                    This text has {weight} font weight applied to it.
                  </Typography>
                ))}
              </div>
            }
            code={`
{TYPOGRAPHY_WEIGHTS.map((weight) => (
  <Typography key={weight} type="text" variant="default" size="md" weight={weight}>
    This text has {weight} font weight applied to it.
  </Typography>
))}
            `}
            variant="default"
          />
        </div>

        <div>
          <h3 className="text-lg font-medium mb-4">Use Cases</h3>
          <div className="space-y-6">
            <PreviewWrapper
              label="Article Content"
              preview={
                <div className="space-y-4 max-w-2xl">
                  <Typography
                    type="heading"
                    level={1}
                    variant="default"
                    size="2xl"
                  >
                    The Importance of Typography
                  </Typography>
                  <Typography
                    type="text"
                    variant="secondary"
                    size="lg"
                    weight="medium"
                  >
                    Typography is more than just picking a font. It's a
                    fundamental aspect of design that affects readability, user
                    experience, and brand perception.
                  </Typography>
                  <Typography type="text" variant="default" size="md">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </Typography>
                  <Typography type="text" variant="default" size="md">
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </Typography>
                </div>
              }
              code={`
<div className="space-y-4 max-w-2xl">
  <Typography type="heading" level={1} variant="default" size="2xl">
    The Importance of Typography
  </Typography>
  <Typography type="text" variant="secondary" size="lg" weight="medium">
    Typography is more than just picking a font...
  </Typography>
  <Typography type="text" variant="default" size="md">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit...
  </Typography>
  <Typography type="text" variant="default" size="md">
    Duis aute irure dolor in reprehenderit in voluptate...
  </Typography>
</div>
              `}
              variant="default"
            />

            <PreviewWrapper
              label="Card Content"
              preview={
                <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-6 max-w-md">
                  <Typography type="heading" level={3} variant="dark" size="lg">
                    Feature Highlight
                  </Typography>
                  <Typography
                    type="text"
                    variant="secondary"
                    size="md"
                    className="mt-2"
                  >
                    Our platform offers advanced features to help you achieve
                    your goals faster and more efficiently.
                  </Typography>
                  <Typography
                    type="link"
                    variant="primary"
                    size="sm"
                    href="#"
                    className="mt-4 block"
                  >
                    Learn more about our features
                  </Typography>
                </div>
              }
              code={`
<div className="border border-gray-200 dark:border-gray-800 rounded-lg p-6 max-w-md">
  <Typography type="heading" level={3} variant="dark" size="lg">
    Feature Highlight
  </Typography>
  <Typography type="text" variant="secondary" size="md" className="mt-2">
    Our platform offers advanced features to help you achieve your goals...
  </Typography>
  <Typography type="link" variant="primary" size="sm" href="#" className="mt-4 block">
    Learn more about our features
  </Typography>
</div>
              `}
              variant="default"
            />
          </div>
        </div>
      </div>
    </div>
  );

  const renderLinkSection = () => (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold mb-4">Links</h2>
        <p className="text-neutral-600 dark:text-neutral-400 mb-6">
          Link components are used for navigation and interactive elements. They
          support various sizes, weights, and color variants.
        </p>
      </div>

      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-medium mb-4">Link Variants</h3>
          <PreviewWrapper
            label="Link Variants"
            preview={
              <div className="space-y-4">
                {TYPOGRAPHY_VARIANTS.map((variant) => (
                  <div key={variant} className="flex items-center">
                    <Typography
                      type="link"
                      variant={variant}
                      size="md"
                      href="#"
                      className="mr-2"
                    >
                      {variant} link
                    </Typography>
                    <Typography type="text" variant="secondary" size="sm">
                      - Hover to see effects
                    </Typography>
                  </div>
                ))}
              </div>
            }
            code={`
{TYPOGRAPHY_VARIANTS.map((variant) => (
  <Typography
    key={variant}
    type="link"
    variant={variant}
    size="md"
    href="#"
  >
    {variant} link
  </Typography>
))}
            `}
            variant="default"
          />
        </div>

        <div>
          <h3 className="text-lg font-medium mb-4">Link Sizes</h3>
          <PreviewWrapper
            label="Link Sizes"
            preview={
              <div className="flex flex-col gap-4">
                {TYPOGRAPHY_SIZES.map((size) => (
                  <Typography
                    key={size}
                    type="link"
                    variant="primary"
                    size={size}
                    href="#"
                  >
                    This is a {size} size link
                  </Typography>
                ))}
              </div>
            }
            code={`
{TYPOGRAPHY_SIZES.map((size) => (
  <Typography key={size} type="link" variant="primary" size={size} href="#">
    This is a {size} size link
  </Typography>
))}
            `}
            variant="default"
          />
        </div>

        <div>
          <h3 className="text-lg font-medium mb-4">Link Weights</h3>
          <PreviewWrapper
            label="Link Weights"
            preview={
              <div className="flex flex-col gap-4">
                {["normal", "medium", "semibold", "bold"].map((weight) => (
                  <Typography
                    key={weight}
                    type="link"
                    variant="primary"
                    size="md"
                    weight={weight as TypographyWeight}
                    href="#"
                  >
                    This link has {weight} weight
                  </Typography>
                ))}
              </div>
            }
            code={`
{["normal", "medium", "semibold", "bold"].map((weight) => (
  <Typography 
    key={weight} 
    type="link" 
    variant="primary" 
    size="md" 
    weight={weight as TypographyWeight}
    href="#"
  >
    This link has {weight} weight
  </Typography>
))}
            `}
            variant="default"
          />
        </div>

        <div>
          <h3 className="text-lg font-medium mb-4">Use Cases</h3>
          <div className="space-y-6">
            <PreviewWrapper
              label="Navigation Links"
              preview={
                <div className="flex space-x-6">
                  <Typography
                    type="link"
                    variant="primary"
                    size="md"
                    weight="medium"
                    href="#"
                  >
                    Home
                  </Typography>
                  <Typography
                    type="link"
                    variant="default"
                    size="md"
                    weight="medium"
                    href="#"
                  >
                    About
                  </Typography>
                  <Typography
                    type="link"
                    variant="default"
                    size="md"
                    weight="medium"
                    href="#"
                  >
                    Services
                  </Typography>
                  <Typography
                    type="link"
                    variant="default"
                    size="md"
                    weight="medium"
                    href="#"
                  >
                    Contact
                  </Typography>
                </div>
              }
              code={`
<div className="flex space-x-6">
  <Typography type="link" variant="primary" size="md" weight="medium" href="#">
    Home
  </Typography>
  <Typography type="link" variant="default" size="md" weight="medium" href="#">
    About
  </Typography>
  <Typography type="link" variant="default" size="md" weight="medium" href="#">
    Services
  </Typography>
  <Typography type="link" variant="default" size="md" weight="medium" href="#">
    Contact
  </Typography>
</div>
              `}
              variant="default"
            />

            <PreviewWrapper
              label="Action Links"
              preview={
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <Typography
                      type="link"
                      variant="primary"
                      size="md"
                      weight="semibold"
                      href="#"
                    >
                      Get Started
                    </Typography>
                    <Typography
                      type="link"
                      variant="secondary"
                      size="md"
                      href="#"
                    >
                      Learn More
                    </Typography>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Typography
                      type="link"
                      variant="darkPrimary"
                      size="sm"
                      weight="medium"
                      href="#"
                    >
                      Download Now
                    </Typography>
                    <Typography
                      type="link"
                      variant="outline"
                      size="sm"
                      href="#"
                    >
                      View Documentation
                    </Typography>
                  </div>
                </div>
              }
              code={`
<div className="flex items-center space-x-4">
  <Typography type="link" variant="primary" size="md" weight="semibold" href="#">
    Get Started
  </Typography>
  <Typography type="link" variant="secondary" size="md" href="#">
    Learn More
  </Typography>
</div>

<div className="flex items-center space-x-4">
  <Typography type="link" variant="darkPrimary" size="sm" weight="medium" href="#">
    Download Now
  </Typography>
  <Typography type="link" variant="outline" size="sm" href="#">
    View Documentation
  </Typography>
</div>
              `}
              variant="default"
            />
          </div>
        </div>
      </div>
    </div>
  );

  const renderInlineSection = () => (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold mb-4">Inline Text</h2>
        <p className="text-neutral-600 dark:text-neutral-400 mb-6">
          Inline text components are used for short text elements within other
          components. They support various sizes, weights, and color variants to
          emphasize specific parts of content.
        </p>
      </div>

      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-medium mb-4">Inline Text Variants</h3>
          <PreviewWrapper
            label="Inline Variants"
            preview={
              <div className="space-y-4">
                {TYPOGRAPHY_VARIANTS.map((variant) => (
                  <Typography
                    key={variant}
                    type="text"
                    variant="default"
                    size="md"
                  >
                    This paragraph contains{" "}
                    <Typography type="inline" variant={variant} size="md">
                      {variant} inline text
                    </Typography>{" "}
                    for emphasis.
                  </Typography>
                ))}
              </div>
            }
            code={`
{TYPOGRAPHY_VARIANTS.map((variant) => (
  <Typography key={variant} type="text" variant="default" size="md">
    This paragraph contains{" "}
    <Typography type="inline" variant={variant} size="md">
      {variant} inline text
    </Typography>{" "}
    for emphasis.
  </Typography>
))}
            `}
            variant="default"
          />
        </div>

        <div>
          <h3 className="text-lg font-medium mb-4">Inline Text Weights</h3>
          <PreviewWrapper
            label="Inline Weights"
            preview={
              <div className="space-y-4">
                {["medium", "semibold", "bold", "extrabold"].map((weight) => (
                  <Typography
                    key={weight}
                    type="text"
                    variant="default"
                    size="md"
                  >
                    This text has{" "}
                    <Typography
                      type="inline"
                      variant="primary"
                      size="md"
                      weight={weight as TypographyWeight}
                    >
                      {weight} weight
                    </Typography>{" "}
                    applied to certain words.
                  </Typography>
                ))}
              </div>
            }
            code={`
{["medium", "semibold", "bold", "extrabold"].map((weight) => (
  <Typography key={weight} type="text" variant="default" size="md">
    This text has{" "}
    <Typography 
      type="inline" 
      variant="primary" 
      size="md" 
      weight={weight as TypographyWeight}
    >
      {weight} weight
    </Typography>{" "}
    applied to certain words.
  </Typography>
))}
            `}
            variant="default"
          />
        </div>

        <div>
          <h3 className="text-lg font-medium mb-4">Use Cases</h3>
          <div className="space-y-6">
            <PreviewWrapper
              label="Inline Elements"
              preview={
                <div className="space-y-4">
                  <Typography type="text" variant="default" size="md">
                    This is a paragraph with an{" "}
                    <Typography
                      type="inline"
                      variant="primary"
                      size="md"
                      weight="bold"
                    >
                      important
                    </Typography>{" "}
                    inline element.
                  </Typography>
                  <Typography type="text" variant="default" size="md">
                    You can also use{" "}
                    <Typography
                      type="inline"
                      variant="secondary"
                      size="md"
                      weight="medium"
                    >
                      different variants
                    </Typography>{" "}
                    for emphasis.
                  </Typography>
                </div>
              }
              code={`
<Typography type="text" variant="default" size="md">
  This is a paragraph with an{" "}
  <Typography type="inline" variant="primary" size="md" weight="bold">
    important
  </Typography>{" "}
  inline element.
</Typography>

<Typography type="text" variant="default" size="md">
  You can also use{" "}
  <Typography type="inline" variant="secondary" size="md" weight="medium">
    different variants
  </Typography>{" "}
  for emphasis.
</Typography>
              `}
              variant="default"
            />

            <PreviewWrapper
              label="Rich Text Content"
              preview={
                <div className="space-y-4 max-w-2xl">
                  <Typography type="heading" level={2} variant="dark" size="xl">
                    Product Features
                  </Typography>
                  <Typography type="text" variant="default" size="md">
                    Our platform offers a{" "}
                    <Typography
                      type="inline"
                      variant="primary"
                      size="md"
                      weight="semibold"
                    >
                      comprehensive solution
                    </Typography>{" "}
                    for all your business needs. With our{" "}
                    <Typography
                      type="inline"
                      variant="darkPrimary"
                      size="md"
                      weight="bold"
                    >
                      advanced analytics
                    </Typography>{" "}
                    and{" "}
                    <Typography
                      type="inline"
                      variant="darkSecondary"
                      size="md"
                      weight="bold"
                    >
                      reporting tools
                    </Typography>
                    , you'll have all the insights you need to make informed
                    decisions.
                  </Typography>
                  <Typography type="text" variant="default" size="md">
                    Get started today and see the{" "}
                    <Typography
                      type="inline"
                      variant="outline"
                      size="md"
                      weight="bold"
                    >
                      difference
                    </Typography>{" "}
                    it can make for your business.
                  </Typography>
                </div>
              }
              code={`
<div className="space-y-4 max-w-2xl">
  <Typography type="heading" level={2} variant="dark" size="xl">
    Product Features
  </Typography>
  <Typography type="text" variant="default" size="md">
    Our platform offers a{" "}
    <Typography type="inline" variant="primary" size="md" weight="semibold">
      comprehensive solution
    </Typography>{" "}
    for all your business needs. With our{" "}
    <Typography type="inline" variant="darkPrimary" size="md" weight="bold">
      advanced analytics
    </Typography>{" "}
    and{" "}
    <Typography type="inline" variant="darkSecondary" size="md" weight="bold">
      reporting tools
    </Typography>
    , you'll have all the insights you need to make informed decisions.
  </Typography>
  <Typography type="text" variant="default" size="md">
    Get started today and see the{" "}
    <Typography type="inline" variant="outline" size="md" weight="bold">
      difference
    </Typography>{" "}
    it can make for your business.
  </Typography>
</div>
              `}
              variant="default"
            />
          </div>
        </div>
      </div>
    </div>
  );

  const renderCombinedExamples = () => (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold mb-4">Combined Examples</h2>
        <p className="text-neutral-600 dark:text-neutral-400 mb-6">
          These examples showcase how different typography elements work
          together in real-world scenarios.
        </p>
      </div>

      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-medium mb-4">Blog Post</h3>
          <PreviewWrapper
            label="Blog Post"
            preview={
              <div className="space-y-6 max-w-2xl">
                <Typography
                  type="heading"
                  level={1}
                  variant="primary"
                  size="3xl"
                >
                  Getting Started with Typography
                </Typography>
                <Typography
                  type="text"
                  variant="secondary"
                  size="lg"
                  weight="medium"
                >
                  A comprehensive guide to using typography effectively in your
                  web applications.
                </Typography>
                <div className="flex space-x-2 text-sm">
                  <Typography type="text" variant="darkSecondary" size="sm">
                    By John Smith
                  </Typography>
                  <Typography type="text" variant="secondary" size="sm">
                    •
                  </Typography>
                  <Typography type="text" variant="secondary" size="sm">
                    April 15, 2025
                  </Typography>
                </div>
                <Typography type="text" variant="default" size="md">
                  Typography is a crucial element of any design system. It helps
                  establish hierarchy, improves readability, and creates a
                  consistent look and feel across your application.
                </Typography>
                <Typography type="heading" level={2} variant="dark" size="xl">
                  Why Typography Matters
                </Typography>
                <Typography type="text" variant="default" size="md">
                  Good typography enhances the user experience by making content
                  easier to read and understand. It also plays a significant
                  role in establishing your brand identity and creating a
                  professional appearance.
                </Typography>
                <Typography type="text" variant="default" size="md">
                  When used correctly, typography can{" "}
                  <Typography
                    type="inline"
                    variant="primary"
                    size="md"
                    weight="semibold"
                  >
                    guide users through your content
                  </Typography>{" "}
                  and{" "}
                  <Typography
                    type="inline"
                    variant="primary"
                    size="md"
                    weight="semibold"
                  >
                    highlight important information
                  </Typography>
                  .
                </Typography>
                <Typography type="heading" level={2} variant="dark" size="xl">
                  Next Steps
                </Typography>
                <Typography type="text" variant="default" size="md">
                  Ready to improve your typography skills? Check out our{" "}
                  <Typography type="link" variant="primary" size="md" href="#">
                    advanced typography guide.
                  </Typography>
                </Typography>
              </div>
            }
            code={`
  <div className="space-y-6 max-w-2xl">
    <Typography type="heading" level={1} variant="primary" size="3xl">
      Getting Started with Typography
    </Typography>
    <Typography type="text" variant="secondary" size="lg" weight="medium">
      A comprehensive guide to using typography effectively in your web applications.
    </Typography>
    <div className="flex space-x-2 text-sm">
      <Typography type="text" variant="darkSecondary" size="sm">
        By John Smith
      </Typography>
      <Typography type="text" variant="secondary" size="sm">
        •
      </Typography>
      <Typography type="text" variant="secondary" size="sm">
        April 15, 2025
      </Typography>
    </div>
    <Typography type="text" variant="default" size="md">
      Typography is a crucial element of any design system...
    </Typography>
    <Typography type="heading" level={2} variant="dark" size="xl">
      Why Typography Matters
    </Typography>
    <Typography type="text" variant="default" size="md">
      Good typography enhances the user experience...
    </Typography>
    <Typography type="text" variant="default" size="md">
      When used correctly, typography can{" "}
      <Typography type="inline" variant="primary" size="md" weight="semibold">
        guide users through your content
      </Typography>{" "}
      and{" "}
      <Typography type="inline" variant="primary" size="md" weight="semibold">
        highlight important information
      </Typography>
      .
    </Typography>
    <Typography type="heading" level={2} variant="dark" size="xl">
      Next Steps
    </Typography>
    <Typography type="text" variant="default" size="md">
      Ready to improve your typography skills? Check out our{" "}
      <Typography type="link" variant="primary" size="md" href="#">
        advanced typography guide.
      </Typography>
    </Typography>
  </div>
            `}
            variant="default"
          />
        </div>

        <div>
          <h3 className="text-lg font-medium mb-4">Pricing Card</h3>
          <PreviewWrapper
            label="Pricing Card"
            preview={
              <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-6 max-w-sm">
                <Typography
                  type="heading"
                  level={3}
                  variant="primary"
                  size="xl"
                  className="text-center"
                >
                  Premium Plan
                </Typography>
                <div className="flex justify-center items-baseline my-6">
                  <Typography
                    type="heading"
                    level={2}
                    variant="dark"
                    size="3xl"
                    weight="bold"
                  >
                    $49
                  </Typography>
                  <Typography
                    type="text"
                    variant="secondary"
                    size="sm"
                    weight="medium"
                    className="ml-1"
                  >
                    /month
                  </Typography>
                </div>
                <ul className="space-y-4 mb-6">
                  <li className="flex items-center">
                    <Typography type="text" variant="default" size="md">
                      <Typography
                        type="inline"
                        variant="primary"
                        size="md"
                        weight="semibold"
                      >
                        Unlimited
                      </Typography>{" "}
                      projects
                    </Typography>
                  </li>
                  <li className="flex items-center">
                    <Typography type="text" variant="default" size="md">
                      <Typography
                        type="inline"
                        variant="primary"
                        size="md"
                        weight="semibold"
                      >
                        5TB
                      </Typography>{" "}
                      cloud storage
                    </Typography>
                  </li>
                  <li className="flex items-center">
                    <Typography type="text" variant="default" size="md">
                      <Typography
                        type="inline"
                        variant="primary"
                        size="md"
                        weight="semibold"
                      >
                        24/7
                      </Typography>{" "}
                      premium support
                    </Typography>
                  </li>
                </ul>
                <div className="text-center">
                  <Typography
                    type="link"
                    variant="primary"
                    size="md"
                    weight="semibold"
                    href="#"
                    className="inline-block px-6 py-2 border border-blue-600 rounded-md bg-blue-600 text-white hover:bg-blue-700"
                  >
                    Get Started
                  </Typography>
                </div>
              </div>
            }
            code={`
  <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-6 max-w-sm">
    <Typography type="heading" level={3} variant="primary" size="xl" className="text-center">
      Premium Plan
    </Typography>
    <div className="flex justify-center items-baseline my-6">
      <Typography type="heading" level={2} variant="dark" size="3xl" weight="bold">
        $49
      </Typography>
      <Typography type="text" variant="secondary" size="sm" weight="medium" className="ml-1">
        /month
      </Typography>
    </div>
    <ul className="space-y-4 mb-6">
      <li className="flex items-center">
        <Typography type="text" variant="default" size="md">
          <Typography type="inline" variant="primary" size="md" weight="semibold">
            Unlimited
          </Typography>{" "}
          projects
        </Typography>
      </li>
      <li className="flex items-center">
        <Typography type="text" variant="default" size="md">
          <Typography type="inline" variant="primary" size="md" weight="semibold">
            5TB
          </Typography>{" "}
          cloud storage
        </Typography>
      </li>
      <li className="flex items-center">
        <Typography type="text" variant="default" size="md">
          <Typography type="inline" variant="primary" size="md" weight="semibold">
            24/7
          </Typography>{" "}
          premium support
        </Typography>
      </li>
    </ul>
    <div className="text-center">
      <Typography type="link" variant="primary" size="md" weight="semibold" href="#" className="inline-block px-6 py-2 border border-blue-600 rounded-md bg-blue-600 text-white hover:bg-blue-700">
        Get Started
      </Typography>
    </div>
  </div>
            `}
            variant="default"
          />
        </div>

        <div>
          <h3 className="text-lg font-medium mb-4">Alert Component</h3>
          <PreviewWrapper
            label="Alert Component"
            preview={
              <div className="bg-blue-50 border border-blue-200 rounded-md p-4 max-w-2xl dark:bg-blue-900/20 dark:border-blue-800">
                <div className="flex">
                  <div className="ml-3">
                    <Typography
                      type="heading"
                      level={4}
                      variant="primary"
                      size="md"
                      weight="semibold"
                    >
                      Information
                    </Typography>
                    <Typography
                      type="text"
                      variant="default"
                      size="sm"
                      className="mt-2"
                    >
                      This is an important notice about your account. Please
                      read it carefully and take the necessary action by
                      visiting your{" "}
                      <Typography
                        type="link"
                        variant="primary"
                        size="sm"
                        href="#"
                      >
                        account settings
                      </Typography>
                      .
                    </Typography>
                  </div>
                </div>
              </div>
            }
            code={`
  <div className="bg-blue-50 border border-blue-200 rounded-md p-4 max-w-2xl dark:bg-blue-900/20 dark:border-blue-800">
    <div className="flex">
      <div className="ml-3">
        <Typography type="heading" level={4} variant="primary" size="md" weight="semibold">
          Information
        </Typography>
        <Typography type="text" variant="default" size="sm" className="mt-2">
          This is an important notice about your account. Please read it carefully and take the necessary action by visiting your{" "}
          <Typography type="link" variant="primary" size="sm" href="#">
            account settings
          </Typography>
          .
        </Typography>
      </div>
    </div>
  </div>
            `}
            variant="default"
          />
        </div>
      </div>
    </div>
  );

  const renderGuidelines = () => {
    const bestPractices = [
      {
        title: "Maintain Hierarchy",
        description:
          "Use typography to create a clear visual hierarchy by varying size, weight, and style.",
      },
      {
        title: "Be Consistent",
        description:
          "Use the same variants for similar elements throughout your application.",
      },
      {
        title: "Prioritize Readability",
        description:
          "Choose sizes and colors that are easy to read on different devices and in different lighting conditions.",
      },
    ];

    const thingsToAvoid = [
      {
        title: "Too Many Styles",
        description:
          "Avoid using too many different sizes, weights, or variants on a single page.",
      },
      {
        title: "Poor Contrast",
        description:
          "Ensure there's enough contrast between text and background colors for readability.",
      },
      {
        title: "Inconsistent Sizing",
        description:
          "Don't use arbitrary or inconsistent sizing. Stick to the defined size scale.",
      },
    ];

    return (
      <ShowcaseGuidelines
        title="Typography Guidelines"
        description="Following these guidelines will help maintain consistency and readability across your application."
        bestPractices={bestPractices}
        thingsToAvoid={thingsToAvoid}
      />
    );
  };

  const renderAPIDocs = () => {
    const typographyProps = [
      {
        name: "type",
        type: '"heading" | "text" | "link" | "inline"',
        defaultValue: '"text"',
        description: "Specifies the type of typography element to render.",
      },
      {
        name: "variant",
        type: '"default" | "primary" | "secondary" | "outline" | "dark" | "darkPrimary" | "darkSecondary"',
        defaultValue: '"default"',
        description: "Determines the color scheme to use for the text.",
      },
      {
        name: "size",
        type: '"xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl"',
        defaultValue: '"md"',
        description: "Controls the font size of the text.",
      },
      {
        name: "weight",
        type: '"thin" | "extralight" | "light" | "normal" | "medium" | "semibold" | "bold" | "extrabold" | "black"',
        defaultValue: '"normal"',
        description: "Sets the font weight of the text.",
      },
      {
        name: "level",
        type: "1 | 2 | 3 | 4 | 5 | 6",
        defaultValue: '1 (for type="heading")',
        description: 'Sets the heading level (h1-h6) when type is "heading".',
      },
      {
        name: "href",
        type: "string",
        defaultValue: "undefined",
        description: 'URL for the link when type is "link".',
      },
      {
        name: "className",
        type: "string",
        defaultValue: "undefined",
        description: "Additional CSS classes to apply to the component.",
      },
      {
        name: "children",
        type: "ReactNode",
        defaultValue: "required",
        description:
          "The content to be displayed within the typography component.",
      },
    ];

    return (
      <ShowcaseAPIReference
        title="API Documentation"
        propTables={[
          {
            title: "Typography Props",
            props: typographyProps,
          },
        ]}
      />
    );
  };

  return (
    <div className="space-y-16 py-8">
      {renderIntroduction()}
      {renderHeadingSection()}
      {renderTextSection()}
      {renderLinkSection()}
      {renderInlineSection()}
      {renderCombinedExamples()}
      {renderGuidelines()}
      {renderAPIDocs()}
    </div>
  );
};
