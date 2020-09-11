module.exports=function(t,e){"use strict";var i={};function __webpack_require__(e){if(i[e]){return i[e].exports}var n=i[e]={i:e,l:false,exports:{}};var s=true;try{t[e].call(n.exports,n,n.exports,__webpack_require__);s=false}finally{if(s)delete i[e]}n.l=true;return n.exports}__webpack_require__.ab=__dirname+"/";function startup(){return __webpack_require__(144)}return startup()}({23:function(t,e,i){const n=i(622);const s={"{":"}","(":")","[":"]"};const r=/\\(.)|(^!|\*|[\].+)]\?|\[[^\\\]]+\]|\{[^\\}]+\}|\(\?[:!=][^\\)]+\)|\([^|]+\|[^\\)]+\)|(\\).|([@?!+*]\(.*\)))/;const a=/\\(.)|(^!|[*?{}()[\]]|\(\?)/;function isglob(t,{strict:e=true}={}){if(t==="")return false;let i,n=e?r:a;while(i=n.exec(t)){if(i[2])return true;let e=i.index+i[0].length;let n=i[1];let r=n?s[n]:null;if(n&&r){let i=t.indexOf(r,e);if(i!==-1)e=i+1}t=t.slice(e)}return false}function parent(t,{strict:e=false}={}){t=n.normalize(t).replace(/\/|\\/,"/");if(/[\{\[].*[\/]*.*[\}\]]$/.test(t))t+="/";t+="a";do{t=n.dirname(t)}while(isglob(t,{strict:e})||/(^|[^\\])([\{\[]|\([^\)]+$)/.test(t));return t.replace(/\\([\*\?\|\[\]\(\)\{\}])/g,"$1")}function globalyzer(t,e={}){let i=parent(t,e);let s=isglob(t,e);let r;if(i!="."){r=t.substr(i.length);if(r.startsWith("/"))r=r.substr(1)}else{r=t}if(!s){i=n.dirname(t);r=i!=="."?t.substr(i.length):t}if(r.startsWith("./"))r=r.substr(2);if(r.startsWith("/"))r=r.substr(1);return{base:i,glob:r,isGlob:s}}t.exports=globalyzer},26:function(t,e,i){"use strict";var n=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:true});const s=n(i(294));class TableStyleBuilder{constructor(){this.spaceStart=" ";this.spaceEnd=" ";this.verticalLine="|";this.horizontalLine="-";this.drawTopLine=true}withNumberOfSpacesAtStartOfColumns(t){this.spaceStart=" ".repeat(t);return this}withNumberOfSpacesAtEndOfColumns(t){this.spaceEnd=" ".repeat(t);return this}withVerticalLineStyle(t){this.verticalLine=t;return this}withHorizontalLineStyle(t){this.horizontalLine=t;return this}withTopLine(t){this.drawTopLine=t;return this}build(){return new s.default(this.spaceStart,this.spaceEnd,this.verticalLine,this.horizontalLine,this.drawTopLine)}}e.default=TableStyleBuilder},50:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:true});class Conditional{constructor(t,e,i){this.filePath=t;this.lineNumber=e;this.columnNumber=i}static newInstance(t,e,i){return new Conditional(t,e,i)}getFilePath(){return this.filePath}getLineNumber(){return this.lineNumber}getColumnNumber(){return this.columnNumber}}e.default=Conditional},80:function(t,e,i){"use strict";var n=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:true});const s=n(i(50));const r=i(747);const a=n(i(580));class ConditionalFileDetector{constructor(t){this.currentMatch=null;this.conditionals=[];this.filePath=t;this.fileContent=r.readFileSync(t).toString();this.positionCalculator=new a.default(this.fileContent);this.findConditionals()}getConditionals(){return this.conditionals}findConditionals(){this.currentMatch=ConditionalFileDetector.IF_REG_EX.exec(this.fileContent);this.loopThroughConditionalMatches()}loopThroughConditionalMatches(){while(this.currentMatch!==null){this.handleMatch(this.currentMatch);this.setCurrentMatchToNextMatch()}}handleMatch(t){if(t[1]){this.addConditionalAt(t.index+t[0].indexOf("if"))}}addConditionalAt(t){const e=this.positionCalculator.getPositionData(t);this.conditionals.push(s.default.newInstance(this.filePath,e.line,e.column))}setCurrentMatchToNextMatch(){this.currentMatch=ConditionalFileDetector.IF_REG_EX.exec(this.fileContent)}}e.default=ConditionalFileDetector;ConditionalFileDetector.IF_REG_EX=/((?:[ \t]|^)if ?\()|(\/\*[\s\S]*?\*\/|\/\/.*)/gm},87:function(t){t.exports=require("os")},144:function(t,e,i){"use strict";var n=this&&this.__createBinding||(Object.create?function(t,e,i,n){if(n===undefined)n=i;Object.defineProperty(t,n,{enumerable:true,get:function(){return e[i]}})}:function(t,e,i,n){if(n===undefined)n=i;t[n]=e[i]});var s=this&&this.__setModuleDefault||(Object.create?function(t,e){Object.defineProperty(t,"default",{enumerable:true,value:e})}:function(t,e){t["default"]=e});var r=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(t!=null)for(var i in t)if(i!=="default"&&Object.prototype.hasOwnProperty.call(t,i))n(e,t,i);s(e,t);return e};var a=this&&this.__awaiter||function(t,e,i,n){function adopt(t){return t instanceof i?t:new i(function(e){e(t)})}return new(i||(i=Promise))(function(i,s){function fulfilled(t){try{step(n.next(t))}catch(t){s(t)}}function rejected(t){try{step(n["throw"](t))}catch(t){s(t)}}function step(t){t.done?i(t.value):adopt(t.value).then(fulfilled,rejected)}step((n=n.apply(t,e||[])).next())})};var o=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:true});const l=r(i(186));const u=o(i(719));const c=o(i(394));const d=o(i(834));const h=o(i(703));const f=o(i(990));const p=t=>t.split(" ").filter(t=>t.length);function run(){return a(this,void 0,void 0,function*(){try{const t=p(l.getInput("include"));const e=p(l.getInput("exclude"));const i=p(l.getInput("conditionalLayer"));const n=Number.parseInt(l.getInput("max"));const s=new u.default(t,e,i);const r=new d.default;const a=r.getConditionals(yield s.getIncludedPaths());const o=r.getConditionals(yield s.getLayerPaths());const g=r.getConditionals(yield s.getNonLayerPaths());const m=new f.default(a,o,n);new h.default(m.getDataObject()).withVerticalLineStyle(":").print();console.log("");console.log(`Percentage in Conditional Layer: ${m.getPercentIncluded().toFixed(1)} %`);const y=m.getNumberOfExceedingFiles();console.log(`Number of Files Exceeding Max: ${y}`);console.log("");if(m.getNumberOfExceedingFiles()){l.setFailed(`There are ${y} files containing too many conditionals!`)}else{console.log("Congratulations! Your code is unconditional.")}const b=(new c.default).getDataObject(g);new h.default(b).withHorizontalLineStyle("=").print()}catch(t){l.setFailed(t.message)}})}run()},178:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:true});class ConsoleDisplay{print(t){console.log(t)}}e.default=ConsoleDisplay},186:function(t,e,i){"use strict";var n=this&&this.__awaiter||function(t,e,i,n){function adopt(t){return t instanceof i?t:new i(function(e){e(t)})}return new(i||(i=Promise))(function(i,s){function fulfilled(t){try{step(n.next(t))}catch(t){s(t)}}function rejected(t){try{step(n["throw"](t))}catch(t){s(t)}}function step(t){t.done?i(t.value):adopt(t.value).then(fulfilled,rejected)}step((n=n.apply(t,e||[])).next())})};var s=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(t!=null)for(var i in t)if(Object.hasOwnProperty.call(t,i))e[i]=t[i];e["default"]=t;return e};Object.defineProperty(e,"__esModule",{value:true});const r=i(351);const a=s(i(87));const o=s(i(622));var l;(function(t){t[t["Success"]=0]="Success";t[t["Failure"]=1]="Failure"})(l=e.ExitCode||(e.ExitCode={}));function exportVariable(t,e){const i=r.toCommandValue(e);process.env[t]=i;r.issueCommand("set-env",{name:t},i)}e.exportVariable=exportVariable;function setSecret(t){r.issueCommand("add-mask",{},t)}e.setSecret=setSecret;function addPath(t){r.issueCommand("add-path",{},t);process.env["PATH"]=`${t}${o.delimiter}${process.env["PATH"]}`}e.addPath=addPath;function getInput(t,e){const i=process.env[`INPUT_${t.replace(/ /g,"_").toUpperCase()}`]||"";if(e&&e.required&&!i){throw new Error(`Input required and not supplied: ${t}`)}return i.trim()}e.getInput=getInput;function setOutput(t,e){r.issueCommand("set-output",{name:t},e)}e.setOutput=setOutput;function setCommandEcho(t){r.issue("echo",t?"on":"off")}e.setCommandEcho=setCommandEcho;function setFailed(t){process.exitCode=l.Failure;error(t)}e.setFailed=setFailed;function isDebug(){return process.env["RUNNER_DEBUG"]==="1"}e.isDebug=isDebug;function debug(t){r.issueCommand("debug",{},t)}e.debug=debug;function error(t){r.issue("error",t instanceof Error?t.toString():t)}e.error=error;function warning(t){r.issue("warning",t instanceof Error?t.toString():t)}e.warning=warning;function info(t){process.stdout.write(t+a.EOL)}e.info=info;function startGroup(t){r.issue("group",t)}e.startGroup=startGroup;function endGroup(){r.issue("endgroup")}e.endGroup=endGroup;function group(t,e){return n(this,void 0,void 0,function*(){startGroup(t);let i;try{i=yield e()}finally{endGroup()}return i})}e.group=group;function saveState(t,e){r.issueCommand("save-state",{name:t},e)}e.saveState=saveState;function getState(t){return process.env[`STATE_${t}`]||""}e.getState=getState},236:function(t,e,i){"use strict";var n=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:true});const s=n(i(26));class TablePrinter{constructor(t,e,i){this.columns=[];this.tableRows=[];this.columns=t;this.display=e;this.style=i||(new s.default).build()}print(){this.populateTableRows();this.tableRows.forEach(t=>this.display.print(t))}populateTableRows(){this.addHeaderToRows();this.addValuesToRows();this.addFinalLine();if(!this.style.drawTopLine)this.removeTopLine()}addHeaderToRows(){for(let t=0;t<3;t++)this.tableRows.push(this.style.verticalLine);this.columns.forEach(t=>this.addColumnHeaderToRows(t))}addValuesToRows(){const t=this.columns[0].getValues().length;for(let e=0;e<t;e++)this.tableRows.push(this.style.verticalLine);this.columns.forEach(t=>this.addColumnValuesToRows(t))}addColumnHeaderToRows(t){const e=this.addSpaces(t.getHeader());const i=this.getHorizontalLineOfLength(e.length);this.tableRows[0]+=i+this.style.verticalLine;this.tableRows[1]+=e+this.style.verticalLine;this.tableRows[2]+=i+this.style.verticalLine}addColumnValuesToRows(t){t.getValues().forEach((t,e)=>{const i=this.addSpaces(t)+this.style.verticalLine;this.tableRows[e+3]+=i})}addFinalLine(){this.tableRows.push(this.style.verticalLine);this.columns.forEach(t=>this.addSectionToFinalLine(t))}addSectionToFinalLine(t){const e=this.tableRows.length-1;const i=this.addSpaces(t.getHeader()).length;this.tableRows[e]+=this.getHorizontalLineOfLength(i)+this.style.verticalLine}addSpaces(t){return this.style.spaceStart+t+this.style.spaceEnd}removeTopLine(){this.tableRows=this.tableRows.slice(1)}getHorizontalLineOfLength(t){return"".padEnd(t,this.style.horizontalLine)}}e.default=TablePrinter},256:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:true});class Messages{}e.default=Messages;Messages.ONE_ARRAY_FIELD_PER_OBJECT="Invalid Taybl Data: Only one field per object can be an array.";Messages.ARRAY_FIELD_MUST_CONTAIN_OBJECTS="Invalid Taybl Data: Array fields must contain objects.";Messages.ARRAY_FIELDS_MUST_HAVE_ONE_TYPE="Invalid Taybl Data: Array fields must have consistent type."},294:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:true});class TableStyle{constructor(t,e,i,n,s){this.spaceStart=t;this.spaceEnd=e;this.verticalLine=i;this.horizontalLine=n;this.drawTopLine=s}}e.default=TableStyle},343:function(t,e,i){const n=i(747);const s=i(927);const{promisify:r}=i(669);const a=i(23);const{join:o,resolve:l,relative:u}=i(622);const c=/(^|[\\\/])\.[^\\\/\.]/g;const d=r(n.readdir);const h=r(n.stat);let f={};async function walk(t,e,i,s,r="",a=0){const l=i.segments[a];const h=o(s.cwd,e,r);const p=await d(h);const{dot:g,filesOnly:m}=s;let y=0,b=p.length,_;let v,w,O,C;for(;y<b;y++){v=o(h,_=p[y]);w=r?o(r,_):_;if(!g&&c.test(w))continue;C=i.regex.test(w);if((O=f[w])===void 0){f[w]=O=n.lstatSync(v)}if(!O.isDirectory()){C&&t.push(u(s.cwd,v));continue}if(l&&!l.test(_))continue;!m&&C&&t.push(o(e,w));await walk(t,e,i,s,w,l&&l.toString()!==i.globstar&&++a)}}t.exports=async function(t,e={}){if(!t)return[];let i=a(t);e.cwd=e.cwd||".";if(!i.isGlob){try{let i=l(e.cwd,t);let n=await h(i);if(e.filesOnly&&!n.isFile())return[];return e.absolute?[i]:[t]}catch(t){if(t.code!="ENOENT")throw t;return[]}}if(e.flush)f={};let n=[];const{path:r}=s(i.glob,{filepath:true,globstar:true,extended:true});r.globstar=r.globstar.toString();await walk(n,i.base,r,e,".",0);return e.absolute?n.map(t=>l(e.cwd,t)):n}},351:function(t,e,i){"use strict";var n=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(t!=null)for(var i in t)if(Object.hasOwnProperty.call(t,i))e[i]=t[i];e["default"]=t;return e};Object.defineProperty(e,"__esModule",{value:true});const s=n(i(87));function issueCommand(t,e,i){const n=new Command(t,e,i);process.stdout.write(n.toString()+s.EOL)}e.issueCommand=issueCommand;function issue(t,e=""){issueCommand(t,{},e)}e.issue=issue;const r="::";class Command{constructor(t,e,i){if(!t){t="missing.command"}this.command=t;this.properties=e;this.message=i}toString(){let t=r+this.command;if(this.properties&&Object.keys(this.properties).length>0){t+=" ";let e=true;for(const i in this.properties){if(this.properties.hasOwnProperty(i)){const n=this.properties[i];if(n){if(e){e=false}else{t+=","}t+=`${i}=${escapeProperty(n)}`}}}}t+=`${r}${escapeData(this.message)}`;return t}}function toCommandValue(t){if(t===null||t===undefined){return""}else if(typeof t==="string"||t instanceof String){return t}return JSON.stringify(t)}e.toCommandValue=toCommandValue;function escapeData(t){return toCommandValue(t).replace(/%/g,"%25").replace(/\r/g,"%0D").replace(/\n/g,"%0A")}function escapeProperty(t){return toCommandValue(t).replace(/%/g,"%25").replace(/\r/g,"%0D").replace(/\n/g,"%0A").replace(/:/g,"%3A").replace(/,/g,"%2C")}},394:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:true});class ConditionalReporter{constructor(){this.getPositionObject=(t=>({Line:t.getLineNumber(),Column:t.getColumnNumber()}))}getDataObject(t){return this.constructTayblObject(t)}constructTayblObject(t){const e=[...new Set(t.map(t=>t.getFilePath()))];const i=this.getMapFromPathToConditionals(t);const n=e.map(t=>this.getInnerTayblObject(t,i));return{_files:n}}getMapFromPathToConditionals(t){const e=new Map;const i=t=>this.addConditionalToMap(t,e);t.forEach(i);return e}getInnerTayblObject(t,e){return{"File Path":t,Count:e.get(t).length,_conditional_positions:this.getConditionalsStrings(e.get(t))}}addConditionalToMap(t,e){if(!e.get(t.getFilePath()))e.set(t.getFilePath(),[]);e.get(t.getFilePath()).push(t)}getConditionalsStrings(t){return t.map(this.getPositionObject)}}e.default=ConditionalReporter},397:function(t,e,i){"use strict";var n=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:true});const s=n(i(453));class ColumnExtractor{constructor(t){this.columnObject={};this.columns=[];this.getColumnsFor(t);this.makeColumnsFromColumnObject()}getColumns(){return this.columns}makeColumnsFromColumnObject(){Object.keys(this.columnObject).forEach(t=>this.columns.push(new s.default(t,this.columnObject[t])))}getColumnsFor(t){const e=this.getObjectFieldKey(t);Object.keys(t).forEach(i=>this.handleObjectKeys(i,e,t))}handleObjectKeys(t,e,i){if(t!==e)this.addToColumnsForNonObjectFields(t,i);else i[e].forEach(t=>this.getColumnsFor(t))}addToColumnsForNonObjectFields(t,e){if(!this.columnObject[t])this.columnObject[t]=[];this.columnObject[t].push(e[t].toString());if(!this.getObjectFieldKey(e))return;const i=this.numberOfChildObjects(e);for(let e=1;e<i;e++)this.columnObject[t].push("")}numberOfChildObjects(t){let e=this.getObjectFieldKey(t);let i=1;while(e){i*=t[e].length;t=t[e][0];e=this.getObjectFieldKey(t)}return i}getObjectFieldKey(t){return Object.keys(t).find(e=>typeof t[e]==="object")}}e.default=ColumnExtractor},406:function(t,e,i){"use strict";var n=this&&this.__awaiter||function(t,e,i,n){function adopt(t){return t instanceof i?t:new i(function(e){e(t)})}return new(i||(i=Promise))(function(i,s){function fulfilled(t){try{step(n.next(t))}catch(t){s(t)}}function rejected(t){try{step(n["throw"](t))}catch(t){s(t)}}function step(t){t.done?i(t.value):adopt(t.value).then(fulfilled,rejected)}step((n=n.apply(t,e||[])).next())})};var s=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:true});const r=s(i(343));class GlobHandler{getPaths(t){return n(this,void 0,void 0,function*(){return yield r.default(t,{filesOnly:true})})}}e.default=GlobHandler},453:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:true});class Column{constructor(t,e){this.header=t;this.values=e;this.fixWidth()}getHeader(){return this.header}getValues(){return this.values}fixWidth(){const t=this.getMaxWidth();this.header=this.header.padEnd(t," ");this.values=this.values.map(e=>e.padEnd(t," "))}getMaxWidth(){return Math.max(this.header.length,Math.max(...this.values.map(t=>t.length)))}}e.default=Column},580:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:true});class PositionCalculator{constructor(t){this.data=t}getPositionData(t){return{line:this.getLineNumber(t),column:this.getColumnNumber(t)}}getLineNumber(t){return t?this.data.slice(0,t).split("\n").length:1}getColumnNumber(t){let e=this.data.slice(0,t).lastIndexOf("\n",t-1);if(e<0)return t+1;return t-e}}e.default=PositionCalculator},622:function(t){t.exports=require("path")},652:function(t,e,i){"use strict";var n=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:true});const s=n(i(26));const r=n(i(700));const a=n(i(397));const o=n(i(236));const l=n(i(178));class Taybl{constructor(t){this.styleBuilder=new s.default;this.validator=new r.default;t=this.wrapArrayInObject(t);if(this.validator.isValid(t))this.columns=new a.default(t).getColumns();else throw this.validator.getMessage()}print(){const t=new o.default(this.columns,new l.default,this.styleBuilder.build());t.print()}withNumberOfSpacesAtStartOfColumns(t){this.styleBuilder=this.styleBuilder.withNumberOfSpacesAtStartOfColumns(t);return this}withNumberOfSpacesAtEndOfColumns(t){this.styleBuilder=this.styleBuilder.withNumberOfSpacesAtEndOfColumns(t);return this}withVerticalLineStyle(t){this.styleBuilder=this.styleBuilder.withVerticalLineStyle(t);return this}withHorizontalLineStyle(t){this.styleBuilder=this.styleBuilder.withHorizontalLineStyle(t);return this}withTopLine(t){this.styleBuilder=this.styleBuilder.withTopLine(t);return this}wrapArrayInObject(t){return Array.isArray(t)?{dummyField:t}:t}}e.default=Taybl},669:function(t){t.exports=require("util")},700:function(t,e,i){"use strict";var n=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:true});const s=n(i(256));class ObjectValidator{constructor(){this.valid=true;this.message=""}isValid(t){this.resetState();this.object=this.wrapArrayInObject(t);this.validateEachFieldLevel();return this.valid}getMessage(){return this.message}wrapArrayInObject(t){return Array.isArray(t)?{dummyField:t}:t}validateEachFieldLevel(){while(this.valid&&this.getArrayFields().length>0)this.validateFieldLevel()}validateFieldLevel(){const t=this.getArrayFields();this.validateArrayFields(t);if(this.valid)this.object=t[0][0]}validateArrayFields(t){if(t.length>1)this.invalidate(s.default.ONE_ARRAY_FIELD_PER_OBJECT);else if(t.length===1)this.validateArrayContainsOneType(t[0])}validateArrayContainsOneType(t){if(t.every(t=>typeof t==="object"))this.validateKeyStringsMatch(t);else this.invalidate(s.default.ARRAY_FIELD_MUST_CONTAIN_OBJECTS)}validateKeyStringsMatch(t){const e=Object.keys(t[0]).join("");if(!t.every(t=>Object.keys(t).join("")===e))this.invalidate(s.default.ARRAY_FIELDS_MUST_HAVE_ONE_TYPE)}invalidate(t){this.valid=false;this.message=t}getArrayFields(){const t=Object.keys(this.object).map(t=>this.object[t]);return t.filter(t=>Array.isArray(t)&&t!==null)}resetState(){this.valid=true;this.message=""}}e.default=ObjectValidator},703:function(t,e,i){"use strict";var n=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:true});e.__useDefault=void 0;const s=n(i(652));e.__useDefault=true;e.default=s.default},719:function(t,e,i){"use strict";var n=this&&this.__awaiter||function(t,e,i,n){function adopt(t){return t instanceof i?t:new i(function(e){e(t)})}return new(i||(i=Promise))(function(i,s){function fulfilled(t){try{step(n.next(t))}catch(t){s(t)}}function rejected(t){try{step(n["throw"](t))}catch(t){s(t)}}function step(t){t.done?i(t.value):adopt(t.value).then(fulfilled,rejected)}step((n=n.apply(t,e||[])).next())})};var s=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:true});const r=s(i(406));class FileRetriever{constructor(t,e=[],i=[]){this.include=t;this.exclude=e;this.layer=i}getIncludedPaths(){return n(this,void 0,void 0,function*(){const t=yield this.getPaths(this.include);const e=yield this.getPaths(this.exclude);return new Promise(i=>i(this.getDifference(t,e)))})}getLayerPaths(){return n(this,void 0,void 0,function*(){const t=yield this.getIncludedPaths();const e=yield this.getPaths(this.layer);return new Promise(i=>i(this.getIntersection(t,e)))})}getNonLayerPaths(){return n(this,void 0,void 0,function*(){const t=yield this.getIncludedPaths();const e=yield this.getPaths(this.layer);return new Promise(i=>i(this.getDifference(t,e)))})}getPaths(t){return n(this,void 0,void 0,function*(){const e=new r.default;let i=[];for(let n=0;n<t.length;n++)i=i.concat(yield e.getPaths(t[n]));return this.deduplicate(i)})}getDifference(t,e){return t.filter(t=>!e.includes(t))}getIntersection(t,e){return t.filter(t=>e.includes(t))}deduplicate(t){return[...new Set(t)]}}e.default=FileRetriever},747:function(t){t.exports=require("fs")},834:function(t,e,i){"use strict";var n=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:true});const s=n(i(80));class ConditionalDetector{constructor(){this.conditionals=[];this.addConditionals=(t=>{const e=new s.default(t).getConditionals();this.conditionals=this.conditionals.concat(e)})}getConditionals(t){this.conditionals=[];t.forEach(this.addConditionals);return this.conditionals}}e.default=ConditionalDetector},927:function(t){const e=process.platform==="win32";const i=e?`\\\\+`:`\\/`;const n=e?`\\\\`:`/`;const s=`((?:[^/]*(?:/|$))*)`;const r=`([^/]*)`;const a=`((?:[^${n}]*(?:${n}|$))*)`;const o=`([^${n}]*)`;function globrex(t,{extended:e=false,globstar:n=false,strict:l=false,filepath:u=false,flags:c=""}={}){let d="";let h="";let f={regex:"",segments:[]};let p=false;let g=false;const m=[];function add(t,{split:e,last:n,only:s}={}){if(s!=="path")d+=t;if(u&&s!=="regex"){f.regex+=t==="\\/"?i:t;if(e){if(n)h+=t;if(h!==""){if(!c.includes("g"))h=`^${h}$`;f.segments.push(new RegExp(h,c))}h=""}else{h+=t}}}let y,b;for(let i=0;i<t.length;i++){y=t[i];b=t[i+1];if(["\\","$","^",".","="].includes(y)){add(`\\${y}`);continue}if(y==="/"){add(`\\${y}`,{split:true});if(b==="/"&&!l)d+="?";continue}if(y==="("){if(m.length){add(y);continue}add(`\\${y}`);continue}if(y===")"){if(m.length){add(y);let t=m.pop();if(t==="@"){add("{1}")}else if(t==="!"){add("([^/]*)")}else{add(t)}continue}add(`\\${y}`);continue}if(y==="|"){if(m.length){add(y);continue}add(`\\${y}`);continue}if(y==="+"){if(b==="("&&e){m.push(y);continue}add(`\\${y}`);continue}if(y==="@"&&e){if(b==="("){m.push(y);continue}}if(y==="!"){if(e){if(g){add("^");continue}if(b==="("){m.push(y);add("(?!");i++;continue}add(`\\${y}`);continue}add(`\\${y}`);continue}if(y==="?"){if(e){if(b==="("){m.push(y)}else{add(".")}continue}add(`\\${y}`);continue}if(y==="["){if(g&&b===":"){i++;let e="";while(t[++i]!==":")e+=t[i];if(e==="alnum")add("(\\w|\\d)");else if(e==="space")add("\\s");else if(e==="digit")add("\\d");i++;continue}if(e){g=true;add(y);continue}add(`\\${y}`);continue}if(y==="]"){if(e){g=false;add(y);continue}add(`\\${y}`);continue}if(y==="{"){if(e){p=true;add("(");continue}add(`\\${y}`);continue}if(y==="}"){if(e){p=false;add(")");continue}add(`\\${y}`);continue}if(y===","){if(p){add("|");continue}add(`\\${y}`);continue}if(y==="*"){if(b==="("&&e){m.push(y);continue}let l=t[i-1];let u=1;while(t[i+1]==="*"){u++;i++}let c=t[i+1];if(!n){add(".*")}else{let t=u>1&&(l==="/"||l===undefined)&&(c==="/"||c===undefined);if(t){add(s,{only:"regex"});add(a,{only:"path",last:true,split:true});i++}else{add(r,{only:"regex"});add(o,{only:"path"})}}continue}add(y)}if(!c.includes("g")){d=`^${d}$`;h=`^${h}$`;if(u)f.regex=`^${f.regex}$`}const _={regex:new RegExp(d,c)};if(u){f.segments.push(new RegExp(h,c));f.regex=new RegExp(f.regex,c);f.globstar=new RegExp(!c.includes("g")?`^${a}$`:a,c);_.path=f}return _}t.exports=globrex},990:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:true});class DataReporter{constructor(t,e,i){this.data=DataReporter.defaultReportData();this.getIncludedSection=(t=>Object.assign({Section:"Included"},t.included));this.getLayerSection=(t=>Object.assign({Section:"Layer"},t.layer));this.data=this.getData(t,e,i)}getDataObject(){return{_data:[this.getIncludedSection(this.data),this.getLayerSection(this.data)]}}getPercentIncluded(){return this.data.summary["percent included"]}getNumberOfExceedingFiles(){return this.data.summary["files exceeding max"]}getData(t,e,i){const n=DataReporter.defaultReportData();n.included=this.getMainReportData(t);n.layer=this.getMainReportData(e);n.summary=this.getComparativeData(t,e,i);return n}getMainReportData(t){const e=DataReporter.defaultMainReportData();e.total=t.length;e.files=new Set(t.map(t=>t.getFilePath())).size;e.average=e.total/e.files;return e}getComparativeData(t,e,i){const n=DataReporter.defaultComparativeData();n["percent included"]=100*e.length/t.length;n["files exceeding max"]=this.getFilesExceedingMax(t,i);return n}getFilesExceedingMax(t,e){return[...this.includedPathsSet(t)].map(e=>({path:e,count:t.filter(t=>t.getFilePath()===e).length})).filter(t=>t.count>e).length}includedPathsSet(t){return new Set(t.map(t=>t.getFilePath()))}static defaultReportData(){const t=DataReporter.defaultMainReportData();const e=DataReporter.defaultComparativeData();return{included:t,layer:t,summary:e}}}e.default=DataReporter;DataReporter.defaultMainReportData=(()=>({total:0,files:0,average:0}));DataReporter.defaultComparativeData=(()=>({"percent included":0,"files exceeding max":0}))}});