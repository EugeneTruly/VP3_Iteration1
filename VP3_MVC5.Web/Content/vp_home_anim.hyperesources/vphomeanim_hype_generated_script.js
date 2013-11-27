//	HYPE.documents["vp_home_anim"]

(function HYPE_DocumentLoader() {
	var resourcesFolderName = "vp_home_anim.hyperesources";
	var documentName = "vp_home_anim";
	var documentLoaderFilename = "vphomeanim_hype_generated_script.js";
	var mainContainerID = "vphomeanim_hype_container";

	// find the URL for this script's absolute path and set as the resourceFolderName
	try {
		var scripts = document.getElementsByTagName('script');
		for(var i = 0; i < scripts.length; i++) {
			var scriptSrc = scripts[i].src;
			if(scriptSrc != null && scriptSrc.indexOf(documentLoaderFilename) != -1) {
				resourcesFolderName = scriptSrc.substr(0, scriptSrc.lastIndexOf("/"));
				break;
			}
		}
	} catch(err) {	}

	// Legacy support
	if (typeof window.HYPE_DocumentsToLoad == "undefined") {
		window.HYPE_DocumentsToLoad = new Array();
	}
 
	// load HYPE.js if it hasn't been loaded yet
	if(typeof HYPE_160 == "undefined") {
		if(typeof window.HYPE_160_DocumentsToLoad == "undefined") {
			window.HYPE_160_DocumentsToLoad = new Array();
			window.HYPE_160_DocumentsToLoad.push(HYPE_DocumentLoader);

			var headElement = document.getElementsByTagName('head')[0];
			var scriptElement = document.createElement('script');
			scriptElement.type= 'text/javascript';
			scriptElement.src = resourcesFolderName + '/' + 'HYPE.js?hype_version=160';
			headElement.appendChild(scriptElement);
		} else {
			window.HYPE_160_DocumentsToLoad.push(HYPE_DocumentLoader);
		}
		return;
	}
	
	// handle attempting to load multiple times
	if(HYPE.documents[documentName] != null) {
		var index = 1;
		var originalDocumentName = documentName;
		do {
			documentName = "" + originalDocumentName + "-" + (index++);
		} while(HYPE.documents[documentName] != null);
		
		var allDivs = document.getElementsByTagName("div");
		var foundEligibleContainer = false;
		for(var i = 0; i < allDivs.length; i++) {
			if(allDivs[i].id == mainContainerID && allDivs[i].getAttribute("HYPE_documentName") == null) {
				var index = 1;
				var originalMainContainerID = mainContainerID;
				do {
					mainContainerID = "" + originalMainContainerID + "-" + (index++);
				} while(document.getElementById(mainContainerID) != null);
				
				allDivs[i].id = mainContainerID;
				foundEligibleContainer = true;
				break;
			}
		}
		
		if(foundEligibleContainer == false) {
			return;
		}
	}
	
	var hypeDoc = new HYPE_160();
	
	var attributeTransformerMapping = {b:"i",c:"i",bC:"i",d:"i",aS:"i",M:"i",e:"f",aT:"i",N:"i",f:"d",O:"i",g:"c",aU:"i",P:"i",Q:"i",aV:"i",R:"c",bG:"f",aW:"f",aI:"i",S:"i",bH:"d",l:"d",aX:"i",T:"i",m:"c",bI:"f",aJ:"i",n:"c",aK:"i",bJ:"f",X:"i",aL:"i",A:"c",aZ:"i",Y:"bM",B:"c",bK:"f",bL:"f",C:"c",D:"c",t:"i",E:"i",G:"c",bA:"c",a:"i",bB:"i"};
	
	var resources = {"18":{n:"06_dude.png",p:1},"10":{n:"02_girl.png",p:1},"19":{n:"06_dude_glow.png",p:1},"11":{n:"02_girl_glow.png",p:1},"0":{n:"topshadow.png",p:1},"12":{n:"03_woman.png",p:1},"1":{n:"city.jpg",p:1},"2":{n:"clouds.png",p:1},"13":{n:"03_woman_glow.png",p:1},"3":{n:"window.png",p:1},"14":{n:"04_guy.png",p:1},"4":{n:"01_crowd.png",p:1},"5":{n:"01_girl.png",p:1},"15":{n:"04_guy_glow.png",p:1},"6":{n:"01_guy.png",p:1},"16":{n:"05_lady.png",p:1},"7":{n:"01_crowd_glow.png",p:1},"8":{n:"01_girl_glow.png",p:1},"17":{n:"05_lady_glow.png",p:1},"9":{n:"01_guy_glow.png",p:1}};
	
	var scenes = [{x:0,p:"600px",c:"#FFFFFF",onSceneTimelineCompleteActions:[{type:1,transition:2,sceneSymbol:1}],v:{"164":{o:"content-box",h:"1",a:-377,x:"visible",q:"100% 100%",b:-7,j:"absolute",r:"inline",c:1992,k:"div",z:"2",d:742,bF:"191",e:"0.350000"},"124":{c:940,d:350,I:"Solid",J:"Solid",K:"Solid",L:"Solid",M:1,bF:"137",N:1,A:"#A0A0A0",x:"visible",j:"absolute",B:"#A0A0A0",k:"div",O:1,P:1,z:"1",C:"#A0A0A0",D:"#A0A0A0",a:0,b:0},"166":{o:"content-box",h:"3",x:"visible",a:-5,q:"100% 100%",b:-267,j:"absolute",r:"inline",c:1658,k:"div",z:"3",d:617,bF:"191"},"130":{o:"content-box",h:"0",x:"visible",a:2,q:"100% 100%",b:0,j:"absolute",r:"inline",c:934,k:"div",z:"2",d:15,bF:"137"},"137":{k:"div",x:"visible",c:940,d:350,z:"9",a:0,j:"absolute",b:0},"165":{o:"content-box",h:"2",x:"visible",a:148,q:"100% 100%",b:0,j:"absolute",r:"inline",c:940,k:"div",z:"1",d:350,bF:"191"},"191":{k:"div",x:"visible",c:1235,d:460,z:"1",a:-148,j:"absolute",b:0}},n:"Scene0",T:{kTimelineDefaultIdentifier:{d:2.24,i:"kTimelineDefaultIdentifier",n:"Main Timeline",a:[{f:"3",t:0,d:1.28,i:"a",e:0,r:1,s:148,o:"165"},{f:"3",t:0,d:1.28,i:"b",e:0,r:1,s:0,o:"165"},{f:"3",t:0,d:1.28,i:"d",e:460,r:1,s:350,o:"165"},{f:"3",t:0,d:1.28,i:"c",e:1235,r:1,s:940,o:"165"},{f:"1",t:0.21,d:1.21,i:"a",e:148,r:1,s:-377,o:"164"},{f:"1",t:0.21,d:1.21,i:"b",e:0,r:1,s:-7,o:"164"},{f:"1",t:0.21,d:1.21,i:"c",e:940,r:1,s:1992,o:"164"},{f:"1",t:0.21,d:1.21,i:"d",e:350,r:1,s:742,o:"164"},{f:"1",t:2.01,d:0.23,i:"b",e:0,r:1,s:-267,o:"166"},{f:"1",t:2.01,d:0.23,i:"d",e:350,r:1,s:617,o:"166"},{f:"1",t:2.01,d:0.23,i:"c",e:940,r:1,s:1658,o:"166"},{f:"1",t:2.01,d:0.23,i:"a",e:148,r:1,s:-5,o:"166"}],f:30}},o:"1"},{x:1,p:"600px",c:"#FFFFFF",onSceneTimelineCompleteActions:[{type:1,transition:2,sceneSymbol:1}],v:{"25":{o:"content-box",h:"9",a:717,x:"visible",q:"100% 100%",b:-20,j:"absolute",r:"inline",c:318,k:"div",z:"3",d:366,bF:"28",e:"0.000000"},"140":{o:"content-box",h:"0",x:"visible",a:2,q:"100% 100%",b:0,j:"absolute",r:"inline",c:934,k:"div",z:"2",d:15,bF:"138"},"19":{o:"content-box",h:"4",a:82,x:"visible",q:"100% 100%",b:159,j:"absolute",r:"inline",c:668,k:"div",z:"2",d:187,bF:"28",e:"0.000000"},"108":{aU:8,G:"#0E4075",aV:8,r:"inline",e:"0.000000",s:"TrebuchetMS,'Trebuchet MS','Lucida Grande',Tahoma,Arial,Sans-Serif",t:16,Z:"break-word",v:"bold",w:"Discover an easier way to manage...",bF:"192",j:"absolute",x:"visible",k:"div",y:"preserve",z:"6",aS:8,aT:8,a:20,b:-13},"120":{aU:8,G:"#FFFFFF",c:193,aV:8,r:"inline",d:16,e:"0.000000",s:"TrebuchetMS,'Trebuchet MS','Lucida Grande',Tahoma,Arial,Sans-Serif",X:4,t:14,Z:"break-word",w:"DAILY PRIORITIES",bF:"192",j:"absolute",x:"visible",k:"div",y:"preserve",z:"5",aS:8,aT:8,a:414,b:18},"170":{k:"div",x:"visible",c:940,d:350,z:"1",a:0,j:"absolute",b:0},"117":{aU:8,G:"#FFFFFF",aV:8,r:"inline",e:"0.000000",s:"TrebuchetMS,'Trebuchet MS','Lucida Grande',Tahoma,Arial,Sans-Serif",X:2,t:14,Z:"break-word",w:"EVENTS PLANS",bF:"192",j:"absolute",x:"visible",k:"div",y:"preserve",z:"4",aS:8,aT:8,a:52,b:20},"28":{k:"div",x:"visible",c:749,d:345,z:"6",a:0,j:"absolute",b:5},"138":{k:"div",x:"visible",c:940,d:350,z:"27",r:"inline",a:0,j:"absolute",b:0},"20":{o:"content-box",h:"5",p:"no-repeat",a:-1,x:"visible",q:"100% 100%",b:91,j:"absolute",r:"inline",c:146,k:"div",z:"6",d:253,bF:"28",e:"0.000000"},"121":{aU:8,G:"#FFFFFF",c:216,aV:8,r:"inline",d:16,e:"0.000000",s:"TrebuchetMS,'Trebuchet MS','Lucida Grande',Tahoma,Arial,Sans-Serif",X:3,t:14,Z:"break-word",w:"TEAM COLLABORATION",bF:"192",j:"absolute",x:"visible",k:"div",y:"preserve",z:"3",aS:8,aT:8,a:469,b:8},"167":{o:"content-box",h:"2",x:"visible",a:0,q:"100% 100%",b:0,j:"absolute",r:"inline",c:940,k:"div",z:"1",d:350,bF:"170"},"21":{o:"content-box",h:"6",a:696,x:"visible",q:"100% 100%",b:68,j:"absolute",r:"inline",c:246,k:"div",z:"4",d:277,bF:"28",e:"0.000000"},"118":{aU:8,G:"#FFFFFF",aV:8,r:"inline",e:"0.000000",s:"TrebuchetMS,'Trebuchet MS','Lucida Grande',Tahoma,Arial,Sans-Serif",X:4,t:14,Z:"break-word",w:"PROJECT SCHEDULES",bF:"192",j:"absolute",x:"visible",k:"div",y:"preserve",z:"2",aS:8,aT:8,a:158,b:49},"192":{k:"div",x:"visible",c:574,d:81,z:"20",a:67,j:"absolute",b:26},"139":{c:940,d:350,I:"Solid",J:"Solid",K:"Solid",L:"Solid",M:1,bF:"138",N:1,A:"#A0A0A0",x:"visible",j:"absolute",B:"#A0A0A0",k:"div",O:1,P:1,z:"1",C:"#A0A0A0",D:"#A0A0A0",a:0,b:0},"168":{o:"content-box",h:"1",a:0,x:"visible",q:"100% 100%",b:0,j:"absolute",r:"inline",c:940,k:"div",z:"2",d:350,bF:"170",e:"0.350000"},"23":{o:"content-box",h:"8",a:-2,x:"visible",q:"100% 100%",b:-35,j:"absolute",r:"inline",c:221,k:"div",z:"5",d:380,bF:"28",e:"0.000000"},"119":{aU:8,G:"#FFFFFF",aV:8,r:"inline",e:"0.000000",s:"TrebuchetMS,'Trebuchet MS','Lucida Grande',Tahoma,Arial,Sans-Serif",X:4,t:14,Z:"break-word",w:"STATUS UPDATES",bF:"192",j:"absolute",x:"visible",k:"div",y:"preserve",z:"1",aS:8,aT:8,a:238,b:14},"169":{o:"content-box",h:"3",x:"visible",a:0,q:"100% 100%",b:0,j:"absolute",r:"inline",c:940,k:"div",z:"3",d:350,bF:"170"},"24":{o:"content-box",h:"7",a:0,x:"visible",q:"100% 100%",b:101,j:"absolute",r:"inline",c:872,k:"div",z:"1",d:244,bF:"28",e:"0.000000"}},n:"Scene1",T:{kTimelineDefaultIdentifier:{d:8.18,i:"kTimelineDefaultIdentifier",n:"Main Timeline",a:[{f:"2",t:0,d:0.15,i:"e",e:"1.000000",r:1,s:"0.000000",o:"108"},{f:"2",t:0,d:0.15,i:"a",e:8,r:1,s:20,o:"108"},{f:"2",t:0.15,d:0.15,i:"b",e:39,r:1,s:18,o:"120"},{f:"2",t:0.15,d:7.28,i:"e",e:"1.000000",s:"1.000000",o:"108"},{f:"2",t:0.15,d:0.15,i:"e",e:"1.000000",r:1,s:"0.000000",o:"120"},{f:"2",t:0.24,d:0.15,i:"a",e:74,r:1,s:52,o:"117"},{f:"2",t:0.24,d:0.15,i:"e",e:"1.000000",r:1,s:"0.000000",o:"117"},{f:"2",t:1,d:7.06,i:"e",e:"1.000000",s:"1.000000",o:"120"},{f:"2",t:1.01,d:0.15,i:"b",e:-8,r:1,s:8,o:"121"},{f:"2",t:1.01,d:0.15,i:"e",e:"1.000000",r:1,s:"0.000000",o:"121"},{f:"2",t:1.09,d:0.15,i:"a",e:134,r:1,s:158,o:"118"},{f:"2",t:1.09,d:6.23,i:"e",e:"1.000000",s:"1.000000",o:"117"},{f:"2",t:1.09,d:0.15,i:"e",e:"1.000000",r:1,s:"0.000000",o:"118"},{f:"2",t:1.16,d:6.14,i:"e",e:"1.000000",s:"1.000000",o:"121"},{f:"2",t:1.17,d:0.15,i:"a",e:257,r:1,s:238,o:"119"},{f:"2",t:1.17,d:0.15,i:"e",e:"1.000000",r:1,s:"0.000000",o:"119"},{f:"2",t:1.24,d:6.11,i:"e",e:"1.000000",s:"1.000000",o:"118"},{f:"2",t:2,d:0.15,i:"d",e:253,r:1,s:380,o:"23"},{f:"2",t:2,d:0.15,i:"c",e:146,r:1,s:221,o:"23"},{f:"2",t:2,d:0.15,i:"b",e:92,r:1,s:-35,o:"23"},{f:"2",t:2,d:0.15,i:"a",e:0,r:1,s:-2,o:"23"},{f:"2",t:2,d:0.15,i:"e",e:"1.000000",r:1,s:"0.000000",o:"23"},{f:"2",t:2.02,d:6.08,i:"e",e:"1.000000",s:"1.000000",o:"119"},{f:"2",t:2.15,d:0.06,i:"e",e:"0.000000",s:"1.000000",o:"23"},{f:"2",t:2.15,d:0.06,i:"e",e:"1.000000",r:1,s:"0.000000",o:"20"},{f:"2",t:2.21,d:0.16,i:"d",e:277,r:1,s:366,o:"25"},{f:"2",t:2.21,d:0.16,i:"c",e:246,r:1,s:318,o:"25"},{f:"2",t:2.21,d:0.16,i:"b",e:68,r:1,s:-20,o:"25"},{f:"2",t:2.21,d:0.16,i:"a",e:696,r:1,s:717,o:"25"},{f:"2",t:2.21,d:0.16,i:"e",e:"1.000000",r:1,s:"0.000000",o:"25"},{f:"2",t:2.21,d:4.25,i:"e",e:"1.000000",s:"1.000000",o:"20"},{f:"2",t:3.07,d:0.05,i:"e",e:"0.000000",s:"1.000000",o:"25"},{f:"2",t:3.07,d:0.05,i:"e",e:"1.000000",r:1,s:"0.000000",o:"21"},{f:"2",t:3.12,d:0.17,i:"d",e:187,r:1,s:244,o:"24"},{f:"2",t:3.12,d:0.17,i:"c",e:668,r:1,s:872,o:"24"},{f:"2",t:3.12,d:0.17,i:"b",e:158,r:1,s:101,o:"24"},{f:"2",t:3.12,d:0.17,i:"a",e:82,r:1,s:0,o:"24"},{f:"2",t:3.12,d:0.17,i:"e",e:"1.000000",r:1,s:"0.000000",o:"24"},{f:"2",t:3.12,d:4.06,i:"e",e:"1.000000",s:"1.000000",o:"21"},{f:"2",t:3.29,d:0.05,i:"e",e:"0.000000",s:"1.000000",o:"24"},{f:"2",t:3.29,d:0.05,i:"e",e:"1.000000",r:1,s:"0.000000",o:"19"},{f:"2",t:4.04,d:3.17,i:"e",e:"1.000000",s:"1.000000",o:"19"},{f:"2",t:7.16,d:0.11,i:"d",e:295,r:1,s:253,o:"20"},{f:"2",t:7.16,d:0.11,i:"c",e:171,r:1,s:146,o:"20"},{f:"2",t:7.16,d:0.11,i:"a",e:-26,r:1,s:-1,o:"20"},{f:"2",t:7.16,d:0.11,i:"e",e:"0.000000",s:"1.000000",o:"20"},{f:"2",t:7.18,d:0.08,i:"d",e:282,r:1,s:277,o:"21"},{f:"2",t:7.18,d:0.08,i:"c",e:250,r:1,s:246,o:"21"},{f:"2",t:7.18,d:0.08,i:"e",e:"0.000000",s:"1.000000",o:"21"},{f:"2",t:7.21,d:0.06,i:"d",e:213,r:1,s:187,o:"19"},{f:"2",t:7.21,d:0.06,i:"c",e:761,r:1,s:668,o:"19"},{f:"2",t:7.21,d:0.06,i:"a",e:43,r:1,s:82,o:"19"},{f:"2",t:7.21,d:0.06,i:"e",e:"0.000000",s:"1.000000",o:"19"},{f:"2",t:8,d:0.08,i:"e",e:"0.000000",s:"1.000000",o:"121"},{f:"2",t:8.02,d:0.08,i:"e",e:"0.000000",s:"1.000000",o:"117"},{f:"2",t:8.05,d:0.07,i:"e",e:"0.000000",s:"1.000000",o:"118"},{f:"2",t:8.06,d:0.07,i:"e",e:"0.000000",s:"1.000000",o:"120"},{f:"2",t:8.1,d:0.06,i:"e",e:"0.000000",s:"1.000000",o:"119"},{f:"2",t:8.13,d:0.05,i:"e",e:"0.000000",s:"1.000000",o:"108"}],f:30}},o:"18"},{x:2,p:"600px",c:"#FFFFFF",onSceneTimelineCompleteActions:[{type:1,transition:2,sceneSymbol:1}],v:{"109":{aU:8,G:"#0E4075",c:378,aV:8,r:"inline",d:63,e:"0.000000",s:"TrebuchetMS,'Trebuchet MS','Lucida Grande',Tahoma,Arial,Sans-Serif",t:17,Z:"break-word",v:"bold",w:"Viewpath\u2019s intuitive drag-and-drop project schedules are very fast and flexible.",j:"absolute",x:"visible",k:"div",y:"preserve",z:"13",aS:8,aT:8,a:127,b:144},"174":{o:"content-box",h:"3",x:"visible",a:0,q:"100% 100%",b:0,j:"absolute",r:"inline",c:940,k:"div",z:"3",d:350,bF:"171"},"141":{k:"div",x:"visible",c:940,d:350,z:"14",a:0,j:"absolute",b:0},"173":{o:"content-box",h:"1",a:0,x:"visible",q:"100% 100%",b:0,j:"absolute",r:"inline",c:940,k:"div",z:"2",d:350,bF:"171",e:"0.350000"},"53":{o:"content-box",h:"10",x:"visible",a:624,q:"100% 100%",b:7,j:"absolute",r:"inline",c:252,k:"div",z:"11",d:342,e:"0.000000"},"143":{o:"content-box",h:"0",x:"visible",a:2,q:"100% 100%",b:0,j:"absolute",r:"inline",c:934,k:"div",z:"2",d:15,bF:"141"},"172":{o:"content-box",h:"2",x:"visible",a:0,q:"100% 100%",b:0,j:"absolute",r:"inline",c:940,k:"div",z:"1",d:350,bF:"171"},"54":{o:"content-box",h:"11",x:"visible",a:640,q:"100% 100%",b:-87,j:"absolute",r:"inline",c:340,k:"div",z:"10",d:460,e:"0.008621"},"142":{c:940,d:350,I:"Solid",J:"Solid",K:"Solid",L:"Solid",M:1,bF:"141",N:1,A:"#A0A0A0",x:"visible",j:"absolute",B:"#A0A0A0",k:"div",O:1,P:1,z:"1",C:"#A0A0A0",D:"#A0A0A0",a:0,b:0},"171":{k:"div",x:"visible",c:940,d:350,z:"1",a:0,j:"absolute",b:0}},n:"Scene2",T:{kTimelineDefaultIdentifier:{d:8.09,i:"kTimelineDefaultIdentifier",n:"Main Timeline",a:[{f:"2",t:0,d:0.22,i:"e",e:"1.000000",r:1,s:"0.008621",o:"54"},{f:"2",t:0,d:0.22,i:"a",e:624,r:1,s:640,o:"54"},{f:"2",t:0,d:0.22,i:"b",e:7,r:1,s:-87,o:"54"},{f:"2",t:0,d:0.22,i:"d",e:342,r:1,s:460,o:"54"},{f:"2",t:0,d:0.22,i:"c",e:252,r:1,s:340,o:"54"},{f:"2",t:0.22,d:0.15,i:"e",e:"1.000000",s:"1.000000",o:"54"},{f:"2",t:0.22,d:0.15,i:"e",e:"1.000000",r:1,s:"0.000000",o:"53"},{f:"2",t:1.07,d:0.11,i:"a",e:131,r:1,s:127,o:"109"},{f:"2",t:1.07,d:6.17,i:"e",e:"1.000000",s:"1.000000",o:"53"},{f:"2",t:1.07,d:0.01,i:"e",e:"0.000000",s:"1.000000",o:"54"},{f:"2",t:1.07,d:0.11,i:"e",e:"1.000000",r:1,s:"0.000000",o:"109"},{f:"2",t:1.18,d:6.06,i:"a",e:131,s:131,o:"109"},{f:"2",t:1.18,d:6.06,i:"e",e:"1.000000",s:"1.000000",o:"109"},{f:"2",t:7.24,d:0.15,i:"a",e:666,r:1,s:624,o:"53"},{f:"2",t:7.24,d:0.15,i:"a",e:130,s:131,o:"109"},{f:"2",t:7.24,d:0.15,i:"e",e:"0.000000",s:"1.000000",o:"53"},{f:"2",t:7.24,d:0.15,i:"e",e:"0.000000",s:"1.000000",o:"109"}],f:30}},o:"52"},{x:3,p:"600px",c:"#FFFFFF",onSceneTimelineCompleteActions:[{type:1,transition:2,sceneSymbol:1}],v:{"65":{o:"content-box",h:"13",x:"visible",a:-58,q:"100% 100%",b:-55,j:"absolute",r:"inline",c:345,k:"div",z:"10",d:406,e:"0.008621"},"177":{o:"content-box",h:"1",a:0,x:"visible",q:"100% 100%",b:0,j:"absolute",r:"inline",c:940,k:"div",z:"2",d:350,bF:"175",e:"0.350000"},"178":{o:"content-box",h:"3",x:"visible",a:0,q:"100% 100%",b:0,j:"absolute",r:"inline",c:940,k:"div",z:"3",d:350,bF:"175"},"144":{k:"div",x:"visible",c:940,d:350,z:"14",a:0,j:"absolute",b:0},"176":{o:"content-box",h:"2",x:"visible",a:0,q:"100% 100%",b:0,j:"absolute",r:"inline",c:940,k:"div",z:"1",d:350,bF:"175"},"64":{o:"content-box",h:"12",x:"visible",a:-1,q:"100% 100%",b:7,j:"absolute",r:"inline",c:288,k:"div",z:"11",d:344,e:"0.000000"},"146":{o:"content-box",h:"0",x:"visible",a:2,q:"100% 100%",b:0,j:"absolute",r:"inline",c:934,k:"div",z:"2",d:15,bF:"144"},"110":{aU:8,G:"#0E4075",c:366,aV:8,r:"inline",d:51,e:"0.000000",s:"TrebuchetMS,'Trebuchet MS','Lucida Grande',Tahoma,Arial,Sans-Serif",t:17,Z:"break-word",v:"bold",w:"Viewpath makes it easy to see the big-picture while managing many day-to-day priorities.",j:"absolute",x:"visible",k:"div",y:"preserve",z:"13",aS:8,aT:8,a:264,b:144},"175":{k:"div",x:"visible",c:940,d:350,z:"1",a:0,j:"absolute",b:0},"145":{c:940,d:350,I:"Solid",J:"Solid",K:"Solid",L:"Solid",M:1,bF:"144",N:1,A:"#A0A0A0",x:"visible",j:"absolute",B:"#A0A0A0",k:"div",O:1,P:1,z:"1",C:"#A0A0A0",D:"#A0A0A0",a:0,b:0}},n:"Scene3",T:{kTimelineDefaultIdentifier:{d:8.08,i:"kTimelineDefaultIdentifier",n:"Main Timeline",a:[{f:"2",t:0,d:0.22,i:"d",e:344,r:1,s:406,o:"65"},{f:"2",t:0,d:0.22,i:"b",e:7,r:1,s:-55,o:"65"},{f:"2",t:0,d:0.22,i:"c",e:288,r:1,s:345,o:"65"},{f:"2",t:0,d:0.22,i:"a",e:-1,r:1,s:-58,o:"65"},{f:"2",t:0,d:0.22,i:"e",e:"1.000000",r:1,s:"0.008621",o:"65"},{f:"2",t:0.22,d:0.15,i:"e",e:"1.000000",s:"1.000000",o:"65"},{f:"2",t:0.22,d:0.15,i:"e",e:"1.000000",r:1,s:"0.000000",o:"64"},{f:"2",t:1.07,d:0.11,i:"a",e:266,r:1,s:264,o:"110"},{f:"2",t:1.07,d:0.01,i:"e",e:"0.000000",s:"1.000000",o:"65"},{f:"2",t:1.07,d:6.14,i:"e",e:"1.000000",s:"1.000000",o:"64"},{f:"2",t:1.07,d:0.11,i:"e",e:"1.000000",r:1,s:"0.000000",o:"110"},{f:"2",t:1.18,d:6.05,i:"a",e:266,s:266,o:"110"},{f:"2",t:1.18,d:6.05,i:"e",e:"1.000000",s:"1.000000",o:"110"},{f:"2",t:7.21,d:0.15,i:"a",e:-36,r:1,s:-1,o:"64"},{f:"2",t:7.21,d:0.15,i:"e",e:"0.000000",s:"1.000000",o:"64"},{f:"2",t:7.23,d:0.15,i:"a",e:265,s:266,o:"110"},{f:"2",t:7.23,d:0.15,i:"e",e:"0.000000",s:"1.000000",o:"110"}],f:30}},o:"63"},{x:4,p:"600px",c:"#FFFFFF",onSceneTimelineCompleteActions:[{type:1,transition:2,sceneSymbol:1}],v:{"148":{c:940,d:350,I:"Solid",J:"Solid",K:"Solid",L:"Solid",M:1,bF:"147",N:1,A:"#A0A0A0",x:"visible",j:"absolute",B:"#A0A0A0",k:"div",O:1,P:1,z:"1",C:"#A0A0A0",D:"#A0A0A0",a:0,b:0},"180":{o:"content-box",h:"2",x:"visible",a:0,q:"100% 100%",b:0,j:"absolute",r:"inline",c:940,k:"div",z:"1",d:350,bF:"179"},"84":{o:"content-box",h:"15",x:"visible",a:580,q:"100% 100%",b:-70,j:"absolute",r:"inline",c:414,k:"div",z:"13",d:418,e:"0.008621"},"147":{k:"div",x:"visible",c:940,d:350,z:"19",a:0,j:"absolute",b:0},"114":{aU:8,G:"#0E4075",c:442,aV:8,r:"inline",d:77,e:"0.000000",s:"TrebuchetMS,'Trebuchet MS','Lucida Grande',Tahoma,Arial,Sans-Serif",t:17,Z:"break-word",v:"bold",w:"Viewpath gives our dispersed teams a secure way to collaborate and provide visibility to key stakeholders.",A:"#0E4075",x:"visible",j:"absolute",k:"div",y:"preserve",B:"#0E4075",C:"#0E4075",z:"16",aS:8,D:"#0E4075",aT:8,a:123,b:144},"179":{k:"div",x:"visible",c:940,d:350,z:"1",a:0,j:"absolute",b:0},"182":{o:"content-box",h:"3",x:"visible",a:0,q:"100% 100%",b:0,j:"absolute",r:"inline",c:940,k:"div",z:"3",d:350,bF:"179"},"149":{o:"content-box",h:"0",x:"visible",a:2,q:"100% 100%",b:0,j:"absolute",r:"inline",c:934,k:"div",z:"2",d:15,bF:"147"},"181":{o:"content-box",h:"1",a:0,x:"visible",q:"100% 100%",b:0,j:"absolute",r:"inline",c:940,k:"div",z:"2",d:350,bF:"179",e:"0.350000"},"83":{o:"content-box",h:"14",x:"visible",a:580,q:"100% 100%",b:10,j:"absolute",r:"inline",c:335,k:"div",z:"14",d:338,e:"0.000000"}},n:"Scene4",T:{kTimelineDefaultIdentifier:{d:8.09,i:"kTimelineDefaultIdentifier",n:"Main Timeline",a:[{f:"2",t:0,d:0.22,i:"e",e:"1.000000",r:1,s:"0.008621",o:"84"},{f:"2",t:0,d:0.22,i:"a",e:580,r:1,s:580,o:"84"},{f:"2",t:0,d:0.22,i:"b",e:10,r:1,s:-70,o:"84"},{f:"2",t:0,d:0.22,i:"d",e:338,r:1,s:418,o:"84"},{f:"2",t:0,d:0.22,i:"c",e:335,r:1,s:414,o:"84"},{f:"2",t:0.22,d:0.15,i:"e",e:"1.000000",r:1,s:"0.000000",o:"83"},{f:"2",t:0.22,d:0.15,i:"e",e:"1.000000",s:"1.000000",o:"84"},{f:"2",t:1.07,d:0.11,i:"a",e:131,r:1,s:123,o:"114"},{f:"2",t:1.07,d:6.15,i:"e",e:"1.000000",s:"1.000000",o:"83"},{f:"2",t:1.07,d:0.01,i:"e",e:"0.000000",s:"1.000000",o:"84"},{f:"2",t:1.07,d:0.11,i:"e",e:"1.000000",r:1,s:"0.000000",o:"114"},{f:"2",t:1.18,d:6.06,i:"a",e:131,s:131,o:"114"},{f:"2",t:1.18,d:6.06,i:"e",e:"1.000000",s:"1.000000",o:"114"},{f:"2",t:7.22,d:0.15,i:"a",e:519,r:1,s:580,o:"83"},{f:"2",t:7.22,d:0.15,i:"e",e:"0.000000",s:"1.000000",o:"83"},{f:"2",t:7.24,d:0.15,i:"a",e:122,s:131,o:"114"},{f:"2",t:7.24,d:0.15,i:"e",e:"0.000000",s:"1.000000",o:"114"}],f:30}},o:"82"},{x:5,p:"600px",c:"#FFFFFF",onSceneTimelineCompleteActions:[{type:1,transition:2,sceneSymbol:1}],v:{"161":{o:"content-box",h:"0",x:"visible",a:2,q:"100% 100%",b:0,j:"absolute",r:"inline",c:934,k:"div",z:"2",d:15,bF:"159"},"184":{o:"content-box",h:"2",x:"visible",a:0,q:"100% 100%",b:0,j:"absolute",r:"inline",c:940,k:"div",z:"1",d:350,bF:"183"},"115":{aU:8,G:"#0E4075",c:440,aV:8,r:"inline",d:73,e:"0.000000",s:"TrebuchetMS,'Trebuchet MS','Lucida Grande',Tahoma,Arial,Sans-Serif",t:17,Z:"break-word",v:"bold",w:"With Viewpath it\u2019s easier than ever to stay focused on time-critical activities among multiple event plans.",j:"absolute",x:"visible",k:"div",y:"preserve",z:"19",aS:8,aT:8,a:221,b:144},"183":{k:"div",x:"visible",c:940,d:350,z:"1",a:0,j:"absolute",b:0},"160":{c:940,d:350,I:"Solid",J:"Solid",K:"Solid",L:"Solid",M:1,bF:"159",N:1,A:"#A0A0A0",x:"visible",j:"absolute",B:"#A0A0A0",k:"div",O:1,P:1,z:"1",C:"#A0A0A0",D:"#A0A0A0",a:0,b:0},"105":{o:"content-box",h:"16",x:"visible",a:46,q:"100% 100%",b:8,j:"absolute",r:"inline",c:218,k:"div",z:"17",d:344,e:"0.000000"},"186":{o:"content-box",h:"3",x:"visible",a:0,q:"100% 100%",b:0,j:"absolute",r:"inline",c:940,k:"div",z:"3",d:350,bF:"183"},"159":{k:"div",x:"visible",c:940,d:350,z:"20",a:0,j:"absolute",b:0},"185":{o:"content-box",h:"1",a:0,x:"visible",q:"100% 100%",b:0,j:"absolute",r:"inline",c:940,k:"div",z:"2",d:350,bF:"183",e:"0.350000"},"106":{o:"content-box",h:"17",x:"visible",a:-11,q:"100% 100%",b:-84,j:"absolute",r:"inline",c:276,k:"div",z:"16",d:436,e:"0.008621"}},n:"Scene5",T:{kTimelineDefaultIdentifier:{d:8.11,i:"kTimelineDefaultIdentifier",n:"Main Timeline",a:[{f:"2",t:0,d:0.22,i:"e",e:"1.000000",r:1,s:"0.008621",o:"106"},{f:"2",t:0,d:0.22,i:"a",e:46,r:1,s:-11,o:"106"},{f:"2",t:0,d:0.22,i:"b",e:8,r:1,s:-84,o:"106"},{f:"2",t:0,d:0.22,i:"d",e:344,r:1,s:436,o:"106"},{f:"2",t:0,d:0.22,i:"c",e:218,r:1,s:276,o:"106"},{f:"2",t:0.22,d:0.15,i:"e",e:"1.000000",r:1,s:"0.000000",o:"105"},{f:"2",t:0.22,d:0.15,i:"e",e:"1.000000",s:"1.000000",o:"106"},{f:"2",t:1.07,d:0.11,i:"a",e:219,r:1,s:221,o:"115"},{f:"2",t:1.07,d:6.17,i:"e",e:"1.000000",s:"1.000000",o:"105"},{f:"2",t:1.07,d:0.01,i:"e",e:"0.000000",s:"1.000000",o:"106"},{f:"2",t:1.07,d:0.11,i:"e",e:"1.000000",r:1,s:"0.000000",o:"115"},{f:"2",t:1.18,d:6.08,i:"a",e:219,s:219,o:"115"},{f:"2",t:1.18,d:6.08,i:"e",e:"1.000000",s:"1.000000",o:"115"},{f:"2",t:7.24,d:0.15,i:"a",e:80,r:1,s:46,o:"105"},{f:"2",t:7.24,d:0.15,i:"e",e:"0.000000",s:"1.000000",o:"105"},{f:"2",t:7.26,d:0.15,i:"a",e:108,s:219,o:"115"},{f:"2",t:7.26,d:0.15,i:"e",e:"0.000000",s:"1.000000",o:"115"}],f:30}},o:"104"},{x:6,p:"600px",c:"#FFFFFF",onSceneTimelineCompleteActions:[{type:1,transition:2,sceneOid:"18"}],v:{"187":{k:"div",x:"visible",c:940,d:350,z:"1",a:0,j:"absolute",b:0},"190":{o:"content-box",h:"3",x:"visible",a:0,q:"100% 100%",b:0,j:"absolute",r:"inline",c:940,k:"div",z:"3",d:350,bF:"187"},"94":{o:"content-box",h:"18",x:"visible",a:623,q:"100% 100%",b:10,j:"absolute",r:"inline",c:252,k:"div",z:"17",d:350,e:"0.000000"},"157":{c:940,d:350,I:"Solid",J:"Solid",K:"Solid",L:"Solid",M:1,bF:"156",N:1,A:"#A0A0A0",x:"visible",j:"absolute",B:"#A0A0A0",k:"div",O:1,P:1,z:"1",C:"#A0A0A0",D:"#A0A0A0",a:0,b:0},"189":{o:"content-box",h:"1",a:0,x:"visible",q:"100% 100%",b:0,j:"absolute",r:"inline",c:940,k:"div",z:"2",d:350,bF:"187",e:"0.350000"},"156":{k:"div",x:"visible",c:940,d:350,z:"20",a:0,j:"absolute",b:0},"95":{o:"content-box",h:"19",x:"visible",a:623,q:"100% 100%",b:-66,j:"absolute",r:"inline",c:307,k:"div",z:"16",d:426,e:"0.008621"},"188":{o:"content-box",h:"2",x:"visible",a:0,q:"100% 100%",b:0,j:"absolute",r:"inline",c:940,k:"div",z:"1",d:350,bF:"187"},"116":{b:144,z:"19",K:"None",c:388,L:"None",d:69,aS:8,M:0,e:"0.000000",N:0,aT:8,O:0,aU:8,P:0,aV:8,j:"absolute",k:"div",A:"#0E4075",B:"#0E4075",Z:"break-word",r:"inline",C:"#0E4075",s:"TrebuchetMS,'Trebuchet MS','Lucida Grande',Tahoma,Arial,Sans-Serif",D:"#0E4075",t:17,v:"bold",G:"#0E4075",w:"Viewpath streamlines our group communication with real-time status reports and dashboards.",x:"visible",I:"None",a:148,y:"preserve",J:"None"},"158":{o:"content-box",h:"0",x:"visible",a:2,q:"100% 100%",b:0,j:"absolute",r:"inline",c:934,k:"div",z:"2",d:15,bF:"156"}},n:"Scene6",T:{kTimelineDefaultIdentifier:{d:8.08,i:"kTimelineDefaultIdentifier",n:"Main Timeline",a:[{f:"2",t:0,d:0.22,i:"e",e:"1.000000",r:1,s:"0.008621",o:"95"},{f:"2",t:0,d:0.22,i:"a",e:623,r:1,s:623,o:"95"},{f:"2",t:0,d:0.22,i:"b",e:10,r:1,s:-66,o:"95"},{f:"2",t:0,d:0.22,i:"d",e:350,r:1,s:426,o:"95"},{f:"2",t:0,d:0.22,i:"c",e:252,r:1,s:307,o:"95"},{f:"2",t:0.22,d:0.15,i:"e",e:"1.000000",s:"1.000000",o:"95"},{f:"2",t:0.22,d:0.15,i:"e",e:"1.000000",r:1,s:"0.000000",o:"94"},{f:"2",t:1.07,d:0.11,i:"a",e:131,r:1,s:148,o:"116"},{f:"2",t:1.07,d:0.01,i:"e",e:"0.000000",s:"1.000000",o:"95"},{f:"2",t:1.07,d:6.14,i:"e",e:"1.000000",s:"1.000000",o:"94"},{f:"2",t:1.07,d:0.11,i:"e",e:"1.000000",r:1,s:"0.000000",o:"116"},{f:"2",t:1.18,d:6.05,i:"a",e:131,s:131,o:"116"},{f:"2",t:1.18,d:6.05,i:"e",e:"1.000000",s:"1.000000",o:"116"},{f:"2",t:7.21,d:0.15,i:"a",e:594,r:1,s:623,o:"94"},{f:"2",t:7.21,d:0.15,i:"e",e:"0.000000",s:"1.000000",o:"94"},{f:"2",t:7.23,d:0.15,i:"a",e:169,s:131,o:"116"},{f:"2",t:7.23,d:0.15,i:"e",e:"0.000000",s:"1.000000",o:"116"}],f:30}},o:"93"}];
	
	var javascripts = [];
	
	var functions = {};
	var javascriptMapping = {};
	for(var i = 0; i < javascripts.length; i++) {
		try {
			javascriptMapping[javascripts[i].identifier] = javascripts[i].name;
			eval("functions." + javascripts[i].name + " = " + javascripts[i].source);
		} catch (e) {
			hypeDoc.log(e);
			functions[javascripts[i].name] = (function () {});
		}
	}
	
	hypeDoc.setAttributeTransformerMapping(attributeTransformerMapping);
	hypeDoc.setResources(resources);
	hypeDoc.setScenes(scenes);
	hypeDoc.setJavascriptMapping(javascriptMapping);
	hypeDoc.functions = functions;
	hypeDoc.setCurrentSceneIndex(0);
	hypeDoc.setMainContentContainerID(mainContainerID);
	hypeDoc.setResourcesFolderName(resourcesFolderName);
	hypeDoc.setShowHypeBuiltWatermark(0);
	hypeDoc.setShowLoadingPage(true);
	hypeDoc.setDrawSceneBackgrounds(false);
	hypeDoc.setGraphicsAcceleration(true);
	hypeDoc.setDocumentName(documentName);

	HYPE.documents[documentName] = hypeDoc.API;
	document.getElementById(mainContainerID).setAttribute("HYPE_documentName", documentName);

	hypeDoc.documentLoad(this.body);
}());

