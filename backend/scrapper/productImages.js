const rp = require("request-promise");
const $ = require("cheerio");
const url = "https://www.tribesindia.com/product-category/paintings/bhil/";

const productImages = (app) => {
  app.get("/images", (req, res) => {
    let imgUrls = [];
    rp(url)
      .then((html) => {
        for (let i = 0; i < $("img", html).length; i++) {
          imgUrls.push($("img", html)[i].attribs["data-src"]);
        }
        res.json(imgUrls);
      })
      .catch((err) => {
        console.log(err);
      });
  });
};

module.exports = productImages;
