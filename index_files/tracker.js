var htA=htA||[],hURL=hURL||"";(function(){var a=window.document,b=new Image(),c=hURL+"hotlinks.php";htA.push(["u",a.URL]);htA.push(["r",a.referrer]);htA.push(["t",new Date().getTime()]);function d(){var e="?",f;for(f=0;f<htA.length;f++){e+=htA[f][0]+"="+escape(htA[f][1])+"&"}return e.replace(/\&$/,"")}b.src=a.location.protocol+c+d()})();