"use client"
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

export default function Detailscard({image ,degree,name,details,post}) {
  return (
    <Card sx={{ maxWidth: 300 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="100"
          image={image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
            </Typography>
          <Typography variant="body2" color="text.secondary">
           
           {degree}
          </Typography>
          <Typography variant="body2" color="text.secondary">
           
           {details}
          </Typography>
        </CardContent>
      </CardActionArea>
      {post?<> <CardActions>
       <button className='w-full text-center py-3 bg-blue-600 '><p className='text-center text-white'> {post}</p></button>
      </CardActions></>:<></>}
     
    </Card>
  );
}
