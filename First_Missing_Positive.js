function firstMissingPositive(nums){
    nums.sort();
    let smallNum = 1;
    for( let i=0 ; i < nums.length ; i++){
         if(smallNum == nums[i]){
            smallNum++;
         }
         else if(smallNum < nums[i]){
            return smallNum;
         }
    }
    return smallNum;
}

console.log(firstMissingPositive([0, -2, 1, 2]));   
console.log(firstMissingPositive([3, 4, -1, 1]));   
console.log(firstMissingPositive([7, 8, 9]));       
console.log(firstMissingPositive([]));  