import { createContext, useEffect, useState } from "react";
import { ContextProviderProps, ContextValue } from "./LoginContextType";
import useImplicitGrant from "../Hooks/useImplicitGrant";

const LoginContext = createContext<ContextValue>({} as ContextValue);

const LoginContextProvider = ({ children }: ContextProviderProps) => {
  const localAccessToken = localStorage.getItem("access_token");
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const { accessToken, requestUrl } = useImplicitGrant();

  useEffect(() => {
    if (localAccessToken !== null) {
      setIsLoggedIn(true);
      localStorage.setItem("isLoggedIn", JSON.stringify(true));
    } else {
      setIsLoggedIn(false);
      localStorage.setItem("isLoggedIn", JSON.stringify(false));
    }
  }, [localAccessToken]);

  const contextValue = {
    requestUrl,
    isLoggedIn,
    setIsLoggedIn,
  };
  return (
    <LoginContext.Provider value={contextValue}>
      {children}
    </LoginContext.Provider>
  );
};

export { LoginContext, LoginContextProvider };
