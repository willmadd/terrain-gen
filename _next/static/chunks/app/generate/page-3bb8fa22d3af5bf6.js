(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[811],{2934:function(e,t,r){Promise.resolve().then(r.bind(r,6985))},6985:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return B}});var a=r(9268),l=r(5334),n=r(6006),s=r(7804),i=r(7346),o=r(1578),c=r(414),d=r(2561),h=r(4475);let u={fog:{intensity:100,on:!0},noiseIterations:8,amplitude:3,frequency:2,waterLevel:3,waterTemplate:!0,waterOpacity:.7,waterColor:"#d4f1f9",width:400,height:400,sandSolidColor:!0,sandColor:"#C2B280",grassSolidColor:!0,grassColor:"#567d46"},A=(0,d.Ue)()((0,h.tJ)(e=>({...u,updateFog:(t,r)=>e({fog:{intensity:t,on:r}}),updateValue:(t,r)=>e(e=>({...e,[t]:r})),resetTerrain:()=>e(()=>({...u}))}),{name:"config-storage"}));var g={src:"/_next/static/media/waterNormal3.60fa5dc1.jpeg",height:1e3,width:1e3,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABAEBAQAAAAAAAAAAAAAAAAAABAb/2gAMAwEAAhADEAAAAKhZn//EABcQAQADAAAAAAAAAAAAAAAAABEAATH/2gAIAQEAAT8AXaJ//8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAgEBPwB//8QAFREBAQAAAAAAAAAAAAAAAAAAEQD/2gAIAQMBAT8AS//Z",blurWidth:8,blurHeight:8};(0,o.e)({Water:c.B});var x=()=>{let e=(0,n.useRef)(null);(0,o.z)(e=>e.gl);let{waterLevel:t,waterTemplate:r,waterColor:l,waterOpacity:i,height:c,width:d}=A(),h=(0,o.D)(s.TextureLoader,g.src);h.wrapS=h.wrapT=s.RepeatWrapping;let u=(0,n.useMemo)(()=>new s.PlaneGeometry(d,c),[d,c]),x=(0,n.useMemo)(()=>({textureWidth:512,textureHeight:512,waterNormals:h,sunDirection:new s.Vector3,sunColor:"yellow",waterColor:410227,distortionScale:2,fog:!1}),[h]);return(0,o.A)((t,r)=>{e.current&&(e.current.material.uniforms.time.value+=r/4)}),(0,a.jsx)(a.Fragment,{children:r?(0,a.jsx)("water",{position:[0,t-10,0],ref:e,args:[u,x],"rotation-x":-Math.PI/2,transparent:!0,opacity:.5}):(0,a.jsxs)("mesh",{position:[0,t-10,0],rotation:[-(.5*Math.PI),0,0],children:[(0,a.jsx)("planeGeometry",{args:[d,c]}),(0,a.jsx)("meshStandardMaterial",{color:l,transparent:!0,opacity:i/10})]})})},m=r(8283),p=e=>{let{id:t}=e,r=(0,n.useRef)(null),{progress:l}=(0,m.S)(),{fog:o,noiseIterations:c,amplitude:d,frequency:h,height:u,width:g,sandSolidColor:p,sandColor:j,grassSolidColor:f,grassColor:y}=A(),w=+u,b=+g,v=()=>{if(r.current){let e=[],t=Array(b+1).fill(0).map(()=>Array(w+1).fill(0)),a=(0,i.hA)();for(let e=1;e<c;e++)for(let r=0;r<=b;r++)for(let l=0;l<=w;l++){let n=h/1e3*e,s=a(r*n,l*n)*d,i=s*s*s;t[r][l]=t[r][l]+i}for(let r=0;r<b;r++)for(let a=0;a<w;a++){let l=r,n=a,i=t[r][a],o=t[r][a+1],c=t[r+1][a],d=t[r+1][a+1];e.push(new s.Vector3(l,i,n),new s.Vector3(l,o,n+1),new s.Vector3(l+1,c,n),new s.Vector3(l+1,c,n),new s.Vector3(l,o,n+1),new s.Vector3(l+1,d,n+1))}return r.current.geometry.setFromPoints(e),e}return[]},[C,N]=(0,n.useState)([new s.Vector3]);console.log("xxyyzz",C);let k=e=>{if(r.current){let c=w*b*6,h=()=>{var e=[[.475,.731,.373],[.365,.645,.278],[.298,.543,.224],[.553,.853,.463],[.42,.735,.349]];let t=Math.floor(Math.random()*e.length);return e[t]},u=()=>{var e=[[1,.933,.745],[.918,.847,.62],[.867,.769,.518],[.737,.659,.408],[.627,.553,.333]];let t=Math.floor(Math.random()*e.length);return e[t]};r.current.geometry.setAttribute("color",new s.BufferAttribute(new Float32Array(3*(c||0)),3));for(let A=0;A<(c||0);A++){var t,a,l,n,i,o;let c=e[A];if(c.y>d**3)null===(t=r.current)||void 0===t||t.geometry.attributes.color.setXYZ(A,1,1,1);else if(c.y>2.5)null===(a=r.current)||void 0===a||a.geometry.attributes.color.setXYZ(A,.2,.2,.2);else if(c.y>-2){if(f){let e=h();null===(n=r.current)||void 0===n||n.geometry.attributes.color.setXYZ(A,e[0],e[1],e[2])}else{let e=y.replace("#",""),t=parseInt(e,16),a=new s.Color(t);null===(l=r.current)||void 0===l||l.geometry.attributes.color.setXYZ(A,a.r,a.g,a.b)}}else if(p){let e=u();null===(o=r.current)||void 0===o||o.geometry.attributes.color.setXYZ(A,e[0],e[1],e[2])}else{let e=j.replace("#",""),t=parseInt(e,16),a=new s.Color(t);null===(i=r.current)||void 0===i||i.geometry.attributes.color.setXYZ(A,a.r,a.g,a.b)}}r.current.geometry.attributes.color.needsUpdate=!0,r.current.geometry.computeVertexNormals()}};return(0,n.useEffect)(()=>{if(r.current){let e=v();N(e)}},[]),(0,n.useEffect)(()=>{C.length>10&&k(C)},[C.length,p,j,y,f]),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("mesh",{ref:r,position:[-b/2,0,-w/2],castShadow:!0,receiveShadow:!0,children:[(0,a.jsx)("bufferGeometry",{}),(0,a.jsx)("meshStandardMaterial",{vertexColors:!0})]}),o.on?(0,a.jsx)("fog",{attach:"fog",color:"#e8e8e8",near:10,far:800}):null,(0,a.jsx)(x,{})]})},j=r(7011),f=r(304),y=r(1694);let w=e=>{let t="",r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",a=r.length,l=0;for(;l<e;)t+=r.charAt(Math.floor(Math.random()*a)),l+=1;return t};var b=r(2801),v=r(7743),C=r(7163),N=e=>{let{setMenuOpen:t,menuOpen:r}=e,{updateValue:l,waterLevel:n,waterTemplate:s,waterColor:i,waterOpacity:o}=A();return(0,a.jsxs)("fieldset",{className:"mt-0",children:[(0,a.jsxs)("button",{onClick:()=>t(e=>({...e,water:!e.water})),"aria-label":"open water options",className:"flex justify-between w-full my-4",children:[(0,a.jsx)("h2",{className:"text-lg",children:"Water"}),(0,a.jsx)(b.RiI,{})]}),(0,a.jsx)(v.M,{children:r.water&&(0,a.jsxs)(C.E.div,{animate:{opacity:1,height:"auto",transition:{opacity:{delay:.1}}},initial:{opacity:0,height:0},exit:{height:0,opacity:0,transition:{height:{delay:.1}}},children:[(0,a.jsx)("div",{children:(0,a.jsxs)("label",{children:["Colour",(0,a.jsx)("input",{type:"color",value:i,onChange:e=>l("waterColor",e.target.value)})]})}),(0,a.jsx)("div",{children:(0,a.jsxs)("label",{children:["Realistic Water",(0,a.jsx)("input",{type:"checkbox",id:"water",name:"water",checked:s,onChange:()=>l("waterTemplate",!s)})]})}),(0,a.jsxs)("label",{children:["Water Opacity",(0,a.jsx)("input",{className:"w-full p-1 rounded-sm text-black",type:"range",min:"0",max:"10",value:o,onChange:e=>l("waterOpacity",e.target.value)})]}),(0,a.jsx)("div",{children:(0,a.jsxs)("label",{children:["Water Level",(0,a.jsx)("input",{className:"w-full p-1 rounded-sm text-black",type:"range",min:"0",max:"30",value:n,onChange:e=>l("waterLevel",e.target.value)})]})})]},"waterControls")})]})},k=e=>{let{menuOpen:t,setMenuOpen:r}=e,{fog:l,updateFog:n,noiseIterations:s,updateValue:i,amplitude:o,frequency:c}=A();return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("button",{onClick:()=>r(e=>({...e,environment:!e.environment})),"aria-label":"open environment options",className:"flex justify-between w-full mt-4",children:[(0,a.jsx)("h2",{className:"text-lg",children:"Environment"}),(0,a.jsx)(b.RiI,{})]}),(0,a.jsx)(v.M,{children:t.environment&&(0,a.jsxs)(C.E.div,{animate:{opacity:1,height:"auto",transition:{opacity:{delay:.1}}},initial:{opacity:0,height:0},exit:{height:0,opacity:0,transition:{height:{delay:.1}}},children:[(0,a.jsxs)("div",{className:"grid grid-cols-2 gap-4",children:[(0,a.jsxs)("label",{children:["Noise Cycles",(0,a.jsx)("input",{className:"w-full p-1 rounded-sm text-black",type:"number",value:s,onChange:e=>i("noiseIterations",e.target.value)})]}),(0,a.jsxs)("label",{className:"flex flex-col items-center  text-center",children:["Fog",(0,a.jsx)("input",{className:"mt-1",type:"checkbox",id:"fog",name:"fog",checked:l.on,onChange:()=>n(l.intensity,!l.on)})]})]}),(0,a.jsxs)("div",{className:"grid grid-cols-2 gap-4 mt-4",children:[(0,a.jsx)("div",{children:(0,a.jsxs)("label",{children:["Amplitude",(0,a.jsx)("input",{className:"w-full p-1 rounded-sm text-black",type:"number",value:o,onChange:e=>i("amplitude",e.target.value)})]})}),(0,a.jsx)("div",{children:(0,a.jsxs)("label",{children:["Frequency",(0,a.jsx)("input",{className:"w-full p-1 rounded-sm text-black",type:"number",value:c,onChange:e=>i("frequency",e.target.value)})]})})]})]},"waterControls")})]})},E=e=>{let{menuOpen:t,setMenuOpen:r}=e,{sandColor:l,sandSolidColor:n,updateValue:s}=A();return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("button",{onClick:()=>r(e=>({...e,sand:!e.sand})),"aria-label":"open environment options",className:"flex justify-between w-full mt-4",children:[(0,a.jsx)("h2",{className:"text-lg",children:"Sand"}),(0,a.jsx)(b.RiI,{})]}),(0,a.jsx)(v.M,{children:t.sand&&(0,a.jsx)(C.E.div,{animate:{opacity:1,height:"auto",transition:{opacity:{delay:.1}}},initial:{opacity:0,height:0},exit:{height:0,opacity:0,transition:{height:{delay:.1}}},children:(0,a.jsx)("div",{className:"grid grid-cols-2 gap-4",children:(0,a.jsxs)("div",{children:[(0,a.jsxs)("label",{children:["Solid Colour",(0,a.jsx)("input",{type:"checkbox",checked:n,onChange:e=>s("sandSolidColor",!n)})]}),(0,a.jsxs)("label",{children:["Sand Colour Colour",(0,a.jsx)("input",{type:"color",value:l,onChange:e=>s("sandColor",e.target.value)})]})]})})},"waterControls")})]})},M=e=>{let{menuOpen:t,setMenuOpen:r}=e,{grassColor:l,grassSolidColor:n,updateValue:s}=A();return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("button",{onClick:()=>r(e=>({...e,grass:!e.grass})),"aria-label":"open environment options",className:"flex justify-between w-full mt-4",children:[(0,a.jsx)("h2",{className:"text-lg",children:"Grass"}),(0,a.jsx)(b.RiI,{})]}),(0,a.jsx)(v.M,{children:t.grass&&(0,a.jsx)(C.E.div,{animate:{opacity:1,height:"auto",transition:{opacity:{delay:.1}}},initial:{opacity:0,height:0},exit:{height:0,opacity:0,transition:{height:{delay:.1}}},children:(0,a.jsx)("div",{className:"grid grid-cols-2 gap-4",children:(0,a.jsxs)("div",{children:[(0,a.jsxs)("label",{children:["Solid Colour",(0,a.jsx)("input",{type:"checkbox",checked:n,onChange:e=>s("grassSolidColor",!n)})]}),(0,a.jsxs)("label",{children:["Grass Colour Colour",(0,a.jsx)("input",{type:"color",value:l,onChange:e=>s("grassColor",e.target.value)})]})]})})},"grassControls")})]})},S=e=>{let t=w(8),{updateValue:r,height:l,width:s,resetTerrain:i}=A(),[o,c]=(0,n.useState)({water:!0,environment:!0,sand:!0,grass:!0});return(0,a.jsxs)("div",{className:"z-10 absolute top-5 right-5 bg-slate-800 text-white p-3 rounded-md shadow-lg w-60",children:[(0,a.jsx)("h1",{className:"text-white text-xl",children:"Terrain Customisations"}),(0,a.jsx)("hr",{}),(0,a.jsx)(N,{menuOpen:o,setMenuOpen:c}),(0,a.jsx)("hr",{}),(0,a.jsx)(k,{menuOpen:o,setMenuOpen:c}),(0,a.jsx)("hr",{className:"mt-4"}),(0,a.jsx)(E,{menuOpen:o,setMenuOpen:c}),(0,a.jsx)("hr",{className:"mt-4"}),(0,a.jsx)(M,{menuOpen:o,setMenuOpen:c}),(0,a.jsxs)("div",{className:"mt-2",children:[(0,a.jsxs)("div",{className:"grid grid-cols-2 gap-4",children:[(0,a.jsxs)("label",{children:["Width",(0,a.jsx)("input",{type:"number",onChange:e=>r("width",e.target.value),className:"w-full p-1 rounded-sm text-black",value:s})]}),(0,a.jsxs)("label",{children:["Height",(0,a.jsx)("input",{className:"w-full p-1 rounded-sm text-black",type:"number",onChange:e=>r("height",e.target.value),value:l})]})]}),(0,a.jsx)("a",{className:"flex justify-center p-2 items-center mt-4 bg-white rounded-md",href:"/generate/".concat(t),children:(0,a.jsx)("span",{className:"text-slate-800",children:"Generate New"})}),(0,a.jsxs)("div",{className:"grid grid-cols-2 col-4 mt-4",children:[(0,a.jsx)("button",{className:" underline",children:"Download"}),(0,a.jsx)("button",{className:" underline",onClick:()=>i(),children:"Reset"})]})]})]})},B=e=>{let{params:t}=e;return(0,a.jsxs)("main",{className:"flex min-h-screen flex-col items-center justify-center h-screen bg-black",children:[(0,a.jsx)(S,{}),(0,a.jsx)(n.Suspense,{fallback:(0,a.jsx)("h1",{children:"Loading... Loading... Loading... Loading... Loading..."}),children:(0,a.jsxs)(l.Xz,{shadows:!0,children:[(0,a.jsx)(j.z,{}),(0,a.jsx)(f.c,{position:[200,5,100],makeDefault:!0}),(0,a.jsx)("ambientLight",{intensity:.2}),(0,a.jsx)(y.q,{}),(0,a.jsx)("spotLight",{position:[-250,50,50],castShadow:!0}),(0,a.jsx)(p,{id:t.id})]})})]})}}},function(e){e.O(0,[230,296,350,253,488,744],function(){return e(e.s=2934)}),_N_E=e.O()}]);