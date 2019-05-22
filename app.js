const addForm = document.querySelector('.add');
const list = document.querySelector('.todos');
const search = document.querySelector('.search')

addForm.addEventListener('submit', e => {
    e.preventDefault();
    const value = e.target.todo.value.trim()
    if(value.length){
    generateTemplate(value);
    addForm.reset();
    }
})


const generateTemplate = (todo) => {
  const html = `<li class="collection-item teal lighten-4">
  <span>${todo}</span><i class="far fa-trash-alt right delete"></i>
  <i class="far fa-check-circle right check"></i>
</li>`;

    list.innerHTML += html
};

//delete & cross
list.addEventListener('click', (e) => {
    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove();
    }

    else if(e.target.classList.contains('check')){
        e.target.previousElementSibling.previousElementSibling.classList.toggle('checked');
        e.target.parentElement.classList.toggle('teal');
        e.target.parentElement.classList.toggle('red');
        
    }

 
});

//search
const filtered = (input) => {
    Array.from(list.children)
    .filter((todo) => !todo.textContent.toLowerCase().includes(input))
    .forEach((todo) => todo.classList.add('filtered'))

    Array.from(list.children)
    .filter((todo) => todo.textContent.toLowerCase().includes(input))
    .forEach((todo) => todo.classList.remove('filtered'))
};


search.addEventListener('keyup', ()=>{
    const input = search.value.trim().toLowerCase();
    filtered(input);
})

