<template>
 <div class="bgBox textLeft">
    <div> es6</div>
    <div>
        <p>面向对象</p>
        class User{},class对象中包含了构造器 constructor(){  //内部通过this赋值}
        class关键字，构造器和类分开，class对象里面可直接添加fn(){}方法
    </div>
    <div>
        继承：
        class VipUser extends User{ 
            constructor(){ 
                super() 
            } 
        }<br/>
        
        <p>  
            在extends对象里面，constructor()里面的参数，需要写你要继承那些参数，加上你想添加的参数在后面<br/>
            在constructor(){}方法内部有super()，在super里面写上从父对象中继承的属性<br/>
            新方法可以在方法内直接声明即可<br/>
        </p>

    </div>
    <div>
        <h3>promise</h3>
        <div>
            同步：同时只做 一件事
            异步：操作之间没关系，同时进行多个操作
        </div>
       

    </div>
 </div>
</template>

<script>
import axios from 'axios'
 export default {
     name:'ecms',
   data () {
     return {

     }
   },
    methods:{
      
    }
 }
 class User{
     constructor(name,pass){
         this.name = name;
         this.pass = pass;
     }
     showName(){
         console.log(this.name)
     }
     showPass(){
         console.log(this.pass)
     }
 }
 let u1 = new User('xiaohong','123456')
 u1.showName()
 u1.showPass()

// es6 继承,在上面user基础上添加新的属性以及方法
class VipUser extends User{
        constructor(name,pass,sex){
            super(name,pass)
            this.sex = sex  //把新添加的属性绑定
        }

        // 直接添加新的方法
        showSex(){
            console.log(this.sex)
        }
}

let v1 = new VipUser('小白','456789','女')
 v1.showName()
 v1.showPass()
 v1.showSex()

// -----------------------------
// Promise
let p = new Promise(function(resolve,reject){
// resolve  成功的时候调用resolve()
// reject   失败调用reject()


})

Promise.all([axios1,axios2]).then(res=>{},reject=>{}) //全部成功，进入res,一个失败进入reject
Promise.race([p1, p2, p3]) //里面哪个结果获得的快，就返回那个结果，不管结果本身是成功状态还是失败状态。


</script>

<style>
</style>
