import IConfig from "./IConfig";

export default interface IArguments {
  dest: string;
  template: string;
  config: string | IConfig;
  init?: boolean;
  templatePath?: string;
  [index: string]: string | boolean | IConfig;
};
