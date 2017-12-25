const wm = new WeakMap();
export default class Observer {
  constructor () {
    wm.set(this, {})
  }
  add(name, cb) {
    let ob = wm.get(this);
    ob[name] = ob[name] || [];
    ob[name].push(cb)
  }
  notify(name) {
    console.log(123)
    if (!name) {
      throw new Error('Params Error', 'function notify must have a params!')
    }
    let ob = wm.get(this);
    if (!ob[name]) {
      return null
    }
    let _args = [].slice.call(arguments, 1)
    ob[name].map(cb => {
      cb.apply(this, _args)
    })
  }
}
