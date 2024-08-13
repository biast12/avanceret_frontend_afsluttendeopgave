"use client"

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const nav = ({ page }: { page: number }) => {
  const [animate, setAnimate] = useState(false);

  const handleClick = () => {
    setAnimate(true);
    setTimeout(() => setAnimate(false), 100)
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
      <Link href="/whatwedo" onClick={handleClick}>
        <figure>
          <Image
            src="/images/navigation/nav-1.png"
            alt="nav-1"
            width={60}
            height={0}
          />
        </figure>
      </Link>
      <Link href="/maintainable" onClick={handleClick}>
        <figure>
          <Image
            src="/images/navigation/nav-2.png"
            alt="nav-2"
            width={60}
            height={0}
          />
        </figure>
      </Link>

      <Link href="/getintouch" onClick={handleClick}>
        <figure>
          <Image
            src="/images/navigation/nav-3.png"
            alt="nav-3"
            width={60}
            height={0}
          />
        </figure>
      </Link>
      <div></div>
      {page == 1 ? (
        <figure className={animate ? "bounce" : ""}>
          <Image
            src="/images/navigation/nav-1-where.png"
            alt="nav-1-where"
            width={60}
            height={0}
          />
        </figure>
      ) : (
        <div></div>
      )}
      {page == 2 ? (
        <figure className={animate ? "bounce" : ""}>
          <Image
            src="/images/navigation/nav-2-where.png"
            alt="nav-2-where"
            width={60}
            height={0}
          />
        </figure>
      ) : (
        <div></div>
      )}
      {page == 3 ? (
        <figure className={animate ? "bounce" : ""}>
          <Image
            src="/images/navigation/nav-3-where.png"
            alt="nav-3-where"
            width={60}
            height={0}
          />
        </figure>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default nav;