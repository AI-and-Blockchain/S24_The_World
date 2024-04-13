import { Question } from "./question.js";

const questionAndAnswers = Array.from(document.querySelectorAll(".fnq-item"));

questionAndAnswers.forEach((item, index) => {
  new Question(item.firstElementChild, item.lastElementChild, index === 0);
});
