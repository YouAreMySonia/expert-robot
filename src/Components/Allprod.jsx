import React,{useState,useEffect} from 'react'
import Header from './Header'
import { useParams} from 'react-router-dom'
import axios from "axios"
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { TextField } from '@mui/material';

export default function Allprod() {
    const[prod,setProd]=useState([]);
    const[search,setSearch]=useState([]);
    
    useEffect(()=>
        {
            axios
            .get(`https://dummyjson.com/products`)
            .then((res)=>{
                console.log(res.data.products,"111");
                setProd(res.data.products);
        })
        .catch((err)=>
        {
            console.log(err,222);
        });
        });
        const handleChange=(e)=>{
            console.log(e.target.value,"search")
            setSearch((e.target.value).toLowerCase())
        }
        {prod.filter((value)=>value.title.toLowerCase().includes(search)).map((item)=>{
            console.log(item);
            if(item==null || item=="") 
                {
                    return(
                        <h1>Hello</h1>
                    )
                }
    else{
        return(
        <Card sx={{ maxWidth: 345 }}></Card>)
    }
        })}
        
  return (
    <div>
      <Header></Header>
      <h1>All Products</h1>
      <TextField
        onChange={handleChange}
        label="Search products here"
        InputProps={{style:{fonstSize:40}}}>
      </TextField>
      <Grid container spacing={2} style={{marginTop:20}}>
        {prod.map((item)=>(
            <Grid item xs={12} sm={6} md={4} lg={3} key={item.id}>  
      <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 400 }}
        image={item.images[0]}
        title={item.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {item.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {item.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    </Grid>
     ))}
     </Grid>
    </div>
  )
}
