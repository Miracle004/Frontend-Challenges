window.onload = function(){
    let daily = document.getElementById("daily");
    let weekly = document.getElementById("weekly");
    let monthly = document.getElementById("monthly");
    let mainClass = document.getElementsByClassName('mainSec');
    let activity = document.getElementsByClassName("activity");
    ;
    
//Fetch the values needed from the json file
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            daily.addEventListener('click', () => {
                for(let i = 0; i < activity.length; i++){
                    if(data[i].title === activity[i].innerText){ 
                        mainClass[i].children[2].querySelector('span').innerText = data[i].timeframes.daily.current; 
                        mainClass[i].children[3].querySelector('span').innerText = data[i].timeframes.daily.previous;
                    }
                    colorChange(daily, weekly, monthly);
                }
            });
            weekly.addEventListener('click', () => {
                for(let i = 0; i < activity.length; i++){
                    if(data[i].title === activity[i].innerText){ 
                        mainClass[i].children[2].querySelector('span').innerText = data[i].timeframes.weekly.current; 
                        mainClass[i].children[3].querySelector('span').innerText = data[i].timeframes.weekly.previous;
                    }
                    colorChange(weekly, daily, monthly);                    
                }
            });
            
            monthly.addEventListener('click', () => {
                for(let i = 0; i < activity.length; i++){
                    if(data[i].title === activity[i].innerText){ 
                        mainClass[i].children[2].querySelector('span').innerText = data[i].timeframes.monthly.current; 
                        mainClass[i].children[3].querySelector('span').innerText = data[i].timeframes.monthly.previous;
                    }
                    colorChange(monthly, daily, weekly);
                }
            });
        })
        .catch(error => console.error('Error fetching data:', error));

        //To change the color of the active element
        function colorChange(activeElem, elem2, elem3){
            activeElem.style.color = "white";
            elem2.style.color = "#6f76c8"
            elem3.style.color = "#6f76c8";
        }
    }