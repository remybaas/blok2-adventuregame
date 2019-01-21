
var knop1 = document.getElementById('button1');
var knop2 = document.getElementById('button2');
var knop3 = document.getElementById('button3');
var titel = document.getElementById('title');
var text = document.getElementById('description');
var item = document.getElementById('inventoryItem');


title.innerHTML = 'Hello you are back in 1943, there are Nazi zombies everywhere find the powerswitch and find your way out';


start();
function start() {
	document.getElementById('game-container').style.backgroundImage = "url('img/lobby1.jpg')";
	knop1.innerHTML ='Go to the balcony';
	knop1.onclick = lvl2;
	knop2.innerHTML ='go to the entrance'
	knop2.onclick = lvlentrance
	knop3.innerHTML = 'drink a bottle of wodka'
	knop3.onclick = lvlwonwodka

}
//-----------------------------------------------------------------------------------------------------------------------------------------------
function dead(){
console.log('dead');
	title.innerHTML ='dead!';
	document.getElementById('game-container').style.backgroundImage = "url('img/died.jpg')";
	document.body.style.backgroundSize='cover';
	knop1.style.display="none";
		knop1.innerHTML ='go to the next door!';
	knop2.style.display="none";
		knop2.innerHTML ='look over the balcony';
	knop3.style.display="none";
		knop3.innerHTML ='go back!';

}//===============================================================================================================================================

function chestfalse(){
console.log('ted');
	title.innerHTML ='';
	document.getElementById('game-container').style.backgroundImage = "url('img/chestwithted.png')";
	document.body.style.backgroundSize='cover';
	knop1.style.display="none";
		knop1.innerHTML ='go to the next door!';
	knop2.style.display="none";
		knop2.innerHTML ='look over the balcony';
	knop3.style.display="block";
		knop3.innerHTML ='go back!';

		knop3.onclick = function(){
		lvlalley();
	}

}
function chestfalseb(){
console.log('ted');
	title.innerHTML ='';
	document.getElementById('game-container').style.backgroundImage = "url('img/chestwithted.png')";
	document.body.style.backgroundSize='cover';
	knop1.style.display="none";
		knop1.innerHTML ='go to the next door!';
	knop2.style.display="none";
		knop2.innerHTML ='look over the balcony';
	knop3.style.display="block";
		knop3.innerHTML ='go back!';

		knop3.onclick = function(){
		lvl6();
	}

}
//===============================================================================================================================================

function powerswitch(){
console.log('level 2');
	title.innerHTML ='';
	document.getElementById('game-container').style.backgroundImage = "url('img/chestwithted.png')";
	document.body.style.backgroundSize='cover';
	knop1.style.display="none";
		knop1.innerHTML ='go to the next door!';
	knop2.style.display="none";
		knop2.innerHTML ='look over the balcony';
	knop3.style.display="block";
		knop3.innerHTML ='go back!';

}
//-----------================-------------------===================------------------==================-------------------=====================-----
function lvlteleport(){
console.log('level teleport')
		title.innerHTML ='wich way?';
	document.getElementById('game-container').style.backgroundImage = "url('img/teleport.jpg')";
	document.body.style.backgroundSize='cover';
	knop1.style.display="block";
		knop1.innerHTML ='turn on the POWERRRRRR';
	knop2.style.display="block";
		knop2.innerHTML ='Now We Can TELEPORT';
	knop3.style.display="none";
		knop3.innerHTML ='go back';


knop2.onclick = function(){
		lvlWON();
	}
}
//-------------------------------------------------------------------------------------------------------------------------------------------------
function lvlwon(){
console.log('level teleport')
		title.innerHTML ='wich way?';
	document.getElementById('game-container').style.backgroundImage = "url('img/won.jpg')";
	document.body.style.backgroundSize='cover';
	knop1.style.display="none";
		knop1.innerHTML ='turn on the POWERRRRRR';
	knop2.style.display="none";
		knop2.innerHTML ='Now We Can TELEPORT';
	knop3.style.display="none";
		knop3.innerHTML ='go back';


knop2.onclick = function(){
		lvlWON();
	}
}
//====================================================================================================================================================
function lvlwonwodka(){
console.log('wodka')
title.innerHTML = '<span style="color:#FF0000"> alcohol is always the answer</span>';

	document.getElementById('game-container').style.backgroundImage = "url('img/won.jpg')";
	document.body.style.backgroundSize='cover';
	knop1.style.display="none";
		knop1.innerHTML ='alcohol is always the answer';
	knop2.style.display="none";
		knop2.innerHTML ='';
	knop3.style.display="none";
		knop3.innerHTML ='';

}



function lvlentrance(){
console.log('level 2b');
	title.innerHTML ='wich way?';
	document.getElementById('game-container').style.backgroundImage = "url('img/ziproom.jpg')";
	document.body.style.backgroundSize='cover';
	knop1.style.display="block";
		knop1.innerHTML ='go to the next door!';
	knop2.style.display="block";
		knop2.innerHTML ='look behind you';
	knop3.style.display="none";
		knop3.innerHTML ='go back!';

	knop1.onclick = function(){
		lvlalley();
	} 
	knop2.onclick = function(){
		dead()
	}
	knop3.onclick = function(){
		start();
	}

	}
//=====================================================================================================================
function lvlalley(){
console.log('level 3b');
	title.innerHTML ='wich way?';
	document.getElementById('game-container').style.backgroundImage = "url('img/alley.jpg')";
	document.body.style.backgroundSize='cover';
	knop1.style.display="block";
		knop1.innerHTML ='go to the next door!';
	knop2.style.display="block";
		knop2.innerHTML ='hey there is a chest!';
	knop3.style.display="none";
		knop3.innerHTML ='go back!';

	knop1.onclick = function(){
		lvlgenerator();
	} 
	knop2.onclick = function(){
		chestfalse()
	}
	knop3.onclick = function(){
		lvlentrance();
	}

	}


//=====================================================================================================================
function lvlgenerator(){
console.log('level 4b');
	title.innerHTML ='wich way?';
	document.getElementById('game-container').style.backgroundImage = "url('img/generatorroom.jpg')";
	document.body.style.backgroundSize='cover';
	knop1.style.display="block";
		knop1.innerHTML ='go to the next door!';
	knop2.style.display="block";
		knop2.innerHTML ='hey there is a chest!';
	knop3.style.display="none";
		knop3.innerHTML ='go back!';

	knop1.onclick = function(){
		lvl6();
	} 
	knop2.onclick = function(){
		chestfalse()
	}
	knop3.onclick = function(){
		lvl2b();
	}

	}
//=====================================================================================================================


function lvl2(){
console.log('level 2');
	title.innerHTML ='wich way?';
	document.getElementById('game-container').style.backgroundImage = "url('img/balcony.jpg')";
	document.body.style.backgroundSize='cover';
	knop1.style.display="block";
		knop1.innerHTML ='go to the next door!';
	knop2.style.display="block";
		knop2.innerHTML ='look over the balcony';
	knop3.style.display="block";
		knop3.innerHTML ='go back!';

	knop1.onclick = function(){
		lvl3();
	} 
	knop2.onclick = function(){
		dead()
	}
	knop3.onclick = function(){
		start();
	}

	}
//====================================================================================================================================================
function lvl3(){
console.log('level 3')
	title.innerHTML ='wich way?';
	document.getElementById('game-container').style.backgroundImage = "url('img/room2a.jpg')";
	document.body.style.backgroundSize='cover';
	knop1.style.display="block";
		knop1.innerHTML ='go to the next door!';
	knop2.style.display="block";
		knop2.innerHTML ='rebuild the barricade';
	knop3.style.display="block";
		knop3.innerHTML ='go back!';

	knop1.onclick = function(){
		lvl4();
	}

	knop2.onclick = function(){
		dead();
	}

	knop3.onclick = function(){
		lvl2();
	}
}
//-----------------------------------------------------------------------------------------------------------------------------------------------------
function lvl4(){
console.log('level 4')
		title.innerHTML ='wich way?';
	document.getElementById('game-container').style.backgroundImage = "url('img/room 4.jpg')";
	document.body.style.backgroundSize='cover';
	knop1.style.display="block";
		knop1.innerHTML ='go to the next door!';
	knop2.style.display="block";
		knop2.innerHTML ='look for a chest';
	knop3.style.display="block";
		knop3.innerHTML ='go back!';

knop3.onclick = function(){
		lvl3();
	}
		knop1.onclick = function(){
		lvl5();
	}
}
//=====================================================================================================================================================
function lvl5(){
console.log('level 5')
		title.innerHTML ='wich way?';
	document.getElementById('game-container').style.backgroundImage = "url('img/room7.jpg')";
	document.body.style.backgroundSize='cover';
	knop1.style.display="block";
		knop1.innerHTML ='guess we need to go that way then?!';
	knop2.style.display="none";
		knop2.innerHTML ='look over the balcony';
	knop3.style.display="block";
		knop3.innerHTML ='go back!';

knop1.onclick = function(){
		lvl6();
	}
knop3.onclick = function(){
		lvl4();
	}
knop2.onclick = function(){
		dead();
	}
//----------------------------------------------------------------------------------------------------------------------------------------------
}
function lvl6(){
console.log('level 6')
		title.innerHTML ='wich way?';
	document.getElementById('game-container').style.backgroundImage = "url('img/theather.jpg')";
	document.body.style.backgroundSize='cover';
	knop1.style.display="block";
		knop1.innerHTML ='did you just find the powerswitch?';
	knop2.style.display="block";
		knop2.innerHTML ='maybe there s a chest?';
	knop3.style.display="block";
		knop3.innerHTML ='go back!';

knop1.onclick = function(){
		lvl7();
	}
knop3.onclick = function(){
		lvl5();
	}
knop2.onclick = function(){
		chestfalseb();
	}
}
//=============================================================================================================================================
function lvl7(){
console.log('level 7')
		title.innerHTML ='wich way?';
	document.getElementById('game-container').style.backgroundImage = "url('img/switch.jpg')";
	document.body.style.backgroundSize='cover';
	knop1.style.display="block";
		knop1.innerHTML ='dont turn on the power';
	knop2.style.display="block";
		knop2.innerHTML ='turn on the power';
	knop3.style.display="none";
		knop3.innerHTML ='go back';



knop1.onclick = function(){
		lvl8b();		
	}
knop2.onclick = function(){
		lvl8();
	}
knop3.onclick = function(){
		lvlteleport();
	}
}
//=====================================================================================================================================================
function lvl8(){
console.log('level 8')
		title.innerHTML ='wich way?';
	document.getElementById('game-container').style.backgroundImage = "url('img/teleport.jpg')";
	document.body.style.backgroundSize='cover';
	knop1.style.display="none";
		knop1.innerHTML ='';
	knop2.style.display="block";
		knop2.innerHTML ='USE THE TELEPORTER';
	knop3.style.display="none";
		knop3.innerHTML ='go back';

		

knop1.onclick = function(){
		lvl7();
	}
knop3.onclick = function(){
		lvl6();
	}
knop2.onclick = function(){
		lvlwon();
	}
}
//======================================================================================================================================================
function lvl8b(){
console.log('level 8b')
		title.innerHTML ='wich way?';
	document.getElementById('game-container').style.backgroundImage = "url('img/teleport.jpg')";
	document.body.style.backgroundSize='cover';
	knop1.style.display="none";
		knop1.innerHTML ='';
	knop2.style.display="block";
		knop2.innerHTML ='USE THE TELEPORTER';
	knop3.style.display="none";
		knop3.innerHTML ='go back';

		

knop1.onclick = function(){
		lvl7();
	}
knop3.onclick = function(){
		lvl6();
	}
knop2.onclick = function(){
		lvldeadb();
	}
}
function lvldeadb(){
console.log('level 8b')
		title.innerHTML ='wich way?';
	document.getElementById('game-container').style.backgroundImage = "url('img/dead.jpg')";
	document.body.style.backgroundSize='cover';
	knop1.style.display="none";
		knop1.innerHTML ='';
	knop2.style.display="block";
		knop2.innerHTML ='you didnt turn on the power';
	knop3.style.display="none";
		knop3.innerHTML ='go back';
	}
