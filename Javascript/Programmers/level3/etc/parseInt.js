/*
    1. x가 있는 것, 없는 것 필터링
    2. 수식을 쪼갤 함수 선언
        > = 기준으로 쪼개고, -인지 +인지 분리해서 쪼갬
    3. 계산을 해서 예측값에서 차이가 얼만큼 나느지를 정하고 그걸 n 진법으로 정의
        > 예상값보다 크다? 그럼 그 예상값의 가장 큰 수가 진법으로 계산 안 된 거임
    4. 1의 자리가 n보다 큰 모르는 값은 그냥 x로 두고 아는 것들은 계산함.
*/

function solution(expressions) {
  const max = Math.max(
    ...expressions.flatMap((expression) => expression.match(/[1-9]/g))
  );
  const knowns = expressions.filter((expression) => !expression.endsWith("X"));
  const unknowns = expressions.filter((expression) => expression.endsWith("X"));
  const result = [];

  let n = max;

  function parseExpression(expression) {
    const [left, right] = expression.split(" = ");
    const [a, operator, b] = left.split(" ");

    return [operator, a, b, right];
  }

  for (const known of knowns) {
    // expected <= answer
    const [operator, a, b, right] = parseExpression(known);
    const expected = operator === "+" ? +a + +b : +right + +b;
    const answer = operator === "+" ? right : a;
    const gap = +Math.abs(+answer - expected).toString()[0];

    if (gap) {
      const max = Math.max(...expected.toString().split(""));
      n = max - gap + 1;
    }
  }

  for (const unknown of unknowns) {
    const max = Math.max(...unknown.match(/[1-9]/g));
    if (max > n) {
      result.push(unknown.replace("X", "?"));
    } else {
      const [operator, a, b] = parseExpression(unknown);
      const answer =
        operator === "+"
          ? parseInt(a, n) + parseInt(b, n)
          : parseInt(a, n) - parseInt(b, n);
      result.push(
        `${a} ${operator} ${b} = ${isNaN(answer) ? "?" : answer.toString(n)}`
      );
    }
  }

  return result;
}
