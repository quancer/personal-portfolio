import Link from "next/link";
import { Menu } from "@/components";
import { IconMenu } from "./svg/icon";
import { useTheme } from "@/context/ThemeContext";
import { MobileMenu } from "./MobileMenu";

export function Header() {
  const { theme, setTheme, iconMenu, setIconMenu } = useTheme();
  const changeThemeHandler = () => {
    setTheme(theme == "Light" ? "Dark" : "Light");
  };
  function buttonHandler() {
    setIconMenu(!iconMenu);
    console.log(iconMenu);
  }
  let divClassName = `px-4 md:px-20 py-4 text-gray-600 ${
    theme == "Light" ? "bg-[#fff] " : "bg-[#030712]"
  }`;
  let divLogo = `text-3xl	font-bold ${
    theme == "Light" ? "text-gray-900 " : "text-[#fff]"
  } `;
  return (
    <div className="max-w-[1280px]  m-auto">
      <div className={divClassName}>
        <div className="flex justify-between  items-center	relative">
          <Link className={divLogo} href="/">
            {"<SS />"}
          </Link>
          <button onClick={buttonHandler} className="p-1.5 md:hidden relative">
            {iconMenu ? <MobileMenu /> : <IconMenu />}
          </button>
          <div className="hidden md:flex">
            <Menu />
          </div>
        </div>
      </div>
    </div>
  );
}
