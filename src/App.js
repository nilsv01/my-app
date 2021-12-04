import './App.css';
import React, { useState } from 'react';
import { Box, Button, TextField} from '@material-ui/core';
import Axios from  'axios';

function App() { 

  const [visitorMoment, setVisitorMoment] =  useState(0);
  const [visitorDaily, setVisitorDaily] = useState(0);
  const [visitorTotal, setVisitorTotal] = useState(0);

  const addVisitor = async () => {
    const response = await Axios.post('http://192.168.2.174:4000/add')
    setVisitorMoment(response.data.map(val => val.visitorMoment));
    setVisitorDaily(response.data.map(val => val.visitorDaily));
    setVisitorTotal(response.data.map(val => val.visitorTotal));
  }
  
  const subVisitor = async () => {
    const response = await Axios.post('http://192.168.2.174:4000/sub')
    setVisitorMoment(response.data.map(val => val.visitorMoment));
  }

  const resMoment = async () => {
    const response = await Axios.post('http://192.168.2.174:4000/resMoment')
    setVisitorMoment(response.data.map(val => val.visitorMoment));
  }

  const resDaily = async () => {
    const response = await Axios.post('http://192.168.2.174:4000/resDaily')
    setVisitorDaily(response.data.map(val => val.visitorDaily));
  }

  const resTotal = async () => {
    const response = await Axios.post('http://192.168.2.174:4000/resTotal')
    setVisitorTotal(response.data.map(val => val.visitorTotal));
  }

  return (
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
  );
 }
//* test
export default App;
