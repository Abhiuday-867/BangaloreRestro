import React from "react";
import UsersList from "../components/UsersList";

const user = () => {
  const USERS = [
    {
      id: "u1",
      name: "Bangalore Palace",
      image:
        "https://images.pexels.com/photos/839011/pexels-photo-839011.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      description:
        "Built by Chamaraja Wodeyar in the year 1887, Bangalore Palace is an inspired design by England’s Windsor Castle and is one of the best tourist places in Bangalore. The evocative palace comprises fortified arches, towers, Tudor-style architecture, and green lawns along with sophisticated wood carvings in the interior. ",
    },
    {
      id: "u2",
      name: "Tipu Sultan’s Summer Palace",
      image:
        "https://images.pexels.com/photos/839011/pexels-photo-839011.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      description:
        "Located in the most crowded market area, Tipu Sultan Fort ideally represents the artistic talent which thrived in the past and is among the most fascinating Bangalore tourist places. The ‘Rashk-e-Jannat’ is the summer heaven of the ruler of Mysore, Tipu Sultan. The ruler is largely celebrated for the heroics across the battlefield. ",
    },
    {
      id: "u3",
      name: "Lal Bagh Botanical Gardens",
      image:
        "https://images.pexels.com/photos/839011/pexels-photo-839011.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      description:
        "This botanical garden is one of the most alluring places to visit in Bangalore, and perhaps all of India. Built by Haider Ali, the garden was later modified by Tipu Sultan",
    },
    {
      id: "u4",
      name: "Nandi Hills",
      image:
        "https://images.pexels.com/photos/839011/pexels-photo-839011.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      description:
        "A perfect location to be one with nature, the hills are located 60kms away from the city. One the most popular viewpoint in Bangalore",
    },
  ];
  return <UsersList items={USERS} />;
};

export default user;
