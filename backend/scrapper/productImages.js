const rp = require("request-promise");
const $ = require("cheerio");

const url = "https://market.tribesindia.com/home-living/paintings/bhil";
// const url = "https://in.pinterest.com/satishnair/tribes-of-india/";

const productImages = (app) => {
  app.get("/images", (req, res) => {
    let imgUrls = [];
    rp(url)
      .then((html) => {
        for (let i = 0; i < $("img", html).length; i++) {
          imgUrls.push($("img", html)[i].attribs["data-src"]);
        }

        res.json(Array.from(new Set(imgUrls)));
      })
      .catch((err) => {
        console.log(err);
      });
  });
};

module.exports = productImages;
