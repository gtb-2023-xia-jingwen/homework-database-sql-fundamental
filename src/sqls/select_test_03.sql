/* 
 * 请告诉我员工（employee）中 jobTitle 不是 'Sales Rep' 的员工的 officeCode（不重复）。结果
 * 仅仅包含 officeCode 即可，并按照 officeCode 排序。
 */
SELECT distinct `officeCode`
FROM `employees`
WHERE `jobTitle` != 'Sales Rep';