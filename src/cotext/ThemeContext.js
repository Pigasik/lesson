import {createContext, useState} from 'react';

export const ThemeContext = createContext();

function ThemeProvader ({children}) {
    const [theme, setTheme] = useState('white');
    return <ThemeContext.Provider value={{theme, setTheme}}>
        {children}
    </ThemeContext.Provider>
}

export default ThemeProvader;