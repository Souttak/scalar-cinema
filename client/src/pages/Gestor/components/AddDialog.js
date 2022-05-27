import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Cancel';
import Slide from '@mui/material/Slide';
import AddIcon from '@mui/icons-material/Add';
import TextField from '@mui/material/TextField';
import axios from 'axios';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const api = axios.create({ baseURL: 'http://localhost:3050/api' });

export default function FullScreenDialog() {
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
    api.post('/movies', values);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        <AddIcon />
      </Button>
      <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
        <AppBar sx={{ position: 'relative' }}>
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              Nueva película
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
            defaultValue="AAAA-MM-DD"
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
