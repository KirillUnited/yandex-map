$(document).ready(function () {

	$(document).click(function (e) {
		if (!$('.navbar-collapse').is(e.target) && $('.navbar-collapse').has(e.target).length === 0) {
			$(".navbar-collapse").collapse('hide');
		};
	});

	$('body').on('click', '.navbar-collapse a', function () {
		$(".navbar-collapse").collapse('hide');
	});

	$('body').on('click', '.login', function () {
		$('.popups, .popup__sign-in').fadeIn();
		return false;
	});
	$('body').on('click', '.registration a', function () {
		$('.popup__sign-in').hide(),
			$('.popup__sign-up').show();
		return false;
	});
	$('body').on('click', '.close', function () {
		$('.popups, .popup ').fadeOut();
		return false;
	});
	$(document).click(function (e) {
		if (!$('.popup').is(e.target) && $('.popup').has(e.target).length === 0) {
			$('.popups, .popup').fadeOut();
		};
	});

	$('.popup form').submit(function () {
		$(this).find('.error').remove();
		if ($(this).find('input[type="text"]').val() == '') {
			$(this).find('button').before('<div class="error">Заполните поля</div>');
			return false;
		};
		if ($(this).find('input[type="email"]').val() == '') {
			$(this).find('button').before('<div class="error">Введите email</div>');
			return false;
		};
		if ($(this).find('input[type="password"]').val() == '') {
			$(this).find('button').before('<div class="error">Введите пароль</div>');
			return false;
		};
		if ($(this).find('input[type="password"]:eq(1)').val() == '') {
			$(this).find('button').before('<div class="error">Введите пароль ещё раз</div>');
			return false;
		};
		$.post(
			$(this).attr('action'),
			$(this).serialize()
		);
		return false;
	});

	// user__block begin
	$('body').on('click', '.user__block_avatar', function () {
		if ($(this).hasClass('user__block_avatar-fix')) {
			$('.user__balance').css({
				right: '0px'
			});
			$('.user__block_avatar').removeClass('user__block_avatar-fix');
			$('.user__id').removeClass('user__id_active');
			$('.user__block_menu').hide();
			$('.user__block_avatar').removeClass('dropdown-arrow');
			return false;
		} else {
			$('.user__balance').css({
				'position': 'relative'
			}).css({
				right: '44px'
			});
			$('.user__block_menu').show();
			$('.user__block_avatar').addClass('user__block_avatar-fix');
			$('.user__id').addClass('user__id_active');
			$('.user__block_avatar').addClass('dropdown-arrow');
			return false;
		}

	});
	$(document).click(function (e) {
		if (!$('.user__block_menu').is(e.target) && $('.user__block_menu').has(e.target).length === 0) {
			$('.user__balance').css({
				right: '0px'
			});
			$('.user__block_avatar').removeClass('user__block_avatar-fix');
			$('.user__id').removeClass('user__id_active');
			$('.user__block_menu').hide();
		};
	});

	// mobile
	$('body').on('click', '.btn-user', function () {
		$('.user__balance').css({
			right: '0px'
		});
		$('.header__middle_user').addClass('show');
		$('.user__block_menu').addClass('show');
		return false;
	});
	$('body').on('click', '.header__middle_user > .close', function () {
		$('.header__middle_user').removeClass('show');
		return false;
	});
	$(window).resize(function () {
		if ($(this).width() > 971) {
			$('.header__middle_user, .user__block_menu').removeClass('show');
			$('.user__balance').css({
				right: '0px'
			});
			$('.user__block_avatar').removeClass('user__block_avatar-fix');
			$('.user__id').removeClass('user__id_active');
			$('.user__block_menu').hide();
			$('.user__block_avatar').removeClass('dropdown-arrow');
		};

	});

	$('body').on('click', '.btn-mobile-search', function() {
    $('.header__middle_search_mobile').show();
    $('.search-mobile-input form input').focus();
    return false;
  });
  $('body').on('click', '.cancel__text', function() {
    $('.header__middle_search_mobile').hide();
    return false;
  });

	// user__block end
	$('body').on('click', '.comment .media-heading i', function () {
		$(this).toggleClass('favorite');
	});

	// .block__send-comment
	$('body').on('focus', 'textarea[name="user-comment"]', function () {
		$(this).addClass('write-comment');
		$('.block__send-comment').show();
	});
	$('body').on('click', '.btn-send-comment', function () {
		if ($('textarea[name="user-comment"]').val() !== '') {
			$('textarea[name="user-comment"]').removeClass('write-comment');
			$('.block__send-comment').hide();
		};
	});
	$(document).click(function (e) {
		if (!$('.comment__field .media-body').is(e.target) && $('.comment__field .media-body').has(e.target).length === 0) {
			$('textarea[name="user-comment"]').removeClass('write-comment');
			$('.block__send-comment').hide();
		};
	});

	var userName = $('.user__name').text();
	$('.user__name').attr('title', userName);

	// company-catalog__sort-list toggle dropdown menu
	$('body').on('click', '.company-catalog__sort-by, .company-catalog__sort-item-link', function () {
		$('.company-catalog__sort-list').slideToggle();
		return false;
	});
	$('body').on('click', '.company-catalog__sort-item > .company-catalog__sort-item-link', function () {
		var choice = $(this).text();
		$('.company-catalog__sort-by').text(choice);
		$(this).parent().addClass('company-catalog__sort-item_active');
		$(this).parent().siblings().removeClass('company-catalog__sort-item_active');
		return false;
	});

	// begin filter-left__filter
	$('body').on('change', '.filter-left__list-select', function () {
		$(this).removeClass('filter-left__list-item_default')
			.addClass('filter-left__list-item');
	});
	$('body').on('click', '.filter-left__filter-reset', function () {
		$(this).parent().find('.filter-left__list-select')
			.removeClass('filter-left__list-item')
			.addClass('filter-left__list-item_default');
	});
	// end filter-left__filter

	// begin timetable_right

	$('a.contacts-block-title').toggle(function () {
		$(this).text('Скрыть режим работы')
			.addClass('visible')
			.parent()
			.find('.timetable')
			.slideToggle();
		return false;
	}, function () {
		$(this).text('Режим работы')
			.removeClass('visible')
			.parent()
			.find('.timetable')
			.slideToggle();
		return false;
	});

	// end timetable_right

	// NEW_menu
	$('body').on('click', '.header__middle_menu > li > a', function () {
		$(this).parent()
			.find('.header__menu-block')
			.toggleClass('dropdown')
			.parent().children('a')
			.toggleClass('dropdown-arrow');

		return false;
	});

	$('body').on('click', 'button.navbar-toggle', function () {
		$(this).parent().parent()
			.find('.header__menu')
			.addClass('display-flex');
		return false;
	});
	$('body').on('click', '.header__menu > .close', function () {
		$(this).parent()
			.removeClass('display-flex');
		return false;
	})
	// en NEW_menu


});
// IMPORT HTML
// var link = document.querySelector('link[rel=import]');
// var content = link.import.querySelector('.main');
// document.querySelector(".workarea-wrap").appendChild(content.cloneNode(true));