const readline = require('readline/promises');
const { stdin: input, stdout: output } = require('process');

class View {
  constructor() {

  }

  async showThemes(arr) {
    arr.forEach((el, index) => {
      console.log(`${index + 1}. ${el}`);
    })
    const rl = readline.createInterface({ input, output });
    let answer = await question('Выбери тему:')
    rl.close();
    return answer;
  };

  async showQuestion(quest) {

  }
}

module.exports = View