import {Countdown} from "./countdown";

export default function Home() {
  return (
    <div className="w-screen h-screen flex flex-col gap-10 justify-center items-center px-4">
      <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-6xl uppercase">missed your schedule?</h1>
      <Countdown />
    </div>
  );
}
