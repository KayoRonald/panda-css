import { useTheme } from "next-themes";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { Button } from "./teste";

function useThemeSwitch() {
  const { setTheme, resolvedTheme } = useTheme();

  const isDarkMode = resolvedTheme === "dark";

  const toggleTheme = () => {
    setTheme(isDarkMode ? "light" : "dark");
  };

  const iconText = isDarkMode ? "Dark" : "Light";
  const iconToUse = isDarkMode ? <MdDarkMode /> : <MdLightMode />;

  return { toggleTheme, iconText, iconToUse };
}

export function ColorModeToggle() {
  const { toggleTheme, iconToUse } = useThemeSwitch();

  return (
    <Button onClick={toggleTheme}>
      {iconToUse}
    </Button>
  );
}
