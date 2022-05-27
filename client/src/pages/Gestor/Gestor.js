import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './style/Gestor.min.css';
import Header from '../Home/components/Header';
import EditDialog from './components/EditDialog';
import AddDialog from './components/AddDialog';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';

// ======================================================================================

const api = axios.create({ baseURL: 'http://localhost:3050/api' });

function Gestor() {
  const [movies, setMovies] = useState([{}]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const movies = await api.get('/movies', { params: { page: 1, limit: 20 } });
        setMovies(movies.data.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <Header />
      <div className="crud-container">
        <h2>GESTOR DE PELÍCULAS</h2>
        <TableContainer component={Paper} sx={{ marginTop: 2 }}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Título</TableCell>
                <TableCell>Estreno</TableCell>
                <TableCell>Género</TableCell>
                <TableCell align="right" sx={{ display: 'flex' }}>
                  <AddDialog />
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {movies.map((movie) => (
                <TableRow key={movie.movie_id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                  <TableCell component="th" scope="row">
                    {movie.movie_title}
                  </TableCell>
                  <TableCell>{movie.movie_release_date}</TableCell>
                  <TableCell>{movie.movie_genre}</TableCell>
                  <TableCell align="right" id="option-buttons">
                    <Button
                      variant="outlined"
                      onClick={() => {
                        setMovies(movies.filter((e) => e.movie_id !== movie.movie_id));
                        api.delete(`/movies/${movie.movie_id}`);
                      }}
                    >
                      <DeleteIcon />
                    </Button>
                    <EditDialog
                      movie_id={movie.movie_id}
                      movie_title={movie.movie_title}
                      movie_release_date={movie.movie_release_date}
                      movie_genre={movie.movie_genre}
                      movie_plot={movie.movie_plot}
                      movie_photo={movie.movie_photo}
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}

export default Gestor;
