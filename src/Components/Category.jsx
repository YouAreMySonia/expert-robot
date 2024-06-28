import React,{useState,useEffect} from 'react'
import axios from "axios"
import Header from './Header';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import {Link} from "react-router-dom";
const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);
export default function Category() {
    const [category,setCategory]=useState([]);
    useEffect(()=>{
        axios.get("https://dummyjson.com/products/categories")
        .then((res)=>{
            console.log(res,"data");
            console.log(res,"bbb");
            console.log(res.data,"aaa");
            setCategory(res.data);
        })
        .catch((err)=>{
            console.log(err,22);
        })

    },[])
  return (
    <div>
        {Category}
      <Header></Header>
      <h1>Categories</h1>
      <div>
      <Grid container spacing={2} style={{marginTop:10}}>
        {category.map((item,index)=>
        {
            console.log(item,"map")
            return(
                <Grid item key={index}>
            

      <Card sx={{ minWidth: 275,backgroundColor:"peach" }}>
      <CardContent>
        <Link to={`/prod/${item.slug}`}>
        <Typography variant="h5" component="div">
         {item.name}
      </Typography>
      </Link>
      </CardContent>
    </Card>
    </Grid>
);
})}
</Grid>
      </div>
    </div>
  )
}
