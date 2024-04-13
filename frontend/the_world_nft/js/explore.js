import { Slideshow } from "./slideshow.js";
import { Select, Option } from "./select.js";

const slideItems = document.querySelectorAll(".slideshow-item");

new Slideshow(Array.from(slideItems), true, 2500);

const select = document.getElementById("explore-select");
const options = select.querySelectorAll("option");
function clickPostTimeSort() {
  console.log("按发射时间排序");
}

function clickMostPopularSort() {
  console.log("按最受欢迎排序");
}

function clickPriceSort() {
  console.log("按价格排序");
}
const postTimeSortOption = new Option(options[0], clickPostTimeSort);
const mostPopularSortOption = new Option(options[1], clickMostPopularSort);
const priceSortOption = new Option(options[2], clickPriceSort);

new Select(select, [
  postTimeSortOption,
  mostPopularSortOption,
  priceSortOption,
]);
