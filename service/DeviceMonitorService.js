var Storage = require('../utils/Storage')
var config = require('../configs/config')
var request = require('../utils/Request')

var storage = {}

var req = {}

req.GetByNavType = function (PCode) {
    console.log('fetch device type ');
    var Url = config.domain + '/Action.ashx?Name=HYD.E3.Business.APP_CommonBLL.GetDeviceRun'
    return request.post(Url, PCode)
        .then(data => {
            if (data) {                
                return data.data;
            }

            throw '按设备房获取数据错误！'
        });
}

req.GetByDeviceType = function (PCode) {
     console.log('fetch device type ');
    var Url = config.domain + '/Action.ashx?Name=HYD.E3.Business.ProjectDeviceTypeBLL.GetAllDeviceInfo'
    return request.post(Url, PCode)
        .then(data => {
            if (data) {
                console.log(data.data);
                return data.data;
            }

            throw '按设备类型获取数据错误！'
        });
}

req.GetByBuildingType = function (PCode) {
     console.log('fetch build type ');
    var Url = config.domain + '/Action.ashx?Name=HYD.E3.Business.ProjectDeviceTypeBLL.GetLouInfo'
    return request.post(Url, PCode)
        .then(data => {
            if (data) {
                
                return data.data;
            }

            throw '按建筑获取数据错误！'
        });
}


exports.storage = storage
exports.req = req
