const ReducerTotal = (state = 0, action) => {
    switch(action.type){
      case 'ADDTOTAL':
        return state + 1;               
               
      case 'RESETTOTAL':
        return state = 0;          
                     
      default:
        return state;
      }  
}
export default ReducerTotal;
