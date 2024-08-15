"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Nav from "@/components/Nav";
import simpleFetch from "@/hooks/fetch";
import HighlightWords from "@/services/HighlightWords";

const Page = () => {
  const [data, setData] = useState<DataItem[] | null>(null);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    (async () => {
      const { data, error } = await simpleFetch<DataItem[]>(process.env.NEXT_PUBLIC_HOST + "/api/data/page1");

      setData(data);
      setError(error);
    })();
  }, []);

  if (error) {
    return <div>Error: {error?.message}</div>;
  }

  const renderContent = () => {
    if (!data) return null;

    return (
      <div className="flex justify-center items-center min-h-screen pt-10">
        <div className="grid grid-cols-3 gap-4">
          <div className="relative flex justify-center">
            <figure>
              <Image src={`/images/${data[0].img_src}.png`} alt={data[0].img_src} width={250} height={0} />
            </figure>
            <Nav page={data[0].currentPage} />
          </div>
          <div className="col-span-2 relative">
            <h1 className="text-3xl font-bold">
              <HighlightWords text={data[0].title} className="text-sky-900" />
            </h1>
            <p className="text-sm font-bold whitespace-pre mt-4 flex-wrap">{data[0].text1}</p>
            <p className="text-sm font-bold whitespace-pre mt-4">{data[0].text2}</p>
            <p className="text-sm font-bold whitespace-pre mt-4">{data[0].text3}</p>
            <div className="absolute bottom-0 right-0 bg-black text-white">
              <p className="mx-3 rounded font-bold text-2xl">{data[0].text_bottom}</p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return <div className="bg-sky-200">{renderContent()}</div>;
};

export default Page;
