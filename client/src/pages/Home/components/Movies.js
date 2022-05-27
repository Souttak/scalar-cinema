import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../style/Movies.min.css';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Container } from '@mui/system';

import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const api = axios.create({ baseURL: 'http://localhost:3050/api' });

function Movies() {
  const [movies, setMovies] = useState([{}]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const movies = await api.get('/movies', { params: { page: 1, limit: 8 } });
        setMovies(movies.data.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <Container>
      <Grid container spacing={2} marginTop={2} marginBottom={2}>
        {movies.map((movie) => (
          <Grid item xs={'auto'}>
            <Item sx={{ maxWidth: 300, maxHeight: 600, minWidth: 150, minHeight: 300 }}>
              <Card>
                <CardActionArea>
                  <CardMedia component="img" image={movie.movie_photo} alt="..." />
                  <CardContent>
                    <Typography sx={{ minWidth: 200, minHeight: 65 }} gutterBottom variant="h5" component="div">
                      {movie.movie_title}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Item>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Movies;
