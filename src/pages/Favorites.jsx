import React from "react";
import { useContext } from "react";
import FavoritesContext from "../store/favorites-context";
import MeetList from "../components/meets/MeetList";

function Favorites() {
  const favoritesCtx = useContext(FavoritesContext);
  const myfavorites = favoritesCtx.favorites;

  return (
    <div>
      <h1>My Favorites</h1>
      {myfavorites.length === 0 ? (
        <p>You have no favorites meetup yet</p>
      ) : (
        <MeetList meets={myfavorites} />
      )}
    </div>
  );
}

export default Favorites;
