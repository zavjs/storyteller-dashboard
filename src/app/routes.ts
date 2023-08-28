import { Icons } from "@/components/Icon/Icon";

type Menu = Record<
  string,
  {
    text: string;
    href: string;
    icon: Icons;
    active?: boolean;
    enabled?: boolean;
  }[]
>;

export const routes: Menu = {
  features: [
    { text: "Schedule", href: "/schedule", icon: "calendar" },
    { text: "Analytics", href: "/analytics", icon: "analytics" },
    {
      text: "Stories",
      href: "/my-stories",
      icon: "book",
      active: true,
      enabled: true,
    },
    { text: "Engagement Units", href: "/engagement-units", icon: "joystick" },
    { text: "Ads", href: "/ads", icon: "megaphone" },
  ],
  config: [
    { text: "CMS Users", href: "/cms-users", icon: "users" },
    { text: "Roles", href: "/roles", icon: "identity" },
    { text: "Apps", href: "/apps", icon: "code" },
  ],
  help: [{ text: "User guide", href: "/user-guide", icon: "question-mark" }],
};
