# 交互配置

**当前交互支持的触发事件：点击、拖拽**



```ts
export interface OriginalOption {
	/** 事件 */
	event?: Partial<TableEvent>;
}
```

点击：只对表格数据部分生效，获取数据值和查询维度信息。

拖拽：拖拽表头宽度，获取自定义宽度值。

```ts
export interface TableEvent {
	/** 点击事件 */
	onClick?: (
		e: MouseEvent,
		target: HTMLElement,
		arr: {
			key: OriginalDataMeta;
			value: OriginalDataMeta;
		}[],
		data: BaseCell
	) => void;
	/** column resize事件 */
	onColResize?: (
		widths: number[],
		{
			x1,
			x2,
			size,
			type
		}: { x1: number; x2: number; size: number; type: HeaderType }
	) => void;
	/** 修改排序 */
	onSorterChange?: (
		results: SorterParamsConfig[],
		cell: CellProps,
		sorter: SorterType
	) => void;
	/** 修改配置 */
	onOptionsChange?: (options: OriginalOption) => void;
	/** 修改数据 */
	onDataChange?: (data: OriginalData) => void;
	/** 渲染完成 */
	onRendered?: () => void;
}
```