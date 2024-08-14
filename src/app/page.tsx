"use client";

import Image from "next/image";
import Link from "next/link";
import Nav from "@/components/Nav";
import useFetch from "@/hook/useFetch";

export default function Home() {
  const { data, error } = useFetch("http://localhost:3000/api/data/homepage");

  if (error) return <div>Error: {error.message}</div>;

  return (
    <main className="bg-gradient-to-b from-zinc-50 to-cyan-200">
      <div className="flex justify-center items-center min-h-screen pt-10">
        <div className="grid grid-cols-3 gap-4">
          {data &&
            data.map((item: any, index: number) => (
              <div key={item._id} className="relative flex justify-center">
                {index === 0 && <Nav page={data.currentPage} />}
                {index === 2 && (
                  <Link href="/">
                    <figure className="absolute top-[-50px] left-1/2">
                      <Image
                        src="/images/logo/logo-final.png"
                        alt="logo-final"
                        width={150}
                        height={0}
                      />
                    </figure>
                  </Link>
                )}
                <Link href={`/${item.href}`}>
                  <figure>
                    <Image
                      src={`/images/${item.src}.png`}
                      alt={item.href}
                      width={250}
                      height={0}
                    />
                  </figure>
                </Link>
                {index === 2 && (
                  <div className="absolute bottom-[-30px] bg-black text-white">
                    <p className="mx-6 rounded font-bold">
                      And yet... more to come
                    </p>
                  </div>
                )}
              </div>
            ))}
        </div>
      </div>
    </main>
  );
}
