let filter = 'all';

// Подсчет курсов в категориях
categoriesList.forEach(btn => {
    const filterCategory = btn.dataset.filter;
    const indicator = btn.querySelector('.categories-block__indicator');

    if(filter === filterCategory) {
        btn.classList.add('active');
    }

    const count = filterCategory === 'all'
        ? courses.length
        : courses.filter(c => c.category === filterCategory).length;

    if (indicator) indicator.textContent = count;
});

// Обработчик клика на категории
categoriesList.forEach(btn => {
    btn.addEventListener('click', () => {
        filter = btn.dataset.filter;

        categoriesList.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        filteredCourses = filter === 'all'
            ? courses.slice()
            : courses.filter(c => c.category === filter);

        render(filteredCourses, true);
    });
});