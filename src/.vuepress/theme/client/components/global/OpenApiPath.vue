<template>
  <article class="open-api-path">
    <div
      v-for="(operation, method) in path"
      :key="method">
      <template v-if="typeof operation === 'object'">
        <h3 v-if="'operationId' in operation">
          {{ operation.operationId }}
        </h3>

        <p v-if="'summary' in operation">{{ operation.summary }}</p>

        <OpenApiOperation
          :method="method"
          :endpoint="title"
          :authentication="'security' in operation ? operation.security : null" />

        <p v-if="'description' in operation">{{ operation.description }}</p>

        <template v-if="'parameters' in operation">
          <h4>Request parameters</h4>
          <table>
            <thead>
              <th>Parameter</th>
              <th>Location</th>
              <th>Information</th>
            </thead>
            <tr
              v-for="(parameter, index) in operation.parameters"
              :key="index">
              <OpenApiRequestParam
                v-if="isParameterType(parameter)"
                :parameter="parameter" />
            </tr>
          </table>
        </template>
        <template v-if="'requestBody' in operation">
          <h4>Request body</h4>
          {{ operation.requestBody }}</template
        >

        <OpenApiResponses
          v-if="'responses' in operation"
          :responses="operation.responses" />
      </template>
    </div>
  </article>
</template>

<script setup lang="ts">
import {type OpenAPIV3_1 as OpenApiType} from 'openapi-types';
import OpenApiResponses from './OpenApiResponses.vue';
import OpenApiRequestParam from './OpenApiRequestParam.vue';
import OpenApiOperation from './OpenApiOperation.vue';

defineProps<{
  title: string;
  path: OpenApiType.PathItemObject;
}>();

function isParameterType(
  parameter: OpenApiType.ParameterObject | OpenApiType.ReferenceObject,
): parameter is OpenApiType.ParameterObject {
  return 'in' in parameter && 'schema' in parameter;
}
</script>
