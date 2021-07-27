/*Взяти файл template_2.html та працювати в ньому
1) Напишіть код, який :
    a) змінює колір тексту елемнту з ід main_header на назву групи в якій ви вчитесь (mon-year)*/
document.getElementById('main_header').style.color = '#062021';
/*    b) робить шириниу елементу ul 400px*/
const ulElements = document.getElementsByTagName('ul');
for (const ulElement of ulElements) {
    ulElement.style.width = '400px';
}
/*    c) робить шириниу всіх елементів з класом linkList шириною 50%*/
const elemOflinkList = document.getElementsByClassName('linkList');
console.log(elemOflinkList);
for (let linkListElem of elemOflinkList) {
    linkListElem.style.width = '50%';
}
/*    d) отримує текст який зберігається в елементі з класом listElement2*/
const elemOflistElement2 = document.getElementsByClassName('listElement2');
for (const elemlist2 of elemOflistElement2) {
    console.log(elemlist2.innerText);
}
/*    e) отримує всі елементи li та змінює ім колір фону на сірий*/
const liElement = document.getElementsByTagName('li');
for (const liElem of liElement) {
    liElem.style.backgroundColor = 'grey';
}
/*    f) отримує всі елементи 'a' та додає їм клас anchor*/
const aElement = document.getElementsByTagName('a');
for (const aElem of aElement) {
    aElem.classList.add('anchor');
    /*    g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів*/
    if (aElem.innerText === 'link3') {
        aElem.style.fontSize = '40px';
    }
    /*    h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a*/
    aElem.classList.add('element_' + aElem.innerText);
}
/*    i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()*/
const sub_header = document.getElementsByClassName('sub-header');
for (const subHeaderElem of sub_header) {
    subHeaderElem.style.backgroundColor = prompt('Який колір фону обираєте?');
    /*    j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()*/
    if (subHeaderElem.innerText === 'content 2 segment') {
        subHeaderElem.style.color = prompt('Який колір тексту обираєте?')
    }
}
/*    k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()*/
const content_1 = document.getElementsByClassName('content_1');
for (const content1Element of content_1) {
    content1Element.innerText = prompt('Введіть текст:');
}
/*    l) отримати елементи p та змінити їм padding на 20px*/
const pElements = document.getElementsByTagName('p');
for (const pElem of pElements) {
    pElem.style.padding = '20px';
}
/*    m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year)*/
const text2Elements = document.getElementsByClassName('text2');
for (const text2Elem of text2Elements) {
    text2Elem.innerText = 'june-2021';
}