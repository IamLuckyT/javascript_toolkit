/* Light/Dark Mode Toggle
Usage:
  lightDarkModeToggle({ buttonId: 'theme-toggle', storageKey: 'theme' });
*/
function lightDarkModeToggle({ buttonId, storageKey = 'theme' } = {}) {
  const btn = document.getElementById(buttonId);
  if (!btn) return;
  const saved = localStorage.getItem(storageKey);
  if (saved) document.documentElement.setAttribute('data-theme', saved);

  btn.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme') || 'light';
    const next = current === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem(storageKey, next);
  });
}
window.lightDarkModeToggle = lightDarkModeToggle;
