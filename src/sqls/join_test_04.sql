/*
 * 请告诉我顾客（customer）中顾客编号（customerNumber）小于 150 的顾客每一个人的订单（order）
 * 数目。 查询结果中应当包含如下的信息：
 *
 * +─────────────────+──────────────+
 * | customerNumber  | totalOrders  |
 * +─────────────────+──────────────+
 *
 * 查询结果请按照 `customerNumber` 排序。
 */
SELECT c.`customerNumber`, COUNT(DISTINCT o.orderNumber) `totalOrders`
FROM `customers` c
LEFT JOIN orders o on c.customerNumber = o.customerNumber
LEFT JOIN orderdetails o2 on o.orderNumber = o2.orderNumber
WHERE c.customerNumber < 150
GROUP BY c.customerNumber
ORDER BY c.customerNumber;

