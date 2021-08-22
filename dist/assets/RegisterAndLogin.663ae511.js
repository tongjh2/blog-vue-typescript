import{d as e,j as a,r as l,u as t,Z as o,_ as s,p as d,l as i,b as n,c as r,e as m,g as p,f as u,m as g,k as c}from"./vendor.e7f10a53.js";import{s as h,u as f,k as b}from"./index.3a01892c.js";const w="https://github.com/login/oauth/authorize",y="https://biaochenxuying.cn/login",V="XXXXXXXXX";var _=e({name:"RegisterAndLogin",props:{visible:{type:Boolean,default:!1},handleFlag:{type:String,default:!1},isMobile:{type:Boolean,default:!1}},emits:["ok","cancel"],setup(e,d){const i=a(b),n=l({dialogDodel:e.visible,btnLoading:!1,loading:!1,formLabelWidth:e.isMobile?"40px":"60px",params:{email:"",name:"",password:"",phone:"",desc:""}}),r=t(),m=async()=>{let a="";n.btnLoading=!0,a="register"===e.handleFlag?await h.post(f.register,n.params):await h.post(f.login,n.params),n.btnLoading=!1;const l={_id:a._id,name:a.name,avatar:a.avatar};i.commit("SAVE_USER",{userInfo:l}),window.sessionStorage.userInfo=JSON.stringify(l),d.emit("ok",!1),s({message:"操作成功",type:"success"})};return o(e,((e,a)=>{n.dialogDodel=e.visible})),{state:n,handleOAuth:()=>{let e={name:r.name,query:r.query};window.sessionStorage.preventHistory=JSON.stringify(e),window.location.href=`${w}?client_id=${V}&redirect_uri=${y}`},handleOk:()=>{const a=new RegExp("^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$");if(n.params.email)if(a.test(n.params.email)){if("register"===e.handleFlag){if(!n.params.password)return void s({message:"密码不能为空！",type:"warning"});if(!n.params.name)return void s({message:"用户名不能为空！",type:"warning"});const e=/^(((13[0-9]{1})|(15[0-9]{1})|(17[0-9]{1})|(18[0-9]{1}))+\d{8})$/;if(n.params.phone&&!e.test(n.params.phone))return void s({message:"请输入正确的手机号!",type:"warning"})}m()}else s({message:"请输入格式正确的邮箱！",type:"warning"});else s({message:"邮箱不能为空！",type:"warning"})},submit:m,cancel:()=>(d.emit("cancel",!1),!1)}}});const k=g();d("data-v-619bf23d");const v={slot:"footer",class:"dialog-footer"},L=c("github 授权登录"),X=c("登 录"),C=c("注 册");i();const F=k(((e,a,l,t,o,s)=>{const d=n("el-input"),i=n("el-formItem"),g=n("el-form"),c=n("el-button"),h=n("el-dialog");return r(),m(h,{title:"登录",width:e.isMobile?"90%":"50%",modelValue:e.state.dialogDodel,"onUpdate:modelValue":a[6]||(a[6]=a=>e.state.dialogDodel=a),onClose:e.cancel,"show-close":!0},{default:k((()=>[p(g,null,{default:k((()=>[p(i,{label:"邮箱","label-width":e.state.formLabelWidth},{default:k((()=>[p(d,{modelValue:e.state.params.email,"onUpdate:modelValue":a[1]||(a[1]=a=>e.state.params.email=a),placeholder:"邮箱",autocomplete:"off"},null,8,["modelValue"])])),_:1},8,["label-width"]),p(i,{label:"密码","label-width":e.state.formLabelWidth},{default:k((()=>[p(d,{type:"password",placeholder:"密码",modelValue:e.state.params.password,"onUpdate:modelValue":a[2]||(a[2]=a=>e.state.params.password=a),autocomplete:"off"},null,8,["modelValue"])])),_:1},8,["label-width"]),"register"===e.handleFlag?(r(),m(i,{key:0,label:"昵称","label-width":e.state.formLabelWidth},{default:k((()=>[p(d,{modelValue:e.state.params.name,"onUpdate:modelValue":a[3]||(a[3]=a=>e.state.params.name=a),placeholder:"用户名或昵称",autocomplete:"off"},null,8,["modelValue"])])),_:1},8,["label-width"])):u("",!0),"register"===e.handleFlag?(r(),m(i,{key:1,label:"手机","label-width":e.state.formLabelWidth},{default:k((()=>[p(d,{modelValue:e.state.params.phone,"onUpdate:modelValue":a[4]||(a[4]=a=>e.state.params.phone=a),placeholder:"手机号",autocomplete:"off"},null,8,["modelValue"])])),_:1},8,["label-width"])):u("",!0),"register"===e.handleFlag?(r(),m(i,{key:2,label:"简介","label-width":e.state.formLabelWidth},{default:k((()=>[p(d,{modelValue:e.state.params.desc,"onUpdate:modelValue":a[5]||(a[5]=a=>e.state.params.desc=a),placeholder:"个人简介",autocomplete:"off"},null,8,["modelValue"])])),_:1},8,["label-width"])):u("",!0)])),_:1}),p("div",v,[p(c,{type:"success",onClick:e.handleOAuth},{default:k((()=>[L])),_:1},8,["onClick"]),"login"===e.handleFlag?(r(),m(c,{key:0,loading:e.state.btnLoading,type:"primary",onClick:e.handleOk},{default:k((()=>[X])),_:1},8,["loading","onClick"])):u("",!0),"register"===e.handleFlag?(r(),m(c,{key:1,loading:e.state.btnLoading,type:"primary",onClick:e.handleOk},{default:k((()=>[C])),_:1},8,["loading","onClick"])):u("",!0)])])),_:1},8,["width","modelValue","onClose"])}));_.render=F,_.__scopeId="data-v-619bf23d";export default _;