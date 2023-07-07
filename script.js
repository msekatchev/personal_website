var x=1;



function photoHide(){
		 document.getElementById("hideThis").style.display="none";
	};


function displayALL(){
		var divsToHide = document.getElementsByClassName("dropDown");

    	for(var i = 0; i < divsToHide.length; i++)
    		{
    		divsToHide[i].style.display="block";
   			 }
   		document.getElementById("displayAllButton").style.display="none";
	}


function displayFunction(i){
		
		var k = document.getElementsByClassName("dropDown"+i);

		if(x===1){
		    	for(var i = 0; i < k.length; i++)
		    		{
		    		k[i].style.display="none";

		   			 }
		   			 x=0;
		   			 
		   			}

	   	else{
	    	for(var i = 0; i < k.length; i++)
	    		{
	    		k[i].style.display="block";

	   			 }
	   			 x=1;
	   			  
	   			}

   		

	}

	//<div id="displayAllButton"><center>
	//	<button style="width:70%; line-height:100%; font-size:80%" class="category" id="category" onClick="displayALL();"></center></div>
	//		<div>Click if on mobile</div></button></center></div>
