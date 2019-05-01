**SQL Query Notes**
-- revenue per order (quantity * price)
select o.orderId, round(sum(od.quantity * p.price), 2) as Revenue
from orders as o
inner join orderdetails as od on o.orderId = od.orderId
inner join products as p on od.productId = p.productId
group by o.orderId
order by Revenue desc

----------------------------------------------


-- aggregations, no of items grouped by order (orderId, 5) -- sum()
select o.orderId, count(od.orderId) as ItemsCount
from orders as o
inner join orderdetails as od on o.orderId = od.orderId
group by o.orderId

----------------------------------------------


-- I want to see all customers regardless of whether they have orders or not --196 > 213
-- customers without orders...
select distinct c.customerName
from customers as c
left join orders as o on c.customerId = o.customerId
where o.orderId is not null
order by 1

----------------------------------------------

select orders.orderId
    , customers.customerName
    , customers.city
    , (employees.firstName || ' ' || employees.lastName) as Employee
    , orders.orderDate 
from orders
inner join customers on orders.customerId = customers.customerId
inner join employees on orders.employeeId = employees.employeeId

-- add information about the employee (first name and last name)

----------------------------------------------

select orders.orderId
    , customers.customerName
    , customers.city
    , employees.firstName
    , employees.lastName
    , orders.orderDate 
from orders
inner join customers on orders.customerId = customers.customerId
inner join employees on orders.employeeId = employees.employeeId

----------------------------------------------

select orders.orderId, customers.customerName, customers.city, orders.employeeId, orders.orderDate 
from orders
inner join customers on orders.customerId = customers.customerId

-- add information about the employee (first name and last name)

----------------------------------------------

-- pagination
select * from customers
order by customerName -- optional, but highly recommended
limit 5 -- per page -- take
offset 5 -- ignore this many records -- skip


------------------------------------------------------------------------------------------------------------
**Project Notes**

1. run `npx knex init || yarn knex init` to generate a `./knexfile.js`
2. modify `knexfile.js` to configure our db connections
3. remove staging and production configurations from `knexfile.js`
4. make a migration for each db schema change (Migrations are a history of the evolution of the db)
5. npx knex migrate:make create_(table-name)_table **Creates migration folder + table**
6. fill in migration file. (up/down).