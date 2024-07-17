//  У кожному масиві є унікальний рядок, у якому не повторюються літери. Знайдіть і виведіть цей рядок
function findUniq(arr) {
  let uniqueString = null;

  for (let str of arr) {
    // console.log(arr);
    let isUnique = true;
    for (let i = 0; i < str.length; i += 1) {
      if (str.indexOf(str[i]) !== str.lastIndexOf(str[i])) {
        isUnique = false;
        break;
      }
    }
    if (isUnique) {
      uniqueString = str;
      break;
    }
  }
}

console.log(findUniq(["abc", "acb", "bac", "foo", "bca", "cab", "cba"])); // === 'foo'
// findUniq(["fghj", "ghfj", "abcd", "jhgf", "fghj", "fgjh", "ghjf"]); // === 'abcd'
// findUniq(["qwe", "camp", "acmp", "pmac", "camp", "apmc", "pmac"]); // === 'qwe'
