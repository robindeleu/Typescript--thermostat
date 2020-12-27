/**
 * Jsontemperatuur class, this class will get all the temperatures in 1 methode to make it easyer to change temperatures 
 *
 * ```ts
 * import {Jsontemperatuur} from './jsontemperatuur'
 * const object = new Jsontemperatuur()
 * object.jsonobjecttemperatuur()
 * ```
 * Note: It's better to use the const jsonstring = await object.jsonobjecttemperatuur() Because getting the temperatures is async
 * 
 */

import {Temperature} from './temperature'


export class Jsontemperatuur{
    /**
   * This will get the temperature from the temperatureclass and hard coded values
   *  
   * @return t, the current temperature
   * @return r, the temperature range
   * @return to, the temperature you want
   * @return u, the temperature unit
   */    
    async jsonobjecttemperatuur(){
        const tempnu =  new Temperature()
        const t = await tempnu.setTemperature()
        const r = 2
        const to = 50
        const u = "C" //Celcius: C or Farenheid: F or Kelvin: K

        return {
            temperature: t,
            range: r,
            unit: u,
            temperatureold: to
        }
    }
    
}