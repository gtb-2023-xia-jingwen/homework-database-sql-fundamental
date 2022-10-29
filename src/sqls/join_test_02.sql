/*
 * 请告诉我所有被取消（'Cancelled'）的订单以及其总金额。查询结果应当包含如下的内容：
 *
 * +──────────────+─────────────+───────────────+
 * | orderNumber  | totalPrice  | detailsCount  |
 * +──────────────+─────────────+───────────────+
 *
 * 其中，orderNumber 是订单编号，totalPrice 是订单的总金额而 detailsCount 是每一个订单
 * 包含的 `orderdetails` 的数目。
 *
 * 结果应当按照 `orderNumber` 排序。
 */
SELECT orders.`orderNumber` orderNumber, SUM(`quantityOrdered` * `priceEach`)totalPrice,
       COUNT(*) `detailsCount`
FROM `orders`
INNER JOIN `orderdetails`
ON orders.`orderNumber` = orderdetails.`orderNumber`
WHERE `status` = 'Cancelled'
GROUP BY orderNumber
ORDER BY orderNumber;