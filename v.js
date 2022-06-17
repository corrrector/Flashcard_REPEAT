const util = require('util');
const colorReadline = require('node-color-readline');
const chalk = require('chalk');

class View {
  constructor() {

  }

  async showThemes(arr) {
    arr.forEach((el, index) => {
      console.log(index + 1, chalk.blue.underline(el));
    })
    const mreadline = colorReadline.createInterface({
      input: process.stdin,
      output: process.stdout,
      colorize: function (str) {
        return chalk.blue(str);
      }
    });
    const question = util.promisify(mreadline.question).bind(mreadline)
    let answer = await question(chalk.magenta.bgWhite.bold('\nВыбери тему: \n'))
    mreadline.close();
    return +answer;
  }

  async showQuestion(quest) {
    const mreadline = colorReadline.createInterface({
      input: process.stdin,
      output: process.stdout,
      colorize: function (str) {
        return chalk.blue(str);
      }
    });
    const question = util.promisify(mreadline.question).bind(mreadline)
    let answer = await question(chalk.black.bgWhite(`${quest}`))
    mreadline.close()
    return answer;
  }
}

module.exports = View 
module.exports = View