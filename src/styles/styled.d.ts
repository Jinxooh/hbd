// src/styles/styled.d.ts
import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    palette: {
      blue: string;
      gray: string;
      pink: string;
    }
    basicWidth: string;
    backgroundColor: string;
    color: {
      main: string;
      sub: string;
    }
    fontColor: string;
  }
}