function productExceptSelf(nums: number[]): number[] {
  let product_arr = new Array(nums.length);
  let pre = new Array(nums.length).fill(1);
  let suf = new Array(nums.length).fill(1);
  for (let i = 1; i < nums.length; i++) {
    let j = nums.length - 1 - i;
    pre[i] = pre[i - 1] * nums[i - 1];
    suf[j] = suf[j + 1] * nums[j + 1];
    // suf[i] = suf[nums.length - 1]
  }

  for (let i = 0; i < nums.length; i++) {
    product_arr[i] = pre[i] * suf[i];
  }

  console.log("pre: ", pre);
  console.log("suf: ", suf);

  return product_arr;
}

console.log(productExceptSelf([1, 2, 3, 4]));

// [1,2,3,4,5,6,7,8]
// [2,3,4,5,6,7,8,1]
// [2*3, 3*4, 4*5, 5*6, 6*7, 7*8, 1*2]
