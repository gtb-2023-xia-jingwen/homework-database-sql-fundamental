/*
 * 请告诉我订单明细（orderdetails）中明细总金额排名前五的明细记录。结果中应当包含如下信息：
 *
 * +──────────────+───────────+
 * | orderNumber  | subtotal  |
 * +──────────────+───────────+
 *
 * 结果应当按照明细总金额进行排序。
 */

SELECT `orderNumber`, `quantityOrdered` * `priceEach` as `subtotal`
FROM `orderdetails`
ORDER BY `subtotal` DESC
LIMIT 5;

