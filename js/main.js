const dollar = 11000.34;
const yevro = 12000;

let rasxod1 = 500,
	rasxod2 = 250,
	rasxod3 = 120;

let a = rasxod1 * dollar,
	b = rasxod2 * dollar,
	c = rasxod3 * yevro;
let d = a + b + c;

let sum = prompt('Sizdagi pul summasini kiriting:');

if (sum >= d) {
	console.log("Oq yo'l");
} else {
	console.log(
		"Sizdagi pul miqdori yetarli emas deb topilganligi sababli, azgina sabr qilishingizni so'raymiz",
	);
}
