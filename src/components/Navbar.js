import React from "react";
import image from '../assets/image.png'

export const Navbar = ({ handleSortChange, dateFilter }) => {
  const buttonList = [
    {
      lable: "Twubric Score",
      value: "total"
    },
    {
      lable: "Friends",
      value: "friends"
    },
    {
      lable: "Influence",
      value: "influence"
    },
    {
      lable: "Chirpiness",
      value: "chirpiness"
    }
  ]
  return (
    <React.Fragment>
      <div className="sticky top-0">
        <div className="flex bg-indigo-300 justify-between p-4 gap-6 w-full">
          <div className="flex">
            <img src={image} className="h-9 w-9 rounded-full mr-3" alt="error"></img>
            <h1 className="text-4xl font-bold sm:block hidden">Twubric</h1>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1">
              <label>Sort By : </label>
              {
                buttonList.map((val, i) => (
                  <button
                    key={i}
                    className="border h-[34px] px-2 rounded-sm bg-white"
                    onClick={() => handleSortChange(val.value)}
                  >
                    {val.lable}
                  </button>
                ))
              }
            </div>
            <div>
              <label>Start Date : </label>
              <input className="rounded bg-indigo-100 p-1" type="date" onChange={dateFilter} />
            </div>
            <div>
              <label>End Date : </label>
              <input className="rounded bg-indigo-100 p-1" type="date" onChange={dateFilter} />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
