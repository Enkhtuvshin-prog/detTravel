import { Button } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import React, { useState, useEffect, useContext } from "react";

// const c = ["Beaches", "Mountian", "Ballon flights", "Desert", "Camping", "Skiing", "Houseboats", "Castles" ,"Others"]
const CategoryList = () => {
  const [category, setCategory] = useState([]);
  const [filterCat, setFilterCat]= useState([]);
  const getCategory = async () => {
    try {
      const res = await axios.get("http://localhost:8000/category");

      console.log("resCat", res.data.categories);
      setCategory(res.data.categories);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    console.log("Worked");
    getCategory();
  }, []);
 

  return (
    <>
      {console.log("return")}
      <Box sx={{ display: "flex" }}>
        {category.map((x) => (
          <Button variant="h3" sx={{ margin: 1, color: "#2d394" }}  >
            {x.title}
          </Button>
        ))}
    
      </Box>
    </>
  );
};

export default CategoryList;
