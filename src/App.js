import react from "react";
import Random from "./Random";
import Tag from "./Tag";

const App = () => {
  return (
    <div className="flex flex-col w-full h-screen relative overflow-x-hidden items-center bg-blue-300">
      <h1 className="bg-white text-black rounded-lg w-11/12 text-center mt-[40px] px-10 py-2 text-3xl font-bold ">RANDOM GIFS</h1>
      <div className="flex flex-col w-full items-center">
        <Random />
        <Tag />
      </div>
    </div>
  )
}

export default App
