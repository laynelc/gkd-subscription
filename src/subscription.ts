import { defineGkdSubscription } from '@gkd-kit/define';
import { batchImportApps } from '@gkd-kit/tools';
import categories from './categories';
import globalGroups from './globalGroups';

export default defineGkdSubscription({
  id: 944130628,
  name: 'LayneLC 自用订阅',
  version: 0,
  author: 'LayneLC',
  checkUpdateUrl: './gkd.version.json5',
  supportUri: 'https://github.com/laynelc/gkd-subscription',
  categories,
  globalGroups,
  apps: await batchImportApps(`${import.meta.dirname}/apps`),
});
