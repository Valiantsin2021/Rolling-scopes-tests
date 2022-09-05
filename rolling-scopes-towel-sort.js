const arr = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16],
];
  
export function towelSort(arr) {
    if(!arr || arr.length === 0) {
        return []
    } else {
         for(let i = 1; i < arr.length;) {
            arr[i].sort((a, b) => b - a)
            i = i + 2
    }
        return arr.flat()
    }
}