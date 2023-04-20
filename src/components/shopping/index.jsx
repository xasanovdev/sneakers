import React from 'react'
import styles from './shopping.module.scss'
import { useState } from 'react';



const Shopping = ({ isOpened,cartToggleHandle ,items = [], onRemove }) => {
  return (
    <div
      className={
        isOpened
          ? "absolute w-full bg-background-opacity h-full left-0 top-0 z-20"
          : "hidden absolute w-full bg-background-opacity h-full left-0 top-0"
      }
    >
      <div className="absolute flex flex-col w-[425px] z-10 h-full bg-background-white right-0 p-8 ">
        <div className="shopping__header flex justify-between items-center">
          <h2 className="text-4xl font-semibold"> Корзина</h2>
          <img
            onClick={cartToggleHandle}
            width={50}
            className="cursor-pointer"
            src="/assets/btn-remove.svg"
            alt=""
          />
        </div>
        <div className="shopping__wrapper flex-col flex-1 mt-10 overflow-y-auto px-4">
          {items.length > 0 ? (
            <div className="w-full h-full flex flex-col">
              <div className=''>
                {items.map((item) => (
                  <div className="border border-solid border-black p-5 flex gap-5 mt-7 rounded-lg">
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
                      <span className="text-xs font-semibold">
                        {item.title}
                      </span>
                      <span className="text-xl font-bold">
                        {item.price} руб.
                      </span>
                    </div>
                    <img
                      onClick={() => onRemove(item.id)}
                      className="cursor-pointer"
                      src="/assets/btn-remove.svg"
                      alt="Remove"
                    />
                  </div>
                ))}
              </div>
              <div className="absolute bottom-4 w-[320px] bg-background-white pt-5">
                <ul>
                  <li className="relative flex items-center gap-2 ">
                    <p className="text-xl font-medium">Итого: </p>
                    <div className="relative border-black border border-dashed flex-1 bottom-[-5px] items-end"></div>
                    <p className="text-xl font-semibold">21 498 руб. </p>
                  </li>
                  <li className="relative flex items-center gap-2 ">
                    <p className="text-xl font-medium">Налог 5%: </p>
                    <div className="relative border-black border border-dashed flex-1 bottom-[-5px] items-end"></div>
                    <p className="text-xl font-bold">1074 руб. </p>
                  </li>
                  <li className="relative mt-8">
                    <a
                      className="py-3 inline-block w-full text-center bg-lime-green rounded-lg text-background-white text-xl active:bg-lime-green-dark"
                      href="#"
                    >
                      Оформить заказ
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          ) : (
            <div className="w-full h-full flex flex-col text-center items-center justify-center">
              <img src="/assets/empty-cart.jpg" alt="" />
              <h3 className="mt-5">Корзина пустая</h3>
              <p className="mt2">
                Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.
              </p>
              <a
                onClick={cartToggleHandle}
                className="py-3 mt-10 inline-block w-full text-center bg-lime-green rounded-lg text-background-white text-xl active:bg-lime-green-dark"
                href="#"
              >
                Вернуться назад
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Shopping;
