/* 
 * 请告诉我员工（employee）中所有的 `firstName` 以 'A' 开头的员工的姓名。查询结果中应当包含如下的信息：
 *
 * +────────────+───────────+
 * | firstName  | lastName  |
 * +────────────+───────────+
 *
 * 结果应当以 `firstName` 排序。
 */

SELECT `firstName`, `lastName`
FROM `employees`
WHERE `firstName` LIKE 'A%'
ORDER BY `firstName`;