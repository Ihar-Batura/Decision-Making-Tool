export interface ICreateElement {
  tag?: string;
  classes?: string[];
  id?: string;
  text?: string;
  parent?: HTMLElement;
}

interface IOption {
  id: string;
  title: string;
  weight: string;
}

export interface IOptions {
  list: IOption[] | [];
  lastId: number;
}

export interface ICreateInput {
  type: string;
  classes?: string[];
  id?: string;
  title?: string;
  required?: string;
  placeholder?: string;
  minLength?: string;
  pattern?: string;
  addRules?: string;
  onInput?: () => void;
  parent?: HTMLElement;
}
