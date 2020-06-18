$( document ).ready(function() {
    // window.onclick = () => {
    //     if()
    // }
    // Карусель на первого экрана
    $(".main-carousel.owl-carousel").owlCarousel({
        loop:false,
        margin:10,
        nav:true,
        navText : ["",""],
        responsive:{
            0:{
                items:1
            },
        }
    });
    // Карусель в картечке
    $(".product-card__carousel.owl-carousel").owlCarousel({
        loop: false,
        margin: 10,
        dots: false,
        nav: true,
        navText : ["",""],
        responsive:{
            0:{
                items:1
            },
        }
    });

    $( function() {
        $( "#slider-range" ).slider({
            range: true,
            min: 0,
            max: 500,
            values: [ 0, 500 ],
            slide: function( event, ui ) {
                $( "#amount-min" ).val(ui.values[ 0 ] );
                $( "#amount-max" ).val(ui.values[ 1 ] );
            }
        });
        $( "#amount-min" ).val($( "#slider-range" ).slider( "values", 0 ));
        $( "#amount-max" ).val($( "#slider-range" ).slider( "values", 1 ));
    });
    // фильтр по категориям
    $('#sort-category').select2({
        minimumResultsForSearch: Infinity
    });
    $('#delvery').select2({
        minimumResultsForSearch: Infinity
    });
    $('#delvery-method').select2({
        minimumResultsForSearch: Infinity
    });
    // фильтр на кол-во
    $('#sort-quantity').select2({
        minimumResultsForSearch: Infinity
    });
    $('#city').select2({
        minimumResultsForSearch: Infinity
    });
    $('[id^=pay]').select2({
        minimumResultsForSearch: Infinity
    });
    // работа с полем SEARCH
    $('.search').click(function(){
        $('.result-list').addClass('active');
    });
    $(document).mouseup(function (e){ 
        let list = $(".result-list"); 
        if (!list.is(e.target)
            && list.has(e.target).length === 0) {
            list.removeClass('active'); 
        }
    });
    // MODAL-start
    function Modals(idBtn, idModals) {
        $(idBtn).click(function(e){
            e.preventDefault();
            let body = $('body');
            if(body.css('overflow-y','')){
                body.css('overflow-y', 'hidden');
            }
            $(idModals).css({
                display: "block"
            });
            
        })
    };
    function Close (closeBtn, closeBlock) {
        $(closeBtn).on('click', function(){
            $(closeBlock).css({
                display: "none",
            });
            let body = $('body');
            if(body.css('overflow-y','hidden')){
                body.css('overflow-y', '');
            }
        })
        
    };

    $('.form__modal-link').on('click', function(){
        let $this = $(this);
        if($this[0].hash){
            $('#'+$this.closest('.modal').attr('id')).css({
                display: "none"
            });
            $($this[0].hash).css({
                display: "block"
            });
            $('body').css('overflow', 'hidden');
        }
    })
    
    Modals ("#Login", "#modalLogin");
    Modals ("#Registration", "#modalRegistration");
    Modals ("#Card", "#CardModal");

    Close (".close", ".modal");
    Close (".close", ".card-modal");

    $(".modal").on('click', function(e){
        if(e.target == this)
        $(this).css({
            display: "none",
        });
    });
    // MODAL-end
    $('.cart-item__down').click(function(){
        let $this = $(this);
        cartSum($this, '-');
    });
    
    $('.cart-item__up').click(function(){
        let $this = $(this);
        cartSum($this, '+');
    });

    function cartSum($this, plusMinus = "+") {
        let $cardItem = $this.closest('.cart-item');
        let $price = parseFloat($cardItem.find('.price').text());
        let $countInput = $cardItem.find('#calc');
        let $count = parseInt($countInput.val());
        let $sum = $cardItem.find('.cart-item__sum-price');
        if (plusMinus == '+'){
            $count += 1;
        }else{
            if ($count>1){
                $count -= 1;
            }
        }
        $countInput.val($count);
        $sum.text($price * $count);
    };
    $('.cart-item .price').each(function(){
        let $this = $(this);
        let $cardItem = $this.closest('.cart-item');
        let $price = parseFloat($cardItem.find('.price').text());
        let $countInput = $cardItem.find('#calc');
        let $count = parseInt($countInput.val());
        let $sum = $cardItem.find('.cart-item__sum-price');
        $sum.text($price * $count);
    });
    
    $('.cart-page__remove').on('click', function(){
        $(this).parent().remove();
    });
    $('.ordering-cart__close').on('click', function(){
        $(this).parent().remove();
    })
    const togglers = [...document.querySelectorAll('[data-component="pass-toggler"]')];
    for (const wrapper of togglers) {
        const check = wrapper.querySelector('[data-role="toggler"]');
        const input = wrapper.querySelector('[data-role="pass-input"]');
        check.addEventListener('change', () => {
            input.type = check.checked ? 'text' : 'password';
        });
    }
    $('.tel').mask('+380 (99) 999-99-99');
    $('.checklist-item__header').on('click', function(){
        let arrow = $('.checklist-head__item-arrow');
        $(this).parent().toggleClass('active');
        $(this).find(arrow).toggleClass('active');
    });



    $(document).ready(function() {

        var sync1 = $("#sync1");
        var sync2 = $("#sync2");
        var syncedSecondary = true;
    
        sync1.owlCarousel({
            items: 1,
            slideSpeed: 2000,
            nav: true,
            autoplay: false, 
            dots: false,
            loop: true,
            responsiveRefreshRate: 200,
            navText: ['<svg width="100%" height="100%" viewBox="0 0 11 20"><path style="fill:none;stroke-width: 1px;stroke: #000;" d="M9.554,1.001l-8.607,8.607l8.607,8.606"/></svg>', '<svg width="100%" height="100%" viewBox="0 0 11 20" version="1.1"><path style="fill:none;stroke-width: 1px;stroke: #000;" d="M1.054,18.214l8.606,-8.606l-8.606,-8.607"/></svg>'],
        }).on('changed.owl.carousel', syncPosition);
    
        sync2
            .on('initialized.owl.carousel', function() {
                sync2.find(".owl-item").eq(0).addClass("current");
            })
            .owlCarousel({
                items: 4,
                dots: false,
                nav: false,
                smartSpeed: 200,
                slideSpeed: 500,
                responsiveRefreshRate: 100,
                responsive : {
                    0 : {
                        items: 2
                    },
                    576 : {
                        items: 3
                    },
                    
                    768 : {
                        items: 4
                    },

                    992 : {
                        items: 3
                    },
                    1200 : {
                        items: 4
                    }
                }
            }).on('changed.owl.carousel', syncPosition2);
    
        function syncPosition(el) {
            var count = el.item.count - 1;
            var current = Math.round(el.item.index - (el.item.count / 2) - .5);
    
            if (current < 0) {
                current = count;
            }
            if (current > count) {
                current = 0;
            }
            sync2
                .find(".owl-item")
                .removeClass("current")
                .eq(current)
                .addClass("current");
            var onscreen = sync2.find('.owl-item.active').length - 1;
            var start = sync2.find('.owl-item.active').first().index();
            var end = sync2.find('.owl-item.active').last().index();
    
            if (current > end) {
                sync2.data('owl.carousel').to(current, 100, true);
            }
            if (current < start) {
                sync2.data('owl.carousel').to(current - onscreen, 100, true);
            }
        }
    
        function syncPosition2(el) {
            if (syncedSecondary) {
                var number = el.item.index;
                sync1.data('owl.carousel').to(number, 100, true);
            }
        }
    
        sync2.on("click", ".owl-item", function(e) {
            e.preventDefault();
            var number = $(this).index();
            sync1.data('owl.carousel').to(number, 300, true);
        });
    });


    // Acc
    $(".menu__items").on('click touchstart',function() {
        var numberIndex = $(this).index();
        if (!$(this).is("active")) {
            $(".menu__items").removeClass("active");
            $(".tab__item").removeClass("active");

            $(this).addClass("active");
            $(".tab").find(".tab__item:eq(" + numberIndex + ")").addClass("active");
        }
    });
    $('.form__item').on('click focus', function(e){
        $(this).blur(function(e){
            $(this).removeClass('is-focus');
            $(this).addClass('active');
        });
    })
    $(".radio__input").click(function(){
        if(($('.radio__input.rec-add').prop('checked')) == true){
            $('.recipient-address').addClass('active')
        }
        if(($('.radio__input.rec-sum').prop('checked')) == true){
            $('.recipient-address').removeClass('active')
        }
    })

    $('.langs__item span').on('click', function(){
        $('.langs__submenu').toggleClass('active');
    });
    var btn = $('#btnTop');

    $(window).scroll(function() {
        if ($(window).scrollTop() > 500) {
            btn.addClass('show');
        } else {
            btn.removeClass('show');
        }
    });
    btn.on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({scrollTop:0}, '100');
    });
    $('.subscription__btn').on('click', function(e){
        e.preventDefault();
        $('.icon__success-icon').css('display', 'block');
    })
    $('.product-category__link').on('click', function(e){
        $('.product-category__link').removeClass('active');
        $(this).toggleClass('active');
    })
    $('.burger').bind('click', function(){
        $(this).toggleClass('active');
        $('body').toggleClass('overflow')
        $('.menu').toggleClass('active');
        
    });
    $('.filter-btn').on('click', function(e){
        $(this).toggleClass('active');
        $('.filter').toggleClass('active');
    });
    $('.cabinet-btn-menu').on('click', function(){
        $(this).toggleClass('active');
        $('.cabinet-submenu').toggleClass('active');
    });
});