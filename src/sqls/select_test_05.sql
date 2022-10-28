/*
 * 请告诉我所有具备 `state` 的顾客（customer）中的 state 的可能值（不重复）。结果请按照 state
 * 排序。
 */
SELECT distinct `state`
FROM `customers`
WHERE `state` IS NOT NULL
ORDER BY `state`;