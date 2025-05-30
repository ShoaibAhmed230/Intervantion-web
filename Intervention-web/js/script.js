 const testimonials = [
    {
      name: 'Abbie Harvey',
      image: './assets/images/image 2.png',
      text: 'I have been caring for my mom & dad off and on for about 10 years now, and I know the importance of me being there for appointments. Older people need attention, love and care that they truly deserve.'
    },
    {
      name: 'John Smith',
      image: 'https://randomuser.me/api/portraits/men/31.jpg',
      text: 'Taking care of my grandmother taught me compassion and patience. Every small moment matters when you care.'
    },
    {
      name: 'Emily Rose',
      image: 'https://randomuser.me/api/portraits/women/65.jpg',
      text: 'Helping others gave me purpose. I understand how valuable time and presence are for aging parents.'
    }
  ];

  let index = 0;

  const carousel = document.getElementById('carousel');
  const dotsContainer = document.getElementById('dots');

  function renderDots() {
    dotsContainer.innerHTML = '';
    testimonials.forEach((_, i) => {
      const dot = document.createElement('span');
      dot.classList.add('dot');
      if (i === index) dot.classList.add('active');
      dot.addEventListener('click', () => {
        index = i;
        updateCarousel();
      });
      dotsContainer.appendChild(dot);
    });
  }

  function updateCarousel() {
    const t = testimonials[index];
    carousel.innerHTML = `
      <div class="carousel-image">
        <img src="${t.image}" alt="${t.name}" />
      </div>
      <div class="carousel-text">
        <h3>${t.name}</h3>
        <div class="quote-mark">“</div>
        <p>${t.text}</p>
      </div>
    `;
    renderDots();
  }

  function nextSlide() {
    index = (index + 1) % testimonials.length;
    updateCarousel();
  }

  function prevSlide() {
    index = (index - 1 + testimonials.length) % testimonials.length;
    updateCarousel();
  }

  // Initialize
  updateCarousel();



    document.getElementById('mobileToggle').addEventListener('click', () => {
    document.getElementById('mobileMenu').classList.toggle('show');
  });

// Input focus and blur event
  document.querySelectorAll('.input-wrapper input').forEach(input => {
    input.addEventListener('focus', () => {
      input.parentElement.classList.add('focused');
    });

    input.addEventListener('blur', () => {
      if (input.value === '') {
        input.parentElement.classList.remove('focused');
      }
    });
  });

  // Form validation
  const form = document.getElementById('contactUs');
  const nameInput = document.getElementById('email');
  const nameError = document.getElementById('nameError');

  form.addEventListener('submit', function (e) {
    if (!nameInput.value.trim()) {
      e.preventDefault();
      nameError.style.display = 'block';
      nameInput.style.borderColor = '#ff7e7e';
    } else {
      nameError.style.display = 'none';
      nameInput.style.borderColor = '';
    }
  });