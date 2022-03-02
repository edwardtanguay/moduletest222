import { customers } from './customers.js';
import { orders } from './orders.js';

// console.log(`There are ${customers.length} customers and ${orders.length} orders.`);

const getNumberOfCustomersInCity = (city) => {
	const numcust = customers.filter(m => m.address.city === city).length;
	return `There are ${numcust} customers in ${city}.`;
}

// console.log(`There are ${customers.filter(m => m.address.city === 'London').length} customers in London.`);

// console.log(`There are ${customers.filter(m => m.address.city === 'Berlin').length} customers in Berlin.`);

console.log(getNumberOfCustomersInCity('London'));
console.log(getNumberOfCustomersInCity('Berlin'));
console.log(getNumberOfCustomersInCity('Nantes'));
console.log(getNumberOfCustomersInCity('Paris'));