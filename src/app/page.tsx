"use client"
import AutoCompleteComponent from "./components/AutoCompleteComponent/AutoCompleteComponent";
import ClockComponent from "./components/ClockComponent/ClockComponent";
import IZone from "./utils/types/zones";
const fakeData = [
  { id: 1, name: "The Shawshank Redemption" },
  { id: 2, name: "The  Redemption" },
];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col  p-24">
      <h1 className="text-8xl font-bold text-center text-white">
        World timezone app
      </h1>
      <div className="pt-8">
        <AutoCompleteComponent options={fakeData} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-12">
        <ClockComponent  />
        <ClockComponent  />
        <ClockComponent  />
        <ClockComponent  />
      </div>
    </main>
  );
}
