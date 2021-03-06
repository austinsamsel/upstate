// source/js/all.js
//= require jquery
//= require fullpage.js/jquery.fullPage
//= require waypoints/lib/jquery.waypoints
//= require typed.js/js/typed
//= require blazy.min.js
//= require garlicjs/dist/garlic.min.js
//= require parsleyjs/dist/parsley

    $(document).ready(function() {

        var navMenu = function(){
        var menuToggle = $('#js-mobile-menu').unbind();
          $('#js-navigation-menu').removeClass("show");

          menuToggle.on('click', function(e) {
            e.preventDefault();
            $('#js-navigation-menu').slideToggle(function(){
              if($('#js-navigation-menu').is(':hidden')) {
                $('#js-navigation-menu').removeAttr('style');
              }
            });
          });
        };

        // $slideFloater = $('#slide-floater');

        $navBar = $('.upstate-nav-sm');
        var slideDown = function() {
          $navBar.animate({top: '0em', opacity: 1.0}, 600);
        };
        var slideUp = function() {
          $navBar.animate({top: '-4em', opacity: 0.0}, 600);
        };

        $('#fullpage').fullpage({
          anchors: ['Home', 'Results', 'Features', 'Themes', 'Pricing', 'About', 'Contact', 'Apply'],
          responsive: 5000,
          menu: '#js-navigation-menu',
          controlArrows: true,
          slidesNavigation: true,
          showActiveTooltips: true,
          fitToSection: false,
          animateAnchor: true,
          scrollBar: true,
          scrollingSpeed: 1900,
          //menu:'#js-navigation-menu',
          css3: true,
          slidesNavPosition: 'bottom',
          afterRender: function(){


              //visible animated slideInUp

              setTimeout(function(){
                 $('.upstate-hero').addClass('visible animated slideInUp');
              }, 1500);

              // setTimeout(function() {
              //   $slideFloater.animate({top: '-500px'}, 2000);
              //   $slideFloater.animate({top: '25px'}, 2000);
              //   $slideFloater.animate({top: '-75px'}, 700);
              // }, 4500);

              navMenu();

              $('img').addClass('b-lazy');
              ;(function() {
                // Initialize
                var bLazy = new Blazy({ 
                      offset: 300,
                      breakpoints: [{
                      width: 1000, // max-width
                      src: 'data-src-small'
                      }]
                });
              })();
              // contact upstate
                  var $contactForm = $('#contactform');
                  $contactForm.submit(function(e) {
                    e.preventDefault();
                    $.ajax({
                      url: '//formspree.io/hi@upstatebiz.com',
                      method: 'POST',
                      data: $(this).serialize(),
                      dataType: 'json',
                      beforeSend: function() {
                        $contactForm.find('.alert--success').hide();
                        $contactForm.find('.alert--error').hide();
                        $contactForm.append('<div class="alert alert--loading"><div class="ui active inline loader small-loader"></div> Sending message…</div>');
                      },
                      success: function(data) {
                        $contactForm.find('.alert--loading').hide();
                        $contactForm.append('<div class="alert alert--success"><i class="fa fa-check green"></i> Message sent!</div>');
                        $contactForm.each(function(){
                            this.reset();
                        });
                      },
                      error: function(err) {
                        $contactForm.find('.alert--loading').hide();
                        $contactForm.append(' <div class="alert alert--error"><i class="fa fa-remove red"></i> Oops, there was an error.</div>');
                      }
                    });
                  });
                 // apply upstate
                  var $upstateApply = $('#upstateApply');
                  $upstateApply.submit(function(e) {
                    e.preventDefault();
                    $.ajax({
                      url: '//formspree.io/hi@upstatebiz.com',
                      method: 'POST',
                      data: $(this).serialize(),
                      dataType: 'json',
                      beforeSend: function() {
                        $upstateApply.find('.alert--success').hide();
                        $upstateApply.find('.alert--error').hide();
                        $upstateApply.append('<div class="alert alert--loading"><div class="ui active inline loader small-loader"></div> Sending…</div>');
                      },
                      success: function(data) {
                        $upstateApply.find('.alert--loading').hide();
                        $upstateApply.append("<div class='alert alert--success'><i class='fa fa-check green'></i> Success! We'll be in touch.</div>");
                        $upstateApply.each(function(){
                            this.reset();
                        });
                      },
                      error: function(err) {
                        $upstateApply.find('.alert--loading').hide();
                        $upstateApply.append(' <div class="alert alert--error"><i class="fa fa-remove red"></i> Oops, there was an error.</div>');
                      }
                    });
                  });
          },
          afterLoad: function(anchorLink, index){
              var loadedSection = $(this);
              if(index != 999){
              }
          },
          onLeave: function(index, nextIndex, direction){
            var leavingSection = $(this);
            if(index == 4){
              slideDown();
            }
            if (index == 1) {
              var bLazy = new Blazy();
              bLazy.revalidate();
            }
            if (index == 3) {
              var bLazy = new Blazy();
              bLazy.revalidate();
            }
          },
          afterSlideLoad: function( anchorLink, index, slideAnchor, slideIndex){
              var loadedSlide = $(this);

              //first slide of the second section

              if(index == 4 && slideIndex == 0){
                  slideDown();
                  $('.fp-controlArrow.fp-prev').css('display', 'none');
                  var bLazy = new Blazy();
                      bLazy.revalidate(); // eg bLazy.revalidate();
              }
              if(index == 4 && slideIndex != 0){
                  slideUp();
                  $('.fp-controlArrow.fp-prev').css('display', 'block');
                  var bLazy = new Blazy();
                      bLazy.revalidate(); // eg bLazy.revalidate();
              }
          }
        });
    });