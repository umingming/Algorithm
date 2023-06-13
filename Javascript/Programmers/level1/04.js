/*
    최소한의 이동거리를 갖는 드래그 시작점, 끝점 정수 배열 반환
    - lux, luy, rdx, rdy
    - lu < rd

    1. hasFile, getRowIndex, getColumnIndex 정의
    2. lux, luy, rdx, rdy 할당 후 반환
*/
function solution(wallpaper) {
    const rows = wallpaper.map(i => i.split(""));
    const columns = rows.reduce((acc, cur) => {
        cur.forEach((value, i) => {
            if (!acc[i]) {
                acc[i] = [];
            }
            acc[i].push(value);
        });
        return acc;
    }, [])
    const hasFile = (data) => data.includes("#");
    const getFileIndex = (arr) => arr.findIndex(i => hasFile(i));

    const lux = getFileIndex(rows);
    const luy = getFileIndex(columns);
    const rdx = rows.length - getFileIndex(rows.reverse());
    const rdy = columns.length - getFileIndex(columns.reverse());

    return [lux, luy, rdx, rdy];
}