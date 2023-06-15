# table.github.io
## 目录
```
table-docs
├─.gitignore 
├─README.md
├─script
|   └export.sh
├─.github
|    ├─workflows
|    |     └deploy.yml
├─docs
|  ├─index.md
|  ├─guide
|  |   ├─config.md
|  |   ├─getting-started.md
|  |   ├─config
|  |   |   ├─data.md
|  |   |   ├─eventloop.md
|  |   |   ├─interaction.md
|  |   |   ├─options.md
|  |   |   └style.md
|  ├─.vitepress
|  |     ├─config.js
```

## 使用说明
只需在main分支push代码，会触发工作流并将构建后的文件推送到gh-pages分支，自动更新说明
