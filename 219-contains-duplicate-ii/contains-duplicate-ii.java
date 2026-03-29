class Solution {
    public boolean containsNearbyDuplicate(int[] nums, int k) {
       Map<Integer,Integer> hs=new HashMap<Integer,Integer>();
       for(int i=0;i<nums.length;i++)
       {
        int val=hs.getOrDefault(nums[i],-1);
        if(val==-1)
        hs.put(nums[i],i);
        else
        {
            System.out.println("key and val "+i +" "+val+" "+nums[i]);
            if(Math.abs(i-val)<=k)
            return true;
            hs.put(nums[i],i);
        }
       }
       return false; 
    }
}