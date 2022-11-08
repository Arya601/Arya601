 function calc() {
		
		let Sred = 0, Sgreen = 0, Sblue = 0, Sblack = 0, Swhite = 0,checkbox28;
		var degreeArray =[],Array=[];
		for(let i = 0; i < 30; i++)
		{
			/*if(!=27)
			{*/
				degreeArray[i] =document.querySelector('input[name = "degree'+ (i+1) +'"]:checked').value;
				
				Array=degreeArray[i].split("_");
				Sred += Number(Array[0]); 
				Sgreen += Number(Array[1]); 
				Sblue += Number(Array[2]); 
				Sblack += Number(Array[3]); 
				Swhite += Number(Array[4]); 
			/*}
			else
			{
				 degreeArray[i] = document.querySelectorAll('input[name="degree'+ (i+1) +'"]:checked');
				 degreeArray[i].forEach((checkbox) => {
					checkbox28 = checkbox.value;
					Array=checkbox28.split("_");
					Sred += Number(Array[0]); 
					Sgreen += Number(Array[1]); 
					Sblue += Number(Array[2]); 
					Sblack += Number(Array[3]); 
					Swhite += Number(Array[4]); 
					});
			}*/
			
		}
            document.getElementById("sred").value = Sred;
            document.getElementById("sgreen").value = Sgreen;
            document.getElementById("sblue").value = Sblue;
            document.getElementById("sblack").value = Sblack;
            document.getElementById("swhite").value = Swhite;
        }