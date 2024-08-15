"use client";

import { useState } from "react";
import Image from "next/image";
import Nav from "@/components/Nav";
import Modal from "@/components/Modal";
import useFetch from "@/hook/useFetch";

const Page = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [selectedEmail, setSelectedEmail] = useState<string>("");

  const { data, error } = useFetch<DataItem[]>("http://localhost:3000/api/data/page3");
  const { data: emailData, error: emailError } = useFetch<EmailItem[]>("http://localhost:3000/api/data/email");

  if (error || emailError) {
    return <div>Error: {error?.message || emailError?.message}</div>;
  }

  const openModal = (email: string) => {
    setSelectedEmail(email);
    setShowModal(true);
  };

  const renderContent = () => {
    if (!data || !emailData) return null;

    return (
      <>
        <div className="flex justify-center items-center min-h-screen pt-10">
          <div className="grid grid-cols-3 gap-4">
            <div className="relative flex justify-center">
              <figure>
                <Image src={`/images/${data[0].img_src}.png`} alt={data[0].img_src} width={250} height={0} />
              </figure>
              <Nav page={data[0].currentPage} />
            </div>
            <div className="col-span-2 relative">
              <h1 className="text-3xl font-bold">
                There for you and
                <span className="text-orange-800"> care for you</span> ...
              </h1>
              <p className="text-sm font-bold whitespace-pre mt-4 flex-wrap">{data[0].text1}</p>
              <p className="text-sm font-bold whitespace-pre mt-8">{data[0].text2}</p>
              <div className="grid grid-cols-3 gap-2 pt-20 px-10">
                {emailData.map((item, index) => (
                  <div key={index} className="flex flex-col items-center">
                    <figure>
                      <Image src={`/images/${item.src}.png`} alt={item.src} width={130} height={0} className="cursor-pointer" onClick={() => openModal(item.email)} />
                    </figure>
                    <p className="text-sm font-bold cursor-pointer mt-2" onClick={() => openModal(item.email)}>
                      {item.email}
                    </p>
                  </div>
                ))}
              </div>
              <div className="absolute bottom-0 right-0 bg-black text-white">
                <p className="mx-3 rounded font-bold text-2xl">{data[0].text_bottom}</p>
              </div>
            </div>
          </div>
        </div>
        <Modal show={showModal} email={selectedEmail} onClose={() => setShowModal(false)} />
      </>
    );
  };

  return <div className="bg-orange-300">{renderContent()}</div>;
};

export default Page;
