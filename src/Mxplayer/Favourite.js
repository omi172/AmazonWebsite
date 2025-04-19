import React, { useState } from "react";
import { MdFavorite } from "react-icons/md";
import { FiHeart } from "react-icons/fi";
import MyCard from "./MyCard";

export default function Favourite() {
  const [favorites, setFavorites] = useState([]);
  const [likedItems, setLikedItems] = useState({}); // To track which card is liked

  const cards = [
    { id: 1, title: "PlayGround" },
    { id: 2, title: "Our Secret" },
    { id: 3, title: "Girl Friend" },
  ];

  const handleLikeClick = (id, title) => {
    setLikedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));

    setFavorites((prevFavs) => {
      if (prevFavs.includes(title)) {
        return prevFavs.filter((item) => item !== title);
      } else {
        return [...prevFavs, title];
      }
    });
  };

  return (
    <div>
      <h1>All Cards</h1>
      <div style={{ display: "flex", gap: 20 }}>
        {cards.map((card) => (
          <MyCard
            key={card.id}
            title={card.title}
            isLiked={likedItems[card.id]}
            onLikeClick={() => handleLikeClick(card.id, card.title)}
          />
        ))}
      </div>

      <h2>❤️ Favorite List</h2>
      {favorites.length > 0 ? (
        <ul>
          {favorites.map((fav, index) => (
            <li key={index}>{fav}</li>
          ))}
        </ul>
      ) : (
        <p>No favorites yet!</p>
      )}
    </div>
  );
}
