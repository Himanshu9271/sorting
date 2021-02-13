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
    var algo=document.querySelector('select').value;
    if(algo=="bubble"){
        bubble_sort();
    }
    else if(algo=="insertion"){
        insertionSort();
    }
    
    
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

async function insertionSort()  
{  
    var i, key, j;  
    for (i = 1; i < arrSize; i++) 
    {  
        c.fillStyle='#ff2800';
        
        key = arr[i];  
        j = i - 1;  
        
        
        c.fillRect((rectWidth+rectSpacing)*i,canvas.height,rectWidth,-arr[i]);
        while (j >= 0 && arr[j] > key) 
        {  
            arr[j + 1] = arr[j];  
            j = j - 1;
            c.fillStyle='#ff2800';
            c.fillRect((rectWidth+rectSpacing)*j,canvas.height,rectWidth,-arr[j]);
            //c.fillRect((rectWidth+rectSpacing)*(j+1),canvas.height,rectWidth,-arr[j+1]);
            await sleep(10);
            c.fillStyle='#FEE715FF';
            c.fillRect((rectWidth+rectSpacing)*j,canvas.height,rectWidth,-arr[j]);
            j--;
        }  
        arr[j + 1] = key;
        refresh();
          
    }  
}  
