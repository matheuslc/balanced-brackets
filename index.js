export const balance = str => {
    let expectedBracket,
        stack = [],
        opens = ['[', '{', '('],
        closed = [']', '}', ')'];

    for (let value of str) {
        if (checkItemInList(opens, value)) {
            stack.push(value);
        } else if (checkItemInList(closed, value)) {
            expectedBracket = opens[closed.indexOf(value)];

            if (stack.length === 0 || (stack.pop() !== expectedBracket)) {
                return false;
            }
        }
    }

    return (stack.length === 0);
};

function checkItemInList(list, bracket) {
    return list.indexOf(bracket) > -1
};