import{g as A,a as t,b as a,c as e,t as s,d as i,s as l,u as c}from"./index.3a01892c.js";import{_ as n}from"./LoadEnd.8993c8f3.js";import{_ as m}from"./Loading.cbe13083.js";import{d as o,r as d,o as r,S as g,p as M,l as I,b as h,c as b,e as R,t as u,f as E,g as f,T as p,F as L,U as H,m as Q}from"./vendor.e7f10a53.js";const v=window.innerHeight||document.documentElement.clientHeight,B=s((()=>{const A=document.querySelectorAll("#list .item img");let t=0;for(let a=t;a<A.length;a++){let e=v-A[a].getBoundingClientRect().top,s=A[a];if(e>=100){"false"===s.getAttribute("data-has-lazy-src")&&(s.src=s.getAttribute("data-src"),s.setAttribute("data-has-lazy-src","true")),t=a+1}}}),1e3);var k=o({name:"Articles",components:{LoadEnd:n,LoadingCustom:m},watch:{$route:{handler(A,t){this.routeChange(A,t)},immediate:!0}},setup(s,n){const m=d({isLoadEnd:!1,isLoading:!1,articlesList:[],total:0,tag_name:decodeURI(A("tag_name")),params:{keyword:"",likes:"",state:1,tag_id:A("tag_id"),category_id:A("category_id"),pageNum:1,pageSize:10},href:"https://biaochenxuying.cn/articleDetail?article_id="}),o=async()=>{m.isLoading=!0;const A=await l.get(c.getArticleList,{params:m.params});m.isLoading=!1,m.articlesList=[...m.articlesList,...A.list],m.total=A.count,m.params.pageNum++,g((()=>{B()})),0!==A.list.length&&m.total!==m.articlesList.length||(m.isLoadEnd=!0,document.removeEventListener("scroll",(()=>{})),window.onscroll=null)};return r((()=>{o(),window.onscroll=()=>{t()+a()>e()-100&&!1===m.isLoadEnd&&!1===m.isLoading&&o()},document.addEventListener("scroll",B)})),{state:m,formatTime:A=>i(A,!0),handleSearch:o,routeChange:(t,a)=>{m.tag_name=decodeURI(A("tag_name")),m.params.tag_id=A("tag_id"),m.params.category_id=A("category_id"),m.articlesList=[],m.params.pageNum=1,o()}}}});const x=Q();M("data-v-667f4b84");const w={class:"left clearfix"},y={key:0,class:"left-title"},z={class:"articles-list",id:"list"},D=f("img",{class:"wrap-img img-blur-done",src:"data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAAA8AAD/4QMxaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzEzOCA3OS4xNTk4MjQsIDIwMTYvMDkvMTQtMDE6MDk6MDEgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE3IChNYWNpbnRvc2gpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkRFRUU2MkZEM0I1MzExRTlBMzA2QzA5QTEwNzI4MTk4IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkRFRUU2MkZFM0I1MzExRTlBMzA2QzA5QTEwNzI4MTk4Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6REVFRTYyRkIzQjUzMTFFOUEzMDZDMDlBMTA3MjgxOTgiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6REVFRTYyRkMzQjUzMTFFOUEzMDZDMDlBMTA3MjgxOTgiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7/7gAOQWRvYmUAZMAAAAAB/9sAhAAGBAQEBQQGBQUGCQYFBgkLCAYGCAsMCgoLCgoMEAwMDAwMDBAMDg8QDw4MExMUFBMTHBsbGxwfHx8fHx8fHx8fAQcHBw0MDRgQEBgaFREVGh8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx//wAARCADIAPoDAREAAhEBAxEB/8QASwABAQAAAAAAAAAAAAAAAAAAAAgBAQAAAAAAAAAAAAAAAAAAAAAQAQAAAAAAAAAAAAAAAAAAAAARAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AKTAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB//9k=",alt:"文章封面"},null,-1),G={class:"content"},T={class:"title"},Y={class:"abstract"},U={class:"meta"},C={key:0,class:"time"};I();const O=x(((A,t,a,e,s,i)=>{const l=h("LoadingCustom"),c=h("LoadEnd");return b(),R("div",w,[A.state.params.tag_id?(b(),R("h3",y,u(A.state.tag_name)+" 相关的文章：",1)):E("",!0),f("ul",z,[f(p,{name:"el-fade-in"},{default:x((()=>[(b(!0),R(L,null,H(A.state.articlesList,(t=>(b(),R("li",{key:t._id,class:"item"},[f("a",{href:A.state.href+t._id,target:"_blank"},[D,f("div",G,[f("h4",T,u(t.title),1),f("p",Y,u(t.desc),1),f("div",U,[f("span",null,"查看 "+u(t.meta.views),1),f("span",null,"评论 "+u(t.meta.comments),1),f("span",null,"赞 "+u(t.meta.likes),1),t.create_time?(b(),R("span",C,u(A.formatTime(t.create_time)),1)):E("",!0)])])],8,["href"])])))),128))])),_:1})]),A.state.isLoading?(b(),R(l,{key:1})):E("",!0),A.state.isLoadEnd?(b(),R(c,{key:2})):E("",!0)])}));k.render=O,k.__scopeId="data-v-667f4b84";export default k;