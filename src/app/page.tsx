import Image from "next/image";
import Link from "next/link";
import Nav from "@/components/nav";

export default function Home() {
  const currentPage: number = 0;
  return (
    <main className="bg-gradient-to-b from-zinc-50 to-cyan-200">
      <div className="flex justify-center items-center min-h-screen pt-10">
        <div className="grid grid-cols-3 gap-4">
          <div className="relative flex justify-center">
            <Nav page={currentPage} />
            <Link href="/whatwedo">
              <figure>
                <Image
                  src="/images/front-what-we-do.png"
                  alt="what we do"
                  width={250}
                  height={0}
                />
              </figure>
            </Link>
          </div>
          <div className="flex justify-center">
            <Link href="/maintainable">
              <figure>
                <Image
                  src="/images/front-maintainable.png"
                  alt="maintainable"
                  width={250}
                  height={0}
                />
              </figure>
            </Link>
          </div>
          <div className="relative flex justify-center">
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
            <Link href="/getintouch">
              <figure>
                <Image
                  src="/images/front-get-in-touch.png"
                  alt="get in touch"
                  width={250}
                  height={0}
                />
              </figure>
            </Link>
            <div className="absolute bottom-[-50px] bg-black text-white">
              <p className="mx-6 rounded font-bold">And yet... more to come</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
