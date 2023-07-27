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
  useEffect(
    () => {
      onRemoveItem()
    },
    items
  );
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

      <div className="hero__section py-5 px-6 mt-24 md:py-20 md:px-10 border border-solid border-background-opacity">
        <div className="hero__section-title flex justify-center flex-col md:flex-row md:gap-12">
          <h1 className="text-4xl font-extrabold text-left whitespace-nowrap">
            {searchValue
              ? `Поиск по запросу :"${searchValue}"`
              : 'Все кроссовки'}
          </h1>
          <div className="hero__section-search w-full md:mt-0 mt-4  relative flex gap-4 items-center justify-center border border-solid border-background-opacity">
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
              className="w-full p-2"
              type="text "
              placeholder="Поиск..."
              value={searchValue}
              onChange={onChangeSearchinput}
            />
          </div>
        </div>
        <div className="hero__section-sneakers grid grid-cols-1 gap-6 lg:gap-6 md:gap-4 lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 mt-8 items-center justify-center">
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
                onPlus={() => onAddToCart(item)}
              />
            ))}
        </div>
      </div>
    </div>
  );
}

export default App;
