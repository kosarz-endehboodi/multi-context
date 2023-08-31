import { useContext } from "react";
import { useTheme } from "./ThemeContext";

export default function user() {
    const { theme, setTheme } = useTheme()
    return (
        <label>
            <input
                type="checkbox"
                checked={theme === "dark"}
                onChange={(e) => {
                    setTheme(e.target.checked ? "dark" : "light");
                }}
            />
            Use dark mode
        </label>
    )



}