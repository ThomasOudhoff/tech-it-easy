import { bestSellingTv } from 'src/helpers/purchasedHelper';
export function purchasedTv() {
    let counterPurchasedTV = 0;
    for (let i = 0; i < bestSellingTv.length; i++) {
        counterPurchasedTV += bestSellingTv[i].originalStock;
    }
    console.log("Totaal aantal ingekochte tv's: " + counterPurchasedTV);
}



