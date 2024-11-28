function Zigzag(){
    let arr=[[1,2,3,4,5],
            [6,7,8,9,1],
            [3,2,5,4,6],
            [7,8,9,1,2]]
            let sum1="";
            
    for(let i=0;i<arr.length;i++){
       let sum="";
      if(i%2==0){
      for(let j=arr[0].length-1;j>=0;j--){
        sum=sum+arr[i][j]
      }
      }
      else{
        for(let j=0;j<arr[0].length;j++){
          sum=sum+arr[i][j];
        }
      }
      sum1=sum1+sum;
    }
    console.log(sum1)
    
    
  }
  Zigzag()