import { Player } from "@lottiefiles/react-lottie-player";

const Loading = () => {
  return (
    <div className="w-full h-[90vh] absolute z-50 bg-opacity-30 bg-[#719294] flex justify-center items-center">
      <div className="w-64">
        <Player src={"/Lottie/loadinglottie.json"} loop autoplay className="" />
      </div>
    </div>
  );
};

export default Loading;
