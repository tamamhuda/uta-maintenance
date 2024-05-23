import Hero from "@/components/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <main className=" bg-black-100 flex items-center h-screen justify-center mx-auto flex-col sm:px-10 px-5 overflow-hidden relative ">
      <div className="max-w-7xl w-full">
        <Hero />
      </div>
    </main>
  );
}
