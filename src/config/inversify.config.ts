import 'reflect-metadata';

import { Container } from 'inversify';
import { IConfigTypes, IContainerServiceClass } from './types';

export class ContainerFactory {
  private static _instance: ContainerFactory;
  private container: Container;
  private isInitialized = false;

  private constructor() {
    this.container = new Container();
  }

  static getInstance() {
    return this._instance || (this._instance = new this());
  }

  init<T>(service: IContainerServiceClass<T>, type: string) {
    this.isInitialized = true;
    switch (type) {
      case IConfigTypes.IConfigService.toString():
        this.container.bind<T>(IConfigTypes.IConfigService).to(service).inSingletonScope();
    }
  }

  getContainer() {
    return this.container;
  }

  getIsInitialized() {
    return this.isInitialized;
  }
}
