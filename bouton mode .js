const toggleButton = document.getElementById('theme-toggle');
const body = document.body;
const icon = toggleButton.querySelector('i');

// Vérifier si l'utilisateur a déjà un thème préféré
const currentTheme = localStorage.getItem('theme');

if (currentTheme === 'dark') {
  body.classList.add('dark-mode');
  icon.classList.remove('fa-moon');
  icon.classList.add('fa-sun'); // Icône pour le mode clair
}

toggleButton.addEventListener('click', function() {
  body.classList.toggle('dark-mode');
  
  if (body.classList.contains('dark-mode')) {
    icon.classList.remove('fa-moon');
    icon.classList.add('fa-sun'); // Icône pour le mode clair
    localStorage.setItem('theme', 'dark');
  } else {
    icon.classList.remove('fa-sun');
    icon.classList.add('fa-moon'); // Icône pour le mode sombre
    localStorage.setItem('theme', 'light');
  }
});
