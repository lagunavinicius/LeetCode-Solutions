/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    // Ensure nums1 is the smaller array
    if (nums1.length > nums2.length) {
        [nums1, nums2] = [nums2, nums1];
    }

    const m = nums1.length;
    const n = nums2.length;
    let imin = 0, imax = m, halfLen = Math.floor((m + n + 1) / 2);

    while (imin <= imax) {
        let i = Math.floor((imin + imax) / 2);
        let j = halfLen - i;

        // Adjust partitions
        let nums1LeftMax = (i === 0) ? -Infinity : nums1[i - 1];
        let nums1RightMin = (i === m) ? Infinity : nums1[i];
        let nums2LeftMax = (j === 0) ? -Infinity : nums2[j - 1];
        let nums2RightMin = (j === n) ? Infinity : nums2[j];

        if (nums1LeftMax <= nums2RightMin && nums2LeftMax <= nums1RightMin) {
            if ((m + n) % 2 === 0) {
                return (Math.max(nums1LeftMax, nums2LeftMax) + Math.min(nums1RightMin, nums2RightMin)) / 2;
            } else {
                return Math.max(nums1LeftMax, nums2LeftMax);
            }
        } else if (nums1LeftMax > nums2RightMin) {
            imax = i - 1;
        } else {
            imin = i + 1;
        }
    }

    throw new Error("Input arrays are not sorted.");
};