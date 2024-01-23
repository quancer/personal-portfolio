import Link from "next/link";
import { useTheme } from "@/context/ThemeContext";
import { Dark, IconMenu, Light } from "./svg/icon";
import { MobileMenu } from "./MobileMenu";
export function Menu() {
  const { theme, setTheme, iconMenu, setIconMenu } = useTheme();
  const changeThemeHandler = () => {
    setTheme(theme == "Light" ? "Dark" : "Light");
  };
  function buttonHandler() {
    setIconMenu(!iconMenu);
    console.log(iconMenu);
  }
  return (
    <ul className="hidden text-base	 md:flex gap-8 text-gray-600 items-center	">
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
  );
}
