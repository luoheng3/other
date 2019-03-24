/**
 * Created by 14486 on 2019/3/24.
 */
// 关于数组的几个骚操作
// 1: 扁平化n维数组(ES10)  arr.flat(2)// n表示维度
var arr = [1,2,[3,[4,5]]].flat(3); // [1,2,3,4,5]

//  实现原理
function fn(arr) {
    while(arr.some(item=>Array.isArray(item))){
        arr = [].concat(...arr);
    }
    return arr;
}
// 2: 数组去重
var arr1 = [...new Set([1,2,42,1,32,12,2])]; // 利用es6set数据结构成员唯一的特点
// 利用
function fn(arr) {
    var length = arr.length,
        json = {},
        res = [];
    for (var i = 0; i < length; i++) {
        if(!json[arr[i]]){ // 利用对象的属性值来判断
            res.push(arr[i]); // 第一次没有值,push 当他为真的时候就是重复的
            json[arr[i]] = true;
        }
    }
    return res;
}
/*
* arr.reduce(callback,initVal) ES5的API
*   为数组中的每一个元素依次执行回调函数,但不包括被删除或未被赋值的元素,接收四个参数
*   1:prev 上一次调用回调返回的值,或者是提供的初始值(initVal)
*   2:currentValue 数组的当前被处理元素的值
*   3:index 当前元素的序号
*   4:self 数组本身
*   initVal作为第一次调用 callback的第一个参数(提供初始值可以避免有些时候报错)
*/
var arr2 = arr.reduce((prev,curr)=>{
    return prev + curr; // 初级用法 数组求和 求乘积
});
// arr2 = 89; 计算数组每一项的和
// 高级用法1:计算数组中每个元素出现的次数
var arr3 = arr.reduce((pre,cur)=>{
    if(cur in pre){
        pre[cur]++
    }else{
        pre[cur] = 1;
    }
    return pre;
},{});
// 高级用法2 数组去重
let arr4 = arr.reduce((pre,cur)=>{
    if(pre.indexOf(cur)){
        pre.push(cur)
    }
    return pre;
},[]);
