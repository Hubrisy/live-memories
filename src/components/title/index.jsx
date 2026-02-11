import MainLogo from '../../assets/imgs/photos/mainlogo.jpg'
import { ReactComponent as Camera } from "../../assets/imgs/icons/camera.svg";
import { ReactComponent as Play } from "../../assets/imgs/icons/playbtn.svg";

import "./styled.css";

const reviews = [
  {
    result: "1000+",
    title: "Відновленних фото",
  },
  {
    result: "24-48 годин",
    title: "Швидке виготовлення фото",
  },
  {
    result: "4.9/5",
    title: "Висока оцінка від користувачів",
  },
];

export const Title = () => {
  const handleScroll = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div className="mt-24">
      <div className="lg:flex justify-between">
        <div>
          <img
            src={MainLogo}
            alt=""
            className="w-96 m-auto rounded-xl border-4 border-gray-300"
          />
        </div>
        <div className="lg:max-w-[550px] xl:max-w-[650px] lg:pl-4 mt-4 sm:mt-6 lg:mt-0">
          <div className="uppercase text-center sm:text-start">
            <div className="text-[22px] sm:text-4xl lg:text-3xl font-bold">
              Реставрація,колоризація та анімація фото.
            </div>
            <div className="text-[16px] sm:text-[20px] font-medium mt-1">
              Зробимо ваші старі фото яскравими та живими.
            </div>
          </div>
          <div className="flex flex-col sm:flex-row text-[20px] m-auto sm:gap-4 sm:m-0 mt-4 sm:mt-8 xl:mt-12 sm:justify-between xl:max-w-[440px]">
            <div
              className="
                flex justify-center min-w-[80%] sm:min-w-0 sm:w-full m-auto sm:m-0 p-4 bg-sun  rounded-xl cursor-pointer
                transition-transform duration-300 ease-in-out
                hover:scale-105"
              onClick={() => handleScroll("packages")}
            >
              <div className="mt-[2px]">
                <Camera className="camera" />
              </div>
              <div className="text-white pl-2">Наші ціни</div>
            </div>
            <div
              className="
                group flex justify-center mt-3 sm:mt-0 sm:w-full p-4 border-sun border-2 rounded-xl cursor-pointer
                transition-all duration-300 ease-in-out
              hover:bg-sun hover:text-white"
              onClick={() => handleScroll("examples")}
            >
              <div className="mt-[2.5px]">
                <Play className="play" />
              </div>
              <div className="pl-2">Приклади робіт</div>
            </div>
          </div>
          <div className="mt-4 sm:mt-8 xl:mt-10 flex justify-center md:justify-between flex-wrap md:flex-nowrap">
            {reviews.map((item, index) => (
              <div
                className="flex flex-col items-center gap-1 p-2 md:text-center"
                key={index}
              >
                <div className="text-xl font-bold">{item.result}</div>
                <div className="text-[18px] lg:text-[16px]">{item.title}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
