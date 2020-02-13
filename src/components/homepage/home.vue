<template>
    <!--hero header-->
    <section class="bg-hero py-7 py-md-0" id="home" data-scroll-spy-id="home">
        <div class="container">
            <div class="row vh-md-100">
                <div class="col-md-8 mx-auto my-auto text-white text-center">
                    <img src="static/avator.png" class="img-fluid rounded-circle img-profile" alt="User" />
                    <h1 class="my-4">Hi, I'm Loammi.</h1>
                    <p class="lead mb-5 font-weight-bold">
                        A
                        <span class="typist" ref="typist" data-typist=""></span>
                    </p>
                    <a href="#about" class="btn btn-primary d-inline-flex flex-row align-items-center page-scroll">Know Me Better</a>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
    import {init} from 'ityped'
    export default { 
        mounted(){
            const typist = this.$refs.typist; 
            init(typist, {showCursor: false, strings: ['Full-Stack Engineer','Web Developer', 'Fitness enthusiast'],typeSpeed:  100,backSpeed:50});
        }
    }
</script>
<style>
    #home {
        background-image: url('../../assets/img/parallex.jpg');
    }
</style>
