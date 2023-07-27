import React, { useState } from 'react'
import styles from "./card.module.scss";

const Card = ({ title, imageUrl,price, onPlus, onFavorite}) => {

  const [isLiked, setIsLiked] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const cartToggleChecked = () => {
    onPlus({ title, imageUrl, price });
    setIsChecked(!isChecked);
  };
  const cartToggleLiked = () => {
    onFavorite({ title, imageUrl, price });
    setIsLiked(!isLiked);
  };



  return (
    <div className="flex flex-col w-full h-full py-5 px-9 border-background-opacity border border-solid rounded-xl">
      <img
        className="absolute cursor-pointer z-0"
        onClick={cartToggleLiked}
        src={isLiked ? "/assets/liked.svg" : "/assets/unliked.svg"}
        width={32}
        height={32}
        alt=""
      />
      <img width={133} height={112} src={imageUrl} alt="" />
      <div className="block ">
        <p className="">{title}</p>
        <div className="flex justify-between mt-4">
          <div className="">
            <p className="font-light text-xs ">Цена:</p>
            <p className="text-sm font-bold">{price} руб.</p>
          </div>
          <img
            className="cursor-pointer"
            onClick={cartToggleChecked}
            src={isChecked ? "/assets/btn-checked.svg" : "/assets/btn-plus.svg"}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Card;