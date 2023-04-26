# 样式配置

**当前样式配置：**

- 支持单元格的对齐方式
- 通用的样式配置
- 条件格式
- 自定义角表头渲染



```ts
/** 文本样式 */
export interface TextStyle {
	font_size?: number;
	color?: string;
}

export type AlignType = 'left' | 'center' | 'right';

export type BorderType = 'all' | 'row' | 'col' | 'outer';

export interface TableHeaderStyle {
	background: string;
	text_style: TextStyle;
}

/** table body的样式 */
export interface TableBodyStyle {
	/** 奇数行背景色 */
	odd_background: string;
	/** 偶数行背景色 */
	even_background: string;
	text_style: TextStyle;
}

export interface OriginalOption {
	/** 对齐方式 */
	aligns_settings: {
		row: AlignType;
		column: AlignType;
		table_body: AlignType;
	};

	/** 通用样式设置 */
	table_style: {
		common: {
			border_type: BorderType;
			border_color: string;
			width: number;
			height: number;
		};
		/** table行header的样式 */
		row_header: TableHeaderStyle;
		/** table列header的样式 */
		col_header: TableHeaderStyle;
		/** table body的样式 */
		table_body: TableBodyStyle;
	};

	/** 条件格式 */
	conditions: Record<string, TableCondition>;

	/** 自定义渲染，目前只支持角表头 */
	customRenderers?: {
		corner?: CustomRenderer;
	};
}
```

条件格式：

```ts
export interface TableCondition {
	getConditionConfig: (value: OriginalDataMeta) => {
		/** 要显示的label */
		label: OriginalDataMeta;
		/** 加上额外内容的字符 */
		custom_string_content: string;
	};
	/** 额外的内容，提供dom供挂载 */
	customContentRenderer: (
		label: OriginalDataMeta,
		el: HTMLElement
	) => HTMLElement | string;
}
export interface CustomRenderer {
	/** 加上额外内容的字符 */
	customStringContent: (value: OriginalDataMeta) => OriginalDataMeta;
	/** 额外的内容，提供dom供挂载 */
	customContentRenderer: (
		label: OriginalDataMeta,
		el: HTMLElement
	) => HTMLElement | string;
}

export type ConditionType = 'icon' | 'background';
```