const urlparms = new URLSearchParams(window.location.search);
const site_url = urlparms.get('site');

if (site_url) 
{
  const full_site_url = 'https://winnigames2024-original.github.io/' + site_url;
  loadAndInsertSiteContent(full_site_url, 'site-source');
}

async function openNoCloseEnableCookieAlert() {
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

if (navigator.cookieEnabled) {
  
} else {
  openNoCloseEnableCookieAlert();
}

