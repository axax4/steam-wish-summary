<template lang="pug">
  div.hello
    h1 Steamのウィッシュリストの合計を算出する
    h4 １．Steamのウィッシュリスト内を全コピーして下記テキストにペースト
    textarea.form-control(rows="10" v-model="input")
    button.btn.btn-default(@click.prevent="calc" :disabled="!canCalc") ２．算出！
    button.btn.btn-default(@click.prevent="clear") クリア
    div(style="font-size:24px") {{result}}
    table
      tr(v-for="(item, i) in items")
        td # {{i+1}}
        td(:class="{'torikeshi': item.del}") {{item.priceText}}
        td 
          button.btn.btn-xs.btn-default(@click.prevent="toggleDel(i)") {{ item.del ? '戻す' : '除外' }}
</template>

<script>
import { mapState, mapGetters, mapActions, mapMutations } from 'vuex'

export default {
  name: 'steamcalc',
  data() {
    return {
      input: '',
      items:[]
    }
  },
  computed: {
    ...mapState(['point']),
    ...mapGetters(['foobaa']),
    result(){
      if(!this.items){
        return 'すまん、認識できんかった。。'  
      }
      if (!this.items.length){
        return ''
      }
      var sum = 
        this.items.filter(i => !i.del)
        .map(item => +item.priceText.replace(/[¥,\s]/g, '') )
        .reduce( (a, b) => a + b)

      return this.items.length + ' 点で￥' + sum.toLocaleString()
    },
    canCalc(){
      return this.input.replace(/\s/g, '').length
    }
  },
  methods:{
    clear(){
      this.input = ''
      this.items = []
    },
    calc(){
      this.items = this.input.match(/¥[\s,\d]+/g)
      .map( i => {
        return { del:false, priceText: i }
        })
      
    },
    toggleDel(i){
      this.items[i].del = !this.items[i].del
    },
    ...mapActions(['offsetPoint']),
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
h1
  margin-bottom 50px
ul
  list-style-type: none
  padding: 0

li
  display: inline-block;
  margin: 0 10px;

a
  color: #42b983

.torikeshi
  text-decoration line-through
</style>
