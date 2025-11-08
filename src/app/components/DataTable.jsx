"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function DataTable({ data }) {
  const [favorite, setFavorite] = useState([]);
  const [countFav, setCountFav] = useState(0);

  function handleFavBtn(favData) {
    setFavorite((prev) => {
      if (prev.some((item) => item.id === favData.id)) return prev;
      return [...prev, favData];
    });
  }

  useEffect(() => {
    setCountFav(favorite.length);
  }, [favorite]);

  return (
    <div className="p-6 space-y-8 flex flex-col items-center">
      <h1 className="text-2xl font-bold text-gray-800 border-b pb-2 w-fit">
        🛍️ Products Data
      </h1>
      <div className="overflow-x-auto rounded-lg shadow-md bg-white w-fit">
        <table className="text-sm text-left text-gray-600">
          <thead className="bg-gray-100 text-gray-700 uppercase text-xs">
            <tr>
              <th className="px-6 py-3">Image</th>
              <th className="px-6 py-3">Title</th>
              <th className="px-6 py-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr
                key={item.id}
                className="border-b hover:bg-gray-50 transition-colors"
              >
                <td className="px-6 py-3">
                  <Image
                    src={item.image}
                    alt="product image"
                    width={50}
                    height={50}
                    className="rounded-md object-contain"
                  />
                </td>
                <td className="px-6 py-3 font-medium text-gray-800 truncate max-w-[250px]">
                  {item.title}
                </td>
                <td className="px-6 py-3 flex gap-2">
                  <Link href={`/products/${item.id}`}>
                    <button className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
                      View
                    </button>
                  </Link>
                  <button
                    className="px-3 py-1 bg-pink-500 text-white rounded hover:bg-pink-600 transition"
                    onClick={() => handleFavBtn(item)}
                  >
                    ❤️ Favorite
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div>
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          ❤️ Favorites ({countFav})
        </h2>

        {favorite.length === 0 ? (
          <p className="text-gray-500 italic">No favorite items yet.</p>
        ) : (
          <div className="overflow-x-auto rounded-lg shadow-md bg-white">
            <table className="min-w-full text-sm text-left text-gray-600">
              <thead className="bg-gray-100 text-gray-700 uppercase text-xs">
                <tr>
                  <th className="px-6 py-3">Image</th>
                  <th className="px-6 py-3">Title</th>
                  <th className="px-6 py-3">Action</th>
                </tr>
              </thead>
              <tbody>
                {favorite.map((item) => (
                  <tr
                    key={item.id}
                    className="border-b hover:bg-gray-50 transition-colors"
                  >
                    <td className="px-6 py-3">
                      <Image
                        src={item.image}
                        alt="product image"
                        width={50}
                        height={50}
                        className="rounded-md object-contain"
                      />
                    </td>
                    <td className="px-6 py-3 font-medium text-gray-800 truncate max-w-[250px]">
                      {item.title}
                    </td>
                    <td className="px-6 py-3">
                      <Link href={`/products/${item.id}`}>
                        <button className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
                          View
                        </button>
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
