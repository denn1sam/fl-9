const moneySum = parseFloat(prompt(`Please enter amount of money`));
const discout = parseFloat(prompt(`Please enter the discount`));
const priceWithDiscout = moneySum - moneySum * discout / 100;
const saved = moneySum - priceWithDiscout;

if(moneySum > 0 && discout > 0) {
    console.log(`Price without discount: ` + +moneySum.toFixed(2) + `\nDiscount: ` +
    +discout.toFixed(2) + `% \nPrice with discout: ` + +priceWithDiscout.toFixed(2) + 
    `\nSaved: ` + +saved.toFixed(2));
} else {
    console.log(`Invalid data`);
}