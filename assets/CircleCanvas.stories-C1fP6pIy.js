import{r as n,R as q}from"./index-C2WPW1L7.js";const z=({monthMarker:t,radius:c,speedY:m,speedX:p,color:f})=>{const s=n.useRef(null),o=n.useRef([]),v=n.useRef(null),S=new Date().getMonth(),i=t===void 0||t===S,w=n.useCallback(()=>({x:Math.random()*window.innerWidth,y:-50,radius:Math.random()*c+5,speedY:Math.random()*m,speedX:Math.random()*p,offsetX:0}),[c,m,p]),h=n.useCallback(()=>{const r=s.current;if(!r)return;const a=r.getContext("2d");a&&(a.clearRect(0,0,r.width,r.height),o.current.forEach(e=>{e.y+=e.speedY,e.offsetX+=e.speedX,e.x+=Math.sin(e.offsetX/50)*2,a.beginPath(),a.arc(e.x,e.y,e.radius,0,Math.PI*2),a.fillStyle=f,a.fill(),a.closePath()}),o.current=o.current.filter(e=>e.y<window.innerHeight+50),Math.random()<.02&&o.current.push(w()),v.current=requestAnimationFrame(h))},[f,w]);return n.useEffect(()=>{const r=s.current;if(!r||!r.getContext("2d"))return;const e=()=>{r.width=window.innerWidth,r.height=window.innerHeight};return e(),window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}},[]),n.useEffect(()=>{if(!i)return;const r=s.current;if(!r)return;const a=()=>{r.width=window.innerWidth,r.height=window.innerHeight};return a(),window.addEventListener("resize",a),()=>{window.removeEventListener("resize",a)}},[i]),n.useEffect(()=>{if(i)return v.current=requestAnimationFrame(h),()=>{v.current&&cancelAnimationFrame(v.current)}},[i,h]),{shouldRender:i,canvasRef:s}},T="_circleContainer_ebpix_1",Y={circleContainer:T},C=({radius:t=5,speedY:c=1,speedX:m=.5,color:p="#6d6d6d",monthMarker:f})=>{const{shouldRender:s,canvasRef:o}=z({monthMarker:f,radius:t,speedY:c,speedX:m,color:p});return s?q.createElement("canvas",{ref:o,className:Y.circleContainer}):null};C.__docgenInfo={description:`Компонент для отображения анимации снежинок поверх содержимого.
@param {number} [radius=5] - Радиус снежинок.
@param {number} [speedY=1] - Скорость падения снежинок.
@param {number} [speedX=0.5] - Горизонтальная скорость движения снежинок.
@param {string} [color='#6d6d6d'] - Цвет снежинок.
@param {0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11} [monthMarker] - Месяц, когда компонент будет отрисовываться.
Если не указан, компонент отображается всегда.
@returns {JSX.Element | null} Canvas с анимацией снежинок.
@example
import {CircleCanvas} from "goncharov-ui/dist/components/CircleCanvas";

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
@default {'#6d6d6d'}`,defaultValue:{value:"'#6d6d6d'",computed:!1}},monthMarker:{required:!1,tsType:{name:"Extract",elements:[{name:"number"},{name:"union",raw:"0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11",elements:[{name:"literal",value:"0"},{name:"literal",value:"1"},{name:"literal",value:"2"},{name:"literal",value:"3"},{name:"literal",value:"4"},{name:"literal",value:"5"},{name:"literal",value:"6"},{name:"literal",value:"7"},{name:"literal",value:"8"},{name:"literal",value:"9"},{name:"literal",value:"10"},{name:"literal",value:"11"}]}],raw:"Extract<number, 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11>"},description:`Месяц, когда компонент будет отрисовываться.
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
11 === Декабрь`}}};const I={title:"components/CircleCanvas",component:C,args:{radius:10,speedY:2,speedX:1,color:"#6d6d6d",monthMarker:void 0}},g=t=>q.createElement(C,{...t}),l=g.bind({});l.args={};const d=g.bind({});d.args={radius:15,speedY:3,color:"rgba(0, 255, 255, 0.6)"};const u=g.bind({});u.args={monthMarker:11};var b,x,E;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:"args => <CircleCanvas {...args} />",...(E=(x=l.parameters)==null?void 0:x.docs)==null?void 0:E.source}}};var y,M,R;d.parameters={...d.parameters,docs:{...(y=d.parameters)==null?void 0:y.docs,source:{originalSource:"args => <CircleCanvas {...args} />",...(R=(M=d.parameters)==null?void 0:M.docs)==null?void 0:R.source}}};var X,k,_;u.parameters={...u.parameters,docs:{...(X=u.parameters)==null?void 0:X.docs,source:{originalSource:"args => <CircleCanvas {...args} />",...(_=(k=u.parameters)==null?void 0:k.docs)==null?void 0:_.source}}};const F=["Default","CustomSnowflakes","OnlyInDecember"];export{d as CustomSnowflakes,l as Default,u as OnlyInDecember,F as __namedExportsOrder,I as default};
