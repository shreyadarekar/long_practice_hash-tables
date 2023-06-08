function anagrams(str1, str2) {
  const str1Set = new Set (str1);
  for(let i = 0; i < str2.length; i++){
    let char = str2[i]
    if(!str1Set.has(char)){
      return false;
    }
  }
  return true;
}


function commonElements(arr1, arr2) {
  const arr1Set = new Set(arr1)
  return arr2.filter((el) => arr1Set.has(el))
}


function duplicate(arr) {
  const setArr = new Set ()
  for(let i = 0; i < arr.length; i++){
    let el = arr[i];
    if(setArr.has(el)){
      return el;
    }
    setArr.add(el)
  }
}


function twoSum(nums, target) {
  const setArr = new Set ()
  for(let i = 0; i < nums.length; i++){
    let el = nums[i]
    const sub = target - el
    if(setArr.has(sub)){
      return true;
    } else {
      setArr.add(el)
    }
  }
  return false;
}


function wordPattern(pattern, strings) {
  // Your code here
}


module.exports = [anagrams, commonElements, duplicate, twoSum, wordPattern];
