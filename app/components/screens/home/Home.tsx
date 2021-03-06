import React from "react";
import Head from "next/head";
import { RootState } from "../../../store/store";
import { useSelector } from "react-redux";

import Input from "../../basket/Input";
import Item from "../../basket/Item";

export default function Home() {
  const basket = useSelector((state: RootState) => state.basket);

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="container mx-auto container__basket">
        <Input />
        <div className="flex flex-col bg-white shadow-xl">
          <div className="flex-1 py-6 overflow-y-auto px-4 sm:px-6">
            <div className="flex items-start justify-between"></div>

            <div className="mt-8">
              <div className="flow-root">
                <ul role="list" className="-my-6 divide-y divide-gray-200">
                  {basket.items &&
                    basket.items.map((item) => (
                      <Item key={item.id} {...item} />
                    ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
            <div className="flex justify-between text-base font-medium text-gray-900">
              <p>Subtotal</p>
              <p>${basket.total}</p>
            </div>
            <p className="mt-0.5 text-sm text-gray-500">
              Shipping and taxes calculated at checkout.
            </p>
            <div className="mt-6">
              <a
                href="#"
                className="flex justify-center items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
              >
                Checkout
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
