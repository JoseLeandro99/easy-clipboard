export interface Clipboard {
  id: number;
  title: string;
  content: string;
}

export interface Action {
  type: string,
  payload: Clipboard;
}
