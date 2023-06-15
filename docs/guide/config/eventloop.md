# 声明周期

`render`:
```ts
    const table = new Wtable(app, {
		data: s2DataConfig,
		options: {
			enable_row_number: true,
			fix_header: true,
			word_wrap: true,
			col_widths: [],
			event: {
				onRendered: () => {
					console.timeEnd('wtable');
				}
			}
		}
	});
```

`update`:
```ts
    table.updateOptions({
        data: fixed_mock_data,
        options: fixed_mock_config
    });
```

`destroy`:
```ts
    table.destroy();
```