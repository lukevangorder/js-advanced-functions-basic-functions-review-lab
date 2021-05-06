// Your code here
function saturdayFun(activity="roller-skate") {
    return `This Saturday, I want to ${activity}!`;
}

function mondayWork(work="go to the office") {
    return `This Monday, I will ${work}.`;
}

function wrapAdjective(flair="*") {
    return function(adj="special") {
        let adje = flair + adj + flair;
        return `You are ${adje}!`;
    };
}

const Calculator = {
    add: function(a,b) {
        return a+b;
    },
    subtract: function(a,b) {
        return a-b;
    },
    multiply: function(a,b) {
        return a*b;
    },
    divide: function(a,b) {
        return a/b;
    }
}

function actionApplyer(int, arr) {
    if (arr.length === 0) {
        return int;
    } else {
        for(const fn of arr ) {
            int = fn(int);
        }
        return int;
    }
}