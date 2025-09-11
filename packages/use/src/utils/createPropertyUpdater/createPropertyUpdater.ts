import { isRef, type Ref } from 'vue';

type UpdatableTarget<T> = T | Ref<T>;

export const createPropertyUpdater = <T extends object, K extends keyof T>(
  target: UpdatableTarget<T>,
  key: K,
  transform?: (value: T[K]) => T[K],
) => {
  return (newValue: T[K]) => {
    const finalValue = transform ? transform(newValue) : newValue;

    if (isRef(target)) {
      target.value[key] = finalValue;
    } else {
      target[key] = finalValue;
    }
  };
};
