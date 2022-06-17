const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

class View {
  constructor() {}

  showThemes(themeArr) {
    return new Promise((resolve) => {
      console.clear();
      console.log("Вcем приветик!!!");
      console.log("\n");
      console.log("Список тем:");
      console.group();
      console.log(
        themeArr.forEach((theme, index) => `${index + 1}. ${theme}`).join("\n")
      );
      readline.question(`\nВыбери тему: `, (userAnswerTheme) => {
        resolve(userAnswerTheme);
        console.groupEnd();
      });
    });
  }

  showQuestion(strQuestion) {
    return new Promise((resolve) => {
      console.log(`\n${strQuestion}`);
      readline.question(`\nВведи свой ответ: `, (userAnswerQuestion) => {
        resolve(userAnswerQuestion);
      });
    });
  }

  showResult(buleanResult, rightAnswer) {
    if (buleanResult) {
      console.log(`\n Это правильный ответ! +100 баллов `);
    } else {
      console.log(`\n Вы ответили неверно! -100 баллов `);
      console.log(`\n Правильный ответ: ${rightAnswer} `);
    }
  }

  showFinal(result) {
    console.log(`\nПОЗДРАВЛЯЮ!\nИГРА ОКОНЧЕНА!`);
    console.log(`\nТВОЙ РЕЗУЛЬТАТ: ${result} баллов!`);
    readline.close();
  }
}

module.exports = View;
