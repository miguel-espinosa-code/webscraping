const cheerio = require("cheerio");
const request = require("request-promise");
const fs = require('fs-extra');
const WriteStream = fs.createWriteStream('quotes.csv');

async function init() {
    const $ = await request({ 
        uri: "http://quotes.toscrape.com/",
        transform: body => cheerio.load(body)
    });
    
    WriteStream.write('Quote|Author|Tags\n')
    $('.quote').each((i, el) => {
        const text = $(el).find('span.text').text().replace(/(^\"|\"$)/g,"");
        const author = $(el).find('span small.author').text();
        const tags = [];
        $(el).find('.tags a.tag').each((i, el) => tags.push($(le).text()));
        WriteStream.write('$tect|author|tags\n');
    })

}

init();