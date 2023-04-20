import React from 'react'
import styles from './Header.module.scss'

const Header = ({cartToggleHandle}) => {
  return (
    <div className="mt-10 w-full h-[50px]">
      <div className="flex justify-between border border-solid border-black py-5 px-5">
        <div className="logo__section flex gap-5 items-center">
          <img src="/assets/logo.png" width={40} height={40} alt="" />
          <div>
            <b>REACT SNEAKERS</b>
            <p>Магазин лучших кроссовок</p>
          </div>
        </div>
        <div className="shopping__total flex gap-3 items-center">
          <div
            className="shopping__text flex items-center gap-4 cursor-pointer"
            onClick={cartToggleHandle}
          >
            <img src="/assets/cart.svg" alt="" />
            <p>1206 rub.</p>
          </div>
          <div className="shopping__favourite"></div>
          <div className="shopping__user">
            <img
              width={20}
              height={20}
              src="/assets/user.svg"
              alt="Login icon"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;