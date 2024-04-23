import {type OpenAPIV3_1 as OpenApiType} from 'openapi-types';

export function isParameterType(
  parameter: OpenApiType.ParameterObject | OpenApiType.ReferenceObject,
): parameter is OpenApiType.ParameterObject {
  return 'in' in parameter && 'schema' in parameter;
}

// Guard to check if the schema is an OpenApiType.SchemaObject.
export const isSchemaObject = (schema: object): schema is OpenApiType.SchemaObject => {
  return typeof schema === 'object';
};

// Guard to check if the schema is an OpenApiType.ArraySchemaObject.
export const isArraySchemaObject = (schema: object): schema is OpenApiType.ArraySchemaObject => {
  return typeof schema === 'object' && 'items' in schema;
};

// Guard to check if the response is an OpenApiType.ResponseObject.
export const isReponseObject = (response: object): response is OpenApiType.ResponseObject => {
  return typeof response === 'object';
};

// Guard to check if example is an Example object
export const isExampleObject = (example: unknown): example is OpenApiType.ExampleObject => {
  return !!example && typeof example === 'object' && 'value' in example;
};
