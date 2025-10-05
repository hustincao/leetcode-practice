def maxArea(height) -> int:
    index1 = ptr1 = 0
    index2 = ptr2 = len(height)-1
    containerSize = min(height[index1], height[index2]) * (index2 - index1)
    while(ptr1 != ptr2):
        if(height[ptr1] < height[ptr2]):
            ptr1 += 1
        else:
            ptr2 -= 1
        newContainerSize = min(height[ptr1], height[ptr2]) * (ptr2 - ptr1)
        if newContainerSize > containerSize:
            index1 = ptr1
            index2 = ptr2
            containerSize = newContainerSize
    return containerSize
print(maxArea([1,1]))