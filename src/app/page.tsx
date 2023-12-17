"use client";
import FacebookLogin from "@greatsumini/react-facebook-login";
const Home = () => {
  return (
    <div>
      <FacebookLogin
        appId="6900097230106611"
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
