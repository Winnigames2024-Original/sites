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






//Cookies system

function setCookie(name, value, days) {
    let expires = "";
    if (days) {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000)); // Конвертация дней в миллисекунды
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = `%%%LATEX_BLOCK_0%%%{value || ""}%%%LATEX_BLOCK_1%%%&') + "=([^;]*)");
    const match = document.cookie.match(regex);
    return match ? decodeURIComponent(match[1]) : undefined;
}

function checkCookies() {
    const cookieBanner = document.getElementById('cookie_note');
    const acceptButton = cookieBanner.querySelector('.cookie_accept');

    // Показываем уведомление, если согласие не дано
    if (!getCookie('cookies_policy')) {
        cookieBanner.classList.add('show');
    }

    // Обработчик клика по кнопке "Согласен"
    acceptButton.addEventListener('click', () => {
        setCookie('cookies_policy', 'true', 365); // Кука действует 1 год
        cookieBanner.classList.remove('show'); // Скрываем уведомление
    });
}

// Запускаем проверку при загрузке страницы
checkCookies();
