"use client";
import FacebookLogin from "@greatsumini/react-facebook-login";
const Home = () => {
  return (
    <div>
      <FacebookLogin
        appId="1003899417336795"
        onSuccess={(response) => {
          console.log("Login Success!", response);
        }}
        onFail={(error) => {
          console.log("Login Failed!", error);
        }}
        onProfileSuccess={(response) => {
          console.log("Get Profile Success!", response);
        }}
      />
    </div>
  );
};

export default Home;
