import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import AllMeetups from "./pages/AllMeetups";
import NewMeetup from "./pages/NewMeetup";
import Favorites from "./pages/Favorites";
import MainNavigation from "./components/layout/MainNavigation";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <Layout>
      {/* <MainNavigation /> */}
      <Routes>
        <Route path="/" element={<AllMeetups />}></Route>
        <Route path="/new-meetup" element={<NewMeetup />}></Route>
        <Route path="/favorites" element={<Favorites />}></Route>
      </Routes>
    </Layout>
  );
}

export default App;
