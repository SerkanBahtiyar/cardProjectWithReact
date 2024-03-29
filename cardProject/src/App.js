
import './App.css';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Sehirler from './Sehirler';
import Ordu from './images/ordu.png';
import Rize from './images/rize.png';
import Samsun from './images/samsun.png';
import Tokat from './images/tokat.png';

function App() {
  return (
    <div>
      <AppBar>
        <Toolbar sx={{ fontSize: 30 }}>Şehir Kartları </Toolbar>
      </AppBar>
      <Container maxWidth="lg">
        <Grid container spacing={2} sx={{ marginTop: 10 }}>
          <Grid item xs={12} md={6} lg={3}>
            <Sehirler
              image={Ordu}
              title="Ordu"
              description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam iusto nihil ea deserunt culpa, maiores dolores eveniet architecto ratione quasi, odit ipsum minima tenetur nisi vitae eos quaerat in accusamus!"
            />
          </Grid>
          
          <Grid item xs={12} md={6} lg={3}>
            <Sehirler
              image={Rize}
              title="Rize"
              description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam iusto nihil ea deserunt culpa, maiores dolores eveniet architecto ratione quasi, odit ipsum minima tenetur nisi vitae eos quaerat in accusamus!"
            />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <Sehirler
              image={Samsun}
              title="Samsun"
              description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam iusto nihil ea deserunt culpa, maiores dolores eveniet architecto ratione quasi, odit ipsum minima tenetur nisi vitae eos quaerat in accusamus!"
            />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <Sehirler
              image={Tokat}
              title="Tokat"
              description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam iusto nihil ea deserunt culpa, maiores dolores eveniet architecto ratione quasi, odit ipsum minima tenetur nisi vitae eos quaerat in accusamus!"
            />
          </Grid>
        </Grid>
        
      </Container>
    </div>

  );
}

export default App;
