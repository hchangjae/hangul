import { Dispatch, SetStateAction, createContext, useState } from 'react';

type Setter<T> = Dispatch<SetStateAction<T>>;
export type Context<T> = [T, Setter<T>];

/**
 * Toast Context
 */
export const ToastContext = createContext<Context<string>>(['', () => '']);

const ToastContextRegistry = ({ children }: { children: React.ReactNode }) => {
  const [toastState, setToastState] = useState<string>('');

  return <ToastContext.Provider value={[toastState, setToastState]}>{children}</ToastContext.Provider>;
};

/**
 * React Context
 */
const ReactContextRegistry = ({ children }: { children: React.ReactNode }) => {
  return (
    <ToastContextRegistry>
      {/* Comment 4 lint */}
      {children}
    </ToastContextRegistry>
  );
};

export default ReactContextRegistry;
