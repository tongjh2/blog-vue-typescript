import{i as a,a as s,b as t,c as e,d as o,s as n,u as r}from"./index.40b988f6.js";import{_ as i}from"./LoadEnd.8993c8f3.js";import{_ as d}from"./Loading.cbe13083.js";import{d as l,r as c,o as m,p,l as g,b as f,c as u,e as L,g as _,F as v,U as b,f as h,m as j,t as y}from"./vendor.e7f10a53.js";var E=l({name:"Project",components:{LoadEnd:i,LoadingCustom:d},setup(){const i=c({reverse:!0,isLoadEnd:!1,isLoading:!1,isMobileOrPc:a(),list:[],total:0,params:{keyword:"",pageNum:1,pageSize:10}}),d=async()=>{i.isLoading=!0;const a=await n.get(r.getProjectList,{params:i.params});i.isLoading=!1,i.list=[...i.list,...a.list],i.total=a.count,i.params.pageNum++,i.total===i.list.length&&(i.isLoadEnd=!0)};return m((()=>{d(),window.onscroll=()=>{s()+t()>e()-100&&!1===i.isLoadEnd&&!1===i.isLoading&&d()}})),{state:i,formatTime:a=>o(a,!0),handleSearch:d}}});const w=j();p("data-v-c30cfd16");const k={class:"project left"},x={style:{padding:"14px"}},P={class:"content"};g();const T=w(((a,s,t,e,o,n)=>{const r=f("el-card"),i=f("el-col"),d=f("el-row"),l=f("LoadingCustom"),c=f("LoadEnd");return u(),L("div",k,[_(d,{gutter:20},{default:w((()=>[(u(!0),L(v,null,b(a.state.list,((s,t)=>(u(),L(i,{class:"el-col-pointer",span:a.state.isMobileOrPc?24:12,key:s._id,style:{"margin-bottom":"20px"}},{default:w((()=>[_("a",{href:s.url,target:"_blank",rel:"noopener noreferrer"},[_(r,{shadow:"hover"},{default:w((()=>[_("img",{src:s.img,class:"image"},null,8,["src"]),_("div",x,[_("h4",null,y(s.title),1),_("div",P,y(s.content),1),_("span",null,y(a.formatTime(s.start_time))+"-- ",1),_("span",null,y(a.formatTime(s.end_time)),1)])])),_:2},1024)],8,["href"])])),_:2},1032,["span"])))),128))])),_:1}),a.state.isLoading?(u(),L(l,{key:0})):h("",!0),a.state.isLoadEnd?(u(),L(c,{key:1})):h("",!0)])}));E.render=T,E.__scopeId="data-v-c30cfd16";export default E;