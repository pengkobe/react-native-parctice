var Storage = require('../utils/Storage')
var config = require('../configs/config')
var request = require('../utils/Request')

var storage = {}


storage.saveAlarmInfo = function (userInfo) {
    return Storage.setItem('alarminfo', userInfo)
}


storage.getAlarmInfo = function () {
    return Storage.getItem('alarminfo')
}


var req = {}


req.getAlarmList = function (info) {
    var url = config.domain + '/Action.ashx?Name=HYD.E3.Business.AlarmBLL.getAlarmListDay'
    return request.post(url, info)
        .then(data => {
            console.log(data);
            Storage.setItem('alarminfo', data.data);
            return data.data;

            throw '报警信息获取错误'
        });
}


exports.storage = storage
exports.req = req
