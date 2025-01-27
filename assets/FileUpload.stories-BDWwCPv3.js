import{r as S,R as e}from"./index-C2WPW1L7.js";import{c as g}from"./clsx-B-dksMZM.js";import{B as _}from"./Button-COqm0vcJ.js";const N=({uploadRequest:y,onUploadStart:i,onUploadProgress:t,onUploadSuccess:r,onUploadError:o})=>{const[c,u]=S.useState(null),[p,d]=S.useState(!1),[b,n]=S.useState(null),[m,s]=S.useState(null);return{inputRef:S.useRef(null),selectedFile:c,isUploading:p,uploadStatus:b,uploadError:m,handleFileChange:a=>{a.target.files&&a.target.files.length>0&&(u(a.target.files[0]),t==null||t(null),n(null),s(null),a.target.value="")},handleUpload:async()=>{if(!c)return alert("Выберите файл для загрузки!");d(!0),i==null||i();try{await y(c,a=>{t==null||t(a)}),n("success"),r==null||r()}catch(a){s(a),n("error"),o==null||o(a)}finally{d(!1),u(null)}}}},B="_fileUploadContainer_kuqd0_1",I="_displayInputContainer_kuqd0_6",E="_hiddenInput_kuqd0_11",T="_buttonOnInput_kuqd0_15",x="_buttonLabel_kuqd0_19",L="_fileName_kuqd0_29",M="_buttonUpload_kuqd0_34",z="_progressBarContainer_kuqd0_54",D="_uploadProgressContainer_kuqd0_57",O="_progressBar_kuqd0_54",l={fileUploadContainer:B,displayInputContainer:I,hiddenInput:E,buttonOnInput:T,buttonLabel:x,fileName:L,buttonUpload:M,progressBarContainer:z,uploadProgressContainer:D,progressBar:O},R=({uploadRequest:y,onUploadStart:i,onUploadProgress:t,uploadProgress:r,onUploadSuccess:o,onUploadError:c,renderSuccess:u,renderError:p,buttonLabel:d="Выбрать файл",uploadButtonLabel:b="Загрузить",styles:n={}})=>{const{inputRef:m,selectedFile:s,isUploading:f,uploadStatus:C,uploadError:q,handleFileChange:a,handleUpload:U}=N({uploadRequest:y,onUploadStart:i,onUploadProgress:t,onUploadSuccess:o,onUploadError:c}),h=()=>C==="success"?typeof u=="function"?u(s):u||e.createElement("p",null,"Файл успешно загружен!"):C==="error"?typeof p=="function"?p(q):p||e.createElement("p",null,"Ошибка загрузки файла!"):null;return e.createElement("div",{className:g(l.fileUploadContainer),style:n.container},e.createElement("div",{className:l.displayInputContainer},e.createElement("input",{type:"file",ref:m,onChange:a,className:l.hiddenInput}),e.createElement(_,{size:"medium",className:g(l.buttonLabel),onClick:()=>{var P;return(P=m.current)==null?void 0:P.click()},style:n.button},d),s&&e.createElement("p",{className:g(l.fileName),style:n.fileName},"Выбран файл: ",s.name),e.createElement(_,{size:"medium",className:g(l.buttonUpload),onClick:U,disabled:f||!s,style:n.button},f?"Загрузка...":b)),r!==null&&e.createElement("div",{className:g(l.progressBarContainer),style:n.progressBarContainer},e.createElement("div",{className:g(l.uploadProgressContainer),style:{width:`${r}%`,...n.progressBar}}),e.createElement("p",{className:l.progressBar},r==null?void 0:r.toFixed(2),"%")),h())};R.__docgenInfo={description:`Компонент для загрузки файлов с визуальным прогрессом.
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
import { FileUpload } from 'goncharov-ui/dist/components/FileUpload';

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
\`\`\``,methods:[],displayName:"FileUpload",props:{uploadRequest:{required:!0,tsType:{name:"signature",type:"function",raw:"(file: File, onProgress: (progress: number) => void) => Promise<void>",signature:{arguments:[{type:{name:"File"},name:"file"},{type:{name:"signature",type:"function",raw:"(progress: number) => void",signature:{arguments:[{type:{name:"number"},name:"progress"}],return:{name:"void"}}},name:"onProgress"}],return:{name:"Promise",elements:[{name:"void"}],raw:"Promise<void>"}}},description:""},onUploadStart:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onUploadProgress:{required:!1,tsType:{name:"signature",type:"function",raw:"(progress: Nullable<number>) => void",signature:{arguments:[{type:{name:"union",raw:"T | null",elements:[{name:"number"},{name:"null"}]},name:"progress"}],return:{name:"void"}}},description:""},uploadProgress:{required:!1,tsType:{name:"union",raw:"T | null",elements:[{name:"number"},{name:"null"}]},description:""},onUploadSuccess:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onUploadError:{required:!1,tsType:{name:"signature",type:"function",raw:"(error: unknown) => void",signature:{arguments:[{type:{name:"unknown"},name:"error"}],return:{name:"void"}}},description:""},renderSuccess:{required:!1,tsType:{name:"union",raw:"ReactNode | ((file: File) => ReactNode)",elements:[{name:"ReactNode"},{name:"unknown"}]},description:""},renderError:{required:!1,tsType:{name:"union",raw:"ReactNode | ((error: unknown) => ReactNode)",elements:[{name:"ReactNode"},{name:"unknown"}]},description:""},buttonLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Выбрать файл'",computed:!1}},uploadButtonLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Загрузить'",computed:!1}},styles:{required:!1,tsType:{name:"signature",type:"object",raw:`{
    container?: React.CSSProperties;
    button?: React.CSSProperties;
    progressBarContainer?: React.CSSProperties;
    progressBar?: React.CSSProperties;
    fileName?: React.CSSProperties;
}`,signature:{properties:[{key:"container",value:{name:"ReactCSSProperties",raw:"React.CSSProperties",required:!1}},{key:"button",value:{name:"ReactCSSProperties",raw:"React.CSSProperties",required:!1}},{key:"progressBarContainer",value:{name:"ReactCSSProperties",raw:"React.CSSProperties",required:!1}},{key:"progressBar",value:{name:"ReactCSSProperties",raw:"React.CSSProperties",required:!1}},{key:"fileName",value:{name:"ReactCSSProperties",raw:"React.CSSProperties",required:!1}}]}},description:"",defaultValue:{value:"{}",computed:!1}}}};const J={title:"components/FileUpload",component:R,args:{buttonLabel:"Выбрать файл",uploadButtonLabel:"Загрузить"}},A=y=>{const[i,t]=S.useState(null),r=async o=>{const p=o.size/1048576/1,d=100,b=Math.ceil(p*1e3/d);let n=0;return new Promise(m=>{const s=setInterval(()=>{n++;const f=Math.min(n/b*100,100);t(f),f===100&&(clearInterval(s),m())},d)})};return e.createElement(R,{...y,uploadRequest:r,onUploadProgress:t,uploadProgress:i,renderSuccess:e.createElement("p",{style:{color:"green"}},"Файл загружен успешно!"),renderError:o=>e.createElement("p",{style:{color:"red"}},"Ошибка: ",String(o))})},v=A.bind({});v.args={buttonLabel:"Выбрать файл",uploadButtonLabel:"Загрузить"};var F,k,w;v.parameters={...v.parameters,docs:{...(F=v.parameters)==null?void 0:F.docs,source:{originalSource:`args => {
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
}`,...(w=(k=v.parameters)==null?void 0:k.docs)==null?void 0:w.source}}};const X=["Default"];export{v as Default,X as __namedExportsOrder,J as default};
