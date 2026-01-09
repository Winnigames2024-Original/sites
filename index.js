const urlparms = new URLSearchParams(window.location.search);
const site_url = urlparms.get('site');

if (site_url) 
{
  const full_site_url = 'https://winnigames2024-original.github.io/' + site_url;
  loadAndInsertSiteContent(full_site_url, 'site-source');
}

function openNoCloseEnableCookieAlert() {
  alert("Enable cookies!!!");
}



async function loadAndInsertSiteContent(url, targetDivId) {
  try {
    const response = await fetch(url);
    const htmlContent = await response.text(); // Получаем HTML как текст

    const targetDiv = document.getElementById(targetDivId);

    targetDiv.insertAdjacentHTML('beforeend', htmlContent);

    } catch (error) {
    console.error('Ошибка при загрузке или вставке контента:', error);
    }
}


function checkCookie(name) {
  // Разбиваем строку document.cookie на отдельные куки
  // и проверяем, есть ли кука, начинающаяся с "имя="
  return document.cookie.split(';').some((c) => c.trim().startsWith(name + '='));
}

// Пример использования:
if (checkCookie('userConsent')) {
  console.log("Пользователь дал согласие на Cookie.");
  // Скрыть баннер
  document.getElementById('cookieBanner').style.display = 'none';
} else {
  console.log("Согласие не получено.");
  // Показать баннер
  document.getElementById('cookieBanner').style.display = 'block';
  openNoCloseEnableCookieAlert();
}


function setCookie(name, value, days) {
  let expires = "";
  if (days) {
    let date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000)); // Срок в днях
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

// Пример: При нажатии кнопки "Принять"
document.getElementById('acceptButton').addEventListener('click', function() {
  setCookie('userConsent', 'accepted', 30); // Кука на 30 дней
  document.getElementById('cookieBanner').style.display = 'none'; // Скрываем баннер
});
