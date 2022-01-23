import React, { useEffect } from "react";
import Image from "next/image";

import { increment, decrement, remove } from "../../store/basket/basket.slice";
import { useDispatch } from "react-redux";

export default function Item(item) {
  const dispatch = useDispatch();

  return (
    <li className="py-6 flex">
      <div className="flex-shrink-0 w-24 h-24 border border-gray-200 rounded-md overflow-hidden">
        <Image
          width="100%"
          height="100%"
          src={item.imageUrl}
          alt="Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt."
          className="w-full h-full object-center object-cover"
        />
      </div>

      <div className="ml-4 flex-1 flex flex-col">
        <div>
          <div className="flex justify-between text-base font-medium text-gray-900">
            <h3>
              <a href="#">{item.title}</a>
            </h3>
            <p className="ml-4">${item.totalPrice}</p>
          </div>
          <p className="mt-1 text-sm text-gray-500">{item.color}</p>
        </div>
        <div className="flex-1 flex items-end justify-between text-sm">
          <p className="text-gray-500">Qty {item.qty}</p>

          <div className="">
            <button
              type="button"
              className="font-medium text-indigo-600 bg-blue-600 text-white py-2 mb-2 px-2"
              onClick={() => dispatch(increment(item.id))}
            >
              increment
            </button>
            <br />
            <button
              type="button"
              className="font-medium text-indigo-600 bg-yellow-600 text-white py-2 mb-2 px-2"
              onClick={() => dispatch(decrement(item.id))}
            >
              decrement
            </button>
            <br />
            <button
              type="button"
              className="font-medium text-indigo-600 bg-red-600 text-white py-2 mb-2 px-2"
              onClick={() =>
                dispatch(
                  remove({
                    id: item.id,
                    totalPrice: item.totalPrice,
                  })
                )
              }
            >
              delete
            </button>
          </div>
        </div>
      </div>
    </li>
  );
}
