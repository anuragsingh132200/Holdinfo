const axios = require('axios')
const Data = require('../models/apiData')

module.exports.home = async (req, res) => {    
    try {
        // fetch required data from api
        const response = await axios.get('https://api.wazirx.com/api/v2/tickers');
        let apiData = await response.data;
        let allData = Object.keys(apiData);
        let requiredDataArr = allData.slice(0, 10)

        // store data in mongodb if not already exist (10 only)
        for(let i = 0; i <= 9; i++){
        
            let dataList = await Data.findOne({name: requiredDataArr[i]})
            let obj = await apiData[requiredDataArr[i]]

            if(!dataList){      
                let dataList = await Data.create({
                    name: requiredDataArr[i],
                    last: obj['last'],
                    buy: obj['buy'], 
                    sell: obj['sell'], 
                    volume: obj['volume'], 
                    base_unit: obj['base_unit']
                })
            }

            if(dataList){
                let dateList = await Data.updateOne({name: requiredDataArr[i]}, {
                    last: obj['last'],
                    buy: obj['buy'], 
                    sell: obj['sell'], 
                    volume: obj['volume'], 
                    base_unit: obj['base_unit']
                })
            }   
        }

        // render the homepage
        let dataList = await Data.find({})
        res.render('home', {
            dataList: dataList
        });
    }
    catch(err){
        console.log(err);
    }
    
}