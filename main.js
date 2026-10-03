const companyDropdown = document.getElementById('companyDropdown');
const companyBtn = document.getElementById('companyBtn');
const companyMenu = document.getElementById('companyMenu');

function showCompanyMenu() {
    companyMenu.classList.add('active');
}

function hideCompanyMenu() {
    companyMenu.classList.remove('active');
}

companyDropdown.addEventListener('mouseenter', showCompanyMenu);
companyDropdown.addEventListener('mouseleave', hideCompanyMenu);

companyBtn.addEventListener('click', function(e) {
    e.stopPropagation();
    companyMenu.classList.toggle('active');
});

document.addEventListener('click', function(e) {
    if (!companyDropdown.contains(e.target)) {
        hideCompanyMenu();
    }
});

const menuItems = document.querySelectorAll('.menu-item');

menuItems.forEach(function(item) {
    item.addEventListener('mouseenter', function() {
        this.classList.add('active');
    });

    item.addEventListener('mouseleave', function() {
        this.classList.remove('active');
    });

    item.addEventListener('click', function() {
        this.classList.toggle('active');
    });
});

const scanBtn = document.getElementById('scanBtn');
scanBtn.addEventListener('click', function() {
    menuItems.forEach(function(item) {
        item.classList.add('active');
    });
});

const signInBtn = document.getElementById('signInBtn');
if (signInBtn) {
    signInBtn.addEventListener('click', function(e) {
        e.preventDefault();
        alert("Sign in tugmasi bosildi!");
    });
}

function handleButtonClick(btn, alertMsg, newText) {
    if (!btn) return;
    btn.addEventListener('click', function(e) {
        e.preventDefault();
        alert(alertMsg);
        this.innerHTML = newText;
    });
}

const heroIphoneBtn = document.getElementById('heroIphoneBtn');
const heroAndroidBtn = document.getElementById('heroAndroidBtn');
const secIphoneBtn = document.getElementById('secIphoneBtn');
const secAndroidBtn = document.getElementById('secAndroidBtn');

handleButtonClick(heroIphoneBtn, "iPhone versiyasini yuklab olish boshlandi!", "Downloaded for iPhone ✓");
handleButtonClick(heroAndroidBtn, "Android versiyasini yuklab olish boshlandi!", "Downloaded for Android ✓");
handleButtonClick(secIphoneBtn, "Certo iPhone uchun tanlandi!", "Selected iPhone ✓");
handleButtonClick(secAndroidBtn, "Certo Android uchun tanlandi!", "Selected Android ✓");

const aboutUsBtn = document.getElementById('aboutUsBtn');
const helpCenterBtn = document.getElementById('helpCenterBtn');
const spyIphoneBtn = document.getElementById('spyIphoneBtn');
const spyAndroidBtn = document.getElementById('spyAndroidBtn');

if (aboutUsBtn) {
    aboutUsBtn.addEventListener('click', function(e) {
        e.preventDefault();
        alert("About Us sahifasiga o'tilmoqda...");
        this.innerHTML = "Opening... &rarr;";
    });
}

if (helpCenterBtn) {
    helpCenterBtn.addEventListener('click', function(e) {
        e.preventDefault();
        alert("Help Center sahifasiga o'tilmoqda...");
        this.innerHTML = "Opening...";
    });
}

if (spyIphoneBtn) {
    spyIphoneBtn.addEventListener('click', function(e) {
        e.preventDefault();
        alert("iPhone uchun Certo yuklab olinmoqda!");
        this.innerHTML = "Downloading... ✓";
    });
}

if (spyAndroidBtn) {
    spyAndroidBtn.addEventListener('click', function(e) {
        e.preventDefault();
        alert("Android uchun Certo yuklab olinmoqda!");
        this.innerHTML = "Downloading... ✓";
    });
}

const viewInsightsBtn = document.getElementById('viewInsightsBtn');
if (viewInsightsBtn) {
    viewInsightsBtn.addEventListener('click', function(e) {
        e.preventDefault();
        alert("Barcha maqolalar sahifasiga o'tilmoqda...");
        this.innerHTML = "Loading... &rarr;";
    });
}

const insightCards = document.querySelectorAll('.insight-card');
insightCards.forEach(function(card) {
    card.addEventListener('click', function() {
        const title = this.querySelector('.card-title').innerText;
        alert("Maqola tanlandi: " + title);
    });
});

const newsletterForm = document.getElementById('newsletterForm');
const newsletterEmail = document.getElementById('newsletterEmail');

if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = newsletterEmail.value;
        if (email) {
            alert("Rahmat! Email muvaffaqiyatli obuna qilindi: " + email);
            newsletterEmail.value = '';
        }
    });
}

const privacyBtn = document.getElementById('privacyBtn');
const termsBtn = document.getElementById('termsBtn');

if (privacyBtn) {
    privacyBtn.addEventListener('click', function(e) {
        e.preventDefault();
        alert("Privacy Policy sahifasi");
    });
}

if (termsBtn) {
    termsBtn.addEventListener('click', function(e) {
        e.preventDefault();
        alert("Terms of Service sahifasi");
    });
}