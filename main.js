
const CityName = document.getElementById('CityName');
const submitBtn = document.getElementById('submitBtn');
const city_name = document.getElementById('city_name');
const temp_status = document.getElementById('temp_status');
const temp_real_val = document.getElementById('temp_real_val');
const datahide =document.querySelector('.middle_layer');

const getinfo = async (event) => {
    // event.preventDefault bhar bhar refresh krna pa ussi page pa raha
    event.preventDefault();
    let cityVal = CityName.value;

    //  input box ma koi bhe value nhi hogi tb kya hoga uss time pa ya if, else wala code hogaa
    if (cityVal === "") {
        city_name.innerText = `Please write the name before search`;
        datahide.classList.add('data_hide');
} else {
        try {
            let url = `https://api.openweathermap.org/data/2.5/weather?q= ${cityVal}&units=metric&appid=99204cc4bd33e69d5d5b777beb8f05b1`

            // ======================fetch api ko call kara ==============================
            const response = await fetch(url);
            const data = await response.json();
            console.log(data);
            const arrData = [data];
            city_name.innerText = `${arrData[0].name},${arrData[0].sys.country}`;
            temp_real_val.innerText = arrData[0].main.temp;
            // temp_status.innerText = arrData[0].weather[0].main;
            const tempMood = arrData[0].weather[0].main;
 
            // condition to check sunny or cloudly
            if (tempMood === "Clear") {
                temp_status.innerHTML =
                    "<i class='fas fa-sun' style='color: #eccc68;'></i>"
            } else if (tempMood === "Clouds") {
                temp_status.innerHTML =
                    "<i class='fas fa-cloud' style='color: #f1f2f6;'></i>"

            } else if (tempMood === "Rain") {
                temp_status.innerHTML =
                    "<i class='fas fa-cloud-rain' style='color: #a4b0be;'></i>"

            } else {
                temp_status.innerHTML =
                    "<i class='fas fa-sun' style='color: #eccc68;'></i>"

            }
            datahide.classList.remove('data_hide');


        } catch {
            city_name.innerText = `Please enter the city name properly`;
            datahide.classList.add('data_hide');

        }
    }

}

submitBtn.addEventListener('click', getinfo);







