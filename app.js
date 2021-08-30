// select the item element
const item = document.querySelector('.item');
// attach the dragstart event handler
item.addEventListener('dragstart', dragStart);
function dragStart(e) {
    e.dataTransfer.setData('text/plain', e.target.id);
    setTimeout(() => {
        e.target.classList.add('hide');
    }, 0);

}
const boxes = document.querySelectorAll('.box');

boxes.forEach(box => {
    box.addEventListener('dragenter', dragEnter)
    box.addEventListener('dragover', dragOver);
    box.addEventListener('dragleave', dragLeave);
    box.addEventListener('drop', drop);
});
function dragEnter(e) {
    e.preventDefault();
    e.target.classList.add('drag-over');
}
function dragOver(e) {
    e.preventDefault();
    e.target.classList.add('drag-over');
}
function dragLeave(e) {
    e.target.classList.remove('drag-over');
}
function drop(e) {
    e.target.classList.remove('drag-over');

    // get the draggable element
    const id = e.dataTransfer.getData('text/plain');
    const draggable = document.getElementById(id);

    // add it to the drop target
    e.target.appendChild(draggable);

    // display the draggable element
    draggable.classList.remove('hide');

    for(let i=0; i< document.querySelectorAll('.all-prices').length; i++){
        for(let j=0; j< boxes.length;j++){
            document.querySelectorAll('.all-prices')[i].classList.remove('first-price')
            let j = e.target.dataset.index;
            document.querySelectorAll('.all-prices')[j].classList.add('first-price')

        }
    }
}


// i get the idea