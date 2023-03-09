import express from "express";
import axios from "axios";
import bodyParser from "body-parser";
import path from "path";
import request from 'request';
import cheerio from 'cheerio';
import puppeteer from 'puppeteer';
import fs from 'fs';

const __dirname = path.resolve();
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
const port = process.env.PORT || 3000;

const ssyoutube = async (url) => {
  const res = await axios.post("https://ssyoutube.com/api/convert", {
    url: url,
  });
  return res.data;
};

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname + "/index.html"));
});

app.get("/api", function (req, res) {
    res.sendFile(path.join(__dirname + "/index.html"));
});
app.get("/api/youtube", async (req, res) => {
  const url = req.query.url;
  try {
  const data = await ssyoutube(url);
  res.json({
    "status": true,
    "result": data
})
  } catch{
    res.json({
      "status": false,
  })
  }
});
app.get("/api/tiktok", async (req, res) => {
  const url = req.query.url;
  try {
    const data = await ssyoutube(url);
    res.json({
      "status": true,
      "result": data
  })
    } catch{
      res.json({
        "status": false,
    })
    }
});
app.get("/api/twitter", async (req, res) => {
  const url = req.query.url;
  try {
    const data = await ssyoutube(url);
    res.json({
      "status": true,
      "result": data
  })
    } catch{
      res.json({
        "status": false,
    })
    }
});
app.get("/api/facebook", async (req, res) => {
  const url = req.query.url;
  try {
    const data = await ssyoutube(url);
    res.json({
      "status": true,
      "result": data
  })
    } catch{
      res.json({
        "status": false,
    })
    }
});
app.get("/api/instagram", async (req, res) => {
  const url = req.query.url;
  try {
    const data = await ssyoutube(url);
    res.json({
      "status": true,
      "result": data
  })
    } catch{
      res.json({
        "status": false,
    })
    }
});

app.get("/api/snapchat", async (req, res) => {
  const url = req.query.url;
  try {
    const data = await scrapeSnap(url);
    console.log(data);
    res.json({
      "status": true,
      "result": data
  })
    } catch{
      res.json({
        "status": false,
    })
    }
});

app.get("/api/pinterest", async (req, res) => {
  const url = req.query.url;
  try {
    const data = await scrapePinterest(url);
    console.log(data);
    res.json({
      "status": true,
      "result": data
  })
    } catch{
      res.json({
        "status": false,
    })
    }
});



// URL of the page we want to scrape


// Async function which scrapes the data
async function scrapePinterest(url) {
  try {
    console.log(url);
    const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  
  await page.setViewport({
    width: 1200,
    height: 1200,
    deviceScaleFactor: 1,
  });

  await page.goto('https://www.expertstool.com/download-pinterest-video/');

  // // Fill in the login form
  // await page.type('#UserName', 'developer');
      await page.type('.form-control', url);
  
  // // Click the submit button
   await page.click('button.more-link');
   await page.waitForNavigation();
  
   //  await page.goto('http://cgrems.com/abc/web/index.php?r=subaccount/reporting');
  //  await page.click('#accordion > div > div.panel-heading > h4 > a');
  //  await page.click('#collapse_finance > div > div > div > ol > div:nth-child(1) > li > a');

  
  // Wait for the login to complete
 
  
  
  const content = await page.evaluate(() => {
    const firstParagraph = document.querySelector('video');
    return firstParagraph.outerHTML;
  });
  console.log(content);
  
  await browser.close();
  return content;
   
  } catch (err) {
    console.error(err);
  }
}
// Invoke the above function

async function scrapeSnap(url) {
  try {
  console.log(url);
    const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  
  await page.setViewport({
    width: 1200,
    height: 1200,
    deviceScaleFactor: 1,
  });

  await page.goto('https://www.expertstool.com/snapchat-video-downloader/');

  // // Fill in the login form
  // await page.type('#UserName', 'developer');
      await page.type('.form-control', url);
  
  // // Click the submit button
   await page.click('button.more-link');
   await page.waitForNavigation();
  
   //  await page.goto('http://cgrems.com/abc/web/index.php?r=subaccount/reporting');
  //  await page.click('#accordion > div > div.panel-heading > h4 > a');
  //  await page.click('#collapse_finance > div > div > div > ol > div:nth-child(1) > li > a');

  
  // Wait for the login to complete
 
  
  
  const content = await page.evaluate(() => {
    const firstParagraph = document.querySelector('video');
    return firstParagraph.outerHTML;
  });
  
  
  await browser.close();
  return content;
   
  } catch (err) {
    console.error(err);
  }
}





app.listen(port);
console.log(`Server running on port ${port}`);