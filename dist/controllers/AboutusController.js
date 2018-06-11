'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _dec, _dec2, _class, _desc, _value, _class2; /**
                                                  * Created by ww on 2018/6/11.
                                                  */


var _awilixKoa = require('awilix-koa');

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
        desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
        desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
        return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
        desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
        desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
        Object['define' + 'Property'](target, property, desc);
        desc = null;
    }

    return desc;
}

// or `awilix-router-core`
let IndexController = (_dec = (0, _awilixKoa.route)('/about'), _dec2 = (0, _awilixKoa.GET)(), _dec(_class = (_class2 = class IndexController {
    constructor({ indexModel }) {
        this.indexModel = indexModel;
    }

    async getData(ctx) {
        const result = await this.indexModel.getData();
        ctx.body = await ctx.render('index/pages/about', { data: result });
    }
}, (_applyDecoratedDescriptor(_class2.prototype, 'getData', [_dec2], Object.getOwnPropertyDescriptor(_class2.prototype, 'getData'), _class2.prototype)), _class2)) || _class);
exports.default = IndexController;