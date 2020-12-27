/**
 * This is the HttpTemperature class here we wil get the temperature from the URL and wait until he have it
 *
 * ```ts
 * import {HttpTemperature} from './HttpTemperature'
 * const t = new HttpTemperature(HERE YOU MUST TO PUT YOU'RE URL)
 * t.getTemperature()
 * ```
 * Note: It's better to use the const temp = await t.getTemperature() Because getting the temperatures is async
 * 
 */
import Axios from "axios";

export class HttpTemperature{
    /**
   * Property that contains the URL en the apitemperature
   */

    link: string
    apiTemperature: number
    /**
   * Create a new HttpTemperature instance
   * 
   * @param link this is the url from the temperaturesensor
   */
    constructor(link: string){
        this.link = link
        this.apiTemperature = 0
    }
    /**
   * This will get the temperature from the sensor
   *  
   * @return The currend temperature that he got from the sensor
   */    
    async getTemperature(){
            const response = await Axios.get(this.link)
            const apiTemperature = parseFloat(response.data.data.toFixed(0))
            console.log("Momenteel is het: ", apiTemperature, " °C")
            return (apiTemperature)
    }
}