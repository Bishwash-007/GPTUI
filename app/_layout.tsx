import { Slot } from "expo-router";

import '../global.css'

export default function RootLayout() {
  return <Slot/>;
}
export const unstable_settings = {
  initialRouteName: "index",
};
// This is a workaround for the issue with the expo-router and the app directory
//