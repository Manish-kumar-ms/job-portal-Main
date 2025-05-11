import React, { useEffect, useState } from "react";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { useDispatch } from "react-redux";
import { setSearchedQuery } from "@/redux/jobSlice";

const filterData = [
  {
    filterType: "Location",
    array: ["Delhi", "Mumbai", "Kolkata", "Pune", "Bangalore"],
  },
  {
    filterType: "Technology",
    array: ["Mern", "React", "Fullstack", "Java", "frontend", "backend"],
  },
  {
    filterType: "Experience",
    array: [
      { display: "0-2 years", min: 0, max: 2 },
      { display: "3-5 years", min: 3, max: 5 },
      { display: "6-8 years", min: 6, max: 8 },
      { display: "9+ years", min: 9, max: 999 }
    ],
  },
  {
    filterType: "Salary",
    array: [
      { display: "0-5 LPA", min: 0, max: 5 },
      { display: "6-10 LPA", min: 6, max: 10 },
      { display: "11-20 LPA", min: 11, max: 20 },
      { display: "20+ LPA", min: 20, max: 999 }
    ],
  },
];

const Filter = () => {
  const [selectedValue, setSelectedValue] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const dispatch = useDispatch();

  const handleChange = (value, type) => {
    setSelectedValue(value);
    setSelectedType(type);
  };

  useEffect(() => {
    if (!selectedValue) {
      dispatch(setSearchedQuery({ value: "", type: "" }));
      return;
    }
    let parsedValue = selectedValue;

    // Parse JSON if it's an object type filter
    if (selectedType === "Experience" || selectedType === "Salary") {
      parsedValue = JSON.parse(selectedValue);
    }

    dispatch(setSearchedQuery({ 
      value: parsedValue, 
      type: selectedType 
    }));
  }, [selectedValue, selectedType]);

  const renderFilterItem = (item, type) => {
    if (type === "Experience" || type === "Salary") {
      return (
        <RadioGroupItem 
          value={JSON.stringify(item)} 
          onClick={() => handleChange(item, type)}
        />
      );
    }
    return (
      <RadioGroupItem 
        value={item} 
        onClick={() => handleChange(item, type)}
      />
    );
  };

  return (
    <div className="w-full bg-white rounded-md p-4">
      <h1 className="font-bold text-lg mb-3">Filter Jobs</h1>
      <RadioGroup value={selectedValue} className="space-y-4">
        {filterData.map((data, index) => (
          <div key={index}>
            <h2 className="font-semibold text-md mb-2">{data.filterType}</h2>
            {data.array.map((item, indx) => {
              const value =
                data.filterType === "Experience" || data.filterType === "Salary"
                  ? JSON.stringify(item)
                  : item;

              const label = item.display || item;
              const itemId = `filter-${data.filterType}-${indx}`;

              return (
                <div key={itemId} className="flex items-center space-x-2 my-1">
                  <RadioGroupItem
                    id={itemId}
                    value={value}
                    onClick={() => handleChange(value, data.filterType)}
                  />
                  <label htmlFor={itemId}>{label}</label>
                </div>
              );
            })}
          </div>
        ))}
      </RadioGroup>
    </div>
  );
};

export default Filter;