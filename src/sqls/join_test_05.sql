/*
 * 请告诉我所有员工（employee）中有管理者（manager）的员工姓名及其管理者（`employee`.`reportsTo`）的姓名。
 * 所有的姓名请按照 `lastName, firstName` 的格式输出。例如：`Bow, Anthony`：
 *
 * +───────────+──────────+
 * | employee  | manager  |
 * +───────────+──────────+
 *
 * 输出结果按照 `manager` 排序，然后按照 `employee` 排序。
 */

SELECT CONCAT(em.`lastName`,', ',em.`firstName`) employee,
       CONCAT(mm.`lastName`,', ',mm.`firstName`) manager
FROM `employees` em
INNER JOIN (SELECT *
FROM employees
# WHERE `jobTitle` LIKE '%Manager%'
) as mm
ON em.reportsTo = mm.employeeNumber
ORDER BY manager, employee;