# 快速上手

### 安装

`npm`/`yarn`/`pnpm`:
```shell
npm install @dpdfe/table --registry=http://ires.58corp.com/repository/58npm/
# yarn add @dpdfe/table --registry=http://ires.58corp.com/repository/58npm/
```
`CDN`:
```js
	<script src="https://wos2.58cdn.com.cn/MnOjIhGfMnSn/dpd/wtable-0.0.1-umd.min.js"></script>
```

### 使用

**1.数据准备**
```js
const fixed_mock_data: OriginalData = {
	fields: {
		rows: ['province', 'city', 'year'],
		columns: ['type', 'product'],
		values: ['income', 'cost'],
		value_in_row: false,
		total_config: {
			row: {
				sub_total_fields: ['city', 'year'],
				show_sub_total: true,
				sub_total_first: true,
				show_grand_total: true,
				grand_total_first: true
			},
			column: {
				sub_total_fields: ['product'],
				show_sub_total: true,
				sub_total_first: true,
				show_grand_total: true,
				grand_total_first: true
			},
			aggregation: ['SUM', 'SUM']
		}
	},
	data: [
		{
			type: '调料',
			product: '多力葵花油500ml',
			province: '上海市',
			city: '上海市',
			year: '2020',
			income: 2393.16,
			cost: 1044.8
		},
		{
			type: '饮料',
			product: '罐装雪碧280ml装',
			province: '上海市',
			city: '上海市',
			year: '2021',
			income: 28681.9,
			cost: 15711.19
		},

		{
			type: '饮料',
			product: '纯悦550ml矿物质水',
			province: '上海市',
			city: '上海市',
			year: '2020',
			income: 66791.12,
			cost: 40299.44
		},
		{
			type: '饮料',
			product: '罐装雪碧280ml装',
			province: '上海市',
			city: '上海市',
			year: '2020',
			income: 17314.63,
			cost: 9455.61
		},
		{
			type: '饮料',
			product: '纯悦550ml矿物质水',
			province: '云南省',
			city: '西双版纳傣族自治州',
			year: '2021',
			income: 5249.99,
			cost: 3250.32
		},
		{
			type: '饮料',
			product: '纯悦550ml矿物质水',
			province: '云南省',
			city: '昆明市',
			year: '2021',
			income: 4952.58,
			cost: 2630.12
		},
		{
			type: '饮料',
			product: '纯悦550ml矿物质水',
			province: '云南省',
			city: '曲靖市',
			year: '2021',
			income: 54.31,
			cost: 33.7
		},
		{
			type: '调料',
			product: '太太乐40g鸡精调味料',
			province: '云南省',
			city: '德宏傣族景颇族自治州',
			year: '2021',
			income: 1396.55,
			cost: 546.8
		},
		{
			type: '饮料',
			product: '纯悦550ml矿物质水',
			province: '云南省',
			city: '玉溪市',
			year: '2021',
			income: 1665.52,
			cost: 1031.14
		},
		{
			type: '饮料',
			product: '纯悦550ml矿物质水',
			province: '云南省',
			city: '玉溪市',
			year: '2020',
			income: 1538.46,
			cost: 520.4
		},
		{
			type: '饮料',
			product: '罐装雪碧280ml装',
			province: '云南省',
			city: '丽江市',
			year: '2021',
			income: 4224.14,
			cost: 1799.4
		},
		{
			type: '调料',
			product: '太太乐40g鸡精调味料',
			province: '上海市',
			city: '上海市',
			year: '2020',
			income: 3058.09,
			cost: 1162.37
		},
		{
			type: '饮料',
			product: '纯悦550ml矿物质水',
			province: '上海市',
			city: '上海市',
			year: '2021',
			income: 284317.85,
			cost: 172298.08
		},
		{
			type: '调料',
			product: '太太乐40g鸡精调味料',
			province: '上海市',
			city: '上海市',
			year: '2021',
			income: 4978.45,
			cost: 2503.6
		},
		{
			type: '饮料',
			product: '纯悦550ml矿物质水',
			province: '云南省',
			city: '昆明市',
			year: '2020',
			income: 843.59,
			cost: 525.23
		}
	],
	meta: [
		{
			field: 'type',
			name: '类别'
		},
		{
			field: 'product',
			name: '名称'
		},
		{
			field: 'province',
			name: '省份'
		},
		{
			field: 'city',
			name: '城市'
		},
		{
			field: 'year',
			name: '年份'
		},
		{
			field: 'income',
			name: '收入'
		},
		{
			field: 'cost',
			name: '成本'
		}
	]
};
```

**2.配置项准备**
```js
const fixed_mock_config: OriginalOption = {
	/** 水平扩张 */
	stretch: true,
	/** 自动换行 */
	word_wrap: true,
	/** 展示序号 */
	enable_row_number: true,
	/** 表头是否固定 */
	fix_header: true,
	col_widths: [],
};
```

**3.渲染**
```html
	<div id="root"></div>
```

```css
@import '@dpdfe/table/style.css';
```

```js
import { XHTable } from '@dpdfe/table';

const container = document.querySelector<HTMLElement>('#root');

new XHTable(container, {
	data: fixed_mock_data,
	options: fixed_mock_config
});
```

**4.效果**

基础表：

![基础表](https://wos2.58cdn.com.cn/MnOjIhGfMnSn/xinghuobackend/5a99c9e50a2c4fd5a4bd97d67190f63a.png)


交叉表：

![交叉表](https://wos2.58cdn.com.cn/MnOjIhGfMnSn/xinghuobackend/b3426170820d4d64920a1f4dc4225a1c.png)