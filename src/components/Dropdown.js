import {useWeather} from '../context/WeatherContext';

function Dropdown() {

    const {city,setCity,cities} = useWeather();

    const changeCity = (e) =>{
        
        // eslint-disable-next-line array-callback-return
        cities.filter((item) =>{
            
             if (item.name === e.target.value) 
                   setCity(item);
            
        })
        
    }
  return (
    <div className='select-box'>
        <select
         name="cities"
         id="cities"
         value={city.name}
        onChange={changeCity}
        >
            {
                cities.map((item, index) =>{
                    return (<option value={item.name} key={index}>
                    {item.name}
                  </option>
                )})
            }
        </select>
    </div>
  )
}

export default Dropdown