import DataTable from "./components/DataTable";
import Navbar from "./components/Navbar";

export default async function Home() {
  const response = await fetch("https://fakestoreapi.com/products");
  const data = await response.json();

  return (
    <div>
      <Navbar />
      <DataTable data={data} />
    </div>
  );
}
