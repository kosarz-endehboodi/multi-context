import "./App.css";
import { createContext, useState } from "react";
import WelcomePanel from "./components/WelcomePanel";
import MyProviders from "./components/MyProviders";
import { ThemeProvider } from "./components/ThemeContext";
export const ThemeContext = createContext(null);
export const CurrentUserContext = createContext(null);
import ToggleTheme from "./components/ToggleTheme"
import { UserProvider } from "./components/UserContext";
import Providers from "./components/Provider";
export default function MyApp() {

  return (
    <Providers>
      <WelcomePanel />
      <ToggleTheme />
    </Providers>
  );
}
