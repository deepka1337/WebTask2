const advertsList = document.querySelector('.adverts__list');
const inputs = document.querySelectorAll('.form-control');
const createAdvert = document.querySelector('.create');

const advertHTML = (advert) => `
  <li class="list-group-item d-flex flex-column align-items-start adverts__item p-4">
    <span class="fw-bold fs-4">${advert.title}</span>
    <p class="mt-3">${advert.description}</p>
  </li>
`;

createAdvert.addEventListener('click', () => {
  const errorClass = 'border-danger';
  let validation = true;

  inputs.forEach(input => {
    if (!input.value) {
      input.classList.add(errorClass);
      validation = false;

      input.addEventListener('change', () => input.classList.remove(errorClass));
    }
  });

  if (validation) {
    const [title, description] = inputs;

    fetch('../../php/api/Store/StoreAdvert.php', {
      method: 'POST',
      body: JSON.stringify({
        title: title.value,
        description: description.value,
      }),
    })
      .then(res => {
        if (res.status === 200) {
          const advert = {
            title: title.value,
            description: description.value,
          };

          advertsList.innerHTML += advertHTML(advert);
        }
      })
  }
});

fetch('../../php/api/Index/IndexAdverts.php')
  .then((res) => res.json())
  .then((res) => {
    res.adverts.forEach(advert => {
      if (advert.title || advert.description) {
        advertsList.innerHTML += advertHTML(advert);
      }
    })
  })