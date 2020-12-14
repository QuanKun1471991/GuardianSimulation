import { YoutubeOutlined } from "@ant-design/icons";

export const HOME = "/";
export const TODO = "/todos";
export const FORGOT_PASSWORD = "/forgot_password";

export const PUBLIC_ROUTES = [FORGOT_PASSWORD];

export const ROUTES = [
  {
    path: HOME,
    icon: YoutubeOutlined,
    name: "Home",
  },
];
