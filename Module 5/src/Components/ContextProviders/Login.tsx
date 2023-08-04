import { useEffect, useState } from "react";
import { LoginContext } from "../../Context";
import useImplicitGrant from "../../Hooks/useImplicitGrant";
import { ContextProviderProps } from "../../Types/ContextTypes";

const LoginContextProvider = ({ children }: ContextProviderProps) => {
  const localAccessToken = localStorage.getItem("access_token");
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const { requestUrl } = useImplicitGrant();

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

export default LoginContextProvider;
