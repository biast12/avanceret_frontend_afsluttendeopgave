import Image from "next/image";
import Link from "next/link";

const nav = ({page}: {page: PageType}) => {

  console.log(page);
  return (
    <div
      className={`grid gap-4 absolute top-[-60px] ${
        page > 0 ? "grid-cols-4 left-[-57px]" : "grid-cols-3"
      }`}
    >
      {page > 0 && (
        <Link href="/">
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
      <Link href="/whatwedo">
        <figure>
          <Image
            src="/images/navigation/nav-1.png"
            alt="nav-1"
            width={60}
            height={60}
          />
        </figure>
      </Link>
      {page > 1 && ()}
      <Link href="/maintainable">
        <figure>
          <Image
            src="/images/navigation/nav-2.png"
            alt="nav-2"
            width={60}
            height={60}
          />
        </figure>
      </Link>
      {page > 2 && ()}
      <Link href="/getintouch">
        <figure>
          <Image
            src="/images/navigation/nav-3.png"
            alt="nav-3"
            width={60}
            height={60}
          />
        </figure>
      </Link>
      {page > 3 && ()}
    </div>
  );
};

export default nav;
