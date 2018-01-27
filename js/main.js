/*把code写到#code和style标签里 */
function writeCss(prefix,code,fn){
    let domCode = document.querySelector('#code')
    let n = 0
    let id = setInterval(() => {
        n += 1
        domCode.innerHTML = WebGLShaderPrecisionFormat.highlight(prefix + code.substring(0,n),Prism.languages.css);
        styleTag.innerHTML = prefix + code.substring(0,n)
        domCode.scrollTop = domCode.scrollHeight
        if (n >=code.length){
            window.clearInterval(id)
            fn && fn.call()
        }
    },70)
}
function writeMarkdown(markdown,fn){
    let domPaper = document.querySelector('#paper>.content')
    let n = 0
    let id = setInterval(() =>{
        n += 1
        domPaper.innerHTML = markdown.substring(0,n)
        domPaper.scrollTop = domPaper.scrollHeight
        if (n >= markdown.length){
            window.clearInterval(id)
            fn && fn.call()
        }
    },35)
}

var css1=`/*
* 面试官你好,我是曹雪莹
* 只用文字做自我介绍太单调了
* 我就用代码来介绍
* 首先准备一些样式
*/

*{
    transition:all 1s;
}
html{
    backgroun:#eee;
}
#code{
    border:1px solid #aaa;
    padding:16px;
}

/*我需要一点代码高亮*/

.token.selector{color:#690;}
.token.property{color:#905;}

/*加一个呼吸效果 */

#code{
    animation:breath 0.5s infinite alternate-reverse;
}

/*现在正式开始*/

/*我需要一张白纸 */

#code-wrapper{
    width:50%;left:0;position:fixed;
    height:100%;
}

#paper >.content{
    display:block;
}

/*于是我就可以在白纸上写字了，请看右边*/
`
var css2= `
/* 接下来用一个优秀的库 marked.js
 * 把 Markdown 变成 html
 * /
 * `

 


 var md = `#自我介绍
 
  我叫曹雪莹
  1996年6月出生
  东北石油大学毕业
  自学前端半年
  希望应聘前端开发岗位
 
  # 技能介绍
 
  熟悉 JavaScript css
  
  # 项目介绍
 
  1.xxx轮播
  2.xxx简历
  3.xxx画板
 
  #联系方式
 
  -QQ 542377632
  -Email 542377632@qq.com
  -手机 15765961390
 `
 
let css3 = `
/*
 * 这就是我的会动的简历
 * 谢谢观看
 * /
 `

writeCss('',css1,() => {    //writeCss call the function
    createPaper(() => {
        writeMarkdown(md,() => {
            writeCss(css1,css2,()=>{
                converMarkdownToHtml(()=>{
                    writeCss(css1+css2,css3,()=>{
                        console.log('完成')
                    })
                })
            })
        })
    })
})

function createPaper(fn){
    var paper = document.createElement('div')
    paper.id = 'paper'
    var content = ducument.createElement('pre')
    content.className = 'content'
    paper.appendChild(content)
    document.body.appendChild(paper)   //把paper放到最后一个儿子
    fn && fn.call()
}

function converMarkdownToHtml(fn){
    var div = document.createElement('div')
    div.className = 'html markdown-body'
    div.innerHTML = marked(md)
    let markdownContainer = document.querySelector('#paper > .content')
    markdownContainer.replacewith(div)
    fn && fn.call()
}





                                                                   



 