__path = process.cwd()
var express = require('express');
var db = require(__path + '/database/db');
try {
var zahirr = db.get("zahirr");
} catch (e) {
	console.log('')  
}
 
var creator = "Wann"
var neoxr = "yntkts"
var zeks = "administrator"
var zeks2 = "apivinz"
var secure = require('ssl-express-www');
var cors = require('cors');
var fetch = require('node-fetch');
var cheerio = require('cheerio');
var request = require('request');
var zrapi = require("zrapi");
var dotenv = require("dotenv").config()
var fs = require('fs');
var TikTokScraper = require('tiktok-scraper');
var { EmojiAPI } = require("emoji-api");
var emoji = new EmojiAPI();
var router  = express.Router();
var { TiktokDownloader } = require('../lib/tiktokdl.js')
var { color, bgcolor } = require(__path + '/lib/color.js');
var { fetchJson } = require(__path + '/lib/fetcher.js');
var options = require(__path + '/lib/options.js');
var {
	Searchnabi,
	Gempa
} = require('./../lib');

var {
  pShadow,
  pRomantic,
  pSmoke,
  pBurnPapper,
  pNaruto,
  pLoveMsg,
  pMsgGrass,
  pGlitch,
  pDoubleHeart,
  pCoffeCup,
  pLoveText,
  pButterfly
} = require("./../lib/utils/photooxy");

var {
  ttdownloader,
  pinterest,
  fbdown,
  igstalk,
  igstory,
  igdl,
  linkwa
} = require("./../lib/anjay");

var {
  igDownloader
} = require("./../lib/utils/igdown");

var {
  ytDonlodMp3,
  ytDonlodMp4,
  ytPlayMp3,
  ytPlayMp4,
  ytSearch
} = require("./../lib/utils/yt");

var { 
  Joox, 
  FB, 
  Tiktok
} = require("./../lib/utils/downloader");

var {
  Cuaca, 
  Lirik
} = require('./../lib/utils/information');

var {
  Base, 
  WPUser
} = require('./../lib/utils/tools');

var {
  fbDownloader,
  fbdown2
} = require('./../lib/utils/fbdl');

var tebakGambar = require('./../lib/utils/tebakGambar');

const { jadwalsholat } = require('@bochilteam/scraper');


loghandler = {
    notparam: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukan parameter apikey'
    },
    noturl: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukan parameter url'
    },
    notgcname: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukkan paramer gcname'
        },
    notgcicon: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukkan paramer gcicon'
        },
    notpp: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukkan paramer pp'
        },
    notbg: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukkan paramer bg'
        },
    notmemberCount: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukkan paramer memberCount'
        },
    notquery: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukkan parameter query'
        },
    notkata: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukan parameter kata'
    },
    nottext: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukan parameter text'
    },
    nottext2: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukan parameter text2'
    },
    notnabi: {
        status: false,
        creator: `${creator}`,
        code: 406, 
        message: 'masukan parameter nabi'
    },
    nottext3: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukan parameter text3'
    },
    nottheme: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukan parameter theme'
    },
    notusername: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukan parameter username'
    },
    notvalue: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukan parameter value'
    },
    invalidKey: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'apikey invalid'
    },
    invalidlink: {
        status: false,
        creator: `${creator}`,
        message: 'error, mungkin link anda tidak valid.'
    },
    invalidkata: {
        status: false,
        creator: `${creator}`,
        message: 'error, mungkin kata tidak ada dalam api.'
    },
    error: {
        status: false,
        creator: `${creator}`,
        message: '404 ERROR'
    }
}

const listkey = ["apiwann"];

router.post("/apikey", async (req, res, next) => {
  const key = req.query.key;
  if(listkey.includes(key)) {
    res.json({
      message: 'apikey sudah terdaftar'
    });
  } else {
    listkey.push(key);
    res.json({
      message: `berhasil mendaftarkan ${key} Kedatabase apikey`
    });
  }
});

router.delete("/apikey", async(req, res, next) => {
	const key = req.query.delete;
	if(listkey.includes(key)) {
		res.json({
			message: 'apikey tidak ada sebelumnya'
			})
			} else {
	listkey.splice(key, 1)
	res.json({
		message: 'apikey berhasil dihapus' 
});
 }
});

//―――――――――――――――――――――――――――――――――――――――――― ┏  Dowloader  ┓ ―――――――――――――――――――――――――――――――――――――――――― \\

router.get('/download/ytmp3', async(req, res, next) => {
  const url = req.query.url;
  const apikey = req.query.apikey;
  if(!url) return res.json(loghandler.noturl)
  if(!apikey) return res.json(loghandler.notparam)
  if(listkey.includes(apikey)){
  ytDonlodMp3(url)
    .then((result) => {
      res.json({
        status: true,
        code: 200,
        creator: `${creator}`,
        result
      })
    })
    .catch((error) => {
      console.log(error)
      res.json(error)
    });
    } else {
    	res.json(loghandler.invalidKey)
    }
});

router.get('/download/ytmp4', async(req, res, next) => {
  const url = req.query.url;
  const apikey = req.query.apikey;

  if(!url) return res.json(loghandler.noturl)
  if(!apikey) return res.json(loghandler.notparam)
  if(listkey.includes(apikey)){
  ytDonlodMp4(url)
    .then((result) => {
      res.json({
        status: true,
        code: 200,
        creator: `${creator}`,
        result
      })
    })
    .catch((error) => {
      res.json(error)
    });
    } else {
    	res.json(loghandler.invalidKey)
    }
});

router.get("/yt/play", async(req, res, next) => {
  const query = req.query.query;
  const apikey = req.query.apikey;
  
  if(!query) return res.json(loghandler.notquery)
  if(!apikey) return res.json(loghandler.notparam)
  if(listkey.includes(apikey)){
  ytPlayMp3(query)
      .then((result) => {
          res.json(result);
      })
      .catch((error) => {
          res.json(error);
      });
    } else {
    res.json(loghandler.invalidKey)
    }
});

router.get('/yt/search', async(req, res, next) => {
  const query = req.query.query;
  const apikey = req.query.apikey;
  
  if(!query) return res.json(loghandler.notquery)
  if(!apikey) return res.json(loghandler.notparam)
  if(listkey.includes(apikey)){
  ytSearch(query)
      .then((result) => {
          res.json({
            status: true,
            code: 200,
            creator: `${creator}`,
            result
          })
      })
      .catch((error) => {
          res.json(error);
      });
    } else {
   res.json(loghandler.invalidKey)
   }
});

router.get('/download/tiktok', async (req, res, next) => {
  const apikey = req.query.apikey;
  const url = req.query.url;
  
  if(!url) return res.json(loghandler.noturl)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)){
    fetch(encodeURI(`https://aemt.me/download/tiktokdl?url=${url}`))
    .then(response => response.json())
        .then(hasil => {

        var result = hasil.result;
             res.json({
                 status : true,
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.invalidKey)
}
})

router.get('/download/ig', async(req, res, next) => {
  const apikey = req.query.apikey;
  const url = req.query.url;
  
  if(!url) return res.json(loghandler.noturl)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)){
    fetch(encodeURI(`https://aemt.me/download/igdl?url=${url}`))
    .then(response => response.json())
        .then(hasil => {

        var result = hasil.result;
             res.json({
                 status : true,
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.invalidKey)
}
})

router.get('/stalk/ig', async(req, res, next) => {
  const apikey = req.query.apikey;
  const username = req.query.username;
  
  if(!username) return res.json(loghandler.notusername)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)){
    fetch(encodeURI(`https://aemt.me/download/igstalk?username=${username}`))
    .then(response => response.json())
        .then(hasil => {

        var result = hasil.result;
             res.json({
                 status : true,
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.invalidKey)
}
})

router.get('/stalk/npm', async (req, res, next) => {
  var Apikey = req.query.apikey,
      query = req.query.query
      
if(!Apikey) return res.json(loghandler.notparam)
if(listkey.includes(Apikey)){
if (!query) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter query"})

 fetch(encodeURI(`https://registry.npmjs.org/${query}`))
  .then(response => response.json())
  .then(data => {
  var result = data;
       res.json({
           status : true,
           creator : `${creator}`,
           result
       })
   })
   .catch(e => {
     res.json(loghandler.error)
})
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/download/jarak', async (req, res, next) => {
  var Apikey = req.query.apikey,
      dari = req.query.dari
      ke = req.query.ke
      
if(!Apikey) return res.json(loghandler.notparam)
if(listkey.includes(Apikey)){
if (!dari) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter query"})
if (!ke) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter query"})

 fetch(encodeURI(`https://aemt.me/jarak?dari=${dari}&ke=${ke}`))
  .then(response => response.json())
  .then(data => {
  var result = data.url;
       res.json({
           status : true,
           creator : `${creator}`,
           result
       })
   })
   .catch(e => {
     res.json(loghandler.error)
})
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/downloader/pinterest', async(req, res, next) => {
  const apikey = req.query.apikey;
  const q = req.query.q;
  
  if(!q) return res.json(loghandler.notquery)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)){
    fetch(encodeURI(`https://aemt.me/pinterest?query=${q}`))
    .then(response => response.json())
        .then(hasil => {

        var result = hasil.result;
             res.json({
                 status : true,
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.invalidKey)
}
})

router.get('/downloader/facebook', async(req, res, next) => {
  const apikey = req.query.apikey;
  const url = req.query.url;
  
  if(!url) return res.json(loghandler.notquery)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)){
    fetch(encodeURI(`https://aemt.me/download/fbdl?url={url}`))
    .then(response => response.json())
        .then(hasil => {

        var result = hasil.result;
             res.json({
                 status : true,
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.invalidKey)
}
})

router.get('/stalk/tiktok', async (req, res, next) => {
  const apikey = req.query.apikey;
  const username = req.query.username;
  
  if(!username) return res.json(loghandler.notusername)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)){
    fetch(encodeURI(`https://aemt.me/download/tiktokstalk?username=${username}`))
    .then(response => response.json())
        .then(hasil => {

        var result = hasil.result;
             res.json({
                 status : true,
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
          res.json({
            status : false,
            creator : `${creator}`,
            message : "error, mungkin username anda tidak valid"
        })
})
} else {
  res.json(loghandler.invalidKey)
}
})

//―――――――――――――――――――――――――――――――――――――――――― ┏  Games  ┓ ―――――――――――――――――――――――――――――――――――――――――― \\

router.get('/game/family100', async (req, res, next) => {
  var Apikey = req.query.apikey

  if(!Apikey) return res.json(loghandler.notparam)
  if(listkey.includes(Apikey)){
      var soal = JSON.parse(
          fs.readFileSync(__path + '/data/family100.json')
      )
      res
        .status(200)
        .json({
            code: 200,
            success: true,
            ...soal[~~(Math.random() * soal.length)]
        })
  } else {
      res.json(loghandler.invalidKey)
  }
})

router.get('/game/tebakkalimat', async (req, res, next) => {
  var Apikey = req.query.apikey

  if(!Apikey) return res.json(loghandler.notparam)
  if(listkey.includes(Apikey)){
      var soal = JSON.parse(
          fs.readFileSync(__path + '/data/tebakkalimat.json')
      )
      res
        .status(200)
        .json({
            code: 200,
            success: true,
            ...soal[~~(Math.random() * soal.length)]
        })
  } else {
      res.json(loghandler.invalidKey)
  }
})

router.get('/game/tebakkata', async (req, res, next) => {
  var Apikey = req.query.apikey

  if(!Apikey) return res.json(loghandler.notparam)
  if(listkey.includes(Apikey)){
      var soal = JSON.parse(
          fs.readFileSync(__path + '/data/tebakkata.json')
      )
      res
        .status(200)
        .json({
            code: 200,
            success: true,
            ...soal[~~(Math.random() * soal.length)]
        })
  } else {
      res.json(loghandler.invalidKey)
  }
})

router.get('/game/tebakjenaka', async (req, res, next) => {
  var Apikey = req.query.apikey

  if(!Apikey) return res.json(loghandler.notparam)
  if(listkey.includes(Apikey)){
      var pertanyaan = JSON.parse(
          fs.readFileSync(__path + '/data/tebakjenaka.json')
      )
      res
        .status(200)
        .json({
            code: 200,
            success: true,
            ...pertanyaan[~~(Math.random() * pertanyaan.length)]
        })
  } else {
      res.json(loghandler.invalidKey)
  }
})

router.get('/game/tebakkimia', async (req, res, next) => {
  var Apikey = req.query.apikey

  if(!Apikey) return res.json(loghandler.notparam)
  if(listkey.includes(Apikey)){
      var nama = JSON.parse(
          fs.readFileSync(__path + '/data/tebakkimia.json')
      )
      res
        .status(200)
        .json({
            code: 200,
            success: true,
            ...nama[~~(Math.random() * nama.length)]
        })
  } else {
      res.json(loghandler.invalidKey)
  }
})

router.get('/game/tebaklirik', async (req, res, next) => {
  var Apikey = req.query.apikey

  if(!Apikey) return res.json(loghandler.notparam)
  if(listkey.includes(Apikey)){
      var question = JSON.parse(
          fs.readFileSync(__path + '/data/tebaklirik.json')
      )
      res
        .status(200)
        .json({
            code: 200,
            success: true,
            ...question[~~(Math.random() * question.length)]
        })
  } else {
      res.json(loghandler.invalidKey)
  }
})

router.get('/game/tebakchara', async (req, res, next) => {
  var Apikey = req.query.apikey

  if(!Apikey) return res.json(loghandler.notparam)
  if(listkey.includes(Apikey)){
      var tchara = JSON.parse(
        fs.readFileSync(__path + '/data/tebakchara.json')
    )
        res
        .status(200)
        .json({
            code: 200,
            success: true,
            ...tchara[~~(Math.random() * tchara.length)]
        })
  } else {
      res.json(loghandler.invalidKey)
  }
})

router.get('/game/tebaktebakan', async (req, res, next) => {
  var Apikey = req.query.apikey

  if(!Apikey) return res.json(loghandler.notparam)
  if(listkey.includes(Apikey)){
      var soal = JSON.parse(
          fs.readFileSync(__path + '/data/tebaktebakan.json')
      )
      res
        .status(200)
        .json({
            code: 200,
            success: true,
            ...soal[~~(Math.random() * soal.length)]
        })
  } else {
      res.json(loghandler.invalidKey)
  }
})

router.get('/game/tebakbendera', async (req, res, next) => {
  var Apikey = req.query.apikey

  if(!Apikey) return res.json(loghandler.notparam)
  if(listkey.includes(Apikey)){
      var bendera = JSON.parse(
          fs.readFileSync(__path + '/data/tebakbendera.json')
      )
      res
        .status(200)
        .json({
            code: 200,
            success: true,
            ...bendera[~~(Math.random() * bendera.length)]
        })
  } else {
      res.json(loghandler.invalidKey)
  }
})

router.get('/kuis/tebakGambar', async (req, res, next) => {
  var apikey = req.query.apikey;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(listkey.includes(apikey)){
  let result = await tebakGambar()
  if (result) {
    const hasil = {
      status: true,
      code: 200,
      creator: `${creator}`,
      image: result.img,
      jawaban: result.jawaban,
      clue: result.petunjuk
    }
    res.json(hasil)
  } else {
    return res.status(408).json({
      status: res.statusCode,
      error: 'Eror'
    })
  }
  } else {
  res.json(loghandler.invalidKey)
  }
})

router.get('/kuis/caklontong', async (req, res, next) => {
  var Apikey = req.query.apikey

  if(!Apikey) return res.json(loghandler.notparam)
  if(listkey.includes(Apikey)){
      var clon = JSON.parse(
          fs.readFileSync(__path + '/data/caklontong.json')
      )
      res
        .status(200)
        .json({
            code: 200,
            success: true,
            ...clon[~~(Math.random() * clon.length)]
        })
  } else {
      res.json(loghandler.invalidKey)
  }
})

//―――――――――――――――――――――――――――――――――――――――――― ┏  Text Maker  ┓ ―――――――――――――――――――――――――――――――――――――――――― \\

router.get('/textpro/natural-leaves', async(req, res, next) => {

  const apikey = req.query.apikey;

  const text = req.query.text;
  
  if(!apikey) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottext)
  
  if(listkey.includes(apikey)){
    zrapi 
  .textpro("https://textpro.me/natural-leaves-text-effect-931.html", [
    text,
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
  .catch((err) => console.log(err));
  } else {
    res.json(loghandler.invalidKey)
  }
});

//―――――――――――――――――――――――――――――――――――――――――― ┏  Islamic  ┓ ―――――――――――――――――――――――――――――――――――――――――― \\

router.get('/muslim/asmaulhusna', async (req, res, next) => {
  var Apikey = req.query.apikey

if(!Apikey) return res.json(loghandler.notparam)
if(listkey.includes(Apikey)){

asmaul = JSON.parse(fs.readFileSync(__path +'/data/AsmaulHusna.json'));
res.json(asmaul)
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/muslim/jadwalshalat', async (req, res, next) => {
  const kota = req.query.kota;
  const apikey = req.query.apikey;
  
  
  if(!kota) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter kota"})
  if(!apikey) return res.json(loghandler.notparam)
  if(listkey.includes(apikey)){
    jadwalsholat(kota)
      .then((result) => {
          res.json({
            status: true,
            code: 200,
            creator: `${creator}`,
            result
          })
      })
      .catch((error) => {
          res.json(error);
      });
    } else {
   res.json(loghandler.invalidKey)
   }
});

router.get('/muslim/hadits', async (req, res, next) => {
        var Apikey = req.query.apikey,
            kitab = req.query.kitab,
            nomor = req.query.nomor
	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
    if (!kitab) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter kitab"})
    if (!nomor) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter nomor"})

       fetch(encodeURI(`https://hadits-api-zhirrr.vercel.app/books/${kitab}/${nomor}`))
        .then(response => response.json())
        .then(data => {
             res.json(
             data
             )
         })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/muslim/quran', async (req, res, next) => {
  var Apikey = req.query.apikey,
      surah = req.query.surah,
      ayat = req.query.ayat
      
if(!Apikey) return res.json(loghandler.notparam)
if(listkey.includes(Apikey)){
if (!surah) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter surah"})
if (!ayat) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter ayat"})

 fetch(encodeURI(`https://alquran-apiii.vercel.app/surah/${surah}/${ayat}`))
  .then(response => response.json())
  .then(data => {
  var result = data;
       res.json({
           result
       })
   })
   .catch(e => {
     res.json(loghandler.error)
})
} else {
res.json(loghandler.invalidKey)
}
})

router.get('/muslim/kisahnabi', async (req, res, next) => {
  var Apikey = req.query.apikey
      
if(!Apikey) return res.json(loghandler.notparam)
if(listkey.includes(Apikey)){

 fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/data/dataKisahNabi.json`))
  .then(response => response.json())
  .then(data => {
  var result = data;
       res.json({
           result
       })
   })
   .catch(e => {
     res.json(loghandler.error)
})
} else {
res.json(loghandler.invalidKey)
}
})

//―――――――――――――――――――――――――――――――――――――――――― ┏  Canvas  ┓ ―――――――――――――――――――――――――――――――――――――――――― \\
router.get('/maker/ttp', async(req, res, next) => {

  const text = req.query.text;
  const apikey = req.query.apikey;
  if(!text) return res.json(loghandler.nottext)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)) {
  let hasil = 'https://aemt.me/ttp?text='+ text
  data = await fetch(hasil).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/ttp.png', data)
  res.sendFile(__path +'/tmp/ttp.png')
  } else {
    res.json(loghandler.invalidKey)
  }
})

router.get('/maker/attp', async(req, res, next) => {

  const text = req.query.text;
  const apikey = req.query.apikey;
  if(!text) return res.json(loghandler.nottext)
  if(!apikey) return res.json(loghandler.notparam)
  
  if(listkey.includes(apikey)) {
  let hasil = 'https://aemt.me/attp?text='+ text
  data = await fetch(hasil).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/attp.gif', data)
  res.sendFile(__path +'/tmp/attp.gif')
  } else {
    res.json(loghandler.invalidKey)
  }
})

router.get('/canvas/welcome', async(req, res, next) => {
  const apikey = req.query.apikey;
  const username = req.query.username;
  const gcname = req.query.gcname;
  const gcicon = req.query.gcicon;
  const memberCount = req.query.memberCount;
  const pp = req.query.pp;
  const bg = req.query.bg;
  if(!username) return res.json(loghandler.notusername)
  if(!gcname) return res.json(loghandler.gcname)
  if(!gcicon) return res.json(loghandler.gcicon)
  if(!memberCount) return res.json(loghandler.memberCount)
  if(!pp) return res.json(loghandler.pp)
  if(!bg) return res.json(loghandler.bg)
  if(!apikey) return res.json(loghandler.notparam)
  if(listkey.includes(apikey)){
    let hasil = `https://aemt.me/welcome?name=${username}&gcname=${gcname}&ppgc=${gcicon}&member=${memberCount}&pp=${pp}&bg=${bg}`
    data = await fetch(hasil).then(v => v.buffer())
    await fs.writeFileSync(__path +'/tmp/welcome.png', data)
    res.sendFile(__path +'/tmp/welcome.png')
  } else {
    res.json(loghandler.invalidKey)
  }
});
router.get('/canvas/welcome2', async(req, res, next) => {
  const apikey = req.query.apikey;
  const username = req.query.username;
  const gcname = req.query.gcname;
  const gcicon = req.query.gcicon;
  const memberCount = req.query.memberCount;
  const pp = req.query.pp;
  const bg = req.query.bg;
  if(!username) return res.json(loghandler.notusername)
  if(!gcname) return res.json(loghandler.gcname)
  if(!gcicon) return res.json(loghandler.gcicon)
  if(!memberCount) return res.json(loghandler.memberCount)
  if(!pp) return res.json(loghandler.pp)
  if(!bg) return res.json(loghandler.bg)
  if(!apikey) return res.json(loghandler.notparam)
  if(listkey.includes(apikey)){
    let hasil = `https://aemt.me/welcome2?name=${username}&gcname=${gcname}&ppgc=${gcicon}&member=${memberCount}&pp=${pp}&bg=${bg}`
    data = await fetch(hasil).then(v => v.buffer())
    await fs.writeFileSync(__path +'/tmp/welcome.png', data)
    res.sendFile(__path +'/tmp/welcome.png')
  } else {
    res.json(loghandler.invalidKey)
  }
});
router.get('/canvas/welcome3', async(req, res, next) => {
  const apikey = req.query.apikey;
  const username = req.query.username;
  const gcname = req.query.gcname;
  const gcicon = req.query.gcicon;
  const memberCount = req.query.memberCount;
  const pp = req.query.pp;
  const bg = req.query.bg;
  if(!username) return res.json(loghandler.notusername)
  if(!gcname) return res.json(loghandler.gcname)
  if(!gcicon) return res.json(loghandler.gcicon)
  if(!memberCount) return res.json(loghandler.memberCount)
  if(!pp) return res.json(loghandler.pp)
  if(!bg) return res.json(loghandler.bg)
  if(!apikey) return res.json(loghandler.notparam)
  if(listkey.includes(apikey)){
    let hasil = `https://aemt.me/welcome3?name=${username}&gcname=${gcname}&ppgc=${gcicon}&member=${memberCount}&pp=${pp}&bg=${bg}`
    data = await fetch(hasil).then(v => v.buffer())
    await fs.writeFileSync(__path +'/tmp/welcome.png', data)
    res.sendFile(__path +'/tmp/welcome.png')
  } else {
    res.json(loghandler.invalidKey)
  }
});

router.get('/canvas/goodbye', async(req, res, next) => {
  const apikey = req.query.apikey;
  const username = req.query.username;
  const gcname = req.query.gcname;
  const gcicon = req.query.gcicon;
  const memberCount = req.query.memberCount;
  const pp = req.query.pp;
  const bg = req.query.bg;
  if(!username) return res.json(loghandler.notusername)
  if(!gcname) return res.json(loghandler.gcname)
  if(!gcicon) return res.json(loghandler.gcicon)
  if(!memberCount) return res.json(loghandler.memberCount)
  if(!pp) return res.json(loghandler.pp)
  if(!bg) return res.json(loghandler.bg)
  if(!apikey) return res.json(loghandler.notparam)
  if(listkey.includes(apikey)){
    let hasil = `https://aemt.me/goodbye?name=${username}&gcname=${gcname}&ppgc=${gcicon}&member=${memberCount}&pp=${pp}&bg=${bg}`
    data = await fetch(hasil).then(v => v.buffer())
    await fs.writeFileSync(__path +'/tmp/goodbye.png', data)
    res.sendFile(__path +'/tmp/goodbye.png')
  } else {
    res.json(loghandler.invalidKey)
  }
});


//―――――――――――――――――――――――――――――――――――――――――― ┏  Other  ┓ ―――――――――――――――――――――――――――――――――――――――――― \\


router.get('/cekapikey', async(req, res, next) => {
  const apikey = req.query.apikey;
  if(!apikey) return res.json(loghandler.notparam)
  if(listkey.includes(apikey)) {
    res.json({
      status: 'active',
      creator: `${creator}`,
      apikey: `${apikey}`,
      message: 'APIKEY ACTIVE'    
    })
  } else {
    res.json(loghandler.invalidKey)
  }
})

router.use(function (req, res) {

    res.status(404)
    .set("Content-Type", "text/html")
    .sendFile(__path + '/views/404.html');
});

module.exports = router