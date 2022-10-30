/*
 * 请告诉我那些没有下任何订单的顾客（customer）的信息。结果应当包含如下的信息：
 *
 * +─────────────────+───────────────+
 * | customerNumber  | customerName  |
 * +─────────────────+───────────────+
 *
 * 结果应当按照 `customerNumber` 排序。
 */
SELECT `customerNumber`, `customerName`
FROM `customers`
WHERE `customerNumber`
NOT IN (SELECT DISTINCT `customerNumber` FROM `orders`)
ORDER BY `customerNumber`;