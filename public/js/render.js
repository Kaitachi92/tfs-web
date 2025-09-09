// Funções para renderizar usuários e paginação
export function renderUsers(users) {
  const usersContainer = document.getElementById('users');
  usersContainer.innerHTML = '';
  console.log('Usuários recebidos:', users);
  if (!users || users.length === 0) {
    usersContainer.textContent = 'Nenhum usuário encontrado.';
    return;
  }
  const ul = document.createElement('ul');
  ul.className = 'list-group';
  users.forEach(user => {
    const li = document.createElement('li');
    li.className = 'list-group-item';
    li.textContent = `${user.name} (${user.email})`;
    ul.appendChild(li);
  });
  usersContainer.appendChild(ul);
}

export function renderPagination(currentPage, totalPages, onPageClick) {
  const paginationContainer = document.getElementById('pagination');
  paginationContainer.innerHTML = '';
  for (let i = 1; i <= totalPages; i++) {
    const link = document.createElement('a');
    link.href = '#';
    link.textContent = i;
    link.style.margin = '0 5px';
    if (i === currentPage) {
      link.style.fontWeight = 'bold';
      link.style.textDecoration = 'underline';
    }
    link.addEventListener('click', (e) => {
      e.preventDefault();
      onPageClick(i);
    });
    paginationContainer.appendChild(link);
  }
}
