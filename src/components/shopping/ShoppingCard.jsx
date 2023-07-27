import React from 'react'

const ShoppingCard = ({item , onRemove}) => {
  return (
    <>
      <div className="flex gap-5 mt-7 p-5 rounded-lg">
        <div className=" w-[70px] h-[70px] shrink-1 grow-1">
          <img
            className="w-full h-full"
            src={item.imageUrl}
            width={70}
            height={70}
            alt="NIke krassovki"
          />
        </div>
        <div className="flex gap-4 flex-col">
          <span className="text-xs font-semibold">{item.title}</span>
          <span className="text-xl font-bold">{item.price} руб.</span>
        </div>
        <img
          onClick={() => onRemove(item.id)}
          width={40}
          height={40}
          className="cursor-pointer"
          src="/assets/btn-remove.svg"
          alt="Remove"
        />
      </div>
    </>
  );
}

export default ShoppingCard