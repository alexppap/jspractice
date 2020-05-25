parseFloat(0.1+0.2).toFixed(10) == 0.3

parseFloat(1-0.9).toFixed(10) == 0.1


//toPrecision用于处理精度，从左至右第一个不为0的数开始数起。

//toFixed用于处理小数点后精度的个数，从小数点处开始数起，末尾精度四舍五入计算。结果为字符型。

//Math.round进行四舍五入取整。