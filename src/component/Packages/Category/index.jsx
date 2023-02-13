import { Button } from '@mui/material'
import { Box } from '@mui/system'
import axios from 'axios'
import React, { useState, useEffect } from 'react'

// const c = ["Beaches", "Mountian", "Ballon flights", "Desert", "Camping", "Skiing", "Houseboats", "Castles" ,"Others"]
const CategoryList = () => {
  const [isCategory, setIsCategory] = useState([])
  const getCategory = async () => {
    try{
      const res = await axios.get('http://localhost:8003/categories');
      // console.log("resCat", res.data.data.categories);
      setIsCategory(res.data.data.categories)     
    } catch(err){
      console.log(err)
    }
  }
  getCategory();
  return (
    <>
    <Box sx={{display:"flex"}}>
      {
        isCategory.map((x)=>
        <Button variant='h3' sx={{margin: 1, color: "#2d394"}}>
          {x.title}
        </Button>
        )
      }
    </Box>
    
    </>
  )
}

export default CategoryList