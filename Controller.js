class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;
  }

  async run() {
    const listThemes = await this.model.readDirect();
    let userThemes;
    // choosedThemes
    let score = 0;
    // count
    do {
      userThemes = await this.view.showThemes(listThemes);
    }
    while (!this.checkThemes(listThemes, userThemes));

    const Questions = await this.model.getQuestions(userThemes);
    const Answerrr = await this.model.getAnswers(userThemes);
    for (let i = 0; i < Questions.length; i++) {
      const quest = arrQuestion[i];
      const userAnswer = await this.view.showQuestion(Questions);
      this.view.showQuestion(userAnswer.toLowerCase() == Answerrr[i].toLowerCase(), Answerrr[i]);
      if (userAnswer.toLowerCase() == Answerrr[i].toLowerCase()) {
        score += 100;
      } else {
        score -= 100;
      }
    }
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
