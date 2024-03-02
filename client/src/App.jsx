import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLoader from "./components/Layout/Loaders.jsx";

const Home = lazy(() => import("./pages/Home.jsx"));
const Groups = lazy(() => import("./pages/Groups.jsx"));
const Login = lazy(() => import("./pages/Login.jsx"));
const Chat = lazy(() => import("./pages/Chat.jsx"));
const ProtectedRoute = lazy(() =>
  import("./components/auth/ProtectedRoute.jsx")
);
const ErrorPage = lazy(() => import("./pages/ErrorPage.jsx"));

let user = true;

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<AppLoader />}>
        <Routes>
          <Route element={<ProtectedRoute user={user} />}>
            <Route path="/" element={<Home />}></Route>
            <Route path="/groups" element=<Groups />></Route>
            <Route path="/chat/:chatId" element=<Chat />></Route>
          </Route>
          <Route
            path="/login"
            element={
              <ProtectedRoute user={!user} redirect={"/"}>
                <Login />
              </ProtectedRoute>
            }
          ></Route>
          <Route path="*" element={<ErrorPage />} />{" "}
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
