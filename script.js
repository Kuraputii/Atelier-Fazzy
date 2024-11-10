document.addEventListener('DOMContentLoaded', function () {
    // スクロールに応じたヘッダーの表示/非表示
    let lastScrollY = window.scrollY;
    const header = document.querySelector('header');

    window.addEventListener('scroll', () => {
        if (window.scrollY > lastScrollY) {
            header.style.top = `-${header.offsetHeight}px`;
        } else {
            header.style.top = '0';
        }
        lastScrollY = window.scrollY;
    });

    // メニューの開閉
    const menu = document.getElementById('menu');
    const body = document.body;
    const overlay = document.querySelector('.overlay');

    document.addEventListener('click', (event) => {
        if (!menu.contains(event.target) && !event.target.closest('.menu-icon')) {
            menu.classList.remove('active');
            body.classList.remove('menu-active');
            overlay.classList.remove('active');
        }
    });

    window.toggleMenu = function () {
        menu.classList.toggle('active');
        body.classList.toggle('menu-active');
        overlay.classList.toggle('active');
    };

    // モーダルウィンドウの開閉
    const modal = document.getElementById('modal');

    document.querySelector('.button-link[href="link3.html"]').addEventListener('click', function (event) {
        event.preventDefault();
        toggleModal();
    });

    window.toggleModal = function () {
        if (!modal.classList.contains('active')) {
            modal.style.display = 'flex';
            setTimeout(() => {
                modal.classList.add('active');
                overlay.classList.add('active');
            }, 10);
        } else {
            modal.classList.remove('active');
            overlay.classList.remove('active');
            setTimeout(() => {
                modal.style.display = 'none';
            }, 300);
        }
    };

    // オーバーレイおよびモーダルウィンドウの外部クリックでモーダルを閉じる
    overlay.addEventListener('click', function () {
        if (modal.classList.contains('active')) {
            toggleModal();
        }
    });

    modal.addEventListener('click', function (event) {
        if (!event.target.closest('.modal-content')) {
            toggleModal();
        }
    });
});
