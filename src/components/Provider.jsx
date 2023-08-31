import { ThemeProvider } from "./ThemeContext";
import { UserProvider } from "./UserContext";

export default function provider({ children }) {



    return (
        <UserProvider>
            <ThemeProvider >
                {children}
            </ThemeProvider>
        </UserProvider>
    )
}