function validate(code) {
  const [yy, rest] = code.split("-");

  if (!(+yy >= 13 && +yy <= 22) || !rest) {
    return false;
  }

  const pattern = /^(SP|KE|MO|CO|DE)(0[1-9]|1[0-2])(0[1-9]|[1-9][0-9])$/;

  if (!pattern.test(rest)) {
    return false;
  }

  const [_, type, mm, nn] = rest.match(pattern);

  if ((+yy === 13 && +mm < 4) || (+yy === 22 && +mm > 8)) {
    return false;
  }

  //   const pattern =
  //     /(^((13-(SP|KE|MO|CO|DE)(0[4-9]|1[0-2]))|(22-(SP|KE|MO|CO|DE)(0[1-8]))|(1[4-9]|2[0-1])-(SP|KE|MO|CO|DE)(0[1-9]|1[0-2])))(0[1-9]|[1-9][0-9])$/;

  //   return pattern.test(code);
  return [yy, type, mm, nn];
}

function solution(codes) {
  const typePriority = {
    SP: 0,
    KE: 1,
    MO: 2,
    CO: 4,
    DE: 5,
  };
  return codes
    .map(validate)
    .filter((value) => value)
    .sort(
      (a, b) =>
        +a[0] - +b[0] ||
        typePriority[a[1]] - typePriority[b[1]] ||
        +a[2] - +b[2] ||
        +a[3] - +b[3]
    )
    .map(([yy, type, mm, nn]) => `${yy}-${type}${mm}${nn}`);
}

console.log(
  solution([
    "20-DE0815",
    "20-CO1299",
    "20-MO0901",
    "20-KE0511",
    "20-SP1102",
    "21-DE0401",
    "21-CO0404",
    "21-MO0794",
    "21-KE0704",
    "21-SP0404",
    "19-DE0401",
    "19-CO0404",
    "19-MO0794",
    "19-KE1204",
    "19-SP0404",
  ])
);
