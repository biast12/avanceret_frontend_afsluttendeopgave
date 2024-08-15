"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import simpleFetch from "@/hooks/fetch";

const Nav = ({ page }: NavProps) => {
  const [data, setData] = useState<DataNavItem[] | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    (async () => {
      const { data, error } = await simpleFetch<DataItem[]>(
        process.env.NEXT_PUBLIC_HOST + "/api/data/nav"
      );

      setData(data);
      setError(error);
    })();
  }, []);

  const handleClick = useCallback(() => {
    setAnimate(true);
    setTimeout(() => setAnimate(false), 100);
  }, []);

  if (error) return <div>Error: {error.message}</div>;

  const renderNavItem = (item: DataNavItem, index: number) => (
    <Link key={index} href={`/${item.href}`} onClick={handleClick}>
      <figure>
        <Image src={`/images/navigation/${item.src}.png`} alt={item.src} width={60} height={60} />
      </figure>
    </Link>
  );

  const renderPageIndicator = (index: number) =>
    page === index + 1 ? (
      <figure key={index} className={animate ? "bounce" : ""}>
        <Image src={`/images/navigation/nav-${index + 1}-where.png`} alt={`nav-${index + 1}-where`} width={60} height={60} />
      </figure>
    ) : (
      <div key={index}></div>
    );

  return (
    <div className={`grid gap-x-4 absolute top-[-85px] ${page > 0 ? "grid-cols-4 left-[-57px]" : "grid-cols-3"}`}>
      {page > 0 && (
        <Link href="/" onClick={handleClick}>
          <figure>
            <Image src="/images/navigation/back.png" alt="back" width={60} height={60} />
          </figure>
        </Link>
      )}
      {data && data.map((item, index) => renderNavItem(item, index))}
      <div></div>
      {Array.from({ length: 3 }, (_, index) => renderPageIndicator(index))}
    </div>
  );
};

export default Nav;
