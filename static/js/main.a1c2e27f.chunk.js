(this.webpackJsonpsports_timer_v5=this.webpackJsonpsports_timer_v5||[]).push([[0],{28:function(e,t,a){e.exports=a.p+"static/media/finish.d02396a3.wav"},29:function(e,t,a){e.exports=a.p+"static/media/countdownBegins.7b196d77.wav"},30:function(e,t,a){e.exports=a.p+"static/media/lastSecondBeep.6d539868.wav"},31:function(e,t,a){e.exports=a.p+"static/media/lastSecondsBeep.475b3522.wav"},34:function(e,t,a){e.exports=a(61)},60:function(e,t,a){},61:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),o=a(27),l=a.n(o),i=a(32),c=a(11),r=a(1),d=a(5),u=a(6),m=a(8),p=a(7),h=a(33),v=function(e){var t=null;if(e.selectedWorkout){var a=e.selectedWorkout.items;t=a.map((function(t){return s.a.createElement("div",{className:"activity "+(t.isSelected?"active":null),key:t.key},t.isSelected?s.a.createElement(h.a,{play:!0,text:t.exerciseText}):null,s.a.createElement("div",{className:"activity-duration"},"".concat(t.displayedMinutes<10?"0"+t.displayedMinutes:t.displayedMinutes,":").concat(t.displayedSeconds<10?"0"+t.displayedSeconds:t.displayedSeconds)),s.a.createElement("div",{className:"activity-position"},s.a.createElement("i",{onClick:function(){return e.moveItemUp(t.key)},className:"angle up icon ".concat(t===a[0]||e.blocking||a.length<=1?"disabled":null)}),s.a.createElement("i",{onClick:function(){return e.moveItemDown(t.key)},className:"angle down icon ".concat(a.length>0&&t===a[a.length-1]||e.blocking||a.length<=1?"disabled":null)})),s.a.createElement("div",{className:"activity-name"},s.a.createElement("input",{type:"text",maxLength:"20",value:t.exerciseText,onChange:function(a){e.setUpdate(a.target.value,t.key)}})),s.a.createElement("div",{className:e.blocking?"disabled":null},s.a.createElement("button",{className:"duplicate",onClick:function(){e.duplicateItem(t.key)}},s.a.createElement("i",{className:"fa fa-plus"})),s.a.createElement("button",{className:"remove",onClick:function(){e.deleteItem(t.key)}},s.a.createElement("i",{className:"fa fa-trash"}))))}))}return e.selectedWorkout?s.a.createElement("div",{className:"third-row"},t):null},k=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(d.a)(this,a);for(var n=arguments.length,s=new Array(n),o=0;o<n;o++)s[o]=arguments[o];return(e=t.call.apply(t,[this].concat(s))).state={seconds:0,minutes:0,hours:0,displayedSeconds:0,displayedMinutes:0,displayedHours:0},e._secondsToFormat=function(){if(e.props.selectedWorkout){var t=e.props.selectedWorkout.totalDurationInSeconds,a=e.props.selectedWorkout.totalDisplayedDurationInSeconds,n=Math.floor(t/3600),s=Math.floor(a/3600);t-=3600*n,a-=3600*s;var o=Math.floor(t/60),l=Math.floor(a/60);t-=60*o,a-=60*l,e.setState({seconds:t||0,minutes:o||0,hours:n||0,displayedSeconds:a||0,displayedMinutes:l||0,displayedHours:s||0})}},e}return Object(u.a)(a,[{key:"componentDidUpdate",value:function(e){e.selectedWorkout&&(e.selectedWorkout.totalDurationInSeconds===this.props.selectedWorkout.totalDurationInSeconds&&e.selectedWorkout.totalDisplayedDurationInSeconds===this.props.selectedWorkout.totalDisplayedDurationInSeconds||this._secondsToFormat())}},{key:"render",value:function(){var e=this;return this.props.selectedWorkout?s.a.createElement("div",{className:"last-row"},s.a.createElement("div",{className:"player ".concat(this.props.playerBlock?"disabled":null)},this.props.isCounting?s.a.createElement("button",{onClick:function(){e.props.stopCountdownItem()}},s.a.createElement("i",{className:"pause icon small"})):s.a.createElement("button",{onClick:function(){e.props.startCountdownItem(),e.props.turnBlockingOn()}},s.a.createElement("i",{className:"play icon small"})),s.a.createElement("button",{onClick:function(){e.props.resetTimer(),e.props.turnBlockingOff()}},s.a.createElement("i",{className:"undo icon small"}))),s.a.createElement("div",{id:"timer"},s.a.createElement("h1",null,"Countdown:"," ","".concat(this.state.displayedHours<10?"0"+this.state.displayedHours:this.state.displayedHours,":").concat(this.state.displayedMinutes<10?"0"+this.state.displayedMinutes:this.state.displayedMinutes,":").concat(this.state.displayedSeconds<10?"0"+this.state.displayedSeconds:this.state.displayedSeconds))),s.a.createElement("div",{className:"total-time"},s.a.createElement("h5",null,"Total:"," ","".concat(this.state.hours<10?"0"+this.state.hours:this.state.hours,":").concat(this.state.minutes<10?"0"+this.state.minutes:this.state.minutes,":").concat(this.state.seconds<10?"0"+this.state.seconds:this.state.seconds)))):null}}]),a}(s.a.Component),y=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(d.a)(this,a);for(var n=arguments.length,s=new Array(n),o=0;o<n;o++)s[o]=arguments[o];return(e=t.call.apply(t,[this].concat(s))).state={modalMessage:"",showModal:!1,currentItem:{exerciseText:"",textColor:"",backgroundColor:"",beepBeforeEnd:0,minutes:0,seconds:0,displayedMinutes:0,displayedSeconds:0,key:"",isSelected:!1,isCounting:!1}},e._helperValidation=function(){return e.state.currentItem.exerciseText?isNaN(Number(e.state.currentItem.displayedMinutes))||isNaN(Number(e.state.currentItem.displayedSeconds))||""===e.state.currentItem.displayedMinutes||""===e.state.currentItem.displayedSeconds?(e.setState({modalMessage:"Only numbers accepted in Seconds and Minutes inputs"},(function(){e.handleOpenModal(),e.handleCloseModal()})),!1):e.state.currentItem.displayedMinutes>=0&&e.state.currentItem.minutes<=59?e.state.currentItem.displayedSeconds>=0&&e.state.currentItem.displayedSeconds<=59?e.state.currentItem.displayedMinutes>0||e.state.currentItem.displayedSeconds>0||(e.setState({modalMessage:"Overall time has to be more than 1 second."},(function(){e.handleOpenModal(),e.handleCloseModal()})),!1):(e.setState({modalMessage:"Seconds input is not within 0-59 range"},(function(){e.handleOpenModal(),e.handleCloseModal()})),!1):(e.setState({modalMessage:"Minutes input is not within 0-59 range"},(function(){e.handleOpenModal(),e.handleCloseModal()})),!1):(e.setState({modalMessage:"Exercise must have a name"},(function(){e.handleOpenModal(),e.handleCloseModal()})),!1)},e.handleChangeText=function(t){e.setState({currentItem:Object(r.a)(Object(r.a)({},e.state.currentItem),{},{exerciseText:t.target.value,key:Date.now()})})},e.handleChangeSeconds=function(t){e.setState({currentItem:Object(r.a)(Object(r.a)({},e.state.currentItem),{},{seconds:parseInt(t.target.value),displayedSeconds:parseInt(t.target.value)})})},e.handleChangeMinutes=function(t){e.setState({currentItem:Object(r.a)(Object(r.a)({},e.state.currentItem),{},{minutes:parseInt(t.target.value),displayedMinutes:parseInt(t.target.value)})})},e}return Object(u.a)(a,[{key:"handleOpenModal",value:function(){this.setState({showModal:!0})}},{key:"handleCloseModal",value:function(){var e=this,t=setTimeout((function(){e.setState({showModal:!1,modalMessage:""}),clearTimeout(t)}),2500)}},{key:"render",value:function(){var e=this;return this.props.selectedWorkout?s.a.createElement("div",{className:"Adder"},s.a.createElement("div",{className:"first-row"},s.a.createElement("div",{className:"item-content"},s.a.createElement("label",null,"Exercise Name")),s.a.createElement("div",{className:"item-content"},s.a.createElement("label",null,"Minutes")),s.a.createElement("div",{className:"item-content"},s.a.createElement("label",null,"Seconds")),s.a.createElement("div",{className:"item-content"},s.a.createElement("label",null,"Add"))),s.a.createElement("div",{className:this.props.blocking?"disabled":null},s.a.createElement("div",{className:"second-row"},s.a.createElement("div",{className:"item-content"},s.a.createElement("input",{type:"text",maxLength:"20",value:this.state.currentItem.exerciseText,onChange:this.handleChangeText})),s.a.createElement("div",{className:"item-content"},s.a.createElement("input",{type:"number",min:"0",max:"59",value:this.state.currentItem.displayedMinutes,onChange:this.handleChangeMinutes})),s.a.createElement("div",{className:"item-content"},s.a.createElement("input",{type:"number",min:"0",max:"59",value:this.state.currentItem.displayedSeconds,onChange:this.handleChangeSeconds})),s.a.createElement("div",{className:"item-content"},s.a.createElement("button",{onClick:function(){e.props.handleAddItem(e.state,e._helperValidation),e.setState({currentItem:Object(r.a)(Object(r.a)({},e.state.currentItem),{},{exerciseText:"",minutes:0,seconds:0,displayedMinutes:0,displayedSeconds:0,key:""})})},type:"button"},s.a.createElement("i",{className:"fa fa-plus addition"}))))),s.a.createElement("div",{style:{visibility:this.state.showModal?"visible":"hidden",textAlign:"center",color:"red"},className:"modal"},this.state.modalMessage)):null}}]),a}(s.a.Component),f=function(e){var t=e.selectedWorkout;return t?s.a.createElement("div",{className:"Header"},s.a.createElement("div",{className:"title-workout"},s.a.createElement("h1",null,s.a.createElement("input",{placeholder:"Enter workout title",type:"text",value:t.title,maxLength:"20",onChange:e.handleChangeTitle}))),s.a.createElement("div",{className:e.blocking?"disabled":null},s.a.createElement("div",{onClick:e.handleSaveWorkout,className:"save-workout"},"Save"))):null},S=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(d.a)(this,a);for(var n=arguments.length,s=new Array(n),o=0;o<n;o++)s[o]=arguments[o];return(e=t.call.apply(t,[this].concat(s))).javascriptStuff_2=function(){document.querySelector(".custom-select-wrapper").addEventListener("click",(function(){this.querySelector(".custom-select").classList.toggle("open")}))},e.javascriptStuff=function(){var e,t=Object(c.a)(document.querySelectorAll(".custom-option"));try{for(t.s();!(e=t.n()).done;){e.value.addEventListener("click",(function(){if(!this.classList.contains("selected")){if(document.querySelectorAll(".selected")){var e,t=Object(c.a)(document.querySelectorAll(".selected"));try{for(t.s();!(e=t.n()).done;){e.value.classList.remove("selected")}}catch(a){t.e(a)}finally{t.f()}}this.classList.add("selected"),this.closest(".custom-select").querySelector(".custom-select__trigger span").textContent=this.textContent}}))}}catch(a){t.e(a)}finally{t.f()}},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){this.javascriptStuff(),this.javascriptStuff_2()}},{key:"componentDidUpdate",value:function(e){e.workoutsArray.length!==this.props.workoutsArray.length&&this.javascriptStuff()}},{key:"renderListOfWorkouts",value:function(){var e=this;return this.props.workoutsArray.map((function(t){return s.a.createElement("div",{key:t.title,className:"workout-item"},s.a.createElement("div",{onClick:function(){return e.props.handleSelectWorkout(t)},className:"custom-option"},s.a.createElement("span",{"data-value":t.title},t.title)),s.a.createElement("div",{onClick:function(){return e.props.handleDeleteWorkout(t)},className:"delete-workout"},s.a.createElement("span",null,s.a.createElement("i",{className:"fa fa-trash"}))))}))}},{key:"render",value:function(){return s.a.createElement("div",{className:this.props.playerBlock?".disabled":null},s.a.createElement("div",{className:"custom-select-wrapper"},s.a.createElement("div",{className:"custom-select"},s.a.createElement("div",{className:"custom-select__trigger"},s.a.createElement("span",null,"Pick an option..."),s.a.createElement("div",{className:"arrow"})),s.a.createElement("div",{className:"custom-options"},this.renderListOfWorkouts(),s.a.createElement("span",{onClick:this.props.handleCreateNewWorkout,className:"custom-option create-item","data-value":"create-new-workout"},"Create new workout"),s.a.createElement("span",{onClick:this.props.handleSaveWorkoutsToFile,className:"custom-option save-to-file","data-value":"save-workouts-to-file"},"Save workouts to file"),s.a.createElement("span",{onClick:this.props.handleImportWorkoutsFromFile,className:"custom-option load-to-file","data-value":"load-workouts-from-file"},"Load workouts from file")))))}}]),a}(s.a.Component),g=a(14),b=a.n(g),C=a(28),w=a.n(C),E=a(29),W=a.n(E),I=a(30),O=a.n(I),N=a(31),M=a.n(N),j=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(d.a)(this,a);for(var n=arguments.length,s=new Array(n),o=0;o<n;o++)s[o]=arguments[o];return(e=t.call.apply(t,[this].concat(s))).state={modalMessage:"",showModal:!1,startCountdown:!0,isCounting:!1,blocking:!1,playerBlock:!1,selectedWorkout:null,workoutsArray:[]},e.handleSelectWorkout=function(t){clearInterval(e.myInterval),e.setState({selectedWorkout:b.a.cloneDeep(t),startCountdown:!0,isCounting:!1,blocking:!1,playerBlock:!1},e.totalTimeCalculation)},e.handleCreateNewWorkout=function(){e.setState({selectedWorkout:{title:"",totalDurationInSeconds:0,totalDisplayedDurationInSeconds:0,items:[]}})},e.handleDeleteWorkout=function(t){var a=b.a.cloneDeep(e.state.workoutsArray).filter((function(e){return e.title!==t.title}));e.setState({workoutsArray:a})},e.handleImportWorkoutsFromFile=function(){var t=document.createElement("input");t.type="file",t.onchange=function(t){var a=t.target.files[0],n=new FileReader;n.readAsText(a,"UTF-8"),n.onload=function(t){var a=t.target.result;a=JSON.parse(a),e.setState({workoutsArray:a})}},t.click()},e.handleSaveWorkoutsToFile=function(){var t=JSON.stringify(e.state.workoutsArray);e.downloadFile(t,"workouts.json")},e.handleChangeTitle=function(t){e.setState({selectedWorkout:Object(r.a)(Object(r.a)({},e.state.selectedWorkout),{},{title:t.target.value})})},e._titleValidation=function(){return""===e.state.selectedWorkout.title.trim()?(console.log("title not passed validation"),e.setState({modalMessage:"Workout must have a title !"},(function(){e.handleOpenModal(),e.handleCloseModal()})),!1):(console.log("title passed validation"),!0)},e.handleSaveWorkout=function(){if(e._titleValidation()){var t=e.state.selectedWorkout.title,a=e.findWithAttr(e.state.workoutsArray,"title",t),n=b.a.cloneDeep(e.state.selectedWorkout),s=b.a.cloneDeep(e.state.workoutsArray);null!==a?(console.log("replacing obj"),s[a]=n,e.setState({workoutsArray:s})):(console.log("adding new"),s.push(n),e.setState({workoutsArray:s}))}},e.totalTimeCalculation=function(){var t,a=0,n=0,s=Object(c.a)(e.state.selectedWorkout.items);try{for(s.s();!(t=s.n()).done;){var o=t.value;a+=o.seconds+60*o.minutes,n+=o.displayedSeconds+60*o.displayedMinutes}}catch(l){s.e(l)}finally{s.f()}e.setState({selectedWorkout:Object(r.a)(Object(r.a)({},e.state.selectedWorkout),{},{totalDurationInSeconds:a,totalDisplayedDurationInSeconds:n})})},e.handleAddItem=function(t,a){if(a()){var n=t.currentItem,s=[].concat(Object(i.a)(e.state.selectedWorkout.items),[n]),o=Object(r.a)(Object(r.a)({},e.state.selectedWorkout),{},{items:s});e.setState({selectedWorkout:o},e.totalTimeCalculation)}else console.log("Error - Validation did not pass - retry the form")},e.moveItemUp=function(t){var a=e.findWithAttr(e.state.selectedWorkout.items,"key",t),n=e.state.selectedWorkout.items[a],s=e.state.selectedWorkout.items.filter((function(e){return e.key!==t}));s.splice(a-1,0,n);var o=Object(r.a)(Object(r.a)({},e.state.selectedWorkout),{},{items:s});e.setState({selectedWorkout:o})},e.moveItemDown=function(t){var a=e.findWithAttr(e.state.selectedWorkout.items,"key",t),n=e.state.selectedWorkout.items[a],s=e.state.selectedWorkout.items.filter((function(e){return e.key!==t}));s.splice(a+1,0,n);var o=Object(r.a)(Object(r.a)({},e.state.selectedWorkout),{},{items:s});e.setState({selectedWorkout:o})},e.duplicateItem=function(t){var a=e.state.selectedWorkout.items;a.map((function(e){if(e.key===t){var n=Object(r.a)(Object(r.a)({},e),{},{key:Date.now()});a.push(n)}}));var n=Object(r.a)(Object(r.a)({},e.state.selectedWorkout),{},{items:a});e.setState({selectedWorkout:n},e.totalTimeCalculation)},e.deleteItem=function(t){var a=e.state.selectedWorkout.items.filter((function(e){return e.key!==t})),n=Object(r.a)(Object(r.a)({},e.state.selectedWorkout),{},{items:a});e.setState({selectedWorkout:n},e.totalTimeCalculation)},e.setUpdate=function(t,a){var n=e.state.selectedWorkout.items;n.map((function(e){e.key===a&&(e.exerciseText=t)}));var s=Object(r.a)(Object(r.a)({},e.state.selectedWorkout),{},{items:n});e.setState({selectedWorkout:s})},e.countdownInterval=function(t,a){0!==e.state.selectedWorkout.totalDisplayedDurationInSeconds&&(e.myInterval=setInterval((function(){if(t<a.length){var n=a[t],s=n.displayedSeconds,o=n.displayedMinutes;if(s>0){n.displayedSeconds=s-1,n.isCounting=!0,n.isSelected=!0,0===o&&1===s?e.playAudioLastSecond():0===o&&s<5&&e.playAudioLastSeconds();var l=Object(r.a)(Object(r.a)({},e.state.selectedWorkout),{},{items:a});e.setState({selectedWorkout:l},e.totalTimeCalculation)}if(0===s)if(0===o){n.isCounting=!1,n.isSelected=!1;var i=Object(r.a)(Object(r.a)({},e.state.selectedWorkout),{},{items:a});e.setState({selectedWorkout:i},e.totalTimeCalculation),clearInterval(e.myInterval),a[t+1]?e.countdownInterval(t+1,a):(e.setState({isCounting:!1,startCountdown:!1}),e.playAudio())}else{n.displayedMinutes=o-1,n.displayedSeconds=59,n.isCounting=!0,n.isSelected=!0;var c=Object(r.a)(Object(r.a)({},e.state.selectedWorkout),{},{items:a});e.setState({selectedWorkout:c},e.totalTimeCalculation)}}else clearInterval(e.myInterval)}),1e3))},e.startCountdownItem=function(){var t=e.state.selectedWorkout.items,a=0;if(!e.state.isCounting&&e.state.startCountdown&&0!==e.state.selectedWorkout.totalDurationInSeconds){e.setState({playerBlock:!0,isCounting:!0},(function(){var t=setTimeout((function(){e.setState({playerBlock:!1}),clearTimeout(t)}),4e3)}));var n=setTimeout((function(){e.countdownInterval(0,t)}),3e3),s=setInterval((function(){e.playAudioCountdown(),3===++a&&(clearInterval(s),clearTimeout(n))}),1010)}else e.state.isCounting||e.setState({isCounting:!0,startCountdown:!1},e.countdownInterval(0,t))},e.stopCountdownItem=function(){e.myInterval&&(clearInterval(e.myInterval),e.setState({isCounting:!1,startCountdown:!1}))},e.resetTimer=function(){if(e.myInterval){clearInterval(e.myInterval);var t,a=e.state.selectedWorkout.items,n=Object(c.a)(a);try{for(n.s();!(t=n.n()).done;){var s=t.value;s.displayedSeconds=s.seconds,s.displayedMinutes=s.minutes,s.isSelected=!1,s.isCounting=!1}}catch(l){n.e(l)}finally{n.f()}var o=Object(r.a)(Object(r.a)({},e.state.selectedWorkout),{},{items:a});e.setState({selectedWorkout:o,isCounting:!1,startCountdown:!0}),e.totalTimeCalculation()}},e.turnBlockingOn=function(){e.setState({blocking:!0})},e.turnBlockingOff=function(){e.setState({blocking:!1})},e}return Object(u.a)(a,[{key:"handleOpenModal",value:function(){this.setState({showModal:!0})}},{key:"handleCloseModal",value:function(){var e=this,t=setTimeout((function(){e.setState({showModal:!1,modalMessage:""}),clearTimeout(t)}),2500)}},{key:"downloadFile",value:function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"json",n=document.createElement("a");n.style.display="none",document.body.appendChild(n),n.href=window.URL.createObjectURL(new Blob([e],{type:a})),n.setAttribute("download",t),n.click(),window.URL.revokeObjectURL(n.href),document.body.removeChild(n)}},{key:"findWithAttr",value:function(e,t,a){for(var n=0;n<e.length;n+=1)if(e[n][t]===a)return n;return null}},{key:"playAudio",value:function(){document.getElementsByClassName("audio-element")[0].play()}},{key:"playAudioCountdown",value:function(){document.getElementsByClassName("audio-element")[1].play()}},{key:"playAudioLastSeconds",value:function(){document.getElementsByClassName("audio-element")[2].play()}},{key:"playAudioLastSecond",value:function(){document.getElementsByClassName("audio-element")[3].play()}},{key:"render",value:function(){return s.a.createElement("div",{className:"App"},s.a.createElement("div",{style:{visibility:"hidden"}},s.a.createElement("div",{style:{visibility:"hidden"}},s.a.createElement("audio",{src:w.a,className:"audio-element"})),s.a.createElement("div",{style:{visibility:"hidden"}},s.a.createElement("audio",{src:W.a,className:"audio-element"})),s.a.createElement("div",{style:{visibility:"hidden"}},s.a.createElement("audio",{src:M.a,className:"audio-element"})),s.a.createElement("div",{style:{visibility:"hidden"}},s.a.createElement("audio",{src:O.a,className:"audio-element"}))),s.a.createElement(S,{workoutsArray:this.state.workoutsArray,playerBlock:this.state.playerBlock,handleSelectWorkout:this.handleSelectWorkout,handleCreateNewWorkout:this.handleCreateNewWorkout,handleDeleteWorkout:this.handleDeleteWorkout,handleSaveWorkoutsToFile:this.handleSaveWorkoutsToFile,handleImportWorkoutsFromFile:this.handleImportWorkoutsFromFile}),s.a.createElement("div",{style:{visibility:this.state.selectedWorkout?"visible":"hidden"},className:"container"},s.a.createElement("div",{style:{visibility:this.state.showModal?"visible":"hidden",textAlign:"center",color:"red"},className:"modal"},this.state.modalMessage),s.a.createElement(f,{blocking:this.state.blocking,selectedWorkout:this.state.selectedWorkout,handleSaveWorkout:this.handleSaveWorkout,handleChangeTitle:this.handleChangeTitle}),s.a.createElement(y,{blocking:this.state.blocking,selectedWorkout:this.state.selectedWorkout,handleAddItem:this.handleAddItem}),s.a.createElement(v,{blocking:this.state.blocking,startCountdown:this.state.startCountdown,selectedWorkout:this.state.selectedWorkout,deleteItem:this.deleteItem,setUpdate:this.setUpdate,duplicateItem:this.duplicateItem,moveItemUp:this.moveItemUp,moveItemDown:this.moveItemDown}),s.a.createElement(k,{isCounting:this.state.isCounting,playerBlock:this.state.playerBlock,selectedWorkout:this.state.selectedWorkout,startCountdownItem:this.startCountdownItem,stopCountdownItem:this.stopCountdownItem,resetTimer:this.resetTimer,turnBlockingOn:this.turnBlockingOn,turnBlockingOff:this.turnBlockingOff})))}}]),a}(s.a.Component);a(60);l.a.render(s.a.createElement(j,null),document.querySelector("#root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.a1c2e27f.chunk.js.map