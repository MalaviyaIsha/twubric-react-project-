import React from "react";
const dateFormate = (data) => {
  const date = new Date(data * 1000);
  const options = { year: "numeric", month: "2-digit", day: "2-digit" };
  const formattedDate = date.toLocaleDateString("en-US", options);
  return formattedDate;
};
export const UserCard = ({ item , deleteUser }) => {
  return (
    <React.Fragment>
      <div className=" bg-indigo-50 rounded shadow-lg mt-20">
        <div className="flex justify-center -mt-16 ">
          <div className="h-[128px] w-[128px] shadow-2xl overflow-hidden group  rounded-full transition-[.3s]">
            <img
              className="rounded-full group-hover:scale-125  transition-[.3s]"
              alt="Error"
              src={item.image}
            />
          </div>
        </div>
        <div className="flex justify-between">
          <h1 className="p-5 font-bold ">{item.fullname}</h1>
          <h1 className="p-5  ">{item.twubric.total}</h1>
        </div>
        <div className="grid lg:grid-cols-3 grid-cols-1 justify-between ">
          <div className="border-4 rounded m-2 text-center">
            <p className="px-8 ">{item.twubric.friends}</p>
            <p className="px-8 ">Friends</p>
          </div>
          <div className="border-4 rounded m-2 text-center">
            <p className="px-8 ">{item.twubric.influence}</p>
            <p className="px-8 ">Influence</p>
          </div>
          <div className="border-4 rounded m-2 text-center">
            <p className="px-8 ">{item.twubric.chirpiness}</p>
            <p className="px-8 ">Chirpiness</p>
          </div>
        </div>
        <div className="flex justify-between ">
          <h1 className="p-5 ">{dateFormate(item.join_date)}</h1>
          <button
            className="bg-indigo-300 m-4 rounded p-2 opacity-80 hover:opacity-100"
            onClick={() => deleteUser(item.uid)}
          >
            Remove
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};
