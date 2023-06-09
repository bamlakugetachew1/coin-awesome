import { useState, createContext } from "react";
const CoinContext = createContext();
export const CoinProvider = ({ children }) => {
  let [page, setPage] = useState(1);
  const incrementpage = (page) => {
    return setPage(page);
  };

  return (
    <CoinContext.Provider
      value={{
        page,
        incrementpage,
      }}
    >
      {children}
    </CoinContext.Provider>
  );
};

export default CoinContext;
