import {
  List,
  ListItem,
  ListSizes,
  ListSpacings,
  ListType,
  ListVariants,
} from "../List";
import PreviewWrapper from "../PreviewWrapper";
import { Typography } from "../Typography/Typography";
import {
  ShowcaseAPIReference,
  ShowcaseGuidelines,
  ShowcaseHeader,
} from "./common";
import { CliTabs } from "../CliTabs/CliTab";

const ListPage = () => {
  const LIST_VARIANTS: Array<ListVariants> = [
    "default",
    "primary",
    "secondary",
    "outline",
    "dark",
    "darkPrimary",
  ];

  const LIST_SIZES: Array<ListSizes> = ["sm", "md", "lg"];
  const LIST_SPACING: Array<ListSpacings> = ["small", "medium", "large"];
  const LIST_TYPES: Array<ListType> = ["unordered", "ordered", "plain"];

  const basicItems = [
    { id: 1, text: "First Item" },
    { id: 2, text: "Second Item" },
    { id: 3, text: "Third Item" },
  ];

  const interactiveItems = [
    { id: 1, name: "Inbox", icon: "📥", count: 24 },
    { id: 2, name: "Drafts", icon: "📝", count: 5 },
    { id: 3, name: "Sent", icon: "📤", count: 18 },
  ];

  const renderIntroduction = () => (
    <div className="space-y-6">
      <ShowcaseHeader
        title="List"
        description="A versatile list component for displaying items with various styles,
          supporting multiple variants and customizations."
      />
      <PreviewWrapper
        label="Basic Usage"
        preview={
          <List variant="outline" bordered>
            {basicItems.map((item) => (
              <ListItem key={item.id}>
                <Typography type="text" variant="default" size="md">
                  {item.text}
                </Typography>
              </ListItem>
            ))}
          </List>
        }
        code={`
<List variant="outline" bordered>
  <ListItem>First Item</ListItem>
  <ListItem>Second Item</ListItem>
  <ListItem>Third Item</ListItem>
</List>
        `}
      />
    </div>
  );

  const renderVariants = () => (
    <div className="space-y-8">
      <Typography type="heading" level={2} variant="default" size="xl">
        List Variants
      </Typography>
      <Typography type="text" variant="secondary" size="md" className="mt-2">
        Lists come in different variants to match your design needs.
      </Typography>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {LIST_VARIANTS.map((variant) => {
          return (
            <PreviewWrapper
              key={variant}
              label={variant}
              preview={
                <List variant={variant} bordered>
                  {basicItems.map((item) => (
                    <ListItem key={item.id}>{item.text}</ListItem>
                  ))}
                </List>
              }
              code={`
<List variant="${variant}" bordered>
  <ListItem>First Item</ListItem>
  <ListItem>Second Item</ListItem>
  <ListItem>Third Item</ListItem>
</List>
              `}
            />
          );
        })}
      </div>
    </div>
  );

  const renderSizes = () => (
    <div className="space-y-8">
      <Typography type="heading" level={2} variant="default" size="xl">
        List Sizes
      </Typography>
      <Typography type="text" variant="secondary" size="md" className="mt-2">
        Lists can be rendered in different sizes to accommodate various use
        cases.
      </Typography>

      <div className="space-y-6">
        {LIST_SIZES.map((size) => (
          <PreviewWrapper
            key={size}
            label={`Size: ${size}`}
            preview={
              <List variant="outline" size={size} bordered>
                {basicItems.map((item) => (
                  <ListItem key={item.id}>
                    <Typography type="text" variant="default" size={size}>
                      {item.text}
                    </Typography>
                  </ListItem>
                ))}
              </List>
            }
            code={`
<List variant="outline" size="${size}" bordered>
  <ListItem>First Item</ListItem>
  <ListItem>Second Item</ListItem>
  <ListItem>Third Item</ListItem>
</List>
            `}
          />
        ))}
      </div>
    </div>
  );

  const renderSpacing = () => (
    <div className="space-y-8">
      <Typography type="heading" level={2} variant="default" size="xl">
        List Spacing
      </Typography>
      <Typography type="text" variant="secondary" size="md" className="mt-2">
        Control the spacing between list items using the spacing prop.
      </Typography>

      <div className="space-y-6">
        {LIST_SPACING.map((spacing) => (
          <PreviewWrapper
            key={spacing}
            label={`Spacing: ${spacing}`}
            preview={
              <List variant="outline" spacing={spacing} bordered>
                {basicItems.map((item) => (
                  <ListItem key={item.id}>
                    <Typography type="text" variant="default" size="md">
                      {item.text}
                    </Typography>
                  </ListItem>
                ))}
              </List>
            }
            code={`
<List variant="outline" spacing="${spacing}" bordered>
  <ListItem>First Item</ListItem>
  <ListItem>Second Item</ListItem>
  <ListItem>Third Item</ListItem>
</List>
            `}
          />
        ))}
      </div>
    </div>
  );

  const renderTypes = () => (
    <div className="space-y-8">
      <Typography type="heading" level={2} variant="default" size="xl">
        List Types
      </Typography>
      <Typography type="text" variant="secondary" size="md" className="mt-2">
        Lists can be rendered as unordered, ordered, or plain lists.
      </Typography>

      <div className="space-y-6">
        {LIST_TYPES.map((type) => (
          <PreviewWrapper
            key={type}
            label={`Type: ${type}`}
            preview={
              <List variant="outline" listType={type} bordered>
                {basicItems.map((item) => (
                  <ListItem key={item.id}>
                    <Typography type="text" variant="default" size="md">
                      {item.text}
                    </Typography>
                  </ListItem>
                ))}
              </List>
            }
            code={`
<List variant="outline" listType="${type}" bordered>
  <ListItem>First Item</ListItem>
  <ListItem>Second Item</ListItem>
  <ListItem>Third Item</ListItem>
</List>
            `}
          />
        ))}
      </div>
    </div>
  );

  const renderFeatures = () => (
    <div className="space-y-8">
      <Typography type="heading" level={2} variant="default" size="xl">
        List Features
      </Typography>

      <div className="space-y-6">
        <div>
          <Typography type="heading" level={3} variant="default" size="lg">
            Selected Items
          </Typography>
          <PreviewWrapper
            label="Selected Items"
            preview={
              <List variant="outline" bordered>
                <ListItem>
                  <Typography type="text" variant="default" size="md">
                    Regular Item
                  </Typography>
                </ListItem>
                <ListItem selected>
                  <Typography type="text" variant="default" size="md">
                    Selected Item
                  </Typography>
                </ListItem>
                <ListItem>
                  <Typography type="text" variant="default" size="md">
                    Regular Item
                  </Typography>
                </ListItem>
              </List>
            }
            code={`
<List variant="outline" bordered>
  <ListItem>Regular Item</ListItem>
  <ListItem selected>Selected Item</ListItem>
  <ListItem>Regular Item</ListItem>
</List>
            `}
          />
        </div>

        <div>
          <Typography type="heading" level={3} variant="default" size="lg">
            With Dividers
          </Typography>
          <PreviewWrapper
            label="With Dividers"
            preview={
              <List variant="outline" bordered>
                <ListItem>
                  <Typography type="text" variant="default" size="md">
                    First Item
                  </Typography>
                </ListItem>
                <ListItem divider>
                  <Typography type="text" variant="default" size="md">
                    Item with Divider
                  </Typography>
                </ListItem>
                <ListItem>
                  <Typography type="text" variant="default" size="md">
                    Last Item
                  </Typography>
                </ListItem>
              </List>
            }
            code={`
<List variant="outline" bordered>
  <ListItem>First Item</ListItem>
  <ListItem divider>Item with Divider</ListItem>
  <ListItem>Last Item</ListItem>
</List>
            `}
          />
        </div>
      </div>
    </div>
  );

  const renderUseCases = () => (
    <div className="space-y-8">
      <Typography type="heading" level={2} variant="default" size="xl">
        Use Cases
      </Typography>

      <div className="space-y-6">
        <div>
          <Typography type="heading" level={3} variant="default" size="lg">
            Interactive List
          </Typography>
          <PreviewWrapper
            label="Interactive List"
            preview={
              <List variant="outline" listType="plain" bordered>
                {interactiveItems.map((item) => (
                  <ListItem
                    key={item.id}
                    itemType="plain"
                    className="cursor-pointer"
                    secondaryAction={
                      item.count > 0 ? (
                        <span className="bg-primary-100 text-primary-800 dark:bg-primary-900/30 dark:text-primary-100 px-2 py-1 rounded-full text-body-xs">
                          {item.count}
                        </span>
                      ) : null
                    }
                  >
                    <div className="flex items-center">
                      <span className="mr-3 text-xl">{item.icon}</span>
                      <Typography type="text" variant="default" size="md">
                        {item.name}
                      </Typography>
                    </div>
                  </ListItem>
                ))}
              </List>
            }
            code={`
<List variant="outline" listType="plain" bordered>
  {items.map((item) => (
    <ListItem
      key={item.id}
      itemType="plain"
      className="cursor-pointer"
      secondaryAction={
        item.count > 0 ? (
          <span className="bg-primary-100 text-primary-800 dark:bg-primary-900/30 
            dark:text-primary-100 px-2 py-1 rounded-full text-body-xs">
            {item.count}
          </span>
        ) : null
      }
    >
      <div className="flex items-center">
        <span className="mr-3 text-xl">{item.icon}</span>
        <Typography type="text" variant="default" size="md">
          {item.name}
        </Typography>
      </div>
    </ListItem>
  ))}
</List>
            `}
          />
        </div>

        <div>
          <Typography type="heading" level={3} variant="default" size="lg">
            Navigation List
          </Typography>
          <PreviewWrapper
            label="Navigation List"
            preview={
              <List variant="outline" listType="plain" bordered>
                <ListItem className="cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800">
                  <div className="flex items-center">
                    <span className="mr-3">🏠</span>
                    <Typography type="text" variant="default" size="md">
                      Home
                    </Typography>
                  </div>
                </ListItem>
                <ListItem className="cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800">
                  <div className="flex items-center">
                    <span className="mr-3">👤</span>
                    <Typography type="text" variant="default" size="md">
                      Profile
                    </Typography>
                  </div>
                </ListItem>
                <ListItem className="cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800">
                  <div className="flex items-center">
                    <span className="mr-3">⚙️</span>
                    <Typography type="text" variant="default" size="md">
                      Settings
                    </Typography>
                  </div>
                </ListItem>
              </List>
            }
            code={`
<List variant="outline" listType="plain" bordered>
  <ListItem className="cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800">
    <div className="flex items-center">
      <span className="mr-3">🏠</span>
      <Typography type="text" variant="default" size="md">
        Home
      </Typography>
    </div>
  </ListItem>
  {/* More items */}
</List>
            `}
          />
        </div>
      </div>
    </div>
  );

  const renderGuidelines = () => {
    const bestPractices = [
      {
        title: "Use Consistent Spacing",
        description:
          "Maintain consistent spacing between list items to improve readability and visual hierarchy.",
      },
      {
        title: "Choose Appropriate Variants",
        description:
          "Select list variants that match your content's purpose and context.",
      },
      {
        title: "Use Secondary Actions Wisely",
        description:
          "Include secondary actions only when they add value and don't clutter the interface.",
      },
    ];

    const thingsToAvoid = [
      {
        title: "Mixing List Types",
        description:
          "Avoid mixing different list types within the same list component.",
      },
      {
        title: "Inconsistent Styling",
        description:
          "Don't mix different styles or variants within the same list unless necessary.",
      },
      {
        title: "Overcrowding",
        description:
          "Avoid adding too many actions or complex content within a single list item.",
      },
    ];

    return (
      <ShowcaseGuidelines
        description="Follow these guidelines to create consistent and accessible lists."
        bestPractices={bestPractices}
        thingsToAvoid={thingsToAvoid}
      />
    );
  };

  const renderExamples = () => (
    <div className="space-y-8">
      <Typography type="heading" level={2} variant="default" size="xl">
        Examples
      </Typography>
      <Typography type="text" variant="secondary" size="md" className="mt-2">
        Common patterns and use cases for the List component.
      </Typography>

      <div className="space-y-6">
        <div>
          <Typography type="heading" level={3} variant="default" size="lg">
            Settings Menu
          </Typography>
          <PreviewWrapper
            label="Settings Menu"
            preview={
              <List variant="outline" listType="plain" bordered>
                <ListItem className="cursor-pointer">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <span className="mr-3">🔔</span>
                      <div>
                        <Typography type="text" variant="default" size="md">
                          Notifications
                        </Typography>
                        <Typography type="text" variant="secondary" size="sm">
                          Manage your notification preferences
                        </Typography>
                      </div>
                    </div>
                    <span className="text-neutral-400">→</span>
                  </div>
                </ListItem>
                <ListItem className="cursor-pointer">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <span className="mr-3">🔒</span>
                      <div>
                        <Typography type="text" variant="default" size="md">
                          Privacy
                        </Typography>
                        <Typography type="text" variant="secondary" size="sm">
                          Control your privacy settings
                        </Typography>
                      </div>
                    </div>
                    <span className="text-neutral-400">→</span>
                  </div>
                </ListItem>
              </List>
            }
            code={`
<List variant="outline" listType="plain" bordered>
  <ListItem className="cursor-pointer">
    <div className="flex items-center justify-between">
      <div className="flex items-center">
        <span className="mr-3">🔔</span>
        <div>
          <Typography type="text" variant="default" size="md">
            Notifications
          </Typography>
          <Typography type="text" variant="secondary" size="sm">
            Manage your notification preferences
          </Typography>
        </div>
      </div>
      <span className="text-neutral-400">→</span>
    </div>
  </ListItem>
  {/* More items */}
</List>
            `}
          />
        </div>

        <div>
          <Typography type="heading" level={3} variant="default" size="lg">
            Task List
          </Typography>
          <PreviewWrapper
            label="Task List"
            preview={
              <List variant="outline" bordered>
                <ListItem>
                  <div className="flex items-center">
                    <input type="checkbox" className="mr-3" />
                    <div>
                      <Typography type="text" variant="default" size="md">
                        Complete project documentation
                      </Typography>
                      <Typography type="text" variant="secondary" size="sm">
                        Due in 2 days
                      </Typography>
                    </div>
                  </div>
                </ListItem>
                <ListItem selected>
                  <div className="flex items-center">
                    <input type="checkbox" className="mr-3" checked readOnly />
                    <div>
                      <Typography type="text" variant="default" size="md">
                        Review pull requests
                      </Typography>
                      <Typography type="text" variant="secondary" size="sm">
                        Completed yesterday
                      </Typography>
                    </div>
                  </div>
                </ListItem>
              </List>
            }
            code={`
<List variant="outline" bordered>
  <ListItem>
    <div className="flex items-center">
      <input type="checkbox" className="mr-3" />
      <div>
        <Typography type="text" variant="default" size="md">
          Complete project documentation
        </Typography>
        <Typography type="text" variant="secondary" size="sm">
          Due in 2 days
        </Typography>
      </div>
    </div>
  </ListItem>
  {/* More items */}
</List>
            `}
          />
        </div>
      </div>
    </div>
  );

  const renderAPIReference = () => {
    const listProps = [
      {
        name: "variant",
        type: '"default" | "primary" | "secondary" | "outline" | "dark" | "darkPrimary" | "darkSecondary"',
        defaultValue: '"default"',
        description: "The visual style variant of the list.",
      },
      {
        name: "size",
        type: '"sm" | "md" | "lg"',
        defaultValue: '"md"',
        description: "The size of the list items.",
      },
      {
        name: "spacing",
        type: '"small" | "medium" | "large"',
        defaultValue: '"medium"',
        description: "The spacing between list items.",
      },
      {
        name: "listType",
        type: '"unordered" | "ordered" | "plain"',
        defaultValue: '"unordered"',
        description: "The type of list to render.",
      },
      {
        name: "bordered",
        type: "boolean",
        defaultValue: "false",
        description: "Whether to show a border around the list.",
      },
    ];

    const listItemProps = [
      {
        name: "itemType",
        type: '"list-item" | "plain"',
        defaultValue: '"list-item"',
        description: "The type of list item to render.",
      },
      {
        name: "selected",
        type: "boolean",
        defaultValue: "false",
        description: "Whether the item is selected.",
      },
      {
        name: "divider",
        type: "boolean",
        defaultValue: "false",
        description: "Whether to show a divider below the item.",
      },
      {
        name: "disablePadding",
        type: "boolean",
        defaultValue: "false",
        description: "Whether to disable padding on the item.",
      },
      {
        name: "disableGutters",
        type: "boolean",
        defaultValue: "false",
        description: "Whether to disable gutters on the item.",
      },
      {
        name: "secondaryAction",
        type: "ReactNode",
        defaultValue: "undefined",
        description:
          "Secondary content to display on the right side of the item.",
      },
    ];

    return (
      <ShowcaseAPIReference
        propTables={[
          {
            title: "List Props",
            props: listProps,
          },
          {
            title: "ListItem Props",
            props: listItemProps,
          },
        ]}
      />
    );
  };

  return (
    <div className="space-y-16 py-8">
      <section id="#installation">
        <h1 className="text-h4 mb-6">Installation</h1>
        <CliTabs
          commands={{
            pnpm: "pnpm dlx shadcn@latest add http://rimxui.vercel.app/registry/inputform.json",
            npm: "npx shadcn@latest add http://rimxui.vercel.app/registry/inputform.json",
            bun: "bunx shadcn@latest add http://rimxui.vercel.app/registry/inputform.json",
            yarn: "yarn dlx shadcn@latest add http://rimxui.vercel.app/registry/inputform.json",
          }}
        />
      </section>
      {renderIntroduction()}
      {renderVariants()}
      {renderSizes()}
      {renderSpacing()}
      {renderTypes()}
      {renderFeatures()}
      {renderExamples()}
      {renderUseCases()}
      {renderGuidelines()}
      {renderAPIReference()}
    </div>
  );
};

export default ListPage;
