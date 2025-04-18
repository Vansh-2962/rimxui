export const CHILD_ROUTES = {
  showcase: {
    colors: "colors",
    colorUsage: "color-usage",
    typography: "typography",
    buttons: "buttons",
    cards: "cards",
    lists: "lists",
    shadows: "shadows",
    navbarpage: "navbar",
    paginationpage: "pagination",
    breadcrumpspage: "breadcrumps",
    sidebarpage: "sidebar",

    skeleton: "skeleton",
    chips: "chips",
    accordion: "accordion",
    counter: "counter",
    darkMode: "darkMode",
    notification: "notification",
    label: "label",
    input: "input",
    checkbox: "checkbox",
    textarea: "textarea",
    toggle: "toggle",
    radioButton: "radio-button",
    morphed: "morphed",
    otp: "otp",
  },
} as const;

export const ROUTES = {
  home: "/",
  dump: "/dump",
  showcase: "/showcase",
  colorsShowcase: `/showcase/${CHILD_ROUTES.showcase.colors}`,
  ColorUsageShowcase: `/showcase/${CHILD_ROUTES.showcase.colorUsage}`,
  typographyShowcase: `/showcase/${CHILD_ROUTES.showcase.typography}`,
  buttonsShowcase: `/showcase/${CHILD_ROUTES.showcase.buttons}`,
  cardsShowcase: `/showcase/${CHILD_ROUTES.showcase.cards}`,
  listsShowcase: `/showcase/${CHILD_ROUTES.showcase.lists}`,
  shadowsShowcase: `/showcase/${CHILD_ROUTES.showcase.shadows}`,
  NavbarPage: `/showcase/${CHILD_ROUTES.showcase.navbarpage}`,
  PaginationPage: `/showcase/${CHILD_ROUTES.showcase.paginationpage}`,
  BreadcrumbsPage: `/showcase/${CHILD_ROUTES.showcase.breadcrumpspage}`,
  SidebarPagePage: `/showcase/${CHILD_ROUTES.showcase.sidebarpage}`,

  skeletonShowcase: `/showcase/${CHILD_ROUTES.showcase.skeleton}`,
  chipsShowcase: `/showcase/${CHILD_ROUTES.showcase.chips}`,
  accordionShowcase: `/showcase/${CHILD_ROUTES.showcase.accordion}`,
  counterShowcase: `/showcase/${CHILD_ROUTES.showcase.counter}`,
  darkModeShowcase: `/showcase/${CHILD_ROUTES.showcase.darkMode}`,
  notificationShowcase: `/showcase/${CHILD_ROUTES.showcase.notification}`,
  labelShowcase: `/showcase/${CHILD_ROUTES.showcase.label}`,
  inputShowcase: `/showcase/${CHILD_ROUTES.showcase.input}`,
  textareaShowcase: `/showcase/${CHILD_ROUTES.showcase.textarea}`,
  toggleShowcase: `/showcase/${CHILD_ROUTES.showcase.toggle}`,
  radioButtonShowcase: `/showcase/${CHILD_ROUTES.showcase.radioButton}`,
  checkboxShowcase: `/showcase/${CHILD_ROUTES.showcase.checkbox}`,
  morphedShowcase: `/showcase/${CHILD_ROUTES.showcase.morphed}`,
  otpShowcase: `/showcase/${CHILD_ROUTES.showcase.otp}`,
} as const;
