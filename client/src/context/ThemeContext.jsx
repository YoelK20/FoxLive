import { createContext, useState } from "react";

export const theme = createContext({
    currentTheme: "",
    setCurrentTheme:  () => {},
    theme: {
        light: {
            dataTheme: ""
        },
        dark: {
            dataTheme: ""
        }
    }
})

export function ThemeProvider({ children }) {
    const [currentTheme, setCurrentTheme] = useState("dark")

    return (
        <theme.Provider value={{
            currentTheme,
            setCurrentTheme,
            theme: {
                light: {
                    dataTheme: "light"
                },
                dark: {
                    dataTheme: "dark"
                }
            }
        }}>
            {children}
        </theme.Provider>
    )
}