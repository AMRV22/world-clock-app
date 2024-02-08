import AutoCompleteComponent from "./components/AutoCompleteComponent/AutoCompleteComponent";

const fakeData = [
  { id: 1, name: "The Shawshank Redemption" },
  { id: 2, name: "The  Redemption" },
];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col  p-24">
      <h1 className="text-6xl font-bold text-center text-white">
        World timezone app
      </h1>
      <div className="pt-8">
        <AutoCompleteComponent options={fakeData} />
      </div>
    </main>
  );
}
