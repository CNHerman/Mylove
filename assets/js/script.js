console.log('https://xinfaye.top');
console.log('https://xinfaye.top'); (function(a) {
    a(".select").niceSelect();
    function z() {
        var D = a(".navigation-holder");
        var E = a(".mobail-menu .open-btn");
        var F = a(".mobail-menu .navbar-toggler");
        E.on("click",
        function(G) {
            G.stopImmediatePropagation();
            D.toggleClass("slideInn");
            F.toggleClass("x-close");
            return false
        })
    }
    z();
    function y() {
        var E = window.innerWidth;
        var D = a("#navbar > ul");
        if (E <= 991) {
            D.addClass("small-nav")
        } else {
            D.removeClass("small-nav")
        }
    }
    y();
    function r() {
        var I = window.innerWidth;
        var D = a(".navigation-holder");
        var G = a(".navigation-holder > .small-nav");
        var H = G.find(".sub-menu");
        var E = G.find(".mega-menu");
        var F = G.find(".menu-item-has-children > a");
        if (I <= 991) {
            H.hide();
            E.hide();
            F.on("click",
            function(K) {
                var J = a(this);
                J.siblings().slideToggle();
                K.preventDefault();
                K.stopImmediatePropagation();
                J.toggleClass("rotate")
            })
        } else {
            if (I > 991) {
                D.find(".sub-menu").show();
                D.find(".mega-menu").show()
            }
        }
    }
    r();
    function b(D) {
        var J = a(window).scrollTop(),
        K = a(window).height(),
        F = a(document).height(),
        E = J + 2,
        I = a("section"),
        G = D,
        H = G.outerHeight();
        I.each(function() {
            var M = a(this).offset().top - H,
            L = M + a(this).outerHeight();
            if (E >= M && E <= L) {
                G.find("> ul > li > a").parent().removeClass("current-menu-item");
                G.find("a[href='#" + a(this).attr("id") + "']").parent().addClass("current-menu-item")
            } else {
                if (E === 2) {
                    G.find("> ul > li > a").parent().removeClass("current-menu-item")
                }
            }
        })
    }
    function s(D, E) {
        var F = D;
        var G = E;
        F.on("click",
        function() {
            if (location.pathname.replace(/^\//, "") === this.pathname.replace(/^\//, "") && location.hostname === this.hostname) {
                var H = a(this.hash);
                H = H.length ? H: a("[name=" + this.hash.slice(1) + "]");
                if (H.length) {
                    a("html, body").animate({
                        scrollTop: H.offset().top - G
                    },
                    1000, "easeInOutExpo");
                    return false
                }
            }
            return false
        })
    }
    a("body").on("click",
    function() {
        a(".navigation-holder").removeClass("slideInn")
    });
    a(".menu-close").on("click",
    function() {
        a(".navigation-holder").removeClass("slideInn")
    });
    a(".menu-close").on("click",
    function() {
        a(".open-btn").removeClass("x-close")
    });
    a("#toggle1").on("click",
    function() {
        a(".create-account").slideToggle();
        a(".caupon-wrap.s1").toggleClass("active-border")
    });
    a("#toggle2").on("click",
    function() {
        a("#open2").slideToggle();
        a(".caupon-wrap.s2").toggleClass("coupon-2")
    });
    a("#toggle3").on("click",
    function() {
        a("#open3").slideToggle();
        a(".caupon-wrap.s2").toggleClass("coupon-2")
    });
    a("#toggle4").on("click",
    function() {
        a("#open4").slideToggle();
        a(".caupon-wrap.s3").toggleClass("coupon-2")
    });
    a(".payment-select .addToggle").on("click",
    function() {
        a(".payment-name").addClass("active");
        a(".payment-option").removeClass("active")
    });
    a(".payment-select .removeToggle").on("click",
    function() {
        a(".payment-option").addClass("active");
        a(".payment-name").removeClass("active")
    });
    var B = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    var A = B.map(function(D) {
        return new bootstrap.Tooltip(D)
    });
    function c() {
        if (a(".parallax").length) {
            a(".parallax").each(function() {
                var E = a(this).position().top;
                var H = E - a(window).scrollTop();
                var D = -(H / 5);
                var G = D + "px";
                var F = a(this).data("bg-image");
                a(this).css({
                    backgroundImage: "url(" + F + ")",
                    backgroundPosition: "50%" + G,
                    backgroundSize: "cover"
                })
            })
        }
    }
    var l = [];
    jQuery(".swiper-slide").each(function(D) {
        l.push(jQuery(this).find(".slide-inner").attr("data-text"))
    });
    var i = 0.5;
    var w = {
        loop: true,
        speed: 1000,
        parallax: true,
        autoplay: {
            delay: 6500,
            disableOnInteraction: false,
        },
        watchSlidesProgress: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        on: {
            progress: function() {
                var H = this;
                for (var D = 0; D < H.slides.length; D++) {
                    var G = H.slides[D].progress;
                    var E = H.width * i;
                    var F = G * E;
                    H.slides[D].querySelector(".slide-inner").style.transform = "translate3d(" + F + "px, 0, 0)"
                }
            },
            touchStart: function() {
                var E = this;
                for (var D = 0; D < E.slides.length; D++) {
                    E.slides[D].style.transition = ""
                }
            },
            setTransition: function(E) {
                var F = this;
                for (var D = 0; D < F.slides.length; D++) {
                    F.slides[D].style.transition = E + "ms";
                    F.slides[D].querySelector(".slide-inner").style.transition = E + "ms"
                }
            }
        }
    };
    var v = new Swiper(".swiper-container", w);
    var q = a(".slide-bg-image");
    q.each(function(D) {
        if (a(this).attr("data-background")) {
            a(this).css("background-image", "url(" + a(this).data("background") + ")")
        }
    });
    function m() {
        if (a(".preloader").length) {
            a(".preloader").delay(100).fadeOut(500,
            function() {
                C.init()
            })
        }
    }
    var C = new WOW({
        boxClass: "wow",
        animateClass: "animated",
        offset: 0,
        mobile: true,
        live: true
    });
    if (a(".fancybox").length) {
        a(".fancybox").fancybox({
            openEffect: "elastic",
            closeEffect: "elastic",
            wrapCSS: "project-fancybox-title-style"
        })
    }
    a(".popup-youtube, .popup-vimeo, .popup-gmaps").magnificPopup({
        type: "iframe",
        mainClass: "mfp-fade",
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });
    if (a(".video-btn").length) {
        a(".video-btn").on("click",
        function() {
            a.fancybox({
                href: this.href,
                type: a(this).data("type"),
                title: this.title,
                helpers: {
                    title: {
                        type: "inside"
                    },
                    media: {}
                },
                beforeShow: function() {
                    a(".fancybox-wrap").addClass("gallery-fancybox")
                }
            });
            return false
        })
    }
    if (a(".popup-gallery").length) {
        a(".popup-gallery").magnificPopup({
            delegate: "a",
            type: "image",
            gallery: {
                enabled: true
            },
            zoom: {
                enabled: true,
                duration: 300,
                easing: "ease-in-out",
                opener: function(D) {
                    return D.is("img") ? D: D.find("img")
                }
            }
        })
    }
    function t() {
        if (a(".sortable-gallery .gallery-filters").length) {
            var D = a(".gallery-container");
            D.isotope({
                filter: "*",
                animationOptions: {
                    duration: 750,
                    easing: "linear",
                    queue: false,
                }
            });
            a(".gallery-filters li a").on("click",
            function() {
                a(".gallery-filters li .current").removeClass("current");
                a(this).addClass("current");
                var E = a(this).attr("data-filter");
                D.isotope({
                    filter: E,
                    animationOptions: {
                        duration: 750,
                        easing: "linear",
                        queue: false,
                    }
                });
                return false
            })
        }
    }
    t();
    function k() {
        if (a(".masonry-gallery").length) {
            var D = a(".masonry-gallery").masonry({
                itemSelector: ".grid-item",
                columnWidth: ".grid-item",
                percentPosition: true
            });
            D.imagesLoaded().progress(function() {
                D.masonry("layout")
            })
        }
    }
    if (a(".odometer").length) {
        a(".odometer").appear();
        a(document.body).on("appear", ".odometer",
        function(D) {
            var E = a(".odometer");
            E.each(function() {
                var F = a(this).attr("data-count");
                a(this).html(F)
            })
        })
    }
    function h(D, E) {
        D.addClass("original").clone().insertAfter(D).addClass(E).removeClass("original")
    }
    if (a(".wpo-site-header .navigation").length) {
        h(a(".wpo-site-header .navigation"), "sticky-header")
    }
    var j = "";
    function u(D, E, F) {
        var H = a(window).scrollTop();
        var G = a(".wpo-site-header .navigation");
        if (a(window).scrollTop() > 500) {
            if (H > j) {
                D.addClass(E)
            } else {
                D.addClass(E)
            }
        } else {
            D.removeClass(E)
        }
        j = H
    }
    if (a(".header-search-form-wrapper").length) {
        var o = a(".search-toggle-btn");
        var p = a(".search-toggle-btn i");
        var n = a(".header-search-form");
        var d = a("body");
        o.on("click",
        function(D) {
            n.toggleClass("header-search-content-toggle");
            p.toggleClass("fi flaticon-search fi ti-close");
            D.stopPropagation()
        });
        d.on("click",
        function() {
            n.removeClass("header-search-content-toggle")
        }).find(n).on("click",
        function(D) {
            D.stopPropagation()
        })
    }
    if (a(".mini-cart").length) {
        var g = a(".cart-toggle-btn");
        var f = a(".mini-cart-content");
        var e = a(".mini-cart-close");
        var d = a("body");
        g.on("click",
        function(D) {
            f.toggleClass("mini-cart-content-toggle");
            D.stopPropagation()
        });
        e.on("click",
        function(D) {
            f.removeClass("mini-cart-content-toggle");
            D.stopPropagation()
        });
        d.on("click",
        function() {
            f.removeClass("mini-cart-content-toggle")
        }).find(f).on("click",
        function(D) {
            D.stopPropagation()
        })
    }
    if (a(".service-thumbs").length) {
        a(".service-thumb").on("click",
        function(D) {
            D.preventDefault();
            var E = a(a(this).attr("data-case"));
            a(".service-thumb").removeClass("active-thumb");
            a(this).addClass("active-thumb");
            a(".service-content .service-data").hide(0);
            a(".service-data").fadeOut(300).removeClass("active-service-data");
            a(E).fadeIn(300).addClass("active-service-data")
        })
    }
    if (a(".testimonial-slider").length) {
        a(".testimonial-slider").owlCarousel({
            autoplay: true,
            smartSpeed: 300,
            margin: 100,
            loop: true,
            autoplayHoverPause: true,
            dots: true,
            nav: false,
            items: 2,
            responsive: {
                0 : {
                    items: 1,
                },
                767 : {
                    items: 2
                },
                1200 : {
                    items: 2
                },
                1300 : {
                    items: 2
                },
                1400 : {
                    items: 2,
                },
                1500 : {
                    items: 2
                },
            }
        })
    }
    if (a(".partners-slider").length) {
        a(".partners-slider").owlCarousel({
            autoplay: true,
            smartSpeed: 300,
            margin: 0,
            loop: true,
            autoplayHoverPause: true,
            dots: false,
            arrows: false,
            nav: false,
            responsive: {
                0 : {
                    items: 1
                },
                550 : {
                    items: 2
                },
                992 : {
                    items: 4
                },
                1200 : {
                    items: 5
                }
            }
        })
    }
    if (a(".wpo-service-active").length) {
        a(".wpo-service-active").owlCarousel({
            autoplay: false,
            smartSpeed: 300,
            margin: 30,
            loop: true,
            autoplayHoverPause: true,
            dots: false,
            arrows: false,
            nav: true,
            navText: ['<i class="fi flaticon-left-arrow"></i>', '<i class="fi flaticon-right-arrow-1"></i>'],
            responsive: {
                0 : {
                    items: 1,
                    dots: true,
                    arrows: false,
                    nav: false,
                },
                575 : {
                    items: 1,
                },
                767 : {
                    items: 2,
                },
                992 : {
                    items: 2
                },
                1200 : {
                    items: 3
                }
            }
        })
    }
    if (a(".static-hero-slide-img").length) {
        a(".static-hero-slide-img").owlCarousel({
            autoplay: true,
            smartSpeed: 300,
            margin: 10,
            loop: true,
            autoplayHoverPause: true,
            dots: false,
            arrows: false,
            nav: true,
            navText: ['<i class="fi flaticon-left-arrow"></i>', '<i class="fi flaticon-right-arrow-1"></i>'],
            responsive: {
                0 : {
                    items: 1,
                    dots: true,
                    arrows: false,
                    nav: false,
                },
                575 : {
                    items: 1,
                },
                767 : {
                    items: 1,
                },
                992 : {
                    items: 2
                },
                1200 : {
                    items: 3
                }
            }
        })
    }
    if (a(".portfolio-slider").length) {
        a(".portfolio-slider").owlCarousel({
            autoplay: true,
            smartSpeed: 300,
            margin: 15,
            loop: true,
            autoplayHoverPause: true,
            dots: false,
            arrows: false,
            nav: true,
            navText: ['<i class="fi flaticon-left-arrow"></i>', '<i class="fi flaticon-right-arrow-1"></i>'],
            responsive: {
                0 : {
                    items: 1,
                    dots: true,
                    arrows: false,
                    nav: false,
                },
                575 : {
                    items: 1,
                },
                767 : {
                    items: 2,
                },
                992 : {
                    items: 3
                },
                1200 : {
                    items: 3
                }
            }
        })
    }
    if (a(".post-slider".length)) {
        a(".post-slider").owlCarousel({
            mouseDrag: false,
            smartSpeed: 500,
            margin: 30,
            loop: true,
            nav: true,
            navText: ['<i class="fi ti-arrow-left"></i>', '<i class="fi ti-arrow-right"></i>'],
            dots: false,
            items: 1
        })
    }
  //   if (a("#clock").length) {
		
  //       a("#clock").countdown("2023-09-24 09:09",
		
  //       function(E) {
  //           var D = a(this).html(E.strftime('<div class="box"><div><div class="time">%D</div> <span>Days</span> </div></div><div class="box"><div><div class="time">%H</div> <span>Hours</span> </div></div><div class="box"><div><div class="time">%M</div> <span>Mins</span> </div></div><div class="box"><div><div class="time">%S</div> <span>Secs</span> </div></div>'))
  //       })
  //   }
  //   if (a("#clock2").length) {
  //       a("#clock2").countdown("2022-07-25 12:17",
  //       function(E) {
  //           var D = a(this).html(E.strftime('<div class="box"><div><div class="time">%D</div> <span>Days</span> </div></div><div class="box"><div><div class="time">%H</div> <span>Hours</span> </div></div><div class="box"><div><div class="time">%M</div> <span>Mins</span> </div></div><div class="box"><div><div class="time">%S</div> <span>Secs</span> </div></div>'))
  //       })
  //   }
    if (a("input[name='product-count']").length) {
        a("input[name='product-count']").TouchSpin({
            verticalbuttons: true
        })
    }
    if (a("#slider-range").length) {
        a("#slider-range").slider({
            range: true,
            min: 12,
            max: 200,
            values: [0, 100],
            slide: function(D, E) {
                a("#amount").val("$" + E.values[0] + " - $" + E.values[1])
            }
        });
        a("#amount").val("$" + a("#slider-range").slider("values", 0) + " - $" + a("#slider-range").slider("values", 1))
    }
    a(".cart-plus-minus").append('<div class="dec qtybutton">-</div><div class="inc qtybutton">+</div>');
    a(".qtybutton").on("click",
    function() {
        var D = a(this);
        var F = D.parent().find("input").val();
        if (D.text() == "+") {
            var E = parseFloat(F) + 1
        } else {
            if (F > 0) {
                var E = parseFloat(F) - 1
            } else {
                E = 0
            }
        }
        D.parent().find("input").val(E)
    });
    a("body").append("<a href='#' class='back-to-top'><i class='ti-arrow-up'></i></a>");
    function x() {
        var D = 1000;
        if (a(window).scrollTop() > D) {
            a("a.back-to-top").fadeIn("slow")
        } else {
            a("a.back-to-top").fadeOut("slow")
        }
    }
    a(".back-to-top").on("click",
    function() {
        a("html,body").animate({
            scrollTop: 0
        },
        700);
        return false
    });
    // if (a("#contact-form-main").length) {
    //     a("#contact-form-main").validate({
    //         rules: {
    //             name: {
    //                 required: true,
    //                 minlength: 2
    //             },
    //             email: "required",
    //             phone: "required",
    //             what: "required",
    //             service: "required",
    //             guest: "required",
    //             meal: "required",
    //         },
    //         messages: {
    //             name: "Please enter your name",
    //             email: "Please enter your email address",
    //             phone: "Please enter your phone number",
    //             what: "Please enter your Reason",
    //             service: "Please select your contact service",
    //             guest: "Please select your guest Number",
    //             meal: "Please select your Meal Name"
    //         },
    //         submitHandler: function(D) {
    //             a.ajax({
    //                 type: "POST",
    //                 url: "mail-contact.php",
    //                 data: a(D).serialize(),
    //                 success: function() {
    //                     a("#loader").hide();
    //                     a("#success").slideDown("slow");
    //                     setTimeout(function() {
    //                         a("#success").slideUp("slow")
    //                     },
    //                     3000);
    //                     D.reset()
    //                 },
    //                 error: function() {
    //                     a("#loader").hide();
    //                     a("#error").slideDown("slow");
    //                     setTimeout(function() {
    //                         a("#error").slideUp("slow")
    //                     },
    //                     3000)
    //                 }
    //             });
    //             return false
    //         }
    //     })
    // }
    a(window).on("load",
    function() {
        m();
        t();
        z();
        r();
        s(a("#navbar > ul > li > a[href^='#']"), a(".wpo-site-header .navigation").innerHeight())
    });
    a(window).on("scroll",
    function() {
        if (a(".wpo-site-header").length) {
            u(a(".wpo-site-header .navigation"), "sticky-on")
        }
        x();
        b(a(".navigation-holder"))
    });
    a(window).on("resize",
    function() {
        y();
        clearTimeout(a.data(this, "resizeTimer"));
        a.data(this, "resizeTimer", setTimeout(function() {
            r()
        },
        200))
    })
})(window.jQuery);
