(window.webpackJsonp=window.webpackJsonp||[]).push([[604,119,129],{1002:function(e,a,t){"use strict";t.r(a);var n=t(0),i=t.n(n),l=t(1032),r=t(1019),c=t(1104),m=t(1031);var s=function(e){var a=e.metadata,t=a.previousPage,n=a.nextPage;return i.a.createElement("nav",{className:"pagination-nav","aria-label":"Blog list page navigation"},i.a.createElement("div",{className:"pagination-nav__item"},t&&i.a.createElement(m.a,{className:"pagination-nav__link",to:t},i.a.createElement("h4",{className:"pagination-nav__label"},"\xab Newer Entries"))),i.a.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},n&&i.a.createElement(m.a,{className:"pagination-nav__link",to:n},i.a.createElement("h4",{className:"pagination-nav__label"},"Older Entries \xbb"))))},o=t(1072);a.default=function(e){var a=e.metadata,t=e.items,n=e.sidebar,m=Object(l.a)().siteConfig.title,d=a.blogDescription,u=a.blogTitle,v="/"===a.permalink?m:u;return i.a.createElement(r.a,{title:v,description:d},i.a.createElement("div",{className:"container margin-vert--lg"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col col--2"},i.a.createElement(o.a,{sidebar:n})),i.a.createElement("main",{className:"col col--8"},t.map((function(e){var a=e.content;return i.a.createElement(c.a,{key:a.metadata.permalink,frontMatter:a.frontMatter,metadata:a.metadata,truncated:a.metadata.truncated},i.a.createElement(a,null))})),i.a.createElement(s,{metadata:a})))))}},1019:function(e,a,t){"use strict";var n=t(0),i=t.n(n),l=t(1045),r=t(1030),c=function(){var e=Object(r.useLocation)().pathname;return e.endsWith("/")?i.a.createElement(r.Redirect,{to:e.slice(0,-1)}):e.endsWith(".html")?i.a.createElement(r.Redirect,{to:e.slice(0,-5)}):null};a.a=function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(c,null),i.a.createElement(l.a,e))}}}]);