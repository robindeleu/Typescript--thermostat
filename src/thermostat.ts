/**
 * This class will be used to decide if we need to cool or heat
 *
 * ```ts
 * import {Thermostat} from './thermostat'
 * const verwarmen = new Thermostat()
 * verwarmen.heat(temperature: number, gewenstetemperatuur: number, temperatuurrange: number)
 * ```
 *
 */
export class Thermostat{
    /**
   * This will decide if we need to heat
   * 
   * @param temperature This is the current temperature
   * @param gewenstetemperatuur This is the temperature we want to get
   * @param temperatuurrange This is the temperaturerange we want to do nothing
   * 
   * @return true or false (true = heating, false = don't heat)
   */     
    heat(temperature: number, gewenstetemperatuur: number, temperatuurrange: number): string{
        if(temperature < (gewenstetemperatuur - temperatuurrange)){
            return 'true'
        }else{
        return 'false'
        }
    }
    /**
   * This will decide if we need to cool
   * 
   * @param temperature This is the current temperature
   * @param gewenstetemperatuur This is the temperature we want to get
   * @param temperatuurrange This is the temperaturerange we want to do nothing
   * 
   * @return true or false (true = cooling, false = don't cool)
   */      
    cool(temperature: number, gewenstetemperatuur: number, temperatuurrange: number): string{
        if(temperature > (gewenstetemperatuur + temperatuurrange)){
            return 'true'
        }else{
        return 'false'
        }
    }
}