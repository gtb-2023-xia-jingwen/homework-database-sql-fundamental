import createMysqlConnection from '../db-connection';
import { Connection } from 'promise-mysql';
import readFromFile from '../read-from-file';

describe('for mySQL query', (): void => {
  let connection: Connection = null;

  beforeEach(async () => {
    connection = await createMysqlConnection();
  });

  afterEach(async () => {
    connection.end();
  });

  it('should select first name and last name from employees table', async () => {
    const rows = await connection.query(readFromFile('select_test_01'));
    expect(rows).toEqual([
      { firstName: 'Andy', lastName: 'Fixter'},
      { firstName: 'Anthony', lastName: 'Bow'},
    ]);
  });

  it('should select the employee whose employee number is the largest', async () => {
    const rows = await connection.query(readFromFile('select_test_02'));
    expect(rows).toEqual([
      { employeeNumber: 1702, firstName: 'Martin', lastName: 'Gerard'}
    ]);
  });

  it('should select office code for those who is not sales rep', async () => {
    const rows = await connection.query(readFromFile('select_test_03'));
    expect(rows).toEqual([
      { officeCode: "1" },
      { officeCode: "4" },
      { officeCode: "6" }
    ]);
  });

  it('should select unique combination of country and city for customers', async () => {
    const rows = await connection.query(readFromFile('select_test_04'));
    expect(rows).toEqual([
      { "country": "France", 	"city": "Lille"},
      { "country": "France", 	"city": "Lyon"},
      { "country": "France", 	"city": "Marseille"},
      { "country": "France", 	"city": "Nantes"},
      { "country": "France", 	"city": "Paris"},
      { "country": "France", 	"city": "Reims"},
      { "country": "France", 	"city": "Strasbourg"},
      { "country": "France", 	"city": "Toulouse"},
      { "country": "France", 	"city": "Versailles"},
      { "country": "UK", 	    "city": "Cowes"},
      { "country": "UK", 	    "city": "Liverpool"},
      { "country": "UK", 	    "city": "London"},
      { "country": "UK", 	    "city": "Manchester"},
    ]);
  });

  it('should select unique states for customers', async () => {
    const rows = await connection.query(readFromFile('select_test_05'));
    expect(rows).toEqual([
      { "state": "BC" },
      { "state": "CA" },
      { "state": "Co. Cork" },
      { "state": "CT" },
      { "state": "Isle of Wight" },
      { "state": "MA" },
      { "state": "NH" },
      { "state": "NJ" },
      { "state": "NSW" },
      { "state": "NV" },
      { "state": "NY" },
      { "state": "Osaka" },
      { "state": "PA" },
      { "state": "Pretoria" },
      { "state": "Québec" },
      { "state": "Queensland" },
      { "state": "Tokyo" },
      { "state": "Victoria" },
    ]);
  });

  it('should select count of unique country for customers', async () => {
    const rows = await connection.query(readFromFile('select_test_06'));
    expect(rows).toEqual([
      { "count": 27 }
    ]);
  });

  it('should select top 5 order number by subtotal', async () => {
    const rows = await connection.query(readFromFile('select_test_07'));
    expect(rows).toEqual([
      { "orderNumber": 10403, "subtotal": 11503.14 },
      { "orderNumber": 10405, "subtotal": 11170.52 },
      { "orderNumber": 10407, "subtotal": 10723.60 },
      { "orderNumber": 10404, "subtotal": 10460.16 },
      { "orderNumber": 10312, "subtotal": 10286.40 },
    ]);
  });

  it('should select sales rep from office 1', async () => {
    const rows = await connection.query(readFromFile('select_test_08'));
    expect(rows).toEqual([
      { "lastName": "Jennings", "firstName": "Leslie", "jobTitle": "Sales Rep" },
      { "lastName": "Thompson", "firstName": "Leslie", "jobTitle": "Sales Rep" },
    ]);
  });

  // inner join

  it('should select employees works at France', async () => {
    const rows = await connection.query(readFromFile('join_test_01'));
    expect(rows).toEqual([
      { "firstName": "Gerard", "lastName": "Bondur", "city": "Paris" },
      { "firstName": "Loui", "lastName": "Bondur", "city": "Paris" },
      { "firstName": "Gerard", "lastName": "Hernandez", "city": "Paris" },
      { "firstName": "Pamela", "lastName": "Castillo", "city": "Paris" },
      { "firstName": "Martin", "lastName": "Gerard", "city": "Paris" },
    ]);
  });

  it('should select cancelled orders', async () => {
    const rows = await connection.query(readFromFile('join_test_02'));
    expect(rows).toEqual([
      { "orderNumber": 10167, "totalPrice": 44167.09, "detailsCount": 16 },
      { "orderNumber": 10179, "totalPrice": 22963.60, "detailsCount": 9 },
      { "orderNumber": 10248, "totalPrice": 41445.21, "detailsCount": 14 },
      { "orderNumber": 10253, "totalPrice": 45443.54, "detailsCount": 14 },
      { "orderNumber": 10260, "totalPrice": 37769.38, "detailsCount": 10 },
      { "orderNumber": 10262, "totalPrice": 47065.36, "detailsCount": 16 },
    ]);
  });

  it('should select order details of which the price is lower than suggested price', async () => {
    const rows = await connection.query(readFromFile('join_test_03'));
    expect(rows).toEqual([
      { "orderNumber": 10107, "productName": "1969 Harley Davidson Ultimate Chopper", "MSRP": 95.70, "priceEach": 81.35 },
      { "orderNumber": 10121, "productName": "1969 Harley Davidson Ultimate Chopper", "MSRP": 95.70, "priceEach": 86.13 },
      { "orderNumber": 10134, "productName": "1969 Harley Davidson Ultimate Chopper", "MSRP": 95.70, "priceEach": 90.92 },
      { "orderNumber": 10145, "productName": "1969 Harley Davidson Ultimate Chopper", "MSRP": 95.70, "priceEach": 76.56 },
      { "orderNumber": 10159, "productName": "1969 Harley Davidson Ultimate Chopper", "MSRP": 95.70, "priceEach": 81.35 },
      { "orderNumber": 10168, "productName": "1969 Harley Davidson Ultimate Chopper", "MSRP": 95.70, "priceEach": 94.74 },
      { "orderNumber": 10180, "productName": "1969 Harley Davidson Ultimate Chopper", "MSRP": 95.70, "priceEach": 76.56 },
      { "orderNumber": 10201, "productName": "1969 Harley Davidson Ultimate Chopper", "MSRP": 95.70, "priceEach": 82.30 },
      { "orderNumber": 10211, "productName": "1969 Harley Davidson Ultimate Chopper", "MSRP": 95.70, "priceEach": 90.92 },
      { "orderNumber": 10223, "productName": "1969 Harley Davidson Ultimate Chopper", "MSRP": 95.70, "priceEach": 80.39 },
      { "orderNumber": 10237, "productName": "1969 Harley Davidson Ultimate Chopper", "MSRP": 95.70, "priceEach": 91.87 },
      { "orderNumber": 10251, "productName": "1969 Harley Davidson Ultimate Chopper", "MSRP": 95.70, "priceEach": 93.79 },
      { "orderNumber": 10263, "productName": "1969 Harley Davidson Ultimate Chopper", "MSRP": 95.70, "priceEach": 89.00 },
      { "orderNumber": 10275, "productName": "1969 Harley Davidson Ultimate Chopper", "MSRP": 95.70, "priceEach": 81.35 },
      { "orderNumber": 10299, "productName": "1969 Harley Davidson Ultimate Chopper", "MSRP": 95.70, "priceEach": 76.56 },
      { "orderNumber": 10309, "productName": "1969 Harley Davidson Ultimate Chopper", "MSRP": 95.70, "priceEach": 94.74 },
      { "orderNumber": 10318, "productName": "1969 Harley Davidson Ultimate Chopper", "MSRP": 95.70, "priceEach": 84.22 },
      { "orderNumber": 10329, "productName": "1969 Harley Davidson Ultimate Chopper", "MSRP": 95.70, "priceEach": 80.39 },
      { "orderNumber": 10341, "productName": "1969 Harley Davidson Ultimate Chopper", "MSRP": 95.70, "priceEach": 84.22 },
      { "orderNumber": 10354, "productName": "1969 Harley Davidson Ultimate Chopper", "MSRP": 95.70, "priceEach": 84.22 },
      { "orderNumber": 10361, "productName": "1969 Harley Davidson Ultimate Chopper", "MSRP": 95.70, "priceEach": 92.83 },
      { "orderNumber": 10375, "productName": "1969 Harley Davidson Ultimate Chopper", "MSRP": 95.70, "priceEach": 76.56 },
      { "orderNumber": 10388, "productName": "1969 Harley Davidson Ultimate Chopper", "MSRP": 95.70, "priceEach": 80.39 },
      { "orderNumber": 10399, "productName": "1969 Harley Davidson Ultimate Chopper", "MSRP": 95.70, "priceEach": 77.52 },
      { "orderNumber": 10403, "productName": "1969 Harley Davidson Ultimate Chopper", "MSRP": 95.70, "priceEach": 85.17 },
      { "orderNumber": 10417, "productName": "1969 Harley Davidson Ultimate Chopper", "MSRP": 95.70, "priceEach": 79.43 },
    ]);
  });

  it('should select available employee and manager', async () => {
    const rows = await connection.query(readFromFile('join_test_05'));
    expect(rows).toEqual([
      { "employee": "Bondur, Loui", "manager": "Bondur, Gerard" },
      { "employee": "Bott, Larry", "manager": "Bondur, Gerard" },
      { "employee": "Castillo, Pamela", "manager": "Bondur, Gerard" },
      { "employee": "Gerard, Martin", "manager": "Bondur, Gerard" },
      { "employee": "Hernandez, Gerard", "manager": "Bondur, Gerard" },
      { "employee": "Jones, Barry", "manager": "Bondur, Gerard" },
      { "employee": "Firrelli, Julie", "manager": "Bow, Anthony" },
      { "employee": "Jennings, Leslie", "manager": "Bow, Anthony" },
      { "employee": "Patterson, Steve", "manager": "Bow, Anthony" },
      { "employee": "Thompson, Leslie", "manager": "Bow, Anthony" },
      { "employee": "Tseng, Foon Yue", "manager": "Bow, Anthony" },
      { "employee": "Vanauf, George", "manager": "Bow, Anthony" },
      { "employee": "Firrelli, Jeff", "manager": "Murphy, Diane" },
      { "employee": "Patterson, Mary", "manager": "Murphy, Diane" },
      { "employee": "Kato, Yoshimi", "manager": "Nishi, Mami" },
      { "employee": "Bondur, Gerard", "manager": "Patterson, Mary" },
      { "employee": "Bow, Anthony", "manager": "Patterson, Mary" },
      { "employee": "Nishi, Mami", "manager": "Patterson, Mary" },
      { "employee": "Patterson, William", "manager": "Patterson, Mary" },
      { "employee": "Fixter, Andy", "manager": "Patterson, William" },
      { "employee": "King, Tom", "manager": "Patterson, William" },
      { "employee": "Marsh, Peter", "manager": "Patterson, William" },
    ]);
  });

  it('should select customer and order count', async () => {
    const rows = await connection.query(readFromFile('join_test_04'));
    expect(rows).toEqual([
      { "customerNumber": 103, "totalOrders": 3 },
      { "customerNumber": 112, "totalOrders": 3 },
      { "customerNumber": 114, "totalOrders": 5 },
      { "customerNumber": 119, "totalOrders": 4 },
      { "customerNumber": 121, "totalOrders": 4 },
      { "customerNumber": 124, "totalOrders": 17 },
      { "customerNumber": 125, "totalOrders": 0 },
      { "customerNumber": 128, "totalOrders": 4 },
      { "customerNumber": 129, "totalOrders": 3 },
      { "customerNumber": 131, "totalOrders": 4 },
      { "customerNumber": 141, "totalOrders": 26 },
      { "customerNumber": 144, "totalOrders": 4 },
      { "customerNumber": 145, "totalOrders": 5 },
      { "customerNumber": 146, "totalOrders": 3 },
      { "customerNumber": 148, "totalOrders": 5 },
    ]);
  });

  it('should select available employee and manager with top manager', async () => {
    const rows = await connection.query(readFromFile('join_test_06'));
    expect(rows).toEqual([
      { "employee": "Murphy, Diane", "manager": "(Top Manager)" },
      { "employee": "Bondur, Loui", "manager": "Bondur, Gerard" },
      { "employee": "Bott, Larry", "manager": "Bondur, Gerard" },
      { "employee": "Castillo, Pamela", "manager": "Bondur, Gerard" },
      { "employee": "Gerard, Martin", "manager": "Bondur, Gerard" },
      { "employee": "Hernandez, Gerard", "manager": "Bondur, Gerard" },
      { "employee": "Jones, Barry", "manager": "Bondur, Gerard" },
      { "employee": "Firrelli, Julie", "manager": "Bow, Anthony" },
      { "employee": "Jennings, Leslie", "manager": "Bow, Anthony" },
      { "employee": "Patterson, Steve", "manager": "Bow, Anthony" },
      { "employee": "Thompson, Leslie", "manager": "Bow, Anthony" },
      { "employee": "Tseng, Foon Yue", "manager": "Bow, Anthony" },
      { "employee": "Vanauf, George", "manager": "Bow, Anthony" },
      { "employee": "Firrelli, Jeff", "manager": "Murphy, Diane" },
      { "employee": "Patterson, Mary", "manager": "Murphy, Diane" },
      { "employee": "Kato, Yoshimi", "manager": "Nishi, Mami" },
      { "employee": "Bondur, Gerard", "manager": "Patterson, Mary" },
      { "employee": "Bow, Anthony", "manager": "Patterson, Mary" },
      { "employee": "Nishi, Mami", "manager": "Patterson, Mary" },
      { "employee": "Patterson, William", "manager": "Patterson, Mary" },
      { "employee": "Fixter, Andy", "manager": "Patterson, William" },
      { "employee": "King, Tom", "manager": "Patterson, William" },
      { "employee": "Marsh, Peter", "manager": "Patterson, William" },
    ]);
  });

  it('should count orders in each order status', async () => {
    const rows = await connection.query(readFromFile('groupby_test_01'));
    expect(rows).toEqual([
      { "status": "Cancelled", "numberOfOrders": 6 },
      { "status": "Disputed", "numberOfOrders": 3 },
      { "status": "In Process", "numberOfOrders": 6 },
      { "status": "On Hold", "numberOfOrders": 4 },
      { "status": "Resolved", "numberOfOrders": 4 },
      { "status": "Shipped", "numberOfOrders": 303 },
    ]);
  });

  it('should summarize total price for each order status', async () => {
    const rows = await connection.query(readFromFile('groupby_test_02'));
    expect(rows).toEqual([
      { "status": "Cancelled", "totalPrice": 238854.18 },
      { "status": "Disputed", "totalPrice": 61158.78 },
      { "status": "In Process", "totalPrice": 135271.52 },
      { "status": "On Hold", "totalPrice": 169575.61 },
      { "status": "Resolved", "totalPrice": 134235.88 },
      { "status": "Shipped", "totalPrice": 8865094.64 },
    ]);
  });

  it('should summarize total price for each year', async () => {
    const rows = await connection.query(readFromFile('groupby_test_03'));
    expect(rows).toEqual([
      { "year": 2003, "totalPrice": 3317348.39 },
      { "year": 2004, "totalPrice": 4515905.51 },
      { "year": 2005, "totalPrice": 1770936.71 },
    ]);
  });

  it('should summarize total price for each order with filter', async () => {
    const rows = await connection.query(readFromFile('groupby_test_04'));
    expect(rows).toEqual([
      { "orderNumber": 10165, "totalPrice": 67392.85 },
      { "orderNumber": 10287, "totalPrice": 61402.00 },
      { "orderNumber": 10310, "totalPrice": 61234.67 },
    ]);
  });

  it('should get customers who do not place any order', async () => {
    const rows = await connection.query(readFromFile('subquery_test_01'));
    expect(rows).toEqual([
      { "customerNumber": 125, "customerName": "Havel & Zbyszek Co" },
      { "customerNumber": 168, "customerName": "American Souvenirs Inc" },
      { "customerNumber": 169, "customerName": "Porto Imports Co." },
      { "customerNumber": 206, "customerName": "Asian Shopping Network, Co" },
      { "customerNumber": 223, "customerName": "Natürlich Autos" },
      { "customerNumber": 237, "customerName": "ANG Resellers" },
      { "customerNumber": 247, "customerName": "Messner Shopping Network" },
      { "customerNumber": 273, "customerName": "Franken Gifts, Co" },
      { "customerNumber": 293, "customerName": "BG&E Collectables" },
      { "customerNumber": 303, "customerName": "Schuyler Imports" },
      { "customerNumber": 307, "customerName": "Der Hund Imports" },
      { "customerNumber": 335, "customerName": "Cramer Spezialitäten, Ltd" },
      { "customerNumber": 348, "customerName": "Asian Treasures, Inc." },
      { "customerNumber": 356, "customerName": "SAR Distributors, Co" },
      { "customerNumber": 361, "customerName": "Kommission Auto" },
      { "customerNumber": 369, "customerName": "Lisboa Souveniers, Inc" },
      { "customerNumber": 376, "customerName": "Precious Collectables" },
      { "customerNumber": 409, "customerName": "Stuttgart Collectable Exchange" },
      { "customerNumber": 443, "customerName": "Feuer Online Stores, Inc" },
      { "customerNumber": 459, "customerName": "Warburg Exchange" },
      { "customerNumber": 465, "customerName": "Anton Designs, Ltd." },
      { "customerNumber": 477, "customerName": "Mit Vergnügen & Co." },
      { "customerNumber": 480, "customerName": "Kremlin Collectables, Co." },
      { "customerNumber": 481, "customerName": "Raanan Stores, Inc" },
    ]);
  });

  it('should get statistics for items in all orders', async () => {
    const rows = await connection.query(readFromFile('subquery_test_02'));
    expect(rows).toEqual([
      { "minOrderItemCount": 1, "maxOrderItemCount": 18, "avgOrderItemCount": 9 }
    ]);
  });
});