import { dropRightWhile } from "lodash-es";
{
  // 使用
  /**
    官方文档: https://www.lodashjs.com/docs/lodash.dropRightWhile
    
    var users = [  { 'user': 'barney',  'active': true },  { 'user': 'fred',    'active': false },  { 'user': 'pebbles', 'active': false }]; _.dropRightWhile(users, function(o) { return !o.active; });// => objects for ['barney'] // The `_.matches` iteratee shorthand._.dropRightWhile(users, { 'user': 'pebbles', 'active': false });// => objects for ['barney', 'fred'] // The `_.matchesProperty` iteratee shorthand._.dropRightWhile(users, ['active', false]);// => objects for ['barney'] // The `_.property` iteratee shorthand._.dropRightWhile(users, 'active');// => objects for ['barney', 'fred', 'pebbles']

   */
}

{
  // 自定义实现
}

{
  // 源码学习
}
