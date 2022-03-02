import { customers } from './customers.js';
import { orders } from './orders.js';

// console.log(`There are ${customers.length} customers and ${orders.length} orders.`);

console.log(`There are ${customers.filter(m => m.address.city === 'London').length} customers in London.`);

console.log(`There are ${customers.filter(m => m.address.city === 'Berlin').length} customers in Berlin.`);

