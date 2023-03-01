// ナビゲーションメニューの要素を取得する
const navMenu = document.querySelector('.nav-menu');

// ナビゲーションメニューのアイコン要素を取得する
const navIcon = document.querySelector('.nav-icon');

// ナビゲーションメニューを表示する関数を定義する
function showNavMenu() {
  navMenu.classList.add('show');
}

// ナビゲーションメニューを非表示にする関数を定義する
function hideNavMenu() {
  navMenu.classList.remove('show');
}

// ナビゲーションメニューを表示するイベントを設定する
navIcon.addEventListener('click', showNavMenu);

// ナビゲーションメニューを非表示にするイベントを設定する
navMenu.addEventListener('click', hideNavMenu);
