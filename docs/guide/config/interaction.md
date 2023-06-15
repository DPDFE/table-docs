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
		data: OriginalDataItem
	) => void;
	/** column resize事件 */
	onColResize?: (
		start: number,
		end: number,
		width: number,
		widths?: number[]
	) => void;
	/** 修改排序 */
	onSorterChange?: (results: SorterParamsConfig[]) => void;
	/** 渲染完成 */
	onRendered?: () => void;
}
```