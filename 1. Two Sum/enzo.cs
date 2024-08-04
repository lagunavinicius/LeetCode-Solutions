public class Solution {
    public int[] TwoSum(int[] nums, int target) {
        for (int i = 0; i < nums.Length; i++) {
            int numeroAtual = nums[i];
            
            for (int j = i + 1; j < nums.Length; j++) {
                if (numeroAtual + nums[j] == target) {
                    return new int[] { i, j };
                }
            }
        }
        return new int[] {};  
    }
}
