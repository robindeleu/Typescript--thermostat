import {Dataprocessing} from '../src/dataprocessing'
const processing = new Dataprocessing()

test('Cool/heat decision: temperatuurnu: 10, gewenst 21, range 2, unit Celcius => expect: {"cooling":"false","heating":"true"}', () => {
    expect(processing.dataProcessingTemperature(10,21,2,'C')).toBe('{"cooling":"false","heating":"true"}');
})

test('Cool/heat decision: temperatuurnu: 40, gewenst 21, range 1, unit Celcius => expect: {"cooling":"true","heating":"false"}', () => {
    expect(processing.dataProcessingTemperature(40,21,1,'C')).toBe('{"cooling":"true","heating":"false"}');
})

test('Cool/heat decision: temperatuurnu: 40, gewenst 40, range 61, unit Celcius => expect: {"cooling":"false","heating":"false"}', () => {
    expect(processing.dataProcessingTemperature(40,40,61,'C')).toBe('{"cooling":"false","heating":"false"}');
})

test('Cool/heat decision: temperatuurnu: -10, gewenst -21, range 2, unit Celcius => expect: {"cooling":"true","heating":"false"}', () => {
    expect(processing.dataProcessingTemperature(-10,-21,2,'C')).toBe('{"cooling":"true","heating":"false"}');
})

test('Cool/heat decision: temperatuurnu: 21, gewenst 22, range 0.5, unit Celcius => expect: {"cooling":"false","heating":"true"}', () => {
    expect(processing.dataProcessingTemperature(21,22,0.5,'C')).toBe('{"cooling":"false","heating":"true"}');
})





test('Cool/heat decision: temperatuurnu: 10, gewenst 21, range 2, unit Kelvin => expect: {"cooling":"false","heating":"true"}', () => {
    expect(processing.dataProcessingTemperature(10,21,2,'K')).toBe('{"cooling":"false","heating":"true"}');
})

test('Cool/heat decision: temperatuurnu: 40, gewenst 21, range 1, unit Kelvin => expect: {"cooling":"true","heating":"false"}', () => {
    expect(processing.dataProcessingTemperature(40,21,1,'K')).toBe('{"cooling":"true","heating":"false"}');
})

test('Cool/heat decision: temperatuurnu: 40, gewenst 40, range 61, unit Kelvin => expect: {"cooling":"false","heating":"false"}', () => {
    expect(processing.dataProcessingTemperature(40,40,61,'K')).toBe('{"cooling":"false","heating":"false"}');
})

test('Cool/heat decision: temperatuurnu: -10, gewenst -21, range 2, unit Kelvin => expect: {"cooling":"true","heating":"false"}', () => {
    expect(processing.dataProcessingTemperature(-10,-21,2,'K')).toBe('{"cooling":"true","heating":"false"}');
})

test('Cool/heat decision: temperatuurnu: 21, gewenst 22, range 0.5, unit Kelvin => expect: {"cooling":"false","heating":"true"}', () => {
    expect(processing.dataProcessingTemperature(21,22,0.5,'K')).toBe('{"cooling":"false","heating":"true"}');
})





test('Cool/heat decision: temperatuurnu: 10, gewenst 21, range 2, unit Farenheid => expect: {"cooling":"false","heating":"true"}', () => {
    expect(processing.dataProcessingTemperature(10,21,2,'F')).toBe('{"cooling":"false","heating":"true"}');
})

test('Cool/heat decision: temperatuurnu: 40, gewenst 21, range 2, unit Farenheid => expect: {"cooling":"true","heating":"false"}', () => {
    expect(processing.dataProcessingTemperature(40,21,1,'F')).toBe('{"cooling":"true","heating":"false"}');
})

test('Cool/heat decision: temperatuurnu: 40, gewenst 40, range 61, unit Farenheid => expect: {"cooling":"false","heating":"false"}', () => {
    expect(processing.dataProcessingTemperature(40,40,61,'F')).toBe('{"cooling":"false","heating":"false"}');
})

test('Cool/heat decision: temperatuurnu: -10, gewenst -21, range 2, unit Farenheid => expect: {"cooling":"true","heating":"false"}', () => {
    expect(processing.dataProcessingTemperature(-10,-21,2,'F')).toBe('{"cooling":"true","heating":"false"}');
})

test('Cool/heat decision: temperatuurnu: 21, gewenst 22, range 0.5, unit Farenheid => expect: {"cooling":"false","heating":"true"}', () => {
    expect(processing.dataProcessingTemperature(21,22,0.5,'F')).toBe('{"cooling":"false","heating":"true"}');
})