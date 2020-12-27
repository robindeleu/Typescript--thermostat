# Home Automation by Robin Deleu

[![NPM Version](https://img.shields.io/npm/v/@robin_deleu/home-automation.svg)](https://www.npmjs.com/package/@robin_deleu/home-automation)
![badge](https://img.shields.io/badge/Robin-home_automatisation-red.svg)
![ESLint](https://github.com/vives-software-engineering-2020/home-automation-robindeleu/workflows/ESLint/badge.svg?branch=master)
![Markdown Linter](https://github.com/vives-software-engineering-2020/home-automation-robindeleu/workflows/Markdown%20Linter/badge.svg?branch=master)
![Tests](https://github.com/vives-software-engineering-2020/home-automation-robindeleu/workflows/Tests/badge.svg?branch=master)

This program acts as a thermostat. When you give input the program decide to cool or heat.

## Getting Started

### Prerequisites

You will need to instal node.js and ts-node to be able to run this program.

Instal node.js:

```bash
cinst nodejs.install
```

Instal ts-node

```bash
npm install -g ts-node
```

Or you can just use the npm library like this:

```bash
npm i @robin_deleu/home-automation
```

### Using the program

First you need to edit the const in the jsontemperatuur.ts the range you want and in wich unit you work.
The t will be automaticly assigned by the HttpTemperature class.

Possible units are Celcius: C, Farenheid: F and Kelvin: K

Example:

```ts
let t = AUTOMATICLY ASSIGNED
let r = 2
let u = "C"
let to = 50
```

t stands for the temperature it is right now.
r stands for the range you don't want that cooling or heating will work.
u is the unit from the temperatures you want's to insert.
to stands for the temperature you want

The unit from the wanted temperature is always the same unit like the one you inserted in the jsontemperatuur.ts.

For running the program you will need to run this command:

```bash
ts-node .\index.ts
```

## Examples of code output

settings:

```ts
let t = 28 (automaticly assigned)
let r = 2
let u = "C"
let to = 50
```

output:

```bash
{"cooling":"false","heating":"true"}
je werkt in Celcius
```

## Documentation

[Link to extra documentation](https://vives-software-engineering-2020.github.io/home-automation-robindeleu/)

## Authors

* **Robin Deleu** - *Student VIVES University of Applied Sciences*

## License

This project is licensed under the GNU Affero General Public License v3.0 License - see the [LICENSE.md](LICENSE.md) file for details
