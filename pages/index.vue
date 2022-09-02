<template>
  <div class="wrapper grad-anim">
    <div v-if="started" class="subtext">{{subtext}}</div>
    <div v-if="started" class="subtext">is</div>
    <div class="txt">
      {{txt}}
      
    </div>
  </div>
</template>

<script>
import _ from 'lodash';
const words = ['amazing',
'astonishing',
'astounding',
'awe-inspiring',
'breathtaking',
'imposing',
'inspiring',
'magnificent',
'majestic',
'miraculous',
'spectacular',
'stunning']
export default {
  name: 'IndexPage',
  data(){
    return {
      started: false,
      countdown:3,
      txt: '...',
      subtext: 'Anything',
    }
  },
  mounted(){
    const params = new Proxy(new URLSearchParams(window.location.search), {
        get: (searchParams, prop) => searchParams.get(prop),
    });
    if(params.label){
      this.subtext = params.label; // "some_value"
    }
    
    this.runTextRoutine()
  },
  methods:{
    runTextRoutine(){
      this.runCountdown()
    },
    runCountdown(){
      this.txt = this.countdown;
      this.countdown--;
      if(this.countdown<0){
        this.runRandomtext()
        this.started = true;
      }else{
        setTimeout(() => this.runCountdown(), 1000)
      }
    },
    runRandomtext(){
      this.txt = _.sample(words).toUpperCase();
      setTimeout(() => this.runRandomtext(), 150)
    }
  }
}
</script>

<style scoped>
.txt{
  font-size:3em;
  color: white;
  font-weight: 800;
}
.subtext{
  font-size:2em;
  color: white;
  font-weight: 500;
}
.wrapper{
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

}
.grad-anim {
    background: linear-gradient(228deg, #ba26ff, #26b1ff, #ffc126);
    background-size: 600% 600%;

    -webkit-animation: GradAnim 6s ease infinite;
    -moz-animation: GradAnim 6s ease infinite;
    animation: GradAnim 6s ease infinite;
}

@-webkit-keyframes GradAnim {
    0%{background-position:0% 26%}
    50%{background-position:100% 75%}
    100%{background-position:0% 26%}
}
@-moz-keyframes GradAnim {
    0%{background-position:0% 26%}
    50%{background-position:100% 75%}
    100%{background-position:0% 26%}
}
@keyframes GradAnim {
    0%{background-position:0% 26%}
    50%{background-position:100% 75%}
    100%{background-position:0% 26%}
}
</style>
