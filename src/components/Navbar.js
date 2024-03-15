import React from "react";
import image from '../assets/image.png'

export const Navbar = ({ handleSortChange }) => {
  return (
    <React.Fragment>
      <div className="sticky top-0">
        <div className="flex bg-indigo-300 justify-between p-4 gap-6 w-full">
          <div className="flex">
            <img src={image} className="h-9 w-9 rounded-full mr-3"></img>
            <h1 className="text-4xl font-bold sm:block hidden">Twubric</h1>
          </div>
          <div className="flex items-center gap-3">
            <div>
              <label>Sort By : </label>
              <select
                className="rounded bg-indigo-100 p-1"
                onChange={handleSortChange}>
                <option value="">All</option>
                <option value="total">Twubric Score</option>
                <option value="Friends">Friends</option>
                <option value="Influence">Influence</option>
                <option value="Chirpiness">Chirpiness</option>
              </select>
            </div>
            <div>
              <label>Start Date : </label>
              <input className="rounded bg-indigo-100 p-1" type="date" />
            </div>
            <div>
              <label>End Date : </label>
              <input className="rounded bg-indigo-100 p-1" type="date" />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
