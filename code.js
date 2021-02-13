var canvas = document.querySelector('canvas');
var c = canvas.getContext('2d');
canvas.height=window.innerHeight-50;
canvas.width=window.innerWidth-50;

c.fillStyle='#FEE715FF';

var arr=[];
var input=document.getElementById("sizeOfArr");
var arrSize=50;
var rectWidth=Number(canvas.width/arrSize)*0.9;
var rectSpacing=Number(canvas.width/arrSize)*0.1;


function sleep(duration) {
	return new Promise(resolve => {
		setTimeout(() => {
			resolve()
		}, duration )
	})
}

function randomize(){
    
    if(input.value!=false){
        arrSize=Number(input.value);
        rectWidth=Number(canvas.width/arrSize)*0.9;
        rectSpacing=Number(canvas.width/arrSize)*0.1;
    }
    c.clearRect(0,0,canvas.width,canvas.height);
    var i=0;
    for(var x=0;x<arrSize;x++){
        arr[i]=Math.random()*canvas.height;
        
        c.fillRect((rectWidth+rectSpacing)*x,canvas.height,rectWidth,-arr[i]);
        i++;
    }
}
// helper function to call after each swap
function refresh(){
    var i=0;
    
    c.clearRect(0,0,canvas.width,canvas.height);
    c.fillStyle='#FEE715FF';
    for(var x=0;x<arrSize;x++){
        c.fillRect((rectWidth+rectSpacing)*x,canvas.height,rectWidth,-arr[i]);
        i++;
    }
}
//swap function
function swap( a,  b){
    c.fillStyle='#ff2800';
    c.fillRect((rectWidth+rectSpacing)*a,canvas.height,rectWidth,-arr[a]);
    c.fillRect((rectWidth+rectSpacing)*b,canvas.height,rectWidth,-arr[b]);
    
    var temp;
    temp=arr[a];
    arr[a]=arr[b];
    arr[b]=temp;
}
function sort_arr(){
    bubble_sort();
    //arr.sort();
    refresh();
    
}
async function bubble_sort(){
    
    for(var i=0;i<arrSize;i++){
        for(var j=i;j<arrSize;j++){
            if(arr[i]>arr[j]){
                swap(i,j);
                await sleep(10);
                
                
                refresh();
            }
        }
    }
}
