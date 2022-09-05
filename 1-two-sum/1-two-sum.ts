function twoSum(nums: number[], target: number): number[] {
    
    for(let i=0;i<nums.length;i++)
        {
        if(nums[i]+nums[i+1] === target){
            return [i,i+1]
        }
        else{         
            for(let j=1;j<nums.length;j++){
                if( !(i===j) && nums[i]+nums[j] === target){
                    return [i,j]
                }
            }  
        }
    }
};