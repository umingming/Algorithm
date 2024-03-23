/*
    행렬의 곱셈
    -arr1의 행과 arr2의 열의 곱을 더한 값
    -arr2의 크기를 열로하고, arr1의 크기를 행으로 함.
    
    1. result 선언
    2. for arr1의 크기만큼 반복
        > row 변수 정의; 
        > for arr2의 요소 크기만큼 반복
            > arr1[i]와 arr2 요소들의 j와 곱해서 row에 push
*/
function solution(arr1, arr2) {
    const result = [];
    
    for (let i = 0; i < arr1.length; i++) {
        const row = Array.from({length : arr2[0].length}, () => 0);
        for (let j = 0; j < arr2[0].length; j++) {
            row[j] = arr1[i].reduce((acc, cur, index) => acc + cur * arr2[index][j],0)
        }
        result.push(row);
    }
    
    return result;
}