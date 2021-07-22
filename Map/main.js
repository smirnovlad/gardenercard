ymaps.ready(init);

function init() {
    var map = new ymaps.Map('map', {
        center: [67.31,98.27],
        zoom: 3,
        controls: ['zoomControl'],
        behaviors: ['drag']
    });

    var geolocation = ymaps.geolocation
    geolocation.get({
        provider: 'yandex',
        mapStateAutoApply: true
    }).then(function (result) {
        result.geoObjects.options.set('preset', 'islands#redCircleIcon');
        result.geoObjects.get(0).properties.set({
            balloonContentBody: 'Мое местоположение'
        });
        myMap.geoObjects.add(result.geoObjects);
    });

    myColl = new ymaps.GeoObjectCollection();

    var metka1 = new ymaps.Placemark([43.11, 131.88], {
        hintContent: '<div class="map__hint">Эта территория пригодна для выращивания огурцов</div>',
        balloonContent: [
            '<div class="map__balloon">',
            '<img class="map__ogurec-img" src="img/pngovoshi/bahchevie/ogurec.png" alt="Огурцыыы"/>',
            'Самые клевый перцы',
            '</div>'
        ].join('')
    },
    {
        iconLayout: 'default#image',
        iconImageHref: 'img/pngovoshi/bahchevie/ogurec.png',
        iconImageSize: [47, 47],
        iconImageOffset: [-24, -57]
    });

    var metka2 = new ymaps.Placemark([55.79,49.11], {
            hintContent: '<div class="map__hint">Эта территория пригодна для выращивания брокколи</div>',
            balloonContent: [
                '<div class="map__balloon">',
                '<img class="map__-img" src="img/pngovoshi/" alt=""/>',
                '',
                '</div>'
            ].join('')
        },
        {
            iconLayout: 'default#image',
            iconImageHref: 'img/pngovoshi/kapustnie/brokkoli.png',
            iconImageSize: [47, 47],
            iconImageOffset: [-24, -57]
        });

    var metka3 = new ymaps.Placemark([59.93,30.31], {
            hintContent: '<div class="map__hint">Эта территория пригодна для выращивания укропа</div>',
            balloonContent: [
                '<div class="map__balloon">',
                '<img class="map__-img" src="img/pngovoshi/" alt=""/>',
                '',
                '</div>'
            ].join('')
        },
        {
            iconLayout: 'default#image',
            iconImageHref: 'img/pngovoshi/pryanie/ukrop.png',
            iconImageSize: [47, 47],
            iconImageOffset: [-24, -57]
        });

    var metka4 = new ymaps.Placemark([56.01,92.85], {
            hintContent: '<div class="map__hint">Эта территория пригодна для выращивания редиса</div>',
            balloonContent: [
                '<div class="map__balloon">',
                '<img class="map__-img" src="img/pngovoshi/" alt=""/>',
                '',
                '</div>'
            ].join('')
        },
        {
            iconLayout: 'default#image',
            iconImageHref: 'img/pngovoshi/korneplodi/redis.png',
            iconImageSize: [47, 47],
            iconImageOffset: [-24, -57]
        });

    var metka5 = new ymaps.Placemark([65.14,57.22], {
            hintContent: '<div class="map__hint">Эта территория пригодна для выращивания обыкновенных бобов</div>',
            balloonContent: [
                '<div class="map__balloon">',
                '<img class="map__-img" src="img/pngovoshi/.png" alt=""/>',
                '',
                '</div>'
            ].join('')
        },
        {
            iconLayout: 'default#image',
            iconImageHref: 'img/pngovoshi/bobovie/bob.png',
            iconImageSize: [47, 47],
            iconImageOffset: [-24, -57]
        });

    var metka6 = new ymaps.Placemark([65.53,72.52], {
            hintContent: '<div class="map__hint">Эта территория пригодна для выращивания чеснока</div>',
            balloonContent: [
                '<div class="map__balloon">',
                '<img class="map__-img" src="img/pngovoshi/.png" alt=""/>',
                '',
                '</div>'
            ].join('')
        },
        {
            iconLayout: 'default#image',
            iconImageHref: 'img/pngovoshi/lukovichnie/chesnok.png',
            iconImageSize: [47, 47],
            iconImageOffset: [-24, -57]
        });

    var metka7 = new ymaps.Placemark([56.63,47.88], {
            hintContent: '<div class="map__hint">Эта территория пригодна для выращивания брокколи</div>',
            balloonContent: [
                '<div class="map__balloon">',
                '<img class="map__-img" src="img/pngovoshi/" alt=""/>',
                '',
                '</div>'
            ].join('')
        },
        {
            iconLayout: 'default#image',
            iconImageHref: 'img/pngovoshi/kapustnie/brokkoli.png',
            iconImageSize: [47, 47],
            iconImageOffset: [-24, -57]
        });

    var metka8 = new ymaps.Placemark([56.14,47.24], {
            hintContent: '<div class="map__hint">Эта территория пригодна для выращивания брокколи</div>',
            balloonContent: [
                '<div class="map__balloon">',
                '<img class="map__-img" src="img/pngovoshi/" alt=""/>',
                '',
                '</div>'
            ].join('')
        },
        {
            iconLayout: 'default#image',
            iconImageHref: 'img/pngovoshi/kapustnie/brokkoli.png',
            iconImageSize: [47, 47],
            iconImageOffset: [-24, -57]
        });

    myColl.add(metka1).add(metka2).add(metka3).add(metka4).add(metka5).add(metka6).add(metka7).add(metka8);

    map.geoObjects.add(myColl);

}