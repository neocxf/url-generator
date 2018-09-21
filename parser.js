const http = require('http');
const util = require('util');
const url = require('url');
const parseString = require('xml2js').parseString;
const queryString = require('query-string');
const Handlebars = require('handlebars');

const linkcenterTemplate = require('./views/hilton');

const template = Handlebars.compile(linkcenterTemplate.toString())

const result = template({
  baseUri: "https://www.baidu.com",
  contextPath: '/hotel',
  checkIn: '2018-09-21',
  checkOut: '2018-09-23',
  adults: 3,
  rooms: 2,
  language: 'English',
  children: 1,
  adult: 2
});

console.log(result)

http.createServer((req, res) => {
  let pathName= url.parse(req.url).pathname;
  let query= url.parse(req.url).query;
  console.log('pathName' + pathName);
  console.log('query' + query);

  res.writeHead(200, {'Content-type':'application/json'});
  let data= {
    data: 'Hello Node JS Server Response'
  };

  parseDataWithTemplate(template).then()

  res.write(JSON.stringify(data));
  res.end( );

}).listen(3000)


function parseDataWithTemplate(sourceTemplate) {
  return new Promise((resolve, reject) => {
    parseString(sourceTemplate, function (err, result) {
      // console.log(util.inspect(result, false, null));
      result.linkcenter.params[0].party = JSON.stringify(result.linkcenter.params[0].party);

      let baseUri = result.linkcenter.baseuri;
      let contextPath = result.linkcenter.contextPath[0];
      let additionalParam = result.linkcenter.additionalParam[0];
      let query = '';
      console.dir(result.linkcenter.contextPath[0]);
      console.dir(result.linkcenter.params[0])

      let includeParam = result.linkcenter.params[0].$.include
      if (includeParam !== 'false') {
        delete result.linkcenter.params[0].$

        query = queryString.stringify(result.linkcenter.params[0]);
      }

      console.dir(result.linkcenter.params[0])

      console.log(additionalParam)

      let hotelUrl = `${baseUri}${contextPath}${additionalParam}?${query}`;

      resolve(hotelUrl)
    });
  })
}






