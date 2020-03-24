window.onload = function() {
  // Tags
  addTagsClickHandler();
  addSliderClickHandler();
  addSliderBackClickHandler();
  addPhonesOffClickHandler();
  typeSelectedClickHandler();
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

// slider

const addSliderClickHandler = () => {
  document.querySelector('.wrapper_phones').addEventListener('click', (e) => {
    if (e.target.classList.contains('arrow')) {
      switchSlider();
    }
  })
}

const switchSlider = () => {
  let slider = document.querySelector('.phones');
  slider.style.display = 'none';
  let nextSlider = document.querySelector('.phones_2');
  nextSlider.style.display = 'block';
}

const addSliderBackClickHandler = () => {
  document.querySelector('.wrapper_phones').addEventListener('click', (e) => {
    if (e.target.classList.contains('arrow_2')) {
      returnSlider();
    }
  })
}

const returnSlider = () => {
  let slider_2 = document.querySelector('.phones_2');
  slider_2.style.display = 'none';
  let previousSlider = document.querySelector('.phones');
  previousSlider.style.display = 'flex';
}

// phones off

const addPhonesOffClickHandler = () => {
  document.querySelector('.wrapper_phones').addEventListener('click', (e) => {
    if (e.target.classList.contains('vertical-phone')) {
      verticalPhoneOff();
    } else
    if (e.target.classList.contains('vertical-phone_off')) {
      verticalPhoneOn();
    } else
    if (e.target.classList.contains('horizontal-phone')) {
      horizontalPhoneOff();
    } else
    if (e.target.classList.contains('horizontal-phone_off')) {
      horizontalPhoneOn();
    }
  })
}

const verticalPhoneOff = () => {
  document.querySelector('.vertical-phone_off').style.display = 'block';
}

const verticalPhoneOn = () => {
  document.querySelector('.vertical-phone_off').style.display = 'none';
}

const horizontalPhoneOff = () => {
  document.querySelector('.horizontal-phone_off').style.display = 'block';
}

const horizontalPhoneOn = () => {
  document.querySelector('.horizontal-phone_off').style.display = 'none';
}

// select types

const typeSelectedClickHandler = () => {
  document.querySelector('.types').addEventListener('click', (e) => {
    if (e.target.classList.contains('type')) {
      let clickedTag = e.target;
      removeSelectedType();
      selectClickedType(clickedTag);
    }
  })
}

const removeSelectedType = () => {
  let tags = document.querySelectorAll('.type');
  tags.forEach(tag => {
    tag.classList.remove('active_type');
    tag.classList.add('unactive_type');
  })
}

const selectClickedType = (clickedTag) => {
  clickedTag.classList.add('active_type');
  clickedTag.classList.remove('unactive_type');
  document.querySelector('.portfolio_images').querySelectorAll('.port_image').forEach(element => {
    element.style.order = Math.floor(1 + Math.random() * 12);
});
}

const randomPics = document.querySelector('.portfolio_images');

randomPics.addEventListener('click', (event) => {
    randomPics.querySelectorAll('.port_image').forEach(element => element.classList.remove('active_pic'));
    event.target.classList.add('active_pic');
});
