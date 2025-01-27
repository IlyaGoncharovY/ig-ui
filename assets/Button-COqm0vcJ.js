import{R as n}from"./index-C2WPW1L7.js";import{c as o}from"./clsx-B-dksMZM.js";const s="_buttonContainer_y378p_1",r="_small_y378p_33",u="_medium_y378p_38",i="_large_y378p_43",e={buttonContainer:s,small:r,medium:u,large:i},c=({children:t,className:a="",size:l="medium",...m})=>n.createElement("button",{className:o(e.buttonContainer,e[l],a),...m},t);c.__docgenInfo={description:`Button компонент для повторного использования элементов пользовательского интерфейса.
@param {React.ReactNode} children - Содержимое, отображаемое внутри кнопки.
@param {string} [className] - Дополнительные классы CSS для стилизации.
@param {'small' | 'medium' | 'large'} [size='medium'] - Размер кнопки.
@param {ButtonHTMLAttributes<HTMLButtonElement>} props - Дополнительные атрибуты кнопок.
@returns {JSX.Element} Стилизованный компонент кнопки.
@example
// Пример использования:
import {Button} from "goncharov-ui/dist/components/Button";
<Button size="large" onClick={() => console.log('Clicked!')}>
  Click Me
</Button>`,methods:[],displayName:"Button",props:{className:{required:!1,tsType:{name:"string"},description:"Дополнительные CSS классы для кнопки.",defaultValue:{value:"''",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:"Размер кнопки: small, medium или large.",defaultValue:{value:"'medium'",computed:!1}}},composes:["ButtonHTMLAttributes"]};export{c as B};
