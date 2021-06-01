

; (function () {
    let teachers_block = document.querySelector('.our-teachers');
    if (teachers_block === null) {
        console.log('Секции с учителями нет our teachers');
        return;
    }
    let teachers_catalog = teachers_block.querySelector('.teachers');
    let teachers_catalog_nav = teachers_block.querySelector('.buttons-container');
    let teachers_profiles = teachers_block.querySelectorAll('.teacher-profile');

    function closestItemByClass(item, className) {
        var node = item;

        while (node) {
            if (node.classList.contains(className)) {
                return node;
            }

            node = node.parentElement;
        }

        return null;
    };

    function update_teachers_catalog(profiles, array) {
        clear_teachers_catalog(profiles);
        for (let i = 0; i < array.length; i++) {
            profiles.appendChild(array[i]);
        }
    }
    function clear_teachers_catalog(profiles) {
        while (profiles.firstChild) {
            profiles.removeChild(profiles.firstChild);
        }
    }


    teachers_catalog_nav.addEventListener('click', function (e) {
        let target = e.target;
        let item = closestItemByClass(target, 'buttons-container__button');
        let filter_value;
        let preBtnClicked;
        let filtered_teachers = [];

        if (item === null || item.classList.contains('button_clicked')) {
            return;
        }
        e.preventDefault();
        filter_value = item.getAttribute('data-filter');
        preBtnClicked = teachers_catalog_nav.querySelector('.buttons-container__button.button_clicked');
        if (preBtnClicked != null)
            preBtnClicked.classList.remove('button_clicked');
        item.classList.add('button_clicked');

        for (let i = 0; i < teachers_profiles.length; i++) {
            if (teachers_profiles[i].getAttribute('data-category') === filter_value) {
                filtered_teachers.push(teachers_profiles[i]);
            }
        }
        console.table(filtered_teachers);
        update_teachers_catalog(teachers_catalog, filtered_teachers);


    });
    console.log(teachers_catalog_nav.querySelector('.buttons-container__button').click());
})();
