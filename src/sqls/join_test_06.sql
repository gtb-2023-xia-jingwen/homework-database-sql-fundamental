/*
 * 请告诉我所有的员工（employee）的姓名及其管理者的姓名。所有的姓名都需要按照 `lastName, firstName`
 * 的格式输出，例如 'Bow, Anthony'。如果员工没有管理者，则其管理者的姓名输出为 '(Top Manager)'。
 * 输出需要包含如下信息：
 *
 * +───────────+──────────+
 * | employee  | manager  |
 * +───────────+──────────+
 *
 * 输出结果按照 `manager` 排序，然后按照 `employee` 排序。
 */
SELECT CONCAT(em.`lastName`,', ',em.`firstName`) employee,
       IFNULL(CONCAT(mm.`lastName`,', ',mm.`firstName`), '(Top Manager)') manager
FROM `employees` em
LEFT OUTER JOIN (SELECT * FROM employees) as mm
ON em.reportsTo = mm.employeeNumber
ORDER BY manager, employee;