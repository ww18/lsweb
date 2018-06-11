/**
 * Created by ww on 2018/6/11.
 */
import { route, GET, POST, before } from 'awilix-koa' // or `awilix-router-core`
@route('/about')
export default class IndexController {
    constructor({ indexModel }) {
        this.indexModel = indexModel
    }

	@GET()
    async getData(ctx) {
        const result = await this.indexModel.getData();
        ctx.body = await ctx.render('index/pages/about',{data: result});
    }
}