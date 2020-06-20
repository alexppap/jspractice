// 输入一个矩阵，按照从外向里以顺时针的顺序依次打印出每一个数字，例如，如果输入如下4 X 4矩阵： 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 则依次打印出数字1,2,3,4,8,12,16,15,14,13,9,5,6,7,11,10.

//依次创建队列或栈，进行取出操作

function printMatrix(matrix)
{
    // write code here
    let res = [];
    while(matrix.length !== 0){
        let a = matrix.shift()
        for(let i in a){
            res.push(a[i])
        }
        if(matrix.length !== 0 && matrix[0].length !== 0){
            for(let row in matrix){
                res.push(matrix[row].pop())
            }
        }
        if(matrix.length !== 0){
            let b = matrix.pop().reverse()
            for(let i in b){
                res.push(b[i])
            }
        }
        if(matrix.length !== 0 && matrix[0].length !== 0){
            for(let i= matrix.length-1;i>=0;i--){
                res.push(matrix[i].shift())
            }
        }
    }
    return res;
}