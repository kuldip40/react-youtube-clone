import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./_loginScreen.scss";
import { login } from "../../../redux/actions/auth.action";
import { useHistory } from "react-router-dom";

const LoginScreen = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const { accessToken } = useSelector((state) => state.auth);

  useEffect(() => {
    if (accessToken) {
      history.push("/");
    }
  }, [accessToken, history]);

  const handleLogin = () => {
    dispatch(login());
  };

  return (
    <div className="login">
      <div className="login__container">
        <img src="http://pngimg.com/uploads/youtube/youtube_PNG2.png" alt="" />
        <button onClick={handleLogin}>Login With Google</button>
        <p>This project is create using YOUTUBE DATA API</p>
      </div>
    </div>
  );
};

export default LoginScreen;
