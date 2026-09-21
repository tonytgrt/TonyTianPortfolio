var e=typeof Float32Array<`u`?Float32Array:Array;function t(){var t=new e(16);return e!=Float32Array&&(t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0),t[0]=1,t[5]=1,t[10]=1,t[15]=1,t}function n(e,t){if(e===t){var n=t[1],r=t[2],i=t[3],a=t[6],o=t[7],s=t[11];e[1]=t[4],e[2]=t[8],e[3]=t[12],e[4]=n,e[6]=t[9],e[7]=t[13],e[8]=r,e[9]=a,e[11]=t[14],e[12]=i,e[13]=o,e[14]=s}else e[0]=t[0],e[1]=t[4],e[2]=t[8],e[3]=t[12],e[4]=t[1],e[5]=t[5],e[6]=t[9],e[7]=t[13],e[8]=t[2],e[9]=t[6],e[10]=t[10],e[11]=t[14],e[12]=t[3],e[13]=t[7],e[14]=t[11],e[15]=t[15];return e}function r(e,t){var n=t[0],r=t[1],i=t[2],a=t[3],o=t[4],s=t[5],c=t[6],l=t[7],u=t[8],d=t[9],f=t[10],p=t[11],m=t[12],h=t[13],g=t[14],_=t[15],v=n*s-r*o,y=n*c-i*o,b=n*l-a*o,x=r*c-i*s,S=r*l-a*s,C=i*l-a*c,w=u*h-d*m,T=u*g-f*m,E=u*_-p*m,D=d*g-f*h,O=d*_-p*h,k=f*_-p*g,A=v*k-y*O+b*D+x*E-S*T+C*w;return A?(A=1/A,e[0]=(s*k-c*O+l*D)*A,e[1]=(i*O-r*k-a*D)*A,e[2]=(h*C-g*S+_*x)*A,e[3]=(f*S-d*C-p*x)*A,e[4]=(c*E-o*k-l*T)*A,e[5]=(n*k-i*E+a*T)*A,e[6]=(g*b-m*C-_*y)*A,e[7]=(u*C-f*b+p*y)*A,e[8]=(o*O-s*E+l*w)*A,e[9]=(r*E-n*O-a*w)*A,e[10]=(m*S-h*b+_*v)*A,e[11]=(d*b-u*S-p*v)*A,e[12]=(s*T-o*D-c*w)*A,e[13]=(n*D-r*T+i*w)*A,e[14]=(h*y-m*x-g*v)*A,e[15]=(u*x-d*y+f*v)*A,e):null}function i(e,t,n){var r=n[0],i=n[1],a=n[2];return e[0]=t[0]*r,e[1]=t[1]*r,e[2]=t[2]*r,e[3]=t[3]*r,e[4]=t[4]*i,e[5]=t[5]*i,e[6]=t[6]*i,e[7]=t[7]*i,e[8]=t[8]*a,e[9]=t[9]*a,e[10]=t[10]*a,e[11]=t[11]*a,e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15],e}function a(e,t){return e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=1,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=1,e[11]=0,e[12]=t[0],e[13]=t[1],e[14]=t[2],e[15]=1,e}function o(e,t){var n=Math.sin(t),r=Math.cos(t);return e[0]=r,e[1]=n,e[2]=0,e[3]=0,e[4]=-n,e[5]=r,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=1,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}function s(){var t=new e(3);return e!=Float32Array&&(t[0]=0,t[1]=0,t[2]=0),t}function c(t,n,r){var i=new e(3);return i[0]=t,i[1]=n,i[2]=r,i}(function(){var e=s();return function(t,n,r,i,a,o){var s,c;for(n||=3,r||=0,c=i?Math.min(i*n+r,t.length):t.length,s=r;s<c;s+=n)e[0]=t[s],e[1]=t[s+1],e[2]=t[s+2],a(e,e,o),t[s]=e[0],t[s+1]=e[1],t[s+2]=e[2];return t}})();function l(){var t=new e(4);return e!=Float32Array&&(t[0]=0,t[1]=0,t[2]=0,t[3]=0),t}function u(t,n,r,i){var a=new e(4);return a[0]=t,a[1]=n,a[2]=r,a[3]=i,a}function d(e,t,n){return e[0]=t[0]+n[0],e[1]=t[1]+n[1],e[2]=t[2]+n[2],e[3]=t[3]+n[3],e}function f(e,t,n,r){return e[0]=t[0]+n[0]*r,e[1]=t[1]+n[1]*r,e[2]=t[2]+n[2]*r,e[3]=t[3]+n[3]*r,e}function p(e,t){var n=t[0],r=t[1],i=t[2],a=t[3],o=n*n+r*r+i*i+a*a;return o>0&&(o=1/Math.sqrt(o)),e[0]=n*o,e[1]=r*o,e[2]=i*o,e[3]=a*o,e}(function(){var e=l();return function(t,n,r,i,a,o){var s,c;for(n||=4,r||=0,c=i?Math.min(i*n+r,t.length):t.length,s=r;s<c;s+=n)e[0]=t[s],e[1]=t[s+1],e[2]=t[s+2],e[3]=t[s+3],a(e,e,o),t[s]=e[0],t[s+1]=e[1],t[s+2]=e[2],t[s+3]=e[3];return t}})();var m;function h(e){m=e}var g=class{constructor(){this.count=0,this.idxBound=!1,this.posBound=!1,this.norBound=!1}destory(){m.deleteBuffer(this.bufIdx),m.deleteBuffer(this.bufPos),m.deleteBuffer(this.bufNor)}generateIdx(){this.idxBound=!0,this.bufIdx=m.createBuffer()}generatePos(){this.posBound=!0,this.bufPos=m.createBuffer()}generateNor(){this.norBound=!0,this.bufNor=m.createBuffer()}bindIdx(){return this.idxBound&&m.bindBuffer(m.ELEMENT_ARRAY_BUFFER,this.bufIdx),this.idxBound}bindPos(){return this.posBound&&m.bindBuffer(m.ARRAY_BUFFER,this.bufPos),this.posBound}bindNor(){return this.norBound&&m.bindBuffer(m.ARRAY_BUFFER,this.bufNor),this.norBound}elemCount(){return this.count}drawMode(){return m.TRIANGLES}},_=class extends g{constructor(e,t,n){super(),this.radius=t,this.subdivisions=n,this.center=u(e[0],e[1],e[2],1)}create(){let e=.5257311121191336,t=.8506508083520399,n=20*4**this.subdivisions,r=10*4**this.subdivisions+2,i=new ArrayBuffer(n*3*Uint32Array.BYTES_PER_ELEMENT+r*4*Float32Array.BYTES_PER_ELEMENT+r*4*Float32Array.BYTES_PER_ELEMENT),a=new ArrayBuffer(n*3*Uint32Array.BYTES_PER_ELEMENT),o=[i,a],s=0,c=n*3*Uint32Array.BYTES_PER_ELEMENT,l=c,u=c+r*4*Float32Array.BYTES_PER_ELEMENT,h=Array(20),g=[];for(let e=0;e<20;++e)h[e]=new Uint32Array(o[s],0+e*3*Uint32Array.BYTES_PER_ELEMENT,3);let _=Array(12);for(let e=0;e<12;++e)_[e]=new Float32Array(i,c+e*4*Float32Array.BYTES_PER_ELEMENT,4);_[0].set([-.5257311121191336,0,t,0]),_[1].set([e,0,t,0]),_[2].set([-.5257311121191336,0,-.8506508083520399,0]),_[3].set([e,0,-.8506508083520399,0]),_[4].set([0,t,e,0]),_[5].set([0,t,-.5257311121191336,0]),_[6].set([0,-.8506508083520399,e,0]),_[7].set([0,-.8506508083520399,-.5257311121191336,0]),_[8].set([t,e,0,0]),_[9].set([-.8506508083520399,e,0,0]),_[10].set([t,-.5257311121191336,0,0]),_[11].set([-.8506508083520399,-.5257311121191336,0,0]),h[0].set([0,4,1]),h[1].set([0,9,4]),h[2].set([9,5,4]),h[3].set([4,5,8]),h[4].set([4,8,1]),h[5].set([8,10,1]),h[6].set([8,3,10]),h[7].set([5,3,8]),h[8].set([5,2,3]),h[9].set([2,7,3]),h[10].set([7,10,3]),h[11].set([7,6,10]),h[12].set([7,11,6]),h[13].set([11,0,6]),h[14].set([0,1,6]),h[15].set([6,1,10]),h[16].set([9,0,11]),h[17].set([9,11,2]),h[18].set([9,2,5]),h[19].set([7,2,11]);for(let e=0;e<this.subdivisions;++e){s=1-s,g.length=h.length*4;let e=0,t=new Map;function n(e,n){let r=[e,n].sort().join(`_`);if(!t.has(r)){let a=new Float32Array(i,c+_.length*4*Float32Array.BYTES_PER_ELEMENT,4);d(a,_[e],_[n]),p(a,a),t.set(r,_.length),_.push(a)}return t.get(r)}for(let t=0;t<h.length;++t){let r=h[t][0],i=h[t][1],a=h[t][2],c=n(r,i),l=n(i,a),u=n(a,r),d=g[e]=new Uint32Array(o[s],0+e++*3*Uint32Array.BYTES_PER_ELEMENT,3),f=g[e]=new Uint32Array(o[s],0+e++*3*Uint32Array.BYTES_PER_ELEMENT,3),p=g[e]=new Uint32Array(o[s],0+e++*3*Uint32Array.BYTES_PER_ELEMENT,3),m=g[e]=new Uint32Array(o[s],0+e++*3*Uint32Array.BYTES_PER_ELEMENT,3);g.length,d.set([r,c,u]),f.set([c,l,u]),p.set([c,i,l]),m.set([u,l,a])}let r=h;h=g,g=r}if(s===1){let e=new Uint32Array(i,0,3*h.length),t=new Uint32Array(a,0,3*h.length);e.set(t)}for(let e=0;e<_.length;++e)f(new Float32Array(i,u+e*4*Float32Array.BYTES_PER_ELEMENT,4),this.center,_[e],this.radius);this.buffer=i,this.indices=new Uint32Array(this.buffer,0,h.length*3),this.normals=new Float32Array(this.buffer,l,_.length*4),this.positions=new Float32Array(this.buffer,u,_.length*4),this.generateIdx(),this.generatePos(),this.generateNor(),this.count=this.indices.length,m.bindBuffer(m.ELEMENT_ARRAY_BUFFER,this.bufIdx),m.bufferData(m.ELEMENT_ARRAY_BUFFER,this.indices,m.STATIC_DRAW),m.bindBuffer(m.ARRAY_BUFFER,this.bufNor),m.bufferData(m.ARRAY_BUFFER,this.normals,m.STATIC_DRAW),m.bindBuffer(m.ARRAY_BUFFER,this.bufPos),m.bufferData(m.ARRAY_BUFFER,this.positions,m.STATIC_DRAW),console.log(`Created icosphere with ${_.length} vertices`)}},v=class extends g{constructor(e){super(),this.center=u(e[0],e[1],e[2],1)}create(){this.indices=new Uint32Array([0,1,2,0,2,3]),this.normals=new Float32Array([0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0]),this.positions=new Float32Array([-1,-1,0,1,1,-1,0,1,1,1,0,1,-1,1,0,1]),this.generateIdx(),this.generatePos(),this.generateNor(),this.count=this.indices.length,m.bindBuffer(m.ELEMENT_ARRAY_BUFFER,this.bufIdx),m.bufferData(m.ELEMENT_ARRAY_BUFFER,this.indices,m.STATIC_DRAW),m.bindBuffer(m.ARRAY_BUFFER,this.bufNor),m.bufferData(m.ARRAY_BUFFER,this.normals,m.STATIC_DRAW),m.bindBuffer(m.ARRAY_BUFFER,this.bufPos),m.bufferData(m.ARRAY_BUFFER,this.positions,m.STATIC_DRAW),console.log(`Created square`)}},y=class{constructor(e){this.canvas=e}setClearColor(e,t,n,r){m.clearColor(e,t,n,r)}setSize(e,t){this.canvas.width=e,this.canvas.height=t}clear(){m.clear(m.COLOR_BUFFER_BIT|m.DEPTH_BUFFER_BIT)}render(e,t,n,r,i,a=1){let o=u(a,a,a,1);r.setModelMatrix(t),r.setViewProjMatrix(e),r.setGeometryColor(o),r.setCameraPos(n);for(let e of i)r.draw(e)}},b=70,x=.5,S=3.4,C=.16,w=1/120,T=class{constructor(){this.x=0,this.y=0,this.vx=0,this.vy=0,this.speed=0,this.curvature=0,this.anchorX=0,this.anchorY=0,this.anchorVx=0,this.anchorVy=0}reset(e,t){this.anchorX=e,this.anchorY=t,this.anchorVx=0,this.anchorVy=0}update(e,t,n,r){let i=0,a=0;for(let r=n;r>0;r-=w){let n=Math.min(r,w);i=49*(e-this.anchorX)-14*this.anchorVx,a=49*(t-this.anchorY)-14*this.anchorVy,this.anchorVx+=i*n,this.anchorVy+=a*n,this.anchorX+=this.anchorVx*n,this.anchorY+=this.anchorVy*n}let o=b,s=x,c=o*Math.sqrt(1-s*s),l=2*Math.PI/S,u=l*r,d=u;for(let e=0;e<5;++e)d-=(d-s*Math.sin(d)-u)/(1-s*Math.cos(d));let f=Math.cos(d),p=Math.sin(d),m=o*(f-s),h=c*p,g=l/(1-s*f),_=-70*p*g,v=c*f*g,y=Math.hypot(m,h),T=-(l*l*o*o*o)/(y*y*y),E=T*m,D=T*h,O=C*r,k=Math.cos(O),A=Math.sin(O),j=k*m-A*h,M=A*m+k*h,N=k*_-A*v-C*M,P=A*_+k*v+C*j,F=k*E-A*D,I=A*E+k*D;this.x=this.anchorX+j,this.y=this.anchorY+M,this.vx=this.anchorVx+N,this.vy=this.anchorVy+P;let L=i+F,R=a+I;this.speed=Math.hypot(this.vx,this.vy),this.curvature=this.speed>.001?(this.vx*R-this.vy*L)/(this.speed*this.speed*this.speed):0}},E=.03,D=.034;function O(e,t,n){return Math.min(1,Math.max(0,(e-t)/(n-t)))}function k(e){return e*e*(3-2*e)}function A(e){let t=D**+k(O(e,.3,.92));return{pan:k(O(e,0,.4)),zoom:1/t,cloudZoom:.97/(t-E),fog:k(O(e,.7,.9)),fade:k(O(e,.86,.96)),comet:1-k(O(e,.2,.35))}}var j=null,M=class{constructor(e,t){if(this.shader=m.createShader(e),m.shaderSource(this.shader,t),m.compileShader(this.shader),!m.getShaderParameter(this.shader,m.COMPILE_STATUS))throw m.getShaderInfoLog(this.shader)}},N=class{constructor(e){this.prog=m.createProgram();for(let t of e)m.attachShader(this.prog,t.shader);if(m.linkProgram(this.prog),!m.getProgramParameter(this.prog,m.LINK_STATUS))throw m.getProgramInfoLog(this.prog);this.attrPos=m.getAttribLocation(this.prog,`vs_Pos`),this.attrNor=m.getAttribLocation(this.prog,`vs_Nor`),this.attrCol=m.getAttribLocation(this.prog,`vs_Col`),this.unifModel=m.getUniformLocation(this.prog,`u_Model`),this.unifModelInvTr=m.getUniformLocation(this.prog,`u_ModelInvTr`),this.unifViewProj=m.getUniformLocation(this.prog,`u_ViewProj`),this.unifColor=m.getUniformLocation(this.prog,`u_Color`),this.unifTime=m.getUniformLocation(this.prog,`u_Time`),this.unifLowFreqAmp=m.getUniformLocation(this.prog,`u_LowFreqAmp`),this.unifLowFreqScale=m.getUniformLocation(this.prog,`u_LowFreqScale`),this.unifFbmAmp=m.getUniformLocation(this.prog,`u_FbmAmp`),this.unifFbmScale=m.getUniformLocation(this.prog,`u_FbmScale`),this.unifOctaves=m.getUniformLocation(this.prog,`u_Octaves`),this.unifRoilSpeed=m.getUniformLocation(this.prog,`u_RoilSpeed`),this.unifPulsePeriod=m.getUniformLocation(this.prog,`u_PulsePeriod`),this.unifPulseStrength=m.getUniformLocation(this.prog,`u_PulseStrength`),this.unifHeat=m.getUniformLocation(this.prog,`u_Heat`),this.unifFlow=m.getUniformLocation(this.prog,`u_Flow`),this.unifBandBlend=m.getUniformLocation(this.prog,`u_BandBlend`),this.unifFlameHeight=m.getUniformLocation(this.prog,`u_FlameHeight`),this.unifTaper=m.getUniformLocation(this.prog,`u_Taper`),this.unifBands=m.getUniformLocation(this.prog,`u_Bands`),this.unifCameraPos=m.getUniformLocation(this.prog,`u_CameraPos`),this.unifCurvature=m.getUniformLocation(this.prog,`u_Curvature`),this.unifDimensions=m.getUniformLocation(this.prog,`u_Dimensions`),this.unifHorizon=m.getUniformLocation(this.prog,`u_Horizon`),this.unifAtmosphere=m.getUniformLocation(this.prog,`u_Atmosphere`),this.unifPan=m.getUniformLocation(this.prog,`u_Pan`),this.unifZoom=m.getUniformLocation(this.prog,`u_Zoom`),this.unifCloudZoom=m.getUniformLocation(this.prog,`u_CloudZoom`),this.unifSpin=m.getUniformLocation(this.prog,`u_Spin`),this.unifCloudDrift=m.getUniformLocation(this.prog,`u_CloudDrift`),this.unifFog=m.getUniformLocation(this.prog,`u_Fog`),this.unifFade=m.getUniformLocation(this.prog,`u_Fade`)}use(){j!==this.prog&&(m.useProgram(this.prog),j=this.prog)}setModelMatrix(e){if(this.use(),this.unifModel!==-1&&m.uniformMatrix4fv(this.unifModel,!1,e),this.unifModelInvTr!==-1){let i=t();n(i,e),r(i,i),m.uniformMatrix4fv(this.unifModelInvTr,!1,i)}}setViewProjMatrix(e){this.use(),this.unifViewProj!==-1&&m.uniformMatrix4fv(this.unifViewProj,!1,e)}setGeometryColor(e){this.use(),this.unifColor!==-1&&m.uniform4fv(this.unifColor,e)}setTime(e){this.use(),this.unifTime!==-1&&m.uniform1f(this.unifTime,e)}setFireballParams(e){this.use(),this.unifLowFreqAmp!==-1&&m.uniform1f(this.unifLowFreqAmp,e.displacement),this.unifLowFreqScale!==-1&&m.uniform1f(this.unifLowFreqScale,e.lobeScale),this.unifFbmAmp!==-1&&m.uniform1f(this.unifFbmAmp,e.detail),this.unifFbmScale!==-1&&m.uniform1f(this.unifFbmScale,e.detailScale),this.unifOctaves!==-1&&m.uniform1i(this.unifOctaves,e.octaves),this.unifRoilSpeed!==-1&&m.uniform1f(this.unifRoilSpeed,e.roilSpeed),this.unifPulsePeriod!==-1&&m.uniform1f(this.unifPulsePeriod,e.pulsePeriod),this.unifPulseStrength!==-1&&m.uniform1f(this.unifPulseStrength,e.pulseStrength),this.unifHeat!==-1&&m.uniform1f(this.unifHeat,e.heat),this.unifFlow!==-1&&m.uniform1f(this.unifFlow,e.flow),this.unifBandBlend!==-1&&m.uniform1f(this.unifBandBlend,e.bandBlend),this.unifFlameHeight!==-1&&m.uniform1f(this.unifFlameHeight,e.flameHeight),this.unifTaper!==-1&&m.uniform1f(this.unifTaper,e.taper),this.unifBands!==-1&&m.uniform1f(this.unifBands,e.bands)}setCurvature(e){this.use(),this.unifCurvature!==-1&&m.uniform1f(this.unifCurvature,e)}setCameraPos(e){this.use(),this.unifCameraPos!==-1&&m.uniform3fv(this.unifCameraPos,e)}setDimensions(e,t){this.use(),this.unifDimensions!==-1&&m.uniform2f(this.unifDimensions,e,t)}setBackgroundParams(e){this.use(),this.unifHorizon!==-1&&m.uniform1f(this.unifHorizon,e.horizon),this.unifAtmosphere!==-1&&m.uniform1f(this.unifAtmosphere,e.atmosphere)}setBackgroundView(e){this.use(),this.unifPan!==-1&&m.uniform1f(this.unifPan,e.pan),this.unifZoom!==-1&&m.uniform1f(this.unifZoom,e.zoom),this.unifCloudZoom!==-1&&m.uniform1f(this.unifCloudZoom,e.cloudZoom),this.unifSpin!==-1&&m.uniform1f(this.unifSpin,e.spin),this.unifCloudDrift!==-1&&m.uniform1f(this.unifCloudDrift,e.cloudDrift),this.unifFog!==-1&&m.uniform1f(this.unifFog,e.fog),this.unifFade!==-1&&m.uniform1f(this.unifFade,e.fade)}draw(e){this.use(),this.attrPos!=-1&&e.bindPos()&&(m.enableVertexAttribArray(this.attrPos),m.vertexAttribPointer(this.attrPos,4,m.FLOAT,!1,0,0)),this.attrNor!=-1&&e.bindNor()&&(m.enableVertexAttribArray(this.attrNor),m.vertexAttribPointer(this.attrNor,4,m.FLOAT,!1,0,0)),e.bindIdx(),m.drawElements(e.drawMode(),e.elemCount(),m.UNSIGNED_INT,0),this.attrPos!=-1&&m.disableVertexAttribArray(this.attrPos),this.attrNor!=-1&&m.disableVertexAttribArray(this.attrNor)}},P=`#version 300 es

//This is a vertex shader. While it is called a "shader" due to outdated conventions, this file
//is used to apply matrix transformations to the arrays of vertex data passed to it.
//Since this code is run on your GPU, each vertex is transformed simultaneously.
//If it were run on your CPU, each vertex would have to be processed in a FOR loop, one at a time.
//This simultaneous transformation allows your program to run much faster, especially when rendering
//geometry with millions of vertices.

uniform mat4 u_Model;       // The matrix that defines the transformation of the
                            // object we're rendering. In this assignment,
                            // this will be the result of traversing your scene graph.

uniform mat4 u_ModelInvTr;  // The inverse transpose of the model matrix.
                            // This allows us to transform the object's normals properly
                            // if the object has been non-uniformly scaled.

uniform mat4 u_ViewProj;    // The matrix that defines the camera's transformation.
                            // We've written a static matrix for you to use for HW2,
                            // but in HW3 you'll have to generate one yourself

uniform float u_Time;       // Seconds elapsed since the program started. Drives every
                            // animated term below so the fireball roils continuously.

in vec4 vs_Pos;             // The array of vertex positions passed to the shader

in vec4 vs_Nor;             // The array of vertex normals passed to the shader

in vec4 vs_Col;             // The array of vertex colors passed to the shader.

out vec4 fs_Nor;            // The array of normals that has been transformed by u_ModelInvTr. This is implicitly passed to the fragment shader.
out vec4 fs_LightVec;       // The direction in which our virtual light lies, relative to each vertex. This is implicitly passed to the fragment shader.
out vec4 fs_Col;            // The color of each vertex. This is implicitly passed to the fragment shader.

out float fs_Disp;          // Total displacement applied to this vertex, remapped to roughly [0, 1].
                            // The fragment shader uses this to drive the fireball's color gradient.
out float fs_Fbm;           // Just the high-frequency FBM layer, for finer color detail.
out float fs_Height;        // 0 at the root of the flame, 1 at the crown. The fragment shader's
                            // gradient runs along this: white-hot base, charred tip.
out float fs_Pulse;         // [0, 1] phase of the explosion cycle, so the fragment shader can
                            // flash the color in step with the geometry's swell.
out vec4 fs_Pos;            // The displaced world-space position, used for the view vector and
                            // for varying the flicker across the surface.
out vec3 fs_LocalPos;       // The same point before u_Model turns the comet to face its direction
                            // of travel, so the color can stream along the tail wherever it points.
out vec3 fs_ShapeNor;       // The undisplaced sphere's normal, turned by u_Model. Smooth where
                            // fs_Nor carries every ripple, for the comet's glow falloff.

const vec4 lightPos = vec4(5, 5, 3, 1); //The position of our virtual light, which is used to compute the shading of
                                        //the geometry in the fragment shader.

// ---------------------------------------------------------------------------
// Tunable art direction, set from \`params\` in main.ts. The flame height and
// taper are re-set every frame from the comet's speed.
// ---------------------------------------------------------------------------
uniform float u_LowFreqAmp;    // high amplitude, low frequency: the overall blobby silhouette
uniform float u_LowFreqScale;  // spatial frequency of the sinusoidal lobes
uniform float u_FbmAmp;        // low amplitude, high frequency: the crusty surface detail
uniform float u_FbmScale;      // spatial frequency of the FBM
uniform int   u_Octaves;       // how many FBM octaves are summed
uniform float u_RoilSpeed;     // how quickly the surface churns
uniform float u_PulsePeriod;   // seconds per "breath"/explosion cycle
uniform float u_PulseStrength; // 0 holds the ball steady, 1 is the full swell
uniform float u_FlameHeight;   // how far the sphere is stretched vertically into a flame
uniform float u_Taper;         // how far the crown is drawn in relative to the root
uniform float u_Curvature;     // signed curvature of the comet's path, per head radius

const int   MAX_OCTAVES = 8;    // hard bound so the FBM loop always terminates
const float MIN_TAPER   = 0.05; // keeps the crown from collapsing to zero width

// The offset's theoretical maximum is far larger than what its terms ever reach
// together: sampled over the sphere, offset/maxOffset only spans a narrow slice
// of [0, 1], which would leave the fragment shader's mottling stuck on one flat
// value. This expands that measured spread. Measured to hold across the sliders.
const float DISP_SPREAD = 2.6;
const float PULSE_MIN   = 0.85; // displacement multiplier at rest
const float PULSE_MAX   = 1.35; // displacement multiplier at the peak of a burst

// ---------------------------------------------------------------------------
// Toolbox functions 
// ---------------------------------------------------------------------------

// 1) Perlin's bias: pushes t toward 0 or 1 without changing its [0,1] range.
float bias(float b, float t)
{
    return pow(t, log(b) / log(0.5));
}

// 2) Perlin's gain: reshapes contrast around 0.5. Above 0.5 it pushes values
//    away from the middle, sharpening them; below 0.5 it pulls them toward it.
//    0.5 is the identity.
float gain(float g, float t)
{
    return (t < 0.5) ? bias(1.0 - g, 2.0 * t) * 0.5
                     : 1.0 - bias(1.0 - g, 2.0 - 2.0 * t) * 0.5;
}

// 3) Sawtooth wave: a value that ramps 0 -> 1 once per period. Used as the
//    "time since the last explosion" clock so the animation loops cleanly.
float sawtooth(float x, float period)
{
    return fract(x / period);
}

// 4) Exponential impulse: a fast attack / slow decay spike in [0,1]. Combined
//    with the sawtooth it gives the fireball a repeating outward burst.
float expImpulse(float x, float k)
{
    float h = k * x;
    return h * exp(1.0 - h);
}

// 5) Smootherstep (Perlin's quintic ease): C2-continuous ease-in/ease-out.
float smootherstep(float a, float b, float t)
{
    t = clamp((t - a) / (b - a), 0.0, 1.0);
    return t * t * t * (t * (t * 6.0 - 15.0) + 10.0);
}

// ---------------------------------------------------------------------------
// 3D value noise + fractal Brownian motion
// ---------------------------------------------------------------------------

float hash31(vec3 p)
{
    p = fract(p * vec3(0.1031, 0.1030, 0.0973));
    p += dot(p, p.yxz + 33.33);
    return fract((p.x + p.y) * p.z);
}

// Value noise: hash the 8 lattice corners and trilinearly interpolate them
// using a quintic falloff so the result has continuous derivatives.
float valueNoise(vec3 p)
{
    vec3 i = floor(p);
    vec3 f = fract(p);
    vec3 u = f * f * f * (f * (f * 6.0 - 15.0) + 10.0);

    float n000 = hash31(i + vec3(0.0, 0.0, 0.0));
    float n100 = hash31(i + vec3(1.0, 0.0, 0.0));
    float n010 = hash31(i + vec3(0.0, 1.0, 0.0));
    float n110 = hash31(i + vec3(1.0, 1.0, 0.0));
    float n001 = hash31(i + vec3(0.0, 0.0, 1.0));
    float n101 = hash31(i + vec3(1.0, 0.0, 1.0));
    float n011 = hash31(i + vec3(0.0, 1.0, 1.0));
    float n111 = hash31(i + vec3(1.0, 1.0, 1.0));

    return mix(mix(mix(n000, n100, u.x), mix(n010, n110, u.x), u.y),
               mix(mix(n001, n101, u.x), mix(n011, n111, u.x), u.y),
               u.z);
}

// Fractal Brownian motion: summed octaves of noise at doubling frequency and
// halving amplitude. Returns roughly [0, 1].
float fbm(vec3 p)
{
    float sum  = 0.0;
    float amp  = 0.5;
    float freq = 1.0;
    float norm = 0.0;


    for (int i = 0; i < MAX_OCTAVES; ++i)
    {
        if (i >= u_Octaves) break;

        sum  += amp * valueNoise(p * freq + float(i) * 17.3);
        norm += amp;
        amp  *= 0.5;
        freq *= 2.0;
    }

    return norm > 0.0 ? sum / norm : 0.5;
}

// ---------------------------------------------------------------------------
// Displacement
// ---------------------------------------------------------------------------

// Low-frequency, high-amplitude term: f(x, y, z) = h.
// A product of three sinusoids at incommensurate frequencies gives large,
// slowly-tumbling lobes that break up the sphere's silhouette, plus a vertical
// ripple that reads as heat rising through the ball.
float lowFrequencyHeight(vec3 p, float t)
{
    vec3 q = p * u_LowFreqScale;

    float lobes  = sin(1.5 * q.x + 0.90 * t)
                 * sin(1.9 * q.y - 0.70 * t + 1.7)
                 * sin(1.3 * q.z + 0.55 * t + 3.1);

    float ripple = sin(2.4 * q.y + 1.60 * t);

    // A slower, fatter wave keeps the ball from ever looking perfectly round.
    float swell  = sin(0.9 * q.x - 0.4 * t) * cos(1.1 * q.z + 0.6 * t);

    return 0.62 * lobes + 0.20 * ripple + 0.18 * swell;
}

// Looping "explosion" clock, normalized to [0, 1]: 0 at rest, 1 at the peak of
// a burst. The geometry swells with it and the fragment shader flashes with it.
float pulsePhase(float t)
{
    // Ramps 0 -> 1 once per period. max() keeps the period away from 0, which
    // would make the sawtooth NaN.
    float cycle = sawtooth(t, max(0.01, u_PulsePeriod));

    // Fading the impulse out over the tail of the cycle guarantees it is back
    // at exactly 0 when the sawtooth wraps, so the loop has no visible pop.
    float burst = expImpulse(cycle, 6.0) * (1.0 - smootherstep(0.75, 1.0, cycle));

    return smootherstep(0.0, 1.0, burst);
}

// ---------------------------------------------------------------------------
// Flame shape
//
// Fire does not bulge in every direction the way a liquid blob does, so the
// sphere is first bent into a teardrop and then displaced along +Y only. The
// root of a flame is anchored and smooth; everything that moves, moves upward.
//
// On the portfolio this flame is a comet: +Y is its tail, and u_Model turns it
// so the tail trails behind the direction of travel.
// ---------------------------------------------------------------------------

// Normalized position along the flame: 0 at the root, 1 at the crown.
float flameParam(vec3 dir)
{
    return 0.5 * (dir.y + 1.0);
}

// Bend the unit sphere into a comet: a round head at the root, drawn in toward
// the crown, and stretched out into the tail. This is the static silhouette the
// displacement is then layered on top of.
vec3 flameShape(vec3 dir, float radius)
{
    float u = flameParam(dir);

    // Easing the taper in above the waist keeps the root a full round dome and
    // pulls the width in only over the upper half.
    float taper = mix(1.0, max(MIN_TAPER, 1.0 - u_Taper), smootherstep(0.20, 1.0, u));

    // Only the upper half is stretched, so the head stays round however long the
    // tail gets. The stretch eases in from the equator, where it and its slope
    // are both still 1, so head and tail meet without a crease.
    float stretch = mix(1.0, u_FlameHeight, smootherstep(0.5, 0.9, u));

    return radius * vec3(dir.x * taper, dir.y * stretch, dir.z * taper);
}

// Curve the tail sideways so it follows the path the comet has just travelled
// rather than sticking straight out of a turn. Over a short stretch a curve of
// curvature k falls away from its tangent by k s^2 / 2 at distance s along it.
// Only the tail (+Y) bends; the head stays where it is.
vec3 bendTail(vec3 p)
{
    float s = max(p.y, 0.0);
    return vec3(p.x + 0.5 * u_Curvature * s * s, p.y, p.z);
}

// The displacement, which runs along +Y and nothing else. Writes the raw noise
// layers out through \`outSway\` / \`outDetail\` for the fragment shader's mottling.
vec3 flameOffset(vec3 dir, float radius, float t, out float outSway, out float outDetail)
{
    float u    = flameParam(dir);
    vec3  base = flameShape(dir, radius);

    float envelope = mix(PULSE_MIN, PULSE_MAX, pulsePhase(t));

    // At strength 0 the envelope flattens to 1.0 and the flame stops surging.
    float pulse = mix(1.0, envelope, u_PulseStrength);

    // The root is anchored and the crown is free, so the whole field is scaled
    // by height. This is what keeps the base a clean dome while the top frays.
    float rise = smootherstep(0.05, 0.95, u);

    outSway = lowFrequencyHeight(base, t);

    // Marching the sample point downward through the noise field makes the
    // detail appear to stream up the flame, the way real fire does.
    vec3  noisePos = base * u_FbmScale + vec3(0.0, -u_RoilSpeed * t, 0.0);
    float raw      = fbm(noisePos);

    // Gain below 0.5 softens the noise into rounded masses; bias then pulls the
    // midtones down so what survives reads as licks rather than lumps.
    outDetail = bias(0.42, gain(0.38, raw));

    // Flames reach upward, never down, so the tongues are a strictly positive
    // term confined to the crown. Sharpening it hard is what separates them into
    // distinct licks instead of one rolling bulge.
    float licks = bias(0.28, outDetail) * smootherstep(0.45, 1.0, u);

    float h = u_LowFreqAmp * outSway * rise
            + u_FbmAmp * (outDetail * 2.0 - 1.0) * rise
            + u_FbmAmp * 3.0 * licks;

    return vec3(0.0, h * pulse * radius, 0.0);
}

// Where a point in direction \`dir\` ends up. Used for the neighbour samples the
// recomputed normal is differenced from.
vec3 flamePoint(vec3 dir, float radius, float t)
{
    float sway, detail;
    return bendTail(flameShape(dir, radius) + flameOffset(dir, radius, t, sway, detail));
}

void main()
{
    fs_Col = vs_Col;                         // Pass the vertex colors to the fragment shader for interpolation

    // The icosphere is centered at the origin, so the surface normal is simply
    // the normalized position, and the radius is its length.
    vec3  dir    = normalize(vec3(vs_Nor));
    float radius = length(vec3(vs_Pos));

    float sway, detail;
    vec3  offset    = flameOffset(dir, radius, u_Time, sway, detail);
    vec3  unbent    = flameShape(dir, radius) + offset;
    vec3  displaced = bendTail(unbent);

    // Hand the displacement to the fragment shader, remapped to ~[0, 1], so the
    // color stays correlated with the geometry.
    // max() guards the case where both amplitude sliders are dialed to 0.
    float maxOffset = max(1e-4, (u_LowFreqAmp + u_FbmAmp) * PULSE_MAX * radius);
    fs_Disp  = clamp(0.5 + 0.5 * DISP_SPREAD * offset.y / maxOffset, 0.0, 1.0);
    fs_Fbm   = detail;
    fs_Pulse = u_PulseStrength * pulsePhase(u_Time);

    // How far up the flame this vertex sits, which is what drives the fragment
    // shader's gradient: hottest at the root, charred at the crown. The head runs
    // from -radius and the tail out to radius * u_FlameHeight.
    fs_Height = clamp((unbent.y + radius) / max(1e-4, radius * (1.0 + u_FlameHeight)), 0.0, 1.0);

    // Recompute the normal by finite differencing across the displaced surface.
    // Without this the lighting still reads as a smooth sphere and none of the
    // displacement is visible in the shading.
    vec3 up        = abs(dir.y) < 0.99 ? vec3(0.0, 1.0, 0.0) : vec3(1.0, 0.0, 0.0);
    vec3 tangent   = normalize(cross(up, dir));
    vec3 bitangent = cross(dir, tangent);

    // Roughly the edge length of the icosphere at the default tesselation, so
    // the difference tracks features the mesh can actually resolve.
    const float eps = 0.02;
    vec3 pt = flamePoint(normalize(dir + tangent   * eps), radius, u_Time);
    vec3 pb = flamePoint(normalize(dir + bitangent * eps), radius, u_Time);
    vec3 displacedNor = normalize(cross(pt - displaced, pb - displaced));

    mat3 invTranspose = mat3(u_ModelInvTr);
    fs_ShapeNor = invTranspose * dir;
    fs_Nor = vec4(invTranspose * displacedNor, 0);          // Pass the vertex normals to the fragment shader for interpolation.
                                                            // Transform the geometry's normals by the inverse transpose of the
                                                            // model matrix. This is necessary to ensure the normals remain
                                                            // perpendicular to the surface after the surface is transformed by
                                                            // the model matrix.


    vec4 modelposition = u_Model * vec4(displaced, 1.0);   // Temporarily store the transformed vertex positions for use below

    fs_Pos = modelposition;                  // The fragment shader needs the world-space position for
                                             // its view vector and for the spatial flicker phase
    fs_LocalPos = displaced;

    fs_LightVec = lightPos - modelposition;  // Compute the direction in which the light source lies

    gl_Position = u_ViewProj * modelposition;// gl_Position is a built-in variable of OpenGL which is
                                             // used to render the final positions of the geometry's vertices
}
`,F=`#version 300 es

// This is a fragment shader. If you've opened this file first, please
// open and read lambert.vert.glsl before reading on.
// Unlike the vertex shader, the fragment shader actually does compute
// the shading of geometry. For every pixel in your program's output
// screen, the fragment shader is run for every bit of geometry that
// particular pixel overlaps. By implicitly interpolating the position
// data passed into the fragment shader by the vertex shader, the fragment shader
// can compute what color to apply to its pixel based on things like vertex
// position, light position, and vertex color.
precision highp float;

uniform vec4 u_Color;      // The color with which to render this instance of geometry.
                           // Here it tints the whole gradient, so a neutral white
                           // leaves the palette exactly as authored.

uniform float u_Time;      // Seconds elapsed since the program started. Same clock the
                           // vertex shader displaces with, so color and geometry stay in step.

uniform vec3 u_CameraPos;  // World-space eye position, for the grazing-angle rim glow.

uniform float u_Heat;      // 0.5 leaves the gradient alone; higher pushes more of the
                           // surface toward the hot end, lower cools it down.

uniform float u_Flow;      // How strongly the flowing noise warps the color gradient.

uniform float u_Bands;     // Number of quantized color bands. Below 2 the gradient stays
                           // smooth; higher values give the painted, cel-shaded look.

uniform float u_BandBlend; // How much of each band's width is spent crossing into the
                           // next: 0 gives hard cel edges, 1 an unbroken gradient.

// Shared with the vertex shader, so the color streams upward at the same rate
// the geometry churns at.
uniform float u_RoilSpeed;

// These are the interpolated values out of the rasterizer, so you can't know
// their specific values without knowing the vertices that contributed to them
in vec4 fs_Nor;
in vec4 fs_LightVec;
in vec4 fs_Col;

in float fs_Disp;          // The vertex shader's total displacement, remapped to [0, 1].
                           // This is what ties the color gradient to the geometry.
in float fs_Fbm;           // Just the high-frequency FBM layer, for finer mottling.
in float fs_Height;        // 0 at the root of the flame, 1 at the crown.
in float fs_Pulse;         // [0, 1] phase of the explosion cycle.
in vec4 fs_Pos;            // Displaced world-space position of this fragment.
in vec3 fs_LocalPos;       // The same point in the comet's own frame, tail along +Y.
in vec3 fs_ShapeNor;       // Normal of the smooth shape under the displacement.

out vec4 out_Col; // This is the final output color that you will see on your
                  // screen for the pixel that is currently being processed.

// ---------------------------------------------------------------------------
// Comet palette. On the portfolio the flame is a comet, so where the fireball
// ran from a charred crown to a white-hot root, this runs from the end of the
// tail to the nucleus; fs_Disp still picks the stop, so crests read bright and
// crevices dim. It is drawn additively, so black here is not dark but clear:
// the tail thins away into the sky instead of ending in a hard edge.
// ---------------------------------------------------------------------------
// Brightest at the nucleus and dimming out along the tail. The coma round the
// head carries the faint green of a real comet's gas, and the tail the blue of
// its ion tail. Stop placement is the fireball's: the pale end owns a wide
// slice at the head, the dark end a narrow one at the tip.
const vec3 VOID    = vec3(0.00, 0.00, 0.00); // the tip, gone into the sky
const vec3 WISP    = vec3(0.03, 0.06, 0.22); // the tail's last faint reach
const vec3 DEEP    = vec3(0.08, 0.20, 0.62); // deep blue of the far tail
const vec3 ION     = vec3(0.20, 0.52, 1.00); // the body of the tail
const vec3 CYAN    = vec3(0.45, 0.85, 1.00);
const vec3 COMA    = vec3(0.72, 1.00, 0.90); // the green-tinged glow round the head
const vec3 NUCLEUS = vec3(1.00, 1.00, 1.00); // white at the head
const vec3 HALO    = vec3(0.40, 0.90, 0.85); // tint of the thin outer edge of the glow

// ---------------------------------------------------------------------------
// Toolbox functions (see the Toolbox Functions slides). GLSL has no include
// mechanism, so the ones shared with the vertex shader are repeated here.
// ---------------------------------------------------------------------------

// 1) Perlin's bias: pushes t toward 0 or 1 without leaving the [0,1] range.
float bias(float b, float t)
{
    return pow(t, log(b) / log(0.5));
}

// 2) Perlin's gain: reshapes contrast around 0.5. Above 0.5 it pushes values
//    away from the middle, sharpening them; below 0.5 it pulls them toward it.
//    0.5 is the identity.
float gain(float g, float t)
{
    return (t < 0.5) ? bias(1.0 - g, 2.0 * t) * 0.5
                     : 1.0 - bias(1.0 - g, 2.0 - 2.0 * t) * 0.5;
}

// 3) Smootherstep (Perlin's quintic ease): C2-continuous ease-in/ease-out. Used
//    to blend between palette stops so no band edge is visible.
float smootherstep(float a, float b, float t)
{
    t = clamp((t - a) / (b - a), 0.0, 1.0);
    return t * t * t * (t * (t * 6.0 - 15.0) + 10.0);
}

// 4) Cubic pulse: a smooth bump of width w centered on c, zero everywhere else.
//    Targets a narrow slice of the gradient without touching the rest of it.
float cubicPulse(float c, float w, float x)
{
    x = abs(x - c);
    if (x > w) {
        return 0.0;
    }
    x /= w;
    return 1.0 - x * x * (3.0 - 2.0 * x);
}

// ---------------------------------------------------------------------------
// Per-pixel noise. The vertex shader has its own copy; GLSL has no include
// mechanism, and this has to be evaluated per fragment rather than interpolated
// from the vertices, or the color boundaries could only ever be straight lines
// between one vertex and the next.
// ---------------------------------------------------------------------------

// Both fixed rather than slider-driven. The octave count keeps the per-pixel
// cost constant, and the scale is in object units rather than a multiple of
// u_FbmScale, so pushing the geometry's detail up does not shatter the color
// into speckle - the two are separate art-direction decisions.
const int   COLOR_OCTAVES = 3;
const float COLOR_SCALE   = 1.5;

float hash31(vec3 p)
{
    p = fract(p * vec3(0.1031, 0.1030, 0.0973));
    p += dot(p, p.yxz + 33.33);
    return fract((p.x + p.y) * p.z);
}

float valueNoise(vec3 p)
{
    vec3 i = floor(p);
    vec3 f = fract(p);
    vec3 u = f * f * f * (f * (f * 6.0 - 15.0) + 10.0);

    float n000 = hash31(i + vec3(0.0, 0.0, 0.0));
    float n100 = hash31(i + vec3(1.0, 0.0, 0.0));
    float n010 = hash31(i + vec3(0.0, 1.0, 0.0));
    float n110 = hash31(i + vec3(1.0, 1.0, 0.0));
    float n001 = hash31(i + vec3(0.0, 0.0, 1.0));
    float n101 = hash31(i + vec3(1.0, 0.0, 1.0));
    float n011 = hash31(i + vec3(0.0, 1.0, 1.0));
    float n111 = hash31(i + vec3(1.0, 1.0, 1.0));

    return mix(mix(mix(n000, n100, u.x), mix(n010, n110, u.x), u.y),
               mix(mix(n001, n101, u.x), mix(n011, n111, u.x), u.y),
               u.z);
}

float fbm(vec3 p)
{
    float sum = 0.0, amp = 0.5, freq = 1.0, norm = 0.0;
    for (int i = 0; i < COLOR_OCTAVES; ++i)
    {
        sum  += amp * valueNoise(p * freq + float(i) * 17.3);
        norm += amp;
        amp  *= 0.5;
        freq *= 2.0;
    }
    return sum / norm;
}

// Quantize x into \`bands\` steps, crossing between them over a \`blend\` fraction
// of each step instead of snapping. blend near 0 gives hard cel edges, blend of
// 1 gives back a continuous ramp. Monotone and continuous at every boundary.
float posterize(float x, float bands, float blend)
{
    if (bands < 2.0) {
        return x;
    }
    float scaled = x * bands;
    float cell   = floor(scaled);
    float f      = fract(scaled);
    float w      = clamp(blend, 0.002, 1.0) * 0.5;
    return (cell + smootherstep(0.5 - w, 0.5 + w, f)) / bands;
}

// Walk up the palette, easing between each pair of stops. Layering the mixes
// this way keeps the ramp continuous while letting each band own its own slice.
vec3 cometRamp(float t)
{
    t = clamp(t, 0.0, 1.0);

    vec3 c = VOID;
    c = mix(c, WISP,    smootherstep(0.00, 0.13, t));
    c = mix(c, DEEP,    smootherstep(0.09, 0.27, t));
    c = mix(c, ION,     smootherstep(0.22, 0.44, t));
    c = mix(c, CYAN,    smootherstep(0.40, 0.60, t));
    c = mix(c, COMA,    smootherstep(0.56, 0.74, t));
    c = mix(c, NUCLEUS, smootherstep(0.72, 0.88, t));
    return c;
}

void main()
{
    vec3 nor  = normalize(vec3(fs_Nor));
    vec3 lgt  = normalize(vec3(fs_LightVec));
    vec3 view = normalize(u_CameraPos - vec3(fs_Pos));

    // Flowing noise, sampled per pixel in the comet's own frame and marched
    // downward through the field so it streams up the flame, out along the tail
    // whichever way the comet is facing.
    vec3  flowPos = fs_LocalPos * COLOR_SCALE
                  + vec3(0.0, -u_RoilSpeed * u_Time, 0.0);
    float flow    = fbm(flowPos);

    // The dominant term is position along the flame: brightest at the root,
    // which is the comet's head, and fading on the way up until the crown, the
    // end of its tail, is gone. Gain above 0.5 drives the two ends apart, which
    // widens the white nucleus and lets the tail's tip fade out sooner.
    float heat = gain(0.68, 1.0 - fs_Height);

    // Warp that gradient with the flowing noise. Displacing the coordinate
    // rather than the color is what makes whole tongues of one band push up into
    // the next, the way the boundaries in real fire wander and reconnect.
    heat += u_Flow * (flow - 0.5) * 2.0;

    // Stay correlated with the vertex shader's displacement: a tongue that has
    // pushed further up has travelled further from the fuel, so it reads cooler
    // than the body it came from.
    heat -= 0.24 * (fs_Disp - 0.5);

    // Fold in the fine FBM layer on its own, which mottles the flame at a finer
    // scale than the low-frequency sway reaches.
    heat *= mix(0.84, 1.12, fs_Fbm);

    // The surge cycle flashes the whole flame hotter as it swells.
    heat += 0.16 * fs_Pulse;

    // Finally the heat slider biases the whole ramp hotter or cooler.
    heat = bias(clamp(u_Heat, 0.05, 0.95), clamp(heat, 0.0, 1.0));

    // Quantize into bands for the painted look of stylized fire. The warp above
    // has already bent the boundaries into organic shapes, so this only decides
    // how hard the steps between them read.
    heat = posterize(heat, u_Bands, u_BandBlend);

    vec3 color = cometRamp(heat);

    // Fire is emissive, so the Lambert term barely registers - just enough to
    // keep the form readable. It never drives the unlit side toward black.
    float diffuseTerm = max(dot(nor, lgt), 0.0);
    color *= mix(0.92, 1.10, diffuseTerm);

    // Dust: a narrow slice of the noise, showing only out along the tail, where
    // a few flecks catch the light.
    float dust = cubicPulse(0.86, 0.06, fs_Fbm) * smootherstep(0.55, 1.0, fs_Height);
    color += CYAN * dust * 0.8;

    // A comet is a glowing cloud rather than a solid, so in place of the
    // fireball's rim glow it is brightest where the line of sight passes square
    // through it and thins to nothing at the silhouette. abs() because both
    // sides of the cloud are drawn, and both glow; together they only saturate
    // to white right at the nucleus. Each surge of the pulse swells the glow
    // out toward the edge. How much cloud the eye looks through depends on its
    // overall shape, not its surface ripples, so this takes the smooth normal:
    // the displaced one would break the glow up into speckle at this size.
    float facing = abs(dot(normalize(fs_ShapeNor), view));
    float glow   = 0.75 * pow(facing, mix(1.6, 1.1, fs_Pulse));

    // Where the glow thins out it also cools from white to the green-blue of
    // the coma, so the head is a white core inside a coloured halo.
    color *= mix(HALO, vec3(1.0), facing);

    // Blended additively (see main.ts), so this adds light to the sky behind
    // the comet rather than painting over it.
    out_Col = vec4(color * glow * u_Color.rgb, 1.0);
}
`,I=`#version 300 es

// The background is drawn as a single full-screen quad. The Square's vertices
// are already in normalized device coordinates, so they go straight to
// gl_Position with no camera transform at all: this geometry lives in screen
// space, and the fragment shader draws the whole scene procedurally from the
// interpolated quad coordinate.

in vec4 vs_Pos;      // The quad's corners, already at the edges of the screen

out vec2 fs_Pos;     // Screen position in [-1, 1], before any aspect correction

void main()
{
    fs_Pos = vs_Pos.xy;

    // No u_Model / u_ViewProj: writing the vertex straight through is what
    // pins this quad to the screen while the camera orbits the flame.
    gl_Position = vs_Pos;
}
`,L=`#version 300 es

// Procedural background: an Earth-sized sphere filling the lower part of the
// frame, its atmosphere fading up into starfield. Nothing here is textured or
// modelled - the planet is a single circle whose centre sits far below the
// screen, shaded as a sphere and surfaced with noise.
precision highp float;

uniform float u_Time;        // Seconds since start, for star twinkle.
uniform vec2  u_Dimensions;  // Canvas size in pixels, used only for the aspect ratio.
uniform float u_Horizon;     // Screen height at which the limb crosses the centre line.
uniform float u_Atmosphere;  // Thickness of the atmospheric halo, as a fraction of the radius.

// The scroll-driven landing, set from Descent.ts. At the top of the page they
// leave the scene exactly as the standalone project drew it: no pan, both zooms
// 1, no fog, no fade.
uniform float u_Pan;         // 0 at rest, 1 once the camera looks straight at the planet's centre.
uniform float u_Zoom;        // Magnification of the ground, about the middle of the screen.
uniform float u_CloudZoom;   // Magnification of the cloud layer. It is nearer the camera, so it
                             // grows faster than the ground: the parallax that makes the zoom
                             // read as a fall rather than a picture being enlarged.
uniform float u_Spin;        // How far the planet has turned, in radians.
uniform float u_CloudDrift;  // How far the clouds have drifted through their noise.
uniform float u_Fog;         // 0 to 1: the white-out of dropping through the cloud deck.
uniform float u_Fade;        // 0 to 1: the blend into the page's own background colour.

in vec2 fs_Pos;

out vec4 out_Col;

// ---------------------------------------------------------------------------
// Scene constants
// ---------------------------------------------------------------------------

// Far larger than the screen, which is the whole trick: only a shallow arc of
// the circle is ever visible, so it reads as the limb of something enormous
// rather than as a ball sitting in frame.
const float EARTH_RADIUS = 3.2;

// A perfectly level horizon reads as a flat backdrop. A few degrees of tilt is
// what makes it read as a planet seen from orbit.
const float TILT = -0.17;

// Off the top-right corner, matching the glow drawn at the same place below.
const vec3 SUN_DIR = normalize(vec3(0.55, 0.62, 0.56));

const vec3 SPACE         = vec3(0.004, 0.006, 0.014);
const vec3 OCEAN_DEEP    = vec3(0.008, 0.028, 0.098);
const vec3 OCEAN_SHALLOW = vec3(0.034, 0.125, 0.305);
const vec3 LAND          = vec3(0.115, 0.120, 0.105);
const vec3 CLOUD         = vec3(0.920, 0.940, 0.970);
const vec3 SKY           = vec3(0.350, 0.620, 1.000); // atmospheric scattering tint
const vec3 FOG           = vec3(0.955, 0.965, 0.980); // inside the cloud deck
const vec3 PAGE          = vec3(250.0 / 255.0);       // the content page's background, rgb(250, 250, 250)

// The stars and the sun are far beyond the planet, so while the camera pans
// they slide by at only this fraction of its speed.
const float SKY_PARALLAX = 0.2;

// Zooming in adds octaves of noise so the surface keeps its detail; this caps
// how many, since by the deepest zoom the fog covers everything anyway.
const int MAX_OCTAVES = 11;

// ---------------------------------------------------------------------------
// Noise. GLSL has no include mechanism, so this is the same value-noise
// construction the other two shaders use, with a 2D hash added for the stars.
// ---------------------------------------------------------------------------

float hash31(vec3 p)
{
    p = fract(p * vec3(0.1031, 0.1030, 0.0973));
    p += dot(p, p.yxz + 33.33);
    return fract((p.x + p.y) * p.z);
}

float hash21(vec2 p)
{
    vec3 q = fract(vec3(p.xyx) * vec3(0.1031, 0.1030, 0.0973));
    q += dot(q, q.yzx + 33.33);
    return fract((q.x + q.y) * q.z);
}

float valueNoise(vec3 p)
{
    vec3 i = floor(p);
    vec3 f = fract(p);
    vec3 u = f * f * f * (f * (f * 6.0 - 15.0) + 10.0);

    float n000 = hash31(i + vec3(0.0, 0.0, 0.0));
    float n100 = hash31(i + vec3(1.0, 0.0, 0.0));
    float n010 = hash31(i + vec3(0.0, 1.0, 0.0));
    float n110 = hash31(i + vec3(1.0, 1.0, 0.0));
    float n001 = hash31(i + vec3(0.0, 0.0, 1.0));
    float n101 = hash31(i + vec3(1.0, 0.0, 1.0));
    float n011 = hash31(i + vec3(0.0, 1.0, 1.0));
    float n111 = hash31(i + vec3(1.0, 1.0, 1.0));

    return mix(mix(mix(n000, n100, u.x), mix(n010, n110, u.x), u.y),
               mix(mix(n001, n101, u.x), mix(n011, n111, u.x), u.y),
               u.z);
}

// The octave count is fractional: the last octave fades in by its fraction, so
// detail grows smoothly with the zoom instead of popping in an octave at a time.
float fbm(vec3 p, float octaves)
{
    float sum = 0.0, amp = 0.5, freq = 1.0, norm = 0.0;
    for (int i = 0; i < MAX_OCTAVES; ++i)
    {
        float weight = clamp(octaves - float(i), 0.0, 1.0);
        if (weight <= 0.0) break;
        sum  += weight * amp * valueNoise(p * freq + float(i) * 17.3);
        norm += weight * amp;
        amp  *= 0.5;
        freq *= 2.0;
    }
    return sum / norm;
}

vec2 rotate2(vec2 v, float a)
{
    float c = cos(a), s = sin(a);
    return vec2(v.x * c - v.y * s, v.x * s + v.y * c);
}

// The point on the planet under a scene position, as a unit normal: the sphere
// reconstructed from the disc coordinate, then turned about the pole by the
// planet's spin. \`toward\` is measured from the planet's centre.
vec3 surfacePoint(vec2 toward)
{
    vec2  uv = toward / EARTH_RADIUS;
    float z  = sqrt(max(0.0, 1.0 - min(1.0, dot(uv, uv))));
    vec3  n  = vec3(uv, z);
    float ca = cos(u_Spin), sa = sin(u_Spin);
    return vec3(n.x * ca + n.z * sa, n.y, -n.x * sa + n.z * ca);
}

// One star per grid cell at most, placed at a hashed position inside it. Most
// cells are left empty, which is what keeps the field sparse and irregular
// rather than looking like a dot screen.
float starField(vec2 p)
{
    vec2  cell = floor(p);
    vec2  f    = fract(p);
    float h    = hash21(cell);

    if (h < 0.90) {
        return 0.0;
    }

    vec2  pos = vec2(hash21(cell + 11.3), hash21(cell + 27.7));
    float mag = (h - 0.90) / 0.10;

    // Slow, per-star-offset twinkle.
    float twinkle = 0.7 + 0.3 * sin(u_Time * 1.7 + h * 63.0);

    return mag * twinkle * smoothstep(0.07, 0.0, length(f - pos));
}

void main()
{
    // Aspect-correct screen coordinates: y stays in [-1, 1] and x widens with
    // the canvas, so the planet stays circular at any window shape.
    vec2 screen = fs_Pos;
    screen.x *= u_Dimensions.x / max(1.0, u_Dimensions.y);

    // The scene is tilted so the limb runs diagonally across the frame, which
    // puts the planet's centre below and a little to the right of the screen.
    // The camera pans toward that point, then zooms in about the middle.
    vec2 center = vec2(0.0, u_Horizon - EARTH_RADIUS);
    vec2 look   = rotate2(center, -TILT) * u_Pan;
    vec2 p      = look + screen / u_Zoom;
    vec2 q      = rotate2(p, TILT);

    vec2  toward = q - center;
    float dist   = length(toward);
    float t      = dist / EARTH_RADIUS;   // exactly 1.0 on the limb

    // ---- space ------------------------------------------------------------
    // Too far away to zoom, and panning past at a fraction of the speed.
    vec2 sky   = screen + look * SKY_PARALLAX;
    vec3 color = SPACE;
    color += vec3(1.0, 0.97, 0.93) * starField(rotate2(sky, TILT) * 28.0);

    // A distant sun just off the top-right corner. It is the same direction
    // that lights the planet, so the whole frame agrees on where the light is.
    float sunDist = length(sky - vec2(1.35, 0.78));
    color += vec3(1.0, 0.95, 0.88) * 0.16 / (1.0 + 26.0 * sunDist * sunDist);

    // ---- atmosphere -------------------------------------------------------
    // Outside the disc the air thins exponentially into vacuum. This is the
    // band that blends the planet into the black at the top of the frame.
    float halo = clamp(exp(-(dist - EARTH_RADIUS)
                           / max(0.001, u_Atmosphere * EARTH_RADIUS)), 0.0, 1.0);

    // Only the sunlit side of the limb scatters, so the halo fades out around
    // the unlit edge instead of ringing the planet evenly.
    vec2  limbDir   = toward / max(1e-4, dist);
    float haloLight = smoothstep(-0.45, 0.90, dot(vec3(limbDir, 0.0), SUN_DIR));

    color += SKY * halo * haloLight * 0.9;

    // ---- planet surface ---------------------------------------------------
    // Reconstruct the sphere's normal from the disc coordinate, which is what
    // lets the surface be shaded and textured as a sphere rather than a circle.
    vec2  uv = toward / EARTH_RADIUS;
    float z  = sqrt(max(0.0, 1.0 - min(1.0, dot(uv, uv))));
    vec3  n  = vec3(uv, z);

    // The lookup turns slowly about the pole so the planet rotates under us.
    vec3 sp = surfacePoint(toward);

    // Every doubling of the zoom gets another octave, so the coastlines keep
    // their detail all the way down.
    float continents = fbm(sp * 1.8, 4.0 + log2(u_Zoom));
    vec3  surface    = mix(OCEAN_DEEP, OCEAN_SHALLOW, smoothstep(0.30, 0.56, continents));
    surface = mix(surface, LAND, smoothstep(0.54, 0.62, continents));

    // Clouds are a second, finer field drifting at its own rate, so they slide
    // over the continents instead of being locked to them. Two layers at
    // different scales keep the banks from reading as one blurry blob. They
    // sit nearer the camera than the ground, so they are looked up through
    // their own, faster zoom.
    vec2  cloudToward = rotate2(look + screen / u_CloudZoom, TILT) - center;
    vec3  cloudPos    = surfacePoint(cloudToward) * 6.5 + vec3(0.0, 0.0, u_CloudDrift);
    float cloudDetail = log2(u_CloudZoom);
    float clouds      = fbm(cloudPos, 5.0 + cloudDetail) * 0.72
                      + fbm(cloudPos * 2.7, 4.0 + cloudDetail) * 0.28;
    // Nearing the deck, the clouds thicken: they spread out from the banks into
    // the gaps until they close over entirely, so the camera flies into them
    // rather than just watching the picture turn white. Measured in doublings
    // of the cloud zoom, which is how the approach to the deck feels.
    float approach   = clamp((log2(u_CloudZoom) - 2.0) / 4.5, 0.0, 1.0);
    float cloudCover = smoothstep(0.47, 0.66, clouds + 0.3 * approach);
    surface = mix(surface, CLOUD, cloudCover * 0.88);

    // Wrapped diffuse. A hard terminator would put half the disc in shadow; the
    // reference is lit from over the shoulder with the night side out of frame.
    // Kept deliberately below 1.0 at the top end: the planet is a backdrop, and
    // a brighter one would swallow the white-hot base of the flame in front.
    float light = smoothstep(-0.35, 0.85, dot(n, SUN_DIR));
    surface *= mix(0.04, 0.92, light);

    // Along the limb the line of sight passes through far more air than it does
    // looking straight down, so the last sliver of the disc washes out to blue.
    surface = mix(surface, SKY * 1.3, smoothstep(0.88, 1.0, t) * 0.8 * light);

    // Falling into the atmosphere puts more and more air between the camera and
    // the ground, so the view hazes over to a lighter blue on the way down.
    float haze = clamp(log2(u_Zoom) / 4.0, 0.0, 1.0);
    surface = mix(surface, SKY * 0.75, haze * 0.35);

    // And the nearer the cloud tops, the more they read as the brilliant white
    // they are in full sun, rather than the dimmed grey of a distant view.
    surface = mix(surface, FOG, cloudCover * approach * 0.6);

    // ---- composite --------------------------------------------------------
    // fwidth gives the edge a one-pixel blend at any resolution, so the limb
    // does not alias into a staircase.
    float aa   = max(fwidth(t) * 1.5, 1e-5);
    float disc = smoothstep(1.0 + aa, 1.0 - aa, t);

    color = mix(color, surface, disc);

    // ---- landing ----------------------------------------------------------
    // Dropping into the cloud deck. The white-out comes in through wisps of it
    // that swell and slide out past the edges of the screen as the camera
    // falls, and through the banks already in view before the gaps between
    // them, so it billows in rather than washing over evenly.
    float wisps = fbm(vec3(screen * 2.5 / sqrt(u_CloudZoom), 3.7), 4.0);
    float fog   = clamp(u_Fog * 2.2 - 1.2 + 0.5 * cloudCover + 0.6 * wisps, 0.0, 1.0);
    color = mix(color, FOG, fog);

    // Then settle on the page's own background, exactly, so the content
    // section below carries on from the canvas with no visible seam.
    color = mix(color, PAGE, u_Fade);

    out_Col = vec4(color, 1.0);
}
`,R=1.5,z=.012,B=.02,V=12,H=16,U=6.5,W=.75,G=290,K=.3,q=.5,J=c(0,0,100),Y={tesselations:5,displacement:.18,lobeScale:1.2,detail:.37,detailScale:6,octaves:5,roilSpeed:1.1,pulsePeriod:4.7,pulseStrength:.59,heat:.5,flow:.42,bandBlend:.79,flameHeight:1.5,taper:.12,bands:0,horizon:-.3,atmosphere:.028};function X(e){let t=new N([new M(e.VERTEX_SHADER,P),new M(e.FRAGMENT_SHADER,F)]),n=new _(c(0,0,0),1,Y.tesselations);return n.create(),{lambert:t,icosphere:n}}function Z(){let e=document.getElementById(`hero-canvas`);if(!e)return;let n=e.getContext(`webgl2`);if(!n)return;h(n);let r=new v(c(0,0,0));r.create();let s=new y(e);s.setClearColor(.004,.006,.014,1);let l=new N([new M(n.VERTEX_SHADER,I),new M(n.FRAGMENT_SHADER,L)]),u=X(n),d=new T,f={...Y},p=t(),m=t(),g=0,_=0,b=!1,x=-1;window.addEventListener(`pointermove`,e=>{e.pointerType===`mouse`&&(g=e.clientX,_=e.clientY,b=!0)},{passive:!0});function S(){let t=Math.min(window.devicePixelRatio||1,R),n=Math.max(1,Math.round(e.clientWidth*t)),r=Math.max(1,Math.round(e.clientHeight*t));(e.width!==n||e.height!==r)&&s.setSize(n,r)}let C=e.closest(`.home-hero`)||e,w={pan:0,zoom:1,cloudZoom:1,spin:0,cloudDrift:0,fog:0,fade:0},E=-1,D=performance.now(),O=0,k=0;function j(){S();let t=(performance.now()-D)*.001,c=Math.min(t-O,.1);O=t,n.viewport(0,0,e.width,e.height),s.clear();let h=C.getBoundingClientRect(),v=e.getBoundingClientRect(),y=h.height-v.height,T=y>0?Math.min(1,Math.max(0,-h.top/y)):0;E=E<0?T:E+(T-E)*(1-Math.exp(-c*V));let M=A(E);if(w.pan=M.pan,w.zoom=M.zoom,w.cloudZoom=M.cloudZoom,w.fog=M.fog,w.fade=M.fade,w.spin+=c*z/M.zoom,w.cloudDrift+=c*B/M.cloudZoom,n.disable(n.DEPTH_TEST),l.setTime(t),l.setDimensions(e.width,e.height),l.setBackgroundParams(Y),l.setBackgroundView(w),l.draw(r),u&&b&&M.comet>0&&v.width>=1&&v.height>=1){let e=g-v.left,r=v.bottom-_;x<0&&(d.reset(e,r),x=t),d.update(e,r,c,t);let l=1-Math.exp(-d.speed/G);f.flameHeight=Y.flameHeight+(U-Y.flameHeight)*l,f.taper=Y.taper+(W-Y.taper)*l;let h=Math.min(1,(t-x)/q),y=H*h*h*(3-2*h);a(p,[2*d.x/v.width-1,2*d.y/v.height-1,0]),i(p,p,[2*y/v.width,2*y/v.height,-.1]),o(m,Math.atan2(d.vx,-d.vy));let b=Math.max(-.3,Math.min(K,d.curvature*H));n.enable(n.BLEND),n.blendFunc(n.ONE,n.ONE),u.lambert.setTime(t),u.lambert.setFireballParams(f),u.lambert.setCurvature(b),s.render(p,m,J,u.lambert,[u.icosphere],M.comet),n.disable(n.BLEND)}k=requestAnimationFrame(j)}new IntersectionObserver(e=>{let t=e[e.length-1].isIntersecting;t&&!k?k=requestAnimationFrame(j):!t&&k&&(cancelAnimationFrame(k),k=0)}).observe(e)}Z();