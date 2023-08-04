import { useEffect, useState } from "react";

interface ImplicitGrantHookResult {
  requestUrl: string | null;
  accessToken: string | null;
}

const useImplicitGrant = (): ImplicitGrantHookResult => {
  const [requestUrl, setRequestUrl] = useState<string | null>(null);
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const clientId = import.meta.env.VITE_CLIENT_ID;
  const redirectUri = import.meta.env.VITE_REDIRECT_URI;

  useEffect(() => {
    const generateRandomString = (length: number): string => {
      let text = "";
      const possible =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

      for (let i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
      }
      return text;
    };

    const getRequestUrl = (clientId: string, redirectUri: string): string => {
      const state = generateRandomString(16);
      localStorage.setItem("state", state);
      const scope = "playlist-modify-private playlist-read-private";
      let url = "https://accounts.spotify.com/authorize";
      url += "?response_type=token";
      url += "&client_id=" + encodeURIComponent(clientId);
      url += "&scope=" + encodeURIComponent(scope);
      url += "&redirect_uri=" + encodeURIComponent(redirectUri);
      url += "&state=" + encodeURIComponent(state);

      return url;
    };

    const url = getRequestUrl(clientId, redirectUri);
    setRequestUrl(url);
  }, [clientId, redirectUri]);

  useEffect(() => {
    if (accessToken === null) {
      const hash = window.location.hash.split("#")[1];
      const params = new URLSearchParams(hash);
      const paramsAccessToken = params.get("access_token");
      if (paramsAccessToken) {
        localStorage.setItem("access_token", paramsAccessToken);
        setAccessToken(paramsAccessToken);
        window.history.replaceState(
          {},
          document.title,
          window.location.pathname,
        );
      }
    }
  }, [accessToken]);

  return { requestUrl, accessToken };
};

export default useImplicitGrant;
