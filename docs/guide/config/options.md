# 功能配置

| <div style="width:100px">字段</div> | <div style="width:200px">含义</div> | <div style="width:200px">类型</div>  |
| :-----| ----: | ----: |
| `stretch` | 自动撑满，自适应画布宽度 | boolean |
| `word_wrap` | 自动换行 | boolean |
| `enable_row_number` | 表头是否固定 | boolean |
| `fix_header` | 显示小计在前 | boolean |
| `col_widths` | 固定列配置 | number[] |


```ts
export interface OriginalOption {
	/** 自动撑满 */
	stretch?: boolean;
	/** 自动换行 */
	word_wrap?: boolean;
	/** 表头是否固定 */
	fix_header?: boolean;
	/** 是否开启序号 */
	enable_row_number?: boolean;
	/** 列宽 */
	col_widths: number[];

	/** 对齐方式 */
	aligns_settings: {
		row: AlignType;
		column: AlignType;
		table_body: AlignType;
	};

	/** 通用样式设置 */
	table_style?: {
		common?: {
			border_type: BorderType;
			border_color: string;
		};
		/** table行header的样式 */
		row_header?: TableHeaderStyle;
		/** table列header的样式 */
		col_header?: TableHeaderStyle;
		/** table body的样式 */
		table_body?: TableBodyStyle;
	};

	customRenderers?: {
		corner?: CustomRenderer;
	};

	/** 事件 */
	event?: Partial<TableEvent>;

	/** 条件格式 */
	conditions?: Record<string, TableCondition>;
}
```