import AutoCompleteComponent from "./components/AutoCompleteComponent/AutoCompleteComponent";



const fakeData = [
  { name: "The Shawshank Redemption" },

];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col  p-24">
      <h1 className="text-6xl font-bold text-center text-white">World timezone app</h1>
      <AutoCompleteComponent options={fakeData}  />
    </main>
  );
}
