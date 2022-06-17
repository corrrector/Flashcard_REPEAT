const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

class View {
  showThemes(arrThemes) {
    return new Promise((resolve) => {
      console.clear();
      console.log('Вcем приветик в этом чате! 🤪🤪🤪🤪🤪🤪🤪🤪🤪');
      console.log('💕💕💕💕💕💕💕💕💕💕💕💕💕💕💕💕💕💕💕💕💕💕💕💕');
      console.log('              Список тем 🤑:            ');
      console.log('💕💕💕💕💕💕💕💕💕💕💕💕💕💕💕💕💕💕💕💕💕💕💕💕');
      console.group();



      console.log(arrThemes)

      // arrThemes.map((theme, index) => console.log(`${index + 1}. ${theme}`).join('\n'));
      readline.question('\nВыбери тему 😈😈😈: ', (userAnswerTheme) => {
        resolve(userAnswerTheme);
        console.groupEnd();
      });
    });
  }

  showQuestion(strQuestion) {
    return new Promise((resolve) => {
      console.log(`\n${strQuestion}`);
      readline.question('\n 🤔🤔🤔🤔Введи свой ответ: ', (userAnswerQuestion) => {
        resolve(userAnswerQuestion);
      });
    });
  }

  showResult(booleanResult, rightAnswer) {
    if (booleanResult) {
      console.log('\n 🥳🥳🥳 Это правильный ответ! +100 баллов ');
      return true;

    } else {
      console.log('\n 🥲🥲🥲 Вы ответили неверно! -100 баллов ');
      console.log(`\n 🧠🧠🧠Правильный ответ: ${rightAnswer} `);
      return false;
    }

  }

  showFinal(result) {
    console.log('\n🥂🥂🥂🥂🥂ПОЗДРАВЛЯЮ!\nИГРА ОКОНЧЕНА!🥂🥂🥂🥂🥂');
    console.log(`\n🥳🥳🥳🥳🥳ТВОЙ РЕЗУЛЬТАТ: ${result} баллов!🥳🥳🥳🥳🥳`);
    readline.close();
  }
}

module.exports = View;
