import{a_ as $,b2 as W,a3 as j,a2 as Z,B as C,ak as q,al as x,am as X,ap as N,i as O}from"./vendor-BzVF-Cty.js";const K=parseInt($.replace(/\D+/g,""));function Q(p,m=1e-4){m=Math.max(m,Number.EPSILON);const h={},I=p.getIndex(),_=p.getAttribute("position"),y=I?I.count:_.count;let e=0;const E=Object.keys(p.attributes),M={},D={},k=[],U=["getX","getY","getZ","getW"];for(let f=0,A=E.length;f<A;f++){const l=E[f];M[l]=[];const d=p.morphAttributes[l];d&&(D[l]=new Array(d.length).fill(0).map(()=>[]))}const z=Math.log10(1/m),V=Math.pow(10,z);for(let f=0;f<y;f++){const A=I?I.getX(f):f;let l="";for(let d=0,S=E.length;d<S;d++){const b=E[d],u=p.getAttribute(b),R=u.itemSize;for(let w=0;w<R;w++)l+=`${~~(u[U[w]](A)*V)},`}if(l in h)k.push(h[l]);else{for(let d=0,S=E.length;d<S;d++){const b=E[d],u=p.getAttribute(b),R=p.morphAttributes[b],w=u.itemSize,t=M[b],n=D[b];for(let o=0;o<w;o++){const i=U[o];if(t.push(u[i](A)),R)for(let s=0,c=R.length;s<c;s++)n[s].push(R[s][i](A))}}h[l]=e,k.push(e),e++}}const L=p.clone();for(let f=0,A=E.length;f<A;f++){const l=E[f],d=p.getAttribute(l),S=new d.array.constructor(M[l]),b=new C(S,d.itemSize,d.normalized);if(L.setAttribute(l,b),l in D)for(let u=0;u<D[l].length;u++){const R=p.morphAttributes[l][u],w=new R.array.constructor(D[l][u]),t=new C(w,R.itemSize,R.normalized);L.morphAttributes[l][u]=t}}return L.setIndex(k),L}function tt(p,m){if(m===W)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),p;if(m===j||m===Z){let h=p.getIndex();if(h===null){const e=[],E=p.getAttribute("position");if(E!==void 0){for(let M=0;M<E.count;M++)e.push(M);p.setIndex(e),h=p.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),p}const I=h.count-2,_=[];if(h)if(m===j)for(let e=1;e<=I;e++)_.push(h.getX(0)),_.push(h.getX(e)),_.push(h.getX(e+1));else for(let e=0;e<I;e++)e%2===0?(_.push(h.getX(e)),_.push(h.getX(e+1)),_.push(h.getX(e+2))):(_.push(h.getX(e+2)),_.push(h.getX(e+1)),_.push(h.getX(e)));_.length/3!==I&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const y=p.clone();return y.setIndex(_),y.clearGroups(),y}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",m),p}class et extends q{constructor(m){super(m),this.type=x}parse(m){const e=function(t,n){switch(t){case 1:throw new Error("THREE.RGBELoader: Read Error: "+(n||""));case 2:throw new Error("THREE.RGBELoader: Write Error: "+(n||""));case 3:throw new Error("THREE.RGBELoader: Bad File Format: "+(n||""));default:case 4:throw new Error("THREE.RGBELoader: Memory Error: "+(n||""))}},k=`
`,U=function(t,n,o){n=n||1024;let s=t.pos,c=-1,r=0,g="",a=String.fromCharCode.apply(null,new Uint16Array(t.subarray(s,s+128)));for(;0>(c=a.indexOf(k))&&r<n&&s<t.byteLength;)g+=a,r+=a.length,s+=128,a+=String.fromCharCode.apply(null,new Uint16Array(t.subarray(s,s+128)));return-1<c?(t.pos+=r+c+1,g+a.slice(0,c)):!1},z=function(t){const n=/^#\?(\S+)/,o=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,i=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,s=/^\s*FORMAT=(\S+)\s*$/,c=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,r={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0};let g,a;for((t.pos>=t.byteLength||!(g=U(t)))&&e(1,"no header found"),(a=g.match(n))||e(3,"bad initial token"),r.valid|=1,r.programtype=a[1],r.string+=g+`
`;g=U(t),g!==!1;){if(r.string+=g+`
`,g.charAt(0)==="#"){r.comments+=g+`
`;continue}if((a=g.match(o))&&(r.gamma=parseFloat(a[1])),(a=g.match(i))&&(r.exposure=parseFloat(a[1])),(a=g.match(s))&&(r.valid|=2,r.format=a[1]),(a=g.match(c))&&(r.valid|=4,r.height=parseInt(a[1],10),r.width=parseInt(a[2],10)),r.valid&2&&r.valid&4)break}return r.valid&2||e(3,"missing format specifier"),r.valid&4||e(3,"missing image size specifier"),r},V=function(t,n,o){const i=n;if(i<8||i>32767||t[0]!==2||t[1]!==2||t[2]&128)return new Uint8Array(t);i!==(t[2]<<8|t[3])&&e(3,"wrong scanline width");const s=new Uint8Array(4*n*o);s.length||e(4,"unable to allocate buffer space");let c=0,r=0;const g=4*i,a=new Uint8Array(4),F=new Uint8Array(g);let v=o;for(;v>0&&r<t.byteLength;){r+4>t.byteLength&&e(1),a[0]=t[r++],a[1]=t[r++],a[2]=t[r++],a[3]=t[r++],(a[0]!=2||a[1]!=2||(a[2]<<8|a[3])!=i)&&e(3,"bad rgbe scanline format");let H=0,G;for(;H<g&&r<t.byteLength;){G=t[r++];const B=G>128;if(B&&(G-=128),(G===0||H+G>g)&&e(3,"bad scanline data"),B){const T=t[r++];for(let P=0;P<G;P++)F[H++]=T}else F.set(t.subarray(r,r+G),H),H+=G,r+=G}const Y=i;for(let B=0;B<Y;B++){let T=0;s[c]=F[B+T],T+=i,s[c+1]=F[B+T],T+=i,s[c+2]=F[B+T],T+=i,s[c+3]=F[B+T],c+=4}v--}return s},L=function(t,n,o,i){const s=t[n+3],c=Math.pow(2,s-128)/255;o[i+0]=t[n+0]*c,o[i+1]=t[n+1]*c,o[i+2]=t[n+2]*c,o[i+3]=1},f=function(t,n,o,i){const s=t[n+3],c=Math.pow(2,s-128)/255;o[i+0]=N.toHalfFloat(Math.min(t[n+0]*c,65504)),o[i+1]=N.toHalfFloat(Math.min(t[n+1]*c,65504)),o[i+2]=N.toHalfFloat(Math.min(t[n+2]*c,65504)),o[i+3]=N.toHalfFloat(1)},A=new Uint8Array(m);A.pos=0;const l=z(A),d=l.width,S=l.height,b=V(A.subarray(A.pos),d,S);let u,R,w;switch(this.type){case X:w=b.length/4;const t=new Float32Array(w*4);for(let o=0;o<w;o++)L(b,o*4,t,o*4);u=t,R=X;break;case x:w=b.length/4;const n=new Uint16Array(w*4);for(let o=0;o<w;o++)f(b,o*4,n,o*4);u=n,R=x;break;default:throw new Error("THREE.RGBELoader: Unsupported type: "+this.type)}return{width:d,height:S,data:u,header:l.string,gamma:l.gamma,exposure:l.exposure,type:R}}setDataType(m){return this.type=m,this}load(m,h,I,_){function y(e,E){switch(e.type){case X:case x:"colorSpace"in e?e.colorSpace="srgb-linear":e.encoding=3e3,e.minFilter=O,e.magFilter=O,e.generateMipmaps=!1,e.flipY=!0;break}h&&h(e,E)}return super.load(m,y,I,_)}}export{et as R,Q as m,tt as t,K as v};