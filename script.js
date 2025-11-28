const listContainer = document.getElementById("courseGrid");
const searchInput = document.getElementById("searchInput");


function render(list) {
listContainer.innerHTML = list.map(c => `
    <div class='card'>
    <img src='https://via.placeholder.com/600x400/ffd500/000?text=${c.category}' />
    <div class='body'>
    <div class='tag'>${c.category}</div>
    <div class='title'>${c.title}</div>
    <div class='price'>$${c.price}</div>
    <div class='author'>by ${c.author}</div>
    </div>
    </div>`).join("");
}

render(courses);



function render(list) {
    grid.innerHTML = list.map(c => `
        <div class='card'>
            <img src='https://via.placeholder.com/600x400/ffd500/000?text=${c.category}' />
            <div class='body'>
            <div class='tag'>${c.category}</div>
            <div class='title'>${c.title}</div>
            <div class='price'>$${c.price}</div>
            <div class='author'>by ${c.author}</div>
            </div>
        </div>`).join("");
}


render(courses);


document.querySelectorAll('.categories button').forEach(btn => {
    btn.addEventListener('click', () => {
    const filter = btn.dataset.filter;
    if (filter === 'all') render(courses);
        else render(courses.filter(c => c.category === filter));
    });
});


searchInput.addEventListener('input', () => {
    const q = searchInput.value.toLowerCase();
    render(courses.filter(c => c.title.toLowerCase().includes(q)));
});