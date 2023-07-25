import Header from './components/Header';
import axios from 'axios';
import Shopping from './components/shopping';
import Card from './components/card';
import React, { useEffect, useState } from 'react';
import './App.scss';

function App() {
  const [isOpened, setIsOpened] = useState(false);
  const [items, setItems] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [searchValue, setsearchValue] = useState('');

  const cartToggleHandle = () => {
    setIsOpened(!isOpened);
  };

  useEffect(() => {
    axios
      .get('https://643b94fa70ea0e660296b34a.mockapi.io/sneakers')
      .then((response) => {
        setItems(response.data);
      });
  }, []);

  useEffect(() => {
    axios
      .get('https://643b94fa70ea0e660296b34a.mockapi.io/cart')
      .then((response) => {
        setCartItems(response.data);
      });
  }, []);

  const onAddToCart = (obj) => {
    axios
      .post('https://643b94fa70ea0e660296b34a.mockapi.io/cart', obj)
      .then((response) => {
        setCartItems((prev) => [...prev, response.data]);
      });
  };
  const onRemoveItem = (id) => {
    axios
      .delete(`https://643b94fa70ea0e660296b34a.mockapi.io/cart/${id}`)
      .then(() => {
        setCartItems((prev) => prev.filter((item) => item.id !== id));
      });
  };

  const onFavorites = (obj) => {
    setFavorites((prev) => [...prev, obj]);
    console.log(setFavorites((prev) => [...prev]));
  };
  const onChangeSearchinput = (event) => {
    setsearchValue(event.target.value);
  };

  return (
    <div className="container">
      <Header isOpened={isOpened} cartToggleHandle={cartToggleHandle} />

      <Shopping
        isOpened={isOpened}
        cartToggleHandle={cartToggleHandle}
        items={cartItems}
        onRemove={onRemoveItem}
      />

      <div className="hero__section mt-24 py-20 px-10 border border-solid border-background-opacity">
        <div className="hero__section-title flex justify-between ">
          <h1 className="text-4xl font-extrabold ">
            {searchValue
              ? `Поиск по запросу :"${searchValue}"`
              : 'Все кроссовки'}
          </h1>
          <div className="hero__section-search relative flex gap-4 items-center justify-center border border-solid border-background-opacity">
            <img
              className="cursor-pointer pl-2 border-none outline-none "
              src="/assets/search.svg"
              alt="Search"
            />
            {searchValue && (
              <img
                className="absolute right-0 w-8 h-8  cursor-pointer pl-2 border-none outline-none mr-2"
                src="/assets/btn-remove.svg"
                onClick={() => setsearchValue('')}
                alt="Search"
              />
            )}
            <input
              className="w-[180px]"
              type="text "
              placeholder="Поиск..."
              value={searchValue}
              onChange={onChangeSearchinput}
            />
          </div>
        </div>
        <div className="hero__section-sneakers flex flex-wrap gap-5 mt-8 items-center justify-center">
          {items
            .filter((item) =>
              item.title.toLowerCase().includes(searchValue.toLowerCase())
            )
            .map((item) => (
              <Card
                key={item.imageUrl}
                title={item.title}
                price={item.price}
                imageUrl={item.imageUrl}
                onFavorite={() => onFavorites(item)}
                onPlus={(obj) => onAddToCart(item)}
              />
            ))}
        </div>
      </div>
    </div>
  );
}

export default App;
