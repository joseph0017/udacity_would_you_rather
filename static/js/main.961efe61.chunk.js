(this.webpackJsonpwould_you_rather=this.webpackJsonpwould_you_rather||[]).push([[0],{36:function(e,t,n){},56:function(e,t,n){"use strict";n.r(t);var s=n(1),r=n(29),a=n.n(r),c=n(8),o=n(9),i=n(11),u=n(10),j=n(13),l=n(12),d=n(6),b=(n(36),n(0));var h=Object(d.connect)((function(e){return{authedUser:e.authedUser,users:e.users}}))((function(e){var t=e.authedUser,n=e.users;return Object(b.jsx)("nav",{className:"navbar",children:Object(b.jsxs)("div",{className:"navbar-container",children:[Object(b.jsxs)("ul",{className:"nav-menu active",children:[Object(b.jsx)("li",{className:"nav-item",children:Object(b.jsx)(j.b,{className:"nav-links",to:"/",children:"HOME"})}),Object(b.jsx)("li",{className:"nav-item",children:Object(b.jsx)(j.b,{className:"nav-links",to:"/add",children:"NEW QUESTION"})}),Object(b.jsx)("li",{className:"nav-item",children:Object(b.jsx)(j.b,{className:"nav-links",to:"/leaderboard",children:"LEADERBOARD"})})]}),Object(b.jsx)("ul",{className:"right",children:Object(b.jsx)("li",{children:null===t?Object(b.jsx)(j.b,{to:"/login",children:"LOGIN"}):Object(b.jsxs)("span",{children:[Object(b.jsx)("img",{className:"profile-images",src:n[t].avatarURL,alt:"profile"}),Object(b.jsx)("span",{className:"profile-name",children:n[t].name}),Object(b.jsx)(j.b,{className:"logout",to:"/logout",children:"LOGOUT"})]})})})]})})})),O=n(57),p=n(58),x=function(){return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)(O.a,{className:"d-flex justify-content-center",children:Object(b.jsxs)(p.a,{children:[Object(b.jsx)("h1",{children:"Page not found"}),Object(b.jsxs)("p",{children:["You can return ",Object(b.jsx)(j.b,{to:"/",children:"Home"}),"."]})]})})})},m=n(60),f=(n(23),n(61));function v(e,t,n){var s=e.id,r=e.optionOne,a=e.optionTwo,c=e.text,o=e.timestamp;return{name:t.name,id:s,timestamp:o,text:c,avatar:t.avatarURL,optionOne:r,optionTwo:a,Owner:n?{author:n.author,id:n.id}:null}}var y=function(e){Object(i.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(c.a)(this,n);for(var s=arguments.length,r=new Array(s),a=0;a<s;a++)r[a]=arguments[a];return(e=t.call.apply(t,[this].concat(r))).viewPoll=function(t,n){t.preventDefault(),e.props.history.push("/questions/".concat(n))},e}return Object(o.a)(n,[{key:"render",value:function(){var e=this,t=this.props.question;if(null===t)return Object(b.jsx)("p",{children:"This question does not exist."});var n=t.name,s=t.optionOne,r=t.id,a=t.avatar;return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(j.b,{to:"/questions/".concat(r),children:Object(b.jsx)(O.a,{className:"d-flex justify-content-center ",children:Object(b.jsxs)(m.a,{bg:"light",children:[Object(b.jsx)(O.a,{className:"d-flex justify-content-center ",children:Object(b.jsxs)(m.a.Title,{children:[n," asks:"]})}),Object(b.jsxs)(p.a,{className:"justify-content-md-center",children:[Object(b.jsx)("img",{className:"profile-images-page",src:a,alt:"profile"}),Object(b.jsx)(O.a,{className:"d-flex justify-content-center ",children:Object(b.jsx)(m.a.Text,{children:"Would you rather..."})}),Object(b.jsx)(O.a,{className:"d-flex justify-content-center ",children:Object(b.jsxs)(m.a.Subtitle,{children:["...",s.text,"..."]})}),Object(b.jsx)("br",{}),Object(b.jsx)(f.a,{onClick:function(t){return e.viewPoll(t,r)},style:{width:"8rem"},type:"submit",children:"View Poll"})]})]})})}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{})]})}}]),n}(s.Component);var g=Object(l.g)(Object(d.connect)((function(e,t){var n=e.questions,s=e.users,r=n[t.id];return{question:r?v(r,s[r.author]):null}}))(y)),w=function(){return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("nav",{className:"navbar",children:Object(b.jsx)("div",{className:"navbar-container",children:Object(b.jsxs)("ul",{className:"nav-menu active",children:[Object(b.jsx)("li",{className:"nav-item",children:Object(b.jsx)(j.b,{to:"/unanswered-tab",className:"nav-links",children:"Unanswered Questions"})}),Object(b.jsx)("li",{className:"nav-item",children:Object(b.jsx)(j.b,{to:"/answered-tab",className:"nav-links",children:"Answered Questions"})})]})})})})},T=function(e){Object(i.a)(n,e);var t=Object(u.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){var e=this.props.unasweredQuestionsIds;return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(w,{}),Object(b.jsx)(O.a,{className:"d-flex justify-content-center",style:{width:"30rem"},children:Object(b.jsx)(m.a,{style:{width:"30rem"},bg:"light",children:e.map((function(e){return Object(b.jsx)("div",{children:Object(b.jsx)(g,{id:e})},e)}))})})]})}}]),n}(s.Component);var q=Object(d.connect)((function(e){var t=e.questions,n=e.authedUser,s=Object.values(t).filter((function(e){return e.optionOne.votes.includes(n)||e.optionTwo.votes.includes(n)}));return{unasweredQuestionsIds:Object.values(t).filter((function(e){return!s.includes(e)})).sort((function(e,t){return t.timestamp-e.timestamp})).map((function(e){return e.id}))}}))(T),N=function(){return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("div",{children:Object(b.jsx)(q,{})})})},U=n(2),S=function(e){Object(i.a)(n,e);var t=Object(u.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){var e=this.props,t=e.name,n=e.avatar,s=e.answers,r=e.userQuestions;return Object(b.jsxs)("div",{children:[Object(b.jsx)(O.a,{className:"d-flex justify-content-center",style:{width:"30rem"},children:Object(b.jsx)(m.a,{bg:"light",children:Object(b.jsxs)(p.a,{className:"justify-content-md-center",children:[Object(b.jsx)("img",{className:"profile-images-page",src:n,alt:"profile"}),Object(b.jsx)(O.a,{className:"d-flex justify-content-center",children:Object(b.jsx)(m.a.Title,{children:t})}),Object(b.jsx)(O.a,{className:"d-flex justify-content-center",children:Object(b.jsxs)(m.a.Text,{children:["Answered Question ",Object(b.jsxs)("span",{children:[" ",s," "]})]})}),Object(b.jsx)(O.a,{className:"d-flex justify-content-center",children:Object(b.jsxs)(m.a.Text,{children:["Created Question ",Object(b.jsxs)("span",{children:[" ",r," "]})]})}),Object(b.jsx)(O.a,{className:"d-flex justify-content-center",children:Object(b.jsx)(m.a.Title,{children:"Score"})}),Object(b.jsx)(O.a,{className:"d-flex justify-content-center",children:Object(b.jsx)("span",{children:s+r})})]})})}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{})]})}}]),n}(s.Component);var k=Object(d.connect)((function(e,t){var n=e.users[t.id];return{answers:Object.keys(n.answers).length,userQuestions:n.questions.length,name:n.name,avatar:n.avatarURL}}))(S),E=function(e){Object(i.a)(n,e);var t=Object(u.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){var e=this.props.users;return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)(O.a,{className:"d-flex  justify-content-center",children:Object(b.jsx)(p.a,{children:Object.keys(e).map((function(t){return Object(U.a)(Object(U.a)({},e[t]),{},{score:Object.keys(e[t].answers).length+e[t].questions.length})})).sort((function(e,t){return t.score-e.score})).map((function(e){return Object(b.jsx)("div",{children:Object(b.jsx)(k,{id:e.id})},e.id)}))})})})}}]),n}(s.Component);var Q=Object(d.connect)((function(e){return{users:e.users}}))(E),I="SET_AUTHED_USER";function D(e){return{type:I,id:e}}var R=n(59),C=function(e){Object(i.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(c.a)(this,n);for(var s=arguments.length,r=new Array(s),a=0;a<s;a++)r[a]=arguments[a];return(e=t.call.apply(t,[this].concat(r))).state={user:"none"},e.changeUser=function(t){var n=t.target.value;e.setState((function(){return{user:n}}))},e.handleLogin=function(t){t.preventDefault(),e.props.dispatch(D(e.state.user)),e.props.history.goBack()},e}return Object(o.a)(n,[{key:"render",value:function(){var e=this;return Object(b.jsxs)("div",{children:[Object(b.jsx)(O.a,{className:"d-flex justify-content-center",children:Object(b.jsx)("h1",{children:" WELCOME TO THE WOULD YOU RATHER APP "})}),Object(b.jsx)(O.a,{className:"d-flex justify-content-center",children:Object(b.jsx)(m.a,{style:{width:"30rem"},border:"primary",children:Object(b.jsxs)(m.a.Body,{children:[Object(b.jsx)(m.a.Title,{children:"Would You Rather"}),Object(b.jsx)(m.a.Subtitle,{children:"Please sign in to continue"}),Object(b.jsxs)(R.a,{onSubmit:this.handleLogin,children:[Object(b.jsxs)("select",{style:{width:"18rem"},onChange:this.changeUser,value:this.state.user,children:[Object(b.jsx)("option",{value:"none",disabled:!0,children:"choose user"}),this.props.userIds.map((function(t){return Object(b.jsx)("option",{value:t,children:e.props.users[t].name},t)}))]}),Object(b.jsx)(f.a,{variant:"primary",type:"submit",disabled:"none"===this.state.user,children:"Sign In"})]})]})})})]})}}]),n}(s.Component);var L=Object(l.g)(Object(d.connect)((function(e){var t=e.users;return{userIds:Object.keys(t),users:t}}))(C)),A=n(24),z=n(14),_={sarahedo:{id:"sarahedo",name:"Sarah Edo",avatarURL:"https://whatnerd.com/wp-content/uploads/2021/05/what-is-jujutsu-kaisen-anime-explained-nobara-kugisaki-featured-500x250.jpg",answers:{"8xf0y6ziyjabvozdd253nd":"optionOne","6ni6ok3ym7mf1p33lnez":"optionOne",am8ehyc8byjqgar0jgpub9:"optionTwo",loxhs1bqm25b708cmbf3g:"optionTwo"},questions:["8xf0y6ziyjabvozdd253nd","am8ehyc8byjqgar0jgpub9"]},tylermcginnis:{id:"tylermcginnis",name:"Tyler McGinnis",avatarURL:"https://static1.cbrimages.com/wordpress/wp-content/uploads/2021/01/Jujutsu-Kaisen-Yuuji-Itadori.jpg?q=50&fit=crop&w=960&h=500&dpr=1.5",answers:{vthrdm985a262al8qx3do:"optionOne",xj352vofupe1dqz9emx13r:"optionTwo"},questions:["loxhs1bqm25b708cmbf3g","vthrdm985a262al8qx3do"]},johndoe:{id:"johndoe",name:"John Doe",avatarURL:"https://media.distractify.com/brand-img/sB2hN2aYv/1440x754/kento-nanami-1623346314128.png",answers:{xj352vofupe1dqz9emx13r:"optionOne",vthrdm985a262al8qx3do:"optionTwo","6ni6ok3ym7mf1p33lnez":"optionOne"},questions:["6ni6ok3ym7mf1p33lnez","xj352vofupe1dqz9emx13r"]}},P={"8xf0y6ziyjabvozdd253nd":{id:"8xf0y6ziyjabvozdd253nd",author:"sarahedo",timestamp:1467166872634,optionOne:{votes:["sarahedo"],text:"have horrible short term memory"},optionTwo:{votes:[],text:"have horrible long term memory"}},"6ni6ok3ym7mf1p33lnez":{id:"6ni6ok3ym7mf1p33lnez",author:"johndoe",timestamp:1468479767190,optionOne:{votes:[],text:"become a superhero"},optionTwo:{votes:["johndoe","sarahedo"],text:"become a supervillian"}},am8ehyc8byjqgar0jgpub9:{id:"am8ehyc8byjqgar0jgpub9",author:"sarahedo",timestamp:1488579767190,optionOne:{votes:[],text:"be telekinetic"},optionTwo:{votes:["sarahedo"],text:"be telepathic"}},loxhs1bqm25b708cmbf3g:{id:"loxhs1bqm25b708cmbf3g",author:"tylermcginnis",timestamp:1482579767190,optionOne:{votes:[],text:"be a front-end developer"},optionTwo:{votes:["sarahedo"],text:"be a back-end developer"}},vthrdm985a262al8qx3do:{id:"vthrdm985a262al8qx3do",author:"tylermcginnis",timestamp:1489579767190,optionOne:{votes:["tylermcginnis"],text:"find $50 yourself"},optionTwo:{votes:["johndoe"],text:"have your best friend find $500"}},xj352vofupe1dqz9emx13r:{id:"xj352vofupe1dqz9emx13r",author:"johndoe",timestamp:1493579767190,optionOne:{votes:["johndoe"],text:"write JavaScript"},optionTwo:{votes:["tylermcginnis"],text:"write Swift"}}};function B(){return new Promise((function(e,t){setTimeout((function(){return e(Object(U.a)({},_))}),1e3)}))}function F(){return new Promise((function(e,t){setTimeout((function(){return e(Object(U.a)({},P))}),1e3)}))}function M(e){return new Promise((function(t,n){var s=e.author,r=function(e){var t=e.optionOneText,n=e.optionTwoText,s=e.author;return{id:Math.random().toString(36).substring(2,15)+Math.random().toString(36).substring(2,15),timestamp:Date.now(),author:s,optionOne:{votes:[],text:t},optionTwo:{votes:[],text:n}}}(e);setTimeout((function(){P=Object(U.a)(Object(U.a)({},P),{},Object(z.a)({},r.id,r)),_=Object(U.a)(Object(U.a)({},_),{},Object(z.a)({},s,Object(U.a)(Object(U.a)({},_[s]),{},{questions:_[s].questions.concat([r.id])}))),t(r)}),1e3)}))}function W(e){return function(e){var t=e.authedUser,n=e.qid,s=e.answer;return new Promise((function(e,r){setTimeout((function(){_=Object(U.a)(Object(U.a)({},_),{},Object(z.a)({},t,Object(U.a)(Object(U.a)({},_[t]),{},{answers:Object(U.a)(Object(U.a)({},_[t].answers),{},Object(z.a)({},n,s))}))),P=Object(U.a)(Object(U.a)({},P),{},Object(z.a)({},n,Object(U.a)(Object(U.a)({},P[n]),{},Object(z.a)({},s,Object(U.a)(Object(U.a)({},P[n][s]),{},{votes:P[n][s].votes.concat([t])}))))),e()}),500)}))}(e)}var Y="RECEIVE_USERS",H="ADD_USER_QUESTION";var V=n(20),J=n.n(V),G="RECEIVE_QUESTIONS",$="ANSWER_QUESTION",K="ADD_QUESTION",X="ADD_QUESTION_ANSWER";function Z(e,t){return function(n,s){var r,a=s().authedUser;return n(Object(V.showLoading)()),(r={optionOneText:e,optionTwoText:t,author:a},M(r)).then((function(e){return n(function(e){return{type:K,question:e}}(e))})).then((function(e){return n(function(e,t){return{type:H,authedUser:e,questionID:t}}(a,e.id))})).then((function(){return n(Object(V.hideLoading)())}))}}function ee(e,t){return function(n,s){var r=s().authedUser;return n(Object(V.showLoading)()),W({authedUser:r,qid:e,answer:t}).then((function(){return n(function(e,t,n){return{type:$,authedUser:e,questionID:t,option:n}}(r,e,t))})).then((function(){return n(function(e,t,n){return{type:X,authedUser:e,questionID:t,option:n}}(r,e,t))})).then((function(){return n(Object(V.hideLoading)())})).catch((function(e){console.warn("Error in handleAnswerQuestion: ",e),alert("There was an error answering this question.")}))}}var te=function(e){Object(i.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(c.a)(this,n);for(var s=arguments.length,r=new Array(s),a=0;a<s;a++)r[a]=arguments[a];return(e=t.call.apply(t,[this].concat(r))).state={firstQuestion:"",secondQuestion:"",toHome:!1},e.handleFirstQuestion=function(t){var n=t.target.value;e.setState((function(){return{firstQuestion:n}}))},e.handleSecondQuestion=function(t){var n=t.target.value;e.setState((function(){return{secondQuestion:n}}))},e.handleSubmit=function(t){t.preventDefault();var n=e.state,s=n.firstQuestion,r=n.secondQuestion,a=e.props,c=a.dispatch,o=a.qid;c(Z(s,r)),e.setState((function(){return{firstQuestion:"",secondQuestion:"",toHome:!o}}))},e}return Object(o.a)(n,[{key:"render",value:function(){var e=this.state,t=e.firstQuestion,n=e.secondQuestion;return!0===e.toHome?Object(b.jsx)(l.a,{to:"/"}):Object(b.jsx)(O.a,{className:"d-flex justify-content-center",children:Object(b.jsxs)(m.a,{style:{width:"36rem"},children:[Object(b.jsx)(O.a,{className:"d-flex justify-content-center",children:Object(b.jsx)(m.a.Title,{children:Object(b.jsx)("h1",{children:"Create New Question "})})}),Object(b.jsx)(O.a,{className:"d-flex justify-content-center",children:Object(b.jsx)(m.a.Text,{children:"Complete the question"})}),Object(b.jsx)(O.a,{className:"d-flex justify-content-center",children:Object(b.jsx)(m.a.Title,{children:"Would You Rather..."})}),Object(b.jsxs)(R.a,{onSubmit:this.handleSubmit,children:[Object(b.jsx)(O.a,{className:"d-flex justify-content-center",children:Object(b.jsx)("input",{type:"text",placeholder:"Enter first question text here",value:t,onChange:this.handleFirstQuestion})}),Object(b.jsx)("center",{children:"or"}),Object(b.jsx)(O.a,{className:"d-flex justify-content-center",children:Object(b.jsx)("input",{type:"text",placeholder:"Enter second question text here",value:n,onChange:this.handleSecondQuestion})}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsx)(O.a,{children:Object(b.jsx)(O.a,{className:"d-flex justify-content-center",children:Object(b.jsx)(f.a,{variant:"primary",disabled:""===t||""===n,type:"submit",children:"SUBMIT QUESTIONS"})})})]})]})})}}]),n}(s.Component),ne=Object(d.connect)()(te);function se(){return function(e){return e(Object(V.showLoading)()),Promise.all([B(),F()]).then((function(e){var t=Object(A.a)(e,2);return{users:t[0],questions:t[1]}})).then((function(t){var n=t.users,s=t.questions;e(function(e){return{type:Y,users:e}}(n)),e(function(e){return{type:G,questions:e}}(s)),e(D(null)),e(Object(V.hideLoading)())})).catch((function(e){alert("There was an error loading initial data: ",e)}))}}var re=n(40),ae=function(e){Object(i.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(c.a)(this,n);for(var s=arguments.length,r=new Array(s),a=0;a<s;a++)r[a]=arguments[a];return(e=t.call.apply(t,[this].concat(r))).calcVotePercentage=function(e,t){return Math.round(e/t*100)},e}return Object(o.a)(n,[{key:"render",value:function(){var e=this.props,t=e.authedUser,n=e.question,s=e.users;if(!n)return Object(b.jsx)(l.a,{to:"/page-not-found"});var r=n.optionOne.votes.length+n.optionTwo.votes.length,a=this.calcVotePercentage(n.optionOne.votes.length,r),c=this.calcVotePercentage(n.optionTwo.votes.length,r);return Object(b.jsx)(O.a,{className:"d-flex justify-content-center",children:Object(b.jsx)(p.a,{children:Object(b.jsxs)(m.a,{className:"h-100 shadow-sm bg-white rounded",children:[Object(b.jsx)(O.a,{className:"d-flex justify-content-center",children:Object(b.jsxs)(m.a.Title,{children:[s[n.author].name," asks:"]})}),Object(b.jsxs)(m.a,{children:[Object(b.jsx)("img",{className:"profile-images-page",src:s[n.author].avatarURL,alt:"profile"}),Object(b.jsxs)(re.a,{children:[Object(b.jsx)("h1",{children:"Results"}),Object(b.jsxs)(m.a.Title,{children:[" ",n.optionOne.text," "]}),-1!==n.optionOne.votes.indexOf(t)&&Object(b.jsx)(m.a.Text,{children:"Your choice"}),Object(b.jsxs)(m.a.Text,{children:[a,"  %",n.optionOne.votes.length," out of ",r," ",r>1?"votes":"vote"]}),Object(b.jsxs)(m.a.Title,{children:[" ",n.optionTwo.text," "]}),-1!==n.optionTwo.votes.indexOf(t)&&Object(b.jsx)(m.a.Text,{children:"Your choice"}),Object(b.jsxs)(m.a.Text,{children:[c,"  %",n.optionTwo.votes.length," out of ",r," ",r>1?"votes":"vote"]})]})]})]})})})}}]),n}(s.Component);var ce=Object(d.connect)((function(e,t){var n=e.questions,s=e.users;return{authedUser:e.authedUser,question:n[t.id],users:s}}))(ae),oe=function(e){Object(i.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(c.a)(this,n);for(var s=arguments.length,r=new Array(s),a=0;a<s;a++)r[a]=arguments[a];return(e=t.call.apply(t,[this].concat(r))).state={answer:"",submit:!0},e.handleSubmit=function(t){t.preventDefault();var n=e.state.answer;(0,e.props.dispatch)(ee(e.props.match.params.question_id,n)),e.setState({submit:!0})},e.handleSelection=function(t){e.setState((function(){return{answer:t,submit:!1}}))},e}return Object(o.a)(n,[{key:"render",value:function(){var e=this,t=this.props,n=t.authedUser,s=t.questions,r=t.users,a=this.state,c=a.answer,o=a.submit,i=s[this.props.match.params.question_id];i.id;return-1!==i.optionOne.votes.indexOf(n)||-1!==i.optionTwo.votes.indexOf(n)?Object(b.jsx)(ce,{question:i,authedUser:n,id:i.id}):Object(b.jsx)(b.Fragment,{children:Object(b.jsx)(O.a,{children:Object(b.jsx)(p.a,{children:Object(b.jsx)(m.a,{children:Object(b.jsxs)(m.a.Header,{children:[Object(b.jsxs)(m.a.Title,{children:[r[i.author].name," asks:"]}),Object(b.jsx)(m.a,{children:Object(b.jsxs)(p.a,{children:[Object(b.jsx)(re.a,{children:Object(b.jsx)("img",{className:"profile-images-page",src:r[i.author].avatarURL,alt:"profile"})}),Object(b.jsxs)(re.a,{children:[Object(b.jsx)(m.a.Text,{children:"Would You Rather..."}),Object(b.jsxs)(R.a,{onSubmit:this.handleSubmit,children:[Object(b.jsxs)(m.a.Body,{children:[Object(b.jsx)("input",{name:"options",type:"radio",onChange:function(){return e.handleSelection("optionOne")},checked:"optionOne"===c}),i.optionOne.text]}),Object(b.jsxs)(m.a.Body,{children:[Object(b.jsx)("input",{name:"options",type:"radio",onChange:function(){return e.handleSelection("optionTwo")},checked:"optionTwo"===c}),i.optionTwo.text]}),Object(b.jsxs)(f.a,{disabled:o,type:"submit",children:["SUBMIT YOUR ANSWER"," "]})]})]})]})})]})})})})})}}]),n}(s.Component);var ie=Object(l.g)(Object(d.connect)((function(e,t){var n=e.questions,s=e.users,r=e.authedUser;return{id:t.match.params.id,authedUser:r,questions:n,users:s}}))(oe)),ue=function(e){Object(i.a)(n,e);var t=Object(u.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.props.dispatch(D(null))}},{key:"render",value:function(){return Object(b.jsx)(l.a,{to:"/login"})}}]),n}(s.Component);var je=Object(d.connect)((function(e){return{logedin:e.authedUser}}))(ue),le=function(e){Object(i.a)(n,e);var t=Object(u.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){var e=this.props.answeredQuestionIds;return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(w,{}),Object(b.jsx)(O.a,{className:"d-flex justify-content-center",style:{width:"30rem"},children:Object(b.jsx)(m.a,{style:{width:"30rem"},bg:"light",children:e.map((function(e){return Object(b.jsx)("div",{children:Object(b.jsx)(g,{id:e})},e)}))})})]})}}]),n}(s.Component);var de=Object(d.connect)((function(e,t){var n=e.questions,s=e.authedUser;return{id:t.id,answeredQuestionIds:Object.values(n).filter((function(e){return e.optionOne.votes.includes(s)||e.optionTwo.votes.includes(s)})).sort((function(e,t){return t.timestamp-e.timestamp})).map((function(e){return e.id}))}}))(le),be=n(3),he=["component","authedUser"];var Oe=Object(d.connect)((function(e){return{authedUser:e.authedUser}}))((function(e){var t=e.component,n=e.authedUser,s=Object(be.a)(e,he);return Object(b.jsx)(l.b,Object(U.a)(Object(U.a)({},s),{},{render:function(e){return null!==n?Object(b.jsx)(t,Object(U.a)(Object(U.a)({},s),e)):Object(b.jsx)(l.a,{push:!0,to:"/login"})}}))})),pe=function(e){Object(i.a)(n,e);var t=Object(u.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.props.dispatch(se())}},{key:"render",value:function(){return Object(b.jsx)(j.a,{children:Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)(J.a,{style:{backgroundColor:"black",height:"3px"}}),Object(b.jsx)(h,{}),Object(b.jsxs)(l.d,{children:[Object(b.jsx)(l.b,{path:"/page-not-found",component:x}),Object(b.jsx)(l.b,{path:"/login",component:L}),Object(b.jsx)(l.b,{path:"/logout",component:je}),Object(b.jsx)(Oe,{path:"/unanswered-tab",component:q}),Object(b.jsx)(Oe,{path:"/answered-tab",component:de}),Object(b.jsx)(Oe,{path:"/add",component:ne}),Object(b.jsx)(Oe,{path:"/question-result",component:ce}),Object(b.jsx)(Oe,{path:"/leaderboard",component:Q}),Object(b.jsx)(Oe,{path:"/questions/:question_id",component:ie}),Object(b.jsx)(Oe,{path:"/",exact:!0,component:N})]})]})})}}]),n}(s.Component);var xe=Object(d.connect)((function(e){return{authedUser:e.authedUser}}))(pe),me=n(25);var fe=n(42);var ve=Object(me.b)({authedUser:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case I:return t.id;default:return e}},users:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Y:return Object(U.a)(Object(U.a)({},e),t.users);case $:return Object(U.a)(Object(U.a)({},e),{},Object(z.a)({},t.authedUser,Object(U.a)(Object(U.a)({},e[t.authedUser]),{},{answers:Object(U.a)(Object(U.a)({},e[t.authedUser].answers),{},Object(z.a)({},t.questionID,t.option))})));case H:return Object(U.a)(Object(U.a)({},e),{},Object(z.a)({},t.authedUser,Object(U.a)(Object(U.a)({},e[t.authedUser]),{},{questions:e[t.authedUser].questions.concat([t.questionID])})));default:return e}},questions:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case G:return Object(U.a)(Object(U.a)({},e),t.questions);case K:return Object(U.a)(Object(U.a)({},e),{},Object(z.a)({},t.question.id,t.question));case X:return Object(U.a)(Object(U.a)({},e),{},Object(z.a)({},t.questionID,Object(U.a)(Object(U.a)({},e[t.questionID]),{},Object(z.a)({},t.option,Object(U.a)(Object(U.a)({},e[t.questionID][t.option]),{},{votes:[].concat(Object(fe.a)(e[t.questionID][t.option].votes),[t.authedUser])})))));default:return e}},loadingBar:V.loadingBarReducer}),ye=n(41),ge=function(e){return function(t){return function(n){console.group(n.type),console.log("The action: ",n);var s=t(n);return console.log("The new state: ",e.getState()),console.groupEnd(),s}}},we=Object(me.a)(ye.a,ge),Te=Object(me.c)(ve,we);a.a.render(Object(b.jsx)(d.Provider,{store:Te,children:Object(b.jsx)(xe,{})}),document.getElementById("root"))}},[[56,1,2]]]);
//# sourceMappingURL=main.961efe61.chunk.js.map