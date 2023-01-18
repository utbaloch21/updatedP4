const result = document.getElementById('result')
const filter = document.getElementById('filter')
const loading = document.getElementById('load')
const nomatch = document.getElementById('nomatch')
filter.focus();
const listItems = []


    
    getData() 

   



filter.addEventListener('input', (e) => filterData(e.target.value));

async function getData(){
    try {
        
        const res = await fetch('https://randomuser.me/api?results=50')
        const {results} = await res.json()

        //Clear results
        result.innerHTML=''
        results.forEach(user => {
            const li = document.createElement('li')
            listItems.push(li)
            li.innerHTML = `
                <img src="${user.picture.large}" alt="${user.name.first}">
                <div class="user-info">
                    <h4>${user.name.first} ${user.name.last}</h4>
                    <p>${user.location.city}, ${user.location.country}</p>
                </div>
            `
            result.appendChild(li)
        });

    } catch (error) {
        setTimeout(() => {
            loading.innerHTML = `
                <h3 class="errorMessage" style="font-size: 11px"> Error Loading the data!
                <br> Please Check your internet connection and try again!</h3>
            `
        }, 2000);
    }
}




function filterData(searchTerm){
setTimeout(() => {
    
    
    listItems.forEach( item =>{
        if(item.innerText.toLowerCase().includes(searchTerm.toLowerCase())){
            item.classList.remove('hide');
            
        }
        else{
            item.classList.add('hide');
            const totalLength = document.querySelectorAll('li').length;
            
            const checkClass = document.getElementsByClassName('hide').length;
            

            if(totalLength === checkClass){
                setTimeout(() => {
                    
                    nomatch.innerHTML = `
                        <i class="fa fa-search" id="searchicon" aria-hidden="true"></i>
                        <h3>No Matches Found</h3>
                    `
                }, 500);
                result.appendChild(nomatch)
            }else{
                nomatch.innerHTML = ''
                // result.appendChild(nomatch)
            }
        }
    });
}, 500);
}




//Loading practice


