import { ReactComponent as Present } from "../../assets/imgs/icons/present.svg";
import { ReactComponent as Camera } from "../../assets/imgs/icons/camera.svg";
import { ReactComponent as Star } from "../../assets/imgs/icons/star.svg";
import { ReactComponent as Crown } from "../../assets/imgs/icons/crown.svg";
import { ReactComponent as Gallery } from "../../assets/imgs/icons/gallery.svg";
import { ReactComponent as Video } from "../../assets/imgs/icons/video.svg";

import "./styled.css";
import { useModalContext } from "../../context/ModalUseContext";

const options = [
  {
    img: Gallery,
    title: "Реставрація фото",
    price: "50 гривень",
    quantity: "1 фото",
  },
  {
    img: Video,
    title: "Анімація фото",
    price: "250 гривень",
    quantity: "1 фото",
    duration: "Довжина відео: 10 секунд",
  },
];

const data = [
  {
    img: Camera,
    title: "Пакет Mini",
    quantity: "5–7 фотографій",
    oldPrice: "1499 гривень",
    currentPrice: "230 гривень (за 1 фото)",
    description:
      "Ідеально підходить для швидкого подарунка або збереження дорогоцінного спогаду.",
    duration: "Відео: 40–60 секунд",
    style: "Стиль відео: прості анімації залежно від сцени зображення",
    audio: "Аудіо: індивідуально підібрана музика (без голосу)",
    fixes: "Правки: 1",
    terms:
      "Термін виконання: 5 днів або 24–48 годин (Express, за додаткову плату)",
  },
  {
    img: Star,
    title: "Пакет Classic",
    quantity: "10–15 фотографій",
    oldPrice: "2599 гривень",
    currentPrice: "180 гривень (за 1 фото)",
    description:
      "Найпопулярніший пакет — ідеальний для відтворення спогадів з більшою кількістю креативних рішень.",
    duration: "Відео: 1,5–2 хвилини",
    style: "Стиль відео: прості анімації залежно від сцени зображення",
    audio: "Аудіо: індивідуально підібрана музика (без голосу)",
    fixes: "Правки: 2",
    terms:
      "Термін виконання: 5 днів або 24–48 годин (Express, за додаткову плату)",
  },
  {
    img: Crown,
    title: "Пакет Premium",
    quantity: "20–30 фотографій",
    oldPrice: "3999 гривень",
    currentPrice: "150 гривень (за 1 фото)",
    description:
      "Повна пропозиція для детальної та персоналізованої історії найвищої якості.",
    duration: "Відео: 2,5–3,5 хвилини",
    style: "Стиль відео: прості анімації залежно від сцени зображення",
    audio: "Аудіо: індивідуально підібрана музика (без голосу)",
    fixes: "Правки: 3",
    terms:
      "Термін виконання: 5 днів або 24–48 годин (Express, за додаткову плату)",
  },
];

export const Packages = () => {
  const { setIsModal } = useModalContext();

  return (
    <div className="mt-10" id="packages">
      <div className="text-center">
        <div className="text-[22px] uppercase sm:text-4xl lg:text-3xl font-bold">
          Пакети кольоризації та реставрації фотографій
        </div>
        <div className="text-[16px] sm:text-[20px] font-medium mt-1">
          Ми перетворюємо старі фотографії на професійні відео завдяки
          високоякісній кольоризації та експертній реставрації. Обери пакет, що
          відповідає кількості твоїх фотографій, і почни повертати життя своїм
          дорогоцінним спогадам.
        </div>
      </div>
      <div className="mt-4 text-center bg-main-gradient rounded-lg p-3">
        <div className="flex justify-center items-center">
          <div>
            <Present className="h-6 w-6" />
          </div>
          <div className="ml-1 font-semibold text-xl">Стартова пропозиція</div>
        </div>
        <div className="font-[18px] font-medium">
          Знижка 30% для перших клієнтів
        </div>
        <div className="font-[16px] mt-2">
          ⚠️ <span className="font-semibold">Увага:</span> пакети не включають
          реставрацію та кольоризацію зображень. Ці послуги оплачуються
          додатково.
        </div>
      </div>
      <div className="mt-6 flex flex-wrap gap-6 md:gap-10 justify-center">
        {options.map((option, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-serenade rounded-lg border-big-stone min-w-[280px] md:min-w-[250px] lg:min-w-[280px] :mt-4 p-4 shadow-lg md:max-w-[280px] xl:max-w-[310px] 2xl:max-w-[350px]"
          >
            <div>
              <option.img className="h-10 w-10 svg" />
            </div>
            <div className="font-semibold text-2xl mt-2">{option.title}</div>
            <div>{option.quantity}</div>
            <div className="font-medium  text-xl">{option.price}</div>
            <div className="text-[18px] text-center mt-2 min-h-[30px]">
              {option.duration}
            </div>
            <div className="mt-6">
              <button
                className="rounded-lg bg-big-stone text-white px-6 py-2 text-xl cursor-pointer
                transition-transform duration-300 ease-in-out
                hover:scale-105"
                onClick={() => setIsModal(true)}
              >
                Замовити зараз
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-2 md:mt-6 flex justify-between flex-wrap">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-serenade rounded-lg border-big-stone  mt-4 p-4 shadow-lg md:max-w-[280px] xl:max-w-[310px] 2xl:max-w-[350px]"
          >
            <div>
              <item.img className="h-10 w-10 svg" />
            </div>
            <div className="font-semibold text-2xl mt-2">{item.title}</div>
            <div>{item.quantity}</div>
            <div className="flex mt-2 items-end">
              {/* <div className="font-medium line-through text-xl">
                {item.oldPrice}
              </div> */}
              <div className="font-semibold text-2xl ml-2">
                {item.currentPrice}
              </div>
            </div>
            <div className="text-[16px] text-center min-h-[75px] mt-2">
              {item.description}
            </div>
            <div className="text-[18px] mt-2">
              <ul className="list-disc ml-4">
                <li>{item.duration}</li>
                <li>{item.style}</li>
                <li>{item.audio}</li>
                <li>{item.fixes}</li>
                <li>{item.terms}</li>
              </ul>
            </div>
            <div className="mt-6">
              <button
                className="rounded-lg bg-big-stone text-white px-6 py-2 text-xl cursor-pointer
                transition-transform duration-300 ease-in-out
                hover:scale-105"
                onClick={() => setIsModal(true)}
              >
                Замовити зараз
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
