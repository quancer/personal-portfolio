const { createContext, useState, useContext } = require("react");

const ThemeContext = createContext();
export const useTheme = () => {
  return useContext(ThemeContext);
};
const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("Light");
  const [iconMenu, setIconMenu] = useState(false);
  return (
    <ThemeContext.Provider value={{ theme, setTheme, iconMenu, setIconMenu }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
