// Do not make this import absolute, it cause circular import and break the application
import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import DarkModeToggle from "../DarkMode/dark";
import { ROUTES } from "../../routes/routes";

const navigation = [
  { name: "Getting Started", path: ROUTES.showcase },
  { name: "Introduction", path: "#" },
  { name: "Installation", path: "#" },
  { name: "Components", path: "#" },
  { name: "Accordion", path: ROUTES.accordionDocs },
  { name: "Breadcrumps", path: ROUTES.BreadcrumbsPage },
  { name: "Buttons", path: ROUTES.buttonsDocs },
  { name: "Morphed Buttons", path: ROUTES.morphedDocs },
  { name: "Colors", path: ROUTES.colorsDocs },
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

  return (
    <div>
      <div className="min-h-screen bg-white dark:bg-neutral-900">
        <div className="flex">
          <div className="fixed top-0 left-0 bottom-0 w-64 border-r border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900">
            <div className="flex h-16 items-center justify-between border-b border-neutral-200 dark:border-neutral-800 px-6">
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 mr-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
                <Link
                  to="/"
                  className="text-xl font-semibold text-neutral-900 dark:text-white"
                >
                  R<span className="text-red-500">i</span>MX UI
                </Link>
              </div>
              <DarkModeToggle
                variant="icon"
                className="p-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800"
              />
            </div>
            <nav className="p-4 max-h-[90vh] overflow-y-auto [&::-webkit-scrollbar]:w-0 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:rounded-full  [&::-webkit-scrollbar-thumb]:bg-gray-300  dark:[&::-webkit-scrollbar-track]:bg-neutral-700  dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500">
              {navigation.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`block px-3 py-2 text-sm rounded-md transition-colors ${
                    location.pathname === item.path
                      ? "bg-primary-50 text-primary-700 dark:bg-primary-900/20 dark:text-primary-300"
                      : "text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>

          <div className="pl-64 w-full">
            <main className="container max-w-4xl mx-auto py-6 px-8">
              <div className="space-y-2 pb-8">
                <div className="flex items-center space-x-1 text-sm text-neutral-500 dark:text-neutral-400">
                  <span>Components</span>
                  <span className="capitalize">
                    {location.pathname.split("/").pop()}
                  </span>
                </div>
              </div>
              <Outlet />
            </main>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowcaseLayout;
