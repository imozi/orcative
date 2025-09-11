import { type InjectionKey, provide, inject } from 'vue';

type CreateInjectionContextOptions<Args extends unknown[], Return> = (...args: Args) => Return;
export const createInjectionContext = <Args extends unknown[], Return>(
  key: string,
  composable: CreateInjectionContextOptions<Args, Return>,
) => {
  const injectionKey: InjectionKey<Return> = Symbol(key);

  const useProvidingContext = (...value: Args): Return => {
    const context = composable(...value);
    provide(injectionKey, context);
    return context;
  };

  const useInjectedContext = (): Return => {
    const injected = inject(injectionKey);
    if (injected === undefined) {
      throw new Error(`[Injection] "${key}" is not provided`);
    }
    return injected;
  };

  return [useProvidingContext, useInjectedContext] as const;
};
