const path = require('path');

console.log('Склеить участки пути', path.join(__dirname, 'first', 'second'));
console.log('Получить абсолютный путь', path.resolve('first', 'second', 'third'));
const fullpath = path.resolve('filrs', 'second', 'third');
console.log('Парсинг пути', path.parse(fullpath));
console.log('Разделитель в ОС', path.sep);
console.log('Проверка на абсолютный путь', path.isAbsolute('first/second'));
console.log('Название файла', path.basename(fullpath));
console.log('Расширение файла', path.extname(fullpath));

const siteURL = 'http://localhost:8080/users?id=5123';

const url = new URL(siteURL);

console.log(url)