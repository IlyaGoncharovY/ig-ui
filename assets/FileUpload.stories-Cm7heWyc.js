import{r as p,R as e}from"./index-C2WPW1L7.js";import{c as u}from"./clsx-B-dksMZM.js";const E="_fileUploadContainer_kuqd0_1",T="_displayInputContainer_kuqd0_6",x="_hiddenInput_kuqd0_11",L="_buttonOnInput_kuqd0_15",M="_buttonLabel_kuqd0_19",z="_fileName_kuqd0_29",D="_buttonUpload_kuqd0_34",O="_progressBarContainer_kuqd0_54",A="_uploadProgressContainer_kuqd0_57",V="_progressBar_kuqd0_54",t={fileUploadContainer:E,displayInputContainer:T,hiddenInput:x,buttonOnInput:L,buttonLabel:M,fileName:z,buttonUpload:D,progressBarContainer:O,uploadProgressContainer:A,progressBar:V},R=({uploadRequest:y,onUploadStart:c,onUploadProgress:r,uploadProgress:s,onUploadSuccess:l,onUploadError:f,renderSuccess:g,renderError:d,buttonLabel:S="Выбрать файл",uploadButtonLabel:v="Загрузить",styles:a={}})=>{const[o,b]=p.useState(null),[i,q]=p.useState(!1),[P,C]=p.useState(null),[U,_]=p.useState(null),k=p.useRef(null),I=n=>{n.target.files&&n.target.files.length>0&&(b(n.target.files[0]),r==null||r(null),C(null),_(null),n.target.value="")},h=async()=>{if(!o)return alert("Выберите файл для загрузки!");q(!0),c==null||c();try{await y(o,n=>{r==null||r(n)}),C("success"),l==null||l()}catch(n){_(n),C("error"),f==null||f(n)}finally{q(!1),b(null)}},B=()=>P==="success"?typeof g=="function"?g(o):g||e.createElement("p",null,"Файл успешно загружен!"):P==="error"?typeof d=="function"?d(U):d||e.createElement("p",null,"Ошибка загрузки файла!"):null;return e.createElement("div",{className:u(t.fileUploadContainer),style:a.container},e.createElement("div",{className:t.displayInputContainer},e.createElement("input",{type:"file",ref:k,onChange:I,className:t.hiddenInput}),e.createElement("button",{type:"button",onClick:()=>{var n;return(n=k.current)==null?void 0:n.click()},className:u(t.buttonLabel),style:a.button},S),o&&e.createElement("p",{className:u(t.fileName),style:a.fileName},"Выбран файл: ",o.name),e.createElement("button",{type:"button",onClick:h,disabled:i||!o,className:u(t.buttonUpload,{[t.disabled]:i||!o}),style:a.button},i?"Загрузка...":v)),s!==null&&e.createElement("div",{className:u(t.progressBarContainer),style:a.progressBarContainer},e.createElement("div",{className:u(t.uploadProgressContainer),style:{width:`${s}%`,...a.progressBar}}),e.createElement("p",{className:t.progressBar},s==null?void 0:s.toFixed(2),"%")),B())};R.__docgenInfo={description:`Компонент для загрузки файлов с визуальным прогрессом.
@param {Function} uploadRequest - Функция для выполнения запроса загрузки.
@param {Function} [onUploadStart] - Callback при старте загрузки.
@param {Function} [onUploadProgress] - Callback для отслеживания прогресса загрузки.
@param {number | null} [uploadProgress] - Текущее значение прогресса.
@param {Function} [onUploadSuccess] - Callback при успешной загрузке.
@param {Function} [onUploadError] - Callback при ошибке загрузки.
@param {ReactNode | Function} [renderSuccess] - Компонент или функция отображения успешной загрузки.
@param {ReactNode | Function} [renderError] - Компонент или функция отображения ошибок.
@param {string} [buttonLabel='Выбрать файл'] - Текст кнопки выбора файла.
@param {string} [uploadButtonLabel='Загрузить'] - Текст кнопки загрузки.
@param {object} [styles] - Кастомные стили для элементов.
@returns {JSX.Element} Компонент загрузки файла.
@example
\`\`\`tsx
import React, { useState } from 'react';
import axios from 'axios';
import { FileUpload } from 'goncharov-ui/components/FileUpload';

const uploadFileWithAxios = async (file: File, onProgress: (progress: number) => void) => {
  const formData = new FormData();
  formData.append('file', file);

  await axios.post('https://your-server-url.com/upload', formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
    onUploadProgress: (event) => {
      if (event.total) {
        const progress = Math.round((event.loaded / event.total) * 100);
        onProgress(progress);
      }
    },
  });
};

const App = () => {
  const [uploadProgress, setUploadProgress] = useState<number | null>(null);

     const uploadRequest = async (file: File) => {
         await uploadFileWithAxios(file, setUploadProgress);
     };

  return (
    <FileUpload
      uploadRequest={uploadRequest}
      uploadProgress={uploadProgress}
      onUploadProgress={setUploadProgress}
      renderSuccess={<p>Файл загружен успешно!</p>}
      renderError={(error) => <p>Ошибка: {error.message}</p>}
    />
  );
};
\`\`\``,methods:[],displayName:"FileUpload",props:{uploadRequest:{required:!0,tsType:{name:"signature",type:"function",raw:"(file: File, onProgress: (progress: number) => void) => Promise<void>",signature:{arguments:[{type:{name:"File"},name:"file"},{type:{name:"signature",type:"function",raw:"(progress: number) => void",signature:{arguments:[{type:{name:"number"},name:"progress"}],return:{name:"void"}}},name:"onProgress"}],return:{name:"Promise",elements:[{name:"void"}],raw:"Promise<void>"}}},description:""},onUploadStart:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onUploadProgress:{required:!1,tsType:{name:"signature",type:"function",raw:"(progress: number | null) => void",signature:{arguments:[{type:{name:"union",raw:"number | null",elements:[{name:"number"},{name:"null"}]},name:"progress"}],return:{name:"void"}}},description:""},uploadProgress:{required:!1,tsType:{name:"union",raw:"number | null",elements:[{name:"number"},{name:"null"}]},description:""},onUploadSuccess:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onUploadError:{required:!1,tsType:{name:"signature",type:"function",raw:"(error: unknown) => void",signature:{arguments:[{type:{name:"unknown"},name:"error"}],return:{name:"void"}}},description:""},renderSuccess:{required:!1,tsType:{name:"union",raw:"ReactNode | ((file: File) => ReactNode)",elements:[{name:"ReactNode"},{name:"unknown"}]},description:""},renderError:{required:!1,tsType:{name:"union",raw:"ReactNode | ((error: unknown) => ReactNode)",elements:[{name:"ReactNode"},{name:"unknown"}]},description:""},buttonLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Выбрать файл'",computed:!1}},uploadButtonLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Загрузить'",computed:!1}},styles:{required:!1,tsType:{name:"signature",type:"object",raw:`{
    container?: React.CSSProperties;
    button?: React.CSSProperties;
    progressBarContainer?: React.CSSProperties;
    progressBar?: React.CSSProperties;
    fileName?: React.CSSProperties;
}`,signature:{properties:[{key:"container",value:{name:"ReactCSSProperties",raw:"React.CSSProperties",required:!1}},{key:"button",value:{name:"ReactCSSProperties",raw:"React.CSSProperties",required:!1}},{key:"progressBarContainer",value:{name:"ReactCSSProperties",raw:"React.CSSProperties",required:!1}},{key:"progressBar",value:{name:"ReactCSSProperties",raw:"React.CSSProperties",required:!1}},{key:"fileName",value:{name:"ReactCSSProperties",raw:"React.CSSProperties",required:!1}}]}},description:"",defaultValue:{value:"{}",computed:!1}}}};const X={title:"components/FileUpload",component:R,args:{buttonLabel:"Выбрать файл",uploadButtonLabel:"Загрузить"}},j=y=>{const[c,r]=p.useState(null),s=async l=>{const d=l.size/1048576/1,S=100,v=Math.ceil(d*1e3/S);let a=0;return new Promise(o=>{const b=setInterval(()=>{a++;const i=Math.min(a/v*100,100);r(i),i===100&&(clearInterval(b),o())},S)})};return e.createElement(R,{...y,uploadRequest:s,onUploadProgress:r,uploadProgress:c,renderSuccess:e.createElement("p",{style:{color:"green"}},"Файл загружен успешно!"),renderError:l=>e.createElement("p",{style:{color:"red"}},"Ошибка: ",String(l))})},m=j.bind({});m.args={buttonLabel:"Выбрать файл",uploadButtonLabel:"Загрузить"};var w,F,N;m.parameters={...m.parameters,docs:{...(w=m.parameters)==null?void 0:w.docs,source:{originalSource:`args => {
  const [uploadProgress, setUploadProgress] = useState<number | null>(null);
  const fakeUploadRequest = async (file: File) => {
    const fileSizeInMB = file.size / (1024 * 1024);
    const uploadSpeed = 1;
    const totalUploadTime = fileSizeInMB / uploadSpeed;
    const interval = 100;
    const totalSteps = Math.ceil(totalUploadTime * 1000 / interval);
    let currentStep = 0;
    return new Promise<void>(resolve => {
      const intervalId = setInterval(() => {
        currentStep++;
        const progress = Math.min(currentStep / totalSteps * 100, 100);
        setUploadProgress(progress);
        if (progress === 100) {
          clearInterval(intervalId);
          resolve();
        }
      }, interval);
    });
  };
  return <FileUpload {...args} uploadRequest={fakeUploadRequest} onUploadProgress={setUploadProgress} // Для передачи прогресса
  uploadProgress={uploadProgress} // Передаем прогресс
  renderSuccess={<p style={{
    color: 'green'
  }}>Файл загружен успешно!</p>} renderError={error => <p style={{
    color: 'red'
  }}>Ошибка: {String(error)}</p>} />;
}`,...(N=(F=m.parameters)==null?void 0:F.docs)==null?void 0:N.source}}};const $=["Default"];export{m as Default,$ as __namedExportsOrder,X as default};
