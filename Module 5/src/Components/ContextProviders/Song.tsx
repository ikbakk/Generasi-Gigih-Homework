import { useState } from "react";
import { Track } from "spotify-types";
import { SongContext } from "../../Context";
import { ContextProviderProps } from "../../Types/ContextTypes";

const SongContextProvider = ({ children }: ContextProviderProps) => {
  const [selectedSong, setSelectedSong] = useState<Track>({} as Track);

  const contextValue = {
    selectedSong,
    setSelectedSong,
  };

  return (
    <SongContext.Provider value={contextValue}>{children}</SongContext.Provider>
  );
};

export default SongContextProvider;
