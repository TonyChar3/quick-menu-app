import {
  House,
  BookCopy,
  Utensils,
  Users,
  ChartNoAxesCombined,
  Cog,
} from "lucide-react";

export const getNavItems = ({ navbar_state }) => [
  {
    path: "/",
    icon: (
      <House
        className={`${navbar_state ? "me-4" : "text-2xl me-0 md:block"}`}
        size={25}
        color="gray"
      />
    ),
    icon_active: (
      <House
        className={`${navbar_state ? "me-4" : "text-2xl me-0 md:block"}`}
        size={25}
        color="black"
      />
    ),
    label: "Home",
  },
  {
    path: "/menus",
    icon: (
      <BookCopy
        className={`${navbar_state ? "me-4" : "text-2xl me-0 md:block"}`}
        size={25}
        color="gray"
      />
    ),
    icon_active: (
      <BookCopy
        className={`${navbar_state ? "me-4" : "text-2xl me-0 md:block"}`}
        size={25}
        color="black"
      />
    ),
    label: "Menus",
  },
  {
    path: "/meals",
    icon: (
      <Utensils
        className={`${navbar_state ? "me-4" : "text-2xl me-0 md:block"}`}
        size={25}
        color="gray"
      />
    ),
    icon_active: (
      <Utensils
        className={`${navbar_state ? "me-4" : "text-2xl me-0 md:block"}`}
        fill="black"
        size={25}
        color="black"
      />
    ),
    label: "Meals",
  },
  {
    path: "/customer",
    icon: (
      <Users
        className={`${navbar_state ? "me-4" : "text-2xl me-0 md:block"}`}
        size={25}
        color="gray"
      />
    ),
    icon_active: (
      <Users
        className={`${navbar_state ? "me-4" : "text-2xl me-0 md:block"}`}
        fill="black"
        size={25}
        color="black"
      />
    ),
    label: "Customers",
  },
  {
    path: "/stats",
    icon: (
      <ChartNoAxesCombined
        className={`${navbar_state ? "me-4" : "text-2xl me-0 md:block"}`}
        size={25}
        color="gray"
      />
    ),
    icon_active: (
      <ChartNoAxesCombined
        className={`${navbar_state ? "me-4" : "text-2xl me-0 md:block"}`}
        fill="black"
        size={25}
        color="black"
      />
    ),
    label: "Statistics",
  },
  {
    path: "/settings",
    icon: (
      <Cog
        className={`${navbar_state ? "me-4" : "text-2xl me-0 md:block"}`}
        size={25}
        color="gray"
      />
    ),
    icon_active: (
      <Cog
        className={`${navbar_state ? "me-4" : "text-2xl me-0 md:block"}`}
        fill="white"
        size={25}
        color="black"
      />
    ),
    label: "Settings",
  },
];
