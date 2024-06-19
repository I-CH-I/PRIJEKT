// Двумерный массив данных
const data = [
    ['Профессиональная печать документов высокого качества', 'Использование высококачественных материалов для принтов на одежде'],
    ['Возможность печати документов больших форматов', 'Высокоточное сканирование документов'],
    ['Принты на футболках, свитшотах, кепках и другой одежде', 'Возможность заказа как корпоративных, так и персональных дизайнов'],
    ['Создание электронных архивов для удобного хранения и обмена документацией', 'Распечатка на различных типах бумаги, включая цветную, матовую, глянцевую и другие'],
    ['Разработка и изготовление печатей для официальных документов и корреспонденции', 'Консультации по выбору оптимального варианта печати для различных целей']
];

const container = document.getElementById('container');

let counter = 1;

data.forEach(row => {
    row.forEach((item, index) => {

        const div = document.createElement('div');
        div.className = 'item';
        div.textContent = `${counter}. ${item}`;

        const columnClass = index % 2 === 0 ? 'column' : 'column';
        const column = document.createElement('div');
        column.className = columnClass;
        column.appendChild(div);
        container.appendChild(column);

        counter++;
    });
});