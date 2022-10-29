/*
 * 请告诉我总金额大于 60000 的每一个订单（`order`）编号及其总金额。查询结果应当包含如下信息：
 * 
 * +──────────────+─────────────+
 * | orderNumber  | totalPrice  |
 * +──────────────+─────────────+
 *
 * 其结果应当以 `orderNumber` 排序。
 */
SELECT `orderNumber`, SUM(`quantityOrdered` * `priceEach`) as `totalPrice`
FROM `orderdetails`
GROUP BY `orderNumber`
HAVING `totalPrice` > 60000
ORDER BY `orderNumber`;
