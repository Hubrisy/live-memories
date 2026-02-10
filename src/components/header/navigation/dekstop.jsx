import { Link } from "react-router-dom";
import { navigationItems } from "./data";
import { ReactComponent as Logo } from "../../../assets/imgs/icons/logo.svg";
import { ReactComponent as Telegram } from "../../../assets/imgs/icons/telegram.svg";
import { ReactComponent as Instagram } from "../../../assets/imgs/icons/instagram.svg";
import { ReactComponent as Viber } from "../../../assets/imgs/icons/viber.svg";

export const NavigationDekstop = () => {
  const handleScroll = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div className="relative">
      <div className="bg-big-stone">
        <div className="flex justify-between items-center lg:max-w-[90%] p-4 m-auto">
          <div className="ml-10 flex items-center gap-2">
            <div>
              <Logo className="h-8 w-8" />
            </div>
            <div className="text-2xl logo leading-none">Живі спогади</div>
          </div>

          <div className="flex gap-2 md:gap-4 justify-between items-end xl:min-w-[700px] leading-none">
            {navigationItems.map((item, index) => (
              <div className="cursor-pointer text-[18px]" key={index}>
                {item.link === "/" ? (
                  <Link to={item.link}>
                    <div className="navi transition-transform duration-200 ease-out hover:scale-110">
                      {item.title}
                    </div>
                  </Link>
                ) : (
                  <div
                    onClick={() => handleScroll(item.link)}
                    className="navi transition-transform duration-200 ease-out hover:scale-110"
                  >
                    {item.title}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="bg-big-stone w-fit absolute right-0 rounded-bl-xl">
        <div className="p-4 flex flex-col gap-6">
          <a
            href="http://t.me/manager_vlad_spogady"
            target="_blank"
            rel="noreferrer"
          >
            <Telegram className="w-8 h-8 cursor-pointer" />
          </a>
          <a
            href="https://www.instagram.com/zhyvi.spohady?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            target="_blank"
            rel="noreferrer"
          >
            <Instagram className="w-8 h-8 cursor-pointer" />
          </a>
          <a
            href="viber://chat?number=%2B380998783497"
            target="_blank"
            rel="noreferrer"
          >
            <Viber className="w-8 h-8 cursor-pointer" />
          </a>
        </div>
      </div>
    </div>
  );
};
