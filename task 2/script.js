const getUsersButton = document.getElementById('getUsersButton');
const userCardGrid = document.getElementById('userCardGrid');
const loader = document.getElementById('loader');

getUsersButton.addEventListener('click', () => {
  loader.style.display = 'flex';
  userCardGrid.innerHTML = '';

  fetch('https://reqres.in/api/users?page=1')
    .then(response => response.json())
    .then(data => {
      loader.style.display = 'none';
      data.data.forEach(user => {
        const card = document.createElement('div');
        card.className = 'user-card';
        card.innerHTML = `
          <h3>${user.first_name} ${user.last_name}</h3>
          <p>${user.email}</p>
          <img src="${user.avatar}" alt="Avatar" />
        `;
        userCardGrid.appendChild(card);
      });
    })
    .catch(error => {
      console.error('Error fetching users:', error);
      loader.style.display = 'none';
    });
});