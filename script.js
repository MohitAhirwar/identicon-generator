new Vue({
  
  el: '#app',
  data:{ // Initialize our list of 'ingredients'
    textInput: ''
  },
  computed:{
    identicon: function(){
      return jdenticon.toSvg(this.textInput,200);
    }
  },
  methods: {
    onInput: function(event){
      this.textInput = event.target.value;
  }
  }
});