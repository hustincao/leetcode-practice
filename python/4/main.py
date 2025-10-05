# Not O(m+n)
from statistics import median

def findMedianSortedArrays(nums1, nums2) -> float:
    return median(sorted(nums1 + nums2))


x = findMedianSortedArrays([0,1,2],[0,1,2])
print(x)