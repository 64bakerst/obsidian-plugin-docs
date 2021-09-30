"use strict";(self.webpackChunkobsidian_plugin_docs=self.webpackChunkobsidian_plugin_docs||[]).push([[451],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return c}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=s(n),c=i,g=m["".concat(p,".").concat(c)]||m[c]||d[c]||o;return n?a.createElement(g,r(r({ref:t},u),{},{components:n})):a.createElement(g,r({ref:t},u))}));function c(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var s=2;s<o;s++)r[s]=n[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7673:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return u},default:function(){return m}});var a=n(7462),i=n(3366),o=(n(7294),n(3905)),r=["components"],l={sidebar_position:10},p="Create your first plugin",s={unversionedId:"getting-started/create-your-first-plugin",id:"getting-started/create-your-first-plugin",isDocsHomePage:!1,title:"Create your first plugin",description:"This guide walks you through the steps needed to develop a plugin for Obsidian.",source:"@site/docs/getting-started/create-your-first-plugin.md",sourceDirName:"getting-started",slug:"/getting-started/create-your-first-plugin",permalink:"/obsidian-plugin-docs/getting-started/create-your-first-plugin",editUrl:"https://github.com/marcusolsson/obsidian-plugin-docs/edit/main/docs/getting-started/create-your-first-plugin.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"docs",previous:{title:"Introduction",permalink:"/obsidian-plugin-docs/"},next:{title:"Development workflow",permalink:"/obsidian-plugin-docs/getting-started/development-workflow"}},u=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Step 1: Download the Obsidian sample plugin",id:"step-1-download-the-obsidian-sample-plugin",children:[]},{value:"Step 2: Build the plugin",id:"step-2-build-the-plugin",children:[]},{value:"Step 3: Load the plugin in Obsidian",id:"step-3-load-the-plugin-in-obsidian",children:[]},{value:"Step 4: Update the plugin manifest",id:"step-4-update-the-plugin-manifest",children:[]},{value:"Step 5: Update the source code",id:"step-5-update-the-source-code",children:[]}],d={toc:u};function m(e){var t=e.components,n=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"create-your-first-plugin"},"Create your first plugin"),(0,o.kt)("p",null,"This guide walks you through the steps needed to develop a plugin for Obsidian."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"If you prefer a video walk-through, check out ",(0,o.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=9lA-jaMNS0k"},"Create Your Own Obsidian Plugin")," by ",(0,o.kt)("a",{parentName:"p",href:"https://www.youtube.com/channel/UC9w43btR2UUsfR6ZUf3AlqQ"},"Antone Heyward"),".")),(0,o.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"Before you start")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},(0,o.kt)("strong",{parentName:"p"},"Don't develop plugins in your main vault.")," When you develop a plugin, one mistake can lead to unintentional modifications to your vault. You also risk ",(0,o.kt)("strong",{parentName:"p"},"permanently deleting your vault"),"."))),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://git-scm.com/"},"Git")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://nodejs.org/"},"NodeJS"))),(0,o.kt)("h2",{id:"step-1-download-the-obsidian-sample-plugin"},"Step 1: Download the Obsidian sample plugin"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Browse to the ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/obsidianmd/obsidian-sample-plugin"},"Obsidian Sample Plugin"),"."),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Use this template"),"."),(0,o.kt)("li",{parentName:"ol"},"In ",(0,o.kt)("strong",{parentName:"li"},"Repository name"),", enter the name of your plugin. Obsidian plugins are typically prefixed by ",(0,o.kt)("inlineCode",{parentName:"li"},"obsidian-"),". For example, ",(0,o.kt)("inlineCode",{parentName:"li"},"obsidian-instant-coffee"),"."),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Create repository from template"),".")),(0,o.kt)("p",null,"You've now created your own repository based on the Obsidian sample plugin. Next, you'll download the source code on your local machine."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Browse to the repository you just created.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click ",(0,o.kt)("strong",{parentName:"p"},"Code"),", and copy the path to your repository.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Open a terminal and navigate to the vault."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cd path/to/vault/.obsidian/plugins\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Download the source code into the plugins folder."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/username/obsidian-instant-coffee.git\n")))),(0,o.kt)("h2",{id:"step-2-build-the-plugin"},"Step 2: Build the plugin"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Install dependencies."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm install\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Compile the source code. The following command generates a ",(0,o.kt)("inlineCode",{parentName:"p"},"main.js")," that contains the compiled version of your plugin."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm run dev\n")))),(0,o.kt)("h2",{id:"step-3-load-the-plugin-in-obsidian"},"Step 3: Load the plugin in Obsidian"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Open ",(0,o.kt)("strong",{parentName:"li"},"Preferences")," in Obsidian."),(0,o.kt)("li",{parentName:"ol"},"In the side menu, click ",(0,o.kt)("strong",{parentName:"li"},"Community plugins"),"."),(0,o.kt)("li",{parentName:"ol"},"Under ",(0,o.kt)("strong",{parentName:"li"},"Installed plugins"),", enable the ",(0,o.kt)("strong",{parentName:"li"},"Sample Plugin")," by clicking the toggle button next to it.")),(0,o.kt)("p",null,"You're now running a custom plugin that you've built yourself. Nice! \ud83d\udcaa"),(0,o.kt)("p",null,'Though "Sample Plugin" is probably not the name you had in mind for your plugin. Let\'s change that.'),(0,o.kt)("h2",{id:"step-4-update-the-plugin-manifest"},"Step 4: Update the plugin manifest"),(0,o.kt)("p",null,"The plugin manifest, ",(0,o.kt)("inlineCode",{parentName:"p"},"manifest.json")," is a file that contains information about your plugin, such as its name and version."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Open the ",(0,o.kt)("inlineCode",{parentName:"li"},"obsidian-instant-coffee")," directory in a code editor, such as ",(0,o.kt)("a",{parentName:"li",href:"https://code.visualstudio.com/"},"Visual Studio Code"),"."),(0,o.kt)("li",{parentName:"ol"},"Open ",(0,o.kt)("inlineCode",{parentName:"li"},"manifest.json")," in your editor."),(0,o.kt)("li",{parentName:"ol"},"Change ",(0,o.kt)("inlineCode",{parentName:"li"},"id")," to your plugin ID, for example ",(0,o.kt)("inlineCode",{parentName:"li"},"obsidian-instant-coffee"),"."),(0,o.kt)("li",{parentName:"ol"},"Change ",(0,o.kt)("inlineCode",{parentName:"li"},"name")," to the human-friendly name of the plugin, for example ",(0,o.kt)("inlineCode",{parentName:"li"},"Instant coffee"),"."),(0,o.kt)("li",{parentName:"ol"},"If you'd like, then update ",(0,o.kt)("inlineCode",{parentName:"li"},"description"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"author"),", and ",(0,o.kt)("inlineCode",{parentName:"li"},"authorUrl")," as well.")),(0,o.kt)("p",null,"A plugin is also a NodeJS package, which you can configure in the ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json"),". You shouldn't need to worry much about it for now. For now, update it to match the properties in the plugin manifest."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Open ",(0,o.kt)("inlineCode",{parentName:"li"},"package.json")," in your editor."),(0,o.kt)("li",{parentName:"ol"},"Change ",(0,o.kt)("inlineCode",{parentName:"li"},"name")," to match the ",(0,o.kt)("inlineCode",{parentName:"li"},"id")," in ",(0,o.kt)("inlineCode",{parentName:"li"},"manifest.json"),"."),(0,o.kt)("li",{parentName:"ol"},"Change ",(0,o.kt)("inlineCode",{parentName:"li"},"version")," to match the ",(0,o.kt)("inlineCode",{parentName:"li"},"version")," in ",(0,o.kt)("inlineCode",{parentName:"li"},"manifest.json"),"."),(0,o.kt)("li",{parentName:"ol"},"Change ",(0,o.kt)("inlineCode",{parentName:"li"},"description")," to match the ",(0,o.kt)("inlineCode",{parentName:"li"},"description")," in ",(0,o.kt)("inlineCode",{parentName:"li"},"manifest.json"),"."),(0,o.kt)("li",{parentName:"ol"},"Restart Obsidian to reload your plugin.")),(0,o.kt)("h2",{id:"step-5-update-the-source-code"},"Step 5: Update the source code"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Open ",(0,o.kt)("inlineCode",{parentName:"p"},"main.ts")," in your editor.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Find the lines of code that adds a ",(0,o.kt)("em",{parentName:"p"},"ribbon icon"),"."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"this.addRibbonIcon('dice', 'Sample Plugin', () => {\n  new Notice('This is a notice!');\n});\n\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Change the text for the notice. Feel free to come up with a text of your own."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"new Notice('Hello, you!');\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Restart Obsidian to reload your plugin.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},'Click the die icon in the sidebar. Make sure it says "Sample Plugin" when you hover it.'))),(0,o.kt)("p",null,"Congratulations! \ud83c\udf89 You've successfully loaded and changed a custom plugin for Obsidian. \ud83d\ude80"),(0,o.kt)("p",null,"Feel free to change the code from the sample plugin to see what it does. Once you're ready, learn more about the ",(0,o.kt)("a",{parentName:"p",href:"plugin-anatomy"},"anatomy of a plugin"),"."))}m.isMDXComponent=!0}}]);