/*
    유효한 스킬 트리 갯수
    
    1. skill을 쪼개고 "|"로 join한 값으로 전역 패턴 정의
    2. skill_trees를 필터링해서 길이 반환
        > 스킬 트리를 패턴으로 매칭한 값이 skill 순서와 일치하는지
*/
function solution(skill, skill_trees) {
    const pattern = new RegExp(skill.split("").join("|"), "g");
    const { length } = skill_trees.filter(tree => {
        const matchs = tree.match(pattern);
        return !matchs || matchs.every((match, i) => match === skill[i]);
    })
    return length;
}