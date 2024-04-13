class Question {
  /**
   *
   * @param {HTMLElement} qs 问题元素
   * @param {HTMLElement} answer 答案元素
   * @param {boolean} showAnswer 是否展示答案
   */
  constructor(qs, answer, showAnswer) {
    this.showAnswer = showAnswer;
    this.qs = qs;
    this.answer = answer;
    this.toggleAnswer = this.toggleAnswer.bind(this);
    qs.addEventListener("click", this.toggleAnswer);
    this.styled();
  }

  styled() {
    this.answer.hidden = !this.showAnswer;
  }

  toggleAnswer() {
    this.answer.hidden = this.showAnswer;
    this.showAnswer = !this.showAnswer;
  }
}

export { Question };
