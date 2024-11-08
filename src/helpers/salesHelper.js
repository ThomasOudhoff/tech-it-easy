import { bestSellingTv } from 'src/constants/inventory.js';
let mostSellingTv = 0;
let bestSellingTvName = "";

export function searchBestSale() {
    for (let i = 0; i < bestSellingTv.length; i++) {
        if (bestSellingTv[i].sold > mostSellingTv) {
            mostSellingTv = bestSellingTv[i].sold;
            bestSellingTvName = bestSellingTv[i].name;
        }
    }
    console.log("De best verkochte tv = " + bestSellingTvName);
}

