// Поиск
searchInput.addEventListener('input', () => {
    const q = searchInput.value.toLowerCase();
    filteredCourses = courses.filter(c => c.title.toLowerCase().includes(q));
    render(filteredCourses, true);
});
