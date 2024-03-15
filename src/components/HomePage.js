import React, { useEffect, useState } from "react";
import { Navbar } from "./Navbar";
import { UserCard } from "./UserCard";

export const HomePage = () => {
  const [data, setData] = useState([]);
  const [sortBy, setSortBy] = useState("");

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
    switch (sortBy) {
      case "total":
        return a.twubric.total - b.twubric.total;
      case "Friends":
        return a.twubric.friends - b.twubric.friends;
      case "Influence":
        return a.twubric.influence - b.twubric.influence;
      case "Chirpiness":
        return a.twubric.chirpiness - b.twubric.chirpiness;
      default:
        return 0;
    }
  };

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
  };

  const dateFormate = (data) => {
    const date = new Date(data * 1000);
    const options = { year: "numeric", month: "short", day: "numeric" };
    const formattedDate = date.toLocaleDateString("en-US", options);
    return formattedDate;
  };

  return (
    <React.Fragment>
      <Navbar handleSortChange={handleSortChange} />
      <div className="grid gap-5 m-5 lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
        {data.sort(sortChange).map((item, i) => (
          <UserCard
            key={i}
            item={item}
            deleteUser={deleteUser}
            dateFormate={dateFormate}
          />
        ))}
      </div>
    </React.Fragment>
  );
};
