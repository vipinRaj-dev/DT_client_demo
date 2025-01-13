import { Player } from "@lottiefiles/react-lottie-player";

const NetworkError = () => {
  return (
    <div className="w-full h-[90vh] absolute z-50  bg-white flex justify-center items-center">
      <div className="w-96 ">
        <Player src={"/Lottie/networkError.json"} loop autoplay className="" />
      </div>
    </div>
  );
};

export default NetworkError;
