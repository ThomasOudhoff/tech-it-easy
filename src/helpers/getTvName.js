import { bestSellingTv } from 'src/constants/inventory.js';

function getTvName(tv) {
    return `${tv.brand} - ${tv.type} - ${tv.name}`;
    const tvName = getTvName(bestSellingTv);
    console.log(tvName);
}