# NewPlayer 插件介绍  

## 📌 插件概述  
**NewPlayer** 是一个轻量级的 Minecraft 服务器玩家统计插件，专门用于追踪记录服务器的新玩家加入情况。  

- **作者**: 星雲Nebulae  
- **工作室**: DreamArk筑梦方舟  
- **加载提示**:  
  `✅ NewPlayer插件加载成功! 🧑‍💻 publisher：星雲Nebulae 🏢 Studio：DreamArk筑梦方舟`  

## 🌟 功能特性  
- **新玩家数量统计**：记录服务器累计新玩家总数  
- **每日新玩家统计**：自动重置的每日新玩家计数器  
- **新玩家名单记录**：保存所有首次加入服务器的玩家名称  
- **自动日更系统**：每天自动重置每日计数器  

## 📊 数据存储  
插件使用 JSON 文件存储所有数据，位置在 `./logs/newplayer.json`，包含以下数据项：  

```json
{
  "new_player_numbers": 0,    // 累计新玩家总数
  "EveryDay_new_player": 0,   // 当日新玩家数量
  "new_player_list": []       // 所有新玩家名单
}
```
## ⚙️ 工作原理
1. 当玩家加入服务器时，插件检查该玩家是否为新玩家  
2. 如果是新玩家：  
   - 将玩家名称添加到新玩家名单  
   - 累计新玩家总数 +1  
   - 当日新玩家数量 +1  
3. 每小时检查一次日期变化，如果检测到新的一天，自动重置当日计数器  


## 💡 使用场景
- 服务器管理员监控玩家增长情况  
- 分析服务器人气趋势  
- 统计服务器宣传效果  
> 这个插件非常适合需要简单追踪玩家增长的中小型 Minecraft 服务器使用。

# NewPlayer 插件 API 接口文档

## 核心接口

### `getNewPlayerCount()`
- **功能**: 获取服务器累计新玩家总数
- **返回值**: `Number` - 新玩家总数量

### `getTodayNewPlayerCount()`
- **功能**: 获取今日新增玩家数量
- **返回值**: `Number` - 今日新增玩家数（每日0点自动重置）

### `getNewPlayerList()`
- **功能**: 获取所有玩家名单
- **返回值**: `Array<String>` - 包含所有玩家名称的数组

### `isNewPlayer(playerName)`
- **功能**: 检查指定玩家是否存在
- **参数**:
  - `playerName`: `String` - 要检查的玩家名称
- **返回值**: `Boolean` 

### `addNewPlayer(playerName)`
- **功能**: 手动添加新玩家记录
- **参数**:
  - `playerName`: `String` - 要添加的玩家名称
- **返回值**: `Boolean` - 成功添加返回`true`，玩家已存在返回`false`

### `resetTodayCount()`
- **功能**: 重置今日新玩家计数器
- **注意**: 通常不需要手动调用，系统会自动每日重置
