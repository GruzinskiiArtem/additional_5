module.exports = function check(str, bracketsConfig) {
    var elements = str.split('');
    var temporaryArrayOfElements = [];
    var flag1 = true;
    var flag7 = true;
    var flag8 = true;
    elements.forEach(function (value) {
        for(var couples = 0; couples < bracketsConfig.length; couples++) {
            if (bracketsConfig[couples][0] == value) {
                if (value === '|' || value === '8' || value === '7') {
                    if (flag7 && value === '7') {
                        temporaryArrayOfElements.push(value);
                        flag7 = false;
                    } else if (flag8 && value === '8') {
                        temporaryArrayOfElements.push(value);
                        flag8 = false;
                    } else if (flag1 && value === '|') {
                        temporaryArrayOfElements.push(value);
                        flag1 = false;
                    } else if (temporaryArrayOfElements[temporaryArrayOfElements.length - 1] == value) {
                        temporaryArrayOfElements.pop();
                        if (!flag7 && value == '7') {
                            flag7 = true;
                        } else if (!flag8 && value == '8') {
                            flag8 = true;
                        } else if (!flag1 && value == '|') {
                            flag1 = true;
                        }
                    } else {
                        temporaryArrayOfElements.push(value);
                    }
                } else {
                    temporaryArrayOfElements.push(value);
                }
            } else if (bracketsConfig[couples][1] == value &&
                bracketsConfig[couples][0] == temporaryArrayOfElements[temporaryArrayOfElements.length - 1]) {
                temporaryArrayOfElements.pop();
            }
        }
    });
    if (temporaryArrayOfElements.length === 0) {
        return true;
    } else {
        return false;
    }
}
