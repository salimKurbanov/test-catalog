const listContainer = document.getElementById("courseGrid");
const loadMoreBtn = document.getElementById('load_more');
const ITEMS_PER_PAGE = 4; 
const categoriesList = document.getElementById('categories').querySelectorAll('.categories-block__button');
const searchInput = document.getElementById("searchInput");

let currentItems = 0;
let filteredCourses = courses.slice(); 