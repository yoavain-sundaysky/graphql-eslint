import { ConfigName } from '../types.js';
// @ts-expect-error -- complains about no default export
import operationsAllConfig from './operations-all.js';
// @ts-expect-error -- complains about no default export
import operationsRecommendedConfig from './operations-recommended.js';
// @ts-expect-error -- complains about no default export
import schemaAllConfig from './schema-all.js';
// @ts-expect-error -- complains about no default export
import schemaRecommendedConfig from './schema-recommended.js';
// @ts-expect-error -- complains about no default export
import relayConfig from './schema-relay.js';

export const configs = {
  'schema-recommended': schemaRecommendedConfig,
  'schema-all': schemaAllConfig,
  'schema-relay': relayConfig,
  'operations-recommended': operationsRecommendedConfig,
  'operations-all': operationsAllConfig,
  'flat/schema-recommended': {
    rules: schemaRecommendedConfig.rules,
  },
  'flat/schema-all': {
    rules: {
      ...schemaRecommendedConfig.rules,
      ...schemaAllConfig.rules,
    },
  },
  'flat/schema-relay': {
    rules: relayConfig.rules,
  },
  'flat/operations-recommended': {
    rules: operationsRecommendedConfig.rules,
  },
  'flat/operations-all': {
    rules: {
      ...operationsRecommendedConfig.rules,
      ...operationsAllConfig.rules,
    },
  },
} satisfies Record<ConfigName | `flat/${ConfigName}`, unknown>;
