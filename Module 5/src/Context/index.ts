import { createContext } from "react";
import {
  LoginContextValue,
  OutletContextValue,
  SongContextValue,
} from "../Types/ContextTypes";

const LoginContext = createContext<LoginContextValue>({} as LoginContextValue);
const OutletContext = createContext<OutletContextValue>(
  {} as OutletContextValue,
);
const SongContext = createContext<SongContextValue>({} as SongContextValue);

export { LoginContext, OutletContext, SongContext };
