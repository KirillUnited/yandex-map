// MAP
ymaps.ready(init);

function init() {
  // init    
  var myMap = new ymaps.Map("map", {
      center: [53.90, 27.43],
      controls: ['fullscreenControl', 'searchControl', 'geolocationControl'],
      zoom: 7
    }),
    menu = $('<ul class="catalog-map__list list-unstyled">' + '</ul>'),
    groups = [{
      name: "СТО И РЕМОНТ",
      style: "twirl#blueIcon",
      items: [{
          center: [53.926472, 27.463022],
          name: "СТО",
          disc: "Автоцентр Малиновка"
        },
        {
          center: [53.95351, 27.416489],
          name: "Шиномонтаж",
          disc: "Автоцентр Малиновка"
        },
        {
          center: [53.954533, 27.439874],
          name: "Оборудование для СТО",
          disc: "Автоцентр Малиновка"
        },
        {
          center: [53.954433, 27.429874],
          name: "Перетяжка и ремонт салона",
          disc: "Автоцентр Малиновка"
        },
        {
          center: [53.90955, 27.40791],
          name: "Эвакуация",
          disc: "Автоцентр Малиновка"
        },
        {
          center: [53.929083, 27.421708],
          name: "Вскрытие замков",
          disc: "Автоцентр Малиновка"
        },
        {
          center: [53.950843, 27.498271],
          name: "Техническая помощь на дорогах",
          disc: "Автоцентр Малиновка"
        },
        {
          center: [53.951843, 27.491271],
          name: "Техническая помощь на дорогах",
          disc: "Автоцентр Малиновка"
        },
        {
          center: [53.962843, 27.522371],
          name: "Техническая помощь на дорогах",
          disc: "Автоцентр Малиновка"
        },
        {
          center: [53.973843, 27.493471],
          name: "Техническая помощь на дорогах",
          disc: "Автоцентр Малиновка"
        },
        {
          center: [53.984843, 27.504571],
          name: "Техническая помощь на дорогах",
          disc: "Автоцентр Малиновка"
        },
        {
          center: [53.995843, 27.495671],
          name: "Техническая помощь на дорогах",
          disc: "Автоцентр Малиновка"
        }
      ]
    }];
  // Перебираем все группы.
  for (var i = 0, l = groups.length; i < l; i++) {
    createMenuGroup(groups[i]);
  }

  function createMenuGroup(group) {
    // Пункт меню.
    var menuItem = $('<li class="catalog-map__list-item">' + '</li>'),
      // Коллекция для геообъектов группы.
      collection = new ymaps.GeoObjectCollection(null, {
        preset: group.style
      }),
      // Контейнер для подменю.
      submenu = $('<ul class="submenu list-unstyled">' + '</ul>');
    // Добавляем коллекцию на карту.
    myMap.geoObjects.add(collection);
    // Добавляем подменю.
    menuItem
      .append(submenu)
      // Добавляем пункт в меню.
      .appendTo(menu);
    // Перебираем элементы группы.
    for (var j = 0, m = group.items.length; j < m; j++) {
      createSubMenu(group.items[j], collection, submenu);
    }
  }

  function createSubMenu(item, collection, submenu) {
    // Пункт подменю.
    var submenuItem = $('<li><i class="fa fa-map-marker" aria-hidden="true"></i><a href="#" class="catalog-map__list-item-link">' + item.name + '</a></li>'),
      // Создаем метку.
      placemark = new ymaps.Placemark(item.center, {
        balloonContentHeader: '<a href="#" class="catalog-map__yandex-item-link">' + item.name + '</a>',
        balloonContentBody: item.disc
      }, {
        iconLayout: 'default#image',
        iconImageHref: 'img/map-marker-yandex.png'
      });
    // Добавляем метку в коллекцию.
    collection.add(placemark);
    // Добавляем пункт в подменю.
    submenuItem
      .appendTo(submenu)
      // При клике по пункту подменю открываем/закрываем баллун у метки.
      .find('a')
      .click(function () {
        if (placemark.balloon.isOpen()) {
          placemark.balloon.close();
          return false;
        } else {
          myMap.panTo(item.center, {
            duration: 500
          }).then(function () {
            placemark.balloon.open();
          });
          return false;
        }
      });
  }
  // Добавляем меню в тэг BODY.
  menu.appendTo($('.catalog-map > .nano > .nano-content'));
  $('.nano-pane').show();
  // Выставляем масштаб карты чтобы были видны все группы.
  myMap.setBounds(myMap.geoObjects.getBounds());
  myMap.controls.add('typeSelector');
  myMap.controls.get('typeSelector').options.set('size', 'small');
  myMap.controls.add('zoomControl');
  myMap.controls.get('searchControl').options.set('size', 'small');
};
// END MAP