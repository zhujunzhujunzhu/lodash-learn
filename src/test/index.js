import { times, toString } from "lodash-es";
{
  // 使用
  console.log(times);
  console.log(times(3, toString));
}

{
  // 自定义实现
}

{
  // 源码学习
  // function times(n, iteratee) {
  //   n = toInteger(n);
  //   if (n < 1 || n > MAX_SAFE_INTEGER) {
  //     return [];
  //   }
  //   var index = MAX_ARRAY_LENGTH,
  //     length = nativeMin(n, MAX_ARRAY_LENGTH);
  //   iteratee = castFunction(iteratee);
  //   n -= MAX_ARRAY_LENGTH;
  //   var result = baseTimes(length, iteratee);
  //   while (++index < n) {
  //     iteratee(index);
  //   }
  //   return result;
  // }
}
