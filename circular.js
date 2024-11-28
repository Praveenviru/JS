function circleArray(){
    let arr=[[1,2,3],
             [4,5,6],
             [7,8,9]]
             console.log(arr)
             let sum=""
             let sum1=""
            
            for(let i=arr.length-1;i>=0;i--){
              for(let j=0;j<arr.length;j++){
              if(j==0)
              console.log(arr[i][j]);
            }
            
            }
          
            for(let i=0;i<arr.length;i++){
              for(let j=0;j<arr.length;j++){
                if(i==0&&j!=0){
                  console.log(arr[i][j])
                }
                else if(j==arr.length-1){
                console.log(arr[i][j])
                }
              }
            }
          
                for(let i=0;i<arr.length;i++){
              for(let j=0;j<arr.length;j++){
                 if(i==2&&j==1)
              console.log(arr[i][j])
              }
                }
                
              
            
            
  }
  circleArray()