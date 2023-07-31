# 功能配置

| <div style="width:100px">字段</div> | <div style="width:200px">含义</div> | <div style="width:200px">类型</div>  |
| :-----| ----: | ----: |
| `stretch` | 自动撑满，自适应画布宽度 | boolean |
| `word_wrap` | 自动换行 | boolean |
| `enable_row_number` | 表头是否固定 | boolean |
| `fix_header` | 显示小计在前 | boolean |
| `col_widths` | 固定列配置 | number[] |


```ts
/** 用户输入的option */
export interface OriginalOption {
	/** 最小列宽 */
	min_col_width?: number;
	/** 最小列高 */
	min_row_height?: number;
	/** 自动撑满 */
	stretch?: boolean;
	/** 自动换行 */
	word_wrap?: boolean;
	/** 表头是否固定 */
	fix_header?: boolean;
	/** 左侧表头固定 */
	fix_row_header?: boolean;
	/** 是否开启序号 */
	enable_row_number?: boolean;
	/** 开启聚合序号模式 */
	use_simple_row_number_mode?: boolean;
	/** 尾部冻结数量 */
	frozen_bottom_row_count?: number;
	/** 表格宽度可拖拽 */
	is_column_width_draggable?: boolean;
	/** 列宽 */
	col_widths?: number[];

	/** 通用样式设置 */
	table_style?: {
		common?: {
			border_type: BorderType;
			border_color: string;
			border_width: number;
		};
		/** table行header的样式 */
		row_header?: TableHeaderStyle;
		/** table列header的样式 */
		col_header?: TableHeaderStyle;
		/** table body的样式 */
		table_body?: TableBodyStyle;
	};

	/** 自定义模块渲染 */
	customRenderers?: CustomRenderer;

	/** 事件 */
	event?: Partial<TableEvent>;

	/** 条件格式 */
	conditions?: Condition;

	/** 主题 */
	theme?: ThemeCfg;

	/** 分页器配置 */
	pagination?: PaginationConfig;

	/** 排序 */
	sort?: {
		/** 排序规则 */
		sort_params?: SorterParamsConfig[];
		/** 是否开启前端排序计算 */
		use_sort_algorithm?: SorterAlgorithmType;
	};

	/** 支持精简表头模式 */
	use_simple_header_mode?: boolean;
}


/** 排序规则 */
export enum SorterType {
	Default = 'default', // 默认、自定义
	Asc = 'asc', // 升序
	Desc = 'desc' // 降序
}

/** 排序生效模式 */
export enum SorterAlgorithmType {
	/** 排序分组生效 */
	Group = 'group',
	/** 单列分组生效 */
	Single = 'single'
}

/** 主题配置 */
export interface ThemeCfg {
	primary_color?: string;
	name?: Theme;
}
```