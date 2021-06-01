

; (function () {
    let teachers_block = document.querySelector('.sheulde-main');
    if (teachers_block === null) {
        return;
    }
    let teachers_catalog = teachers_block.querySelector('.sheulde-box');
    let teachers_catalog_nav = teachers_block.querySelector('.sheulde-nav');
    let teachers_profiles = teachers_block.querySelectorAll('.sheulde-group');

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
        let item = closestItemByClass(target, 'sheulde-nav__btn');
        console.log(item);
        let filter_value;
        let preBtnClicked;
        let filtered_teachers = [];

        if (item === null) {
            return;
        }
        e.preventDefault();
        filter_value = item.getAttribute('datacategory');
        console.log(filter_value);
        preBtnClicked = teachers_catalog_nav.querySelector('.sheulde-nav__btn.clicked');
        if (preBtnClicked != null)
            preBtnClicked.classList.remove('clicked');
        item.classList.add('clicked');

        for (let i = 0; i < teachers_profiles.length; i++) {
            if (teachers_profiles[i].getAttribute('datafilter') === filter_value) {
                filtered_teachers.push(teachers_profiles[i]);
            }
        }
        console.table(filtered_teachers);
        update_teachers_catalog(teachers_catalog, filtered_teachers);


    });
    document.querySelector('.sheulde-nav__btn').click();
})();
; (function () {
    let teachers_block = document.querySelector('.sheulde-main.unmath');
    if (teachers_block === null) {
        return;
    }
    let teachers_catalog = teachers_block.querySelector('.sheulde-box');
    let teachers_catalog_nav = teachers_block.querySelector('.sheulde-nav');
    let teachers_profiles = teachers_block.querySelectorAll('.sheulde-group');

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
        let item = closestItemByClass(target, 'sheulde-nav__btn');
        console.log(item);
        let filter_value;
        let preBtnClicked;
        let filtered_teachers = [];

        if (item === null) {
            return;
        }
        e.preventDefault();
        filter_value = item.getAttribute('datacategory');
        console.log(filter_value);
        preBtnClicked = teachers_catalog_nav.querySelector('.sheulde-nav__btn.clicked');
        if (preBtnClicked != null)
            preBtnClicked.classList.remove('clicked');
        item.classList.add('clicked');

        for (let i = 0; i < teachers_profiles.length; i++) {
            if (teachers_profiles[i].getAttribute('datafilter') === filter_value) {
                filtered_teachers.push(teachers_profiles[i]);
            }
        }
        console.table(filtered_teachers);
        update_teachers_catalog(teachers_catalog, filtered_teachers);


    });
    document.querySelectorAll('.sheulde-nav__btn')[10].click();
})();