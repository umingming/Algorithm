function solution(strings, n) {
    return strings.sort((a, b) => a[n] > b[n] ? 1 : a[n] < b[n] ? -1 : a < b ? -1 : a > b ? 1 : 0);
}