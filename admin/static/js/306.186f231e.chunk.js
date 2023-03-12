"use strict";(self.webpackChunkmooli_admin=self.webpackChunkmooli_admin||[]).push([[306],{306:function(e,a,t){t.r(a);var n=t(2982),r=t(1413),i=t(885),s=t(2791),o=t(6153),c=t(7988),l=t(2357),d=t(6187),m=t(8284),u=t(6919),g=t(3002),f=t(1815),p=t(7705),h=t(5977),y=t.n(h),x=t(9875),b=t(6030),j=t(5956),v=t(2549),Z=t(5702),k=t(577),C=t(184);a.default=function(e){var a,t=(0,b.v9)((function(e){return e.package.packageList})),h=(0,p.cI)(),T=h.register,N=h.handleSubmit,D=h.errors,I={name:"",image:"",categoryTypeId:""},S=(0,s.useState)(I),w=(0,i.Z)(S,2),_=w[0],z=w[1],q=(0,b.I0)();(0,s.useEffect)((function(){M(""),q((0,v.xp)()),e.editData&&z(e.editData)}),[e.editData]);var E=(0,s.useState)(""),L=(0,i.Z)(E,2),F=L[0],M=L[1];return(0,C.jsx)(o.Z,{children:(0,C.jsx)(c.Z,{sm:"12",children:(0,C.jsxs)(l.Z,{children:[(0,C.jsxs)(d.Z,{className:"p-3 border-bottom mb-0",children:[(0,C.jsx)("i",{className:"mdi mdi-alert-box mr-2"}),e.editData?e.editData.name+" | Edit Sub Category":"Create Sub Category"]}),(0,C.jsx)(m.Z,{children:(0,C.jsx)(y(),{onSubmit:N((function(a){if(e.editData)if(Object.keys(a.image).length){var t=new FormData;t.append("file",a.image[0]),q((0,j.$i)(t,(function(t){var n={name:a.name,image:t,categoryTypeId:_.categoryTypeId};q((0,v.ys)(e.editData._id,n,(function(a){e.updateList(a),k.Am.success("Sub Category Updated")})))})))}else{var n={name:a.name,categoryTypeId:_.categoryTypeId};console.log(n),q((0,v.ys)(e.editData._id,n,(function(a){e.updateList(a),k.Am.success("Sub Category Updated")})))}else{z(a);var r=new FormData;r.append("file",a.image[0]),q((0,j.$i)(r,(function(t){var n={name:a.name,image:t,categoryTypeId:_.categoryTypeId};q((0,v.AR)(n,(function(a){e.updateList(a),k.Am.success("Sub Category Created")})))})))}})),children:(0,C.jsxs)(o.Z,{children:[(0,C.jsxs)(c.Z,{sm:_.image||""!=F?"6":"12",children:[(0,C.jsxs)(u.Z,{children:[(0,C.jsx)("label",{className:"control-label",htmlFor:"firstname",children:"Title *"}),(0,C.jsx)("div",{className:"mb-2",children:(0,C.jsx)("input",{type:"text",name:"name",onChange:function(e){return z((0,r.Z)((0,r.Z)({},_),{},{name:e.target.value}))},value:_.name,ref:T({required:!0}),className:"form-control"})}),(0,C.jsx)("span",{className:"text-danger",children:D.name&&"Title is required."})]}),(0,C.jsxs)(u.Z,{children:[(0,C.jsx)(g.Z,{for:"packageType",children:"Main Category *"}),e.editData?(0,C.jsxs)("select",{onChange:function(e){return z((0,r.Z)((0,r.Z)({},_),{},{categoryTypeId:e.target.value}))},className:"form-control",ref:T({required:!0}),type:"select",children:[(0,C.jsx)("option",{value:"",children:"Select"}),null===t||void 0===t?void 0:t.map((function(a,t){var n,r;return(0,C.jsx)("option",{selected:a._id==(null===(n=e.editData)||void 0===n||null===(r=n.categoryTypeId)||void 0===r?void 0:r._id),value:a._id,children:a.name},t)}))]}):(0,C.jsxs)("select",{className:"form-control",name:"packageTypeId",onChange:function(e){return z((0,r.Z)((0,r.Z)({},_),{},{categoryTypeId:e.target.value}))},ref:T({required:!0}),type:"select",children:[(0,C.jsx)("option",{value:"",children:"Select"}),null===t||void 0===t?void 0:t.map((function(e,a){return(0,C.jsx)("option",{onClick:function(){return z((0,r.Z)((0,r.Z)({},_),{},{categoryTypeId:[].concat((0,n.Z)(_.categoryTypeId),[e._id])}))},value:e._id,children:e.name},a)}))]}),(0,C.jsx)("span",{className:"text-danger",children:D.packageTypeId&&"Please select package type"})]}),(0,C.jsxs)(u.Z,{children:[(0,C.jsx)("label",{className:"control-label",htmlFor:"image",children:"Image Cover"}),(0,C.jsx)("div",{className:"mb-2",children:(0,C.jsx)("input",{onChange:function(e){return function(e){var a=URL.createObjectURL(e.target.files[0]);M(a)}(e)},type:"file",name:"image",ref:T({required:!e.editData}),className:"form-control",accept:"image/png, image/jpeg"})}),(0,C.jsx)("span",{className:"text-danger",children:D.image&&"Image cover is required."})]}),(0,C.jsxs)(u.Z,{children:[(0,C.jsx)(f.Z,{className:"button btn-info",style:{backgroundColor:x.D.primary,width:120,border:0},onClick:function(){e.cancelEdit&&e.cancelEdit(),z(I)},type:"reset",children:"Reset"}),(0,C.jsx)(f.Z,{className:"button btn-info ml-4",style:{backgroundColor:x.D.black,width:120,border:0},type:"submit",children:"Submit"})]})]}),(!!e.editData&&!(null===(a=e.editData)||void 0===a||!a.image)||""!=F)&&(0,C.jsx)(c.Z,{sm:"6",children:(0,C.jsx)("img",{src:""!=F?F:Z.dB+e.editData.image,style:{width:"80%",resizeMode:"contain",height:"60%"}})})]})})})]})})})}},3002:function(e,a,t){var n=t(7462),r=t(3366),i=t(2791),s=t(2007),o=t.n(s),c=t(1694),l=t.n(c),d=t(5489),m=["className","cssModule","hidden","widths","tag","check","size","for"],u=o().oneOfType([o().number,o().string]),g=o().oneOfType([o().bool,o().string,o().number,o().shape({size:u,order:u,offset:u})]),f={children:o().node,hidden:o().bool,check:o().bool,size:o().string,for:o().string,tag:d.iC,className:o().string,cssModule:o().object,xs:g,sm:g,md:g,lg:g,xl:g,widths:o().array},p={tag:"label",widths:["xs","sm","md","lg","xl"]},h=function(e,a,t){return!0===t||""===t?e?"col":"col-"+a:"auto"===t?e?"col-auto":"col-"+a+"-auto":e?"col-"+t:"col-"+a+"-"+t},y=function(e){var a=e.className,t=e.cssModule,s=e.hidden,o=e.widths,c=e.tag,u=e.check,g=e.size,f=e.for,p=(0,r.Z)(e,m),y=[];o.forEach((function(a,n){var r=e[a];if(delete p[a],r||""===r){var i,s=!n;if((0,d.Kn)(r)){var o,c=s?"-":"-"+a+"-";i=h(s,a,r.size),y.push((0,d.mx)(l()(((o={})[i]=r.size||""===r.size,o["order"+c+r.order]=r.order||0===r.order,o["offset"+c+r.offset]=r.offset||0===r.offset,o))),t)}else i=h(s,a,r),y.push(i)}}));var x=(0,d.mx)(l()(a,!!s&&"sr-only",!!u&&"form-check-label",!!g&&"col-form-label-"+g,y,!!y.length&&"col-form-label"),t);return i.createElement(c,(0,n.Z)({htmlFor:f},p,{className:x}))};y.propTypes=f,y.defaultProps=p,a.Z=y}}]);
//# sourceMappingURL=306.186f231e.chunk.js.map