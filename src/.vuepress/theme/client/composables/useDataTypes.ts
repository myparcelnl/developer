/* eslint-disable no-magic-numbers,@typescript-eslint/no-magic-numbers */
import {
  CARRIER_IDS_TO_NAMES,
  DELIVERY_TYPE_IDS_TO_NAMES,
  PACKAGE_TYPE_IDS_TO_NAMES,
  PLATFORM_IDS_TO_NAMES,
} from '@myparcel/constants';

interface BaseDataType {
  HUMAN?: string;
}

export interface DataTypeWithId extends BaseDataType {
  ID: number;
}

export interface DataTypeWithName extends BaseDataType {
  NAME: string;
}

export interface DataTypeGroup {
  name: string;
  children: (DataTypeWithId | DataTypeWithName)[];
}

const objectToArray = (obj: Record<string, string>): DataTypeWithName[] => {
  return Object.entries(obj).map(([id, name]) => {
    return {
      ID: Number(id),
      NAME: name,
      HUMAN: name,
    };
  });
};

// eslint-disable-next-line max-lines-per-function
export const useDataTypes = (): DataTypeGroup[] => [
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
      {ID: 13, HUMAN: 'credited'},
      {ID: 14, HUMAN: 'printed - digital stamp'},
      {ID: 15, HUMAN: 'printed - external shipment'},
      {ID: 16, HUMAN: 'expired'},
      {ID: 17, HUMAN: 'cancelled'},
      {ID: 18, HUMAN: 'printed - untracked shipment'},
      {ID: 19, HUMAN: 'delivered - at agreed location'},
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
    children: objectToArray(PACKAGE_TYPE_IDS_TO_NAMES),
  },
  {
    name: 'delivery-type',
    children: objectToArray(DELIVERY_TYPE_IDS_TO_NAMES),
  },
  {
    name: 'carrier',
    children: objectToArray(CARRIER_IDS_TO_NAMES),
  },
  {
    name: 'platform',
    children: objectToArray(PLATFORM_IDS_TO_NAMES),
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
