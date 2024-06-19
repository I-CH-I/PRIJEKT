const data_photo = [
    '../photo/1.jpg',
    '../photo/2.jpg',
    '../photo/3.jpg',
    '../photo/4.jpg',
    '../photo/5.jpg',
    '../photo/6.jpg'
];

const container_photo = document.getElementById('container_photo_img');

data_photo.forEach(item => {
    const div = document.createElement('div');
    div.className = 'item-photo';

    const img_photo = document.createElement('img');
    img_photo.src = item;
    img_photo.alt = 'Placeholder Image';

    div.appendChild(img_photo);

    container_photo.appendChild(div);

    setTimeout(() => {
        div.classList.add('loaded');
    }, 100);
});
