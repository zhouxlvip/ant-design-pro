// eslint-disable-next-line import/no-extraneous-dependencies
import { Request, Response } from 'express';
import { parse } from 'url';
import { TableListItem, TableListParams } from '@/pages/ListTableList/data';

let tableListDataSource: Partial<TableListItem>[] = [
  {
    key: 99,
    disabled: false,
    href: 'https://ant.design',
    avatar: 'https://gw.alipayobjects.com/zos/rmsportal/udxAbMEhpwthVVcjLXik.png',
    name: 'TradeCode 99',
    owner: '曲丽丽',
    desc: '这是一段描述',
    callNo: 499,
    status: 1,
    updatedAt: '2020-04-04T17:40:56.234Z',
    createdAt: '2020-04-04T17:40:56.234Z',
    progress: 66,
  },
  {
    key: 98,
    disabled: false,
    href: 'https://ant.design',
    avatar: 'https://gw.alipayobjects.com/zos/rmsportal/eeHMaZBwmTvLdIwMfBpg.png',
    name: 'TradeCode 98',
    owner: '曲丽丽',
    desc: '这是一段描述',
    callNo: 935,
    status: 1,
    updatedAt: '2020-04-04T17:40:56.234Z',
    createdAt: '2020-04-04T17:40:56.234Z',
    progress: 25,
  },
  {
    key: 97,
    disabled: false,
    href: 'https://ant.design',
    avatar: 'https://gw.alipayobjects.com/zos/rmsportal/udxAbMEhpwthVVcjLXik.png',
    name: 'TradeCode 97',
    owner: '曲丽丽',
    desc: '这是一段描述',
    callNo: 525,
    status: 3,
    updatedAt: '2020-04-04T17:40:56.234Z',
    createdAt: '2020-04-04T17:40:56.234Z',
    progress: 61,
  },
  {
    key: 96,
    disabled: true,
    href: 'https://ant.design',
    avatar: 'https://gw.alipayobjects.com/zos/rmsportal/eeHMaZBwmTvLdIwMfBpg.png',
    name: 'TradeCode 96',
    owner: '曲丽丽',
    desc: '这是一段描述',
    callNo: 433,
    status: 3,
    updatedAt: '2020-04-04T17:40:56.234Z',
    createdAt: '2020-04-04T17:40:56.234Z',
    progress: 13,
  },
  {
    key: 95,
    disabled: false,
    href: 'https://ant.design',
    avatar: 'https://gw.alipayobjects.com/zos/rmsportal/udxAbMEhpwthVVcjLXik.png',
    name: 'TradeCode 95',
    owner: '曲丽丽',
    desc: '这是一段描述',
    callNo: 393,
    status: 2,
    updatedAt: '2020-04-04T17:40:56.234Z',
    createdAt: '2020-04-04T17:40:56.234Z',
    progress: 65,
  },
  {
    key: 94,
    disabled: false,
    href: 'https://ant.design',
    avatar: 'https://gw.alipayobjects.com/zos/rmsportal/eeHMaZBwmTvLdIwMfBpg.png',
    name: 'TradeCode 94',
    owner: '曲丽丽',
    desc: '这是一段描述',
    callNo: 176,
    status: 2,
    updatedAt: '2020-04-04T17:40:56.234Z',
    createdAt: '2020-04-04T17:40:56.234Z',
    progress: 26,
  },
  {
    key: 93,
    disabled: false,
    href: 'https://ant.design',
    avatar: 'https://gw.alipayobjects.com/zos/rmsportal/udxAbMEhpwthVVcjLXik.png',
    name: 'TradeCode 93',
    owner: '曲丽丽',
    desc: '这是一段描述',
    callNo: 710,
    status: 3,
    updatedAt: '2020-04-04T17:40:56.234Z',
    createdAt: '2020-04-04T17:40:56.234Z',
    progress: 77,
  },
  {
    key: 92,
    disabled: false,
    href: 'https://ant.design',
    avatar: 'https://gw.alipayobjects.com/zos/rmsportal/eeHMaZBwmTvLdIwMfBpg.png',
    name: 'TradeCode 92',
    owner: '曲丽丽',
    desc: '这是一段描述',
    callNo: 37,
    status: 3,
    updatedAt: '2020-04-04T17:40:56.234Z',
    createdAt: '2020-04-04T17:40:56.234Z',
    progress: 50,
  },
  {
    key: 91,
    disabled: false,
    href: 'https://ant.design',
    avatar: 'https://gw.alipayobjects.com/zos/rmsportal/udxAbMEhpwthVVcjLXik.png',
    name: 'TradeCode 91',
    owner: '曲丽丽',
    desc: '这是一段描述',
    callNo: 567,
    status: 1,
    updatedAt: '2020-04-04T17:40:56.234Z',
    createdAt: '2020-04-04T17:40:56.234Z',
    progress: 90,
  },
  {
    key: 90,
    disabled: true,
    href: 'https://ant.design',
    avatar: 'https://gw.alipayobjects.com/zos/rmsportal/eeHMaZBwmTvLdIwMfBpg.png',
    name: 'TradeCode 90',
    owner: '曲丽丽',
    desc: '这是一段描述',
    callNo: 747,
    status: 0,
    updatedAt: '2020-04-04T17:40:56.234Z',
    createdAt: '2020-04-04T17:40:56.234Z',
    progress: 64,
  },
  {
    key: 89,
    disabled: false,
    href: 'https://ant.design',
    avatar: 'https://gw.alipayobjects.com/zos/rmsportal/udxAbMEhpwthVVcjLXik.png',
    name: 'TradeCode 89',
    owner: '曲丽丽',
    desc: '这是一段描述',
    callNo: 200,
    status: 0,
    updatedAt: '2020-04-04T17:40:56.234Z',
    createdAt: '2020-04-04T17:40:56.234Z',
    progress: 80,
  },
  {
    key: 88,
    disabled: false,
    href: 'https://ant.design',
    avatar: 'https://gw.alipayobjects.com/zos/rmsportal/eeHMaZBwmTvLdIwMfBpg.png',
    name: 'TradeCode 88',
    owner: '曲丽丽',
    desc: '这是一段描述',
    callNo: 4,
    status: 1,
    updatedAt: '2020-04-04T17:40:56.234Z',
    createdAt: '2020-04-04T17:40:56.234Z',
    progress: 43,
  },
  {
    key: 87,
    disabled: false,
    href: 'https://ant.design',
    avatar: 'https://gw.alipayobjects.com/zos/rmsportal/udxAbMEhpwthVVcjLXik.png',
    name: 'TradeCode 87',
    owner: '曲丽丽',
    desc: '这是一段描述',
    callNo: 83,
    status: 1,
    updatedAt: '2020-04-04T17:40:56.234Z',
    createdAt: '2020-04-04T17:40:56.234Z',
    progress: 18,
  },
  {
    key: 86,
    disabled: false,
    href: 'https://ant.design',
    avatar: 'https://gw.alipayobjects.com/zos/rmsportal/eeHMaZBwmTvLdIwMfBpg.png',
    name: 'TradeCode 86',
    owner: '曲丽丽',
    desc: '这是一段描述',
    callNo: 503,
    status: 1,
    updatedAt: '2020-04-04T17:40:56.234Z',
    createdAt: '2020-04-04T17:40:56.234Z',
    progress: 49,
  },
  {
    key: 85,
    disabled: false,
    href: 'https://ant.design',
    avatar: 'https://gw.alipayobjects.com/zos/rmsportal/udxAbMEhpwthVVcjLXik.png',
    name: 'TradeCode 85',
    owner: '曲丽丽',
    desc: '这是一段描述',
    callNo: 20,
    status: 1,
    updatedAt: '2020-04-04T17:40:56.234Z',
    createdAt: '2020-04-04T17:40:56.234Z',
    progress: 2,
  },
  {
    key: 84,
    disabled: true,
    href: 'https://ant.design',
    avatar: 'https://gw.alipayobjects.com/zos/rmsportal/eeHMaZBwmTvLdIwMfBpg.png',
    name: 'TradeCode 84',
    owner: '曲丽丽',
    desc: '这是一段描述',
    callNo: 742,
    status: 3,
    updatedAt: '2020-04-04T17:40:56.234Z',
    createdAt: '2020-04-04T17:40:56.234Z',
    progress: 90,
  },
  {
    key: 83,
    disabled: false,
    href: 'https://ant.design',
    avatar: 'https://gw.alipayobjects.com/zos/rmsportal/udxAbMEhpwthVVcjLXik.png',
    name: 'TradeCode 83',
    owner: '曲丽丽',
    desc: '这是一段描述',
    callNo: 633,
    status: 2,
    updatedAt: '2020-04-04T17:40:56.234Z',
    createdAt: '2020-04-04T17:40:56.234Z',
    progress: 47,
  },
  {
    key: 82,
    disabled: false,
    href: 'https://ant.design',
    avatar: 'https://gw.alipayobjects.com/zos/rmsportal/eeHMaZBwmTvLdIwMfBpg.png',
    name: 'TradeCode 82',
    owner: '曲丽丽',
    desc: '这是一段描述',
    callNo: 788,
    status: 3,
    updatedAt: '2020-04-04T17:40:56.234Z',
    createdAt: '2020-04-04T17:40:56.234Z',
    progress: 14,
  },
  {
    key: 81,
    disabled: false,
    href: 'https://ant.design',
    avatar: 'https://gw.alipayobjects.com/zos/rmsportal/udxAbMEhpwthVVcjLXik.png',
    name: 'TradeCode 81',
    owner: '曲丽丽',
    desc: '这是一段描述',
    callNo: 963,
    status: 2,
    updatedAt: '2020-04-04T17:40:56.234Z',
    createdAt: '2020-04-04T17:40:56.234Z',
    progress: 5,
  },
  {
    key: 80,
    disabled: false,
    href: 'https://ant.design',
    avatar: 'https://gw.alipayobjects.com/zos/rmsportal/eeHMaZBwmTvLdIwMfBpg.png',
    name: 'TradeCode 80',
    owner: '曲丽丽',
    desc: '这是一段描述',
    callNo: 373,
    status: 0,
    updatedAt: '2020-04-04T17:40:56.234Z',
    createdAt: '2020-04-04T17:40:56.234Z',
    progress: 1,
  },
];

function getRule(req: Request, res: Response, u: string) {
  let realUrl = u;
  if (!realUrl || Object.prototype.toString.call(realUrl) !== '[object String]') {
    realUrl = req.url;
  }
  const { current = 1, pageSize = 10 } = req.query;
  const params = (parse(realUrl, true).query as unknown) as TableListParams;

  let dataSource = [...tableListDataSource].slice((current - 1) * pageSize, current * pageSize);
  if (params.sorter) {
    const s = params.sorter.split('_');
    dataSource = dataSource.sort((prev, next) => {
      if (s[1] === 'descend') {
        return next[s[0]] - prev[s[0]];
      }
      return prev[s[0]] - next[s[0]];
    });
  }

  if (params.status) {
    const status = params.status.split(',');
    let filterDataSource: Partial<TableListItem>[] = [];
    status.forEach((s: string) => {
      filterDataSource = filterDataSource.concat(
        dataSource.filter((item) => {
          if (parseInt(`${item.status}`, 10) === parseInt(s.split('')[0], 10)) {
            return true;
          }
          return false;
        }),
      );
    });
    dataSource = filterDataSource;
  }

  if (params.name) {
    dataSource = dataSource.filter((data) => data.name && data.name.includes(params.name || ''));
  }
  const result = {
    data: dataSource,
    total: tableListDataSource.length,
    success: true,
    pageSize,
    current: parseInt(`${params.currentPage}`, 10) || 1,
  };

  return res.json(result);
}

function postRule(req: Request, res: Response, u: string, b: Request) {
  let realUrl = u;
  if (!realUrl || Object.prototype.toString.call(realUrl) !== '[object String]') {
    realUrl = req.url;
  }

  const body = (b && b.body) || req.body;
  const { method, name, desc, key } = body;

  switch (method) {
    /* eslint no-case-declarations:0 */
    case 'delete':
      tableListDataSource = tableListDataSource.filter((item) => key.indexOf(item.key) === -1);
      break;
    case 'post':
      (() => {
        const i = Math.ceil(Math.random() * 10000);
        const newRule = {
          key: tableListDataSource.length,
          href: 'https://ant.design',
          avatar: [
            'https://gw.alipayobjects.com/zos/rmsportal/eeHMaZBwmTvLdIwMfBpg.png',
            'https://gw.alipayobjects.com/zos/rmsportal/udxAbMEhpwthVVcjLXik.png',
          ][i % 2],
          name,
          owner: '曲丽丽',
          desc,
          callNo: Math.floor(Math.random() * 1000),
          status: Math.floor(Math.random() * 10) % 2,
          updatedAt: Date().toLocaleString(),
          createdAt: Date().toLocaleString(),
          progress: Math.ceil(Math.random() * 100),
        };
        tableListDataSource.unshift(newRule);
        return res.json(newRule);
      })();
      return;

    case 'update':
      (() => {
        let newRule = {};
        tableListDataSource = tableListDataSource.map((item) => {
          if (item.key === key) {
            newRule = { ...item, desc, name };
            return { ...item, desc, name };
          }
          return item;
        });
        return res.json(newRule);
      })();
      return;
    default:
      break;
  }

  const result = {
    list: tableListDataSource,
    pagination: {
      total: tableListDataSource.length,
    },
  };

  res.json(result);
}

export default {
  'GET /api/rule': getRule,
  'POST /api/rule': postRule,
};
