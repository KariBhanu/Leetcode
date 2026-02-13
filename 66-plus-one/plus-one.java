class Solution {
    public int[] plusOne(int[] digits) {
        int i=digits.length-1;
        while(true)
        {
            if(i>0 && digits[i]==9)
            {
                digits[i]=0;
                if(i==0 && digits[i]==9)
                {
                    digits=new int[digits.length+1];
                    digits[0]=1;
                    break;
                }
                else 
                i=i-1;
            }
            else if(i==0 && digits[i]==9)
            {
                digits[0]=1;
                 digits=new int[digits.length+1];
                    digits[0]=1;
                    break;
            }
            else
            {
                digits[i]=digits[i]+1;                
                break;
            }
        }
        return digits;
        
    }
}