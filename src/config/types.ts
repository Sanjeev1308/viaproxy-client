interface IConfig {
  baseURL: string;
}

export interface IConfigService<T extends IConfig> {
  getConfig(): T;
}

export const IConfigTypes = {
  IConfigService: 'ConfigurationService',
};

export interface IContainerServiceClass<T> {
  new (): T;
}
