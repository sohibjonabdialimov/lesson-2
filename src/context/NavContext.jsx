import { createContext, useState } from "react";

export const NavContext = createContext();

export const NavProvider = ({ children }) => {
  const [nav, setNav] = useState(true);

  return (
    <NavContext.Provider value={{ nav, setNav }}>
      {children}
    </NavContext.Provider>
  );
};


export const EachContext = createContext();

export const EachProvider = ({ children }) => {
  const [each, setEach] = useState(false);

  return (
    <EachContext.Provider value={{ each, setEach }}>
      {children}
    </EachContext.Provider>
  );
};
