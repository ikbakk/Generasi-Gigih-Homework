export interface ContextProviderProps {
  children: React.ReactNode;
}

export interface ContextValue {
  requestUrl: string | null;
  isLoggedIn: boolean;
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
}
