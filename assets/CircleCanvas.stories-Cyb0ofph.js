import{r as a,R as q}from"./index-C2WPW1L7.js";const z="_circleContainer_ebpix_1",T={circleContainer:z},p=({radius:d=5,speedY:h=1,speedX:C=.5,color:v="#6d6d6d",monthMarker:g})=>{const c=a.useRef(null),u=a.useRef([]),l=a.useRef(null),S=new Date().getMonth(),t=g===void 0||g===S,w=a.useCallback(()=>({x:Math.random()*window.innerWidth,y:-50,radius:Math.random()*d+5,speedY:Math.random()*h,speedX:Math.random()*C,offsetX:0}),[d,h,C]),m=a.useCallback(()=>{const r=c.current;if(!r)return;const n=r.getContext("2d");n&&(n.clearRect(0,0,r.width,r.height),u.current.forEach(e=>{e.y+=e.speedY,e.offsetX+=e.speedX,e.x+=Math.sin(e.offsetX/50)*2,n.beginPath(),n.arc(e.x,e.y,e.radius,0,Math.PI*2),n.fillStyle=v,n.fill(),n.closePath()}),u.current=u.current.filter(e=>e.y<window.innerHeight+50),Math.random()<.02&&u.current.push(w()),l.current=requestAnimationFrame(m))},[v,w]);return a.useEffect(()=>{const r=c.current;if(!r||!r.getContext("2d"))return;const e=()=>{r.width=window.innerWidth,r.height=window.innerHeight};return e(),window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}},[]),a.useEffect(()=>{if(!t)return;const r=c.current;if(!r)return;const n=()=>{r.width=window.innerWidth,r.height=window.innerHeight};return n(),window.addEventListener("resize",n),()=>{window.removeEventListener("resize",n)}},[t]),a.useEffect(()=>{if(t)return l.current=requestAnimationFrame(m),()=>{l.current&&cancelAnimationFrame(l.current)}},[t,m]),t?q.createElement("canvas",{ref:c,className:T.circleContainer}):null};p.__docgenInfo={description:`Компонент для отображения анимации снежинок поверх содержимого.
@param {number} [radius=5] - Радиус снежинок.
@param {number} [speedY=1] - Скорость падения снежинок.
@param {number} [speedX=0.5] - Горизонтальная скорость движения снежинок.
@param {string} [color='#6d6d6d'] - Цвет снежинок.
@param {number} [monthMarker] - Месяц, когда компонент будет отрисовываться.
Если не указан, компонент отображается всегда.
@returns {JSX.Element | null} Canvas с анимацией снежинок.
@example
import {CircleCanvas} from "goncharov-ui/components/CircleCanvas";

// Пример использования:
// props опцинальны
<CircleCanvas
  radius={5} - Радиус снежинок.
  speedY={1} - Скорость падения снежинок.
  speedX={0.5} - Горизонтальная скорость движения снежинок.
  color={'#6d6d6d'} - Цвет снежинок.
  monthMarker={4} - Месяц, когда компонент будет отрисовываться.
  Если не указан, компонент отображается всегда.
/>`,methods:[],displayName:"CircleCanvas",props:{radius:{required:!1,tsType:{name:"number"},description:`Радиус снежинок.
@default {5}`,defaultValue:{value:"5",computed:!1}},speedY:{required:!1,tsType:{name:"number"},description:`Скорость падения снежинок.
@default {1}`,defaultValue:{value:"1",computed:!1}},speedX:{required:!1,tsType:{name:"number"},description:`Горизонтальная скорость движения снежинок.
@default {0.5}`,defaultValue:{value:"0.5",computed:!1}},color:{required:!1,tsType:{name:"string"},description:`Цвет снежинок.
@default {'#6d6d6d'}`,defaultValue:{value:"'#6d6d6d'",computed:!1}},monthMarker:{required:!1,tsType:{name:"number"},description:`Месяц, когда компонент будет отрисовываться.
Если не указан, компонент отображается всегда.
@example
0 === Январь
1 === Февраль
2 === Март
3 === Апрель
4 === Май
5 === Июнь
6 === Июль
7 === Август
8 === Сентябрь
9 === Октябрь
10 === Ноябрь
11 === Декабрь`}}};const D={title:"components/CircleCanvas",component:p,args:{radius:10,speedY:2,speedX:1,color:"#6d6d6d",monthMarker:void 0}},f=d=>q.createElement(p,{...d}),s=f.bind({});s.args={};const o=f.bind({});o.args={radius:15,speedY:3,color:"rgba(0, 255, 255, 0.6)"};const i=f.bind({});i.args={monthMarker:11};var b,x,y;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:"args => <CircleCanvas {...args} />",...(y=(x=s.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};var E,M,X;o.parameters={...o.parameters,docs:{...(E=o.parameters)==null?void 0:E.docs,source:{originalSource:"args => <CircleCanvas {...args} />",...(X=(M=o.parameters)==null?void 0:M.docs)==null?void 0:X.source}}};var k,R,_;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:"args => <CircleCanvas {...args} />",...(_=(R=i.parameters)==null?void 0:R.docs)==null?void 0:_.source}}};const I=["Default","CustomSnowflakes","OnlyInDecember"];export{o as CustomSnowflakes,s as Default,i as OnlyInDecember,I as __namedExportsOrder,D as default};
