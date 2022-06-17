const fs = require('fs');

class Model {
  constructor(path) {
    this.path = path;
    this.themes = [];
  }

  getThemes() { // читаем директорию чтобы получить темы
    return new Promise((resolved, reject) => {
      fs.readdir('./topics', (err, arrThemes) => {
        if (err) {
          reject(err);
          console.log('Не удалось отобразить темы');
        } else {
          this.themes = arrThemes;
          resolved(this.transformArr(arrThemes).join('\n'));
        }
      });
    });
  }

  transformArr(array) { // делаем из полученного массива массив названий тем
    return array.map((item) => item.split('_')[0]);
  }

  getQuestions = (topic) => { // читаем выбранный файл и отдаем массив вопросов
    const topicName = this.themes[topic - 1];
    return new Promise((resolved, reject) => {
      fs.readFile(`./topics/${topicName}`, 'utf-8', (err, data) => {
        if (err) {
          reject(err);
          console.log('Не удалось получить вопросы');
        } else {
          resolved(data.split('\n').filter(((item) => item !== ''))
            .filter((item, index) => index % 2 === 0));
        }
      });
    });
  };

  getAnswers = (topic) => { // читаем выбранный файл и отдаем массив ответов
    const topicName = this.themes[topic - 1];
    return new Promise((resolved, reject) => {
      fs.readFile(`./topics/${topicName}`, 'utf-8', (err, data) => {
        if (err) {
          reject(err);
          console.log('Не удалось получить ответы');
        } else {
          resolved(data.split('\n').filter(((item) => item !== ''))
            .filter((item, index) => index % 2 !== 0));
        }
      });
    });
  };
}

module.exports = Model;
