/*
 * 我想知道所有 `order` 里，每一种 `status` 分别有多少个 `order`。输出的结果应该包含如下
 * 的列：
 *
 * +─────────+─────────────────+
 * | status  | numberOfOrders  |
 * +─────────+─────────────────+
 *
 * 其结果也应当按照 `status` 排序
 */
SELECT `status`, COUNT(`status`) as `numberOfOrders`
FROM `orders`
GROUP BY `status`
ORDER BY `status`;