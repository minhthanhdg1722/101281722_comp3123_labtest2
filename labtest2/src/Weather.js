import { Component } from 'react'
import axios from 'axios'


export default class Weather extends Component {
    
    constructor(props){
        super(props)

        this.state = {
            weathers: []

        }
    }

    componentDidMount() {
        axios.get(`http://api.openweathermap.org/data/2.5/weather?q=Toronto&appid=e0f1520fe7aa43df2a2fac33554b609e`)
        .then(res => {
            const weather = [res.data]
            this.setState({weathers : weather})
        })
    }
    
    render() {
        return (
            <>
                {
                    this.state.weathers.map(w => (
                        <>
                            
                            <div class="widget">
                                <div class="left-panel panel">
                                    <div class="date">
                                        {w.name}
                                    </div>
                                    <img src={`http://openweathermap.org/img/wn/${w.weather[0].icon}.png`} width="100"></img>
                                    <div class="desc">
                                        <p>{w.weather[0].description}</p>
                                    </div>
                                    <div class="city">
                                        {w.weather[0].main}
                                    </div>
                                    <div class="temp">
                                        {w.main.temp}
                                        <span>&#8457;</span>
                                    </div>
                                    <div>
                                        <div class="info">
                                            <p><span>Feel Like</span>: {w.main.feels_like} &#8457;</p>
                                        </div>
                                        <div class="info">
                                            <p><span>Min Temperature</span>: {w.main.temp_min} &#8457;</p>
                                        </div>
                                    </div>
                                </div>
                            </div> 
                        </>
                    ))
                }
            </>
        )
    }
}