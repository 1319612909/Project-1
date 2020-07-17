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
     <div>
        <h3>generator  --函数</h3>
        <div>
           特点：在函数名字前面加* <br/>
                 在函数体内如果需要暂停的话，使用yield,暂时放弃执行 <br/>
                 函数体必须用对象接收后方可调用，因为generator是创建了一个对象形式<br/>
                 使用对象.next()的自身方法进行调用函数，调用一次会按照顺序执行函数体内的条件，执行到yield的时候，就会暂停，如需继续执行，需要再次使用对象.next()方法执行函数体内后面的语句
       <p>适合场景：</p>
             请求数据，可以通过暂停，等到数据请求到以后，可以在执行后续的，普通函数，需要请求成功后回调在使用
       
       <p>
           yield 可传参，返回值
         在调用时，next（）可以传参，这里面传入的参数就是用let  a =yield，使用yiedl来接收
         但是，第一个next（）的传参是无效的，因为传入的参数在yield以后才能收到，如果想在第一个里面传递参数，那就在
         本来的show（）函数里面传参既可
       </p>
       <p>实现本质的原理，实际上是内部自己把函数划分为fn1,fn2...等等然后在调用的时候按照顺序依次调用</p>
        <p>适应场景是带逻辑的请求参数使用</p>
        </div>

       <div>
           <h3>async 函数</h3>
           <p>async 相当于generator 语法糖</p>
           <p>async替换了generator的*号，await替换了yield</p>
           <p>async和await，比起星号和yield，语义更清楚了。async表示函数里有异步操作，await表示紧跟在后面的表达式需要等待结果。</p>
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

// Promise.all([p1, p2, p3]).then(res=>{},reject=>{}) //全部成功，进入res,一个失败进入reject
// Promise.race([p1, p2, p3]) //里面哪个结果获得的快，就返回那个结果，不管结果本身是成功状态还是失败状态。


// generator 生成器
//特点 函数，可以在函数体内中间部分可以暂停，函数名称前面加 *
function * show(sum){
    console.log('show1')
    console.log(sum)
    console.log(params) //这儿是取不到值得，undefined
    let params = yield;  //naxt()里面传递的参数，在此处使用变量接收
    console.log("show2")
    console.log(params)
}
let showObj = show(10)
showObj.next(12) //第一个next无法传参，如果想在第一个yield以前传参，就在show（）里面传
showObj.next(55)

// yield 返回
function * showRes(sum){
    console.log('res1')
   
     yield  12;  //12是返回参数
    console.log("res2")
    return
}

let Res = showRes()
let R1 = Res.next()
let R2 = Res.next()
console.log(R1)   //返回对象，{value:12,done:false},接收到的是yield返回的参数
console.log(R2)   //返回对象，{value:undefined,done:true}  ，最后一步如果return 没有值，那就是undefined，如果返回有值，接收的就是return后面的值

</script>

<style>
</style>
