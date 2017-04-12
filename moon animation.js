(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"moon animation_atlas_", frames: [[0,656,580,326],[0,1968,580,326],[0,2296,580,326],[0,0,580,326],[0,328,580,326],[0,984,580,326],[0,1312,580,326],[0,1640,580,326],[0,2952,580,326],[582,3280,580,326],[582,1640,580,326],[0,2624,580,326],[582,656,580,326],[0,3280,580,326],[582,984,580,326],[0,3608,580,326],[582,0,580,326],[582,328,580,326],[582,1312,580,326],[582,1968,580,326],[582,2296,580,326],[582,2624,580,326],[582,2952,580,326]]}
];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib.moon1 = function() {
	this.spriteSheet = ss["moon animation_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.moon10 = function() {
	this.spriteSheet = ss["moon animation_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.moon11 = function() {
	this.spriteSheet = ss["moon animation_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.moon12 = function() {
	this.spriteSheet = ss["moon animation_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.moon13 = function() {
	this.spriteSheet = ss["moon animation_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.moon14 = function() {
	this.spriteSheet = ss["moon animation_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.moon15 = function() {
	this.spriteSheet = ss["moon animation_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.moon16 = function() {
	this.spriteSheet = ss["moon animation_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.moon17 = function() {
	this.spriteSheet = ss["moon animation_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.moon18 = function() {
	this.spriteSheet = ss["moon animation_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.moon19 = function() {
	this.spriteSheet = ss["moon animation_atlas_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.moon2 = function() {
	this.spriteSheet = ss["moon animation_atlas_"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.moon20 = function() {
	this.spriteSheet = ss["moon animation_atlas_"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.moon21 = function() {
	this.spriteSheet = ss["moon animation_atlas_"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.moon22 = function() {
	this.spriteSheet = ss["moon animation_atlas_"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.moon23 = function() {
	this.spriteSheet = ss["moon animation_atlas_"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.moon3 = function() {
	this.spriteSheet = ss["moon animation_atlas_"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.moon4 = function() {
	this.spriteSheet = ss["moon animation_atlas_"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.moon5 = function() {
	this.spriteSheet = ss["moon animation_atlas_"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.moon6 = function() {
	this.spriteSheet = ss["moon animation_atlas_"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.moon7 = function() {
	this.spriteSheet = ss["moon animation_atlas_"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.moon8 = function() {
	this.spriteSheet = ss["moon animation_atlas_"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.moon9 = function() {
	this.spriteSheet = ss["moon animation_atlas_"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



// stage content:
(lib.moonanimation = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgPHcQg0gJgVgIQgqgQgnglQgcgagcgmQgRgYgEgNQgHgTABgkIABhOQAAgbAHgNQAFgKATgQIAwgoQAYgUALgMQATgSAKgRQAGgJAHgSIANgbQAIgQAPgSIAaglIBQhuQA3hJA6hFQAUgWAIgMQANgUAEgTIADgRQACgKADgGQAEgIAHgFQAIgFAHADQALADACAOQACAMgEANQgIAYgOAZQgNAWgjAtIhFBYIgpA0IgfAlQgfAlgIAMQgIAMgVAnIgZAwQgQAegLAMIgXAYIhdBTQgQAPgFALQgEAJABAOIACAZIgCAsQgBAaAGAQQAFAPAPASIA7A8QANAOAKAIQAJAIAPAIQAVAKAgAHIA1AKQA7AMA4AdQAAADgCADQgCACgDABg");
	this.shape.setTransform(970.1,431.9);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(8).to({_off:false},0).wait(1).to({_off:true},1).wait(84));

	// Layer 1
	this.instance = new lib.moon1();
	this.instance.parent = this;
	this.instance.setTransform(0,1,3.31,3.31);

	this.instance_1 = new lib.moon2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,1,3.31,3.31);

	this.instance_2 = new lib.moon3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0,1,3.31,3.31);

	this.instance_3 = new lib.moon4();
	this.instance_3.parent = this;
	this.instance_3.setTransform(0,1,3.31,3.31);

	this.instance_4 = new lib.moon5();
	this.instance_4.parent = this;
	this.instance_4.setTransform(0,1,3.31,3.31);

	this.instance_5 = new lib.moon6();
	this.instance_5.parent = this;
	this.instance_5.setTransform(0,1,3.31,3.31);

	this.instance_6 = new lib.moon7();
	this.instance_6.parent = this;
	this.instance_6.setTransform(0,1,3.31,3.31);

	this.instance_7 = new lib.moon8();
	this.instance_7.parent = this;
	this.instance_7.setTransform(0,1,3.31,3.31);

	this.instance_8 = new lib.moon9();
	this.instance_8.parent = this;
	this.instance_8.setTransform(0,1,3.31,3.31);

	this.instance_9 = new lib.moon10();
	this.instance_9.parent = this;
	this.instance_9.setTransform(0,1,3.31,3.31);

	this.instance_10 = new lib.moon11();
	this.instance_10.parent = this;
	this.instance_10.setTransform(0,1,3.31,3.31);

	this.instance_11 = new lib.moon12();
	this.instance_11.parent = this;
	this.instance_11.setTransform(0,1,3.31,3.31);

	this.instance_12 = new lib.moon13();
	this.instance_12.parent = this;
	this.instance_12.setTransform(0,1,3.31,3.31);

	this.instance_13 = new lib.moon14();
	this.instance_13.parent = this;
	this.instance_13.setTransform(0,1,3.31,3.31);

	this.instance_14 = new lib.moon15();
	this.instance_14.parent = this;
	this.instance_14.setTransform(0,1,3.31,3.31);

	this.instance_15 = new lib.moon16();
	this.instance_15.parent = this;
	this.instance_15.setTransform(0,1,3.31,3.31);

	this.instance_16 = new lib.moon17();
	this.instance_16.parent = this;
	this.instance_16.setTransform(0,1,3.31,3.31);

	this.instance_17 = new lib.moon18();
	this.instance_17.parent = this;
	this.instance_17.setTransform(0,1,3.31,3.31);
	this.instance_17._off = true;

	this.instance_18 = new lib.moon19();
	this.instance_18.parent = this;
	this.instance_18.setTransform(0,1,3.31,3.31);
	this.instance_18._off = true;

	this.instance_19 = new lib.moon20();
	this.instance_19.parent = this;
	this.instance_19.setTransform(0,1,3.31,3.31);
	this.instance_19._off = true;

	this.instance_20 = new lib.moon21();
	this.instance_20.parent = this;
	this.instance_20.setTransform(0,1,3.31,3.31);
	this.instance_20._off = true;

	this.instance_21 = new lib.moon22();
	this.instance_21.parent = this;
	this.instance_21.setTransform(0,1,3.31,3.31);
	this.instance_21._off = true;

	this.instance_22 = new lib.moon23();
	this.instance_22.parent = this;
	this.instance_22.setTransform(0,1,3.31,3.31);
	this.instance_22._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_3}]},2).to({state:[{t:this.instance_4}]},2).to({state:[{t:this.instance_5}]},2).to({state:[{t:this.instance_6}]},2).to({state:[{t:this.instance_7}]},2).to({state:[{t:this.instance_8}]},2).to({state:[{t:this.instance_9}]},2).to({state:[{t:this.instance_10}]},2).to({state:[{t:this.instance_11}]},2).to({state:[{t:this.instance_12}]},2).to({state:[{t:this.instance_13}]},2).to({state:[{t:this.instance_14}]},2).to({state:[{t:this.instance_15}]},2).to({state:[{t:this.instance_16}]},2).to({state:[{t:this.instance_17}]},2).to({state:[{t:this.instance_18}]},2).to({state:[{t:this.instance_19}]},2).to({state:[{t:this.instance_20}]},2).to({state:[{t:this.instance_21}]},2).to({state:[{t:this.instance_22}]},2).to({state:[{t:this.instance_17}]},2).to({state:[{t:this.instance_18}]},2).to({state:[{t:this.instance_19}]},2).to({state:[{t:this.instance_20}]},2).to({state:[{t:this.instance_21}]},2).to({state:[{t:this.instance_22}]},2).to({state:[{t:this.instance_17}]},2).to({state:[{t:this.instance_18}]},2).to({state:[{t:this.instance_19}]},2).to({state:[{t:this.instance_20}]},2).to({state:[{t:this.instance_21}]},2).to({state:[{t:this.instance_22}]},2).to({state:[{t:this.instance_17}]},2).to({state:[{t:this.instance_18}]},2).to({state:[{t:this.instance_19}]},2).to({state:[{t:this.instance_20}]},2).to({state:[{t:this.instance_21}]},2).to({state:[{t:this.instance_22}]},2).to({state:[{t:this.instance_17}]},2).to({state:[{t:this.instance_18}]},2).to({state:[{t:this.instance_19}]},2).to({state:[{t:this.instance_20}]},2).to({state:[{t:this.instance_21}]},2).to({state:[{t:this.instance_22}]},2).wait(2));
	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(34).to({_off:false},0).to({_off:true},2).wait(10).to({_off:false,x:216},0).to({_off:true},2).wait(10).to({_off:false,x:388},0).to({_off:true},2).wait(10).to({_off:false,x:544},0).to({_off:true},2).wait(10).to({_off:false,x:698},0).to({_off:true},2).wait(10));
	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(36).to({_off:false},0).to({_off:true},2).wait(10).to({_off:false,x:212},0).to({_off:true},2).wait(10).to({_off:false,x:396},0).to({_off:true},2).wait(10).to({_off:false,x:548},0).to({_off:true},2).wait(10).to({_off:false,x:694},0).to({_off:true},2).wait(8));
	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(38).to({_off:false},0).to({_off:true},2).wait(10).to({_off:false,x:204},0).to({_off:true},2).wait(10).to({_off:false,x:358},0).to({_off:true},2).wait(10).to({_off:false,x:514},0).to({_off:true},2).wait(10).to({_off:false,x:667},0).to({_off:true},2).wait(6));
	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(40).to({_off:false},0).to({_off:true},2).wait(10).to({_off:false,x:172},0).to({_off:true},2).wait(10).to({_off:false,x:304},0).to({_off:true},2).wait(10).to({_off:false,x:468},0).to({_off:true},2).wait(10).to({_off:false,x:636},0).to({_off:true},2).wait(4));
	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(42).to({_off:false},0).to({_off:true},2).wait(10).to({_off:false,x:196},0).to({_off:true},2).wait(10).to({_off:false,x:308},0).to({_off:true},2).wait(10).to({_off:false,x:480},0).to({_off:true},2).wait(10).to({_off:false,x:660},0).to({_off:true},2).wait(2));
	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(44).to({_off:false},0).to({_off:true},2).wait(10).to({_off:false,x:158},0).to({_off:true},2).wait(10).to({_off:false,x:296},0).to({_off:true},2).wait(10).to({_off:false,x:472},0).to({_off:true},2).wait(10).to({_off:false,x:640},0).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(960,541,1920,1079.2);
// library properties:
lib.properties = {
	width: 1920,
	height: 1080,
	fps: 24,
	color: "#FFFFFF",
	opacity: 0.00,
	webfonts: {},
	manifest: [
		{src:"images/moon animation_atlas_.png", id:"moon animation_atlas_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;