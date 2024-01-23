import { useTheme } from "@/context/ThemeContext";
import { Dark, Exit, Light } from "./svg/icon";

import Link from "next/link";
export function MobileMenu() {
  const { theme, setTheme, iconMenu, setIconMenu } = useTheme();
  let divClassName = `fixed top-0 left-0 right-0 z-[99999999]   ${
    theme == "Light"
      ? "bg-[rgba(17, 24, 39, 0.70)] text-[#4B5563] "
      : "bg-[rgba(249, 250, 251, 0.70)] text-[#fff]"
  }`;
  let divMenu = `absolute right-0 flex flex-col w-full max-w-[800px] h-[667px] ${
    theme == "Light" ? "bg-[#fff] " : "bg-[#030712]"
  }`;
  let divLogo = `text-3xl	font-bold ${
    theme == "Light" ? "text-gray-900 " : "text-[#fff]"
  } `;
  const changeThemeHandler = () => {
    setTheme(theme == "Light" ? "Dark" : "Light");
  };
  function buttonHandler() {
    setIconMenu(!iconMenu);
    console.log(iconMenu);
  }
  return (
    <div className={divClassName} onClick={buttonHandler}>
      <div className="flex max-w-[800px] ">
        <div className={divMenu}>
          <div className="w-[320px] absolute right-0">
            <div className="flex justify-between">
              <Link className={divLogo} href="/">
                {"<SS />"}
              </Link>
              <button
                onClick={buttonHandler}
                className="p-1.5 md:hidden flex justify-between"
              >
                <Exit />
              </button>
            </div>
            <div className="flex flex-col items-start  right-0 w-[320px] h-[667px] ">
              <ul className=" text-base	 md:flex gap-8 text-gray-600 items-center	">
                <li>
                  <Link href="/Playscore">PlayScore</Link>
                </li>
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Testimonials</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
                <li>|</li>
                <li className="flex gap-4">
                  <button onClick={changeThemeHandler}>
                    {theme == "Dark" ? <Dark /> : <Light />}
                  </button>
                  <button>Download CV</button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
