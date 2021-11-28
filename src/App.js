import './App.css';
import React, { useState } from 'react';
import { Box, Button, FormControl, TextField} from '@material-ui/core';
import Axios from  'axios';

function App() { 

  const [visitorMoment, setVisitorMoment] = useState(0);
  const [visitorDaily, setVisitorDaily] = useState(0);
  const [visitorTotal, setVisitorTotal] = useState(0);


  const addVisitor = () => {
    Axios.post('http://localhost:3001/add').then(() =>
    {console.log("success add");});
    setTimeout(2000);
    Axios.get('http://localhost:3001/getVisitorMoment').then((response) => {setVisitorMoment(response.data);});
    setTimeout(2000);
    Axios.get('http://localhost:3001/getVisitorDaily').then((response) => {setVisitorDaily(response.data);});
    setTimeout(2000);
    Axios.get('http://localhost:3001/getVisitorTotal').then((response) => {setVisitorTotal(response.data);});
    setTimeout(2000);
  }

  const subVisitor = () => {
    Axios.post('http://localhost:3001/sub').then(() =>
    {console.log("success sub");});
    setTimeout(2000);
    Axios.get('http://localhost:3001/getVisitorMoment').then((response) => {setVisitorMoment(response.data);});
    setTimeout(2000);
  }

  const resMoment = () => {
    Axios.post('http://localhost:3001/resMoment').then(() =>
    {console.log("success add");});
    setTimeout(2000);
    Axios.get('http://localhost:3001/getVisitorMoment').then((response) => {setVisitorMoment(response.data);});
    setTimeout(2000);
  }

  const resDaily = () => {
    Axios.post('http://localhost:3001/resDaily').then(() =>
    {console.log("success add");});
    setTimeout(2000);
    Axios.get('http://localhost:3001/getVisitorDaily').then((response) => {setVisitorDaily(response.data);});
    setTimeout(2000);
  }

  const resTotal = () => {
    Axios.post('http://localhost:3001/resTotal').then(() =>
    {console.log("success add");});
    setTimeout(2000);
    Axios.get('http://localhost:3001/getVisitorTotal').then((response) => {setVisitorTotal(response.data);});    
    setTimeout(2000);
  }

  const getVisitor = () => {
    
    Axios.get('http://localhost:3001/getVisitorMoment').then((response) => {setVisitorMoment(response.data);});
    setTimeout(2000);
    Axios.get('http://localhost:3001/getVisitorDaily').then((response) => {setVisitorDaily(response.data);});
    setTimeout(2000);
    Axios.get('http://localhost:3001/getVisitorTotal').then((response) => {setVisitorTotal(response.data);});
  }

  const getVisitorDaily = () => {
    Axios.get('http://localhost:3001/getVisitorDaily').then((response) =>
    { setVisitorDaily(response.data);});
  }

  const getVisitorTotal = () => {
    Axios.get('http://localhost:3001/getVisitorTotal').then((response) =>
    { setVisitorTotal(response.data);});
  }

  /*
  constructor(props){
    super(props);
    this.state = { errorOpen: false, isLoading: false, customer: {}}
    
    this.numberMoment = 0;
    this.numberDaily = 0;
    this.numberTotal = 0;
  }
  
  
  state = {
    momentVisitor: 0,
    dailyVisitor: 0,
    totalVisitor: 0
  }
   

  addVisitor = async () => {
    this.props.addMoment();
    this.props.addDaily();
    this.props.addTotal();
  }

  subVisitor = async () => {
    this.props.subMoment();
  }

  resMoment = async () => {
    this.props.resetMoment();
  }

  resDaily = async () => {
    this.props.resetDaily();
  }

  resTotal = async () => {
    this.props.resetTotal();
  }

  addVisitor = async () => {
    try {
      await AsyncStorage.setItem('momentVisitor', this.state.momentVisitor + 1);
      await AsyncStorage.setItem('dailyVisitor', this.state.dailyVisitor + 1);
      await AsyncStorage.setItem('totalVisitor', this.state.totalVisitor + 1);
    } catch (error) {
      // Error saving data
    }
  };
  
  subVisitor = async () => {
    try {
      await AsyncStorage.setItem('momentVisitor', this.state.momentVisitor - 1);
    } catch (error) {
      // Error saving data
    }
  };

  resMoment = async () => {
    try {
      await AsyncStorage.setItem('momentVisitor', 0);
    } catch (error) {
      // Error saving data
    }
  };

  resDaily = async () => {
    try {
      await AsyncStorage.setItem('dailyVisitor', 0);
    } catch (error) {
      // Error saving data
    }
  };

  resTotal = async () => {
    try {
      await AsyncStorage.setItem('dailyTotal', 0);
    } catch (error) {
      // Error saving data
    }
  };

  getVisitor = async () => {
    try {
      const constMoment = await AsyncStorage.getItem('momentVisitor');
      const constDaily = await AsyncStorage.getItem('dailyVisitor');
      const constTotal = await AsyncStorage.getItem('totalVisitor');

      if (constTotal!==null){
          this.setState({momentVisitor: constMoment});
          this.setState({dailyVisitor: constDaily});
          this.setState({totalVisitor: constTotal});
      }

    } catch (error) {
      // Error retrieving data
    }
  };
  render(){*/

  return (
    <div className="App">
      <header className="App-header">
        <Box className="App-Header">
          <h2 className="App-Dialog-Moment">Aktuelle Besucher</h2>
          <div style={{ height: 300, width: '90%' }}>
            <Button variant="outlined" color="primary" className ="App-Moment-Add-Button" onClick={addVisitor} >
                    +  </Button>
                    <TextField
                            className ="App-Output-Moment" 
                            disabled={false}
                            label=""
                            type={Number}
                            value={visitorDaily}
                        />
            <Button variant="outlined" color="primary" className ="App-Moment-Sub-Button" onClick={subVisitor}>
                    -
            </Button>
            <Button variant="outlined" color="primary" className ="App-Moment-Reset-Button" onClick={resMoment}>
                    Reset
            </Button>
          </div>
          <h2 className="App-Dialog-Daily">Heutige Besucher</h2>
          <div style={{ height: 300, width: '90%' }}>
            <TextField
                            className ="App-Output-Daily" 
                            disabled={false}
                            label=""
                            type={Number}
                            value={JSON.stringify(visitorDaily)}
                        />
            <Button variant="outlined" color="primary" className ="App-Daily-Reset-Button" onClick={resDaily}>
                    Reset
            </Button>
          </div>
          <h2 className="App-Dialog-Total">Gesamte Besucher</h2>
          <div style={{ height: 300, width: '90%' }}>
            <TextField
                            className ="App-Output-Total" 
                            disabled={false}
                            label=""
                            type={Number}
                            value={JSON.stringify(visitorTotal)}
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


/*
const mapStateToProps = (state) => {
  return{
    moment: state.moment,
    daily: state.daily,
    total: state.total
  }

}
const mapDisptachToProps = ()=> {
  return{
    addMoment,
    addDaily,
    addTotal,
    resetMoment,
    resetDaily,
    resetTotal,
    subMoment
  }
}
*/
//*export default connect(mapStateToProps, mapDisptachToProps())(App);
export default App;
