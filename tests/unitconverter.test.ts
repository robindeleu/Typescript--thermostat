import {TemperatureConverter} from '../src/unitconverter'
const unitconverter = new TemperatureConverter()
test('from 32 °F to 0 °C', () => {
    expect(unitconverter.farenheidToCelcius(32)).toBe(0);   
})

test('from -40 °F to -40 °C', () => {
    expect(unitconverter.farenheidToCelcius(-40)).toBe(-40);    
})

test('from 212 °F to 100 °C', () => {
    expect(unitconverter.farenheidToCelcius(212)).toBe(100);   
})

test('from -58 °F to -50 °C', () => {
    expect(unitconverter.farenheidToCelcius(-58)).toBe(-50);   
})

test('from -22 °F to -30 °C', () => {
    expect(unitconverter.farenheidToCelcius(-22)).toBe(-30);  
})

test('from -4 °F to -20 °C', () => {
    expect(unitconverter.farenheidToCelcius(-4)).toBe(-20);   
})

test('from 14 °F to -10 °C', () => {
    expect(unitconverter.farenheidToCelcius(14)).toBe(-10);   
})

test('from 50 °F to 10 °C', () => { 
    expect(unitconverter.farenheidToCelcius(50)).toBe(10);   
})

test('from 68 °F to 20 °C', () => { 
    expect(unitconverter.farenheidToCelcius(68)).toBe(20);    
})

test('from 86 °F to 30 °C', () => { 
    expect(unitconverter.farenheidToCelcius(86)).toBe(30);    
})




test('from 0 °K to -273°C', () => {
    expect(unitconverter.kelvinToCelcius(0)).toBe(-273);
})
test('from 10 °K to -263 °C', () => {
    expect(unitconverter.kelvinToCelcius(10)).toBe(-263);
})
test('from 20 °K to -253 °C', () => {
    expect(unitconverter.kelvinToCelcius(20)).toBe(-253);
})
test('from 30 °K to 243 °C', () => {
    expect(unitconverter.kelvinToCelcius(30)).toBe(-243);
})
test('from 40 °K to 233 °C', () => {
    expect(unitconverter.kelvinToCelcius(40)).toBe(-233);
})
test('from 50 °K to -223 °C', () => {
    expect(unitconverter.kelvinToCelcius(50)).toBe(-223);
})
test('from 60 °K to -213 °C', () => {
    expect(unitconverter.kelvinToCelcius(60)).toBe(-213);
})
test('from 70 °K to -203°C', () => {
    expect(unitconverter.kelvinToCelcius(70)).toBe(-203);
})
test('from 80 °K to -193 °C', () => {
    expect(unitconverter.kelvinToCelcius(80)).toBe(-193);
})
test('from 90 °K to -183 °C', () => {
    expect(unitconverter.kelvinToCelcius(90)).toBe(-183);
})
test('from 100 °K to -173 °C', () => {
    expect(unitconverter.kelvinToCelcius(100)).toBe(-173);
})