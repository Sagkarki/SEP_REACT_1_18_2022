
//filter
Array.prototype.filter = function (cb) {
    const res = [];
      for (let i = 0; i < this.length; i++) {
      if   (cb(this[i])){
res.push(this[i]);
       
     }
      }
      return res;
    }

//reduce
const num = [10,20,30]
Array.prototype.reduce = function (cb) {
    let res = 0;
      for (let i = 0; i < this.length; i++) {
      app= app+ this[i];
      }
      cb(res);
    };

//some

Array.prototype.some = function (cb) {
    for (let i = 0; i < this.length; i++) {
        res = cb(this[i], i, this)
        if (res) {
            return true;
        }
    }
    return false;
}

//every
Array.prototype.every = function (cb) {
    for (let i = 0; i < this.length; i++) {
        res = cb(this[i], i, this)
        if (res) {
            return true;
        }
    }
    return false;
}
    