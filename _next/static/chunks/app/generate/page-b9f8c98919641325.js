(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[811],{2934:function(e,t,r){Promise.resolve().then(r.bind(r,9227))},9227:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return Q}});var a=r(9268),l=r(5334),s=r(6006),n=r(7804),i=r(7346),o=r(1578),c=r(414),d=r(2561),h=r(4475);let u={fog:{intensity:100,on:!0},noiseIterations:8,amplitude:3,frequency:2,waterLevel:3,waterTemplate:!0,waterOpacity:.7,waterColor:"#d4f1f9",width:400,height:400,sandSolidColor:!0,sandColor:"#C2B280",grassSolidColor:!0,grassColor:"#567d46",rockSolidColor:!0,rockColor:"#e8dd8e"},x=(0,d.Ue)()((0,h.tJ)(e=>({...u,updateFog:(t,r)=>e({fog:{intensity:t,on:r}}),updateValue:(t,r)=>e(e=>({...e,[t]:r})),resetTerrain:()=>e(()=>({...u}))}),{name:"config-storage"}));var g={src:"/_next/static/media/waterNormal3.60fa5dc1.jpeg",height:1e3,width:1e3,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABAEBAQAAAAAAAAAAAAAAAAAABAb/2gAMAwEAAhADEAAAAKhZn//EABcQAQADAAAAAAAAAAAAAAAAABEAATH/2gAIAQEAAT8AXaJ//8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAgEBPwB//8QAFREBAQAAAAAAAAAAAAAAAAAAEQD/2gAIAQMBAT8AS//Z",blurWidth:8,blurHeight:8};(0,o.e)({Water:c.B});var m=()=>{let e=(0,s.useRef)(null);(0,o.z)(e=>e.gl);let{waterLevel:t,waterTemplate:r,waterColor:l,waterOpacity:i,height:c,width:d}=x(),h=(0,o.D)(n.TextureLoader,g.src);h.wrapS=h.wrapT=n.RepeatWrapping;let u=(0,s.useMemo)(()=>new n.PlaneGeometry(d,c),[d,c]),m=(0,s.useMemo)(()=>({textureWidth:512,textureHeight:512,waterNormals:h,sunDirection:new n.Vector3,sunColor:"yellow",waterColor:410227,distortionScale:2,fog:!1}),[h]);return(0,o.A)((t,r)=>{e.current&&(e.current.material.uniforms.time.value+=r/4)}),(0,a.jsx)(a.Fragment,{children:r?(0,a.jsx)("water",{position:[0,t-10,0],ref:e,args:[u,m],"rotation-x":-Math.PI/2,transparent:!0,opacity:.5}):(0,a.jsxs)("mesh",{position:[0,t-10,0],rotation:[-(.5*Math.PI),0,0],children:[(0,a.jsx)("planeGeometry",{args:[d,c]}),(0,a.jsx)("meshStandardMaterial",{color:l,transparent:!0,opacity:i/10})]})})};let p=[[.475,.731,.373],[.365,.645,.278],[.298,.543,.224],[.553,.853,.463],[.42,.735,.349]],f=[[1,.933,.745],[.918,.847,.62],[.867,.769,.518],[.737,.659,.408],[.627,.553,.333]],A=[[.18,.18,.18],[.275,.275,.275],[.285,.285,.285],[.39,.39,.39],[.17,.17,.17]];var j=e=>{let{id:t}=e,r=(0,s.useRef)(null),{fog:l,noiseIterations:o,amplitude:c,frequency:d,height:h,width:u,sandSolidColor:g,sandColor:j,grassSolidColor:b,grassColor:y,rockSolidColor:w,rockColor:v}=x(),C=+h,N=+u,k=()=>{if(r.current){let e=[],t=Array(N+1).fill(0).map(()=>Array(C+1).fill(0)),a=(0,i.hA)();for(let e=1;e<o;e++)for(let r=0;r<=N;r++)for(let l=0;l<=C;l++){let s=d/1e3*e,n=a(r*s,l*s)*c,i=n*n*n;t[r][l]=t[r][l]+i}for(let r=0;r<N;r++)for(let a=0;a<C;a++){let l=r,s=a,i=t[r][a],o=t[r][a+1],c=t[r+1][a],d=t[r+1][a+1];e.push(new n.Vector3(l,i,s),new n.Vector3(l,o,s+1),new n.Vector3(l+1,c,s),new n.Vector3(l+1,c,s),new n.Vector3(l,o,s+1),new n.Vector3(l+1,d,s+1))}return r.current.geometry.setFromPoints(e),e}return[]},[E,M]=(0,s.useState)([new n.Vector3]),F=e=>{if(r.current){let h=C*N*6,u=e=>{let t=Math.floor(Math.random()*e.length);return e[t]};r.current.geometry.setAttribute("color",new n.BufferAttribute(new Float32Array(3*(h||0)),3));for(let x=0;x<(h||0);x++){var t,a,l,s,i,o,d;let h=e[x];if(h.y>c**3)null===(t=r.current)||void 0===t||t.geometry.attributes.color.setXYZ(x,1,1,1);else if(h.y>2.5){if(w){let e=u(A);null===(l=r.current)||void 0===l||l.geometry.attributes.color.setXYZ(x,e[0],e[1],e[2])}else{let e=v.replace("#",""),t=parseInt(e,16),l=new n.Color(t);null===(a=r.current)||void 0===a||a.geometry.attributes.color.setXYZ(x,l.r,l.g,l.b)}}else if(h.y>-2){if(b){let e=u(p);null===(i=r.current)||void 0===i||i.geometry.attributes.color.setXYZ(x,e[0],e[1],e[2])}else{let e=y.replace("#",""),t=parseInt(e,16),a=new n.Color(t);null===(s=r.current)||void 0===s||s.geometry.attributes.color.setXYZ(x,a.r,a.g,a.b)}}else if(g){let e=u(f);null===(d=r.current)||void 0===d||d.geometry.attributes.color.setXYZ(x,e[0],e[1],e[2])}else{let e=j.replace("#",""),t=parseInt(e,16),a=new n.Color(t);null===(o=r.current)||void 0===o||o.geometry.attributes.color.setXYZ(x,a.r,a.g,a.b)}}r.current.geometry.attributes.color.needsUpdate=!0,r.current.geometry.computeVertexNormals()}};return(0,s.useEffect)(()=>{if(r.current){let e=k();M(e)}},[]),(0,s.useEffect)(()=>{E.length>10&&F(E)},[E.length,g,j,y,b,v,w]),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("mesh",{ref:r,position:[-N/2,0,-C/2],castShadow:!0,receiveShadow:!0,children:[(0,a.jsx)("bufferGeometry",{}),(0,a.jsx)("meshStandardMaterial",{vertexColors:!0})]}),l.on?(0,a.jsx)("fog",{attach:"fog",color:"#e8e8e8",near:10,far:800}):null,(0,a.jsx)(m,{})]})},b=r(7011),y=r(304),w=r(1694);let v=e=>{let t="",r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",a=r.length,l=0;for(;l<e;)t+=r.charAt(Math.floor(Math.random()*a)),l+=1;return t};var C=r(7743),N=r(7163),k=e=>{let{setMenuOpen:t,menuOpen:r}=e,{updateValue:l,waterLevel:s,waterTemplate:n,waterColor:i,waterOpacity:o}=x();return(0,a.jsxs)("fieldset",{className:"mt-0 bg-[#AFCBFF] rounded-md p-2 shadow-md",children:[(0,a.jsx)("button",{onClick:()=>t(e=>({...e,water:!e.water})),"aria-label":"open water options",className:"flex justify-between w-full",children:(0,a.jsx)("h2",{className:"text-lg text-[#171219]",children:"Water"})}),(0,a.jsx)(C.M,{children:r.water&&(0,a.jsxs)(N.E.div,{animate:{opacity:1,height:"auto",transition:{opacity:{delay:.1}}},initial:{opacity:0,height:0},exit:{height:0,opacity:0,transition:{height:{delay:.1}}},children:[(0,a.jsx)("div",{children:(0,a.jsxs)("label",{className:"relative inline-flex items-center mb-5 mt-2 cursor-pointer",children:[(0,a.jsx)("input",{type:"checkbox",checked:!n,onChange:()=>l("waterTemplate",!n),className:"sr-only peer"}),(0,a.jsx)("div",{className:"w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"}),(0,a.jsx)("span",{className:"ml-3 text-sm font-medium text-[#171219]",children:"Solid Colour"})]})}),(0,a.jsx)(C.M,{children:!n&&(0,a.jsxs)(N.E.div,{animate:{opacity:1,height:"auto",transition:{opacity:{delay:.1}}},initial:{opacity:0,height:0},exit:{height:0,opacity:0,transition:{height:{delay:.1}}},children:[(0,a.jsx)("div",{className:"flex items-center mb-4",children:(0,a.jsxs)("label",{className:"flex items-center text-[#171219]",children:[(0,a.jsx)("input",{className:"mr-4",type:"color",value:i,onChange:e=>l("waterColor",e.target.value)}),"Colour"]})}),(0,a.jsx)("div",{children:(0,a.jsxs)("label",{className:"text-[#171219]",children:["Water Opacity",(0,a.jsx)("input",{className:"w-full p-1 rounded-sm text-black",type:"range",min:"0",max:"10",value:o,onChange:e=>l("waterOpacity",e.target.value)})]})})]})}),(0,a.jsx)("div",{children:(0,a.jsxs)("label",{className:"text-[#171219]",children:["Water Level",(0,a.jsx)("input",{className:"w-full p-1 rounded-sm text-black",type:"range",min:"-10",max:"30",value:s,onChange:e=>l("waterLevel",e.target.value)})]})})]},"waterControls")})]})},E=r(2801),M=e=>{let{menuOpen:t,setMenuOpen:r}=e,{fog:l,updateFog:s,noiseIterations:n,updateValue:i,amplitude:o,frequency:c}=x();return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("button",{onClick:()=>r(e=>({...e,environment:!e.environment})),"aria-label":"open environment options",className:"flex justify-between w-full mt-4",children:[(0,a.jsx)("h2",{className:"text-lg",children:"Environment"}),(0,a.jsx)(E.RiI,{})]}),(0,a.jsx)(C.M,{children:t.environment&&(0,a.jsxs)(N.E.div,{animate:{opacity:1,height:"auto",transition:{opacity:{delay:.1}}},initial:{opacity:0,height:0},exit:{height:0,opacity:0,transition:{height:{delay:.1}}},children:[(0,a.jsxs)("div",{className:"grid grid-cols-2 gap-4",children:[(0,a.jsxs)("label",{children:["Noise Cycles",(0,a.jsx)("input",{className:"w-full p-1 rounded-sm text-black",type:"number",value:n,onChange:e=>i("noiseIterations",e.target.value)})]}),(0,a.jsxs)("label",{className:"flex flex-col items-center  text-center",children:["Fog",(0,a.jsx)("input",{className:"mt-1",type:"checkbox",id:"fog",name:"fog",checked:l.on,onChange:()=>s(l.intensity,!l.on)})]})]}),(0,a.jsxs)("div",{className:"grid grid-cols-2 gap-4 mt-4",children:[(0,a.jsx)("div",{children:(0,a.jsxs)("label",{children:["Amplitude",(0,a.jsx)("input",{className:"w-full p-1 rounded-sm text-black",type:"number",value:o,onChange:e=>i("amplitude",e.target.value)})]})}),(0,a.jsx)("div",{children:(0,a.jsxs)("label",{children:["Frequency",(0,a.jsx)("input",{className:"w-full p-1 rounded-sm text-black",type:"number",value:c,onChange:e=>i("frequency",e.target.value)})]})})]})]},"waterControls")})]})},F=e=>{let{menuOpen:t,setMenuOpen:r}=e,{sandColor:l,sandSolidColor:s,updateValue:n}=x();return(0,a.jsxs)("div",{className:"bg-[#AFCBFF] rounded-md p-2",children:[(0,a.jsx)("button",{onClick:()=>r(e=>({...e,sand:!e.sand})),"aria-label":"open environment options",className:"flex justify-between w-full",children:(0,a.jsx)("h2",{className:"text-lg text-[#171219]",children:"Sand"})}),(0,a.jsx)(C.M,{children:t.sand&&(0,a.jsx)(N.E.div,{animate:{opacity:1,height:"auto",transition:{opacity:{delay:.1}}},initial:{opacity:0,height:0},exit:{height:0,opacity:0,transition:{height:{delay:.1}}},children:(0,a.jsxs)("div",{className:"",children:[(0,a.jsx)("div",{children:(0,a.jsxs)("label",{className:"relative inline-flex items-center mb-5 mt-2 cursor-pointer",children:[(0,a.jsx)("input",{type:"checkbox",checked:!s,onChange:e=>n("sandSolidColor",!s),className:"sr-only peer"}),(0,a.jsx)("div",{className:"w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"}),(0,a.jsx)("span",{className:"ml-3 text-sm font-medium text-[#171219]",children:"Solid Colour"})]})}),(0,a.jsx)(C.M,{children:!s&&(0,a.jsx)(N.E.div,{animate:{opacity:1,height:"auto",transition:{opacity:{delay:.1}}},initial:{opacity:0,height:0},exit:{height:0,opacity:0,transition:{height:{delay:.1}}},children:(0,a.jsxs)("label",{className:"text-[#171219] flex items-center",children:[(0,a.jsx)("input",{className:"mr-4",type:"color",value:l,onChange:e=>n("sandColor",e.target.value)}),"Colour"]})})})]})},"waterControls")})]})},S=e=>{let{menuOpen:t,setMenuOpen:r}=e,{grassColor:l,grassSolidColor:s,updateValue:n}=x();return(0,a.jsxs)("div",{className:"bg-[#AFCBFF] rounded-md p-2",children:[(0,a.jsx)("button",{onClick:()=>r(e=>({...e,grass:!e.grass})),"aria-label":"open environment options",className:"flex justify-between w-full",children:(0,a.jsx)("h2",{className:"text-lg text-[#171219]",children:"Grass"})}),(0,a.jsx)(C.M,{children:t.grass&&(0,a.jsx)(N.E.div,{animate:{opacity:1,height:"auto",transition:{opacity:{delay:.1}}},initial:{opacity:0,height:0},exit:{height:0,opacity:0,transition:{height:{delay:.1}}},children:(0,a.jsxs)("div",{className:"",children:[(0,a.jsx)("div",{children:(0,a.jsxs)("label",{className:"relative inline-flex items-center mb-5 mt-2 cursor-pointer",children:[(0,a.jsx)("input",{type:"checkbox",checked:!s,onChange:e=>n("grassSolidColor",!s),className:"sr-only peer"}),(0,a.jsx)("div",{className:"w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"}),(0,a.jsx)("span",{className:"ml-3 text-sm font-medium text-[#171219]",children:"Solid Colour"})]})}),(0,a.jsx)(C.M,{children:!s&&(0,a.jsx)(N.E.div,{animate:{opacity:1,height:"auto",transition:{opacity:{delay:.1}}},initial:{opacity:0,height:0},exit:{height:0,opacity:0,transition:{height:{delay:.1}}},children:(0,a.jsxs)("label",{className:"text-[#171219] flex items-center",children:[(0,a.jsx)("input",{className:"mr-4",type:"color",value:l,onChange:e=>n("grassColor",e.target.value)}),"Colour"]})})})]})},"waterControls")})]})},B=e=>{let{menuOpen:t,setMenuOpen:r}=e,{rockColor:l,rockSolidColor:s,updateValue:n}=x();return(0,a.jsxs)("div",{className:"bg-[#AFCBFF] rounded-md p-2",children:[(0,a.jsx)("button",{onClick:()=>r(e=>({...e,grass:!e.grass})),"aria-label":"open environment options",className:"flex justify-between w-full",children:(0,a.jsx)("h2",{className:"text-lg text-[#171219]",children:"Rock"})}),(0,a.jsx)(C.M,{children:t.grass&&(0,a.jsx)(N.E.div,{animate:{opacity:1,height:"auto",transition:{opacity:{delay:.1}}},initial:{opacity:0,height:0},exit:{height:0,opacity:0,transition:{height:{delay:.1}}},children:(0,a.jsxs)("div",{className:"",children:[(0,a.jsx)("div",{children:(0,a.jsxs)("label",{className:"relative inline-flex items-center mb-5 mt-2 cursor-pointer",children:[(0,a.jsx)("input",{type:"checkbox",checked:!s,onChange:e=>n("rockSolidColor",!s),className:"sr-only peer"}),(0,a.jsx)("div",{className:"w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"}),(0,a.jsx)("span",{className:"ml-3 text-sm font-medium text-[#171219]",children:"Solid Colour"})]})}),(0,a.jsx)(C.M,{children:!s&&(0,a.jsx)(N.E.div,{animate:{opacity:1,height:"auto",transition:{opacity:{delay:.1}}},initial:{opacity:0,height:0},exit:{height:0,opacity:0,transition:{height:{delay:.1}}},children:(0,a.jsxs)("label",{className:"text-[#171219] flex items-center",children:[(0,a.jsx)("input",{className:"mr-4",type:"color",value:l,onChange:e=>n("rockColor",e.target.value)}),"Colour"]})})})]})},"waterControls")})]})},I=e=>{v(8);let{updateValue:t,height:r,width:l,resetTerrain:n}=x(),[i,o]=(0,s.useState)({water:!0,environment:!0,sand:!0,grass:!0});return(0,a.jsxs)("div",{className:"z-10 absolute top-5 right-5 bg-[#225560] text-white p-3 rounded-md shadow-lg w-96",children:[(0,a.jsx)("h1",{className:"text-white text-xl",children:"Terrain Customisations"}),(0,a.jsx)("hr",{}),(0,a.jsxs)("div",{className:"grid grid-cols-2 gap-3 my-4",children:[(0,a.jsx)(k,{menuOpen:i,setMenuOpen:o}),(0,a.jsx)(F,{menuOpen:i,setMenuOpen:o}),(0,a.jsx)(S,{menuOpen:i,setMenuOpen:o}),(0,a.jsx)(B,{menuOpen:i,setMenuOpen:o})]}),(0,a.jsx)("hr",{}),(0,a.jsx)(M,{menuOpen:i,setMenuOpen:o}),(0,a.jsx)("hr",{className:"mt-4"}),(0,a.jsx)("hr",{className:"mt-4"}),(0,a.jsxs)("div",{className:"mt-2",children:[(0,a.jsxs)("div",{className:"grid grid-cols-2 gap-4",children:[(0,a.jsxs)("label",{children:["Width",(0,a.jsx)("input",{type:"number",onChange:e=>t("width",e.target.value),className:"w-full p-1 rounded-sm text-black",value:l})]}),(0,a.jsxs)("label",{children:["Height",(0,a.jsx)("input",{className:"w-full p-1 rounded-sm text-black",type:"number",onChange:e=>t("height",e.target.value),value:r})]})]}),(0,a.jsx)("a",{className:"flex justify-center p-2 items-center mt-4 bg-white rounded-md",href:"/generate",children:(0,a.jsx)("span",{className:"text-slate-800",children:"Generate New"})}),(0,a.jsxs)("div",{className:"grid grid-cols-2 col-4 mt-4",children:[(0,a.jsx)("button",{className:" underline",children:"Download"}),(0,a.jsx)("button",{className:" underline",onClick:()=>n(),children:"Reset"})]})]})]})},Q=e=>{let{params:t}=e;return(0,a.jsxs)("main",{className:"flex min-h-screen flex-col items-center justify-center h-screen bg-black",children:[(0,a.jsx)(I,{}),(0,a.jsx)(s.Suspense,{fallback:(0,a.jsx)("h1",{children:"Loading... Loading... Loading... Loading... Loading..."}),children:(0,a.jsxs)(l.Xz,{shadows:!0,children:[(0,a.jsx)(b.z,{}),(0,a.jsx)(y.c,{position:[200,5,100],makeDefault:!0}),(0,a.jsx)("ambientLight",{intensity:.2}),(0,a.jsx)(w.q,{}),(0,a.jsx)("spotLight",{position:[-250,50,50],castShadow:!0}),(0,a.jsx)(j,{id:t.id})]})})]})}}},function(e){e.O(0,[230,296,865,253,488,744],function(){return e(e.s=2934)}),_N_E=e.O()}]);