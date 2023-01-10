/* eslint-disable no-magic-numbers,@typescript-eslint/no-magic-numbers */
import {CARRIERS, DELIVERY_TYPES, PACKAGE_TYPES, PLATFORMS} from '@myparcel/sdk';

interface BaseDataType {
  HUMAN?: string;
}

export interface DataTypeWithId extends BaseDataType {
  ID: number;
}

export interface DataTypeWithName extends BaseDataType {
  NAME: string;
}

export interface DataType {
  name: string;
  children: (DataTypeWithId | DataTypeWithName)[];
}

export const useDataTypes = (): DataType[] => [
  {
    name: 'shipment-status',
    children: [
      {ID: 1, HUMAN: 'pending - concept'},
      {ID: 2, HUMAN: 'pending - registered'},
      {ID: 3, HUMAN: 'enroute - handed to carrier'},
      {ID: 4, HUMAN: 'enroute - sorting'},
      {ID: 5, HUMAN: 'enroute - distribution'},
      {ID: 6, HUMAN: 'enroute - customs'},
      {ID: 7, HUMAN: 'delivered - at recipient'},
      {ID: 8, HUMAN: 'delivered - ready for pickup'},
      {ID: 9, HUMAN: 'delivered - package picked up'},
      {ID: 10, HUMAN: 'delivered - return shipment ready for pickup'},
      {ID: 11, HUMAN: 'delivered - return shipment package picked up'},
      {ID: 12, HUMAN: 'printed - letter'},
      {ID: 13, HUMAN: 'inactive - credited'},
      {ID: 14, HUMAN: 'printed - digital stamp'},
      {ID: 30, HUMAN: 'inactive - concept'},
      {ID: 31, HUMAN: 'inactive - registered'},
      {ID: 32, HUMAN: 'inactive - enroute - handed to carrier'},
      {ID: 33, HUMAN: 'inactive - enroute - sorting'},
      {ID: 34, HUMAN: 'inactive - enroute - distribution'},
      {ID: 35, HUMAN: 'inactive - enroute - customs'},
      {ID: 36, HUMAN: 'inactive - delivered - at recipient'},
      {ID: 37, HUMAN: 'inactive - delivered - ready for pickup'},
      {ID: 38, HUMAN: 'inactive - delivered - package picked up'},
    ],
  },
  {
    name: 'package-type',
    children: PACKAGE_TYPES.ALL,
  },
  {
    name: 'delivery-type',
    children: DELIVERY_TYPES.ALL,
  },
  {
    name: 'carrier',
    children: CARRIERS.ALL,
  },
  {
    name: 'platform',
    children: PLATFORMS.ALL,
  },
  {
    name: 'order-status',
    children: [
      {NAME: 'open', HUMAN: 'Open'},
      {NAME: 'partially_processed', HUMAN: 'Partially processed'},
      {NAME: 'processed', HUMAN: 'Processed'},
      {NAME: 'canceled', HUMAN: 'Canceled'},
    ],
  },
];
