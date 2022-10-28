/* 
 * 请告诉我 `employeeNumber` 最大的 employee 的如下信息：
 *
 * +─────────────────+────────────+───────────+
 * | employeeNumber  | firstName  | lastName  |
 * +─────────────────+────────────+───────────+
 */

SELECT `employeeNumber`, `firstName`, `lastName`
FROM `employees`
ORDER BY `employeeNumber` DESC
LIMIT 1;