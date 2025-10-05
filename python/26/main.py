def removeDuplicates(nums):
    writeIndex = 1
    readIndex = 1
    while readIndex < len(nums):
        if nums[writeIndex-1] == nums[readIndex]:
            readIndex += 1
        else:
            nums[writeIndex] = nums[readIndex]
            writeIndex += 1
            readIndex += 1
    return writeIndex

print(removeDuplicates([0,0,1,1,1,2,2,3,3,4]))