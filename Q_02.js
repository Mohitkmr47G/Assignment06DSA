var searchMatrix = function(matrix, target) {
    let start=0;
    let end=matrix.length-1;
    let row;
    let n=matrix[0].length-1;
    while(start<=end){
        let mid=Math.floor((start+end)/2);
        if(target>=matrix[mid][0] && target<=matrix[mid][n]){
            row=mid;
           
            break;
        }else if(target<matrix[mid][0]){
            end=mid-1;
        }else{
            start=mid+1;
        }
        
    }

    if(row==undefined)return false;
   
    let first=0,last=matrix[0].length-1;
    while(first<=last){
        let mid=Math.floor((first+last)/2);
        if(matrix[row][mid]===target){
            return true;
        }else if(matrix[row][mid]<target){
            first=mid+1;
        }else{
            last=mid-1;
        }
    }
    return false;
     console.log(first,last)
};