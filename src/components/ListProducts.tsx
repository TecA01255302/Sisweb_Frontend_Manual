import Filter from "./Filter";
import List from "./List";

export default function ListProducts() {
  let products: Array<{
    category: string;
    price: number;
    stocked: boolean;
    name: string;
  }> = [
    { category: "Frutas", price: 1, stocked: true, name: "Manzana" },
    { category: "Frutas", price: 1, stocked: true, name: "Fruta del dragón" },
    { category: "Frutas", price: 2, stocked: false, name: "Maracuyá" },
    { category: "Verduras", price: 2, stocked: true, name: "Espinaca" },
    { category: "Verduras", price: 4, stocked: false, name: "Calabaza" },
    { category: "Verduras", price: 1, stocked: true, name: "Guisantes" },
  ];
  return (
    <>
      <h1>List Products</h1>
      <p>This is the list of Products</p>

      {/*<div>
            <Filter />
            <List />
        </div>*/}

      <div className="flex flex-col gap-4 my-4">
        <h1 className="text-3xl font-bold text-gray-800 text-left">
          Lista de productos
        </h1>
        <div className="h-4"></div>

        <Filter />

        <div className="flex justify-end items-center">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Add product
          </button>
        </div>

        <List products={products}/> {/*Lo que hay adentro es código js*/}
      </div>
    </>
  );
}
