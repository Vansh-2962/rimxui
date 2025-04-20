// Do not make this import absolute, it cause circular import and break the application
import React, { useEffect, useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { ROUTES } from "../../routes/routes";
import { BreadcrumbsBasic } from "../Breadcrump/BreadcrumpsBasic";
import DarkModeToggle from "../DarkMode/dark";

type Breadcrumb = {
  label: string;
  href?: string;
};

const SidebarItem = ({
  icon,
  label,
  active,
  to,
}: {
  icon?: React.ReactNode;
  label: string;
  active?: boolean;
  to: string;
}) => {
  return (
    <Link
      to={to}
      className={`flex items-center gap-3 px-3 py-2 rounded-md cursor-pointer transition ${
        active
          ? "bg-primary-50 text-primary-700 dark:bg-primary-900/20 dark:text-primary-300"
          : "text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800"
      }`}
    >
      {icon}
      <span className="text-sm font-medium">{label}</span>
    </Link>
  );
};

const navigation = [
  { name: "Introduction", path: ROUTES.docs },
  { name: "Getting Started", path: "#" },
  { name: "Installation", path: ROUTES.installation },
  { name: "Design System", path: ROUTES.designSystemDocs },
  { name: "Components", path: ROUTES.componentsOverview },
  { name: "Accordion", path: ROUTES.accordionDocs },
  { name: "Breadcrumps", path: ROUTES.BreadcrumbsPage },
  { name: "Buttons", path: ROUTES.buttonsDocs },
  { name: "Morphed Buttons", path: ROUTES.morphedDocs },
  { name: "Chips", path: ROUTES.chipsDocs },
  { name: "Countdown", path: ROUTES.counterDocs },
  { name: "Cards", path: ROUTES.cardsDocs },
  { name: "Cli Tab", path: ROUTES.cliDocs },
  { name: "ChatNotification", path: ROUTES.notificationDocs },
  { name: "Checkbox", path: ROUTES.checkboxDocs },
  { name: "Darkmode", path: ROUTES.darkModeDocs },
  { name: "Input", path: ROUTES.inputDocs },
  { name: "Otp Input", path: ROUTES.otpDocs },
  { name: "Label", path: ROUTES.labelDocs },
  { name: "Layout", path: ROUTES.layoutDocs },
  { name: "Typography", path: ROUTES.typographyDocs },
  { name: "Lists", path: ROUTES.listsDocs },
  { name: "Modals", path: ROUTES.modalsDocs },
  { name: "Navbar", path: ROUTES.NavbarPage },
  { name: "Pagination", path: ROUTES.PaginationPage },
  { name: "Radio Group", path: ROUTES.radioButtonDocs },
  { name: "Shadows", path: ROUTES.shadowsDocs },
  { name: "Sidebar", path: ROUTES.SidebarPagePage },
  { name: "Skeleton", path: ROUTES.skeletonDocs },
  { name: "Select", path: ROUTES.selectDocs },
  { name: "Toasts", path: ROUTES.toastsDocs },
  { name: "Toggle", path: ROUTES.toggleDocs },
  { name: "TextArea", path: ROUTES.textareaDocs },
];

export const ShowcaseLayout: React.FC = () => {
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  useEffect(() => {
    setIsSidebarOpen(false);
  }, [location.pathname]);

  const getBreadcrumbItems = (): Breadcrumb[] => {
    const pathSegments = location.pathname.split("/").filter(Boolean);
    const items: Breadcrumb[] = [{ label: "Docs", href: ROUTES.docs }];

    if (pathSegments.length > 1) {
      const currentPage = navigation.find(
        (item) => item.path === location.pathname,
      );
      if (currentPage) {
        items.push({ label: currentPage.name });
      }
    }

    return items;
  };

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-900">
      {/* Main Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-neutral-200/10 bg-white/50 backdrop-blur-xl transition-all dark:bg-neutral-900/50">
        <div className="flex h-16 items-center px-6">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-xl font-semibold text-neutral-900 dark:text-white">
                R<span className="text-red-500">i</span>MX UI
              </span>
              <span className="ml-2 rounded-full bg-neutral-900 px-2 py-1 text-xs text-white dark:bg-white dark:text-neutral-900">
                version 1.0.0 🔥
              </span>
            </Link>
          </div>
          <div className="ml-auto flex items-center gap-2">
            <DarkModeToggle
              variant="icon"
              className="rounded-md p-2 hover:bg-neutral-100 dark:hover:bg-neutral-800"
            />
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="lg:hidden p-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-900 dark:text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Sidebar */}
      <div
        className={`fixed top-16 left-0 bottom-0 z-40 w-64 transform transition-transform duration-200 ease-in-out lg:translate-x-0 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } bg-white dark:bg-neutral-900 border-r border-neutral-200 dark:border-neutral-800`}
      >
        <nav className="p-4 max-h-[calc(100vh-4rem)] overflow-y-auto [&::-webkit-scrollbar]:w-0 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500">
          {navigation.map((item) => (
            <SidebarItem
              key={item.path}
              to={item.path}
              label={item.name}
              active={location.pathname === item.path}
            />
          ))}
        </nav>
      </div>

      {/* Overlay for mobile */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 z-30 bg-black bg-opacity-50 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Main Content */}
      <div
        className={`lg:pl-64 transition-all duration-200 pt-16 ${isSidebarOpen ? "lg:pl-64" : "lg:pl-0"}`}
      >
        <main className="container max-w-4xl mx-auto py-6 px-4 lg:px-8">
          <div className="space-y-2 pb-8">
            <BreadcrumbsBasic items={getBreadcrumbItems()} />
          </div>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default ShowcaseLayout;
