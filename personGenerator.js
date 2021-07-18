var

a = '',

date = new Date().getFullYear() - 1,

body = document.getElementById('body'),
btn1 = document.getElementById('btn1'),
btn2 = document.getElementById('btn2');

const personGenerator = {
    surnameJson: `{  
        "count": 15,
        "list": {
            "id_1": "Иванов",
            "id_2": "Смирнов",
            "id_3": "Кузнецов",
            "id_4": "Васильев",
            "id_5": "Петров",
            "id_6": "Михайлов",
            "id_7": "Новиков",
            "id_8": "Федоров",
            "id_9": "Кравцов",
            "id_10": "Николаев",
            "id_11": "Семёнов",
            "id_12": "Славин",
            "id_13": "Степанов",
            "id_14": "Павлов",
            "id_15": "Александров",
            "id_16": "Морозов"
        }
    }`,
    firstNameMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александр",
            "id_2": "Максим",
            "id_3": "Иван",
            "id_4": "Артем",
            "id_5": "Дмитрий",
            "id_6": "Никита",
            "id_7": "Михаил",
            "id_8": "Даниил",
            "id_9": "Егор",
            "id_10": "Андрей"
        }
    }`,
    firstNameFemaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Аграфена",
            "id_2": "Алефтина",
            "id_3": "Иванна",
            "id_4": "Юрия",
            "id_5": "Виталина",
            "id_6": "Джесика",
            "id_7": "Барбара",
            "id_8": "Сюзанна",
            "id_9": "Анжела",
            "id_10": "Данна"
        }
    }`,
    month:
    [
        '', 'января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'
    ],
    prof:
    [
        ['пианист', 'студент', 'врач', 'шахтер', 'медбрат', 'машинист', 'слесарь', 'водитель', 'начальник', 'директор', 'президент', 'царь'],
        ['пианистка', 'студентка', 'медсестра', 'машинистка', 'гимнастка', 'бульдозеристка', 'крановщица', 'вокалистка', 'актриса', 'спортсменка', 'певица', 'кладовщица']
    ],

    GENDER_MALE: 'мужской',
    GENDER_FEMALE: 'женский',

    randomIntNumber: (max = 1, min = 0) => Math.floor(Math.random() * (max - min + 1) + min),

    randomGender: function() {

        if (this.randomIntNumber() === 1) {
            return this.GENDER_MALE;
        }
        else {
            return this.GENDER_FEMALE;
        }

    },

    randomValue: function (json) {
        const obj = JSON.parse(json);
        const prop = `id_${this.randomIntNumber(obj.count, 1)}`;  // this = personGenerator
        return obj.list[prop];
    },

    randomFirstName: function(human) {

        return this.randomValue(human);

    },

     randomSurname: function() {

        return this.randomValue(this.surnameJson);

    },

    randomBirthDate() {

        return this.randomIntNumber(1, 28) + ' ' + this.month[this.randomIntNumber(12, 1)] + ' ' + this.randomIntNumber(date, 1900);
    
    },
      
    getPerson: function () {
        this.person = {};
        this.person.surname = this.randomSurname();
        this.person.gender = this.randomGender();
        if (this.person.gender === this.GENDER_MALE) {
            this.person.firstName = this.randomFirstName(this.firstNameMaleJson);
            this.person.prof = this.prof[0][this.randomIntNumber(this.prof[0].length - 1, 0)];
        }
        else {
            this.person.surname +=  'а';
            this.person.firstName = this.randomFirstName(this.firstNameFemaleJson);
            this.person.prof = this.prof[1][this.randomIntNumber(this.prof[1].length - 1, 0)];
        }
        this.person.birthDate = this.randomBirthDate();
        
        return this.person;
    }
};

function text() {
    document.getElementById('surnameOutput').innerText = '';
    document.getElementById('firstNameOutput').innerText = '';
    document.getElementById('profOutput').innerText = '-';
    document.getElementById('genderOutput').innerText = '-';
    document.getElementById('birthYearOutput').innerText = '-';
}

function list_(buf, c = '') {
    a = '';
    for (var b in buf) {
        a += buf[b] + c + ', ';
    }
    return a;

}

btn1.addEventListener('click', () => {
    text();
});

btn2.addEventListener('click', () => {
    text();
    btn1.style.display = 'none';
    btn2.style.display = 'none';
    let obj_ = JSON.parse(personGenerator.surnameJson);
    let p1 = document.createElement('p');
    p1.innerHTML = list_(obj_.list);
    body.append(p1);
    obj_ = JSON.parse(personGenerator.firstNameMaleJson);
    let p2 = document.createElement('p');
    p2.innerHTML = list_(obj_.list);
    body.append(p2);
    obj_ = JSON.parse(personGenerator.firstNameFemaleJson);
    let p3 = document.createElement('p');
    p3.innerHTML = list_(obj_.list);
    body.append(p3);
    obj_ = JSON.parse(personGenerator.surnameJson);
    let p4 = document.createElement('p');
    p4.innerHTML = list_(obj_.list, 'а');
    body.append(p4);
    let p5 = document.createElement('p');
    p5.innerHTML = list_(personGenerator.prof[0]);
    body.append(p5);
    let p6 = document.createElement('p');
    p6.innerHTML = list_(personGenerator.prof[1]);
    body.append(p6);
});