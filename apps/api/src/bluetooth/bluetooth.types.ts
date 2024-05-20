/**
 * During the initialization of the Bluetooth module, the state of the Bluetooth
 * adapter is returned by the `stateChange` event.
 * The state can be one of the following:
 */
export type BluetoothState =
  | 'unknown'
  | 'resetting'
  | 'unsupported'
  | 'unauthorized'
  | 'poweredOff'
  | 'poweredOn';
