import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Routes, Route } from "react-router-dom";
import Coins from "./components/Coins";
import Coin from "./routes/Coin";
import Navbar from "./components/Navbar";
import CircularProgress from "@mui/material/CircularProgress";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CoinContext from "./store/coinstore";
const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});
function App() {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const { page } = useContext(CoinContext);
  const url = `https://api.coinstats.app/public/v1/coins?skip=${
    (page - 1) * 10
   }&limit=10`;
  let datapath = window.location.href;
  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setCoins(response.data.coins);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [page]);

  return (
    <ThemeProvider theme={darkTheme}>
      <Navbar />
      {loading && datapath === "http://localhost:3000/" && (
        <div className="flex justify-center mt-10">
          {" "}
          <CircularProgress size={35} />
        </div>
      )}
      <Routes>
        {!loading && <Route path="/" element={<Coins coins={coins} />} />}

        <Route path="/coin" element={<Coin />}>
          <Route path=":coinId" element={<Coin />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
