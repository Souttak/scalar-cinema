import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Cancel';
import Slide from '@mui/material/Slide';
import EditIcon from '@mui/icons-material/Edit';
import TextField from '@mui/material/TextField';
import axios from 'axios';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const api = axios.create({ baseURL: 'http://localhost:3050/api' });

export default function FullScreenDialog(movie) {
  const [open, setOpen] = React.useState(false);
  const [values, setValues] = useState({
    movie_title: '',
    movie_release_date: '',
    movie_genre: '',
    movie_plot: '',
    movie_photo: '',
  });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    const temp = {
      movie_title: values.movie_title !== '' ? values.movie_title : movie.movie_title,
      movie_release_date: values.movie_release_date !== '' ? values.movie_release_date : movie.movie_release_date,
      movie_genre: values.movie_genre !== '' ? values.movie_genre : movie.movie_genre,
      movie_plot: values.movie_plot !== '' ? values.movie_plot : movie.movie_plot,
      movie_photo: values.movie_photo !== '' ? values.movie_photo : movie.movie_photo,
    };
    api.put(`/movies/${movie.movie_id}`, temp);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        <EditIcon />
      </Button>
      <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
        <AppBar sx={{ position: 'relative' }}>
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              {movie.movie_title}
            </Typography>
            <Button autoFocus color="inherit" type="submit" onClick={handleClose}>
              save
            </Button>
          </Toolbar>
        </AppBar>
        <form style={{ marginTop: 10, marginLeft: 10, display: 'flex', flexDirection: 'column' }}>
          <TextField
            id="outlined-required"
            label="Título"
            variant="outlined"
            defaultValue={movie.movie_title}
            style={{ marginTop: 10 }}
            onChange={(e) =>
              setValues({
                ...values,
                movie_title: e.target.value,
              })
            }
          />
          <TextField
            id="outlined-required"
            label="Fecha de estreno"
            variant="outlined"
            defaultValue={movie.movie_release_date}
            style={{ marginTop: 10 }}
            onChange={(e) =>
              setValues({
                ...values,
                movie_release_date: e.target.value,
              })
            }
          />
          <TextField
            id="outlined-required"
            label="Genero"
            variant="outlined"
            defaultValue={movie.movie_genre}
            style={{ marginTop: 10 }}
            onChange={(e) =>
              setValues({
                ...values,
                movie_genre: e.target.value,
              })
            }
          />
          <TextField
            id="outlined-required"
            label="Plot"
            variant="outlined"
            defaultValue={movie.movie_plot}
            style={{ marginTop: 10 }}
            onChange={(e) =>
              setValues({
                ...values,
                movie_plot: e.target.value,
              })
            }
          />
          <TextField
            id="outlined-required"
            label="Foto/Banner"
            variant="outlined"
            defaultValue={movie.movie_photo}
            style={{ marginTop: 10 }}
            onChange={(e) =>
              setValues({
                ...values,
                movie_photo: e.target.value,
              })
            }
          />
        </form>
      </Dialog>
    </div>
  );
}
