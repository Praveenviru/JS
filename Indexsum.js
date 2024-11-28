function array(){
    let arr=[[1,2],
              [3,4],
              [5,6]]
              
        for(let i=0;i<arr.length;i++){
          let sum="";let sum1=0
          for(let j=0;j<arr[i].length;j++){
            sum1=i+j;
            sum=sum+" "+sum1;
          }
          console.log(sum);
        }
  }
  array()