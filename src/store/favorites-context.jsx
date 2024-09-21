import { createContext, useState } from "react";

const FavoritesContext = createContext({
  favorites: [],
  totalFavorites: 0,
  addFavorites: (favoriteMeetup) => {},
  removeFavorites: (meetupId) => {},
  itemIsFavorites: (meetupId) => {},
});

export function FavoritesContextProvider({ children }) {
  const [userFavorites, setUserFavorites] = useState([]);

  function addFavoritesHandler(favoriteMeetup) {
    // setUserFavorites((prevFavorites) => [
    //  ...prevFavorites,
    //   favoriteMeetup,
    // ]);
    setUserFavorites((preUserFavorites) => {
      return preUserFavorites.concat(favoriteMeetup);
    });
    // update total favorites
    // setUserFavorites((prevFavorites) => prevFavorites.length);
  }
  function removeFavoritesHandler(meetupId) {
    setUserFavorites((prevFavorites) => {
      return prevFavorites.filter((meetup) => meetup.id !== meetupId);
    });
  }
  function itemIsFavoritesHandler(meetupId) {
    return userFavorites.some((meetup) => meetup.id === meetupId);
  }

  const context = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
    addFavorites: addFavoritesHandler,
    removeFavorites: removeFavoritesHandler,
    itemIsFavorites: itemIsFavoritesHandler,
  };
  return (
    <FavoritesContext.Provider value={context}>
      {children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesContext;
