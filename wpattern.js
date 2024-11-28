function WPattern(rows) {
    for (let i = 1; i <= rows; i++) {
      let str = "";
  
      
      for (let j = 1; j <= rows - i; j++) {
        str += " ";
      }
  
      
      for (let j = 1; j <= i; j++) {
        str += "* ";
      }
  
      
      for (let j = 1; j <= rows - i - 1; j++) {
        str += "  ";
      }
  
    
      for (let j = 1; j <= i; j++) {
        str += "* ";
      }
  
      console.log(str);
    }
  }
  
  
  WPattern(5);