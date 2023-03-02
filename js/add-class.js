// надаємо змінній значення класу, на якому будемо ловити події:
const tagsContainer = document.querySelector('.js-tags');
let selectedTag = null;

// додаємо слухача події з функцією:
tagsContainer.addEventListener('click', onTagsContainerClick);

function onTagsContainerClick(event) {
    // якщо клацання відбувається не по кнопці, а між кнопками, перериваємо функцію:
    if (event.target.nodeName !== 'BUTTON') {
        return;
    }

    const currentActiveBtn = document.querySelector('.tags__btn--active');

    // перевіряємо, чи клас уже є, і якщо є - знімаємо з іншої кнопки

    // if (currentActiveBtn) {
    //     currentActiveBtn.classList.remove('.tags__btn--active');
    // }

    // або:
    currentActiveBtn?.classList.remove('.tags__btn--active');

    const nextActiveBtn = event.target;
    nextActiveBtn.classList.add('.tags__btn--active');

    // знімаємо значення датаатрибуту у елемента(додатково)
    selectedTag = nextActiveBtn.dataset.value;
}

// ---------------- можна іншим варіантом( за допомогою .toggle)---------------------------

const tagsContainerEl = document.querySelector('.js-tags');

const selectedTags = [];
tagsContainerEl.addEventListener('click', onTagsContainerClick);
function onTagsContainerClick(event) {
    if (event.target.nodeName !== 'BUTTON') {
        return;
    }
    event.target.classList.toggle('.tags__btn--active');

    // виникає проблема, де ми будемо зберігати дані про клацнуті кнопки (потрібно, якщо ми хочемо зчитати ці дані)
    // тому:
    selectedTags.push(event.target.dataset.value);
    console.log(selectedTags);
    
}

//--------------- при зняття виділення ми повинні видалии значення з масиву. Тому краще застосовувати не масив а сет: 

const tagsContainerRef = document.querySelector('.js-tags');

// Set не ропускає дублювання примітивів
const selTags = new Set();
tagsContainerRef.addEventListener('click', onTagsContainerClick);
function onTagsContainerClick(event) {
    if (event.target.nodeName !== 'BUTTON') {
        return;
    }
    const btn = event.target;
    const teg = btn.dataset.value;
    const isActive = btn.classList.contains('tags__btn--active');

    if (isActive) {
        selTags.delete(tag); 
    } else {
        selTags.add(tag);
    }
    event.target.classList.toggle('.tags__btn--active'); 
}