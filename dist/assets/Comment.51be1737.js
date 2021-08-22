import{d as e,r as t,Z as a,_ as o,p as n,l,b as s,c as i,e as d,g as r,m as c,k as m}from"./vendor.e7f10a53.js";import{s as u,u as f}from"./index.8fbb30c7.js";var p=e({name:"Comment",props:{visible:{type:Boolean,default:!1},comment_id:{type:String,default:""},article_id:{type:String,default:""},to_user:{default:{}}},emits:["ok","cancel"],setup(e,n){const l=t({dialogDodel:e.visible,btnLoading:!1,content:"",cacheTime:0,times:0});return a(e,((e,t)=>{l.dialogDodel=e.visible})),{state:l,cancel:()=>(n.emit("cancel",!1),!1),handleOk:async()=>{if(!e.article_id)return void o({message:"该文章不存在！",type:"error"});if(l.times>2)return void o({message:"您今天评论的次数已经用完，明天再来评论吧！",type:"warning"});let t=(new Date).getTime();if(t-l.cacheTime<4e3)return void o({message:"您评论太过频繁，1 分钟后再来评论吧！",type:"warning"});if(!l.content)return void o({message:"评论内容不能为空",type:"error"});let a="";if(window.sessionStorage.userInfo){a=JSON.parse(window.sessionStorage.userInfo)._id;l.btnLoading=!0,await u.post(f.addThirdComment,{article_id:e.article_id,user_id:a,comment_id:e.comment_id,to_user:JSON.stringify(e.to_user),content:l.content}),l.btnLoading=!1,l.times++,l.cacheTime=t,l.content="",n.emit("ok",!1),o({message:"操作成功",type:"success"})}else o({message:"登录才能评论，请先登录！",type:"warning"})}}}});const g=c();n("data-v-7bd21694");const _={slot:"footer",class:"dialog-footer"},y=m("取消"),b=m("确 定");l();const v=g(((e,t,a,o,n,l)=>{const c=s("el-input"),m=s("el-form-item"),u=s("el-form"),f=s("el-button"),p=s("el-dialog");return i(),d(p,{title:"评论",width:"60%",modelValue:e.state.dialogDodel,"onUpdate:modelValue":t[2]||(t[2]=t=>e.state.dialogDodel=t),onClose:e.cancel},{default:g((()=>[r(u,null,{default:g((()=>[r(m,null,{default:g((()=>[r(c,{type:"textarea",modelValue:e.state.content,"onUpdate:modelValue":t[1]||(t[1]=t=>e.state.content=t),placeholder:"文明社会，理性评论",autocomplete:"off"},null,8,["modelValue"])])),_:1})])),_:1}),r("div",_,[r(f,{type:"default",onClick:e.cancel},{default:g((()=>[y])),_:1},8,["onClick"]),r(f,{type:"primary",onClick:e.handleOk},{default:g((()=>[b])),_:1},8,["onClick"])])])),_:1},8,["modelValue","onClose"])}));p.render=v,p.__scopeId="data-v-7bd21694";export default p;