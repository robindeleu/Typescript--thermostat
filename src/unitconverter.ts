/**
 * Temperatuurconverter class, this class will translate from Farenheid of Kelvin to Celcius. 
 *
 * ```ts
 * import {TemperatureConverter} from './unitconverter'
 * const unitconverter = new TemperatureConverter()
 * unitconverter.farenheidToCelcius(temp)
 * ```
 *
 */
export class TemperatureConverter{
    /**
   * This will translate from Farenheid to Celcius
   * 
   * @param temp This is the temperature you want to convert
   * 
   * @return The translated temperature in °F
   * 
   */
    farenheidToCelcius(temp: number): number{
        return ((temp-32)/1.8)
    }
    /**
   * This will translate from Kelvin to Celcius
   * 
   * @param temp This is the temperature you want to convert
   * 
   * @return The translated temperature in K
   * 
   */
    kelvinToCelcius(temp: number): number{
        return (temp-273)
    }
}