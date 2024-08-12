import Image from "next/image";
import Nav from "@/components/nav";

const page = () => {
  const currentPage: PageType = 3;
  return (
    <div className="bg-orange-300 pt-10">
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
          <div className="col-span-2">
            <h1 className="text-3xl font-bold">
              There for you and{" "}
              <span className="text-orange-800">care for you</span> ...
            </h1>
            <p className="text-sm font-bold mt-4">
              At our company, we prioritize your digital needs with unwavering
              dedication.
              <br />
              Our expert team is here for you 24/7, ensuring seamless support
              and
              <br />
              guidance. We offer tailored solutions to meet your unique
              requirements,
              <br />
              fostering yourgrowth and success online.
            </p>
            <p className="text-sm font-bold mt-8">
              With cutting-edge technology and personalized
              <br />
              care, we transform your ideas into reality. Experience reliability
              and
              <br />
              innovation.like never before. .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
