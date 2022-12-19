class MemCache<CacheType> {
  _cache: CacheType | null;
  expireTimeout?: NodeJS.Timeout;
  expire: number;

  constructor() {
    this._cache = null;
    this.expireTimeout;
    this.expire = 0;
    this.clear();
  }

  set(value: CacheType, expire = 0) {
    this.clear();

    if (expire) {
      this.expire = expire + Date.now();
      this.expireTimeout = setTimeout(() => {
        this.clear();
      }, expire);
    }

    this._cache = value;
    return value;
  }

  get() {
    const res = this._cache;
    return res;
  }

  clear() {
    this._cache = null;
    this.expire = 0;
    if (this.expireTimeout) clearTimeout(this.expireTimeout);
  }
}

export { MemCache };
