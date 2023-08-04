import { createContext, useEffect, useState } from "react";
import { ContextValue, ContextProviderProps } from "./OutletContextType";
import { Track } from "spotify-types";
import useFetchRecommendedSongs from "../Hooks/useFetchRecommendedSongs";

const OutletContext = createContext<ContextValue>({} as ContextValue);

const OutletContextProvider = ({ children }: ContextProviderProps) => {
  const [recommendedSongs, setRecommendedSongs] = useState<Track[]>([]);

  const { recommendedSongs: songs } = useFetchRecommendedSongs();

  useEffect(() => {
    setRecommendedSongs(songs as Track[]);
  }, [songs]);

  const contextValue = {
    recommendedSongs,
  };
  return (
    <OutletContext.Provider value={contextValue}>
      {children}
    </OutletContext.Provider>
  );
};

export { OutletContext, OutletContextProvider };
