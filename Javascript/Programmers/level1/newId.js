/*
    카카오 아이디 추천
    - 소문자 치환
    - 소문자, 숫자, -, _, . 제외 모든 문자 제거
    - .. -> .
    - 마침표가 처음이나 끝에 위치하면 제거
    - 빈 문자열이면 a대입
    - 16자 이상이면 나머지 제거
    - .이 위치하면 마침표 제거
    - 2자 이하면 마지막 문자를 3이 될 때까지 붙임.
*/
function solution(new_id) {
    new_id = new_id.toLowerCase();
    new_id = new_id.match(/[a-z0-9_.]|-/g).join("");
    new_id = new_id.replaceAll(/\.+/g, ".");
    new_id = new_id.replaceAll(/^\.|\.$/g, "");
    if (!new_id.length) new_id = "a";
    new_id = new_id.substring(0, 15);
    new_id = new_id.replace(/\.$/g, "");
    new_id = new_id.padEnd(3, new_id.at(-1));
    return new_id;
}