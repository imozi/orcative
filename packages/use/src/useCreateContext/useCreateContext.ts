import { type InjectionKey, provide, inject } from 'vue';

export const useCreateContext = <T>(
  description: string,
): {
  provide: (value: T) => T;
  inject: () => T;
} => {
  const key: InjectionKey<T> = Symbol(description);

  const provideValue = (value: T): T => {
    provide(key, value);
    return value;
  };

  const injectValue = (): T => {
    const injected = inject(key);
    if (injected === undefined) {
      throw new Error(`[Injection] "${description}" is not provided`);
    }
    return injected;
  };

  return {
    provide: provideValue,
    inject: injectValue,
  };
};

// export const { provide: provideDialogContext, inject: useDialogContext } = useCreateContext<Ref<boolean>>('dialog-context');
