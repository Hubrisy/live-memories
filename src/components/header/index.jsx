import { NavigationDekstop } from "./navigation/dekstop";
import { NavigationMobile } from "./navigation/mobile";

export const Header = () => {
  return (
    <div className=" text-white text-[20px] fixed z-100 top-0 right-0 w-full">
      <div>
        <div className="block md:hidden bg-big-stone">
          <NavigationMobile />
        </div>
        <div className="hidden md:block">
          <NavigationDekstop />
        </div>
      </div>
    </div>
  );
};
