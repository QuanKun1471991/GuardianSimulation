_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[21],{"0rWx":function(e,t,n){"use strict";n.r(t);var a=n("mwIZ"),s=n.n(a),o=(n("pjuD"),n("rR1Q")),c=n.n(o),r=n("q1tI"),l=n.n(r),i=n("/MKj"),u=(n("VX7l"),n("cOpH")),d=n("c4LT"),m=n("y47u"),f=n("4UuZ"),b=n("pq6S"),p=n("FZsM"),g=n("lbLP"),h=n("NXWm"),O=n("yN4R"),w=n("7aiV"),S=n("RtB9"),j=n("IcN4"),k=n("a6RD"),_=n.n(k),v=n("RcwY"),E=l.a.createElement,P=_()((function(){return Promise.all([n.e(0),n.e(1),n.e(13)]).then(n.bind(null,"IH2A"))}),{ssr:!1,loadableGenerated:{webpack:function(){return["IH2A"]},modules:["components/BaseMap"]}}),N=_()((function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(16)]).then(n.bind(null,"aWHX"))}),{ssr:!1,loadableGenerated:{webpack:function(){return["aWHX"]},modules:["components/Layers/Vessel"]}}),R=_()((function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(14)]).then(n.bind(null,"OIZf"))}),{ssr:!1,loadableGenerated:{webpack:function(){return["OIZf"]},modules:["components/Layers/Port"]}}),I=_()((function(){return Promise.all([n.e(0),n.e(1),n.e(15)]).then(n.bind(null,"ZgI7"))}),{ssr:!1,loadableGenerated:{webpack:function(){return["ZgI7"]},modules:["components/Layers/SelectedFeature"]}}),V=_()((function(){return Promise.all([n.e(9),n.e(0),n.e(1),n.e(2),n.e(11)]).then(n.bind(null,"45+l"))}),{ssr:!1,loadableGenerated:{webpack:function(){return["45+l"]},modules:["components/Layers/SimulationRoutes"]}}),y=_()((function(){return Promise.all([n.e(1),n.e(2),n.e(17)]).then(n.bind(null,"vv6I"))}),{ssr:!1,loadableGenerated:{webpack:function(){return["vv6I"]},modules:["components/SimulationResults"]}}),M=_()((function(){return Promise.all([n.e(1),n.e(2),n.e(12)]).then(n.bind(null,"VNe4"))}),{ssr:!1,loadableGenerated:{webpack:function(){return["VNe4"]},modules:["components/VesselSettings"]}}),L={fetching:"Fetching Cargo Data ",fetched:"Fetched Cargo Data successfully"},F={fetching:"Fetching Port Data",fetched:"Fetched Port Data successfully"},T=function(){Object(u.a)({key:"vessel",reducer:m.a}),Object(d.a)({key:"vessel",saga:b.a,mode:g.a.RESTART_ON_REMOUNT}),Object(u.a)({key:"port",reducer:f.a}),Object(d.a)({key:"port",saga:p.a,mode:g.a.RESTART_ON_REMOUNT});var e=Object(i.d)(h.a),t=e.data,n=e.selectedVessel,a=Object(i.d)(O.a).data,o=Object(i.d)(v.a).isCollapsed,k=Object(i.c)(),_=Object(r.useState)(null),T=_[0],Z=_[1],G=Object(r.useState)(null),C=G[0],D=G[1],X=Object(r.useState)(!1),A=X[0],H=X[1],W=n.name,x=n.simulationRoutes.show,U=Object(r.useCallback)((function(e){var t=T.getView(),n=t.getZoom();t.animate({zoom:n>=6.5?n:6.5,center:e,duration:600})}),[T]);Object(r.useEffect)((function(){k(Object(w.c)({onStart:function(){c.a.info({message:"Info",description:L.fetching})},onSuccess:function(){c.a.success({message:"Success",description:L.fetched})},onError:function(e){c.a.error({message:"Error",description:s()(e,"data.message")})}})),k(Object(S.c)({onStart:function(){c.a.info({message:"Info",description:F.fetching})},onSuccess:function(){c.a.success({message:"Success",description:F.fetched})},onError:function(e){c.a.error({message:"Error",description:s()(e,"data.message")})}}))}),[k]),Object(r.useEffect)((function(){T&&T.on("click",(function(e){var t=e.pixel,n=T.getFeaturesAtPixel(t)[0];if(n){if(n.get("click_disabled")||!n.get("name"))return null;U(e.coordinate),D(n),H(!0),k(w.b.setState({field:"selectedVessel",name:n.get("name"),imo:n.get("imo"),mmsi:n.get("mmsi")}))}else H(!1)}))}),[T,U]);return E("div",{className:"root"},E("div",{id:"screenshot"},E(P,{guardianMap:T,onSetMap:Z}),E(j.a,{isCollapsed:o,placement:"bottom",visible:A,title:"Simulation Points"},E(y,{selectedVessel:n}))),T&&E(l.a.Fragment,null,E(N,{selectedVessel:null,vesselList:t,guardianMap:T}),E(R,{selectedPort:null,portList:a,guardianMap:T}),E(I,{selectedFeature:C,guardianMap:T}),E(V,{guardianMap:T,selectedVessel:n}),E(M,{show:W,handleClickSimulation:function(){k(w.b.setState({field:"selectedVessel",simulationRoutes:{data:[],loading:!1,update:!1,error:null,show:!x}}))}})))};t.default=Object(r.memo)(T)},"4vLr":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dashboard",function(){return n("0rWx")}])}},[["4vLr",3,4,0,5,6,8,7]]]);