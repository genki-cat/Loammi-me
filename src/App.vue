<template>
  <div id="app">
    <router-view name="_home"/>
    <router-view name="_navigation"/>
    <div v-scroll-spy>
        <router-view name="_about"/>
        <router-view name="_experience"/>
        <router-view name="_skill"/>
        <router-view name="_services"/>
        <router-view name="_portfolio"/>
        <router-view name="_footer"/>
    </div>
     <!--scroll to top-->
    <div class="scroll-top"><i class="fa fa-angle-up" aria-hidden="true"></i></div>
  </div>
</template>
<script>
import './assets/css/google.fonts.css'
import './assets/css/font-awesome.min.css'
import './assets/css/default.css'
import $ from 'jquery'
export default {
  name: 'App',
  mounted(){

        //page scroll
        $('a.page-scroll').bind('click', function (event) {
            var $anchor = $(this);
            $('html, body').stop().animate({scrollTop: $($anchor.attr('href')).offset().top+1}, 1000);
            event.preventDefault();
        });

         //toggle scroll menu
        $(window).scroll(function () {
            var scroll = $(window).scrollTop();
            //adjust menu background
            if (window.innerWidth < 768) {
            $('.sticky-navigation').removeClass('sticky-top').addClass('fixed-top');
            } else {
                $('.sticky-navigation').removeClass('fixed-top').addClass('sticky-top');
            }

            // adjust scroll to top
            if (scroll >= 600) {
                $('.scroll-top').addClass('active');
            } else {
                $('.scroll-top').removeClass('active');
            }
            return false;
        });

        // scroll top top
        $('.scroll-top').click(function () {
            $('html, body').stop().animate({
                scrollTop: 0
            }, 1000);
        });

    }
}
</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
