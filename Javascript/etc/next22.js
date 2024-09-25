/*
    1. 인자로 받은 문자열을 . 으로 쪼개서 배열에 저장
    2. 배열을 반복하며 탐색
*/

function safelyGet(object, keyStr) {
    const keys = keyStr.split(".");
    let result = object;
    
    for (const key of keys) {
        result = result?.[key];
    }

    console.log(result)
}
/* repository가 undefined인 경우 */
const object1 = {
    repository: undefined,
  };
  
  /* repository의 readme가 undefined인 경우 */
  const object2 = {
    repository: {
      readme: undefined,
    },
  };
  
  /** repository.readme 모두가 존재하는 경우 */
  const object3 = {
    repository: {
      readme: {
        extension: 'md',
        content: '금융을 쉽고 간편하게',
      }
    }
  };

safelyGet(object1, 'repository.readme.extension')
// -> 반환 값: undefined

safelyGet(object1, 'repository.readme')
// -> 반환 값: undefined

safelyGet(object1, 'repository')
// -> 반환 값: undefined

safelyGet(object2, 'repository.readme.extension')
// -> 반환 값: undefined

safelyGet(object2, 'repository.readme')
// -> 반환 값: undefined

safelyGet(object2, 'repository')
// -> 반환 값: { readme: undefined }

safelyGet(object3, 'repository.readme.extension')
// -> 반환 값: 'md'

safelyGet(object3, 'repository.readme')
// -> 반환 값: { extension: 'md' }