import{s,u as a,e as t}from"./index.40b988f6.js";import{d as i,r as e,o as l,p as n,l as d,b as o,c,e as r,g,F as m,U as u,m as p,t as v}from"./vendor.e7f10a53.js";var b=i({name:"CustomSlider",setup(t,i){const n=e({isLoadEnd:!1,isLoading:!1,list:[],total:0,params:{keyword:"",pageNum:1,pageSize:100}});return l((()=>{(async()=>{n.isLoading=!0;const t=await s.get(a.getTagList,{params:n.params});n.isLoading=!1,n.list=[...n.list,...t.list],n.total=t.count,n.params.pageNum++,n.total===n.list.length&&(n.isLoadEnd=!0)})()})),{state:n}}});const _=p();n("data-v-49271eb1");const h={class:"right slider"},y=g("img",{class:"right-logo",src:t,alt:""},null,-1),f=g("div",{class:"title"},"那一天的早上",-1),L=g("div",{class:"right-content"},null,-1),B={class:"tags"},k=g("div",{class:"title"},"标签云",-1),w=g("div",{class:"introduce"},[g("div",{class:"title"},"技术以内的 BB"),g("div",{class:"content"},[g("img",{style:{width:"100%"},src:"./assets/BiaoChenXuYing.bb437ad7.png",alt:"全栈修炼"})])],-1),E=g("div",{class:"introduce"},[g("div",{class:"title"},"开源项目的 BB"),g("div",{class:"content"},[g("img",{style:{width:"100%"},src:"./assets/FrontEndGitHub.2cbab693.png",alt:"前端GitHub"})])],-1);d();const j=_(((s,a,t,i,e,l)=>{const n=o("router-link");return c(),r("div",h,[y,f,L,g("div",B,[k,(c(!0),r(m,null,u(s.state.list,(s=>(c(),r(n,{class:"item",key:s._id,to:`/articles?tag_id=${s._id}&tag_name=${s.name}&category_id=`},{default:_((()=>[(c(),r("span",{key:s._id},v(s.name),1))])),_:2},1032,["to"])))),128))]),w,E])}));b.render=j,b.__scopeId="data-v-49271eb1";export default b;
