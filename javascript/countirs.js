const loadcontries = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(Response => Response.json())
        .then(data => showConrries(data));
}
loadcontries()

const showConrries = counties => {

    const countesDiv = document.getElementById('country');

    counties.forEach(counry => {
        console.log(counry);
        const div = document.createElement('div')
        div.classList.add('country')

            
        div.innerHTML=`
        <div " class="col">
        <div class="card">
          <img src="${counry.flags.png}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${counry.continents}</h5>
            <p class="card-text">${counry.name.common}</p>
          </div>
        </div>
      </div>
        
        `
        countesDiv.appendChild(div);



        // const h3 = document.createElement('h3')
        // h3.innerText = counry.name.common;
        // div.appendChild(h3);
        // const p = document.createElement('p');
        // p.innerText = counry.capital;
        // div.appendChild(p);
        // const h4 = document.createElement('h4');
        // h4.innerText = counry.capitalInfo.latlng;
        // div.appendChild(h4)

        // const div1 = document.createElement('div');
        // div1.classList.add('div1');
        // div1.innerText = counry.name.common;
        // div.appendChild(div1); 

        // countesDiv.appendChild(div);



    })

}