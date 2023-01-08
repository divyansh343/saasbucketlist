class APIFeatures {
  constructor(query, queryStr) {
    this.query = query;
    this.queryStr = queryStr;
  }

  search() {
    const search = this.queryStr.search ? {
      why: {
        $regex: this.queryStr.search,
        $options: 'i'
      }
    } : {}
    this.query = this.query.find({ ...search })
    return this;
  }

  filter() {
    if(this.queryStr.for){
      this.query = this.query.find({ for: {"$in": [this.queryStr.for]}})
      return this;
    } else {
      return this;
    }
  }

  // pagination(resPerPage) {
  //   let currentPage = Number(this.queryStr.page) || 1;
  //   let skip = resPerPage * (currentPage - 1)
  //   this.query = this.query.limit(resPerPage).skip(skip)
  //   return this;
  // }
}
export default APIFeatures;