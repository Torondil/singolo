window.onload = function() {

  // Tags
  addTagsClickHandler();
}

const addTagsClickHandler = () => {
  document.querySelector('.navigation').addEventListener('click', (e) => {
    if (e.target.classList.contains('nav')) {
      let clickedTag = e.target;
      removeSelectedTags();
      selectClickedTag(clickedTag);
    }
  })
}

const removeSelectedTags = () => {
  let tags = document.querySelectorAll('.navigation .nav');
  tags.forEach(tag => {
    tag.classList.remove('navigation_active');
    tag.classList.add('navigation_unactive');
  })
}

const selectClickedTag = (clickedTag) => {
  clickedTag.classList.add('navigation_active');
  clickedTag.classList.remove('navigation_unactive');
}
