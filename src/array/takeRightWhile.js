
import { takeRightWhile } from "lodash-es";
{ // 使用
  /**
    官方文档: https://www.lodashjs.com/docs/lodash.takeRightWhile
    
    var users = [  { 'user': 'barney',  'active': true },  { 'user': 'fred',    'active': false },  { 'user': 'pebbles', 'active': false }]; _.takeRightWhile(users, function(o) { return !o.active; });// => objects for ['fred', 'pebbles'] // The `_.matches` iteratee shorthand._.takeRightWhile(users, { 'user': 'pebbles', 'active': false });// => objects for ['pebbles'] // The `_.matchesProperty` iteratee shorthand._.takeRightWhile(users, ['active', false]);// => objects for ['fred', 'pebbles'] // The `_.property` iteratee shorthand._.takeRightWhile(users, 'active');// => []

   */  

}

{
  // 自定义实现
}

{
  // 源码学习
   
}
