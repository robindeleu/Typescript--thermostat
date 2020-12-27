import {Thermostat} from '../src/thermostat'
const verwarmen = new Thermostat()
test('Cooling test: temperatuurnu: 10, gewenst 21, range 2 => expect: false', () => {
    expect(verwarmen.cool(10,21,2)).toBe('false');
})

test('Cooling test: temperatuurnu: -20, gewenst 21, range 7 => expect: false', () => {
    expect(verwarmen.cool(-20,21,7)).toBe('false');
})

test('Cooling test: temperatuurnu: 20, gewenst 24, range 2 => expect: false', () => {
    expect(verwarmen.cool(20,24,2)).toBe('false');
})

test('Cooling test: temperatuurnu: 15, gewenst 18, range 1 => expect: false', () => {
    expect(verwarmen.cool(15,18,1)).toBe('false');
})

test('Cooling test: temperatuurnu: 20, gewenst 21, range 2 => expect: false', () => {
    expect(verwarmen.cool(20,21,2)).toBe('false');
})

test('Cooling test: temperatuurnu: 100, gewenst 21, range 2 => expect: true', () => {
    expect(verwarmen.cool(100,21,2)).toBe('true')
})

test('Cooling test: temperatuurnu: 50, gewenst 17, range 9 => expect: true', () => {
    expect(verwarmen.cool(50,17,9)).toBe('true');
})

test('Cooling test: temperatuurnu: 40, gewenst 18, range 1 => expect: true', () => {
    expect(verwarmen.cool(40,18,1)).toBe('true');
})

test('Cooling test: temperatuurnu: 21, gewenst 18, range 2 => expect: true', () => {
    expect(verwarmen.cool(21,18,2)).toBe('true');
})

test('Cooling test: temperatuurnu: 10, gewenst 0, range 3 => expect: true', () => {
    expect(verwarmen.cool(10,0,3)).toBe('true');
})






test('Heating test: temperatuurnu: 24, gewenst 21, range 2 => expect: false', () => {
    expect(verwarmen.heat(24,21,2)).toBe('false');
})
test('Heating test: temperatuurnu: 50, gewenst 15, range 1 => expect: false', () => {
    expect(verwarmen.heat(50,15,1)).toBe('false');
})
test('Heating test: temperatuurnu: 40, gewenst 32, range 5 => expect: false', () => {
    expect(verwarmen.heat(40,32,5)).toBe('false');
})
test('Heating test: temperatuurnu: 20, gewenst 14, range 1 => expect: false', () => {
    expect(verwarmen.heat(20,14,1)).toBe('false');
})
test('Heating test: temperatuurnu: 10, gewenst 7, range 2 => expect: false', () => {
    expect(verwarmen.heat(10,7,2)).toBe('false');
})
test('Heating test: temperatuurnu: 10, gewenst 17, range 2 => expect: true', () => {
    expect(verwarmen.heat(10,17,2)).toBe('true');
})
test('Heating test: temperatuurnu: 7, gewenst 20, range 3 => expect: true', () => {
    expect(verwarmen.heat(7,20,3)).toBe('true');
})
test('Heating test: temperatuurnu: 10, gewenst 15, range 4 => expect: true', () => {
    expect(verwarmen.heat(10,15,4)).toBe('true');
})
test('Heating test: temperatuurnu: 5, gewenst 21, range 5 => expect: true', () => {
    expect(verwarmen.heat(5,21,5)).toBe('true');
})
test('Heating test: temperatuurnu: 17, gewenst 50, range 6 => expect: true', () => {
    expect(verwarmen.heat(17,50,6)).toBe('true');
})