'use strict'

const Test = use('App/Models/Test')

class TestController {
  async index({view}){
    const tests = await Test.all()
    const test = new Test()
    const post = [
      {eggkey:'btc',eggvalue:'btc'},
      {eggkey:'eth',eggvalue:'eth'},
      {eggkey:'lbtc',eggvalue:'lbtc'}
    ]
    post.forEach(v =>{
      test.eggkey = v.eggkey
      test.eggvalue = v.eggvalue
    })
    console.log(test)
    return view.render('test.testimages',{
      title: '图片测试',
      tests:  tests.toJSON()
    })
  }
}

module.exports = TestController
