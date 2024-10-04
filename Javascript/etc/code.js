function solution(code) {
  const pattern =
    /(^((13-(SP|KE|MO|CO|DE)(0[4-9]|1[0-2]))|(22-(SP|KE|MO|CO|DE)(0[1-8]))|(1[4-9]|2[0-1])-(SP|KE|MO|CO|DE)(0[1-9]|1[0-2])))(0[1-9]|[1-9][0-9])$/;

  return pattern.test(code);
}

console.log(solution("22-MO0815"));
console.log(solution("23-MO0815"));
console.log(solution("13-MO0315"));
console.log(solution("22-MO0915"));
console.log(solution("22-MO815"));
console.log(solution("22MO0815"));
console.log(solution("22-MO08100"));
console.log(solution("22-MN0815"));
