import{r as c,R as o}from"./index-C2WPW1L7.js";import{c as g}from"./clsx-B-dksMZM.js";const b=({hasMore:s,loadMore:t})=>{const e=c.useRef(null);return c.useEffect(()=>{const r=e.current,n=new IntersectionObserver(a=>{a[0].isIntersecting&&s&&t()});return r&&n.observe(r),()=>{r&&n.unobserve(r)}},[t,s]),{observerRef:e}},y="_infiniteScrollContainer_1miz1_1",E="_loaderContainer_1miz1_7",A="_observerContainer_1miz1_13",u={infiniteScrollContainer:y,loaderContainer:E,observerContainer:A},f=({children:s,loadMore:t,hasMore:e,loader:r,className:n,...a})=>{const{observerRef:d}=b({hasMore:e,loadMore:t});return o.createElement("div",{className:g(u.infiniteScrollContainer,n),...a},s,e&&r&&o.createElement("div",{className:g(u.loaderContainer,n)},r),o.createElement("div",{ref:d,className:u.observer}))};f.__docgenInfo={description:`InfiniteScrollWrapper компонент для организации бесконечного скролла.
@param {ReactNode} children - Дочерние элементы, которые будут обёрнуты.
@param {() => Promise<T>} loadMore - Функция для загрузки дополнительных данных.
@param {boolean} hasMore - Указывает, есть ли еще данные для загрузки.
@param {ReactNode} [loader] - Компонент для отображения загрузчика.
@param {string} [className] - Дополнительные классы CSS для контейнера.
@param {HTMLAttributes<HTMLDivElement>} props - Дополнительные атрибуты контейнера.
@returns {JSX.Element} Компонент обёртки с бесконечным скроллом.
@example
// Пример использования:
import { InfiniteScrollWrapper } from 'goncharov-ui/dist/components/InfiniteScrollWrapper';
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
};`,methods:[],displayName:"InfiniteScrollWrapper",props:{children:{required:!0,tsType:{name:"ReactNode"},description:"Дочерние элементы, которые будут обёрнуты."},loadMore:{required:!0,tsType:{name:"signature",type:"function",raw:"() => Promise<T>",signature:{arguments:[],return:{name:"Promise",elements:[{name:"T"}],raw:"Promise<T>"}}},description:"Функция для загрузки дополнительных данных."},hasMore:{required:!0,tsType:{name:"boolean"},description:"Указывает, есть ли еще данные для загрузки."},loader:{required:!1,tsType:{name:"ReactNode"},description:"Компонент для отображения загрузчика."},className:{required:!1,tsType:{name:"string"},description:"Дополнительные CSS классы для контейнера."}},composes:["HTMLAttributes"]};const C={title:"components/InfiniteScrollWrapper",component:f,args:{hasMore:!0,loader:o.createElement("div",{style:{textAlign:"center",color:"#6d6d6d"}},"Loading...")},parameters:{controls:{exclude:[]}}},D=s=>{const t=Array.from({length:100},(p,i)=>`Item ${i+1}`),e=10,[r,n]=c.useState(t.slice(0,e)),[a,d]=c.useState(1),[_,x]=c.useState(!0),I=async()=>new Promise(p=>{setTimeout(()=>{const i=t.slice(a*e,(a+1)*e);n(m=>[...m,...i]),d(m=>m+1),(a+1)*e>=t.length&&x(!1),p()},1e3)});return o.createElement(f,{...s,loadMore:I,hasMore:_},o.createElement("ul",{style:{padding:0,margin:0,listStyle:"none",display:"flex",flexDirection:"column",gap:"8px"}},r.map((p,i)=>o.createElement("li",{key:i,style:{padding:"8px",backgroundColor:"#efdf71",border:"1px solid #ddd",borderRadius:"4px"}},p))))},l=D.bind({});l.args={};var S,M,v;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`args => {
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
}`,...(v=(M=l.parameters)==null?void 0:M.docs)==null?void 0:v.source}}};const T=["Default"];export{l as Default,T as __namedExportsOrder,C as default};
