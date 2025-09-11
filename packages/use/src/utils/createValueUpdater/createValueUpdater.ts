import { isRef, type Ref } from 'vue';

type UpdatableValue<T> = T | Ref<T>;
export const createValueUpdater = <T>(target: UpdatableValue<T>, transform?: (value: T) => T) => {
  return (newValue: T) => {
    const finalValue = transform ? transform(newValue) : newValue;

    if (isRef(target)) {
      target.value = finalValue;
    } else {
      console.warn('[createValueUpdater] Cannot update non-ref primitive directly');
    }
  };
};
