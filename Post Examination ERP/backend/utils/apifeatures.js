class ApiFeatures{
    constructor(query,queryStr)
    {
        this.query=query
        this.queryStr=queryStr
    }


    // Api feature to search by product name
    search()
    {
        const keyword = this.queryStr.keyword?
        {
            name:{
                $regex: this.queryStr.keyword,
                $options: "i"
            }
            
        }:
        {

        }
        this.query=this.query.find({...keyword})
        return this
    }

    // Filter
    filter()
    {
        // To do deep copy we use spread operator
        const queryCopy = {...this.queryStr}

        // Remove some fields for category
        const removeFields = ["keyword","page","limit"]
        removeFields.forEach((key)=>delete queryCopy[key])

        // Filter for Price and Rating
        // http://localhost:4000/api/v1/products?keyword=new&price[gt]=1200&price[lt]=2000
        // { price: { gt: '1200', lt: '2000' } }
        // {"price":{"$gt":"1200","$lt":"2000"}}
        let queryStr = JSON.stringify(queryCopy);
        queryStr = queryStr.replace(/\b(gt|gte|lt|lte)\b/g, (key) => `$${key}`);
        
        let parsedJSON=JSON.parse(queryStr, function(k, v) { 
            return (k === "$gte" || k==="$gt" ||  k === "$lte" || k==="$lt") ? parseInt(v,10): v; 
        });

        this.query = this.query.find(parsedJSON);
        return this
    }
    pagination(resultPerPage)
    {
        const currentPage = Number(this.queryStr.page) || 1
        const skip = resultPerPage*(currentPage-1)
        this.query=this.query.limit(resultPerPage).skip(skip)
        return this
    }   
}

module.exports=ApiFeatures
