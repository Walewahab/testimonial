import React from 'react';
import Card from '@material-ui/core/Card';

import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

 const MediaCard = () => {
  return (
    <Card sx={{ maxWidth: 100 }}>
      <CardMedia
        component="img"
        height="160"
        width="20"
        image="./images/mars.jpg"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h6">
          Lizard Lizard
        </Typography>
      <Button size="small">Share</Button>
        <Button size="small" color='primary'>Learn More</Button>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
    </Card>
  );
}

export default MediaCard;