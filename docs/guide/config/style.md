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

/** table header的样式 */
export interface TableHeaderStyle {
	background: string;
	text_style: TextStyle;
	align: AlignType;
}
/** table body的样式 */
export interface TableBodyStyle {
	/** 奇数行背景色 */
	odd_background: string;
	/** 偶数行背景色 */
	even_background: string;
	text_style: TextStyle;
	/** 对齐方式 */
	align: AlignType;
}

export declare enum HeaderType {
	Row = 'Row',
	Col = 'Col',
	Corner = 'Corner',
	Body = 'Body',
	BottomRow = 'BottomRow',
	BottomBody = 'BottomBody'
}

export interface OriginalOption {
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
	customRenderers?: {
		[key in HeaderType]?: CustomRenderer;
	};

	/** 条件格式 */
	conditions: Condition;
}
```

条件格式：

```ts
export declare enum TableConditionType {
	Icon = 'Icon',
	ColorScale = 'ColorScale',
	DataBar = 'DataBar'
}
/** 条件格式 */
export type Condition = Record<
	string,
	| Record<TableConditionType.Icon, IconTableCondition>
	| Record<TableConditionType.ColorScale, ColorScaleTableCondition>
	| Record<TableConditionType.DataBar, DataBarTableCondition>
>;
/** 图标颜色 */
export interface IconTableCondition {
	icon_position?: 'left' | 'right';
	icon_only?: boolean;
	show_icon?: boolean;
	getStyle: ({ label, type_key, type_value, data }: BodyData) => {
		icon_color?: string;
		icon_name?: string;
	};
}
/** 色阶 */
export interface ColorScaleTableCondition {
	getStyle: ({ label, type_key, type_value, data }: BodyData) => {
		text_color?: string;
		background_color?: string;
	};
}
/** 数据条 */
export interface DataBarTableCondition {
	/** TODO: 支持颜色渐变 */
	positive_color: string;
	negative_color: string;
	/** 获取数据条长度占比 */
	max: number;
	min: number;
	mid: number;
}
```