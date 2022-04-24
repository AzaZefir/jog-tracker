import "./App.css";
import { Header } from "./components/header/Header";
import { Login } from "./components/login/Login";
import { Routes, Route, Navigate } from "react-router-dom";
import { Jogs } from "./components/jogs/Jogs";
import NotFound from "./components/common/notFound/NotFound";
import { Info } from "./components/info/Info";
import { useState } from "react";
import { AuthContext } from "./context/Context";
import { ContactUs } from "./components/contactUs/ContactUs";

function App() {
  const [isAuth, setIsAuth] = useState(false);
  const [dateTo, setDateTo] = useState(0);
  const [dateFrom, setDateFrom] = useState(0);

  return (
    <AuthContext.Provider
      value={{
        isAuth,
        setIsAuth,
      }}
    >
      {isAuth ? (
        <div className="App">
          <Header
            dateTo={dateTo}
            dateFrom={dateFrom}
            setDateFrom={setDateFrom}
            setDateTo={setDateTo}
          />
          <Routes>
            <Route index element={<Jogs />} />

            <Route path="/jogs" element={<Jogs />} />

            <Route path="/info" element={<Info />} />

            <Route path="/contactUs" element={<ContactUs />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      ) : (
        <div>
          <Routes>
            <Route exact path="/login" element={<Login />} />
            <Route path="*" element={<Navigate to="/login" />} />
          </Routes>
        </div>
      )}
    </AuthContext.Provider>
  );
}

export default App;
