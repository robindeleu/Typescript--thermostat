/**
 * App class this uses the Dataprocessing, TemperatureConverter and the Jsontemperatuur class.
 *
 * He will make a Json string that will tell you to cool or heat.
 * ```ts
 * import {App} from './src/app'
 * const eindtotaal = new App()
 * eindtotaal.applicatie()
 * ```
 * 
 */

import {TemperatureConverter} from './unitconverter'
import {Jsontemperatuur} from './jsontemperatuur'
import {Dataprocessing} from './dataprocessing'

export class App{
    /**
     * This methode will get all the temperatures and try to manage them and use the dataprossessing class to manage that, at the end he will do a console.log with a JSON String
     *
     */    
    async applicatie(){
        const object = new Jsontemperatuur()
        const unitconverter = new TemperatureConverter()
        const processing = new Dataprocessing()

        const jsonstring = await object.jsonobjecttemperatuur()
    
        if(jsonstring.unit == "F"){
            const temperatuurnu = unitconverter.farenheidToCelcius(jsonstring.temperature)
            const doeltemperatuur = unitconverter.farenheidToCelcius(jsonstring.temperatureold)
            //const temperatuurrange = unitconverter.farenheidToCelcius(jsonstring.range)
            
            processing.dataProcessingTemperature(temperatuurnu,doeltemperatuur, jsonstring.range, jsonstring.unit)
        }else{
            if(jsonstring.unit == "K"){
                const temperatuurnu = unitconverter.kelvinToCelcius(jsonstring.temperature)
                const doeltemperatuur = unitconverter.kelvinToCelcius(jsonstring.temperatureold)
                //const temperatuurrange = unitconverter.kelvinToCelcius(jsonstring.range)
                
                processing.dataProcessingTemperature(temperatuurnu,doeltemperatuur, jsonstring.range, jsonstring.unit)
            }
            else{
                processing.dataProcessingTemperature(jsonstring.temperature,jsonstring.temperatureold, jsonstring.range, jsonstring.unit)
            }
        }
        
    }
}