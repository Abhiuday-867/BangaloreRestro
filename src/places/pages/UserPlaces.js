import React from "react";
import PlaceList from "../components/PlaceList";
import { useParams } from "react-router-dom";
const DUMMY_PLACES = [
  {
    id: "p1",
    title: "Bangalore Palace",
    description: "One of the most famous in Blg",
    imageUrl: "https://www.karnatakatourism.org/tour-item/bangalore-palace/",
    address: "Vasanth Nagar, Bengaluru",
    location: {
      lat: 40.7484405,
      lng: -73.98785844,
    },
    creator: "u1",
  },
  {
    id: "p2",
    title: "Emp. State Building",
    description: "One of the most famous sky scrapers in the world!",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/1/10/Empire_State_Building_%28aerial_view%29.jpg",
    address: "20 W 34th St, New York , NY 10001",
    location: {
      lat: 40.7484405,
      lng: -73.98785844,
    },
    creator: "u2",
  },
];
const UserPlaces = () => {
  const userId = useParams().userId;
  const loadedPlaces = DUMMY_PLACES.filter((place) => place.creator === userId);
  return <PlaceList items={loadedPlaces} />;
};

export default UserPlaces;
