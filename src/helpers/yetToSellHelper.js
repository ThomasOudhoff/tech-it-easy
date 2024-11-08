import { bestSellingTv } from 'src/constants/inventory.js';

export function yetToSell() {
    let counterYetToSell = 0;
    for (let i = 0; i < bestSellingTv.length; i++)
        counterYetToSell += bestSellingTv[i].originalStock - bestSellingTv[i].sold;
   console.log("Het nog te verkopen aantal tv's = " + counterYetToSell());
}
