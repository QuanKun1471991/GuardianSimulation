var WRAP;void 0===WRAP&&(WRAP={}),WRAP.Core=function(){return{version:"2.0",timeZone:null,default_locale:"en",locale:null,locale_path:"./pri/wrap/conf/locale",currentTime:function(){return new WRAP.Core.DateTime},currentTimeScale:function(){return void 0===this._time_scale?1:this._time_scale},setCustomTime:function(e,t){this._custome_time=null;var i=new WRAP.Core.DateTime;this._custome_time=i,this._time_diff=i.diff(new WRAP.Core.DateTime(e)),this._time_scale=void 0===t?1:t},resetTime:function(e){this._custome_time=null,this._time_diff=0,this._time_scale=1},setTimezone:function(e){e&&"utc"==e.toLowerCase()&&(e=null),this.timezone=e},setLocale:function(e){function t(e,i){if(i)for(var s in i)e[s]&&!Array.isArray(e[s])&&"object"==typeof i[s]?t(e[s],i[s]):e[s]=i[s]}if(!this._default_locale){var i=this.locale_path+"/"+this.default_locale+".json",s=new XMLHttpRequest;s.open("GET",i,!1),s.send(null),200===s.status||0===s.status?this._default_locale=JSON.parse(s.responseText):(this._default_locale={},console.warn("default locale setting ("+i+") Could not load."))}if(this.locale!=e){this.locale=e,this._locale={},t(this._locale,this._default_locale);var i=this.locale_path+"/"+e+".json",s=new XMLHttpRequest;if(s.open("GET",i,!1),s.send(null),200===s.status||0===s.status){var n=JSON.parse(s.responseText);t(this._locale,n)}else console.error("locale setting ("+i+") Could not load.")}},timeText:function(e,t){this.locale||this.setLocale("en");var i=this._locale&&this._locale.datetime&&this._locale.datetime[t];return i?e.format(i,this.timezone):void console.error("WRAP.Core : invalid datetime format id("+t+")")},setCurrentTime:function(e){console.warn("This function is deprecated.\nPlease use setCustomTime() instead."),e&&e.text?this.setCustomTime(e.text(),1):this.resetTime()},getConfiguration:function(){return{locale:this._locale}}}}(),WRAP.Core.DateTime=function(){return function(e){if(e){if("Date"===Object.prototype.toString.call(e).slice(8,-1))this.date=e;else if(e.length>0){e=e.replace(/ +/g," ").replace(/:| |T|-|\//g,",");for(var t=[0,0,0,0,0,0,-1],i=[4,2,2,2,2,2,-1],s=0,n=0,o=0;o<e.length&&i[s]>0;o++){var a=e.charAt(o);isNaN(a)?","==a&&(s++,n=0):(i[s]==n&&(s++,n=0),t[s]=10*t[s]+parseInt(a),n++)}this.date=new Date(Date.UTC(t[0],t[1]-1,t[2],t[3],t[4],t[5]))}}else if(WRAP.Core._custome_time){var l=new Date,r=l.getTime()-WRAP.Core._custome_time.date.getTime();r*=WRAP.Core._time_scale,r+=1e3*WRAP.Core._time_diff,r+=10,this.date=new Date(WRAP.Core._custome_time.date.getTime()+r)}else this.date=new Date;this._padding=function(e,t){void 0==t&&(t=2);for(var i=""+e;i.length<t;)i="0"+i;return i},this.format=function(e,t){try{moment}catch(e){return void console.error("WRAP.Core.DateTime.format() require Moment.js. :"+e.description)}return(t?moment(this.date).tz(t):moment.utc(this.date)).format(e)},this.text=function(e){return e||(e="YYYYMMDDThhmmss"),e=e.replace(/YYYY/g,this._padding(this.date.getUTCFullYear(),4)),e=e.replace(/MM/g,this._padding(this.date.getUTCMonth()+1,2)),e=e.replace(/DD/g,this._padding(this.date.getUTCDate(),2)),e=e.replace(/HH/g,this._padding(this.date.getUTCHours(),2)),e=e.replace(/hh/g,this._padding(this.date.getUTCHours(),2)),e=e.replace(/mm/g,this._padding(this.date.getUTCMinutes(),2)),e=e.replace(/ss/g,this._padding(this.date.getUTCSeconds(),2))},this.add=function(e){this.date=new Date(this.date.getTime()+1e3*e)},this.diff=function(e){return parseInt((e.date.getTime()-this.date.getTime())/1e3)}}}(),WRAP.Core.Coordinates=function(e,t){this.lat=function(){return this._lat},this.lon=function(){return this._lon},this.latDegrees=function(){return this._lat/60},this.lonDegrees=function(){return this._lon/60},this._lat=parseFloat(e||0),this._lon=parseFloat(t||0),this._lon<-10800?this._lon+=21600:this._lon>=10800&&(this._lon-=21600)};
//# sourceMappingURL=../build/js/WRAP.Core-2.3.0.118-min.js.map