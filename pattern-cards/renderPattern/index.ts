import { visitor } from './visitor';
import { strategy } from './strategy';
import { state } from './state';
import { observer } from './observer';
import { memento } from './memento';
import { mediator } from './mediator';
import { iterator } from './iterator';
import { interpreter } from './interpreter';
import { command } from './command';
import { chainOfResponsibility } from './chain-of-responsibility';
import { proxy } from './proxy';
import { flyweight } from './flyweight';
import { facade } from './facade';
import { decorator } from './decorator';
import { composite } from './composite';
import { bridge } from './bridge';
import { adapter } from './adapter';
import { singleton } from './singleton';
import { prototype } from './prototype';
import { factoryMethod } from './factory-method';
import { builder } from './builder';
import { abstractFactory } from './abstract-factory';
import { templateMethod } from './templateMethod';

export const patterns = {
  visitor,
  strategy,
  state,
  observer,
  memento,
  mediator,
  iterator,
  interpreter,
  command,
  'chain-of-responsibility': chainOfResponsibility,
  proxy,
  flyweight,
  facade,
  decorator,
  composite,
  bridge,
  adapter,
  singleton,
  prototype,
  'factory-method': factoryMethod,
  builder,
  'abstract-factory': abstractFactory,
  'template-method': templateMethod,
};