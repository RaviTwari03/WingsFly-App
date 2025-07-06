// This file helps TypeScript understand our path aliases
declare module '@components' {
  import { FC } from 'react';
  export const DatePicker: FC<any>;
  export const TaskItem: FC<any>;
  export const BottomDrawer: FC<any>;
}

declare module '@screens' {
  import { FC } from 'react';
  export const HomeScreen: FC<any>;
}

declare module '@navigation' {
  import { FC } from 'react';
  export const AppNavigator: FC<any>;
}

declare module '@theme' {
  export * from '../theme';
}

declare module '@assets/*' {
  const value: any;
  export default value;
}
