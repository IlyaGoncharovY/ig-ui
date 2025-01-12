import{R as C}from"./index-C2WPW1L7.js";import{c as M}from"./clsx-B-dksMZM.js";const v="_buttonContainer_y378p_1",L="_small_y378p_33",T="_medium_y378p_38",x="_large_y378p_43",m={buttonContainer:v,small:L,medium:T,large:x},n=({children:o,className:h="",size:y="medium",...z})=>C.createElement("button",{className:M(m.buttonContainer,m[y],h),...z},o);n.__docgenInfo={description:`Button компонент для повторного использования элементов пользовательского интерфейса.
@param {React.ReactNode} children - Содержимое, отображаемое внутри кнопки.
@param {string} [className] - Дополнительные классы CSS для стилизации.
@param {'small' | 'medium' | 'large'} [size='medium'] - Размер кнопки.
@param {ButtonHTMLAttributes<HTMLButtonElement>} props - Дополнительные атрибуты кнопок.
@returns {JSX.Element} Стилизованный компонент кнопки.
@example
// Пример использования:
import {Button} from "goncharov-ui/components/Button";
<Button size="large" onClick={() => console.log('Clicked!')}>
  Click Me
</Button>`,methods:[],displayName:"Button",props:{className:{required:!1,tsType:{name:"string"},description:"Дополнительные CSS классы для кнопки.",defaultValue:{value:"''",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:"Размер кнопки: small, medium или large.",defaultValue:{value:"'medium'",computed:!1}}},composes:["ButtonHTMLAttributes"]};const k={title:"components/Button",component:n,args:{children:"Click me",disabled:!1,size:"medium"},parameters:{controls:{exclude:[]}}},s=o=>C.createElement(n,{...o}),e=s.bind({});e.args={size:"small",children:"Small Button"};const a=s.bind({});a.args={size:"medium",children:"Medium Button"};const t=s.bind({});t.args={size:"large",children:"Large Button"};const r=s.bind({});r.args={disabled:!0,children:"Disabled Button"};var l,i,u;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:"args => <Button {...args} />",...(u=(i=e.parameters)==null?void 0:i.docs)==null?void 0:u.source}}};var c,d,p;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:"args => <Button {...args} />",...(p=(d=a.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var g,B,_;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:"args => <Button {...args} />",...(_=(B=t.parameters)==null?void 0:B.docs)==null?void 0:_.source}}};var b,f,S;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:"args => <Button {...args} />",...(S=(f=r.parameters)==null?void 0:f.docs)==null?void 0:S.source}}};const R=["Small","Medium","Large","Disabled"];export{r as Disabled,t as Large,a as Medium,e as Small,R as __namedExportsOrder,k as default};
