(this["webpackJsonpspotify-clone"]=this["webpackJsonpspotify-clone"]||[]).push([[0],{109:function(t,e,n){"use strict";n.r(e);var c=n(3),a=n(1),i=n(27),o=n.n(i),s=(n(69),n(61)),r=n(7),l=(n(41),n(18)),u=n(5),j=n(8),p=n.n(j),b=n(40),h=n(21),d=n(20),O=n.n(d),g=n(28),v=n(19),_=n.n(v),f=n(13),x=n(59),m=n.n(x),S=function(){return Object(c.jsx)("div",{className:m.a.divider})},y=function(){var t=Object(a.useState)(""),e=Object(r.a)(t,2),n=e[0],i=e[1],o=Object(a.useState)(""),s=Object(r.a)(o,2),l=s[0],j=s[1],b=Object(a.useState)(!1),d=Object(r.a)(b,2),v=d[0],x=d[1],m=Object(a.useContext)(f.a).setUser,y=Object(u.g)(),k=Object(a.useState)(""),N=Object(r.a)(k,2)[1],w=function(){var t=Object(g.a)(O.a.mark((function t(e){return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.preventDefault(),x(!0),_.a.post("".concat("https://spotify-clone-server.herokuapp.com","/v1/users/signin"),{email:n,password:l}).then((function(t){localStorage.setItem("__TOKEN",t.data.token),x(!1),null===m||void 0===m||m(t.data),y.push("/player")})).catch((function(t){var e;x(!1),N(null===t||void 0===t||null===(e=t.response)||void 0===e?void 0:e.data.error)}));case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)("form",{onSubmit:w,style:{display:"inherit",gap:"inherit",flexDirection:"inherit"},children:[Object(c.jsx)("input",{className:p.a["spot-input"],placeholder:"Email",type:"email",onChange:function(t){return i(t.target.value)}}),Object(c.jsx)("input",{className:p.a["spot-input"],placeholder:"Password",type:"password",onChange:function(t){return j(t.target.value)}}),Object(c.jsx)(h.a,{text:"Log In",className:p.a["login-button"],type:"submit",loading:v})]}),Object(c.jsx)(S,{})]})},k=n(60),N=n.n(k),w=n(56),C=n.n(w),L=function(){var t=Object(a.useState)(""),e=Object(r.a)(t,2),n=e[0],i=e[1],o=Object(a.useState)(""),s=Object(r.a)(o,2),l=s[0],j=s[1],b=Object(a.useState)(""),d=Object(r.a)(b,2),v=d[0],x=d[1],m=Object(a.useState)(new Date),S=Object(r.a)(m,2),y=S[0],k=S[1],w=Object(a.useState)(""),L=Object(r.a)(w,2),z=L[0],B=L[1],D=Object(a.useState)(!1),E=Object(r.a)(D,2),I=E[0],F=E[1],K=Object(a.useContext)(f.a).setUser,P=Object(u.g)(),T=Object(a.useState)(""),U=Object(r.a)(T,2)[1],V=function(){var t=Object(g.a)(O.a.mark((function t(e){return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.preventDefault(),F(!0),_.a.post("".concat("https://spotify-clone-server.herokuapp.com","/v1/users/signup"),{name:n,email:l,password:v,birthDate:y,country:z}).then((function(t){F(!1),null===K||void 0===K||K(t.data),P.push("/player")})).catch((function(t){var e;F(!1),U(null===t||void 0===t||null===(e=t.response)||void 0===e?void 0:e.data.error)}));case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)("form",{onSubmit:V,style:{display:"inherit",gap:"inherit",flexDirection:"inherit"},children:[Object(c.jsx)("input",{className:p.a["spot-input"],placeholder:"Username",onChange:function(t){return i(t.target.value)}}),Object(c.jsx)("input",{className:p.a["spot-input"],placeholder:"Email",type:"email",onChange:function(t){return j(t.target.value)}}),Object(c.jsx)("input",{className:p.a["spot-input"],placeholder:"Password",type:"password",onChange:function(t){return x(t.target.value)}}),Object(c.jsx)("h5",{className:p.a.subtitle,children:"Date of birth"}),Object(c.jsx)(N.a,{value:y,onChange:function(t){return k(t)},className:"datepicker"}),Object(c.jsx)("h5",{className:p.a.subtitle,children:"Country"}),Object(c.jsx)("select",{id:"countries",className:p.a["spot-input"],style:{paddingTop:"5px",paddingBottom:"5px"},onChange:function(t){return B(t.currentTarget.value)},children:C.a.getNames().map((function(t){return Object(c.jsx)("option",{value:t,children:t},t)}))}),Object(c.jsx)(h.a,{text:"Sign up",loading:I})]})})},z=function(){document.title="Login - Spotify";var t=Object(a.useState)(!1),e=Object(r.a)(t,2),n=e[0],i=e[1],o=Object(u.g)();return Object(a.useEffect)((function(){localStorage.getItem("__TOKEN")&&o.push("/player")}),[o]),Object(c.jsx)("div",{className:p.a["login-container"],children:Object(c.jsxs)("div",{className:p.a["login-inner-container"],children:[Object(c.jsx)(b.a,{className:p.a.logo}),n?Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(L,{}),Object(c.jsxs)("h3",{className:p.a["have-an-acc"],children:["Have an account?",Object(c.jsx)("button",{className:p.a["spot-link"],onClick:function(){return i(!1)},children:"Sign In"})]})]}):Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(y,{}),Object(c.jsx)("h4",{className:p.a["dont-have-acc"],children:"Don't have an account?"}),Object(c.jsx)(h.a,{text:"Sign up for Spotify",className:p.a["signup-button"],variation:"outline",onClick:function(){return i(!n)}})]})]})})},B=n(17),D=n(25),E=function(t){var e=t.children,n=Object(a.useContext)(f.a).setUser,i=Object(a.useState)(!1),o=Object(r.a)(i,2),s=o[0],l=o[1],j=Object(u.g)();return Object(a.useEffect)((function(){var t=localStorage.getItem("__TOKEN");t?_.a.get("".concat("https://spotify-clone-server.herokuapp.com","/v1/users/me"),{headers:{Authorization:"Bearer ".concat(t)}}).then((function(e){null===n||void 0===n||n(Object(B.a)(Object(B.a)({},e.data),{},{token:t})),l(!0)})).catch((function(t){var e;401===(null===(e=t.response)||void 0===e?void 0:e.status)&&(localStorage.removeItem("__TOKEN"),null===n||void 0===n||n({})),j.push("/login")})):j.push("/login")}),[j,n]),Object(c.jsx)(c.Fragment,{children:s?e:Object(c.jsx)(D.a,{})})},I=function(){var t=Object(a.useState)({}),e=Object(r.a)(t,2),i=e[0],o=e[1],s=Object(a.lazy)((function(){return Promise.all([n.e(8),n.e(5)]).then(n.bind(null,221))})),j=Object(a.lazy)((function(){return Promise.all([n.e(4),n.e(3)]).then(n.bind(null,219))}));return Object(c.jsx)(f.a.Provider,{value:{user:i,setUser:o},children:Object(c.jsx)(l.a,{children:Object(c.jsxs)(u.d,{children:[Object(c.jsx)(u.b,{exact:!0,path:"/",children:Object(c.jsx)(u.a,{to:"/login"})}),Object(c.jsx)(u.b,{path:"/login",children:Object(c.jsx)(z,{})}),Object(c.jsxs)(E,{children:[Object(c.jsx)(u.b,{path:"/overview",children:Object(c.jsx)(a.Suspense,{fallback:Object(c.jsx)(D.a,{}),children:Object(c.jsx)(s,{})})}),Object(c.jsx)(u.b,{path:"/player",children:Object(c.jsx)(a.Suspense,{fallback:Object(c.jsx)(D.a,{}),children:Object(c.jsx)(j,{})})})]})]})})})};Object(s.setConfig)({ignoreSFC:!0,pureRender:!0}),o.a.render(Object(c.jsx)(a.StrictMode,{children:Object(c.jsx)(I,{})}),document.getElementById("root"))},13:function(t,e,n){"use strict";var c=n(1),a=Object(c.createContext)({});e.a=a},21:function(t,e,n){"use strict";var c=n(3),a=n(30),i=n(26),o=n.n(i),s=function(t){var e=t.text,n=t.className,i=t.variation,s=t.onClick,r=t.type,l=t.loading;return Object(c.jsx)("button",{className:"".concat(o.a.bigbutton,"\n      ").concat("outline"===i?o.a.outline:""," \n      ").concat("fill"===i?o.a.fill:""," \n      ").concat("pop"===i?o.a.pop:""," \n      ").concat(n),onClick:s,type:r,children:l?Object(c.jsx)(a.CircleSpinner,{}):e})};s.defaultProps={className:"",variation:"fill",loading:!1},e.a=s},25:function(t,e,n){"use strict";var c=n(3),a=n(30),i=n(39),o=n.n(i);e.a=function(){return Object(c.jsxs)("div",{className:o.a.container,children:[Object(c.jsx)(a.RotateSpinner,{color:"#1db954"}),Object(c.jsx)("h6",{className:o.a.text,children:"Connecting to server"})]})}},26:function(t,e,n){t.exports={bigbutton:"BigButton_bigbutton__xLW1z",fill:"BigButton_fill__30CDO",outline:"BigButton_outline__30ns2",pop:"BigButton_pop__2AcLP"}},39:function(t,e,n){t.exports={container:"Loading_container__3DxKb",text:"Loading_text__2GlpG"}},40:function(t,e,n){"use strict";var c=n(17),a=n(3);e.a=function(t){return Object(a.jsx)("svg",Object(c.a)(Object(c.a)({width:"1em",height:"1em",viewBox:"0 0 131 40",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t),{},{children:Object(a.jsx)("path",{d:"M0 19.94C0 30.925 8.905 40 19.685 40S39.37 30.925 39.37 19.94 30.465 0 19.685 0 0 8.955 0 19.94zm26.95 9.314c-4.57-2.866-10.428-3.582-17.225-2.03-1.64.239-1.874-2.15-.468-2.388 7.499-1.791 13.826-.955 18.982 2.269 1.289.835 0 2.865-1.29 2.149zm1.992-5.373c-5.273-3.344-13.358-4.299-19.568-2.389-1.992.598-2.695-2.507-.82-2.985 7.147-2.149 15.935-1.074 22.028 2.747 1.64 1.074 0 3.701-1.64 2.627zM8.436 15.403c-1.991.716-3.28-2.746-1.054-3.582 6.913-2.15 18.63-1.791 25.895 2.627 1.992 1.074.117 4.418-1.992 3.224-6.327-3.821-16.873-4.18-22.849-2.269zm44.41 10.866c-1.993 0-3.867-.717-5.508-2.388-.117 0-.117.119-.117.119l-1.875 2.269c-.117.12-.117.239 0 .358 2.11 1.91 4.687 2.866 7.5 2.866 3.983 0 6.444-2.27 6.444-5.612 0-2.866-1.758-4.418-5.859-5.493-3.398-.836-3.984-1.433-3.984-2.627 0-1.194 1.172-1.91 2.695-1.91s2.93.597 4.57 1.79c0 0 .117.12.234.12s.117-.12.117-.12l1.64-2.387c.118-.12.118-.12 0-.24-1.874-1.551-4.1-2.387-6.56-2.387-3.633 0-6.211 2.268-6.211 5.492 0 3.463 2.343 4.538 6.093 5.493 3.28.716 3.75 1.433 3.75 2.627 0 1.313-1.172 2.03-2.93 2.03zm11.13-9.194v-1.553c0-.119-.116-.238-.234-.238h-3.046c-.117 0-.234.119-.234.238v17.553c0 .119.117.238.234.238h3.046c.118 0 .235-.119.235-.238v-5.493c1.172 1.313 2.46 1.91 4.218 1.91 3.164 0 6.327-2.507 6.327-7.283s-3.163-7.164-6.327-7.164c-1.758 0-3.046.597-4.218 2.03zm3.516 9.313c-2.11 0-3.632-1.791-3.632-4.179 0-2.388 1.523-4.06 3.632-4.06 2.11 0 3.515 1.672 3.515 4.06s-1.406 4.18-3.515 4.18zm7.968-4.06c0 4.06 3.163 7.165 7.265 7.165 4.1 0 7.264-3.224 7.264-7.284s-3.046-7.164-7.147-7.164c-4.101 0-7.382 3.224-7.382 7.283zm3.515-.119c0-2.388 1.523-4.06 3.75-4.06 2.226 0 3.866 1.791 3.866 4.18 0 2.387-1.523 4.06-3.75 4.06-2.226 0-3.866-1.792-3.866-4.18zm16.404-6.925V11.82c0-.12 0-.239-.117-.239h-3.046c-.118 0-.235.12-.235.239v3.463h-1.523c-.117 0-.234.119-.234.238v2.627c0 .12.117.24.234.24h1.523v6.924c0 2.747 1.29 4.18 3.984 4.18 1.055 0 2.11-.24 2.93-.717.117 0 .117-.12.117-.239V26.03c0-.12 0-.239-.118-.239h-.234c-.586.358-1.289.478-1.875.478-.937 0-1.406-.478-1.406-1.433v-6.448h3.515c.118 0 .235-.12.235-.239v-2.627c0-.119-.117-.238-.235-.238H95.38zm15.116-.359c0-1.313.468-1.79 1.523-1.79.586 0 1.172 0 1.757.238h.118s.117-.12.117-.239v-2.507c0-.12 0-.239-.117-.239-.586-.239-1.406-.358-2.578-.358-2.812 0-4.218 1.671-4.218 4.657v.597h-1.524c-.117 0-.234.119-.234.238v2.627c0 .12.117.24.234.24h1.524v10.626c0 .12.117.239.234.239h3.046c.118 0 .118-.12.118-.24V18.389h2.929l4.335 10.627c-.468 1.075-.937 1.313-1.64 1.313a3.26 3.26 0 01-1.758-.477h-.117l-.117.12-1.055 2.268c0 .12 0 .358.118.358 1.054.597 1.992.836 3.163.836 2.227 0 3.516-1.075 4.57-3.94l5.273-13.851v-.239c0-.12-.117-.12-.234-.12h-3.164c-.117 0-.117.12-.117.24l-3.281 9.313-3.515-9.314c0-.119-.118-.238-.235-.238h-5.155v-.359zm-9.726.359c-.117 0-.234.119-.234.238v13.493c0 .12.117.239.234.239h3.047c.117 0 .117-.12.117-.24V15.523c0-.119 0-.238-.117-.238h-3.047zm-.703-3.94c0 1.193 1.055 2.268 2.226 2.268 1.172 0 2.11-1.075 2.11-2.269 0-1.194-.938-2.149-2.11-2.149-1.171 0-2.226.955-2.226 2.15zm28.708 8.238c1.171 0 2.226-.955 2.226-2.15 0-1.193-1.055-2.148-2.226-2.148-1.172 0-2.109.955-2.109 2.149s.937 2.15 2.109 2.15zm0-4.06c1.054 0 1.992.836 1.992 1.91 0 1.076-.938 1.911-1.992 1.911-1.055 0-1.875-.835-1.875-1.91s.82-1.91 1.875-1.91zm.468 2.15c.352-.12.586-.359.586-.717 0-.477-.468-.716-.937-.716h-.938v2.268h.469v-.716h.469l.469.716h.585l-.703-.835zm-.351-1.075c.234 0 .469.12.469.358 0 .239-.235.358-.469.358h-.469v-.716h.469z",fill:"#fff"})}))}},41:function(t,e,n){},59:function(t,e,n){t.exports={divider:"LoginDivider_divider__2g1kj"}},69:function(t,e,n){},8:function(t,e,n){t.exports={"login-container":"Login_login-container__1VF0R",logo:"Login_logo__21YoM","spot-input":"Login_spot-input__2LWEU","login-button":"Login_login-button__20575","signup-button":"Login_signup-button__Jii9u","dont-have-acc":"Login_dont-have-acc__1O8CH","login-inner-container":"Login_login-inner-container__2hITY","have-an-acc":"Login_have-an-acc__1sM5Y","spot-link":"Login_spot-link__245nS",datepicker:"Login_datepicker__1DKDf","react-date-picker__wrapper":"Login_react-date-picker__wrapper__SsNXK","react-date-picker__inputGroup__input":"Login_react-date-picker__inputGroup__input__BOV8n","react-date-picker__button":"Login_react-date-picker__button__1YkQ6",subtitle:"Login_subtitle__1dQJw"}}},[[109,1,2]]]);
//# sourceMappingURL=main.4fb63366.chunk.js.map