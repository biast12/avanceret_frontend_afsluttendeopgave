"use client";

import { useState } from "react";
import Image from "next/image";
import Nav from "@/components/nav";
import Modal from "@/components/Modal";

const Page = () => {
  const currentPage: number = 3;
  const [showModal, setShowModal] = useState<boolean>(false);
  const [selectedEmail, setSelectedEmail] = useState<string>("");

  const openModal = (email: string) => {
    setSelectedEmail(email);
    setShowModal(true);
  };

  return (
    <div className="bg-orange-300">
      <div className="flex justify-center items-center min-h-screen pt-10">
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
          <div className="col-span-2 relative">
            <h1 className="text-3xl font-bold">
              There for you and
              <span className="text-orange-800">care for you</span> ...
            </h1>
            <p className="text-sm font-bold mt-4 flex-wrap">
              At our company, we prioritize your digital needs with unwavering
              dedication.
              <br />
              Our expert team is here for you 24/7, ensuring seamless support
              and
              <br />
              guidance. We offer tailored solutions to meet your unique
              requirements,
              <br />
              fostering your growth and success online.
            </p>
            <p className="text-sm font-bold mt-8">
              With cutting-edge technology and personalized
              <br />
              care, we transform your ideas into reality. Experience reliability
              and
              <br />
              innovation like never before.
            </p>
            <div className="grid grid-cols-3 gap-2 pt-20 px-10">
              <div className="flex justify-center">
                <figure>
                  <Image
                    src="/images/whatwedo-small.png"
                    alt="whatwedo-small"
                    width={130}
                    height={0}
                    className="cursor-pointer"
                    onClick={() => openModal("it@coolish.com")}
                  />
                </figure>
              </div>
              <div className="flex justify-center">
                <figure>
                  <Image
                    src="/images/maintainable-small.png"
                    alt="maintainable-small"
                    width={130}
                    height={0}
                    className="cursor-pointer"
                    onClick={() => openModal("pr@coolish.com")}
                  />
                </figure>
              </div>
              <div className="flex justify-center">
                <figure>
                  <Image
                    src="/images/getintouch-small.png"
                    alt="getintouch-small"
                    width={130}
                    height={0}
                    className="cursor-pointer"
                    onClick={() => openModal("mb@coolish.com")}
                  />
                </figure>
              </div>
              <p
                className="text-sm font-bold flex justify-center cursor-pointer"
                onClick={() => openModal("it@coolish.com")}
              >
                it@coolish.com
              </p>
              <p
                className="text-sm font-bold flex justify-center cursor-pointer"
                onClick={() => openModal("pr@coolish.com")}
              >
                pr@coolish.com
              </p>
              <p
                className="text-sm font-bold flex justify-center cursor-pointer"
                onClick={() => openModal("mb@coolish.com")}
              >
                mb@coolish.com
              </p>
            </div>
            <div className="absolute bottom-0 right-0 bg-black text-white">
              <p className="mx-3 rounded font-bold text-2xl">GetInTouch</p>
            </div>
          </div>
        </div>
      </div>
      <Modal
        show={showModal}
        email={selectedEmail}
        onClose={() => setShowModal(false)}
      />
    </div>
  );
};

export default Page;
