<template>
<!--navigation-->
        <nav class="navbar navbar-expand-md navbar-dark bg-primary sticky-top sticky-navigation" id="beleme-navbar">
            <a class="navbar-brand d-md-none" href="index.html">
                Genki-Cat
            </a>
            <b-button v-b-toggle.navbarCollapse class="navbar-toggler navbar-toggler-right text-white" data-toggle="collapse" aria-expanded="false" aria-label="Toggle navigation">
                <b-icon icon="list" width="40" height="40"></b-icon>
            </b-button>
            <b-collapse class="collapse navbar-collapse" id="navbarCollapse">
                <ul class="navbar-nav mx-auto" v-scroll-spy-active v-scroll-spy-link>
                    <li class="nav-item">
                        <a class="nav-link" href="#about" @click="emitcollapse">About</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#experience" @click="emitcollapse">Experience</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#skills" @click="emitcollapse">Skills</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#services" @click="emitcollapse">Services</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#portfolio" @click="emitcollapse">Portfolio</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#contact" @click="emitcollapse">Contact</a>
                    </li>
                </ul>
            </b-collapse>
        </nav>
</template>
<script>
export default {
  name: 'App',
  data(){
      return {isJustShown:false,timers:[]}
  },
  methods:{
      emitcollapse(){
        if(this.isJustShown){
            this.$root.$emit('bv::toggle::collapse','navbarCollapse');
        }
      }
  },
  mounted(){
        // listen boostrap collapse
        this.$root.$on('bv::collapse::state', (collapseId, isJustShown) => {
            this.isJustShown=isJustShown;

            //clean auto collapse timers
            for(var t in this.timers){
                console.log('delete timer ..... ......');
                console.log(this.timers[t]);
                clearTimeout(this.timers[t]) 
                this.timers.splice(t,1)
                console.log('delete done....');
                console.log(this.timers);
            }

            //auto collapse panel.
            if(isJustShown){
                var _i=setTimeout(() => {
                    this.emitcollapse();
                }, 4000)

                console.log('create timer .........');
                console.log(_i);

                this.timers.push(_i)
            }
        })
  }
}
</script>

