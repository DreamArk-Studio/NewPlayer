//LiteLoaderScript Dev Helper
/// <reference path="c:\Users\n\Desktop\pluginstest/Library/JS/Api.js" /> 
/// <reference path="c:\Users\n\Desktop\pluginstest/Library/JS/Api.js" />

log('✅NewPlayer插件加载成功! 🧑‍💻publisher：星雲Nebulae 🏢Studio：DreamArk筑梦方舟');

const jsdb = new JsonConfigFile('./logs/newplayer.json');
let nsw_player_num = jsdb.init('new_player_numbers', 0);
let EveryDay_new_player = jsdb.init('EveryDay_new_player', 0);
let new_player = jsdb.init('new_player_list', []);
let old_time, day = 0;

mc.listen('onJoin', (pl) => {
    if (!jsdb.get('new_player_list').includes(pl.name)) {
        const db = jsdb.get('new_player_list'); 
        day = jsdb.get('EveryDay_new_player');
        const num = jsdb.get('new_player_numbers'); 
        
        day += 1;
        jsdb.set('EveryDay_new_player', day);
        
        db.push(pl.name);
        jsdb.set('new_player_list', db);
        
        jsdb.set('new_player_numbers', num + 1);
    }
});

setInterval(() => {
    const time = system.getTimeObj();
    const time_String = system.getTimeStr();
    
    if (time.D !== old_time) {
        jsdb.set('EveryDay_new_player', 0);
        old_time = time.D;
    }
}, 360000);

// 定义API函数
function getNewPlayerCount() {
    return jsdb.get('new_player_numbers');
}

function getTodayNewPlayerCount() {
    return jsdb.get('EveryDay_new_player');
}

function getNewPlayerList() {
    return jsdb.get('new_player_list');
}

function isNewPlayer(playerName) {
    return jsdb.get('new_player_list').includes(playerName);
}

function addNewPlayer(playerName) {
    if (!isNewPlayer(playerName)) {
        const db = jsdb.get('new_player_list');
        const num = jsdb.get('new_player_numbers');
        const day = jsdb.get('EveryDay_new_player');

        db.push(playerName);
        jsdb.set('new_player_list', db);
        jsdb.set('new_player_numbers', num + 1);
        jsdb.set('EveryDay_new_player', day + 1);

        return true;
    }
    return false;
}

function resetTodayCount() {
    jsdb.set('EveryDay_new_player', 0);
}

// 暴露API
ll.exports(getNewPlayerCount, "NewPlayer", "getNewPlayerCount");
ll.exports(getTodayNewPlayerCount, "NewPlayer", "getTodayNewPlayerCount");
ll.exports(getNewPlayerList, "NewPlayer", "getNewPlayerList");
ll.exports(isNewPlayer, "NewPlayer", "isNewPlayer");
ll.exports(addNewPlayer, "NewPlayer", "addNewPlayer");
ll.exports(resetTodayCount, "NewPlayer", "resetTodayCount");