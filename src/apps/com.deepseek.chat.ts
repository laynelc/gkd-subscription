import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.deepseek.chat',
  name: 'DeepSeek',
  groups: [
    {
      key: 1,
      name: '功能类-自动折叠思考过程',
      desc: '二选一',
      rules: [
        {
          activityIds: '.MainActivity',
          actionCd: 3000,
          matches: '@[clickable=true] > [text*="思考"] + View[desc="折叠"]',
          snapshotUrls: [
            'https://i.gkd.li/i/23982641',
            'https://i.gkd.li/i/23982613',
            'https://i.gkd.li/i/25364857',
          ],
          excludeSnapshotUrls: 'https://i.gkd.li/i/23982615',
        },
      ],
    },
    {
      key: 2,
      name: '功能类-思考完成后自动折叠思考过程',
      desc: '二选一',
      rules: [
        {
          activityIds: '.MainActivity',
          actionCd: 3000,
          matches:
            '@[clickable=true] > [text^="已思考" || text^="已深度思考"] + View[desc="折叠"]',
          snapshotUrls: [
            'https://i.gkd.li/i/23982613',
            'https://i.gkd.li/i/25364857',
          ],
          excludeSnapshotUrls: [
            'https://i.gkd.li/i/23982641',
            'https://i.gkd.li/i/23982615',
          ],
        },
      ],
    },
    {
      key: 3,
      name: '功能类-选中快速模式时自动切换至专家模式',
      rules: [
        {
          activityIds: '.MainActivity',
          matches: [
            '[text="使用快速模式开始对话"]',
            '@[clickable=true] > [text="专家模式"]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/30698460',
            'https://i.gkd.li/i/30698458',
            'https://i.gkd.li/i/30698461',
          ],
        },
      ],
    },
  ],
});
