const images = {
    bison: 'img/bison.jpeg',
    gajah: 'img/gajah.jpeg',
    singa: 'img/singa.jpeg',
    harimau: 'img/harimau.png',
    panda: 'img/panda.png',
    kucing: 'img/kucing.jpeg'
};

function displayImage() {
    const select = document.getElementById('animalSelect');
    const imageContainer = document.getElementById('imageContainer');
    const selectedAnimal = select.value;
    
    if (selectedAnimal && images[selectedAnimal]) {
        const imageName = selectedAnimal + '.jpg';
        
        imageContainer.innerHTML = '<img src="' + images[selectedAnimal] + '" alt="' + selectedAnimal + '" width="400">';
        
        alert('Ini gambar ' + imageName);
    } else {
        imageContainer.innerHTML = '';
    }
}

document.getElementById('animalSelect').addEventListener('change', displayImage);