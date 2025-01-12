import{r as i,R as r}from"./index-C2WPW1L7.js";import{c as _}from"./clsx-B-dksMZM.js";const y="_infiniteScrollContainer_1miz1_1",E="_loaderContainer_1miz1_7",b="_observerContainer_1miz1_13",S={infiniteScrollContainer:y,loaderContainer:E,observerContainer:b},M=({children:u,loadMore:t,hasMore:e,loader:l,className:c,...a})=>{const p=i.useRef(null);return i.useEffect(()=>{const n=p.current,d=new IntersectionObserver(f=>{f[0].isIntersecting&&e&&t()});return n&&d.observe(n),()=>{n&&d.unobserve(n)}},[t,e]),r.createElement("div",{className:_(S.infiniteScrollContainer,c),...a},u,e&&l&&r.createElement("div",{className:_(S.loaderContainer,c)},l),r.createElement("div",{ref:p,className:S.observer}))};M.__docgenInfo={description:`InfiniteScrollWrapper компонент для организации бесконечного скролла.
@param {ReactNode} children - Дочерние элементы, которые будут обёрнуты.
@param {() => Promise<T>} loadMore - Функция для загрузки дополнительных данных.
@param {boolean} hasMore - Указывает, есть ли еще данные для загрузки.
@param {ReactNode} [loader] - Компонент для отображения загрузчика.
@param {string} [className] - Дополнительные классы CSS для контейнера.
@param {HTMLAttributes<HTMLDivElement>} props - Дополнительные атрибуты контейнера.
@returns {JSX.Element} Компонент обёртки с бесконечным скроллом.
@example
// Пример использования:
import { InfiniteScrollWrapper } from 'goncharov-ui/components/InfiniteScrollWrapper';
import { useState } from 'react';

const App = () => {
  const [hasMore, setHasMore] = useState<boolean>(true);
  const [data, setData] = useState<string[]>([]);

  const fetchMoreData = async () => {
    const newItems = await fetch('/api/items?page=2').then((res) => res.json());
    setData((prev) => [...prev, ...newItems]);
    if (newItems.length === 0) {
      setHasMore(false);
    }
  };

  return (
    <InfiniteScrollWrapper
      loadMore={fetchMoreData}
      hasMore={hasMore}
      loader={<div>Loading...</div>}
      className="custom-class"
    >
      <ul>
        {data.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </InfiniteScrollWrapper>
  );
};`,methods:[],displayName:"InfiniteScrollWrapper",props:{children:{required:!0,tsType:{name:"ReactNode"},description:"Дочерние элементы, которые будут обёрнуты."},loadMore:{required:!0,tsType:{name:"signature",type:"function",raw:"() => Promise<T>",signature:{arguments:[],return:{name:"Promise",elements:[{name:"T"}],raw:"Promise<T>"}}},description:"Функция для загрузки дополнительных данных."},hasMore:{required:!0,tsType:{name:"boolean"},description:"Указывает, есть ли еще данные для загрузки."},loader:{required:!1,tsType:{name:"ReactNode"},description:"Компонент для отображения загрузчика."},className:{required:!1,tsType:{name:"string"},description:"Дополнительные CSS классы для контейнера."}},composes:["HTMLAttributes"]};const P={title:"components/InfiniteScrollWrapper",component:M,args:{hasMore:!0,loader:r.createElement("div",{style:{textAlign:"center",color:"#6d6d6d"}},"Loading...")},parameters:{controls:{exclude:[]}}},A=u=>{const t=Array.from({length:100},(m,o)=>`Item ${o+1}`),e=10,[l,c]=i.useState(t.slice(0,e)),[a,p]=i.useState(1),[n,d]=i.useState(!0),f=async()=>new Promise(m=>{setTimeout(()=>{const o=t.slice(a*e,(a+1)*e);c(g=>[...g,...o]),p(g=>g+1),(a+1)*e>=t.length&&d(!1),m()},1e3)});return r.createElement(M,{...u,loadMore:f,hasMore:n},r.createElement("ul",{style:{padding:0,margin:0,listStyle:"none",display:"flex",flexDirection:"column",gap:"8px"}},l.map((m,o)=>r.createElement("li",{key:o,style:{padding:"8px",backgroundColor:"#efdf71",border:"1px solid #ddd",borderRadius:"4px"}},m))))},s=A.bind({});s.args={};var v,x,I;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`args => {
  const MOCK_DATA = Array.from({
    length: 100
  }, (_, i) => \`Item \${i + 1}\`);
  const PAGE_SIZE = 10;
  const [data, setData] = useState<string[]>(MOCK_DATA.slice(0, PAGE_SIZE));
  const [page, setPage] = useState<number>(1);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const loadMore = async (): Promise<void> => {
    return new Promise(resolve => {
      setTimeout(() => {
        const nextPageData = MOCK_DATA.slice(page * PAGE_SIZE, (page + 1) * PAGE_SIZE);
        setData(prevData => [...prevData, ...nextPageData]);
        setPage(prevPage => prevPage + 1);
        if ((page + 1) * PAGE_SIZE >= MOCK_DATA.length) {
          setHasMore(false);
        }
        resolve();
      }, 1000);
    });
  };
  return <InfiniteScrollWrapper {...args} loadMore={loadMore} hasMore={hasMore}>
      <ul style={{
      padding: 0,
      margin: 0,
      listStyle: 'none',
      display: 'flex',
      flexDirection: 'column',
      gap: '8px'
    }}>
        {data.map((item, index) => <li key={index} style={{
        padding: '8px',
        backgroundColor: '#efdf71',
        border: '1px solid #ddd',
        borderRadius: '4px'
      }}>
            {item}
          </li>)}
      </ul>
    </InfiniteScrollWrapper>;
}`,...(I=(x=s.parameters)==null?void 0:x.docs)==null?void 0:I.source}}};const C=["Default"];export{s as Default,C as __namedExportsOrder,P as default};
