import React, { lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Home = lazy(() => import("./pages/Home.jsx"));
const Groups = lazy(() => import("./pages/Groups.jsx"));
const Login = lazy(() => import("./pages/Login.jsx"));
const Chat = lazy(() => import("./pages/Chat.jsx"));

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element=<Home />></Route>
        <Route path="/groups" element=<Groups />></Route>
        <Route path="/chat/:chatId" element=<Chat />></Route>
        <Route path="/login" element=<Login />></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
