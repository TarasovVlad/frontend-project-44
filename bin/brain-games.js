#!/usr/bin/env node
import cli from '../src/cli.js'
import playEven from '../bin/brain-even.js';

console.log('Welcome to the Brain Games!')

const userName = cli();

playEven(userName);
