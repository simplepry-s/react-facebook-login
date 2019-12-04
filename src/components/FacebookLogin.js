import React, { useState } from "react";
import FacebookLoginBtn from "react-facebook-login";

const FacebookLogin = () => {
  const [auth, setAuth] = useState(false);
  const [name, setName] = useState("name");

  const responeFacebook = res => {
    if (res) {
      const { name } = res;
      setAuth(true);
      setName(name);
    }
  };

  const noAuth = () => {
    return (
      <div>
        <FacebookLoginBtn
          appId="your app id"
          autoLoad={true}
          fields="name"
          callback={res => responeFacebook(res)}
        />
      </div>
    );
  };

  const isAuth = () => {
    return <div>Hello {name} you are logged in</div>;
  };

  const renderInfo = () => {
    return auth ? isAuth() : noAuth();
  };
  return <div>{renderInfo()}</div>;
};

export default FacebookLogin;
