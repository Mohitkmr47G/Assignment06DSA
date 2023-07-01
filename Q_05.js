function minValue(A, B, n)
{
     
   
    A.sort(function(a,b){
        return a - b;
    });
    B.sort(function(a,b){
        return a - b;
    });
 
   
    let result = 0;
    for(let i = 0; i < n; i++)
        result += (A[i] * B[n - i - 1]);
 
    return result;
}