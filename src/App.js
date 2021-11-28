import './App.css';
import React, { useState } from 'react';
import { Box, Button, TextField, MuiThemeProvider, createTheme } from '@material-ui/core';
import Axios from  'axios';

function App() { 

  const [visitorMoment, setVisitorMoment] = useState(0);
  const [visitorDaily, setVisitorDaily] = useState(0);
  const [visitorTotal, setVisitorTotal] = useState(0);

  const theme = createTheme({
    palette: {
      secondary: {
        main: '#E33E7F'
      }
    }
  });

  const addVisitor = () => {
    Axios.post('http://192.168.2.174:3001/add').then(() =>
    {console.log("success add");});
    setTimeout(3000);
    Axios.get('http://192.168.2.174:3001/getVisitorMoment').then((response) => {setVisitorMoment(JSON.parse(JSON.stringify(response.data))[0].visitorMoment);});
    setTimeout(3000);
    Axios.get('http://192.168.2.174:3001/getVisitorDaily').then((response) => {setVisitorDaily(JSON.parse(JSON.stringify(response.data))[0].visitorDaily);});
    setTimeout(3000);
    Axios.get('http://192.168.2.174:3001/getVisitorTotal').then((response) => {setVisitorTotal(JSON.parse(JSON.stringify(response.data))[0].visitorTotal);});
    setTimeout(12000);
  }
  
  const subVisitor = () => {
    Axios.post('http://192.168.2.174:3001/sub').then(() =>
    {console.log("success sub");});
    setTimeout(2000);
    Axios.get('http://192.168.2.174:3001/getVisitorMoment').then((response) => {setVisitorMoment(JSON.parse(JSON.stringify(response.data))[0].visitorMoment);});
    setTimeout(2000);
  }

  const resMoment = () => {
    Axios.post('http://192.168.2.174:3001/resMoment').then(() =>
    {console.log("success add");});
    setTimeout(2000);
    Axios.get('http://192.168.2.174:3001/getVisitorMoment').then((response) => {setVisitorMoment(JSON.parse(JSON.stringify(response.data))[0].visitorMoment);});
    setTimeout(2000);
  }

  const resDaily = () => {
    Axios.post('http://192.168.2.174:3001/resDaily').then(() =>
    {console.log("success add");});
    setTimeout(2000);
    Axios.get('http://192.168.2.174:3001/getVisitorDaily').then((response) => {setVisitorDaily(JSON.parse(JSON.stringify(response.data))[0].visitorDaily);});
    setTimeout(2000);
  }

  const resTotal = () => {
    Axios.post('http://192.168.2.174:3001/resTotal').then(() =>
    {console.log("success add");});
    setTimeout(2000);
    Axios.get('http://192.168.2.174:3001/getVisitorTotal').then((response) => {setVisitorTotal(JSON.parse(JSON.stringify(response.data))[0].visitorTotal);});    
    setTimeout(2000);
  }

  return (
    <MuiThemeProvider theme={theme}>
    <div className="App">
      <header className="App-header">
        <Box className="App-Header">
          <h2 className="App-Dialog-Moment">Aktuelle Besucher</h2>
          <div style={{ height: 100, width: '90%' }}>
            <Button variant="outlined" color="primary" className ="App-Moment-Add-Button" onClick={addVisitor} >
                    +  </Button>
                    <TextField
                            className ="App-Output-Moment" 
                            disabled={false}
                            label=""
                            type={Number}
                            value={visitorMoment}
                        />
            <Button variant="outlined" color="primary" className ="App-Moment-Sub-Button" onClick={subVisitor}>
                    -
            </Button>
            <Button variant="outlined" color="primary" className ="App-Moment-Reset-Button" onClick={resMoment}>
                    Reset
            </Button>
          </div>
          <h2 className="App-Dialog-Daily">Heutige Besucher</h2>
          <div style={{ height: 100, width: '90%' }}>
            <TextField
                            className ="App-Output-Daily" 
                            disabled={false}
                            label=""
                            type={Number}
                            color="primary"
                            value={visitorDaily}
                        />
            <Button variant="outlined" color="primary" className ="App-Daily-Reset-Button" onClick={resDaily}>
                    Reset
            </Button>
          </div>
          <h2 className="App-Dialog-Total">Gesamte Besucher</h2>
          <div style={{ height: 100, width: '90%' }}>
            <TextField
                            className ="App-Output-Total" 
                            disabled={false}
                            label=""
                            type={Number}
                            color="secondary"
                            value={visitorTotal}
                        />
            <Button variant="outlined" color="primary" className ="App-Daily-Total-Button" onClick={resTotal}>
                    Reset
            </Button>
          </div>
        </Box>
      </header>
    </div>
    </MuiThemeProvider>
  );
 }
//* test
export default App;
