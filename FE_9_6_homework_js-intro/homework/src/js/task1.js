const moneySum = parseFloat(prompt(`Please enter amount of money`));
const discount = parseFloat(prompt(`Please enter the discount`));
const priceWithDiscount = moneySum - moneySum * discount / 100;
const saved = moneySum - priceWithDiscount;

if(moneySum > 0 && discount >= 0 && discount <= 100) {
    console.log(`Price without discount: ` + +moneySum.toFixed(2) + `\nDiscount: ` +
    +discount.toFixed(2) + `% \nPrice with discount: ` + +priceWithDiscount.toFixed(2) + 
    `\nSaved: ` + +saved.toFixed(2));
} else {
    console.log(`Invalid data`);
}
