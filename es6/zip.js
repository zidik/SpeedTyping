var zip    = (left, right) =>_zip(left,right,Math.min(left.length, right.length));
var zipAll = (left, right) =>_zip(left,right,Math.max(left.length, right.length));
var zipLeft = (left, right) =>_zip(left,right,left.length);

var _zip = (left, right, until) => {
    var counter,
        results = [];
    for(counter = 0; counter < until; counter++) {
        results.push([left[counter], right[counter]]);
    }

    return results;
};

export {zip, zipAll, zipLeft};