const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

class View {
  constructor() {}

  getThemes(themeArr) {
    return new Promise((resolve) => {
      console.clear();
      console.log("Здесь приветствие!!!");
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



  viewFinal(result) {
    console.log(`\nПОЗДРАВЛЯЮ!\n 
ИГРА ОКОНЧЕНА!`);
    console.log(`\nТВОЙ РЕЗУЛЬТАТ: ${result} баллов!`);
    readline.close()
  }

}

//console.log(getThemes([ ‘Выдры‘, ‘Еноты‘, ‘Ночные Ястребы’ ]))

module.exports = View;

////////////////
