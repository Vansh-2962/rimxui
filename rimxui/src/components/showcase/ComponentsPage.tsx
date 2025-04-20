import { Link } from "react-router-dom";
import { ROUTES } from "../../routes/routes";

interface ComponentCard {
  name: string;
  description: string;
  route: string;
}

const components: ComponentCard[] = [
  {
    name: "Accordion",
    description:
      "Expandable content sections for organizing information in a collapsible format.",
    route: ROUTES.accordionDocs,
  },
  {
    name: "Breadcrumbs",
    description:
      "Navigation aid showing the current location in a hierarchical structure.",
    route: ROUTES.BreadcrumbsPage,
  },
  {
    name: "Buttons",
    description:
      "Interactive elements for triggering actions, available in various styles and sizes.",
    route: ROUTES.buttonsDocs,
  },
  {
    name: "Morphed Buttons",
    description: "Animated buttons that transform between different states.",
    route: ROUTES.morphedDocs,
  },
  {
    name: "Colors",
    description:
      "Color system and palette for consistent theming across your application.",
    route: ROUTES.designSystemDocs,
  },
  {
    name: "Chips",
    description: "Compact elements representing input, attributes, or actions.",
    route: ROUTES.chipsDocs,
  },
  {
    name: "Countdown",
    description:
      "Timer component for displaying countdowns and time-based information.",
    route: ROUTES.counterDocs,
  },
  {
    name: "Cards",
    description:
      "Flexible containers for displaying content and actions in a single topic.",
    route: ROUTES.cardsDocs,
  },
  {
    name: "CLI Tab",
    description:
      "Command-line interface style component for displaying terminal-like content.",
    route: ROUTES.cliDocs,
  },
  {
    name: "Chat Notification",
    description: "Toast-style notifications for chat and messaging interfaces.",
    route: ROUTES.notificationDocs,
  },
  {
    name: "Checkbox",
    description:
      "Form control that allows users to select multiple options from a set.",
    route: ROUTES.checkboxDocs,
  },
  {
    name: "Dark Mode",
    description:
      "Theme switching functionality for supporting light and dark color schemes.",
    route: ROUTES.darkModeDocs,
  },
  {
    name: "Input",
    description: "Text input fields for collecting user data in forms.",
    route: ROUTES.inputDocs,
  },
  {
    name: "OTP Input",
    description:
      "Specialized input for one-time passwords and verification codes.",
    route: ROUTES.otpDocs,
  },
  {
    name: "Label",
    description: "Text labels for form controls and content organization.",
    route: ROUTES.labelDocs,
  },
  {
    name: "Layout",
    description: "Structural components for building page layouts and grids.",
    route: ROUTES.layoutDocs,
  },
  {
    name: "Typography",
    description: "Text styles and components for consistent typography.",
    route: ROUTES.typographyDocs,
  },
  {
    name: "Lists",
    description: "Components for displaying items in various list formats.",
    route: ROUTES.listsDocs,
  },
  {
    name: "Modals",
    description:
      "Dialog windows for displaying content or requesting user input.",
    route: ROUTES.modalsDocs,
  },
  {
    name: "Navbar",
    description: "Navigation bar components for site-wide navigation.",
    route: ROUTES.NavbarPage,
  },
  {
    name: "Pagination",
    description: "Components for handling pagination in lists and tables.",
    route: ROUTES.PaginationPage,
  },
  {
    name: "Radio Group",
    description: "Form controls for selecting a single option from a set.",
    route: ROUTES.radioButtonDocs,
  },
  {
    name: "Shadows",
    description: "Elevation and depth effects using box shadows.",
    route: ROUTES.shadowsDocs,
  },
  {
    name: "Sidebar",
    description:
      "Side navigation components for complex navigation structures.",
    route: ROUTES.SidebarPagePage,
  },
  {
    name: "Skeleton",
    description: "Loading placeholder animations for content.",
    route: ROUTES.skeletonDocs,
  },
  {
    name: "Select",
    description:
      "Dropdown selection components for choosing from a list of options.",
    route: ROUTES.selectDocs,
  },
  {
    name: "Toasts",
    description: "Temporary notifications and alerts.",
    route: ROUTES.toastsDocs,
  },
  {
    name: "Toggle",
    description: "Switch controls for binary states.",
    route: ROUTES.toggleDocs,
  },
  {
    name: "TextArea",
    description: "Multi-line text input fields.",
    route: ROUTES.textareaDocs,
  },
];

const ComponentsPage = () => {
  return (
    <div className="space-y-8">
      <section>
        <h1 className="text-4xl font-bold mb-4">Components</h1>
        <p className="text-lg text-neutral-600 dark:text-neutral-300 mb-8">
          Explore our comprehensive collection of React components, designed to
          help you build beautiful and functional user interfaces.
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {components.map((component) => (
          <Link
            key={component.name}
            to={component.route}
            className="block p-4 rounded-lg border border-neutral-200 dark:border-neutral-800 hover:border-primary-500 dark:hover:border-primary-500 transition-colors"
          >
            <h3 className="text-lg font-semibold mb-2">{component.name}</h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              {component.description}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ComponentsPage;
