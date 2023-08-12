import { Value } from './circular-dep-init-error'
import { valueA } from './module-a'

export const valueB = new Value('circ-dep-init-b')
export const valueAB = valueA.value.concat(` ${valueB.value}`)

export function getValueAB() {
  return valueAB
}
