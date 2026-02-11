import clsx from "clsx";
import { useModalContext } from "../../context/ModalUseContext";
import { ReactComponent as CloseBtn } from "../../assets/imgs/icons/close.svg";
import "./styled.css";
import { useState } from "react";

export const MainForm = () => {
  const { isModal, setIsModal } = useModalContext();
  const [messanger, setMessanger] = useState("");

  console.log(messanger);

  return (
    <div
      className={clsx(
        isModal ? "flex" : "hidden",
        "fixed inset-0 z-50 bg-bgrnd items-center justify-center p-4",
      )}
      onClick={() => setIsModal(false)}
    >
      <div
        className="w-full max-w-[400px]  bg-big-stone rounded-xl p-10 relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* <div className="flex flex-col items-center">
          <div className="text-white font-bold text-xl">
            Оберіть мессенджер для зв'язку
          </div>
          <div className="flex gap-10 mt-4">
            <Telegram className="h-10 w-10" />
            <Viber className="h-10 w-10" />
          </div>
        </div> */}
        <div
          className="absolute top-[10px] right-[10px] cursor-pointer"
          onClick={() => setIsModal(false)}
        >
          <CloseBtn className="cls-icon" />
        </div>
        <form
          className="text-white mt-4"
          method="post"
          action="https://live-memories-form.dinowaw.site/zakaz.php"
        >
          <div>
            <div className="flex flex-col">
              <label>Повне ім'я *</label>
              <input
                type="text"
                name="name"
                className="bg-smth rounded-md mt-2 p-2"
                placeholder="Марчук Валентина"
                required
              />
            </div>
            <div className="flex flex-col mt-2">
              <label>Телефон *</label>
              <input
                type="text"
                name="phone"
                placeholder="+380951234567"
                className="bg-smth rounded-md mt-2 p-2"
                required
              />
            </div>
          </div>
          <div className="flex flex-col mt-2">
            <label>Пакет</label>
            <select
              defaultValue=""
              name="comment"
              className="bg-smth rounded-md mt-2 p-2"
              required
            >
              <option value="" disabled className="text-white">
                Оберіть пакет
              </option>
              <option value="Реставрація фото (1шт)">Реставрація фото(1шт)</option>
              <option value="Анімація фото (1шт)">Анімація фото(1шт)</option>
              <option value="Пакет Mini">Пакет Mini</option>
              <option value="Пакет Classic">Пакет Classic</option>
              <option value="Пакет Premium">Пакет Premium</option>
            </select>
          </div>
          <div className="mt-2 flex flex-col">
            <label>Мессенджер для зв'язку</label>
            <select
              name="messanger"
              defaultValue=""
              className="bg-smth rounded-md mt-2 p-2"
              onChange={(e) => setMessanger(e.target.value)}
              required
            >
              <option value="" disabled className="text-white">
                Оберіть мессенджер
              </option>
              <option value="Telegram">Telegram</option>
              <option value="Viber">Viber</option>
              <option value="WhatsApp">WhatsApp</option>
            </select>
          </div>
          <div
            className={clsx(
              messanger === "Telegram" ? "flex" : "hidden",
              "flex-col mt-2",
            )}
          >
            <label>Ваш нікнейм в телеграмі</label>
            <input
              type="text"
              name="nickname"
              className="bg-smth rounded-md mt-2 p-2"
              placeholder="@name"
              required={messanger === "Telegram"}
            />
          </div>
          <div className="mt-8 flex justify-center">
            <button
              type="submit"
              className="px-6 py-3 bg-white text-black rounded-xl text-[18px]"
            >
              Залишити заявку
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
