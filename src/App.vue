<template>
  <div id="app">
    <div class="header">
      <el-carousel height="250px">
          <el-carousel-item v-for="(item,index) in images" :key="index">
              <img :src="item"/>
          </el-carousel-item>
      </el-carousel>
    </div>
    <div class="container">
        <div class="nav">
            <Nav></Nav>
        </div>
        <div class="main">
            <div class="leftMess">
                <router-view/>
            </div>
            <div class="rightMess">
                <tip-mess></tip-mess>
            </div>
        </div>
    </div>
    <div class="footer">
        <Footer></Footer>
    </div>
    

    
  </div>
</template>

<script>
import Nav from './components/common/nav.vue'
import Footer from './components/common/foot.vue'
import TipMess from './components/common/tipMess.vue'
export default {
  name: 'App',
  data(){
    return{
      images:[
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1542641383740&di=e485880cd0d4aee72929058e0de8b36f&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F0192bd554859490000005b03cac220.jpg',
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1542641383739&di=1a3a5c0e398723c94a4d0a1d5eced44c&imgtype=0&src=http%3A%2F%2Fimg.redocn.com%2Fsheji%2F20150311%2Fhuiyihuodonghaibaosucai_3991687.jpg',
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1543038238708&di=5467b3a3799b9452f0634aca2e33dc27&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01ed05569da68e6ac72537007045c1.jpg',
      ]
    }
    
  },
  components:{
    Nav,
    Footer,
    TipMess
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
}
.header{
  height: 250px;
  width: 100%;
  /* background-image: url('./assets/time.jpg'); */
}
/* .el-carousel__item:nth-child(2n) {
     background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
     background-color: #d3dce6;
  } */
.container{
  width: 90%;
  margin: 0 auto;
  background: #fff;
}
.container .nav{
  width: 100%;
}
.main{
  margin-top: 18px;
  /* padding: 0 20px; */
}
.main .leftMess{
  float: left;
  /* background: green; */
  /* height: 500px; */
  padding-bottom: 100px;
  margin-bottom: 50px;
  width: 67%;
  background: rgb(255, 255, 255);
}
.main .rightMess{
  width: 30%;
  margin-bottom: 50px;
  padding-bottom: 40px;
  float: right;
  background: rgb(255, 255, 255);
  /* background: gray; */
  /* height: 500px; */
}
.footer{
  clear: both;
}
img{
  width: 100%;
}
</style>
