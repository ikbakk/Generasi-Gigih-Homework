import { useState, useEffect } from "react";

interface SpotifyPKCEResponse {
  authorizationUrl: string;
  accessToken: string;
}

const useSpotifyPKCE = (): SpotifyPKCEResponse => {
  const [authorizationUrl, setAuthorizationUrl] = useState("");
  const [accessToken, setAccessToken] = useState("");

  const clientId = import.meta.env.VITE_CLIENT_ID;
  const redirectUri = import.meta.env.VITE_REDIRECT_URI;

  useEffect(() => {
    function generateRandomString(length: number) {
      let text = "";
      let possible =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

      for (let i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
      }
      return text;
    }

    async function generateCodeChallenge(codeVerifier: string) {
      function base64encode(string: ArrayBuffer) {
        return btoa(String.fromCharCode(...new Uint8Array(string)))
          .replace(/\+/g, "-")
          .replace(/\//g, "_")
          .replace(/=+$/, "");
      }

      const encoder = new TextEncoder();
      const data = encoder.encode(codeVerifier);
      const digest = await window.crypto.subtle.digest("SHA-256", data);

      return base64encode(digest);
    }

    let codeVerifier = generateRandomString(128);

    generateCodeChallenge(codeVerifier).then((codeChallenge) => {
      let state = generateRandomString(16);
      let scope = "user-read-private user-read-email";

      localStorage.setItem("code_verifier", codeVerifier);

      let args = new URLSearchParams({
        response_type: "code",
        client_id: clientId,
        scope: scope,
        redirect_uri: redirectUri,
        state: state,
        code_challenge_method: "S256",
        code_challenge: codeChallenge,
      });

      setAuthorizationUrl("https://accounts.spotify.com/authorize?" + args);
    });
  }, [clientId, redirectUri]);

  return {
    authorizationUrl,
    accessToken,
  };
};

export default useSpotifyPKCE;
