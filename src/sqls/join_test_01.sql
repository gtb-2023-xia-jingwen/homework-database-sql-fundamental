/*
 * 请告诉我所有工作在法国（`France`）公司（`office`）的员工（`employee`）信息。查询结果应当包含如下
 * 信息：
 *
 * +────────────+───────────+───────+
 * | firstName  | lastName  | city  |
 * +────────────+───────────+───────+
 *
 * firstName 和 lastName 是员工的姓名，city 是办公室所在的城市。结果按照员工的 `employeeNumber`
 * 排序。
 */

SELECT `firstName`, `lastName`, `city`
FROM `employees`
INNER JOIN `offices`
ON employees.`officeCode` = offices.`officeCode`
WHERE `country` = 'France'
ORDER BY `employeeNumber`;