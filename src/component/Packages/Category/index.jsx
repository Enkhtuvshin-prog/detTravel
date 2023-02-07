import { Button } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

const c = ["Beaches", "Mountian", "Ballon flights", "Desert", "Camping", "Skiing", "Houseboats", "Castles" ,"Others"]
const CategoryList = () => {
  return (
    <>
    <Box sx={{display:"flex"}}>
      {
        c.map((x)=>
        <Button variant='h4'>
          {x}
        </Button>
        )
      }
    </Box>
    
    </>
  )
}

export default CategoryList