
import './App.css';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card'
import m from './Images/m.jpg'

function App() {
  return (
    <div> 
  <div > 
    <div className="App" >
     
     <center><h1>ID CARD</h1>
    <Card sx={{ maxWidth: 350,minHeight:400,margin:8,borderRadius:5,backgroundColor:'yellow' }}>
      <CardMedia sx={{ maxWidth:250, borderRadius:100, margin:4, marginLeft:5,}}
        component="img"
        height="280"
        weight="290"
        image={m}
        />         
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         <b>Mr.Mohan</b>
        </Typography>
        <Typography variant="body2">
         B.tech CSE  
        </Typography>
        <Typography>
        kluniversity
        </Typography>
        <Typography>
         Vaddeswaram
        </Typography>
      </CardContent>
    </Card>
    </center> 
    </div>
    </div>
    </div>
    
  );
}

export default App;
