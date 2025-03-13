export interface ICreateElement {
  tag?: string;
  classes?: string[];
  id?: string;
  text?: string;
  parent?: HTMLElement;
}

export interface IOption {
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
  value?: string;
  title?: string;
  required?: string;
  placeholder?: string;
  minLength?: string;
  min?: string;
  pattern?: string;
  addRules?: string;
  onInput?: () => void;
  parent?: HTMLElement;
}

export interface ICreateButton extends ICreateElement {
  disabled?: boolean;
  onClick?: () => void;
}

export type TEditOptionData = {
  parent: HTMLElement;
  key: string;
  value: string;
};

export interface ISound {
  sound: boolean;
}

export interface ICreateCanvasElement {
  classes?: string[];
  id?: string;
  width?: number;
  height?: number;
  parent?: HTMLElement;
}

export interface ICreateDialogElement {
  classes?: string[];
  id?: string;
  parent?: HTMLElement;
}

export interface ICreateTextAreaElement {
  classes?: string[];
  id?: string;
  row?: string;
  parent?: HTMLElement;
}
export interface IDisabledButtons {
  btnBack: HTMLButtonElement;
  btnSound: HTMLButtonElement;
  btnStart: HTMLButtonElement;
  timerInput: HTMLInputElement;
  timerImg: HTMLElement;
  timerTime: number;
}
