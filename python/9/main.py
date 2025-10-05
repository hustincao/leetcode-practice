from math import floor

def isPalindrome(x:int):
    str_number = str(x)
    len_of_num = len(str_number)
    for i in range(0, floor(len_of_num/2)):
        print(i)
        if str_number[i] != str_number[len_of_num-(i+1)]:
            return False
    return True

print(isPalindrome(121))