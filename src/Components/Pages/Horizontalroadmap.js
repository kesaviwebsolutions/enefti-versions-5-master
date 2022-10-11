import React from 'react';
import "./Roadmap.css";
import $ from 'jquery'; 

$(function(){
	var inputs = $('.input');
	var paras = $('.description-flex-container').find('p');
	inputs.click(function(){
		var t = $(this),
				ind = t.index(),
				matchedPara = paras.eq(ind);
		
		t.add(matchedPara).addClass('active');
		inputs.not(t).add(paras.not(matchedPara)).removeClass('active');
	});
});

function Horizontalroadmap() {
  return (
   <>
   <div style={{backgroundColor:"black",color:"white",padding:"3rem"}}>

<h1>XAUS NFT ROADMAP  <span>2022</span></h1>

<div class="flex-parent">
	<div class="input-flex-container">

		<div class="input">
			<span data-year="jan" data-info=""></span>
		</div>
		<div class="input">
			<span data-year="feb" data-info=""></span>
		</div>
		<div class="input active">
			<span data-year="march" data-info="chocolate chip cookie"></span>
		</div>
		<div class="input">
			<span data-year="april" data-info="Jeep"></span>
		</div>
		<div class="input">
			<span data-year="may" data-info="leaf blower"></span>
		</div>
		<div class="input">
			<span data-year="june" data-info="magnetic stripe card"></span>
		</div>
		<div class="input">
			<span data-year="july" data-info="wireless LAN"></span>
		</div>
		<div class="input">
			<span data-year="aug" data-info="flash memory"></span>
		</div>
		<div class="input">
			<span data-year="sep" data-info="World Wide Web"></span>
		</div>
		<div class="input">
			<span data-year="oct" data-info=""></span>
		</div>
    <div class="input">
			<span data-year="nov" data-info=""></span>
		</div>
    <div class="input">
			<span data-year="dec" data-info=""></span>
		</div>
	</div>
	<div class="description-flex-container">
		{/* <p>And future Call of Duty players would thank them.</p>
		<p>Because every kid should get to be Tarzan for a day.</p>
		<p class="active">And the world rejoiced.</p>
		<p>Because building roads is inconvenient.</p>
		<p>Ain’t nobody got time to rake.</p>
		<p>Because paper currency is for noobs.</p>
		<p>Nobody likes cords. Nobody.</p>
		<p>Brighter than glow memory.</p>
		<p>To capitalize on an as-yet nascent market for cat photos.</p>
		<p>Because organic search rankings take work.</p> */}
	</div>
</div>
</div>


{/* <div style="position: absolute; bottom: 40px; right: 10px; font-size: 12px">
	<a href="https://codepen.io/cjl750/pen/XMyRoB" target="_blank">original version with slinky mobile menu</a></div>
<div style="position: absolute; bottom: 15px; right: 10px; font-size: 12px">
	<a href="https://codepen.io/cjl750/pen/wdVxzV" target="_blank">alternate version with custom range input</a></div>
<div style="position: absolute; bottom: 15px; left: 10px; font-size: 18px; font-weight: bold">
	<a href="https://codepen.io/cjl750/pen/MXvYmg" target="_blank">version 4: pure CSS!</a></div> */}

   </>
  )
}

export default Horizontalroadmap;
