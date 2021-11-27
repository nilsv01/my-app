const ReducerDaily = (state = 0, action) => {
    switch(action.type){
      case 'ADDDAILY':
        return state + 1;

      case 'RESETDAILY':
        return state = 0;    

      default:
        return state;
      }  
}
export default ReducerDaily;