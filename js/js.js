var fin = true;
window.onload=function(){
	//鼠标滑过
 	var works = document.getElementById('works');
	var lis = works.getElementsByTagName('a');
	for(var i=0;i<lis.length;i++){
		lis[i].onmouseover = function(){
			this.getElementsByClassName('zhezhao')[0].style.display = 'block';
		};
		lis[i].onmouseout = function(){
			this.getElementsByClassName('zhezhao')[0].style.display = 'none';
		};
	}
	
	//点击切换
	side();
	
	//980下的列表
	dis();
};	


//顶部导航
window.onscroll = loada;

function loada(){
		var nav = document.getElementById("nav1");
		var t = document.documentElement.scrollTop || document.body.scrollTop;
		var logo1 = nav.getElementsByTagName('a')[0];
		var ul = nav.getElementsByTagName('ul')[0];
		if(fin && t >= 100){
			fin = false;
			nav.className = 'nav1';
			logo1.className = 'logo1';
			ul.className = 'navbar1';
			fin = true;
		}else if(fin && t < 100){
			nav.className = ' ';
			logo1.className = 'logo';
			ul.className = 'navbar';
		}
	}
	

function side(){
	var liss = document.getElementById('test').getElementsByTagName('li');
	
	for(var i =0;i<liss.length;i++){
		liss[i].index = i;
		liss[i].onmouseover = function(){
			this.style.opacity = '1';
		};
		liss[i].onmouseout = function(){
			this.style.opacity = '0.5';
		};
		liss[i].onclick = function(){
			var ii = this.index + 1;
			this.style.opacity = '1';
			xunhuan();
			document.getElementById('div_' + ii).style.display = 'block';
			
		};
	}
}

function xunhuan(){
	var tests = document.getElementById('test').getElementsByClassName('test_text');
	for(var a=0;a<tests.length;a++){
		tests[a].style.display = 'none';
	}
}


function dis(){
	var disnavbar = document.getElementById("disnavbar");
	var disul = document.getElementById('disul');
	var h = document.body.scrollHeight;
	disul.style.height = h + 'px';

	var fan = true;
	disnavbar.onclick = function(){
		if(fan){
			disul.style.display = 'block';
			this.className = 'disnavbar fa fa-times fa-2x';
			fan = false;
		}else{
			disul.style.display = 'none';
			this.className = 'disnavbar fa fa-bars fa-2x';
			fan = true;
		}
		
	};
}


