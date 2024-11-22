import React from "react";
import DropDown from "./dropdown";

function TableComponent() {
  let dataArr = [
    {
      productName: "Oneplus Nord CE4",
      category: "Phone",
      brand: "One Plus",
      desc: 45,
      price: "$2999",
    },
    {
      productName: "Samsung Note S2",
      category: "Tablet",
      brand: "Samsung",
      desc: 74,
      price: "$7485",
    },
    {
      productName: "Redmi Note 10 Pro",
      category: "Phone",
      brand: "Redmi",
      desc: 96,
      price: "$555",
    },
    {
      productName: "Apple iMac 27",
      category: "PC",
      brand: "Apple",
      desc: 300,
      price: "$1499",
    },
    {
      productName: "PlayStation 5",
      category: "Gaming/Console",
      brand: "Sony",
      desc: 78,
      price: "$799",
    },
  ];

  const items = [
    { id: "apple", label: "Apple", count: 56 },
    { id: "fitbit", label: "Microsoft", count: 16 },
    { id: "razor", label: "Razor", count: 49 },
    { id: "nikon", label: "Nikon", count: 12 },
    { id: "benq", label: "BenQ", count: 74 },
  ];

  const tableHeaders = [
    { id: "productName", label: "Product name" },
    { id: "category", label: "Category" },
    { id: "brand", label: "Brand" },
    { id: "description", label: "Description" },
    { id: "price", label: "Price" },
    { id: "actions", label: <span className="sr-only">Actions</span> },
  ];

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="mx-auto max-w-screen-xl">
        <div className="bg-gray-200 relative shadow-md sm:rounded-lg overflow-hidden">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
            <div className="w-full md:w-1/2">
              <form className="flex items-center">
                <label className="sr-only">Search</label>
                <div className="relative w-full">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg
                      aria-hidden="true"
                      className="w-5 h-5 text-gray-500 dark:text-gray-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        fillRule="evenodd"
                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <input
                    type="text"
                    id="simple-search"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Search Product Name"
                  />
                </div>
              </form>
            </div>
            <div className="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0">
              <DropDown items={items} />
              <DropDown items={items} />
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-300 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  {tableHeaders.map((header) => (
                    <th key={header.id} scope="col" className="px-4 py-3">
                      {header.label}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {dataArr?.map((e, i) => {
                  return (
                    <tr className="border-b dark:border-gray-700" key={i}>
                      <th
                        scope="row"
                        className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {e.productName}
                      </th>
                      <td className="px-4 py-3">{e.category}</td>
                      <td className="px-4 py-3">{e.brand}</td>
                      <td className="px-4 py-3">{e.desc}</td>
                      <td className="px-4 py-3">{e.price}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <nav
            className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-3 md:space-y-0 p-4"
            aria-label="Table navigation"></nav>
        </div>
      </div>
    </section>
  );
}

export default TableComponent;
