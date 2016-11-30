# Foundation-example
use Foundation first time, write a example to complete my project

#jquery 使用记录
>1. form 表格序列化  form = $("form").serialize()  =>  formb = form.split("&") => formc = JSON.stringify(formb)
    可以优雅的对表格内的数据进行序列化，然后转化成可以使用的 json
>2. 最近，总是要做下拉到底部刷新，经历了网上的各种不靠谱之后，我还是记录下 可行的方法
    首先 监听窗口 滚动事件， $(window).scroll()  , 这个方法代替了之前愚蠢的用setTimeout 来检测是否到底的事件， :)
    其次，要判断网页是否到底，这个就涉及到 对于页面和文档的高度 的判断
    var totalheight parseFloat($(window).height()) + parseFloat($(window).scrollTop())  当前窗口底端，距文档顶端的距离
    和 $(document).height() 做比较
    有两个比较方式，pla $(document).height() <= totalheight + *   距离底部的距离
                   plb / 之后的百分比 ，网上一般以95% 作为标准
                   
   $(window).height() ---> 浏览器当前窗口可视区域的高度
   $(document).height() --> 浏览器当前窗口文档的高度
   $(document.body).height() --> 浏览器当前窗口文档body的高度
   $(document.body.outerHeight(true)) --> 浏览器当前窗口文档 body 的总高度 (包括 border padding margin
   
   $(document).scrollTop() --> 获取滚动条到顶部的高度
   $(document).scrollLeft() --> 获取滚动条到左边的高度
   
   以上宽度同理
   
   然后， 可以向后台发post，这里 返回数据之后也有两个方式append 到页面之中
   pla 获得返回数据res ，然后解析出里面的res.data ，在js中 根据页面结构，把数据拼接好，循环输出( 不建议，因为js拼接数据很容易卡死
   plb 在后台获取到数据之后， 把页面结构做成模板，把数据过一遍模板，然后fetch回来，把结构+数据的代码一起返回给 callback里面
       这样直接append到页面之后，就是一个可以直接展示的结构，在前端减少拼接，展示更合理 推荐 :)
