// Функция рендера с учетом "Load More"
function render(list, reset = false) {
    if (reset) currentItems = 0; // сброс при новом фильтре/поиске

    const nextItems = list.slice(currentItems, currentItems + ITEMS_PER_PAGE);
    if (reset) {
        listContainer.innerHTML = ''; // очищаем контейнер при новом фильтре
    }
    listContainer.innerHTML += nextItems.map(c => `
        <div class="courses__card">
            <img class="courses__image" src="./src/assets/db-images/${c.picture}" />
            <div class="courses__content">
                <div class="courses__tag ${c.category}">${c.category}</div>
                <div class="courses__title">${c.title}</div>
                <div class="courses__bottom">
                    <div class="courses__price">$${c.price}</div>
                    <div class="courses__line"></div>
                    <div class="courses__author">by ${c.author}</div>
                </div>
            </div>
        </div>
    `).join("");

    currentItems += nextItems.length;

    // Показываем или скрываем кнопку Load More
    if (currentItems >= list.length) {
        loadMoreBtn.style.display = 'none';
    } else {
        loadMoreBtn.style.display = 'flex';
    }
}

// Изначальный рендер
render(filteredCourses, true);