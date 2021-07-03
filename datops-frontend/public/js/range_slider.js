const countRange1 = document.querySelector("#filter .filter .values .range_a");
const countRange2 = document.querySelector("#filter .filter .values .range_b");
const range1 = document.querySelector("#filter .filter .range_slider .range1");
const range2 = document.querySelector("#filter .filter .range_slider .range2");

const default_value = () => {
  countRange1.textContent = range1.value;
  countRange2.textContent = range2.value;
}

default_value();

range1.addEventListener("input", () => {
  countRange1.textContent = range1.value;
})

range2.addEventListener("input", () => {
  countRange2.textContent = range2.value;
})
// const sliderOne = () => {
//   if (parseInt(range2.value) - parseInt(range1.value) <= 0) {
//     range1.value = parseInt(rangeB.value) - 0;
//   }
//   countRange1.textContent = range1.value;
// }

// const sliderTwo = () => {
//   if (parseInt(range2.value) - parseInt(range1.value) <= 0) {
//     range1.value = parseInt(rangeB.value) + 0;
//   }
//   countRange2.textContent = range2.value;
// }

// sliderOne();
// sliderTwo();