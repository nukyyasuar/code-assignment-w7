"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { getDetailData } from "./getDetailData";
import Image from "next/image";

export default function DetailData() {
  const params = useParams();
  const id = params.id;
  const [data, setData] = useState([]);

  useEffect(() => {
    if (!id) return;

    const fetchData = async () => {
      try {
        const result = await getDetailData(id);
        setData(result);
      } catch (error) {
        console.error("Error fetching detail data:", error);
      }
    };

    fetchData();
  }, [id]);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-2xl">
        <h1 className="text-2xl font-bold text-blue-600 mb-6 border-b pb-3">
          🛒 Product Detail
        </h1>

        <div className="flex flex-col md:flex-row gap-6">
          <div className="shrink-0 flex justify-center">
            {data.image ? (
              <Image
                src={data.image}
                alt="product image"
                width={200}
                height={200}
                className="rounded-lg object-contain border"
              />
            ) : (
              <div className="w-[200px] h-[200px] flex items-center justify-center border rounded-lg bg-gray-100 text-gray-400">
                No Image
              </div>
            )}
          </div>
          <div className="flex-1 space-y-4 text-gray-700">
            <div>
              <p className="font-semibold text-gray-800">ID:</p>
              <p>{data.id}</p>
            </div>
            <div>
              <p className="font-semibold text-gray-800">Title:</p>
              <p>{data.title}</p>
            </div>
            <div>
              <p className="font-semibold text-gray-800">Description:</p>
              <p className="text-sm text-gray-600 leading-relaxed">
                {data.description}
              </p>
            </div>
            <div>
              <p className="font-semibold text-gray-800">Price:</p>
              <p className="text-green-600 font-bold text-lg">${data.price}</p>
            </div>
            <div>
              <p className="font-semibold text-gray-800">Rating:</p>
              <p>
                ⭐ {data.rating?.rate} / 5 ({data.rating?.count} reviews)
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
