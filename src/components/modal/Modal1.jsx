import React, { useEffect, useState } from "react";
import { XIcon } from "../../assets";

export const Modal1 = ({ open1, setOpen1 }) => {
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    tarif: "БАЗОВЫЙ",
    date: new Date().toString(),
  });

  const getData = async () => {
    try {
      const res = await fetch(
        "https://sheet.best/api/sheets/f45eebf5-c2fe-4744-b93c-b696bb436560"
      );
      const data = await res.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(
        "https://sheet.best/api/sheets/f45eebf5-c2fe-4744-b93c-b696bb436560",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        }
      );
      if (res.ok) {
        console.log("Data submitted successfully!");
        setData({
          name: "",
          email: "",
          phone: "",
          tarif: "БАЗОВЫЙ", // Добавляем значение tarif
          date: new Date().toString(),
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  if (!open1) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-[#000] bg-opacity-75 z-[999]">
      <div className="bg-[#080415bf] p-6 rounded-lg shadow-lg h-[80vh] w-[60rem] flex flex-col items-center ">
        <div className="flex justify-between w-full">
          <p>{}</p>
          <XIcon
            fill="white"
            onClick={() => setOpen1(false)}
            className="cursor-pointer flex flex-end "
          />
        </div>
        <p className="text-white mb-4 cd:text-[2rem] text-[1rem] font-bold">
          ТАРИФ - БАЗАЛЫК
        </p>
        <input
          className="hover:text-[1.2rem] mt-4 mb-12 hover:placeholder:text-white duration-200 border-0 bg-transparent outline-none w-[17rem] hover:w-[25rem] text-center text-white border-b-2 hover:border-[yellow] hover:border-b-3 cursor-pointer"
          type="text"
          placeholder="Сиздин атыныз"
          name="name"
          value={data.name}
          onChange={handleChange}
        />
        <input
          className="hover:text-[1.2rem] mt-4 mb-12 hover:placeholder:text-white duration-200 border-0 bg-transparent outline-none w-[17rem] hover:w-[25rem] text-center text-white border-b-2 hover:border-[yellow] hover:border-b-3 cursor-pointer"
          type="text"
          placeholder="Сиздин gmail"
          name="email"
          value={data.email}
          onChange={handleChange}
        />
        <input
          className="hover:text-[1.2rem] mt-4 mb-12 hover:placeholder:text-white duration-200 border-0 bg-transparent outline-none w-[17rem] hover:w-[25rem] text-center text-white border-b-2 hover:border-[yellow] hover:border-b-3 cursor-pointer"
          type="text"
          placeholder="Сиздин номер"
          name="phone"
          value={data.phone}
          onChange={handleChange}
        />
        <div
          className="flex justify-center items-center w-[13rem] h-[7vh] rounded-[0.5rem] border-2 border-[white] cursor-pointer hover:bg-gradient-to-r from-[blue] to-pink-500"
          onClick={handleSubmit}
        >
          <p className="text-white">Брондоо</p>
        </div>
      </div>
    </div>
  );
};
