import{r as v,R as t}from"./index-C2WPW1L7.js";const B="_animateBgContainer_1bfji_1",_={animateBgContainer:B},o=({inputLength:e=4,backgroundColor:T="#4a4a4a",inputType:b="text",customInput:m})=>{const[x,A]=v.useState(0),u=L=>{A(L.currentTarget.value.length)};return t.createElement("div",{className:_.animateBgContainer,style:{"--background-width":`${x/e*100}%`,"--background-color":T}},m?t.cloneElement(m,{onChange:u,maxLength:e}):t.createElement("input",{type:b,maxLength:e,onChange:u}))};o.__docgenInfo={description:`AnimateBG компонент для интерактивного ввода фоновой анимации.
@param {number} [inputLength=4] - Максимальная длина поля ввода.
@param {string} [backgroundColor='#4a4a4a'] - Цвет фона анимированной панели.
@param {React.HTMLInputTypeAttribute} [inputType='text'] - Тип поля ввода.
@param {React.ReactElement} [customInput] - Кастомный компонент для ввода.
@returns {JSX.Element} Контейнер для ввода анимированного фона.
@example
import { AnimateBG } from "goncharov-ui/dist/components/AnimateBG";

// Пример использования с кастомным input:
<AnimateBG
  inputLength={8}
  backgroundColor="pink"
  customInput={<input className="custom-input" placeholder="Custom input" />}
/>

// Стандартный input:
<AnimateBG inputLength={10} backgroundColor="lightblue" inputType="text" />`,methods:[],displayName:"AnimateBG",props:{inputLength:{required:!1,tsType:{name:"number"},description:"Количество символов в input и делитель.",defaultValue:{value:"4",computed:!1}},backgroundColor:{required:!1,tsType:{name:"string"},description:"Цвет фона для заполнения bg.",defaultValue:{value:"'#4a4a4a'",computed:!1}},inputType:{required:!1,tsType:{name:"ReactHTMLInputTypeAttribute",raw:"React.HTMLInputTypeAttribute"},description:"Тип инпута.",defaultValue:{value:"'text'",computed:!1}},customInput:{required:!1,tsType:{name:"ReactReactElement",raw:`React.ReactElement<{
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    maxLength: number;
}>`,elements:[{name:"signature",type:"object",raw:`{
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    maxLength: number;
}`,signature:{properties:[{key:"onChange",value:{name:"signature",type:"function",raw:"(e: ChangeEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ChangeEvent",elements:[{name:"HTMLInputElement"}],raw:"ChangeEvent<HTMLInputElement>"},name:"e"}],return:{name:"void"}},required:!0}},{key:"maxLength",value:{name:"number",required:!0}}]}}]},description:"Кастомный компонент для ввода."}}};const N={title:"components/AnimateBG",component:o,args:{inputLength:4,backgroundColor:"#4a4a4a",inputType:"text"}},a=e=>t.createElement(o,{...e});a.storyName="Default Input";const n=e=>t.createElement(o,{...e,inputType:"password"});n.storyName="Password Input";const r=e=>t.createElement(o,{...e,inputType:"email"});r.storyName="Email Input";const s=e=>t.createElement(o,{...e,customInput:t.createElement("input",{className:"custom-input",placeholder:"Type something...",style:{border:"2px solid #6d6d6d",borderRadius:"4px",padding:"0.5rem",fontSize:"1rem",textAlign:"center"}})});s.storyName="Custom Input";a.__docgenInfo={description:"",methods:[],displayName:"Default"};n.__docgenInfo={description:"",methods:[],displayName:"PasswordInput"};r.__docgenInfo={description:"",methods:[],displayName:"EmailInput"};s.__docgenInfo={description:"",methods:[],displayName:"CustomInput"};var p,i,c;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:"args => <AnimateBG {...args} />",...(c=(i=a.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};var d,l,g;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:'args => <AnimateBG {...args} inputType="password" />',...(g=(l=n.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};var h,y,I;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:'args => <AnimateBG {...args} inputType="email" />',...(I=(y=r.parameters)==null?void 0:y.docs)==null?void 0:I.source}}};var E,f,C;s.parameters={...s.parameters,docs:{...(E=s.parameters)==null?void 0:E.docs,source:{originalSource:`args => <AnimateBG {...args} customInput={<input className="custom-input" placeholder="Type something..." style={{
  border: '2px solid #6d6d6d',
  borderRadius: '4px',
  padding: '0.5rem',
  fontSize: '1rem',
  textAlign: 'center'
}} />} />`,...(C=(f=s.parameters)==null?void 0:f.docs)==null?void 0:C.source}}};const R=["Default","PasswordInput","EmailInput","CustomInput"];export{s as CustomInput,a as Default,r as EmailInput,n as PasswordInput,R as __namedExportsOrder,N as default};
