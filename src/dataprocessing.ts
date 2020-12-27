/**
 * Jsontemperatuur class, this class will get all the temperatures in 1 methode to make it easyer to change temperatures 
 *
 * ```ts
 * import {Dataprocessing} from './dataprocessing'
 * const processing = new Dataprocessing()
 * processing.dataProcessingTemperature(temperaturenu: number, gewenstetemperatuur: number, temperatuurrange: number, unit: string)
 * ```
 *
 */

import {Thermostat} from './thermostat'

export class Dataprocessing{
    /**
   * This will get the temperatures from the app and will make the Jsonstring and a console.log()
   * @param temperaturenu This is the current temperature
   * @param gewenstetemperatuur This is the temperature you want to achieve
   * @param temperatuurrange This is the temperature range you want to do nothing
   * @param unit This is the temperatureunit 
   */    
    dataProcessingTemperature(temperaturenu: number, gewenstetemperatuur: number, temperatuurrange: number, unit: string){
        const verwarmen = new Thermostat()
        const heaten = verwarmen.heat(temperaturenu,gewenstetemperatuur, temperatuurrange)
        const coolen = verwarmen.cool(temperaturenu,gewenstetemperatuur, temperatuurrange)

        const jsonobject = {
            cooling: coolen,
            heating: heaten
        }
        console.log(JSON.stringify(jsonobject))
        console.log("Momenteel is het: " + temperaturenu + " °" + unit + " in de ruimte en de ingestelde doeltemperatuur is: " + gewenstetemperatuur + " °" + unit)
        return (JSON.stringify(jsonobject))
    }
}