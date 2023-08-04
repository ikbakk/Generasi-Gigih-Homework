import { AiOutlineLeft } from "react-icons/ai";
import reactIcon from "../../assets/react.svg";
import { useContext } from "react";
import { LoginContext } from "../../Context/LoginContext";

const Header = () => {
  const { isLoggedIn, requestUrl } = useContext(LoginContext);

  const handleLogin = () => {
    if (!isLoggedIn) {
      location.href = requestUrl!;
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("access_token");
    localStorage.setItem("isLoggedIn", "false");
    location.href = "/";
  };

  const LoginButton = () => {
    return (
      <>
        {isLoggedIn ? (
          <button
            onClick={handleLogout}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-black/70 p-1 hover:bg-white"
          >
            <img className="object-cover" src={reactIcon} />
          </button>
        ) : (
          <button
            onClick={handleLogin}
            className="rounded-full px-3 py-1 font-semibold text-white hover:bg-primaryWhite hover:text-primaryBlack active:scale-95"
          >
            Login
          </button>
        )}
      </>
    );
  };

  return (
    <div className="flex w-full items-center justify-between">
      <button className="group rounded-full bg-black/70 p-1">
        <AiOutlineLeft className="text-2xl text-primaryWhite group-hover:text-white" />
      </button>
      <div className="flex items-center gap-2">
        <button className="rounded-full bg-black/70 px-3 py-2 font-semibold text-primaryWhite hover:text-white">
          Install App
        </button>
        <LoginButton />
      </div>
    </div>
  );
};

export default Header;
