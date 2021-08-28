module.exports = function check(str) {
  const OPEN_BRACKETS = ['(', '[', '{', '|'];
  const bracketsConfig = {
    [')']: '(',
    [']']: '[',
    ['}']: '{',
    ['|']: '|',
  };

  
    let stack = [];

    for (let i = 0; i < str.length; i++) {
      let strSymbol = str[i];

      if (OPEN_BRACKETS.includes(strSymbol)) {
        stack.push(strSymbol);
      } else {
        if (stack.length === 0) {
          return false;
        }

        let topElement = stack[stack.length - 1];

        if (bracketsConfig[strSymbol] === topElement) {
          stack.pop();
        } else {
          return false;
        }
        if (topElement === '|') {
          stack.pop();
        } 
        
      }
    }

    return stack.length === 0;
  
}

