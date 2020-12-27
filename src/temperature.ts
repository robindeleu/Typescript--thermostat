/**
 * This is the temperature class here we wil get the temperature from httpTemperature class and wait until he have it
 *
 * ```ts
 * import {Temperature} from './temperature'
 * const tempnu =  new Temperature()
 * tempnu.setTemperature()
 * ```
 * Note: It's better to use the const t = await tempnu.setTemperature() Because getting the temperatures is async
 * 
 */
import {HttpTemperature} from './HttpTemperature'

export class Temperature{
    /**
   * This will get the temperature from the HttpTemperature class
   *  
   * @return The currend temperature
   */    
    async setTemperature(){
        const t = new HttpTemperature('http://dummy-sensors.azurewebsites.net/api/sensor/abba5')
        const temp = await t.getTemperature()
        return temp
    }
}