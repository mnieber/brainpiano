(this["webpackJsonpfrontend"] = this["webpackJsonpfrontend"] || []).push([[0],{

/***/ 112:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 113:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 119:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 120:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 121:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 136:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 137:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 176:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 177:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 189:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 190:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 193:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(0);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/react-dom/index.js
var react_dom = __webpack_require__(32);
var react_dom_default = /*#__PURE__*/__webpack_require__.n(react_dom);

// EXTERNAL MODULE: ./src/index.css
var src = __webpack_require__(112);

// EXTERNAL MODULE: ./node_modules/react-router/esm/react-router.js + 1 modules
var react_router = __webpack_require__(200);

// EXTERNAL MODULE: ./node_modules/mobx-react-lite/es/index.js + 17 modules
var es = __webpack_require__(6);

// EXTERNAL MODULE: ./node_modules/history/esm/history.js + 2 modules
var esm_history = __webpack_require__(38);

// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(19);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);

// EXTERNAL MODULE: ./src/quiz/components/QuizFrame.scss
var QuizFrame = __webpack_require__(113);

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(1);

// CONCATENATED MODULE: ./src/quiz/components/QuizFrame.tsx
var QuizFrame_QuizFrame=Object(es["a" /* observer */])(function(props){var appStore=useStore_useStore();react_default.a.useEffect(function(){function handleResize(){appStore.setWindowWidth(window.innerWidth);}window.addEventListener('resize',handleResize);});return/*#__PURE__*/Object(jsx_runtime["jsxs"])("div",{className:classnames_default()('QuizFrame flex flex-col px-2'),children:[/*#__PURE__*/Object(jsx_runtime["jsx"])(QuizFrameTopPanel_QuizFrameTopPanel,{}),/*#__PURE__*/Object(jsx_runtime["jsx"])("div",{className:classnames_default()('QuizFrame__MidSection flex flex-row justify-center'),children:props.children})]});});
// EXTERNAL MODULE: ./node_modules/react-default-props-context/index.js + 3 modules
var react_default_props_context = __webpack_require__(22);

// EXTERNAL MODULE: ./src/keyboard/components/Keyboard.css
var Keyboard = __webpack_require__(82);

// EXTERNAL MODULE: ./node_modules/lodash/fp.js
var fp = __webpack_require__(4);

// CONCATENATED MODULE: ./src/utils/mathMod.ts
var mathMod_mathMod=function mathMod(m,p){if(!Object(fp["isInteger"])(m)){return NaN;}if(!Object(fp["isInteger"])(p)||p<1){return NaN;}return(m%p+p)%p;};
// CONCATENATED MODULE: ./src/voicings/noteConstants.ts
var root=0;var flat9=1;var ninth=2;var sharp9=3;var flat3=3;var third=4;var fourth=5;var eleventh=5;var sharp4=6;var sharp11=6;var flat5=6;var fifth=7;var sharp5=8;var flat6=8;var flat13=8;var sixth=9;var thirteenth=9;var flat7=10;var seventh=11;var noteNameByValue={'0':'root','1':'flat nine','2':'nine','3':'flat third','4':'third','5':'fourth/eleventh','6':'tritone','7':'fifth','8':'flat thirteen','9':'thirteenth','10':'flat seven','11':'seven'};var valueByNoteName={root:0,'flat nine':1,flat9:1,two:2,second:2,nine:2,ninth:2,'flat third':3,flat3:3,three:4,third:4,four:5,fourth:5,eleven:5,eleventh:5,sharp4:6,flat5:6,sharp11:6,'sharp fourth':6,'sharp eleventh':6,five:7,fifth:7,'flat thirteen':8,flat6:8,flat13:8,six:9,sixth:9,thirteen:9,thirteenth:9,flat7:10,'flat seven':10,seven:11,seventh:11};
// EXTERNAL MODULE: ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(16);

// CONCATENATED MODULE: ./src/keyboard/keyConstants.ts
var _clefOffsets;var clefC='C';var clefCSharp='C#';var clefCFlat='Cb';var clefD='D';var clefDSharp='D#';var clefDFlat='Db';var clefE='E';var clefESharp='E#';var clefEFlat='Eb';var clefF='F';var clefFSharp='F#';var clefFFlat='Fb';var clefG='G';var clefGSharp='G#';var clefGFlat='Gb';var clefA='A';var clefASharp='A#';var clefAFlat='Ab';var clefB='B';var clefBSharp='B#';var clefBFlat='Bb';var keyConstants_clefs=['C','C#','D','Eb','E','F','F#','G','Ab','A','Bb','B'];var clefOffsets=(_clefOffsets={},Object(defineProperty["a" /* default */])(_clefOffsets,clefCFlat,11),Object(defineProperty["a" /* default */])(_clefOffsets,clefC,0),Object(defineProperty["a" /* default */])(_clefOffsets,clefCSharp,1),Object(defineProperty["a" /* default */])(_clefOffsets,clefDFlat,1),Object(defineProperty["a" /* default */])(_clefOffsets,clefD,2),Object(defineProperty["a" /* default */])(_clefOffsets,clefDSharp,3),Object(defineProperty["a" /* default */])(_clefOffsets,clefEFlat,3),Object(defineProperty["a" /* default */])(_clefOffsets,clefE,4),Object(defineProperty["a" /* default */])(_clefOffsets,clefESharp,5),Object(defineProperty["a" /* default */])(_clefOffsets,clefFFlat,4),Object(defineProperty["a" /* default */])(_clefOffsets,clefF,5),Object(defineProperty["a" /* default */])(_clefOffsets,clefFSharp,6),Object(defineProperty["a" /* default */])(_clefOffsets,clefGFlat,6),Object(defineProperty["a" /* default */])(_clefOffsets,clefG,7),Object(defineProperty["a" /* default */])(_clefOffsets,clefGSharp,8),Object(defineProperty["a" /* default */])(_clefOffsets,clefAFlat,8),Object(defineProperty["a" /* default */])(_clefOffsets,clefA,9),Object(defineProperty["a" /* default */])(_clefOffsets,clefASharp,10),Object(defineProperty["a" /* default */])(_clefOffsets,clefBFlat,10),Object(defineProperty["a" /* default */])(_clefOffsets,clefB,11),Object(defineProperty["a" /* default */])(_clefOffsets,clefBSharp,0),_clefOffsets);var clefLetters=[clefC,clefD,clefE,clefF,clefG,clefA,clefB];var whiteKeyIndexes=[0,2,4,5,7,9,11];var blackKeyIndexes=[1,3,6,8,10];var keyConstants_isWhiteKeyIndex=function isWhiteKeyIndex(keyIndex){return Object(fp["includes"])(keyIndex,whiteKeyIndexes);};var nrOfNotesInOctave=12;var octaveRootNoteValue=function octaveRootNoteValue(octaveIndex){return octaveIndex*nrOfNotesInOctave;};var keyConstants_noteValueToIndex=function noteValueToIndex(noteValue){return mathMod_mathMod(noteValue,nrOfNotesInOctave);};
// CONCATENATED MODULE: ./src/quiz/utils/voicingTitleFromQuery.ts
var voicingTitleFromQuery_voicingTitleFromQuery=function voicingTitleFromQuery(query){var noteIndex=mathMod_mathMod(query.inversion,query.voicing.chord.length);var startNoteIdx=keyConstants_noteValueToIndex(query.voicing.chord[noteIndex]);var startNoteName=noteNameByValue[startNoteIdx];return"".concat(query.clef," ").concat(query.voicing.name," from ")+"".concat(startNoteName);};
// EXTERNAL MODULE: ./src/voicings/components/VoicingTitle.scss
var VoicingTitle = __webpack_require__(119);

// CONCATENATED MODULE: ./src/voicings/components/VoicingTitle.tsx
var VoicingTitle_VoicingTitle=Object(es["a" /* observer */])(function(props){var _props$label;return/*#__PURE__*/Object(jsx_runtime["jsx"])("div",{className:"VoicingTitle",children:((_props$label=props.label)!==null&&_props$label!==void 0?_props$label:'')+(props.query?voicingTitleFromQuery_voicingTitleFromQuery(props.query):'')});});
// EXTERNAL MODULE: ./src/groups/components/GroupsFrame.scss
var GroupsFrame = __webpack_require__(120);

// CONCATENATED MODULE: ./src/groups/components/GroupsFrame.tsx
var GroupsFrame_GroupsFrame=Object(es["a" /* observer */])(function(props){return/*#__PURE__*/Object(jsx_runtime["jsxs"])("div",{className:classnames_default()('GroupsFrame flex flex-col'),children:[/*#__PURE__*/Object(jsx_runtime["jsx"])(GroupsFrameTopPanel_GroupsFrameTopPanel,{}),/*#__PURE__*/Object(jsx_runtime["jsxs"])("div",{className:classnames_default()('GroupsFrame__MidSection flex flex-row'),children:[/*#__PURE__*/Object(jsx_runtime["jsx"])(GroupsFrameLeftPanel_GroupsFrameLeftPanel,{}),props.children]})]});});
// EXTERNAL MODULE: ./src/groups/components/GroupsFrameTopPanel.scss
var GroupsFrameTopPanel = __webpack_require__(121);

// CONCATENATED MODULE: ./src/groups/components/GroupsFrameTopPanel.tsx
var GroupsFrameTopPanel_GroupsFrameTopPanel=Object(es["a" /* observer */])(function(){return/*#__PURE__*/Object(jsx_runtime["jsx"])("div",{className:classnames_default()('GroupsFrameTopPanel')});});
// EXTERNAL MODULE: ./node_modules/mobx/dist/mobx.esm.js
var mobx_esm = __webpack_require__(3);

// EXTERNAL MODULE: ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__(42);

// EXTERNAL MODULE: ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js + 1 modules
var objectWithoutProperties = __webpack_require__(107);

// EXTERNAL MODULE: ./node_modules/react-select/dist/react-select.browser.esm.js
var react_select_browser_esm = __webpack_require__(101);

// EXTERNAL MODULE: ./node_modules/react-select/creatable/dist/react-select.browser.esm.js
var dist_react_select_browser_esm = __webpack_require__(100);

// CONCATENATED MODULE: ./src/utils/components/ValuePicker.tsx
var ValuePicker=Object(es["a" /* observer */])(function(props){var isMulti=props.isMulti,isCreatable=props.isCreatable,pickableValue=props.pickableValue,pickableValues=props.pickableValues,labelFromValue=props.labelFromValue,others=Object(objectWithoutProperties["a" /* default */])(props,["isMulti","isCreatable","pickableValue","pickableValues","labelFromValue"]);var toPickerValue=function toPickerValue(pickableVal){return pickableVal.__isNew__?pickableVal:{value:pickableVal,label:labelFromValue(pickableVal)};};var options=pickableValues.map(toPickerValue);var pickerProps=Object(objectSpread2["a" /* default */])({isMulti:isMulti,options:options,value:Object(fp["isNil"])(pickableValue)?undefined:isMulti?pickableValue.map(toPickerValue):toPickerValue(pickableValue),onKeyDown:function onKeyDown(e){if(others.onKeyDown){others.onKeyDown(e);}}},others);var picker=isCreatable?/*#__PURE__*/Object(jsx_runtime["jsx"])(dist_react_select_browser_esm["a" /* default */],Object(objectSpread2["a" /* default */])({},pickerProps)):/*#__PURE__*/Object(jsx_runtime["jsx"])(react_select_browser_esm["a" /* default */],Object(objectSpread2["a" /* default */])({},pickerProps));return/*#__PURE__*/Object(jsx_runtime["jsx"])("div",{style:{zIndex:others.zIndex},children:picker});});
// EXTERNAL MODULE: ./src/groups/components/GroupPicker.scss
var GroupPicker = __webpack_require__(136);

// CONCATENATED MODULE: ./src/groups/components/GroupPicker.tsx
var GroupPicker_GroupPicker=Object(es["a" /* observer */])(function(p){var props=Object(react_default_props_context["b" /* useDefaultProps */])(p);var onChange=Object(mobx_esm["b" /* action */])(function(value){var _ref;var values=(_ref=value)!==null&&_ref!==void 0?_ref:[];props.groupsSelection.ids=values.map(function(x){return x.value.id;});});return/*#__PURE__*/Object(jsx_runtime["jsx"])("div",{className:classnames_default()('GroupPicker',props.className),children:/*#__PURE__*/Object(jsx_runtime["jsx"])(ValuePicker,{isMulti:true,isCreatable:false,pickableValues:props.groups,labelFromValue:function labelFromValue(x){return x.name;},pickableValue:props.groupsSelection.items,onChange:onChange})});});
// EXTERNAL MODULE: ./src/groups/components/GroupsFrameLeftPanel.scss
var GroupsFrameLeftPanel = __webpack_require__(137);

// CONCATENATED MODULE: ./src/groups/components/GroupsFrameLeftPanel.tsx
var GroupsFrameLeftPanel_GroupsFrameLeftPanel=Object(es["a" /* observer */])(function(){return/*#__PURE__*/Object(jsx_runtime["jsx"])("div",{className:classnames_default()('GroupsFrameLeftPanel')});});
// EXTERNAL MODULE: ./node_modules/use-deep-compare-effect/dist/use-deep-compare-effect.esm.js + 1 modules
var use_deep_compare_effect_esm = __webpack_require__(108);

// CONCATENATED MODULE: ./src/utils/components/Effect.tsx
var EffectWithoutArgs=Object(es["a" /* observer */])(function(_ref){var f=_ref.f;Object(use_deep_compare_effect_esm["a" /* default */])(function(){var cleanUpFunction=f();return cleanUpFunction;},[f]);return/*#__PURE__*/Object(jsx_runtime["jsx"])(react_default.a.Fragment,{});});
// CONCATENATED MODULE: ./src/utils/RST.ts
var RESET="RESET";var UPDATING="UPDATING";var ERRORED="ERRORED";var UPDATED="UPDATED";var LOADING="LOADING";var resetRS=function resetRS(){return{type:RESET};};var isResetRS=function isResetRS(rs){return rs.type===RESET;};var updatingRS=function updatingRS(updating_state){return{type:UPDATING,updating_state:updating_state};};var isUpdatingRS=function isUpdatingRS(rs){return rs.type===UPDATING;};var erroredRS=function erroredRS(message){return{type:ERRORED,message:message};};var isErroredRS=function isErroredRS(rs){return rs.type===ERRORED;};var updatedRS=function updatedRS(){return{type:UPDATED};};var isUpdatedRS=function isUpdatedRS(rs){return rs.type===UPDATED;};var loadingRS=function loadingRS(){return updatingRS({type:LOADING});};var updateRes=Object(mobx_esm["b" /* action */])(function(rsMap,id,update,then,getErrorMsg){rsMap[id]=loadingRS();return update().then(Object(mobx_esm["b" /* action */])(function(result){then(result);rsMap[id]=updatedRS();})).catch(Object(mobx_esm["b" /* action */])(function(e){rsMap[id]=erroredRS(getErrorMsg?getErrorMsg(e):"Could not load ".concat(id));}));});
// CONCATENATED MODULE: ./src/utils/components/ResourceView.tsx
// TODO better default renders
var ResourceView_defaultRenderErrored=function defaultRenderErrored(message){return/*#__PURE__*/Object(jsx_runtime["jsxs"])("div",{children:["Error",message!==undefined&&": ".concat(message)]});};var ResourceView_defaultRenderUpdating=function defaultRenderUpdating(){return/*#__PURE__*/Object(jsx_runtime["jsx"])("div",{children:"Loading..."});};var ResourceView=Object(es["a" /* observer */])(function(props){var _props$renderErrored,_props$renderUpdating;var renderErrored=(_props$renderErrored=props.renderErrored)!==null&&_props$renderErrored!==void 0?_props$renderErrored:ResourceView_defaultRenderErrored;var renderUpdating=(_props$renderUpdating=props.renderUpdating)!==null&&_props$renderUpdating!==void 0?_props$renderUpdating:ResourceView_defaultRenderUpdating;var tryRenderUpdated=function tryRenderUpdated(){try{var result=props.renderUpdated();return result;}catch(e){return renderErrored(e.message);}};var catchAll=function catchAll(){throw Error("Received unrecognized resource state ".concat(props.rs));};var renderReset=function renderReset(){return/*#__PURE__*/Object(jsx_runtime["jsx"])(react_default.a.Fragment,{});};return isUpdatedRS(props.rs)?tryRenderUpdated():isErroredRS(props.rs)?renderErrored(props.rs.message):isUpdatingRS(props.rs)?renderUpdating(props.rs.updating_state):isResetRS(props.rs)?renderReset():catchAll();});
// CONCATENATED MODULE: ./src/utils/components/index.ts

// CONCATENATED MODULE: ./src/groups/components/LoadGroupsEffect.tsx
var LoadGroupsEffect_LoadGroupsEffect=function LoadGroupsEffect(p){var _useStore=useStore_useStore(),groupsStore=_useStore.groupsStore;return/*#__PURE__*/Object(jsx_runtime["jsx"])(EffectWithoutArgs,{f:function f(){groupsStore.loadGroups();}});};
// CONCATENATED MODULE: ./src/groups/components/SelectGroupEffect.tsx
var SelectGroupEffect_SelectGroupEffect=function SelectGroupEffect(p){return/*#__PURE__*/Object(jsx_runtime["jsx"])(EffectWithoutArgs,{f:function f(){}});};
// CONCATENATED MODULE: ./src/groups/components/index.ts

// EXTERNAL MODULE: ./node_modules/react-konva/es/ReactKonva.js + 3 modules
var ReactKonva = __webpack_require__(40);

// EXTERNAL MODULE: ./node_modules/react-keyboard-event-handler/lib/react-keyboard-event-handler.js
var react_keyboard_event_handler = __webpack_require__(33);
var react_keyboard_event_handler_default = /*#__PURE__*/__webpack_require__.n(react_keyboard_event_handler);

// CONCATENATED MODULE: ./src/keyboard/components/ClefModulationSelector.tsx
var ClefModulationSelector=Object(es["a" /* observer */])(function(_ref){var children=_ref.children;var _useStore=useStore_useStore(),preselectionStore=_useStore.preselectionStore;return/*#__PURE__*/Object(jsx_runtime["jsx"])(react_keyboard_event_handler_default.a,{handleKeys:['up','down'],handleEventType:"keydown",onKeyEvent:function onKeyEvent(key,e){preselectionStore.setIsSharpening(key==='up');preselectionStore.setIsFlattening(key==='down');},children:/*#__PURE__*/Object(jsx_runtime["jsx"])(react_keyboard_event_handler_default.a,{handleKeys:['up','down'],handleEventType:"keyup",onKeyEvent:function onKeyEvent(key,e){preselectionStore.reset();},children:children})});});
// CONCATENATED MODULE: ./src/keyboard/components/ClefSelector.tsx
var ClefSelector=Object(es["a" /* observer */])(function(_ref){var children=_ref.children;var _useStore=useStore_useStore(),preselectionStore=_useStore.preselectionStore;return/*#__PURE__*/Object(jsx_runtime["jsx"])(react_keyboard_event_handler_default.a,{handleKeys:clefLetters,handleEventType:"keydown",onKeyEvent:function onKeyEvent(key,e){preselectionStore.setClefLetter(key);},children:/*#__PURE__*/Object(jsx_runtime["jsx"])(react_keyboard_event_handler_default.a,{handleKeys:clefLetters,handleEventType:"keyup",onKeyEvent:function onKeyEvent(key,e){preselectionStore.reset();},children:children})});});
// CONCATENATED MODULE: ./src/keyboard/components/Marker.tsx
var Marker=Object(es["a" /* observer */])(function(props){var filledStripeHeight=5;var bgStripeHeight=3.5;var nrOfStripes=Math.ceil(props.height/(filledStripeHeight+bgStripeHeight));return props.isStriped?Object(fp["flow"])(Object(fp["always"])(Object(fp["range"])(0,nrOfStripes)),Object(fp["map"])(function(stripeIdx){var y=stripeIdx*(filledStripeHeight+bgStripeHeight);var height=Math.min(filledStripeHeight,props.height-y);return/*#__PURE__*/Object(jsx_runtime["jsx"])(ReactKonva["b" /* Rect */],{x:props.offsetX+1,y:props.offsetY+y,fill:props.fill,width:props.width-2,height:height,strokeWidth:0,opacity:1},stripeIdx);}))():[/*#__PURE__*/Object(jsx_runtime["jsx"])(ReactKonva["b" /* Rect */],{x:props.offsetX+1,y:props.offsetY,fill:props.fill,width:props.width-2,height:props.height,strokeWidth:0,opacity:1},0)];});
// CONCATENATED MODULE: ./src/keyboard/components/Key.tsx
var whiteKeyProps={width:50,height:250,fill:'#FFFFFF',markerHeight:56};var blackKeyProps={width:25,height:160,fill:'#444444',markerHeight:100};var whiteKeyX=Object(fp["flow"])(Object(fp["always"])(Object(fp["range"])(0,7)),Object(fp["map"])(function(i){return i*whiteKeyProps.width;}))();var fraction=function fraction(x){return x*blackKeyProps.width;};var blackKeyX=[whiteKeyX[1]-fraction(0.66),whiteKeyX[2]-fraction(0.33),whiteKeyX[4]-fraction(0.7),whiteKeyX[5]-fraction(0.5),whiteKeyX[6]-fraction(0.3)];var Key_getKeyX=function getKeyX(keyIndex){var isWhiteKey=keyConstants_isWhiteKeyIndex(keyIndex);var keyX=isWhiteKey?whiteKeyX:blackKeyX;var keyIndexes=isWhiteKey?whiteKeyIndexes:blackKeyIndexes;return keyX[Object(fp["indexOf"])(keyIndex,keyIndexes)];};var Key=Object(es["a" /* observer */])(function(props){var isWhiteKey=keyConstants_isWhiteKeyIndex(props.index);var keyProps=isWhiteKey?whiteKeyProps:blackKeyProps;var offsetY=0;var markerOffsetY=isWhiteKey?3:2;var offsetX=props.octaveIndex*7*whiteKeyProps.width;var x=offsetX+Key_getKeyX(props.index);return/*#__PURE__*/Object(jsx_runtime["jsxs"])(react_default.a.Fragment,{children:[/*#__PURE__*/Object(jsx_runtime["jsx"])(ReactKonva["b" /* Rect */],{x:x*props.scaleFactor,y:offsetY*props.scaleFactor,fill:keyProps.fill,stroke:"#000000",opacity:1,width:keyProps.width*props.scaleFactor,height:keyProps.height*props.scaleFactor}),/*#__PURE__*/Object(jsx_runtime["jsx"])(Marker,{offsetX:(x+2)*props.scaleFactor,offsetY:(offsetY+keyProps.height-keyProps.markerHeight-markerOffsetY)*props.scaleFactor,height:keyProps.markerHeight*props.scaleFactor,width:(keyProps.width-4)*props.scaleFactor,fill:props.markerColour,isStriped:props.markerIsStriped,backgroundColour:keyProps.fill})]});});
// CONCATENATED MODULE: ./src/keyboard/noteColours.ts
var noteColours={0:'#aaaaaa',1:'#fa9835-striped',2:'#fa9835',// orange
3:'#40d530-striped',4:'#40d530',// green
5:'#fee449',// yellow
6:'#f53311-striped',7:'#f53311',// red
8:'#38baf2-striped',9:'#38baf2',// blue
10:'#ff99ff-striped',11:'#ff99ff'// violet
};
// CONCATENATED MODULE: ./src/keyboard/utils/noteValueToColour.ts
function noteValueToColour(noteValue,clef,chord){var harmonicColour=Object(fp["includes"])(noteValue,chord)?noteColours[keyConstants_noteValueToIndex(noteValue-clefOffsets[clef])]:undefined;var isStriped=!!(harmonicColour&&harmonicColour.endsWith('-striped'));var colour=isStriped?Object(fp["split"])('-striped',harmonicColour)[0]:harmonicColour;return{colour:colour,isStriped:isStriped};}
// CONCATENATED MODULE: ./src/keyboard/components/Octave.tsx
var Octave=Object(es["a" /* observer */])(function(props){var keyIndexes=Object(fp["concat"])(whiteKeyIndexes,blackKeyIndexes);var keys=Object(fp["flow"])(Object(fp["always"])(keyIndexes),Object(fp["map"])(Object(fp["add"])(octaveRootNoteValue(props.index))),Object(fp["map"])(function(noteValue){var keyIndex=keyConstants_noteValueToIndex(noteValue);var _noteValueToColour=noteValueToColour(noteValue,props.clef,props.chord),colour=_noteValueToColour.colour,isStriped=_noteValueToColour.isStriped;return/*#__PURE__*/Object(jsx_runtime["jsx"])(Key,{index:keyIndex,octaveIndex:props.index,markerColour:colour,markerIsStriped:isStriped,scaleFactor:props.scaleFactor},noteValue);}))();return/*#__PURE__*/Object(jsx_runtime["jsx"])(ReactKonva["a" /* Layer */],{children:keys});});
// EXTERNAL MODULE: ./node_modules/audiosynth/index.js
var audiosynth = __webpack_require__(103);
var audiosynth_default = /*#__PURE__*/__webpack_require__.n(audiosynth);

// CONCATENATED MODULE: ./src/voicings/utils/playChord.ts
var AudioContext=window.AudioContext||window.webkitAudioContext;var context=new AudioContext();var synth=new audiosynth_default.a(context);var playChord_playChord=function playChord(chord,clef){Object(fp["forEach"])(function(note){return synth.playNote(note+48,1.0,1.0,0);},chord);synth.playNote(clefOffsets[clef]+36,1.0,1.0,0);};
// CONCATENATED MODULE: ./src/voicings/components/InversionSelector.tsx
var InversionSelector=Object(es["a" /* observer */])(function(p){var props=Object(react_default_props_context["b" /* useDefaultProps */])(p);var _useStore=useStore_useStore(),voicingStore=_useStore.voicingStore;return/*#__PURE__*/Object(jsx_runtime["jsx"])(react_keyboard_event_handler_default.a,{handleKeys:['ctrl+left','ctrl+right'],onKeyEvent:function onKeyEvent(key,e){if(key==='ctrl+right'){voicingStore.setInversion(voicingStore.inversion+1);if(props.quizState.query){props.quizState.query.inversion=voicingStore.inversion;}}if(key==='ctrl+left'){voicingStore.setInversion(voicingStore.inversion-1);if(props.quizState.query){props.quizState.query.inversion=voicingStore.inversion;}}},children:/*#__PURE__*/Object(jsx_runtime["jsx"])(react_keyboard_event_handler_default.a,{handleKeys:['p'],onKeyEvent:function onKeyEvent(key,e){playChord_playChord(voicingStore.chord,voicingStore.clef);},children:props.children})});});
// CONCATENATED MODULE: ./src/voicings/components/RandomChordSelector.tsx
var RandomChordSelector=Object(es["a" /* observer */])(function(p){var props=Object(react_default_props_context["b" /* useDefaultProps */])(p);return/*#__PURE__*/Object(jsx_runtime["jsx"])(react_keyboard_event_handler_default.a,{handleKeys:['space','enter'],onKeyEvent:function onKeyEvent(key,e){props.quizState.pickRandomChord();},children:props.children});});
// CONCATENATED MODULE: ./src/keyboard/components/Keyboard.tsx
var Keyboard_Keyboard=Object(es["a" /* observer */])(function(p){var props=Object(react_default_props_context["b" /* useDefaultProps */])(p);var _useStore=useStore_useStore(),voicingStore=_useStore.voicingStore,clefStore=_useStore.clefStore,scaleFactor=_useStore.scaleFactor;var octaves=Object(fp["flow"])(Object(fp["always"])(Object(fp["range"])(0,4)),Object(fp["map"])(function(i){return/*#__PURE__*/Object(jsx_runtime["jsx"])(Octave,{index:i,clef:clefStore.clef,chord:voicingStore.chord,scaleFactor:scaleFactor},i);}))();return/*#__PURE__*/Object(jsx_runtime["jsx"])("div",{className:"Keyboard__frame",onClick:props.onClick,children:/*#__PURE__*/Object(jsx_runtime["jsx"])(RandomChordSelector,{children:/*#__PURE__*/Object(jsx_runtime["jsx"])(ClefSelector,{children:/*#__PURE__*/Object(jsx_runtime["jsx"])(ClefModulationSelector,{children:/*#__PURE__*/Object(jsx_runtime["jsx"])(InversionSelector,{children:/*#__PURE__*/Object(jsx_runtime["jsx"])("div",{tabIndex:0,children:/*#__PURE__*/Object(jsx_runtime["jsx"])(ReactKonva["c" /* Stage */],{width:1400*scaleFactor,height:250*scaleFactor,children:octaves})})})})})})});});
// EXTERNAL MODULE: ./src/keyboard/components/ClefListView.scss
var ClefListView = __webpack_require__(176);

// CONCATENATED MODULE: ./src/keyboard/components/ClefListView.tsx
var ClefListView_ClefListView=Object(es["a" /* observer */])(function(p){var props=Object(react_default_props_context["b" /* useDefaultProps */])(p);var clefDivs=Object(fp["flow"])(Object(fp["always"])(props.clefs),Object(fp["map"])(function(x){return/*#__PURE__*/Object(jsx_runtime["jsx"])(ClefListViewItem_ClefListViewItem,{clef:x,className:classnames_default()({'ClefListViewItem--selected':props.clefsSelection.ids.includes(x)}),onMouseDown:function onMouseDown(e){props.clefsSelection.selectItem({itemId:x,isShift:false,isCtrl:true});}},x);}))();var noItems=/*#__PURE__*/Object(jsx_runtime["jsx"])("h2",{children:"There are no clefs"});return/*#__PURE__*/Object(jsx_runtime["jsxs"])("div",{className:classnames_default()('ClefListView flex flex-row w-full',props.className),children:[clefDivs.length&&clefDivs,!clefDivs.length&&noItems]});});
// EXTERNAL MODULE: ./src/keyboard/components/ClefListViewItem.scss
var ClefListViewItem = __webpack_require__(177);

// CONCATENATED MODULE: ./src/keyboard/components/ClefListViewItem.tsx
var ClefListViewItem_ClefListViewItem=Object(es["a" /* observer */])(function(props){return/*#__PURE__*/Object(jsx_runtime["jsx"])("div",{className:classnames_default()('ClefListViewItem flex-1',props.className),onMouseDown:props.onMouseDown,children:props.clef});});
// CONCATENATED MODULE: ./src/keyboard/components/index.ts

// EXTERNAL MODULE: ./node_modules/@trendmicro/react-dropdown/lib/index.js
var lib = __webpack_require__(43);
var lib_default = /*#__PURE__*/__webpack_require__.n(lib);

// CONCATENATED MODULE: ./src/voicings/parse.ts
var parse_parseVoicing=function parseVoicing(data){var voicing=Object(objectSpread2["a" /* default */])(Object(objectSpread2["a" /* default */])({},data),{},{id:data.name,chord:Object(fp["map"])(function(x){var noteValue=valueByNoteName[x];if(noteValue===undefined){console.log("Error: unknown note ".concat(x));}return noteValue;},data['chord'])});for(var i=1;i<voicing.chord.length;++i){while(voicing.chord[i]<=voicing.chord[i-1]){voicing.chord[i]+=12;}}return voicing;};var parse_parseVoicingGroup=function parseVoicingGroup(data){return Object(objectSpread2["a" /* default */])(Object(objectSpread2["a" /* default */])({},data),{},{id:data.name,voicings:Object(fp["map"])(parse_parseVoicing,data['voicings'])});};var cache={data:null};var parse_parseVoicingGroups=function parseVoicingGroups(data){cache.data=data;return Object(fp["map"])(parse_parseVoicingGroup,data);};
// EXTERNAL MODULE: ./node_modules/@trendmicro/react-buttons/dist/react-buttons.css
var react_buttons = __webpack_require__(187);

// EXTERNAL MODULE: ./node_modules/@trendmicro/react-dropdown/dist/react-dropdown.css
var react_dropdown = __webpack_require__(188);

// EXTERNAL MODULE: ./src/io/components/IoMenu.scss
var IoMenu = __webpack_require__(189);

// CONCATENATED MODULE: ./src/io/components/IoMenu.tsx
var twitterUrl="https://twitter.com/intent/tweet?url=https://mnieber.github.io/brainpiano&hashtags=BrainPiano";var IoMenu_IoMenu=Object(es["a" /* observer */])(function(p){var props=Object(react_default_props_context["b" /* useDefaultProps */])(p);return/*#__PURE__*/Object(jsx_runtime["jsxs"])(lib_default.a,{onSelect:function onSelect(eventKey){if(eventKey===1){navigator.clipboard.writeText(JSON.stringify(cache.data,null,2));}if(eventKey===2){window.open(twitterUrl);}if(eventKey===3){navigator.clipboard.readText().then(function(clipText){debugger;props.quizState.setGroups(parse_parseVoicingGroups(JSON.parse(clipText)));});}},autoOpen:true,pullRight:true,children:[/*#__PURE__*/Object(jsx_runtime["jsx"])(lib_default.a.Toggle,{btnSize:"lg",btnStyle:"flat",children:"IO"}),/*#__PURE__*/Object(jsx_runtime["jsxs"])(lib_default.a.Menu,{children:[/*#__PURE__*/Object(jsx_runtime["jsx"])(lib["MenuItem"],{eventKey:1,children:"Export"}),/*#__PURE__*/Object(jsx_runtime["jsx"])(lib["MenuItem"],{divider:true}),/*#__PURE__*/Object(jsx_runtime["jsx"])(lib["MenuItem"],{eventKey:2,children:"Tweet"}),/*#__PURE__*/Object(jsx_runtime["jsx"])(lib["MenuItem"],{divider:true}),/*#__PURE__*/Object(jsx_runtime["jsx"])(lib["MenuItem"],{eventKey:3,children:"Import"})]})]});});
// CONCATENATED MODULE: ./src/io/components/index.ts

// EXTERNAL MODULE: ./src/quiz/components/QuizFrameTopPanel.scss
var QuizFrameTopPanel = __webpack_require__(190);

// CONCATENATED MODULE: ./src/quiz/components/QuizFrameTopPanel.tsx
var QuizFrameTopPanel_QuizFrameTopPanel=Object(es["a" /* observer */])(function(p){var props=Object(react_default_props_context["b" /* useDefaultProps */])(p);var HelpButton=/*#__PURE__*/Object(jsx_runtime["jsx"])("button",{onClick:function onClick(){return window.open('https://github.com/mnieber/brainpiano#brainpiano');},children:"Help"});return/*#__PURE__*/Object(jsx_runtime["jsxs"])("div",{className:classnames_default()('QuizFrameTopPanel mb-4'),children:[/*#__PURE__*/Object(jsx_runtime["jsxs"])("div",{className:"QuizFrameTopPanel__firstRow mb4 flex flex-row justify-between",children:[/*#__PURE__*/Object(jsx_runtime["jsx"])(VoicingTitle_VoicingTitle,{query:props.quizState.query}),HelpButton,/*#__PURE__*/Object(jsx_runtime["jsx"])(VoicingTitle_VoicingTitle,{label:props.quizState.nextQuery?'Next: ':'Welcome to BrainPiano!',query:props.quizState.nextQuery})]}),/*#__PURE__*/Object(jsx_runtime["jsx"])(GroupPicker_GroupPicker,{className:"flex-1"}),/*#__PURE__*/Object(jsx_runtime["jsxs"])("div",{className:"flex flex-row justify-between mt-2",children:[/*#__PURE__*/Object(jsx_runtime["jsx"])(ClefListView_ClefListView,{}),/*#__PURE__*/Object(jsx_runtime["jsx"])(IoMenu_IoMenu,{})]})]});});
// CONCATENATED MODULE: ./src/quiz/components/QuizView.tsx
var QuizView=Object(es["a" /* observer */])(function(p){var props=Object(react_default_props_context["b" /* useDefaultProps */])(p);var onClick=react_default.a.useMemo(function(){return function(){return props.quizState.pickRandomChord();};},[props.quizState]);return/*#__PURE__*/Object(jsx_runtime["jsx"])(QuizFrame_QuizFrame,{children:/*#__PURE__*/Object(jsx_runtime["jsx"])(Keyboard_Keyboard,{onClick:onClick})});});
// EXTERNAL MODULE: ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/initializerDefineProperty.js
var initializerDefineProperty = __webpack_require__(30);

// EXTERNAL MODULE: ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__(13);

// EXTERNAL MODULE: ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__(15);

// EXTERNAL MODULE: ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/applyDecoratedDescriptor.js
var applyDecoratedDescriptor = __webpack_require__(23);

// EXTERNAL MODULE: ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/initializerWarningHelper.js
var initializerWarningHelper = __webpack_require__(65);

// EXTERNAL MODULE: ./node_modules/aspiration/index.js + 2 modules
var aspiration = __webpack_require__(14);

// EXTERNAL MODULE: ./node_modules/skandha/index.js + 10 modules
var skandha = __webpack_require__(2);

// EXTERNAL MODULE: ./node_modules/skandha-mobx/index.js + 3 modules
var skandha_mobx = __webpack_require__(80);

// CONCATENATED MODULE: ./src/utils/ids.ts
function listToItemById(qsList){var key=arguments.length>1&&arguments[1]!==undefined?arguments[1]:'id';var result={};qsList.forEach(function(item){result[item[key]]=item;});return result;}function getIds(x){return x.map(function(x){return x.id;});}
// EXTERNAL MODULE: ./node_modules/skandha-facets/index.js
var skandha_facets = __webpack_require__(59);

// CONCATENATED MODULE: ./src/quiz/QuizState/policies/selectClefBasedOnPreselection.ts
var selectClefBasedOnPreselection=function selectClefBasedOnPreselection(){return function(quizState){var handler=function handler(event){if(quizState.query&&event.topic==='PreselectionStore.selectClef'){quizState.query.clef=event.details.clefLetter+(event.details.isSharpening?'#':event.details.isFlattening?'b':'');quizState.props.clefStore.setClef(quizState.query.clef);}};quizState.props.preselectionStore.signal.add(handler);return function(){return quizState.props.preselectionStore.signal.remove(handler);};};};
// CONCATENATED MODULE: ./src/quiz/QuizState/policies/index.ts

// EXTERNAL MODULE: ./node_modules/skandha-facets/policies/index.js + 15 modules
var skandha_facets_policies = __webpack_require__(79);

// EXTERNAL MODULE: ./node_modules/skandha-facets/Selection.js
var Selection = __webpack_require__(35);

// EXTERNAL MODULE: ./node_modules/skandha-facets/Highlight.js
var Highlight = __webpack_require__(27);

// EXTERNAL MODULE: ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 3 modules
var slicedToArray = __webpack_require__(106);

// CONCATENATED MODULE: ./src/utils/random.ts
var random_randomElement=function randomElement(items){return items[Math.floor(Math.random()*Object(fp["size"])(items))];};
// EXTERNAL MODULE: ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js + 3 modules
var toConsumableArray = __webpack_require__(41);

// CONCATENATED MODULE: ./src/voicings/utils/invertChord.ts
var invertChord_invertChord=function invertChord(chord,pos){function rotate(arr){var maxNote=arr[arr.length-1];var first=Object(fp["take"])(1,arr);var last=Object(fp["takeRight"])(Object(fp["size"])(arr)-1,arr);while(first[0]<=maxNote){first[0]+=12;}return Object(fp["concat"])(last,first);}function rotateBack(arr){var minNote=arr[0];var last=Object(fp["takeRight"])(1,arr);var first=Object(fp["take"])(Object(fp["size"])(arr)-1,arr);while(last[0]>=minNote){last[0]-=12;}return Object(fp["concat"])(last,first);}var result=pos===0?chord:pos>0?fp["flow"].apply(void 0,[Object(fp["always"])(chord)].concat(Object(toConsumableArray["a" /* default */])(Object(fp["times"])(Object(fp["constant"])(rotate),pos))))():fp["flow"].apply(void 0,[Object(fp["always"])(chord)].concat(Object(toConsumableArray["a" /* default */])(Object(fp["times"])(Object(fp["constant"])(rotateBack),Math.abs(pos)))))();return result;};var getInversionRange=function getInversionRange(chord){var topC=48;var minInversion=0;var maxInversion=0;var l=chord.length;while(invertChord_invertChord(chord,maxInversion+1)[l-1]<topC){maxInversion+=1;}while(invertChord_invertChord(chord,minInversion-1)[0]>=0){minInversion-=1;}return[minInversion,maxInversion];};
// CONCATENATED MODULE: ./src/voicings/utils/voicingToChord.ts
var voicingToChord_voicingToChord=function voicingToChord(voicing,clef,octaveIndex){var rootNoteValue=octaveRootNoteValue(octaveIndex);var keyOffset=clefOffsets[clef];var result=Object(fp["flow"])(//
Object(fp["always"])(voicing.chord),Object(fp["map"])(Object(fp["add"])(rootNoteValue+keyOffset)))();return result;};
// CONCATENATED MODULE: ./src/quiz/utils/createQuery.ts
var createQuery_getRandomInversion=function getRandomInversion(voicing,clef){var L=voicing.chord.length;var _getInversionRange=getInversionRange(voicingToChord_voicingToChord(voicing,clef,1)),_getInversionRange2=Object(slicedToArray["a" /* default */])(_getInversionRange,2),minInversion=_getInversionRange2[0],maxInversion=_getInversionRange2[1];var inversionRange=Object(fp["range"])(minInversion,maxInversion+1).filter(function(x){return!voicing.inversions||voicing.inversions[mathMod_mathMod(x,L)]!==false;});if(inversionRange.length===0){return 0;}var inversion=random_randomElement(inversionRange);// Try to bring inversion closer to zero using steps of voicing.chord.length inversions
// (which means its the same inversion, just at a different place on the keyboard)
while(inversion+L<=maxInversion&&Math.abs(inversion)>Math.abs(inversion+L)){inversion+=L;}while(inversion-L>=minInversion&&Math.abs(inversion)>Math.abs(inversion-L)){inversion-=L;}return inversion;};var createQuery_createQuery=function createQuery(clefs,groups){var clef=random_randomElement(clefs);var nrVoicings=Object(fp["sumBy"])(function(x){return x.voicings.length;})(groups);var voicingIdx=Math.floor(Math.random()*nrVoicings);var groupIdx=0;var count=groups[0].voicings.length;while(voicingIdx>=count){groupIdx+=1;count+=groups[groupIdx].voicings.length;}var group=groups[groupIdx];var voicing=group.voicings[voicingIdx-(count-group.voicings.length)];var inversion=createQuery_getRandomInversion(voicing,clef);return{clef:clef,group:group,voicing:voicing,inversion:inversion};};
// CONCATENATED MODULE: ./src/quiz/QuizState/facets/Inputs.ts
var _class,_descriptor,_descriptor2;var Inputs_Inputs=(_class=function Inputs(){Object(classCallCheck["a" /* default */])(this,Inputs);Object(initializerDefineProperty["a" /* default */])(this,"groups",_descriptor,this);Object(initializerDefineProperty["a" /* default */])(this,"clefs",_descriptor2,this);},(_descriptor=Object(applyDecoratedDescriptor["a" /* default */])(_class.prototype,"groups",[skandha["k" /* input */]],{configurable:true,enumerable:true,writable:true,initializer:function initializer(){return[];}}),_descriptor2=Object(applyDecoratedDescriptor["a" /* default */])(_class.prototype,"clefs",[skandha["k" /* input */]],{configurable:true,enumerable:true,writable:true,initializer:function initializer(){return[];}})),_class);
// CONCATENATED MODULE: ./src/quiz/QuizState/facets/Outputs.ts
var Outputs_class,Outputs_descriptor,Outputs_descriptor2;var Outputs_Outputs=(Outputs_class=/*#__PURE__*/function(){function Outputs(){Object(classCallCheck["a" /* default */])(this,Outputs);Object(initializerDefineProperty["a" /* default */])(this,"clefsDisplay",Outputs_descriptor,this);Object(initializerDefineProperty["a" /* default */])(this,"groupsDisplay",Outputs_descriptor2,this);}Object(createClass["a" /* default */])(Outputs,[{key:"groupById",get:function get(){return listToItemById(this.groupsDisplay);}}]);return Outputs;}(),(Outputs_descriptor=Object(applyDecoratedDescriptor["a" /* default */])(Outputs_class.prototype,"clefsDisplay",[skandha["p" /* output */]],{configurable:true,enumerable:true,writable:true,initializer:function initializer(){return[];}}),Outputs_descriptor2=Object(applyDecoratedDescriptor["a" /* default */])(Outputs_class.prototype,"groupsDisplay",[skandha["p" /* output */]],{configurable:true,enumerable:true,writable:true,initializer:function initializer(){return[];}}),Object(applyDecoratedDescriptor["a" /* default */])(Outputs_class.prototype,"groupById",[mobx_esm["c" /* computed */]],Object.getOwnPropertyDescriptor(Outputs_class.prototype,"groupById"),Outputs_class.prototype)),Outputs_class);
// CONCATENATED MODULE: ./src/quiz/QuizState/index.ts
var QuizState_class,QuizState_descriptor,QuizState_descriptor2,_descriptor3,_descriptor4;var QuizState_QuizState=(QuizState_class=/*#__PURE__*/function(){function QuizState(props){Object(classCallCheck["a" /* default */])(this,QuizState);this.props=void 0;Object(initializerDefineProperty["a" /* default */])(this,"query",QuizState_descriptor,this);Object(initializerDefineProperty["a" /* default */])(this,"nextQuery",QuizState_descriptor2,this);Object(initializerDefineProperty["a" /* default */])(this,"inputs",_descriptor3,this);Object(initializerDefineProperty["a" /* default */])(this,"outputs",_descriptor4,this);this.clefs={selection:new Selection["a" /* Selection */](),highlight:new Highlight["a" /* Highlight */]()};this.groups={selection:new Selection["a" /* Selection */](),highlight:new Highlight["a" /* Highlight */]()};this.props=props;Object(skandha["q" /* registerFacets */])(this,{});Object(mobx_esm["h" /* makeObservable */])(this);Object(skandha["q" /* registerFacets */])(this.clefs,{name:'Clefs'});this._setClefsCallbacks(props);this._applyClefsPolicies(props);Object(skandha_mobx["a" /* makeCtrObservable */])(this.clefs);Object(skandha["q" /* registerFacets */])(this.groups,{name:'Groups'});this._setGroupsCallbacks(props);this._applyGroupsPolicies(props);Object(skandha_mobx["a" /* makeCtrObservable */])(this.groups);var cuf=selectClefBasedOnPreselection()(this);Object(skandha["a" /* addCleanUpFunctionToCtr */])(this.clefs,cuf);}Object(createClass["a" /* default */])(QuizState,[{key:"_setClefsCallbacks",value:function _setClefsCallbacks(props){var ctr=this.clefs;Object(aspiration["c" /* setCallbacks */])(ctr.selection,{selectItem:{selectItem:function selectItem(){Object(Selection["b" /* handleSelectItem */])(ctr.selection,this.selectionParams);skandha_facets_policies["a" /* highlightFollowsSelection */](ctr.selection,this.selectionParams);}}});Object(aspiration["c" /* setCallbacks */])(ctr.highlight,{});}},{key:"_setGroupsCallbacks",value:function _setGroupsCallbacks(props){var ctr=this.groups;Object(aspiration["c" /* setCallbacks */])(ctr.selection,{selectItem:{selectItem:function selectItem(){Object(Selection["b" /* handleSelectItem */])(ctr.selection,this.selectionParams);skandha_facets_policies["a" /* highlightFollowsSelection */](ctr.selection,this.selectionParams);}}});Object(aspiration["c" /* setCallbacks */])(ctr.highlight,{});}},{key:"_applyClefsPolicies",value:function _applyClefsPolicies(props){var Inputs_items=[Inputs_Inputs,'clefs',this];var Outputs_display=[Outputs_Outputs,'clefsDisplay',this];var policies=[Object(skandha["m" /* mapDataToFacet */])(Outputs_display,Object(skandha["j" /* getm */])(Inputs_items)),// selection
skandha_facets["c" /* selectionUsesSelectableIds */](Object(skandha["j" /* getm */])(Outputs_display))];Object(skandha["l" /* installPolicies */])(policies,this.clefs);}},{key:"_applyGroupsPolicies",value:function _applyGroupsPolicies(props){var Inputs_items=[Inputs_Inputs,'groups',this];var Outputs_display=[Outputs_Outputs,'groupsDisplay',this];var Outputs_itemById=[Outputs_Outputs,'groupById',this];var policies=[Object(skandha["m" /* mapDataToFacet */])(Outputs_display,Object(skandha["j" /* getm */])(Inputs_items)),// selection
skandha_facets["c" /* selectionUsesSelectableIds */](Object(skandha["j" /* getm */])(Outputs_display),getIds),skandha_facets["b" /* selectionUsesItemLookUpTable */](Object(skandha["j" /* getm */])(Outputs_itemById)),// highlight
skandha_facets["a" /* highlightUsesItemLookUpTable */](Object(skandha["j" /* getm */])(Outputs_itemById))];Object(skandha["l" /* installPolicies */])(policies,this.groups);}},{key:"destroy",value:function destroy(){Object(skandha["b" /* cleanUpCtr */])(this.clefs);Object(skandha["b" /* cleanUpCtr */])(this.groups);}},{key:"setClefs",value:function setClefs(clefs){this.inputs.clefs=clefs;this.clefs.selection.ids=clefs;}},{key:"setGroups",value:function setGroups(groups){this.inputs.groups=groups;this.groups.selection.ids=getIds(groups);}},{key:"pickRandomChord",value:function pickRandomChord(){var _this$nextQuery,_this$groups$selectio,_this$groups$selectio2;this.query=(_this$nextQuery=this.nextQuery)!==null&&_this$nextQuery!==void 0?_this$nextQuery:createQuery_createQuery(this.clefs.selection.ids,(_this$groups$selectio=this.groups.selection.items)!==null&&_this$groups$selectio!==void 0?_this$groups$selectio:[]);this.nextQuery=createQuery_createQuery(this.clefs.selection.ids,(_this$groups$selectio2=this.groups.selection.items)!==null&&_this$groups$selectio2!==void 0?_this$groups$selectio2:[]);if(this.query){this.props.clefStore.setClef(this.query.clef);this.props.voicingStore.setVoicing(this.query.voicing);this.props.voicingStore.setInversion(this.query.inversion);}}}]);return QuizState;}(),(QuizState_descriptor=Object(applyDecoratedDescriptor["a" /* default */])(QuizState_class.prototype,"query",[mobx_esm["i" /* observable */]],{configurable:true,enumerable:true,writable:true,initializer:null}),QuizState_descriptor2=Object(applyDecoratedDescriptor["a" /* default */])(QuizState_class.prototype,"nextQuery",[mobx_esm["i" /* observable */]],{configurable:true,enumerable:true,writable:true,initializer:null}),_descriptor3=Object(applyDecoratedDescriptor["a" /* default */])(QuizState_class.prototype,"inputs",[skandha["d" /* facet */]],{configurable:true,enumerable:true,writable:true,initializer:function initializer(){return new Inputs_Inputs();}}),_descriptor4=Object(applyDecoratedDescriptor["a" /* default */])(QuizState_class.prototype,"outputs",[skandha["d" /* facet */]],{configurable:true,enumerable:true,writable:true,initializer:function initializer(){return new Outputs_Outputs();}}),Object(applyDecoratedDescriptor["a" /* default */])(QuizState_class.prototype,"setClefs",[mobx_esm["b" /* action */]],Object.getOwnPropertyDescriptor(QuizState_class.prototype,"setClefs"),QuizState_class.prototype),Object(applyDecoratedDescriptor["a" /* default */])(QuizState_class.prototype,"setGroups",[mobx_esm["b" /* action */]],Object.getOwnPropertyDescriptor(QuizState_class.prototype,"setGroups"),QuizState_class.prototype),Object(applyDecoratedDescriptor["a" /* default */])(QuizState_class.prototype,"pickRandomChord",[mobx_esm["b" /* action */]],Object.getOwnPropertyDescriptor(QuizState_class.prototype,"pickRandomChord"),QuizState_class.prototype)),QuizState_class);
// CONCATENATED MODULE: ./src/voicings/voicingGroups.ts
var voicingGroups=[{name:'minor',voicings:[{name:'Min6,9',chord:['ninth','flat3','fifth','thirteenth'],inversions:[true,true,true,true]},{name:'Min7,9',chord:['ninth','flat3','fifth','flat7'],inversions:[true,true,true,true]},{name:'ø9',chord:['ninth','flat3','flat5','flat7'],inversions:[true,true,true,true]},{name:'MinMaj9',chord:['ninth','flat3','fifth','seventh'],inversions:[true,true,true,true]},{name:'Min6',chord:['flat3','fifth','thirteenth'],inversions:[true,true,true]},{name:'Min7',chord:['flat3','fifth','flat7'],inversions:[true,true,true]},{name:'ø',chord:['flat3','flat5','flat7'],inversions:[true,true,true]},{name:'Min',chord:['flat3','fifth'],inversions:[true,true]},{name:'MinMaj',chord:['flat3','fifth','seventh'],inversions:[true,true,true]}]},{name:'fourths',voicings:[{name:'SoWhat',chord:['root','fourth','flat7','flat3','fifth'],inversions:[false,true,false,false,false,false]}]},{name:'major',voicings:[{name:'Maj6,9',chord:['ninth','third','sixth'],inversions:[true,true,true]},{name:'Maj7,9',chord:['ninth','third','fifth','seventh'],inversions:[true,true,true,true]},{name:'Maj6',chord:['third','sixth'],inversions:[true,true]},{name:'Maj7',chord:['third','fifth','seventh'],inversions:[true,true,true]},{name:'Maj',chord:['third','fifth'],inversions:[true,true]}]},{name:'dominant',voicings:[{name:'7,13',chord:['third','thirteenth','flat7'],inversions:[true,true,true]},{name:'7,9',chord:['ninth','third','fifth','flat7'],inversions:[true,true,true,true]},{name:'7,b13',chord:['third','flat13','flat7'],inversions:[true,true,true]},{name:'7,9,b13',chord:['ninth','third','flat13','flat7'],inversions:[true,true,true,true]},{name:'7,b5',chord:['third','flat5','flat7'],inversions:[true,true,true]},{name:'7,b5,b13',chord:['third','flat5','flat13','flat7'],inversions:[true,true,true,true]},{name:'7,b9',chord:['flat9','third','fifth','flat7'],inversions:[true,true,true,true]},{name:'7,b9,13',chord:['flat9','third','thirteenth','flat7'],inversions:[true,true,true,true]},{name:'7,b9,b13',chord:['flat9','third','flat13','flat7'],inversions:[true,true,true,true]},{name:'7',chord:['third','fifth','flat7'],inversions:[true,true,true]}]},{name:'magic-dom',voicings:[{name:'magic dom root',chord:['third','flat7','ninth','fifth','root'],inversions:[true,false,false,false,false]},{name:'magic dom 2nd',chord:['fifth','root','fourth','flat7','ninth'],inversions:[true,false,false,false,false]},{name:'magic dom 3rd',chord:['flat7','ninth','five','root','third'],inversions:[true,false,false,false,false]},{name:'magic dom 5th',chord:['flat7','third','thirteen','second','fifth'],inversions:[true,false,false,false,false]},{name:'magic dom 6th',chord:['root','fourth','flat7','third','thirteen'],inversions:[true,false,false,false,false]},{name:'magic dom 7th',chord:['ninth','five','root','fourth','flat7'],inversions:[true,false,false,false,false]}]}];
// CONCATENATED MODULE: ./src/quiz/components/QuizStateProvider.tsx
// Note: don't observe this with MobX
var QuizStateProvider_QuizStateProvider=function QuizStateProvider(props){var _useStore=useStore_useStore(),groupsStore=_useStore.groupsStore,clefStore=_useStore.clefStore,voicingStore=_useStore.voicingStore,preselectionStore=_useStore.preselectionStore;var groups=parse_parseVoicingGroups(voicingGroups);var createState=Object(mobx_esm["b" /* action */])(function(){var state=new QuizState_QuizState({groupsStore:groupsStore,clefStore:clefStore,voicingStore:voicingStore,preselectionStore:preselectionStore});state.setClefs(keyConstants_clefs);state.setGroups(groups);return state;});var updateState=function updateState(state){Object(mobx_esm["j" /* reaction */])(function(){return{};},function(inputs){},{fireImmediately:true});};var getDefaultProps=function getDefaultProps(state){return{quizState:function quizState(){return state;},clefs:function clefs(){return state.outputs.clefsDisplay;},clefsSelection:function clefsSelection(){return state.clefs.selection;},clefsHighlight:function clefsHighlight(){return state.clefs.highlight;},clef:function clef(){return state.clefs.highlight.item;},groups:function groups(){return state.outputs.groupsDisplay;},groupsSelection:function groupsSelection(){return state.groups.selection;},groupsHighlight:function groupsHighlight(){return state.groups.highlight;},group:function group(){return state.groups.highlight.item;}};};return/*#__PURE__*/Object(jsx_runtime["jsx"])(react_default_props_context["a" /* CtrProvider */],{createCtr:createState,updateCtr:updateState,destroyCtr:function destroyCtr(state){return state.destroy();},getDefaultProps:getDefaultProps,children:props.children});};
// CONCATENATED MODULE: ./src/quiz/components/index.ts

// CONCATENATED MODULE: ./src/app/components/UrlRouter.tsx
var UrlRouter_history=Object(esm_history["a" /* createBrowserHistory */])();var UrlRouter=Object(es["a" /* observer */])(function(props){return/*#__PURE__*/Object(jsx_runtime["jsx"])(react_router["b" /* Router */],{history:UrlRouter_history,children:/*#__PURE__*/Object(jsx_runtime["jsx"])(react_router["c" /* Switch */],{children:/*#__PURE__*/Object(jsx_runtime["jsx"])(react_router["a" /* Route */],{path:"",children:/*#__PURE__*/Object(jsx_runtime["jsx"])(QuizStateProvider_QuizStateProvider,{children:/*#__PURE__*/Object(jsx_runtime["jsx"])(QuizView,{})})})})});});
// EXTERNAL MODULE: ./src/app/components/App.scss
var App = __webpack_require__(193);

// CONCATENATED MODULE: ./src/app/components/App.tsx
function App_App(){return/*#__PURE__*/Object(jsx_runtime["jsx"])("div",{className:"App w-screen",children:/*#__PURE__*/Object(jsx_runtime["jsx"])(UrlRouter,{})});}
// CONCATENATED MODULE: ./src/app/AppStore/policies/voicingStoreUsesSelectedClef.ts
var voicingStoreUsesSelectedClef_voicingStoreUsesSelectedClef=function voicingStoreUsesSelectedClef(){return function(appStore){Object(mobx_esm["j" /* reaction */])(function(){return appStore.clefStore.clef;},function(clef){appStore.voicingStore.clef=clef;},{fireImmediately:true});};};
// CONCATENATED MODULE: ./src/app/AppStore/policies/index.ts

// CONCATENATED MODULE: ./src/groups/GroupsStore.ts
var GroupsStore_class,GroupsStore_descriptor;var GroupsStore_GroupsStore=(GroupsStore_class=/*#__PURE__*/function(){function GroupsStore(){Object(classCallCheck["a" /* default */])(this,GroupsStore);Object(initializerDefineProperty["a" /* default */])(this,"groupById",GroupsStore_descriptor,this);Object(mobx_esm["h" /* makeObservable */])(this);}Object(createClass["a" /* default */])(GroupsStore,[{key:"loadGroups",value:function loadGroups(){}}]);return GroupsStore;}(),(GroupsStore_descriptor=Object(applyDecoratedDescriptor["a" /* default */])(GroupsStore_class.prototype,"groupById",[mobx_esm["i" /* observable */]],{configurable:true,enumerable:true,writable:true,initializer:function initializer(){return{};}})),GroupsStore_class);
// CONCATENATED MODULE: ./src/keyboard/ClefStore.ts
var ClefStore_ClefStore=/*#__PURE__*/function(){function ClefStore(){var _this=this;Object(classCallCheck["a" /* default */])(this,ClefStore);this.clefLetter=clefC;this.clefSharp=false;this.clefFlat=false;this.setClefLetter=function(clefLetter){_this.clefLetter=clefLetter;};this.setClefSharp=function(x){_this.clefSharp=x;if(x)_this.clefFlat=false;};this.setClefFlat=function(x){_this.clefFlat=x;if(x)_this.clefSharp=false;};Object(mobx_esm["h" /* makeObservable */])(this,{clefLetter:mobx_esm["i" /* observable */],clefSharp:mobx_esm["i" /* observable */],clefFlat:mobx_esm["i" /* observable */],setClefLetter:mobx_esm["b" /* action */],setClefSharp:mobx_esm["b" /* action */],setClefFlat:mobx_esm["b" /* action */],clef:mobx_esm["c" /* computed */]});}Object(createClass["a" /* default */])(ClefStore,[{key:"clef",get:function get(){return this.clefLetter+(this.clefSharp?'#':this.clefFlat?'b':'');}},{key:"setClef",value:function setClef(x){var clefLetter=x[0];this.setClefLetter(clefLetter);var modulate=x[1];this.setClefFlat(modulate=='b');this.setClefSharp(modulate=='#');}}]);return ClefStore;}();
// EXTERNAL MODULE: ./node_modules/micro-signals/lib/index.js
var micro_signals_lib = __webpack_require__(105);

// CONCATENATED MODULE: ./src/keyboard/PreselectionStore.ts
var PreselectionStore_PreselectionStore=function PreselectionStore(){var _this=this;Object(classCallCheck["a" /* default */])(this,PreselectionStore);this.signal=new micro_signals_lib["Signal"]();this.clefLetter=undefined;this.isSharpening=undefined;this.isFlattening=undefined;this.setClefLetter=function(x){return _this.clefLetter=x;};this.setIsSharpening=function(x){return _this.isSharpening=x;};this.setIsFlattening=function(x){return _this.isFlattening=x;};this.reset=function(){if(_this.clefLetter){_this.signal.dispatch({topic:'PreselectionStore.selectClef',details:{clefLetter:_this.clefLetter,isSharpening:_this.isSharpening,isFlattening:_this.isFlattening}});}_this.setIsFlattening(false);_this.setIsSharpening(false);_this.setClefLetter(undefined);};Object(mobx_esm["h" /* makeObservable */])(this,{clefLetter:mobx_esm["i" /* observable */],isSharpening:mobx_esm["i" /* observable */],isFlattening:mobx_esm["i" /* observable */],setClefLetter:mobx_esm["b" /* action */],setIsSharpening:mobx_esm["b" /* action */],setIsFlattening:mobx_esm["b" /* action */],reset:mobx_esm["b" /* action */]});};
// CONCATENATED MODULE: ./src/voicings/VoicingStore.ts
var cScale=parse_parseVoicing({id:'Chromatic',name:'Chromatic',chord:['root','flat9','ninth','flat3','third','fourth','flat5','fifth','flat6','sixth','flat7','seventh']});var VoicingStore_VoicingStore=/*#__PURE__*/function(){function VoicingStore(){var _this=this;Object(classCallCheck["a" /* default */])(this,VoicingStore);this.clef='C';this.inversion=0;this.voicing=cScale;this.setInversion=function(x){_this.inversion=Object(fp["clamp"])(_this.inversionRange[0],_this.inversionRange[1])(x);};this.setVoicing=function(voicing){_this.voicing=voicing;};Object(mobx_esm["h" /* makeObservable */])(this,{clef:mobx_esm["i" /* observable */],inversion:mobx_esm["i" /* observable */],voicing:mobx_esm["i" /* observable */],chord:mobx_esm["c" /* computed */],nrOfVoices:mobx_esm["c" /* computed */],inversionRange:mobx_esm["c" /* computed */],setInversion:mobx_esm["b" /* action */],setVoicing:mobx_esm["b" /* action */]});}Object(createClass["a" /* default */])(VoicingStore,[{key:"inversionRange",get:function get(){return getInversionRange(voicingToChord_voicingToChord(this.voicing,this.clef,1));}},{key:"nrOfVoices",get:function get(){return Object(fp["size"])(this.voicing.chord);}},{key:"chord",get:function get(){return this.clef?invertChord_invertChord(voicingToChord_voicingToChord(this.voicing,this.clef,1),this.inversion):undefined;}}]);return VoicingStore;}();
// CONCATENATED MODULE: ./src/app/AppStore/index.ts
var AppStore_AppStore=/*#__PURE__*/function(){function AppStore(){Object(classCallCheck["a" /* default */])(this,AppStore);this.clefStore=new ClefStore_ClefStore();this.groupsStore=void 0;this.preselectionStore=new PreselectionStore_PreselectionStore();this.scaleFactor=1;this.voicingStore=new VoicingStore_VoicingStore();this.setWindowWidth(window.innerWidth);Object(mobx_esm["h" /* makeObservable */])(this,{clefStore:mobx_esm["i" /* observable */],groupsStore:mobx_esm["i" /* observable */],preselectionStore:mobx_esm["i" /* observable */],scaleFactor:mobx_esm["i" /* observable */],voicingStore:mobx_esm["i" /* observable */]});this.groupsStore=new GroupsStore_GroupsStore();this.applyPolicies();}Object(createClass["a" /* default */])(AppStore,[{key:"setWindowWidth",value:function setWindowWidth(width){this.scaleFactor=width>=1420?1:width/1420;}},{key:"applyPolicies",value:function applyPolicies(){voicingStoreUsesSelectedClef_voicingStoreUsesSelectedClef()(this);}}]);return AppStore;}();
// CONCATENATED MODULE: ./src/app/components/StoreProvider.tsx
var StoreProvider_appStore=new AppStore_AppStore();var StoreContext=/*#__PURE__*/react_default.a.createContext(StoreProvider_appStore);var StoreProvider_StoreProvider=function StoreProvider(_ref){var children=_ref.children;return/*#__PURE__*/Object(jsx_runtime["jsx"])(StoreContext.Provider,{value:StoreProvider_appStore,children:children});};
// CONCATENATED MODULE: ./src/app/components/useStore.ts
var useStore_useStore=function useStore(){var store=react_default.a.useContext(StoreContext);if(!store){throw new Error('useStore must be used within a StoreProvider.');}return store;};
// CONCATENATED MODULE: ./src/app/components/index.ts

// CONCATENATED MODULE: ./src/reportWebVitals.ts
var reportWebVitals=function reportWebVitals(onPerfEntry){if(onPerfEntry&&onPerfEntry instanceof Function){__webpack_require__.e(/* import() */ 3).then(__webpack_require__.bind(null, 201)).then(function(_ref){var getCLS=_ref.getCLS,getFID=_ref.getFID,getFCP=_ref.getFCP,getLCP=_ref.getLCP,getTTFB=_ref.getTTFB;getCLS(onPerfEntry);getFID(onPerfEntry);getFCP(onPerfEntry);getLCP(onPerfEntry);getTTFB(onPerfEntry);});}};/* harmony default export */ var src_reportWebVitals = (reportWebVitals);
// CONCATENATED MODULE: ./src/index.tsx
react_dom_default.a.render(/*#__PURE__*/Object(jsx_runtime["jsx"])(react_default.a.StrictMode,{children:/*#__PURE__*/Object(jsx_runtime["jsx"])(App_App,{})}),document.getElementById('root'));// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
src_reportWebVitals();

/***/ }),

/***/ 82:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[[197,1,2]]]);
//# sourceMappingURL=main.1efe5073.chunk.js.map