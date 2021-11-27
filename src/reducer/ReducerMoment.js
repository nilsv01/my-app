const ReducerMoment = (state = 0, action) => {
    switch(action.type){
      case 'ADDMOMENT':
        return state + 1;               
               
      case 'SUBMOMENT':
        return state - 1;             
               
      case 'RESETMOMENT':
        return state = 0;              
               
      default:
        return state;
      }  
}
export default ReducerMoment;