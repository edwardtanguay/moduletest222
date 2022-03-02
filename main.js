import { customers } from './customers.js';
import { orders } from './orders.js';

// console.log(`There are ${customers.length} customers and ${orders.length} orders.`);

const getNumberOfCustomersInCity = (city) => {
	const numcust = customers.filter(m => m.address.city === city).length;
	return `There are ${numcust} customers in ${city}.`;
}

const getOrdersInYearString = (year) => {
	return `There were ${orders.filter(m => m.orderDate.startsWith(year)).length} orders in year.`;
};

// console.log(`There are ${customers.filter(m => m.address.city === 'London').length} customers in London.`);
// console.log(`There are ${customers.length} customers and ${orders.length} orders.`);
// console.log(`There are ${customers.filter(m => m.address.city === 'Berlin').length} customers in Berlin.`);

// console.log(getNumberOfCustomersInCity('London'));
// console.log(getNumberOfCustomersInCity('Berlin'));
// console.log(getNumberOfCustomersInCity('Nantes'));
// console.log(getNumberOfCustomersInCity('Paris'));

// console.log(`There were ${orders.filter(m => m.orderDate.startsWith('1996')).length} orders in 1996.`);
// console.log(getOrdersInYearString('1996'));
// console.log(getOrdersInYearString('1997'));
// ['1995', '1996', '1997','1998'].forEach(year => console.log(getOrdersInYearString(year)));

console.log(`The customer name of ID CONSH is: ${customers.find(m => m.customerID === 'CONSH').companyName}`);

// console.log(customers.find(m => m.customerID === 'COMMI').companyName);