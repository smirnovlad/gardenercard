ymaps.ready(init);

var metki = [
    {
        latitude: 43.11,
        longitude: 131.88,
        hintContent: '<div class="map__hint">Эта территория пригодна для выращивания огурцов</div>',
        balloonContent: [
            '<div class="map__balloon">',
            '<img class="map__ogurec-img" src="img/pngovoshi/bahchevie/ogurec.png" alt="Огурцыыы"/>',
            'Самые клевый перцы',
            '</div>'
        ]
    },
    {
        latitude: 58.60,
        longitude: 49.66,
        hintContent: '<div class="map__hint">Эта территория пригодна для выращивания огурцов</div>',
        balloonContent: [
            '<div class="map__balloon">',
            '<img class="map__ogurec-img" src="img/pngovoshi/bahchevie/ogurec.png" alt="Огурцыыы"/>',
            'Самые клевый перцы',
            '</div>'
        ]
    },
    {
        latitude: 59.93,
        longitude: 30.31,
        hintContent: '<div class="map__hint">Эта территория пригодна для выращивания огурцов</div>',
        balloonContent: [
            '<div class="map__balloon">',
            '<img class="map__ogurec-img" src="img/pngovoshi/bahchevie/ogurec.png" alt="Огурцыыы"/>',
            'Самые клевый перцы',
            '</div>'
        ]
    },
    {
        latitude: 56.01,
        longitude: 92.85,
        hintContent: '<div class="map__hint">Эта территория пригодна для выращивания огурцов</div>',
        balloonContent: [
            '<div class="map__balloon">',
            '<img class="map__ogurec-img" src="img/pngovoshi/bahchevie/ogurec.png" alt="Огурцыыы"/>',
            'Самые клевый перцы',
            '</div>'
        ]
    },
    {
        latitude: 65.14,
        longitude: 57.22,
        hintContent: '<div class="map__hint">Эта территория пригодна для выращивания огурцов</div>',
        balloonContent: [
            '<div class="map__balloon">',
            '<img class="map__ogurec-img" src="img/pngovoshi/bahchevie/ogurec.png" alt="Огурцыыы"/>',
            'Самые клевый перцы',
            '</div>'
        ]
    },
    {
        latitude: 65.53,
        longitude: 72.52,
        hintContent: '<div class="map__hint">Эта территория пригодна для выращивания чеснока</div>',
        balloonContent: [
            '<div class="map__balloon">',
            '<img class="map__ogurec-img" src="img/pngovoshi/bahchevie/ogurec.png" alt="Огурцыыы"/>',
            'Самые клевый перцы',
            '</div>'
        ]
    }
];

function init() {
    var map = new ymaps.Map('map', {
        center: [67.31,98.27],
        zoom: 3,
        controls: ['zoomControl'],
        behaviors: ['drag']
    });

    metki.forEach(function(obj){
        var metka = new ymaps.Placemark([obj.latitude, obj.longitude], {
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
        map.geoObjects.add(metka1);
    });

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

    var metka2 = new ymaps.Placemark([58.60,49.66], {
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
}