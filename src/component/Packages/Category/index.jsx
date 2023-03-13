import { Button } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { UserContext } from "../../../App";
import Add from "./Add";

// const c = ["Beaches", "Mountian", "Ballon flights", "Desert", "Camping", "Skiing", "Houseboats", "Castles" ,"Others"]
const CategoryList = () => {
  const [category, setCategory] = useState([]);
  const [filterCat, setFilterCat]= useState([]);
  const getCategory = async () => {
    try {
      const res = await axios.get("http://localhost:8003/categories");

      console.log("resCat", res.data.data);
      setCategory(res.data.data);
    } catch (err) {
      console.log(err);
    }
  };
  // getCategory();
  // console.log(isCategory)
  // const  handleFilter = async(data)=>{
  //   console.log("==?",data);
  //   const loc = useParams();
  //   const id = data[loc.id];
  //   console.log("id???", id);

  //   try{
  //     const res = await axios.get(`http://localhost:8003/categories/:${id}`);
  //     console.log("===filter", res);
  //     // setFilterCat(res)
  //   }
  //   catch(err){
  //     console.log(err);
  //   }
  // }
  // handleFilter();
  
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
        <Button>
          {/* <Add /> */}
        </Button>
      </Box>
    </>
  );
};

export default CategoryList;
