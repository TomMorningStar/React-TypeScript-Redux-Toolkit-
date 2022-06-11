import React from "react";

const Categories = ({ value, onChangeCategory }) => {
  const categories = [
    "Все",
    "Мясные",
    "Вегетарианская",
    "Гриль",
    "Острые",
    "Закрытые",
  ];

  return (
    <div className="categories">
      <ul>
        {categories.map((vategoryName, index) => {
          return (
            <li
              key={`${value} ${index}`}
              onClick={() => onChangeCategory(index)}
              className={value === index ? "active" : ""}
            >
              {vategoryName}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Categories;
