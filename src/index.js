// module.exports = function check(str) {
//   const OPEN_BRACKETS = ['(', '[', '{', '|'];
//   const bracketsConfig = {
//     [')']: '(',
//     [']']: '[',
//     ['}']: '{',
//     ['|']: '|',
//   };

// let stack = [];
// if (str.length%2 !== 0) {
//   return false
// }
// for (let i = 0; i < str.length; i++) {
//   let strSymbol = str[i];

//   if (OPEN_BRACKETS.includes(strSymbol)) {
//     stack.push(strSymbol);
//   } else {
//     if (stack.length === 0) {
//       return false;
//     }

//     let topElement = stack[stack.length - 1];

//     if (bracketsConfig[strSymbol] === topElement) {
//       stack.pop();
//     } else {
//       return false;
//     }
//     if (topElement === '|') {
//       stack.pop();
//     }

//   }
// }

// return stack.length === 0;
// }

module.exports = function check(str, bracketsConfigur) {
    let bracketsConfig = {};
    let flat = bracketsConfigur.flat();

    for (let i = 1; i < flat.length; i += 2) {
        bracketsConfig[flat[i]] = flat[i - 1];
    }
    const OPEN_BRACKETS = Object.values(bracketsConfig);
    console.log(OPEN_BRACKETS);

    let stack = [];

    for (let i = 0; i < str.length; i++) {
        let strSymbol = str[i];
        let topElement = stack[stack.length - 1];

        const isElementClosingMirrorEl =
            bracketsConfig[strSymbol] === strSymbol && topElement === strSymbol;

        if (OPEN_BRACKETS.includes(strSymbol)) {
            if (isElementClosingMirrorEl) {
                stack.pop();
            } else {
                stack.push(strSymbol);
            }
        } else {
            if (stack.length === 0) {
                return false;
            }

            if (bracketsConfig[strSymbol] === topElement) {
                stack.pop();
            } else {
                return false;
            }
        }
    }

    return stack.length === 0;
}
