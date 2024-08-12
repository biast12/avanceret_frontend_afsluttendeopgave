import Image from "next/image";
import Nav from "@/components/nav";

const page = () => {
  const currentPage: PageType = 3;
  return (
    <div className="bg-orange-300">
      <div className="flex justify-center items-center min-h-screen">
        <div className="grid grid-cols-3 gap-4">
          <div className="relative flex justify-center">
            <figure>
              <Image
                src="/images/front-getintouch-link.png"
                alt="get in touch"
                width={250}
                height={0}
              />
            </figure>
            <Nav page={currentPage} />
          </div>
          <div className="relative flex justify-center"></div>
        </div>
      </div>
    </div>
  );
};

export default page;
