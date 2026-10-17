const btnTema = document.querySelector('#btnToggleTema');
const bodyHalaman = document.querySelector('body');

if (localStorage.getItem('portfolio-theme') === 'light') {
  bodyHalaman.classList.add('light-mode');
}

if (btnTema) {
  const updateThemeButton = function() {
    btnTema.textContent = bodyHalaman.classList.contains('light-mode')
      ? '🌙 Mode Gelap'
      : '🔆 Mode Terang';
  };

  updateThemeButton();

  btnTema.addEventListener('click', function() {
    bodyHalaman.classList.toggle('light-mode');
    localStorage.setItem(
      'portfolio-theme',
      bodyHalaman.classList.contains('light-mode') ? 'light' : 'dark'
    );
    updateThemeButton();
  });
}

const projectSearch = document.querySelector('#projectSearch');
const projectSearchStatus = document.querySelector('#projectSearchStatus');
const projectItems = document.querySelectorAll('.project-item');

if (projectSearch && projectSearchStatus) {
  const updateProjectResults = function() {
    const query = projectSearch.value.trim().toLocaleLowerCase('id');
    let visibleCount = 0;

    projectItems.forEach(item => {
      const matches = item.textContent.toLocaleLowerCase('id').includes(query);
      item.hidden = !matches;
      if (matches) visibleCount += 1;
    });

    projectSearchStatus.textContent = visibleCount === 0
      ? 'Tidak ada proyek yang cocok.'
      : `${visibleCount} proyek ditemukan.`;
  };

  projectSearch.addEventListener('input', updateProjectResults);
  updateProjectResults();
}

const btnBukaModal = document.querySelector('#btnKontak');
const elemenModal = document.querySelector('#modalKontak');
const btnTutupModal = document.querySelector('#btnTutupModal');

if (btnBukaModal && elemenModal && btnTutupModal) {
  btnBukaModal.addEventListener('click', function(event) {
    event.preventDefault();
    elemenModal.classList.add('show');
  });

  btnTutupModal.addEventListener('click', function() {
    elemenModal.classList.remove('show');
  });
}

const btnSkills = document.querySelectorAll('.skill-badge');
const modalSkill = document.querySelector('#modalSkill');
const modalSkillTitle = document.querySelector('#modalSkillTitle');
const modalSkillInfo = document.querySelector('#modalSkillInfo');
const btnTutupModalSkill = document.querySelector('#btnTutupModalSkill');

if (modalSkill && modalSkillTitle && modalSkillInfo && btnTutupModalSkill) {
  btnSkills.forEach(badge => {
    badge.addEventListener('click', function() {
      const title = this.getAttribute('data-title');
      const info = this.getAttribute('data-info');

      modalSkillTitle.textContent = title;
      modalSkillInfo.textContent = info;
      modalSkill.classList.add('show');
    });
  });

  btnTutupModalSkill.addEventListener('click', function() {
    modalSkill.classList.remove('show');
  });

  modalSkill.addEventListener('click', function(e) {
    if (e.target === modalSkill) {
      modalSkill.classList.remove('show');
    }
  });
}