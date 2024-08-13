import Image from "next/image";
import Nav from "@/components/nav";

const page = () => {
  const currentPage: number = 2;
  return (
    <div className="bg-sky-200">
      <div className="flex justify-center items-center min-h-screen pt-10">
        <div className="grid grid-cols-3 gap-4">
          <div className="relative flex justify-center">
            <figure>
              <Image src="/images/front-maintainable-link.png" alt="maintainable" width={250} height={0} />
            </figure>
            <Nav page={currentPage} />
          </div>
          <div className="col-span-2 relative">
            <h1 className="text-3xl font-bold">
              Keeping your all <span className="text-sky-600">upto date</span> ...
            </h1>
            <p className="text-sm font-bold mt-4 flex-wrap">
              At our company, we prioritize your digital needs with unwavering dedication.
              <br />
              Our expert team is here for you 24/7, ensuring seamless support and
              <br />
              guidance. We offer tailored solutions to meet your unique requirements,
              <br />
              fostering yourgrowth and success online.
            </p>
            <p className="text-sm font-bold mt-4">
              With cutting-edge technology and personalized
              <br />
              care, we transform your ideas into reality. Experience reliability and
              <br />
              innovation.like never before.
            </p>
            <p className="text-sm font-bold mt-4">
              Partner with us and see how we care for your business as if it were our
              <br />
              own. Your satisfaction is our top priority, and your success is our mission.
              <br />
              Trust us to be there for you every step of the way.
            </p>
            <div className="absolute bottom-0 right-0 bg-black text-white">
              <p className="mx-3 rounded font-bold text-2xl">MaintainAble</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
