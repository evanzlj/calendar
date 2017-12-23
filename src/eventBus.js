const wm = new weakMap();
export default class Observer {
  constructor () {
    wm.set(this, {})
  },
  add(name, cb) {
    let ob = wm.get(this);
    ob[name] = ob[name] || [];
    ob[name].push(cb)
  },
  notify(name, cb) {
    if (!name) {
      throw new Error('Params Error', 'function notify must have a params!')
    }
    let ob = wm.get(this);
    if (!ob[name]) {
      return null
    }
    if (!cb) {
      let _args = [].slice.call(arguments, 2)
      ob[name].map(cb => {
        cb.apply(this, _args)
      })
    }
  }
}
