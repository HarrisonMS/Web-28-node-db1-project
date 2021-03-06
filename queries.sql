-- Database Queries

-- Find all customers with postal code 1010
Select * 
FROM Customers
Where PostalCode = 1010
-- customerID 12, 54, 64
-- Find the phone number for the supplier with the id 11
SELECT Phone 
FROM suppliers
WHERE SupplierId = 11 
--(010) 9984510
-- List first 10 orders placed, sorted descending by the order date
SELECT * FROM Orders
ORDER BY OrderDate desc
LIMIT 10

-- Find all customers that live in London, Madrid, or Brazil
SELECT * FROM Customers
WHERE City 
IN ('London', 'Madrid')
OR Country = 'Brazil'

-- Add a customer record for "The Shire", the contact name is "Bilbo Baggins" the address is -"1 Hobbit-Hole" in "Bag End", postal code "111" and the country is "Middle Earth"
INSERT INTO Customers  (CustomerName, ContactName,[Address], City, PostalCode, Country)
VALUES ('The Shire', 'Bilbo Baggins', '1 hobbit hole', 'Bag End', 111, 'Middle Earth')
-- Update Bilbo Baggins record so that the postal code changes to "11122"
UPDATE Customers 
SET [PostalCode] = 11122
WHERE customerID = 98
-- set by id
-- I made multiple so set by dif category name
UPDATE Customers 
SET [PostalCode] = 11122
WHERE ContactName = 'Bilbo Baggins'
-- (Stretch) Find a query to discover how many different cities are stored in the Customers table. Repeats should not be double counted
SELECT DISTINCT City
FROM Customers
-- (Stretch) Find all suppliers who have names longer than 20 characters. You can use `length(SupplierName)` to get the length of the name
SELECT *
fROM Suppliers
WHERE length(SupplierName) > 20


-- double stretch the client want a endpoint to show the last 10 products
-- price name supplier name contact name with a price between 18 and 40

SELECT ProductID
	, Unit
  , Price
	, ProductName
  , SupplierName
  , ContactName 
FROM products
INNER JOIN Suppliers 
ON Products.SupplierID = Suppliers.SupplierID
WHERE Price 
BETWEEN 18 and 40
ORDER BY ProductID DESC
LIMIT 10


