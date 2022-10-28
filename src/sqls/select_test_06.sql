/*
 * 请告诉我顾客（customer）中所有的国家（country）的数目（不重复）。结果应当包含如下的信息：
 *
 * +────────+
 * | count  |
 * +────────+
 */
SELECT count(DISTINCT `country`) as `count`
FROM `customers`;