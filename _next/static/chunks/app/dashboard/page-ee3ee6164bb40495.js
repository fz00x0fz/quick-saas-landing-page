(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[702],{50994:function(e,t,a){Promise.resolve().then(a.bind(a,12028)),Promise.resolve().then(a.bind(a,76769)),Promise.resolve().then(a.bind(a,47017)),Promise.resolve().then(a.bind(a,67579))},12028:function(e,t,a){"use strict";a.r(t),a.d(t,{CalendarDateRangePicker:function(){return y}});var n=a(57437),r=a(2265),s=a(28203),o=a(39311),i=a(93023),l=a(81291),d=a(17158),c=a(68183);function m(e){let{className:t,classNames:a,showOutsideDays:r=!0,...s}=e;return(0,n.jsx)(c._W,{showOutsideDays:r,className:(0,o.cn)("p-3",t),classNames:{months:"flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",month:"space-y-4",caption:"flex justify-center pt-1 relative items-center",caption_label:"text-sm font-medium",nav:"space-x-1 flex items-center",nav_button:(0,o.cn)((0,i.d)({variant:"outline"}),"h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100"),nav_button_previous:"absolute left-1",nav_button_next:"absolute right-1",table:"w-full border-collapse space-y-1",head_row:"flex",head_cell:"text-muted-foreground rounded-md w-9 font-normal text-[0.8rem]",row:"flex w-full mt-2",cell:"h-9 w-9 text-center text-sm p-0 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",day:(0,o.cn)((0,i.d)({variant:"ghost"}),"h-9 w-9 p-0 font-normal aria-selected:opacity-100"),day_range_end:"day-range-end",day_selected:"bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",day_today:"bg-accent text-accent-foreground",day_outside:"day-outside text-muted-foreground opacity-50 aria-selected:bg-accent/50 aria-selected:text-muted-foreground aria-selected:opacity-30",day_disabled:"text-muted-foreground opacity-50",day_range_middle:"aria-selected:bg-accent aria-selected:text-accent-foreground",day_hidden:"invisible",...a},components:{IconLeft:e=>{let{...t}=e;return(0,n.jsx)(l.Z,{className:"h-4 w-4"})},IconRight:e=>{let{...t}=e;return(0,n.jsx)(d.Z,{className:"h-4 w-4"})}},...s})}m.displayName="Calendar";var u=a(65050);let f=u.fC,x=u.xz,h=r.forwardRef((e,t)=>{let{className:a,align:r="center",sideOffset:s=4,...i}=e;return(0,n.jsx)(u.h_,{children:(0,n.jsx)(u.VY,{ref:t,align:r,sideOffset:s,className:(0,o.cn)("z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",a),...i})})});h.displayName=u.VY.displayName;var p=a(34334),g=a(89314),v=a(15120);function y(e){let{className:t}=e,[a,l]=r.useState({from:new Date,to:(0,p.Z)(new Date,7)});return(0,n.jsx)("div",{className:(0,o.cn)("grid gap-2",t),children:(0,n.jsxs)(f,{children:[(0,n.jsx)(x,{asChild:!0,children:(0,n.jsxs)(i.z,{id:"date",variant:"outline",className:(0,o.cn)("w-[260px] justify-start text-left font-normal",!a&&"text-muted-foreground"),children:[(0,n.jsx)(s.Z,{className:"mr-2 h-4 w-4"}),(null==a?void 0:a.from)?a.to?(0,n.jsxs)(n.Fragment,{children:[(0,g.ZP)(a.from,"LLL dd, y",{locale:v.U})," -"," ",(0,g.ZP)(a.to,"LLL dd, y",{locale:v.U})]}):(0,g.ZP)(a.from,"LLL dd, y",{locale:v.U}):(0,n.jsx)("span",{children:"选择日期范围"})]})}),(0,n.jsx)(h,{className:"w-auto p-0",align:"end",children:(0,n.jsx)(m,{initialFocus:!0,mode:"range",defaultMonth:null==a?void 0:a.from,selected:a,onSelect:l,numberOfMonths:2,locale:v.U})})]})})}},76769:function(e,t,a){"use strict";a.r(t),a.d(t,{Overview:function(){return m}});var n=a(57437),r=a(45253),s=a(44876),o=a(24235),i=a(50039),l=a(86812),d=a(11399);let c=[{name:"Jan",total:Math.floor(5e3*Math.random())+1e3},{name:"Feb",total:Math.floor(5e3*Math.random())+1e3},{name:"Mar",total:Math.floor(5e3*Math.random())+1e3},{name:"Apr",total:Math.floor(5e3*Math.random())+1e3},{name:"May",total:Math.floor(5e3*Math.random())+1e3},{name:"Jun",total:Math.floor(5e3*Math.random())+1e3},{name:"Jul",total:Math.floor(5e3*Math.random())+1e3},{name:"Aug",total:Math.floor(5e3*Math.random())+1e3},{name:"Sep",total:Math.floor(5e3*Math.random())+1e3},{name:"Oct",total:Math.floor(5e3*Math.random())+1e3},{name:"Nov",total:Math.floor(5e3*Math.random())+1e3},{name:"Dec",total:Math.floor(5e3*Math.random())+1e3}];function m(){return(0,n.jsx)("div",{className:"h-[400px] w-full",children:(0,n.jsx)(r.h,{width:"100%",height:"100%",children:(0,n.jsxs)(s.v,{data:c,children:[(0,n.jsx)(o.K,{dataKey:"name",stroke:"#888888",fontSize:12,tickLine:!1,axisLine:!1}),(0,n.jsx)(i.B,{stroke:"#888888",fontSize:12,tickLine:!1,axisLine:!1,tickFormatter:e=>"".concat(e)}),(0,n.jsx)(l.u,{}),(0,n.jsx)(d.$,{dataKey:"total",fill:"currentColor",radius:[4,4,0,0],className:"fill-primary"})]})})})}},47017:function(e,t,a){"use strict";a.r(t),a.d(t,{RecentSales:function(){return s}});var n=a(57437),r=a(37309);function s(){return(0,n.jsxs)("div",{className:"space-y-8",children:[(0,n.jsxs)("div",{className:"flex items-center",children:[(0,n.jsxs)(r.qE,{className:"h-9 w-9",children:[(0,n.jsx)(r.F$,{src:"/avatars/01.png",alt:"Avatar"}),(0,n.jsx)(r.Q5,{children:"张"})]}),(0,n.jsxs)("div",{className:"ml-4 space-y-1",children:[(0,n.jsx)("p",{className:"text-sm font-medium leading-none",children:"张三"}),(0,n.jsx)("p",{className:"text-sm text-muted-foreground",children:"zhang@example.com"})]}),(0,n.jsx)("div",{className:"ml-auto font-medium",children:"+\xa51,999.00"})]}),(0,n.jsxs)("div",{className:"flex items-center",children:[(0,n.jsxs)(r.qE,{className:"h-9 w-9",children:[(0,n.jsx)(r.F$,{src:"/avatars/02.png",alt:"Avatar"}),(0,n.jsx)(r.Q5,{children:"李"})]}),(0,n.jsxs)("div",{className:"ml-4 space-y-1",children:[(0,n.jsx)("p",{className:"text-sm font-medium leading-none",children:"李四"}),(0,n.jsx)("p",{className:"text-sm text-muted-foreground",children:"li@example.com"})]}),(0,n.jsx)("div",{className:"ml-auto font-medium",children:"+\xa539.00"})]}),(0,n.jsxs)("div",{className:"flex items-center",children:[(0,n.jsxs)(r.qE,{className:"h-9 w-9",children:[(0,n.jsx)(r.F$,{src:"/avatars/03.png",alt:"Avatar"}),(0,n.jsx)(r.Q5,{children:"王"})]}),(0,n.jsxs)("div",{className:"ml-4 space-y-1",children:[(0,n.jsx)("p",{className:"text-sm font-medium leading-none",children:"王五"}),(0,n.jsx)("p",{className:"text-sm text-muted-foreground",children:"wang@example.com"})]}),(0,n.jsx)("div",{className:"ml-auto font-medium",children:"+\xa5299.00"})]}),(0,n.jsxs)("div",{className:"flex items-center",children:[(0,n.jsxs)(r.qE,{className:"h-9 w-9",children:[(0,n.jsx)(r.F$,{src:"/avatars/04.png",alt:"Avatar"}),(0,n.jsx)(r.Q5,{children:"赵"})]}),(0,n.jsxs)("div",{className:"ml-4 space-y-1",children:[(0,n.jsx)("p",{className:"text-sm font-medium leading-none",children:"赵六"}),(0,n.jsx)("p",{className:"text-sm text-muted-foreground",children:"zhao@example.com"})]}),(0,n.jsx)("div",{className:"ml-auto font-medium",children:"+\xa599.00"})]}),(0,n.jsxs)("div",{className:"flex items-center",children:[(0,n.jsxs)(r.qE,{className:"h-9 w-9",children:[(0,n.jsx)(r.F$,{src:"/avatars/05.png",alt:"Avatar"}),(0,n.jsx)(r.Q5,{children:"孙"})]}),(0,n.jsxs)("div",{className:"ml-4 space-y-1",children:[(0,n.jsx)("p",{className:"text-sm font-medium leading-none",children:"孙七"}),(0,n.jsx)("p",{className:"text-sm text-muted-foreground",children:"sun@example.com"})]}),(0,n.jsx)("div",{className:"ml-auto font-medium",children:"+\xa52,499.00"})]})]})}},37309:function(e,t,a){"use strict";a.d(t,{F$:function(){return l},Q5:function(){return d},qE:function(){return i}});var n=a(57437),r=a(2265),s=a(26694),o=a(39311);let i=r.forwardRef((e,t)=>{let{className:a,...r}=e;return(0,n.jsx)(s.fC,{ref:t,className:(0,o.cn)("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",a),...r})});i.displayName=s.fC.displayName;let l=r.forwardRef((e,t)=>{let{className:a,...r}=e;return(0,n.jsx)(s.Ee,{ref:t,className:(0,o.cn)("aspect-square h-full w-full",a),...r})});l.displayName=s.Ee.displayName;let d=r.forwardRef((e,t)=>{let{className:a,...r}=e;return(0,n.jsx)(s.NY,{ref:t,className:(0,o.cn)("flex h-full w-full items-center justify-center rounded-full bg-muted",a),...r})});d.displayName=s.NY.displayName},93023:function(e,t,a){"use strict";a.d(t,{d:function(){return l},z:function(){return d}});var n=a(57437),r=a(2265),s=a(67256),o=a(39213),i=a(39311);let l=(0,o.j)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),d=r.forwardRef((e,t)=>{let{className:a,variant:r,size:o,asChild:d=!1,...c}=e,m=d?s.g7:"button";return(0,n.jsx)(m,{className:(0,i.cn)(l({variant:r,size:o,className:a})),ref:t,...c})});d.displayName="Button"},67579:function(e,t,a){"use strict";a.r(t),a.d(t,{Tabs:function(){return i},TabsContent:function(){return c},TabsList:function(){return l},TabsTrigger:function(){return d}});var n=a(57437),r=a(2265),s=a(34522),o=a(39311);let i=s.fC,l=r.forwardRef((e,t)=>{let{className:a,...r}=e;return(0,n.jsx)(s.aV,{ref:t,className:(0,o.cn)("inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",a),...r})});l.displayName=s.aV.displayName;let d=r.forwardRef((e,t)=>{let{className:a,...r}=e;return(0,n.jsx)(s.xz,{ref:t,className:(0,o.cn)("inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",a),...r})});d.displayName=s.xz.displayName;let c=r.forwardRef((e,t)=>{let{className:a,...r}=e;return(0,n.jsx)(s.VY,{ref:t,className:(0,o.cn)("mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",a),...r})});c.displayName=s.VY.displayName},39311:function(e,t,a){"use strict";a.d(t,{cn:function(){return s}});var n=a(57042),r=a(74769);function s(){for(var e=arguments.length,t=Array(e),a=0;a<e;a++)t[a]=arguments[a];return(0,r.m6)((0,n.W)(t))}}},function(e){e.O(0,[7,127,327,17,522,291,971,864,744],function(){return e(e.s=50994)}),_N_E=e.O()}]);