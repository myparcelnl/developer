import {type OpenAPIV3_1 as OpenApiType} from 'openapi-types';
import {get} from 'lodash-es';

type RecursiveType = {
  [key: string]: unknown | RecursiveType | RecursiveType[];
};

/**
 * Formats an example object, array or primitive to a string
 */
export function formatExample(example: unknown): string {
  const spacing = 2;

  return JSON.stringify(example, null, spacing);
}

/**
 * Resolves all $ref keys in the document with their corresponding values
 */
export function resolveRefs(document: OpenApiType.Document): OpenApiType.Document {
  const resolvedDocument = {...document};

  function resolveRefsRecursive(obj: RecursiveType) {
    if (Array.isArray(obj)) {
      for (const item of obj) {
        resolveRefsRecursive(item);
      }
    } else if (typeof obj === 'object') {
      for (const key in obj) {
        if (key === '$ref') {
          const lookup = obj[key] as string;
          // Lookup is a string that defines the path to the referenced object like '#/components/schemas/Example'
          const path = lookup.split('/').slice(1);
          // Find the referenced object in the document using lodash's get function
          const referencedObject = get(resolvedDocument, path);
          // Remove the $ref: '...' key from the object and replace it with the referenced object itself
          obj = Object.assign(obj, referencedObject);
        } else if (typeof obj[key] === 'object' || Array.isArray(obj[key])) {
          const guarded = obj[key] as RecursiveType;
          // If the value is an object or an array, recursively call this function
          resolveRefsRecursive(guarded);
        }
      }
    }
  }

  resolveRefsRecursive(resolvedDocument);

  return resolvedDocument;
}
