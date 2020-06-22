function FindNumsAppearOnce(array)
{
        // return list, 比如[a,b]，其中ab是出现一次的两个数字
    const res = [];
    for(let i=0;i<array.length;i++){
        if(array.indexOf(array[i])=== array.lastIndexOf(array[i])){
            res.push(array[i])
        }
    }
    return res;
}

// function FindNumsAppearOnce(array)
// {
//     // write code here
//     // return list, 比如[a,b]，其中ab是出现一次的两个数字
//     function findFirst1(num) {
//         var index = 0;
//         while (((num & 1) === 0) && (index < 64)) {
//             num = num >> 1;
//             index++;
//         }
//         return index;
//     }
//     function is1(num, index) {
//         num = num >> index;
//         return num & 1;
//     }
//     if (Array.isArray(array)) {
//         if (array.length < 2) {
//             return [];
//         }
//         var exclusive = 0;
//         for (var i = 0; i < array.length; i++) {
//             exclusive ^= array[i];
//         }
//         var indexOf1 = findFirst1(exclusive);
//         var num1 = 0,
//             num2 = 0;
//         for (i = 0; i < array.length; i++) {
//             if (is1(array[i], indexOf1)) {
//                 num1 ^= array[i];
//             } else {
//                 num2 ^= array[i];
//             }
//         }
//         return [num1, num2];
//     }
// }