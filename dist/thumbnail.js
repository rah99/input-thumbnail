// document.getElementById('files').onchange = function () {
//     let src = URL.createObjectURL(this.files[0])
//     document.getElementById('image').src = src
// }

let file_input = document.querySelector('#files');
let image_preview = document.querySelector('.image-preview');

const handle_file_preview = (e) => {
    let files = e.target.files;
    let length = files.length;

    for (let i = 0; i < length; i++) {
        let image = document.createElement('img');
        // use the DOMstring for source
        image.src = window.URL.createObjectURL(files[i]);
        image_preview.appendChild(image);
    }
}

file_input.addEventListener('change', handle_file_preview);