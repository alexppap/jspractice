
function isNumeric(s)
{
    return s.match(/[+-]?\d*(\.\d+)?([eE][+-]?\d+)?/g)[0] === s;
}

