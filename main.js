fetch('projects.json')
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById('project-container');
    container.innerHTML = ''; // Очищаем "Загрузка проектов..."

    data.forEach(project => {
      const card = document.createElement('div');
      card.className = 'project-card';

      card.innerHTML = `
        <img src="${project.image}" alt="${project.title}">
        <h2>${project.title}</h2>
        <p>${project.description}</p>
        <div class="links">
          ${project.links.github ? `<a href="${project.links.github}" target="_blank">GitHub</a>` : ''}
          ${project.links.googleDrive ? `<a href="${project.links.googleDrive}" target="_blank">.zip</a` :''}
          ${project.links.dropbox ? `<a href="${project.links.dropbox}" target="_blank">Fille</a>` : ''}
          ${project.links.yandexDisk ? `<a href="${project.links.yandexDisk}" target="_blank"></a>` : ''}
          ${project.links.onedrive ? `<a href="${project.links.onedrive}" target="_blank">OneDrive</a>` : ''}
        </div>
      `;

      container.appendChild(card);
    });
  })
  .catch(error => {
    document.getElementById('project-container').innerHTML =
      '<p style="color: red;">Ошибка загрузки проектов.</p>';
    console.error('Ошибка загрузки JSON:', error);
  });