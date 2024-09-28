const s=document.querySelector(".secN");
const m=document.querySelector(".minN");
const h=document.querySelector(".hourN");

function Time(){
	let currentD=new Date();

	let sec=currentD.getSeconds();
	let secDeg=((sec/60)*360)+90;

	s.style.transform=`rotate(${secDeg}deg)`;

	let min=currentD.getMinutes();
	let minDeg=((min/60)*360)+90;

	m.style.transform=`rotate(${minDeg}deg)`;
	
	let hr=currentD.getHours();
	let hrDig=((hr/12)*360)+90;

	h.style.transform=`rotate(${hrDig}deg)`;

}
setInterval(Time,1000);