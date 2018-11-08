"use strict";
var app = app || {};
app = (() => {
    var init = x => { onCreate(x); };
    var onCreate = x => { setContentView(x); };
    var setContentView = x => {
        console.info(
            '\n' +
            '                                                                   ,,\n' +
            '                                                                  /  ,\n' +
            '                                                                 /   /\n' +
            '                                                                /   /\n' +
            ' ____________________________                                  /   /\n' +
            '⎢                            ⎢                                /   /\n' +
            '⎢ 프로젝트 니방내방 담당자 김단아 :) ⎢                               /   /\n' +
            '⎢  sweetmilky.dev@gmail.com  ⎢                              /   /\n' +
            '⎢______  ____________________⎢                             /   /\n' +
            '       \\/   ,     ,,                                      /   /\n' +
            '           /@\____/@ \\                                ____/   /\n' +
            '          /          \\                         _____/        /__\n' +
            '     /"\\ / •    •     \\                     __/             /  @@"\\\n' +
            '     \\   @@  ㅅ  @@    /___             ___/                /    _/\n' +
            '    /"\\   \\                \\__________/                    |__/ "\\\n' +
            '    \\  \\                                                  /      /\n' +
            '     \\  \\ __                                                   _/\n' +
            '      \\                                                     __/\n' +
            '        \\_                                           ______/\n' +
            '           \\___                                   __/\n' +
            '                \\__                            __/\n' +
            '                   \\_____                _____/\n' +
            '                         \\______________/\n' +
            '\n'
        );
        $.extend((() => {
            sessionStorage.setItem('context', x);
            sessionStorage.setItem('script', x + '/resources/js');
            sessionStorage.setItem('style', x + '/resources/css');
            sessionStorage.setItem('img', x + '/resources/img');
            return {
                context: () => { return sessionStorage.getItem('context'); },
                script: () => { return sessionStorage.getItem('script'); },
                style: () => { return sessionStorage.getItem('style'); },
                img: () => { return sessionStorage.getItem('img'); }
            };
        })());
        $.getScript(x + '/resources/js/danah.js', () => { $.extend(new DanahS()); });
        app.router.main();
    };
    return { init: init };
})();
app.router = {
    main: x => {
        $('html, body').scrollTop(0);
        $.when(
            $.getScript($.script() + '/hyeri.js'),
            $.Deferred(y => { $(y.resolve); })
        ).done(x => {
            $('#footer').remove();
            $('#wrapper').html((($.type($.cookie("userid")) === 'undefined') ? nav() : anav()) + content()).append(footer());
            hyeri.home();
            $('#logo').click(e => {
                e.preventDefault();
                app.router.main();
            });
            $('#logo2').click(e => {
                e.preventDefault();
                $('#logo').trigger('click');
            });
            $('#menu-btn').click(e => {
                e.preventDefault();
                $('#nav-drawer-wrap').addClass('open');
            });
            $('.navigation-drawer__close').click(e => {
                e.preventDefault();
                $('#drawer-wrap').removeClass('open');
            });
            $('#board_btn').click(e => {
                e.preventDefault();
                $('.navigation-menu__primary').removeClass(' current active');
                $('.navigation-menu__primary').eq(0).addClass(' current active');
                $('#footer').remove();
                $.getScript($.script() + '/danah.js', () => { danah.init(); });
            });
            $('#board_btn2').click(e => {
                e.preventDefault();
                $('#board_btn').trigger('click');
                $('#nav-drawer-wrap').removeClass('open');
            });
            $('#store_btn').click(e => {
                e.preventDefault();
                $('.navigation-menu__primary').removeClass(' current active');
                $('.navigation-menu__primary').eq(1).addClass(' current active');
                $('#footer').remove();
                $.getScript($.script() + '/jun.js', () => { jun.init(); });
            });
            $('#store_btn2').click(e => {
                e.preventDefault();
                $('#store_btn').trigger('click');
                $('#drawer-wrap').removeClass('open');
            });
            $('#statics_btn').click(e => {
                e.preventDefault();
                if ($.cookie('userid') == undefined) {
                    $.toast($('<h4/>').text('로그인이 필요한 서비스 입니다.'), { duration: 2000 });
                    $('#login_btn').trigger('click');
                } else {
                    $('.navigation-menu__primary').removeClass(' current active');
                    $('.navigation-menu__primary').eq(2).addClass(' current active');
                    $('#footer').remove();
                    $.getScript($.script() + '/jaekyung.js', () => { jaekyung.init(); });
                    $('#wrapper').append(footer());
                }
            });
            $('#statics_btn2').click(e => {
                e.preventDefault();
                $('#statics_btn').trigger('click');
                $('#drawer-wrap').removeClass('open');
            });
            $('#search_btn').click(e => {
                e.preventDefault();
                $.getScript($.script() + '/danah.js', () => { danah.u.sb(e); });
            });
            $('#search_btn2').click(e => { 
            	e.preventDefault();
            	$.getScript($.script() + '/danah.js', () => { danah.u.sb(e); });
            });
            $('#search_menu_btn').click(e =>{
            	e.preventDefault();
            	$('#search-drawer-wrap').addClass('open');
            });
            $('.navigation-search-drawer__close').click(e => {
                e.preventDefault();
                $('#search-drawer-wrap').removeClass('open');
            });
            $('#write_btn').click(e => {
                e.preventDefault();
                $.getScript($.script() + '/danah.js', () => { danah.u.wb(); });
            });
            $('#write_btn2').click(e => {
                e.preventDefault();
                $('#write_btn').trigger('click');
                $('#drawer-wrap').removeClass('open');
            });
            $('#h_cart_btn').click(e => {
                e.preventDefault();
                if ($.cookie('userid') == undefined) {
                    $.toast($('<h4/>').text('로그인이 필요한 서비스 입니다.'), { duration: 2000 });
                    $('#login_btn').trigger('click');
                } else {
                	$('#footer').remove();
                    $.getScript($.script() + '/jun.js', () => { jun.main.cart(); });
                }
            });
            $('#h_cart_btn2').click(e => {
                e.preventDefault();
                $('#h_cart_btn').trigger('click');
                $('#drawer-wrap').removeClass('open');
            });
            $('#login_btn').click(e => {
                e.preventDefault();
                $('#footer').remove();
                hyeri.login();
            });
            $('#login_btn2').click(e => {
                e.preventDefault();
                $('#login_btn').trigger('click');
                $('#drawer-wrap').removeClass('open');
            });
            $('#join_btn').click(e => {
                e.preventDefault();
                $('.h_nav_left').removeClass('active');
                $('#join_btn').addClass('active');
                $('#footer').remove();
                hyeri.add();
            });
            $('#join_btn2').click(e => {
                e.preventDefault();
                $('#join_btn').trigger('click');
                $('#drawer-wrap').removeClass('open');
            });
            $('#logout_btn').click(e => {
                e.preventDefault();
                if ($.removeCookie('userid') &&
                    $.removeCookie('nickname') &&
                    $.removeCookie('profile')) {
                    alert("정상적으로 로그아웃 되었습니다.");
                } else {
                    alert("로그아웃 실패");
                }
                app.router.main();
            });
            $('#logout_btn2').click(e => {
                e.preventDefault();
                $('#logout_btn').trigger('click');
                $('#drawer-wap').removeClass('open');
            });
            $.each(['kimdanah', 'ryujaekyung', 'kimjieun', 'kimjun', 'honghyeri'], function() {
                $('#' + this)
                .tooltip({
                    title: "<img src='" + $.img() + "/common/" + this + ".png'/>",
                    animated: 'fade',
                    placement: 'bottom',
                    html: true
                });
            });
        });
    }
};

var nav = () => '<div id="navigation" class="navigation--top-banner-hidden">' +
    '    <nav class="navigation-primary-wrap sticky-top" style="height: 81px;">' +
    '        <div class="navigation-primary__container sticky-content open float" style="position: fixed; bottom: auto; top: 0px;">' +
    '            <div class="navigation-primary">' +
    '                <button class="navigation-primary__menu-btn" id="menu-btn" aria-label="메뉴 열기">' +
    '                    <span class="icon icon-etc-button-hamburger"></span>' +
    '                </button>' +
    '                <a class="navigation-primary__logo" >' +
    '                    <img class="icon icon-etc-brand-bi-md logo-md" id="logo" aria-label="니방내방" src="' + $.img() + '/logo.png" style="height: 45px;width: fit-content;"></img>' +
    '                    <img class="icon icon-etc-brand-bi-xs logo-sm" id="logo2" aria-hidden="true" src="' + $.img() + '/logo.png" style="height: 25px;"></img>' +
    '                </a>' +
    '                <div class="navigation-primary__menu open">' +
    '                    <ul class="navigation-menu">' +
    '                        <li class="navigation-menu__primary">' +
    '                            <div class="title">' +
    '                                <a id="board_btn">' +
    '                                    <span class="icon mobile-icon icon-shortcut-home" ></span>' +
    '                                    커뮤니티' +
    '                                    <span class="open-btn">' +
    '                                        <span class="icon mobile-icon icon-pointer-angle-down-dark-md"></span>' +
    '                                    </span>' +
    '                                </a>' +
    '                            </div>' +
    '                        </li>' +
    '                        <li class="navigation-menu__primary">' +
    '                            <div class="title">' +
    '                                <a id="store_btn">' +
    '                                    <span class="icon mobile-icon icon-shortcut-store"></span>' +
    '                                    스토어' +
    '                                    <span class="open-btn">' +
    '                                        <span class="icon mobile-icon icon-pointer-angle-down-dark-md"></span>' +
    '                                    </span>' +
    '                                </a>' +
    '                            </div>' +
    '                        </li>' +
    '                        <li class="navigation-menu__primary">' +
    '                            <div class="title">' +
    '                                <a id="statics_btn">' +
    '                                    <span class="icon mobile-icon icon-shortcut-expert"></span>' +
    '                                    통계' +
    '                                    <span class="open-btn">' +
    '                                        <span class="icon mobile-icon icon-pointer-angle-down-dark-md"></span>' +
    '                                    </span>' +
    '                                </a> </div>' +
    '                        </li>' +
    '                    </ul>' +
    '                </div>' +
    '                <div class="navigation-primary__search">' +
    '                    <form class="navigation-search">' +
    '                        <div class="ui-widget navigation-search__box" data-type="" id="search_btn">' +
    '                            <span class="navigation-search__box__icon_blur">' +
    '                                <span class="icon icon-etc-find-md-gray-dark"></span>' +
    '                            </span>' +
    '                            <input class="ui-autocomplete-input navigation-search__box__input" id="search_query" type="text" placeholder="검색" size="1" name="query" autocomplete="off" value="">' +
    '                            <span class="navigation-search__box__bg"></span>' +
    '                        </div>' +
    '                        <div style="display: none;"></div>' +
    '                    </form>' +
    '                </div>' +
    '                <div class="navigation-primary__actions">' +
    '                    <button class="navigation-primary__search-btn navigation-primary__button button-sm" id="search_menu_btn" title="검색">' +
    '                        <span class="icon icon-etc-find-md-gray-dark"></span>' +
    '                        <span class="icon active icon-etc-find-md-white"></span>' +
    '                    </button>' +
    '                    <a class="navigation-primary__write-btn navigation-primary__button button-md" id="write_btn">글쓰기</a>' +
    '                    <a class="navigation-primary__cart-btn navigation-primary__button button-md" id="h_cart_btn" title="장바구니">' +
    '                        <span class="icon icon-etc-cart-gray"></span>' +
    '                        <span class="icon active icon-etc-cart-white"></span>' +
    '                    </a>' +
    '                    <a class="navigation-primary__cart-btn navigation-primary__button button-sm-only" id="h_cart_btn" title="장바구니">' +
    '                        <span class="icon icon-etc-cart-gray"></span>' +
    '                        <span class="icon active icon-etc-cart-white"></span>' +
    '                    </a>' +
    '                </div>' +
    '                <div class="navigation-primary__user unlogged">' +
    '                    <div class="navigation-primary__user__unlogged">' +
    '                        <a class="navigation-primary__user__unlogged__login" id="login_btn">로그인</a>' +
    '                        <a class="navigation-primary__user__unlogged__register" id="join_btn">회원가입</a>' +
    '                    </div>' +
    '                </div>' +
    '            </div>  ' +
    '        </div>' +
    '    </nav>' +
    '    <nav class="navigation-drawer-wrap" id="nav-drawer-wrap">' +
    '        <button class="navigation-drawer__close" aria-label="패널 닫기"></button>' +
    '        <div class="navigation-drawer">' +
    '            <div class="navigation-drawer__header">' +
    '                <a class="navigation-drawer__header__logo" id="logo">' +
    '                    <img class="icon icon-etc-brand-bi-sm" src="' + $.img() + '/logo.png" aria-label="니방내방"></img>' +
    '                </a>' +
    '            </div>' +
    '            <div class="navigation-drawer__user unlogged">' +
    '                <div class="navigation-drawer__user__unlogged">' +
    '                    <a class="navigation-drawer__user__unlogged__login" id="login_btn2">로그인</a>' +
    '                    <a class="navigation-drawer__user__unlogged__register" id="join_btn2">회원가입</a>' +
    '                </div>' +
    '            </div>' +
    '            <div class="navigation-drawer__menu">' +
    '                <ul class="navigation-menu">' +
    '                    <li class="navigation-menu__primary">' +
    '                        <div class="title">' +
    '                            <a id="board_btn2">커뮤니티</a>' +
    '                        </div>' +
    '                    </li>' +
    '                    <li class="navigation-menu__primary">' +
    '                        <div class="title">' +
    '                            <a id="store_btn2">스토어</a>' +
    '                        </div>' +
    '                    </li>' +
    '                    <li class="navigation-menu__primary">' +
    '                        <div class="title">' +
    '                            <a id="statics_btn2">통계</a>' +
    '                        </div>' +
    '                    </li>' +
    '                </ul>' +
    '            </div>' +
    '            <div class="navigation-drawer__user_menu">' +
    '                <ul class="navigation-user-menu">' +
    '                    <li><a class="mobile-only" id="write_btn2">사진 올리기</a></li>' +
    '                </ul>' +
    '            </div>' +
    '        </div>' +
    '    </nav>' +
    /* 수정
    '	<nav class="navigation-search-drawer-wrap" id="search-drawer-wrap">' +
    '		<button class="navigation-search-drawer__close" aria-label="패널 닫기"></button>' +
    '	    <div class="navigation-search-drawer">' +
    '                    <form class="navigation-search">' +
    '                        <div class="ui-widget navigation-search__box" data-type="" id="search_btn2">' +
    '                            <span class="navigation-search__box__icon_blur">' +
    '                                <span class="icon icon-etc-find-md-gray-dark"></span>' +
    '                            </span>' +
    '                            <input class="ui-autocomplete-input navigation-search__box__input" id="search_query" type="text" placeholder="검색" size="1" name="query" autocomplete="off" value="">' +
    '                            <span class="navigation-search__box__bg"></span>' +
    '                        </div>' +
    '                        <div style="display: none;"></div>' +
    '                    </form>' +
    '		</div>' +
    '	</nav>' +
    */
    '</div>';

var anav = () => '<div id="navigation" class="navigation--top-banner-hidden">' +
    '    <nav class="navigation-primary-wrap sticky-top" style="height: 81px;">' +
    '        <div class="navigation-primary__container sticky-content open float" style="position: fixed; bottom: auto; top: 0px;">' +
    '            <div class="navigation-primary">' +
    '                <button class="navigation-primary__menu-btn" id="menu-btn" aria-label="메뉴 열기">' +
    '                    <span class="icon icon-etc-button-hamburger"></span>' +
    '                </button>' +
    '                <a class="navigation-primary__logo" >' +
    '                    <img class="icon icon-etc-brand-bi-md logo-md" id="logo" aria-label="니방내방" src="' + $.img() + '/logo.png" style="height: 45px;width: fit-content;"></img>' +
    '                    <img class="icon icon-etc-brand-bi-xs logo-sm" id="logo2" aria-hidden="true" src="' + $.img() + '/logo.png" style="height: 25px;"></img>' +
    '                </a>' +
    '                <div class="navigation-primary__menu open">' +
    '                    <ul class="navigation-menu">' +
    '                        <li class="navigation-menu__primary">' +
    '                            <div class="title">' +
    '                                <a id="board_btn">' +
    '                                    <span class="icon mobile-icon icon-shortcut-home" ></span>' +
    '                                    커뮤니티' +
    '                                    <span class="open-btn">' +
    '                                        <span class="icon mobile-icon icon-pointer-angle-down-dark-md"></span>' +
    '                                    </span>' +
    '                                </a>' +
    '                            </div>' +
    '                        </li>' +
    '                        <li class="navigation-menu__primary">' +
    '                            <div class="title">' +
    '                                <a id="store_btn">' +
    '                                    <span class="icon mobile-icon icon-shortcut-store"></span>' +
    '                                    스토어' +
    '                                    <span class="open-btn">' +
    '                                        <span class="icon mobile-icon icon-pointer-angle-down-dark-md"></span>' +
    '                                    </span>' +
    '                                </a>' +
    '                            </div>' +
    '                        </li>' +
    '                        <li class="navigation-menu__primary">' +
    '                            <div class="title">' +
    '                                <a id="statics_btn">' +
    '                                    <span class="icon mobile-icon icon-shortcut-expert"></span>' +
    '                                    통계' +
    '                                    <span class="open-btn">' +
    '                                        <span class="icon mobile-icon icon-pointer-angle-down-dark-md"></span>' +
    '                                    </span>' +
    '                                </a> </div>' +
    '                        </li>' +
    '                    </ul>' +
    '                </div>' +
    '                <div class="navigation-primary__search">' +
    '                    <form class="navigation-search">' +
    '                        <div class="ui-widget navigation-search__box" data-type="" id="search_btn">' +
    '                            <span class="navigation-search__box__icon_blur">' +
    '                                <span class="icon icon-etc-find-md-gray-dark"></span>' +
    '                            </span>' +
    '                            <input class="ui-autocomplete-input navigation-search__box__input" id="search_query" type="text" placeholder="검색" size="1" name="query" autocomplete="off" value="">' +
    '                            <span class="navigation-search__box__bg"></span>' +
    '                        </div>' +
    '                        <div style="display: none;"></div>' +
    '                    </form>' +
    '                </div>' +
    '                <div class="navigation-primary__actions">' +
    '                    <button class="navigation-primary__search-btn navigation-primary__button button-sm" id="search_menu_btn" title="검색">' +
    '                        <span class="icon icon-etc-find-md-gray-dark"></span>' +
    '                        <span class="icon active icon-etc-find-md-white"></span>' +
    '                    </button>' +
    '                    <a class="navigation-primary__write-btn navigation-primary__button button-md" id="write_btn">글쓰기</a>' +
    '                    <a class="navigation-primary__cart-btn navigation-primary__button button-md" id="h_cart_btn" title="장바구니">' +
    '                        <span class="icon icon-etc-cart-gray"></span>' +
    '                        <span class="icon active icon-etc-cart-white"></span>' +
    '                    </a>' +
    '                    <a class="navigation-primary__cart-btn navigation-primary__button button-sm-only" id="h_cart_btn" title="장바구니">' +
    '                        <span class="icon icon-etc-cart-gray"></span>' +
    '                        <span class="icon active icon-etc-cart-white"></span>' +
    '                    </a>' +
    '                <div class="navigation-primary__user logged" id="navigation_user">' +
    '                    <input type="checkbox" id="navigation-primary__user__open" class="navigation-primary__user__open" data-role="none">' +
    '                    <label for="navigation-primary__user__open" class="navigation-primary__user__header">' +
    '                        <img src="' + $.img() + ($.cookie('profile') === 'null' ? '/danah/user_profile.jpeg' : '/hyeri/profile/' + $.cookie('profile')) + '" aria-label="' + $.cookie('nickname') + '">' +
    '                        <span class="icon icon-etc-inv-triangle-gray"></span>' +
    '                        <span class="icon active icon-etc-inv-triangle-orange"></span>' +
    '                    </label>' +
    '                    <div class="navigation-primary__user__list ">' +
    '                        <ul class="navigation-user-menu">' +
    '                            <li id="logout_btn"><a rel="nofollow" data-method="delete">로그아웃</a></li>' +
    '                        </ul>' +
    '                    </div>' +
    '                </div>' +
    '            </div>  ' +
    '        </div>' +
    '    </nav>' +
    '    <nav class="navigation-drawer-wrap" id="nav-drawer-wrap">' +
    '        <button class="navigation-drawer__close" aria-label="패널 닫기"></button>' +
    '        <div class="navigation-drawer">' +
    '            <div class="navigation-drawer__header">' +
    '                <a class="navigation-drawer__header__logo" id="logo">' +
    '                    <img class="icon icon-etc-brand-bi-sm" src="' + $.img() + '/logo.png" aria-label="니방내방"></img>' +
    '                </a>' +
    '            </div>' +
    '            <div class="navigation-drawer__user logged">' +
    '                <a class="navigation-drawer__user__header">' +
    '                    <img src="' + $.img() + ($.cookie('profile') === 'null' ? '/danah/user_profile.jpeg' : '/hyeri/profile/' + $.cookie('profile')) + '" aria-label="' + $.cookie('nickname') + '">' +
    '                    <span class="navigation-drawer__user__header__text">' + $.cookie('nickname') + '</span>' +
    '                </a>' +
    '            </div>' +
    '            <div class="navigation-drawer__menu">' +
    '                <ul class="navigation-menu">' +
    '                    <li class="navigation-menu__primary">' +
    '                        <div class="title">' +
    '                            <a id="board_btn2">커뮤니티</a>' +
    '                        </div>' +
    '                    </li>' +
    '                    <li class="navigation-menu__primary">' +
    '                        <div class="title">' +
    '                            <a id="store_btn2">스토어</a>' +
    '                        </div>' +
    '                    </li>' +
    '                    <li class="navigation-menu__primary">' +
    '                        <div class="title">' +
    '                            <a id="statics_btn2">통계</a>' +
    '                        </div>' +
    '                    </li>' +
    '                </ul>' +
    '            </div>' +
    '            <div class="navigation-drawer__user_menu">' +
    '                <ul class="navigation-user-menu">' +
    '                    <li><a class="mobile-only" id="write_btn2">사진 올리기</a></li>' +
    '                    <div class="navigation-user-menu__bottom">' +
    '                        <li><a rel="nofollow" data-method="delete" id="logout_btn2">로그아웃</a></li>' +
    '                    </div>' +
    '                </ul>' +
    '			</div>' +
    '		</div>' +
    '	</nav>' +
    '</div>';

var content = () => '<div id="content"><div/>';

var footer = () => '<div id="footer" class="footer-distributed">' +
    '           <div class="footer-left">' +
    '               <h3><span>ni</span>bang<span>ne</span>bang</h3></br>' +
    '               <p class="footer-company-name">비트캠프 UI/UX 기반의 자바개발자 양성과정</br> &copy; 2018</p>' +
    '           </div>' +
    '           <div class="footer-center">' +
    '               <div>' +
    '                   <i class="fa fa-map-marker"></i>' +
    '                   <p><span>23, Baekbeom-ro, Mapo-gu</span>Seoul, Republic of Korea</p>' +
    '               </div>' +
    '               <div>' +
    '                   <i class="fa fa-phone"></i>' +
    '                   <p>+82 02 707 1480</p>' +
    '               </div>' +
    /*
    '               <div>' +
    '                   <i class="fa fa-envelope"></i>' +
    '                   <p><a href="mailto:support@company.com">support@ouroom.com</a></p>' +
    '               </div>' +
    */
    '           </div>' +
    '           <div class="footer-right">' +
    '               <p class="class="footer-company-about">' +
    '                   <span>About Us</span>' +
    '               </p>' +
    '               <p class="footer-links">' +
    '                   <a id="kimdanah" data-toggle="tooltip">Danah</a> · ' +
    '                   <a id="ryujaekyung" data-toggle="tooltip">Jaekyung</a> · ' +
    '                   <a id="kimjieun" data-toggle="tooltip">Jieun</a> · ' +
    '                   <a id="kimjun" data-toggle="tooltip">Jun</a> · ' +
    '                   <a id="honghyeri" data-toggle="tooltip">Hyeri</a>' +
    '               </p>' +
    
    /*
    '               <div class="footer-icons">' +
    '                   <a href="#"><i class="fab fa-facebook-f"></i></a>' +
    '                   <a href="#"><i class="fab fa-twitter"></i></a>' +
    '                   <a href="#"><i class="fab fa-linkedin-in"></i></a>' +
    '                   <a href="#"><i class="fab fa-github"></i></a>' +
    '               </div>' +
    */
    '           </div>' +
    '       </div>';