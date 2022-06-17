class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;
    this.score = 0;
  }

  async run() {
    const listThemes = await this.model.getThemes();
    let userThemes;
    // choosedThemes
    // count
    do {
      userThemes = await this.view.showThemes(listThemes);
    }
    while (!this.checkThemes(listThemes, userThemes));

    const Questions = await this.model.getQuestions(userThemes);
    const Answerrr = await this.model.getAnswers(userThemes);
    // console.log('ANSW -> ', Answerrr);
    for (let i = 0; i < Questions.length; i++) {
      const quest = Questions[i];
      const userAnswer = await this.view.showQuestion(quest);
      const res = this.view.showResult(userAnswer.toLowerCase() === Answerrr[i].toLowerCase(), Answerrr[i]);
      if (res) {
        this.score += 100;
      } else {
        this.score -= 100;
      }
    }
    this.view.showFinal(this.score);
  }
  // for (let arrQuestion of Questions) {
  //     let userAnswer = await this.view.showQuestion(arrQuestion);
  //     this.view.showQuestion(userAnswer.toLowerCase() == arrQuestion.answer.toLowerCase(), arrQuestion.answer);

  // question  /*getQuestions*/

  // Просим экземпляр класса модели прочитать папку со всеми темами и составить меню.
  // Попутно передаем метод контроллера this.printTopicsController,
  // так как нам нужно отправить сформинованное меню на вывод в экземпляр класса view
  // после того, как завершится асинхронная операция чтения папки
  // Здесь this.printTopicsController — является callback'ом
  // this.model.readTopics(this.printTopicsController);

  // printTopicsController(topicsMenu) {
  //   // Тут нужно попросить экземпляр класса view вывести меню пользователю,
  //   // а также дождаться ответа последнего
  // }
  checkThemes(listThemes, userThemes) {
    return +userThemes <= listThemes.length && +userThemes > 0;
  }
}

module.exports = Controller;
