import React, { useEffect, useState } from "react";
import { Navbar } from "./Navbar";
import { UserCard } from "./UserCard";

export const HomePage = () => {
  const [data, setData] = useState([]);
  const [sortBy, setSortBy] = useState("");
  // const [isAsc, setAsc] = useState(false);
  const [sortOrder, setSortOrder] = useState("asc");

  useEffect(() => {
    fetch(
      "https://gist.githubusercontent.com/pandemonia/21703a6a303e0487a73b2610c8db41ab/raw/82e3ef99cde5b6e313922a5ccce7f38e17f790ac/twubric.json"
    )
      .then((result) => {
        return result.json();
      })
      .then((response) => {
        setData(response);
      });
  }, []);

  const deleteUser = (uid) => {
    const confirmed = window.confirm(`Are you sure you want to delete ${uid}`);
    if (confirmed) {
      setData(data.filter((item) => item.uid !== uid));
    }
  };

  const sortChange = (a, b) => {
    if (sortOrder === "asc") {
      return a.twubric[sortBy] - b.twubric[sortBy];
    } else {
      return b.twubric[sortBy] - a.twubric[sortBy];
    }
  };

  const handleSortChange = (e) => {
     if (sortBy === e && sortOrder === "asc") {
      setSortOrder("desc");
    } else {
      setSortOrder("asc");
    }
    setSortBy(e);
  };

  const dateFilter = (start , end) => {
    const startDate = start.target.value;
    console.log(startDate,"wssssssssssss")
    const endDate = end.target.value;
    console.log(endDate, "endddddddddd")
  }


  return (
    <React.Fragment>
      <Navbar handleSortChange={handleSortChange} dateFilter={dateFilter}/>
      <div className="grid gap-5 m-5 lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
        {data.sort(sortChange).map((item, i) => (
          <UserCard
            key={i}
            item={item}
            deleteUser={deleteUser}
          />
        ))}
      </div>
    </React.Fragment>
  );
};

// const sortedData = [...data].sort((a, b) => {
//   if (sortOrder === "asc") {
//     return a.twubric[key] - b.twubric[key];
//   } else {
//     return b.twubric[key] - a.twubric[key];
//   }
// });
// setData(sortedData);
// setSortOrder(sortOrder === "asc" ? "desc" : "asc");