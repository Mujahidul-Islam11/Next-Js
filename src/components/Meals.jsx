"use client"; // This ensures the component is rendered on the client side
import React, { useState, useEffect } from "react";

const Meals = () => {
  const [search, setSearch] = useState("");
  const [mealsData, setMealsData] = useState(null);

  const handler = (e) => {
    setSearch(e.target.value);
  };

  const searchedData = async () => {
    try {
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?f=${search}`
      );
      const data = await res.json();
      setMealsData(data.meals);
    } catch (err) {
      console.error("Error!", err);
    }
  };

  useEffect(() => {
    if (search) {
      searchedData();
    }
  }, [search]);

  return (
    <div>
      <div className="flex justify-center mt-20">
        <input
          className="text-slate-900 border-transparent outline-none px-3 py-2"
          type="text"
          onChange={handler}
          placeholder="Search meals"
        />
        <button
          className="px-3 py-2 text-white bg-red-500"
          onClick={searchedData}
        >
          Search
        </button>
      </div>
      {search ? (
        <div className="bg-white text-slate-900 mt-2 w-1/2 mx-auto overflow-y-scroll h-[300px]">
          {mealsData && mealsData.length > 0 ? (
            <ul>
              {mealsData.map((meal, index) => (
                <li key={index}><img src={`${meal.images}`} className="w-10 h-10 rounded-md mr-3" alt="" />{meal.strMeal}</li>
              ))}
            </ul>
          ) : (
            search && <p>No meals found</p>
          )}
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Meals;
