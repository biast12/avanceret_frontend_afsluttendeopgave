"use client";

import Image from "next/image";
import Nav from "@/components/Nav";
import useFetch from "@/hook/useFetch";

const page = () => {
  const { data, error } = useFetch("http://localhost:3000/api/data/page1");

  if (error) return <div>Error: {error.message}</div>;

  const replaceBrWithNewLine = (text: string): string => {
    return text.replace(/<br\s*\/?>/gi, "\n");
  };

  const text1 = data && replaceBrWithNewLine(data[0].text1);
  const text2 = data && replaceBrWithNewLine(data[0].text2);
  const text3 = data && replaceBrWithNewLine(data[0].text3);

  return (
    <div className="bg-sky-200">
      {data && (
        <div className="flex justify-center items-center min-h-screen pt-10">
          <div className="grid grid-cols-3 gap-4">
            <div className="relative flex justify-center">
              <figure>
                <Image
                  src={`/images/${data[0].img_src}.png`}
                  alt="what0 we do link"
                  width={250}
                  height={0}
                />
              </figure>
              <Nav page={data[0].currentPage} />
            </div>
            <div className="col-span-2 relative">
              <h1 className="text-3xl font-bold">
                Design is the{" "}
                <span className="text-sky-900">matter of chooice</span> ...
              </h1>
              <p className="text-sm font-bold mt-4 flex-wrap">
                <pre>{text1}</pre>
              </p>
              <p className="text-sm font-bold mt-4">
                <pre>{text2}</pre>
              </p>
              <p className="text-sm font-bold mt-4">
                <pre>{text3}</pre>
              </p>
              <div className="absolute bottom-0 right-0 bg-black text-white">
                <p className="mx-3 rounded font-bold text-2xl">WhatWeDo</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default page;
