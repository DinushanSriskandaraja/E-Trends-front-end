import React from "react";
import CategoryCard from "../CategoryCard/CategoryCard";
import {
  FaWheelchair,
  FaAssistiveListeningSystems,
  FaLifeRing,
  FaComment,
  FaBriefcaseMedical,
  FaHome,
  FaDumbbell,
} from "react-icons/fa";
import "./CategoryPage.css";

const categories = [
  { id: 1, name: "Mobility Aids", icon: <FaWheelchair /> },
  { id: 2, name: "Assistive Devices", icon: <FaAssistiveListeningSystems /> },
  { id: 3, name: "Daily Living Aids", icon: <FaLifeRing /> },
  { id: 4, name: "Communication Aids", icon: <FaComment /> },
  { id: 5, name: "Medical Supplies", icon: <FaBriefcaseMedical /> },
  { id: 6, name: "Home Modifications", icon: <FaHome /> },
  { id: 7, name: "Recreational and Sports Equipment", icon: <FaDumbbell /> },
];

const CategoryPage = () => {
  return (
    <div className="category-page">
      <h1> Categories </h1>{" "}
      <div className="category-list">
        {" "}
        {categories.map((category) => (
          <CategoryCard key={category.id} category={category} />
        ))}{" "}
      </div>{" "}
    </div>
  );
};

export default CategoryPage;
