/* 
 * 请告诉我 'France' 和 'UK' 的顾客（customer）的国家（country）和城市（city）的组合方式（不重复）。
 * 查询结果应当包含如下信息：
 *
 * +──────────+───────+
 * | country  | city  |
 * +──────────+───────+
 *
 * 结果应当首先按照 country 排序，再按照 city 排序。
 */
SELECT distinct `country`, `city`
FROM `customers`
WHERE `country` IN ('France', 'UK')
ORDER BY `country`, `city`;
