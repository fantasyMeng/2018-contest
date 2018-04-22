var dom=document.getElementById("view");
var ctx=dom.getContext("2d");

var width=ctx.canvas.width;
var height=ctx.canvas.height;

var box_width=width*0.8*0.25;
var margin_width=width*0.2*0.20;

var digital=new Array();
for ( var i = 0; i < 4; i++) {
	digital[i]=new Array();              //������ά����
	for ( var j = 0; j < 4; j++) {
		digital[i][j]=0;                 //�����鸳��ֵ
	}
}

document.onkeydown=function(event){
     var e = event || window.event || arguments.callee.caller.arguments[0];
     if(e && e.keyCode==37){                    //�����ƶ�
    	 for ( var i = 0; i <4; i++) {
    			var arr=new Array();
    			arr[0]=digital[0][i];
    			arr[1]=digital[1][i];
    			arr[2]=digital[2][i];
    			arr[3]=digital[3][i];
    			if (!checkDigital(arr)){
    				arr=changeDigital(arr);
    			}
    			digital[0][i]=arr[0];
    			digital[1][i]=arr[1];
    			digital[2][i]=arr[2];
    			digital[3][i]=arr[3];
    		}
    	 if (checkOver()) {
			alert("GAME OVER");
		}else{
			ctx.clearRect(0,0,width,height);
	    	createRandom();
	    	drawBack();
	    	drawDigital();
		}   	
     }
     if(e && e.keyCode==38){                  //�����ƶ�
    	 for ( var i = 0; i <4; i++) {
 			var arr=new Array();
 			arr[0]=digital[i][0];
 			arr[1]=digital[i][1];
 			arr[2]=digital[i][2];
 			arr[3]=digital[i][3];
 			if (!checkDigital(arr)){
 				arr=changeDigital(arr);
 			}
 			digital[i][0]=arr[0];
 			digital[i][1]=arr[1];
 			digital[i][2]=arr[2];
 			digital[i][3]=arr[3];
 		}
 	 if (checkOver()) {
			alert("GAME OVER");
		}else{
			ctx.clearRect(0,0,width,height);
			createRandom();
	    	drawBack();
	    	drawDigital();
		}   	
               }            
     if(e && e.keyCode==39){               //�����ƶ�
    	 for ( var i = 0; i <4; i++) {
    		 var arr=new Array();
 			arr[0]=digital[3][i];
 			arr[1]=digital[2][i];
 			arr[2]=digital[1][i];
 			arr[3]=digital[0][i];
 			if (!checkDigital(arr)){
 				arr=changeDigital(arr);
 			}
 			digital[3][i]=arr[0];
 			digital[2][i]=arr[1];
 			digital[1][i]=arr[2];
 			digital[0][i]=arr[3];
  		}
  	 if (checkOver()) {
 			alert("GAME OVER");
 		}else{
 			ctx.clearRect(0,0,width,height);
 			createRandom();
 	    	drawBack();
 	    	drawDigital();
 		}   	
     }
     if(e && e.keyCode==40){                //�����ƶ�
    	 for ( var i = 0; i <4; i++) {
  			var arr=new Array();
  			arr[0]=digital[i][3];
  			arr[1]=digital[i][2];
  			arr[2]=digital[i][1];
  			arr[3]=digital[i][0];
  			if (!checkDigital(arr)){
  				arr=changeDigital(arr);
  			}
  			digital[i][3]=arr[0];
  			digital[i][2]=arr[1];
  			digital[i][1]=arr[2];
  			digital[i][0]=arr[3];
  		}
  	 if (checkOver()) {
 			alert("GAME OVER");
 		}else{
 			ctx.clearRect(0,0,width,height);
 			createRandom();
 	    	drawBack();
 	    	drawDigital();
 		}   	
     }
}; 
function checkDigital(arr){                           //�ж������Ƿ��Ѱ����к�
	var flag=false;
	if (arr[0]==0&&arr[1]==0&&arr[2]==0&&arr[3]==0||
			arr[0]>0&&arr[1]==0&&arr[2]==0&&arr[3]==0||
			arr[0]>0&&arr[1]>0&&arr[2]==0&&arr[3]==0||
			arr[0]>0&&arr[1]>0&&arr[2]>0&&arr[3]==0||
			arr[0]>0&&arr[1]>0&&arr[2]>0&&arr[3]>0) {
		flag=true;
	}
	if (arr[0]==arr[1]&&arr[0]!=0||
		arr[1]==arr[2]&&arr[1]!=0||
		arr[2]==arr[3]&&arr[2]!=0||
		arr[3]==arr[4]&&arr[3]!=0
	) {
		flag=false;
	}
	return flag;
}
function changeDigital(arr){
		for ( var i = 0; i <3; i++) {
			if (arr[i]==0) {
				var temp=arr[i];
				arr[i]=arr[i+1];
				arr[i+1]=temp;
			}
			if (arr[i]==arr[i+1]&&arr[i]!=0) {
				arr[i]=arr[i]+arr[i+1];
				arr[i+1]=0;
			}		
		}
		if (checkDigital(arr)){
			return arr;
		}else{
			return changeDigital(arr);
		}
}
function checkOver(){
	for ( var i = 0; i < 4; i++) {
		for ( var j = 0; j < 4; j++) {
			if (digital[i][j]==0) {
			       return false;
			}
		}
	}
	return true;
}
function drawDigital(){
	for ( var i = 0; i < 4; i++) {
		for ( var j = 0; j < 4; j++) {
			if (digital[i][j]>0) {
				ctx.beginPath();
				ctx.textAlign="center";
				ctx.textBaseline="middle";
				ctx.fillStyle="red";
				ctx.font="40px Arial";
				x=margin_width+i*(box_width+margin_width)+box_width/2;
				y=margin_width+j*(box_width+margin_width)+box_width/2;
				ctx.fillText(digital[i][j],x,y);
			}
		}
	}
}
function createRandom(){
	var x=Math.round(Math.random()*3);
	var y=Math.round(Math.random()*3);
	if (digital[x][y]==0) {
		digital[x][y]=2;
	}else{
		createRandom();
	}
}
function drawBack(){
	ctx.beginPath();
	ctx.fillStyle="#f0d799";
	ctx.fillRect(0,0,width,height);
	for ( var i= 0; i <4; i++) {
		for ( var j = 0; j < 4; j++) {
			var c="";
			if(digital[i][j]==0){c="#D7C184 ";}
			if(digital[i][j]==2){c="#f5bb82 ";}
			if(digital[i][j]==4){c="#DBB280 ";}
			if(digital[i][j]==8){c="#E1C57A ";}
			if(digital[i][j]==16){c="#E8B173 ";}
			if(digital[i][j]==32){c="#F2A769 ";}
			if(digital[i][j]==64){c="#e08931 ";}
			if(digital[i][j]==128){c="#f27f0c ";}
			if(digital[i][j]==256){c="#f76063 ";}
			if(digital[i][j]==512){c="#e84648 ";}
			if(digital[i][j]==1024){c="#b03133 ";}
			if(digital[i][j]==2048){c="#fc080c ";}
			x=margin_width+i*(box_width+margin_width);
			y=margin_width+j*(box_width+margin_width);
			drawRect(x,y,c);
		}
	}
}

function drawRect(x,y,c){
	ctx.beginPath();
	ctx.fillStyle=c;
	ctx.moveTo(x,y);
	ctx.arcTo(x+box_width,y,x+box_width,y+1,margin_width*0.7);
	ctx.arcTo(x+box_width,y+box_width,x+box_width-1,y+box_width,margin_width*0.7);
	ctx.arcTo(x,y+box_width,x,y+box_width-1,margin_width*0.7);
	ctx.arcTo(x,y,x+1,y,margin_width*0.7);
	ctx.fill();	
}
createRandom();
drawBack();
drawDigital();