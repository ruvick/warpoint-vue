import{aQ as c,i as p,bO as g,at as y,a$ as h,r as b,f,s as w,x as n,l as q,bz as x,B as S,ay as i,ap as _}from"./index.88f48d4d.js";import{u as V}from"./useApi.f2502392.js";import"./axios.37d53be1.js";const v=c("auth",()=>({useLogin:async o=>{const a="/auth/token/",r=JSON.stringify({username:o.email,password:o.password});return(await V(a,{method:"POST",headers:{"Content-Type":"application/json"},data:r})).data||[]}}));function k(){return p(g)}const B={class:"q-pa-md row justify-center items-center",style:{"min-height":"100vh"}},Q={class:"column items-center"},L={__name:"AuthComp",setup(d){const{g:o}=y(),a=k(),r=v(),u=h(),e=b({email:null,password:null}),m=async()=>{console.log(e);try{const s=await r.useLogin(e);o.token=s.access,localStorage.setItem("token",s.access),a.notify({message:"\u0412\u044B \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u0430\u0432\u0442\u043E\u0440\u0438\u0437\u043E\u0432\u0430\u043B\u0438\u0441\u044C",color:"positive"}),setTimeout(()=>{u.push("/")},500)}catch(s){console.log(s),a.notify({message:"\u041B\u043E\u0433\u0438\u043D \u0438\u043B\u0438 \u043F\u0430\u0440\u043E\u043B\u044C - \u043D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u044B\u0435",color:"negative"})}};return(s,l)=>(f(),w("div",B,[n(x,{onSubmit:m,class:"q-gutter-md q-mt-auto q-mb-auto",style:{width:"380px"}},{default:q(()=>[S("div",Q,[n(i,{color:"grey-9",standout:"",modelValue:e.email,"onUpdate:modelValue":l[0]||(l[0]=t=>e.email=t),type:"text",class:"my-input-standart my-input-standart-middle bg-blue-grey-8 q-mb-lg full-width",placeholder:"\u041B\u043E\u0433\u0438\u043D *",rules:[t=>!!t||"* \u041E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0435 \u043F\u043E\u043B\u0435",t=>t.length>3||"\u041D\u0435 \u043C\u0435\u043D\u044C\u0448\u0435 3 \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432"]},null,8,["modelValue","rules"]),n(i,{color:"grey-9",standout:"",modelValue:e.password,"onUpdate:modelValue":l[1]||(l[1]=t=>e.password=t),type:"text",class:"my-input-standart my-input-standart-middle bg-blue-grey-8 q-mb-lg full-width",placeholder:"\u041F\u0430\u0440\u043E\u043B\u044C *",rules:[t=>!!t||"* \u041E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0435 \u043F\u043E\u043B\u0435",t=>t.length>3||"\u041D\u0435 \u043C\u0435\u043D\u044C\u0448\u0435 3 \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432"]},null,8,["modelValue","rules"]),n(_,{unelevated:"",color:"blue-1",class:"my-btn text-weight-bold q-ml-md full-width q-mt-sm",label:"\u0412\u043E\u0439\u0442\u0438",padding:"0 16px",type:"submit"})])]),_:1})]))}};export{L as default};
