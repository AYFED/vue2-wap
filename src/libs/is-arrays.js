export default function (value) {
  if (!value) {
    return false
  }
  return Object.prototype.toString.call(value) === '[object Array]'
}


/*判断一个元素是否在数组中*/
export default function contains (arr, val) {
  return arr.indexOf(val) != -1 ? true : false;
}


/**
 * @param  {arr} 数组
 * @param  {fn} 回调函数
 * @return {undefined}
 */
export default function each (arr, fn) {
  fn = fn || Function;
  var a = [];
  var args = Array.prototype.slice.call(arguments, 1);
  for(var i = 0; i < arr.length; i++) {
    var res = fn.apply(arr, [arr[i], i].concat(args));
    if(res != null) a.push(res);
  }
}

/**
 * @param  {arr} 数组
 * @param  {fn} 回调函数
 * @param  {thisObj} this指向
 * @return {Array}
 */
export default function map (arr, fn, thisObj) {
  var scope = thisObj || window;
  var a = [];
  for(var i = 0, j = arr.length; i < j; ++i) {
    var res = fn.call(scope, arr[i], i, this);
    if(res != null) a.push(res);
  }
  return a;
}


/**
 * @param  {arr} 数组
 * @param  {type} 1：从小到大   2：从大到小   3：随机
 * @return {Array}
 */
export default function sort (arr, type = 1) {
  return arr.sort( (a, b) => {
    switch(type) {
      case 1:
        return a - b;
      case 2:
        return b - a;
      case 3:
        return Math.random() - 0.5;
      default:
        return arr;
    }
  })
}

/*去重*/
export default function unique (arr) {
  if ( Array.hasOwnProperty('from') ) {
    return Array.from(new Set(arr));
  }else{
    var n = {},r=[];
    for(var i = 0; i < arr.length; i++){
      if (!n[arr[i]]){
        n[arr[i]] = true;
        r.push(arr[i]);
      }
    }
    return r;
  }
  // 注：上面 else 里面的排重并不能区分 2 和 '2'，但能减少用indexOf带来的性能,暂时没找到替代的方法。。。
  /* 正确排重
  if ( Array.hasOwnProperty('from') ) {
      return Array.from(new Set(arr))
  }else{
      r = []
      for(var i=0; i < arr.length; i++) {
          if(r.indexOf(arr[i]) === -1) {
              r.push(arr[i])
          }
      }
      return r
  }

   */
}


/*求两个集合的并集*/
export default function union (a, b) {
  var newArr = a.concat(b);
  return this.unique(newArr);
}

/*求两个集合的交集*/
export default function intersect (a, b) {
  var _this = this;
  a = this.unique(a);
  return this.map(a, function(o) {
    return _this.contains(b, o) ? o : null;
  });
}

/*删除其中一个元素*/
export default function remove (arr, ele) {
  var index = arr.indexOf(ele);
  if(index > -1) {
    arr.splice(index, 1);
  }
  return arr;
}

/*将类数组转换为数组的方法*/
export default function formArray (ary) {
  var arr = [];
  if(Array.isArray(ary)) {
    arr = ary;
  } else {
    arr = Array.prototype.slice.call(ary);
  };
  return arr;
}

/*最大值*/
export default function max (arr) {
  return Math.max.apply(null, arr);
}

/*最小值*/
export default function min (arr) {
  return Math.min.apply(null, arr);
}

/*求和*/
export default function sum (arr) {
  return arr.reduce( (pre, cur) => {
    return pre + cur
  })
}

/*平均值*/
export default function average (arr) {
  return this.sum(arr)/arr.length
}
