# 数据配置

数据配置分为三个部分`fields`、`data`、`meta`，分别代表字段信息、数据值和元信息。



`fields`是有`rows`、`columns`、`values`等组成的，用于配置表格的基础配置信息。

| <div style="width:100px">字段</div> | <div style="width:200px">含义</div> | <div style="width:200px">类型</div>  |
| :-----| ----: | ----: |
| `rows` | 行维度 | string[] |
| `columns` | 列维度 | string[] |
| `values` | 指标 | string[] |
| `total_config` | 合计信息 |  |
| `value_in_row` | 指标显示在行 | boolean |
| `customValue` | 自定义单元格内容 |  |
| `customNullValue` | 空值展示 |  |

```ts
export interface OriginalData {
	/** (k,v)类型的data */
	data: OriginalDataItem[];
	fields: {
		/** 行维度 */
		rows?: string[];
		/** 列维度 */
		columns: string[];
		/** 指标 */
		values?: string[];
		/** 合计与小计配置 */
		total_config?: {
			row: TotalConfig;
			column: TotalConfig;
			/** 分指标的聚合方式 */
			aggregation?: Aggregation[];
		};
		/** 指标显示在行 */
		value_in_row?: boolean;
		/** 自定义单元格内容 */
		customValue?: (
			field: string,
			value: OriginalDataMeta
		) => OriginalDataMeta;
		/** 空值展示 */
		customNullValue?: (field: string) => OriginalDataMeta;
	};
	/** 元数据别名映射 */
	meta?: Record<string, OriginalDataMeta>[];
	sort_params?: [];
	filter_params?: [];
}
```

`total_config`是有`row`、`column`、`aggregation`组成的，分别代表行加和计算配置、列加和计算配置和合计方式。

| <div style="width:100px">字段</div> | <div style="width:200px">含义</div> | <div style="width:200px">类型</div>  |
| :-----| ----: | ----: |
| `sub_total_fields` | 小计列 | string[] |
| `show_sub_total` | 显示小计 | boolean |
| `sub_total_first` | 显示小计在前 | boolean |
| `show_grand_total` | 显示合计 | boolean |
| `grand_total_first` | 显示合计在前 | boolean |


```ts
/** 合计或小计配置 */
export interface TotalConfig {
	/** 需要做聚合的维度 */
	sub_total_fields?: string[];
	/** 显示小计 */
	show_sub_total?: boolean;
	/** 小计在前 */
	sub_total_first?: boolean;
	/** 显示合计 */
	show_grand_total?: boolean;
	/** 合计在前 */
	grand_total_first?: boolean;
}
```