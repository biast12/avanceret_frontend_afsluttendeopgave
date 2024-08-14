"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import useFetch from "@/hook/useFetch";

const Nav = ({ page }: { page: number }) => {
  const [animate, setAnimate] = useState(false);

  const { data, error } = useFetch('http://localhost:3000/api/data/nav');

  if (error) return <div>Error: {error.message}</div>;

  const handleClick = () => {
    setAnimate(true);
    setTimeout(() => setAnimate(false), 100);
  };

  return (
    <div
      className={`grid gap-x-4 absolute top-[-85px] ${
        page > 0 ? "grid-cols-4 left-[-57px]" : "grid-cols-3"
      }`}
    >
      {page > 0 && (
        <Link href="/" onClick={handleClick}>
          <figure>
            <Image
              src="/images/navigation/back.png"
              alt="back"
              width={60}
              height={60}
            />
          </figure>
        </Link>
      )}
      {data && data.map((item: any) => (
        <Link key={item._id} href={`/${item.href}`} onClick={handleClick}>
          <figure>
            <Image
              src={`/images/navigation/${item.src}.png`}
              alt={item.src}
              width={60}
              height={60}
            />
          </figure>
        </Link>
      ))}
      <div></div>
      {Array.from({ length: 3 }, (_, index) =>
        page === index + 1 ? (
          <figure key={index} className={animate ? "bounce" : ""}>
            <Image
              src={`/images/navigation/nav-${index + 1}-where.png`}
              alt={`nav-${index + 1}-where`}
              width={60}
              height={60}
            />
          </figure>
        ) : (
          <div key={index}></div>
        )
      )}
    </div>
  );
};

export default Nav;