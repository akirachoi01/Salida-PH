const channels1 = [
  {
    "name": "RPTV",
    "category": "Local",
    "type": "mpd",
    "url": "https://bunproxy.azurewebsites.net/api/001/2/ch00000090990000001093/manifest.mpd?virtualDomain=001.live_hls.zte.com",
    "drm": {
      "clearkey": {
        "keyId": "273189c214e85b43ac36298d1c422330",
        "key": "1aace05f58d8edef9697fd52cb09f441"
      }
    }
  },
  {
    "name": "TV5",
    "category": "Local",
    "type": "mpd",
    "url": "https://qp-pldt-live-grp-02-prod.akamaized.net/out/u/tv5_hd.mpd",
    "drm": {
      "clearkey": {
        "keyId": "53a3776a034dbe5f483d0f3a46f5fddf",
        "key": "29e3d2678107f0ab0b35b6537c734f2a"
      }
    }
  },
  {
    "name": "NET25",
    "category": "Local",
    "type": "mpd",
    "url": "https://uselector.cdn.intigral-ott.net/MBMH/MBMH.isml/manifest.mpd",
    "drm": {
      "clearkey": {
        "keyId": "0e7e35a07e2c12822316c0dc4873903f",
        "key": "5436395534576f7638744a43356d336e"
      }
    }
  },
  {
    "name": "IBC 13",
    "category": "Local",
    "type": "mpd",
    "url": "https://qp-pldt-live-grp-07-prod.akamaized.net/out/u/ibc13_sd_new.mpd",
    "drm": {
      "clearkey": {
        "keyId": "387938463676644f7141503474507435",
        "key": "1947579StJymu"
      }
    }
  },
  {
    "name": "PTV",
    "category": "Local",
    "type": "mpd",
    "url": "https://qp-pldt-live-grp-02-prod.akamaized.net/out/u/cg_ptv4_sd.mpd",
    "drm": {
      "clearkey": {
        "keyId": "4d09e48cae8061ed7612c1c969804922",
        "key": "47383839496f476d796177694b666a37"
      }
    }
  },
  {
    "name": "A2Z",
    "category": "Local",
    "type": "mpd",
    "url": "https://qp-pldt-live-grp-02-prod.akamaized.net/out/u/cg_a2z.mpd",
    "drm": {
      "clearkey": {
        "keyId": "f703e4c8ec9041eeb5028ab4248fa094",
        "key": "7a98f8e748e2e14057e9f99ac8e3a025"
      }
    }
  },
  {
    "name": "ALL TV",
    "category": "Local",
    "type": "mpd",
    "url": "https://bunproxy.azurewebsites.net/api/001/2/ch00000090990000001109/manifest.mpd?virtualDomain=001.live_hls.zte.com",
    "drm": {
      "clearkey": {
        "keyId": "31363232303137373937323535313836",
        "key": "4d7e33da19b971cef49e35eccdb9de0b"
      }
    }
  },
  {
    "name": "CNN Philippines",
    "category": "Local",
    "type": "mpd",
    "url": "https://qp-pldt-live-grp-03-prod.akamaized.net/out/u/cnn_rptv_prod_hd.mpd",
    "drm": {
      "clearkey": {
        "keyId": "436b69f987924fcbbc06d40a69c2799a",
        "key": "346b9f41e2933748c8861f82932e0110"
      }
    }
  },
  {
    "name": "DZRH TV",
    "category": "Local",
    "type": "mpd",
    "url": "https://cdn4.skygo.mn/live/disk1/DW/HLSv3-FTA/DW.m3u8",
    "drm": {
      "clearkey": {
        "keyId": "436157316d374c314e56667576363272",
        "key": "74576436426946764a6b4e5734456e37"
      }
    }
  },
  {
    "name": "RJ TV",
    "category": "Local",
    "type": "mpd",
    "url": "https://vthanh.utako.moe/Tokyo_MX2/tracks-v1a1/mono.m3u8",
    "drm": {
      "clearkey": {
        "keyId": "eac7cd7979f04288bc335fc1d88fa344",
        "key": "2fb39ab3f55333d5fa3e830ebf99ec16"
      }
    }
  },
  {
    "name": "RADYO BANDIDO TV",
    "category": "Local",
    "type": "mpd",
    "url": "https://vthanh.utako.moe/bs10/tracks-v1a1/mono.m3u8",
    "drm": {
      "clearkey": {
        "keyId": "386f3337674c36666e3861713930726f",
        "key": "35416a68643065697575493337566135"
      }
    }
  },
  {
    "name": "CLTV 36",
    "category": "Local",
    "type": "mpd",
    "url": "https://bunproxy.azurewebsites.net/api/001/2/ch00000090990000001159/manifest.mpd?virtualDomain=001.live_hls.zte.com",
    "drm": {
      "clearkey": {
        "keyId": "16ecd238c0394592b8d3559c06b1faf5",
        "key": "f3266bec607f25879f48640f30f1c888"
      }
    }
  },
  {
    "name": "DZMM TELERADYO",
    "category": "Local",
    "type": "mpd",
    "url": "https://bunproxy.azurewebsites.net/api/001/2/ch00000090990000001174/manifest.mpd?virtualDomain=001.live_hls.zte.com",
    "drm": {
      "clearkey": {
        "keyId": "31363233323236373936303238393632",
        "key": "bee1066160c0424696d9bf99ca0645e3"
      }
    }
  },
  {
    "name": "ONE NEWS",
    "category": "Local",
    "type": "mpd",
    "url": "https://qp-pldt-live-grp-04-prod.akamaized.net/out/u/onenews_hd1.mpd",
    "drm": {
      "clearkey": {
        "keyId": "77d98ed71db7524c27875a09a975f9e6",
        "key": "1aace05f58d8edef9697fd52cb09f441"
      }
    }
  },
  {
    "name": "ONE PH",
    "category": "Local",
    "type": "mpd",
    "url": "https://qp-pldt-live-grp-04-prod.akamaized.net/out/u/oneph_sd.mpd",
    "drm": {
      "clearkey": {
        "keyId": "8726ef7eaf5b9dce15fb6aa9f80bd53f",
        "key": "d3ad27d7fe1f14fb1a2cd5688549fbab"
      }
    }
  },
  {
    "name": "INC TV",
    "category": "Local",
    "type": "mpd",
    "url": "https://bunproxy.azurewebsites.net/api/001/2/ch00000090990000001183/manifest.mpd?virtualDomain=001.live_hls.zte.com",
    "drm": {
      "clearkey": {
        "keyId": "31363232353335323435353337353331",
        "key": "b2d0dce5c486891997c1c92ddaca2cd2"
      }
    }
  },
  {
    "name": "TVUP",
    "category": "Local",
    "type": "mpd",
    "url": "https://qp-pldt-live-grp-09-prod.akamaized.net/out/u/tvup_prd.mpd",
    "drm": {
      "clearkey": {
        "keyId": "34ce95b60c424e169619816c5181aded",
        "key": "2e53f8d8a5e94bca8f9a1e16ce67df33"
      }
    }
  },
  {
    "name": "ALIW CHANNEL 23",
    "category": "Local",
    "type": "mpd",
    "url": "https://bunproxy.azurewebsites.net/api/001/2/ch00000090990000001103/manifest.mpd?virtualDomain=001.live_hls.zte.com",
    "drm": {
      "clearkey": {
        "keyId": "184f94303d3357b9a7381ccdeee9b611",
        "key": "5bfb374d644703550f0637532bca0491"
      }
    }
  },
  {
    "name": "ORAS NG HIMALA TV",
    "category": "Local",
    "type": "mpd",
    "url": "https://bunproxy.azurewebsites.net/api/001/2/ch00000090990000001175/manifest.mpd?virtualDomain=001.live_hls.zte.com",
    "drm": {
      "clearkey": {
        "keyId": "31363233323237303338303332343538",
        "key": "6HeYyIE"
      }
    }
  },
  {
    "name": "GOLDEN NATION NETWORK",
    "category": "Local",
    "type": "mpd",
    "url": "https://bunproxy.azurewebsites.net/api/001/2/ch00000090990000001081/manifest.mpd?virtualDomain=001.live_hls.zte.com",
    "drm": {
      "clearkey": {
        "keyId": "37fdee8b6eef5c96001e8c6fc47bfc08",
        "key": "25f4625345717647464a78374d754f76"
      }
    }
  },
  {
    "name": "PBA RUSH",
    "category": "Local",
    "type": "mpd",
    "url": "https://qp-pldt-live-grp-01-prod.akamaized.net/out/u/cg_pbarush_hd1.mpd",
    "drm": {
      "clearkey": {
        "keyId": "95588338ee37423e99358a6d431324b9",
        "key": "723548436f6e34333961586150756649"
      }
    }
  },
  {
    "name": "UAAP VARSITY",
    "category": "Local",
    "type": "mpd",
    "url": "https://qp-pldt-live-grp-10-prod.akamaized.net/out/u/cg_uaap_cplay_sd.mpd",
    "drm": {
      "clearkey": {
        "keyId": "42d7a462640c6748371d39f23e4a18c3",
        "key": "723548436f6e34333961586150756649"
      }
    }
  },
  {
    "name": "CINEMO!",
    "category": "Local Entertainment",
    "type": "mpd",
    "url": "https://fta2-cdn-flr.visionplus.id/out/v1/782400332c96440598260730a864bc6f/index.mpd",
    "drm": {
      "clearkey": {
        "keyId": "44a9e6477651b3b47f3a2b727d562835",
        "key": "96701d297d1241e492d41c397631d857"
      }
    }
  },
  {
    "name": "JEEPNEY TV",
    "category": "Local Entertainment",
    "type": "mpd",
    "url": "https://bunproxy.azurewebsites.net/api/001/2/ch00000090990000001286/manifest.mpd?virtualDomain=001.live_hls.zte.com",
    "drm": {
      "clearkey": {
        "keyId": "27662063ZATMqp",
        "key": "38346b5732353165303954347677476e"
      }
    }
  },
  {
    "name": "SOLARFLIX",
    "category": "Local Entertainment",
    "type": "mpd",
    "url": "https://fta1-cdn-flr.visionplus.id/out/v1/dc63bd198bc44193b570e0567ff5b22c/index.mpd",
    "drm": {
      "clearkey": {
        "keyId": "361197805d0149c29801946cf2dde67c",
        "key": "31363331363735393833333531383134"
      }
    }
  },
  {
    "name": "SARI-SARI",
    "category": "Local Entertainment",
    "type": "mpd",
    "url": "https://qp-pldt-live-grp-06-prod.akamaized.net/out/u/cg_sari_sari_sd.mpd",
    "drm": {
      "clearkey": {
        "keyId": "c3a58ec867cc25829e1fbe8938442553",
        "key": "8b48b2cb2743b91d5f20cf2622067f3a"
      }
    }
  },
  {
    "name": "BUKO",
    "category": "Local Entertainment",
    "type": "mpd",
    "url": "https://qp-pldt-live-grp-06-prod.akamaized.net/out/u/cg_buko_sd.mpd",
    "drm": {
      "clearkey": {
        "keyId": "d273c085f2ab4a248e7bfc375229007d",
        "key": "7932354c3a84f7fc1b80efa6bcea0615"
      }
    }
  },
  {
    "name": "TAP ACTION FLIX",
    "category": "Local Entertainment",
    "type": "mpd",
    "url": "https://qp-pldt-live-grp-06-prod.akamaized.net/out/u/cg_tapactionflix_hd1.mpd",
    "drm": {
      "clearkey": {
        "keyId": "3de28411cf08a64ea935b9578f6d0edd",
        "key": "0c64ccfb978e7390bd33344075492aec"
      }
    }
  },
  {
    "name": "TVN MOVIES PINOY",
    "category": "Local Entertainment",
    "type": "mpd",
    "url": "https://qp-pldt-live-grp-07-prod.akamaized.net/out/u/cg_tvnmovie.mpd",
    "drm": {
      "clearkey": {
        "keyId": "a8795f3bdb8a4778b7e888ee484cc7a1",
        "key": "d4f05ce56c5231b7cdf53455bea58621"
      }
    }
  },
  {
    "name": "PINOY XTREME",
    "category": "Local Entertainment",
    "type": "mpd",
    "url": "https://fta3-cdn-flr.visionplus.id/out/v1/e992e986a88346c18a5dcc4fbcdae6b9/index.mpd",
    "drm": {
      "clearkey": {
        "keyId": "09e84fc7ecb71def143cd7e2771f3b35",
        "key": "397c64e42507d95e5460830918c22a98"
      }
    }
  },
  {
    "name": "HALLYPOP",
    "category": "General Entertainment",
    "type": "hls",
    "url": "https://jungotvstream.chanall.tv/jungotv/hallypop/stream.m3u8"
  },
  {
    "name": "JUNGO PINOY TV",
    "category": "General Entertainment",
    "type": "hls",
    "url": "https://jungotvstream.chanall.tv/jungotv/jungopinoytv/stream.m3u8"
  },
  {
    "name": "JUNGO TV",
    "category": "General Entertainment",
    "type": "hls",
    "url": "https://amg02188-amg02188c2-jungotv-northamerica-5717.playouts.now.amagi.tv/playlist1080p.m3u8"
  },
  {
    "name": "SCREAMFLIX",
    "category": "General Entertainment",
    "type": "hls",
    "url": "https://jungotvstream.chanall.tv/jungotv/screamflix/stream.m3u8"
  },
  {
    "name": "COMBATGO",
    "category": "General Entertainment",
    "type": "hls",
    "url": "https://jungotvstream.chanall.tv/jungotv/combatgo/stream.m3u8"
  },
  {
    "name": "PHOENIX INFONEWS",
    "category": "News",
    "type": "mpd",
    "url": "https://linearjitp-playback.astro.com.my/dash-wv/linear/5075/default_ott.mpd",
    "drm": {
      "clearkey": {
        "keyId": "0b5868bc161634a033a19a20f3f3595d",
        "key": "31363331363736333231333532323639"
      }
    }
  },
  {
    "name": "CGTN DOCUMENTARY",
    "category": "News",
    "type": "hls",
    "url": "https://cdn4.skygo.mn/live/disk1/CGTN_Doc/HLSv3-FTA/CGTN_Doc.m3u8"
  },
  {
    "name": "RUSSIA TODAY",
    "category": "News",
    "type": "hls",
    "url": "https://rt-rtd.rttv.com/dvr/rtdoc/playlist.m3u8"
  },
  {
    "name": "DW",
    "category": "News",
    "type": "hls",
    "url": "https://dwamdstream102.akamaized.net/hls/live/2015525/dwstream102/index.m3u8"
  },
  {
    "name": "FRANCE 24",
    "category": "News",
    "type": "hls",
    "url": "https://a-cdn.klowdtv.com/live2/france24_720p/chunks.m3u8"
  },
  {
    "name": "CGTN",
    "category": "News",
    "type": "mpd",
    "url": "https://amg00405-rakutentv-cgtn-rakuten-i9tar.amagi.tv/master.m3u8",
    "drm": {
      "clearkey": {
        "keyId": "bdbd38748f51fc26932e96c9a2020839",
        "key": "042a21bf236ca729b1e343ed6e0a6337"
      }
    }
  },
  {
    "name": "EURONEWS",
    "category": "News",
    "type": "hls",
    "url": "https://amg00882-amg00882c2-samsung-ph-4542.playouts.now.amagi.tv/playlist.m3u8"
  },
  {
    "name": "BLOOMBERG",
    "category": "News",
    "type": "mpd",
    "url": "https://www.bloomberg.com/media-manifest/streams/asia.m3u8",
    "drm": {
      "clearkey": {
        "keyId": "b8ae7679cf18e7261303313b18ba7a14",
        "key": "183b3eafa4c82e68f74c4244d54906b0"
      }
    }
  },
  {
    "name": "WION",
    "category": "News",
    "type": "mpd",
    "url": "https://linearjitp-playback.astro.com.my/dash-wv/linear/2110/default_ott.mpd",
    "drm": {
      "clearkey": {
        "keyId": "1170btrpUu",
        "key": "e4293507d592df040f2186f1ce82a712"
      }
    }
  },
  {
    "name": "CNA",
    "category": "News",
    "type": "hls",
    "url": "https://linearjitp-playback.astro.com.my/dash-wv/linear/605/default_ott.mpd"
  },
  {
    "name": "AL JAZEERA",
    "category": "News",
    "type": "hls",
    "url": "https://jmp2.uk/sam-USAJ3000013FJ.m3u8"
  },
  {
    "name": "SKY NEWS",
    "category": "News",
    "type": "hls",
    "url": "https://linear417-gb-hls1-prd-ak.cdn.skycdp.com/100e/Content/HLS_001_1080_30/Live/channel(skynews)/index_1080-30.m3u8"
  },
  {
    "name": "TRT WORLD",
    "category": "News",
    "type": "hls",
    "url": "https://tv-trtworld.medya.trt.com.tr/master.m3u8"
  },
  {
    "name": "REUTERS",
    "category": "News",
    "type": "hls",
    "url": "https://jmp2.uk/sam-DEBD4900001QV.m3u8"
  },
  {
    "name": "CNN",
    "category": "News",
    "type": "mpd",
    "url": "https://qp-pldt-live-grp-12-prod.akamaized.net/out/u/dr_cnnhd.mpd",
    "drm": {
      "clearkey": {
        "keyId": "8ab2332442854e62b0018eec3ee58484",
        "key": "768be56ebc93f207be05ac6f07ebf0da"
      }
    }
  },
  {
    "name": "RAI NEWS 24",
    "category": "News",
    "type": "mpd",
    "url": "https://viamotionhsi.netplus.ch/live/eds/rainews/browser-dash/rainews.mpd",
    "drm": {
      "clearkey": {
        "keyId": "3f4423fecb09438c8782af0a7bcb2204",
        "key": "183b3eafa4c82e68f74c4244d54906b0"
      }
    }
  },
  {
    "name": "CINEMAX",
    "category": "HBO Pack",
    "type": "mpd",
    "url": "https://qp-pldt-live-grp-01-prod.akamaized.net/out/u/cg_cinemax.mpd",
    "drm": {
      "clearkey": {
        "keyId": "0e7e35a07e2c12822316c0dc4873903f",
        "key": "5436395534576f7638744a43356d336e"
      }
    }
  },
  {
    "name": "CINEMAX 2",
    "category": "HBO Pack",
    "type": "mpd",
    "url": "https://dash2.antik.sk/stream/hisi_cinemax_2/playlist_cbcs.mpd",
    "drm": {
      "clearkey": {
        "keyId": "564b3b1c781043c19242c66e348699c5",
        "key": "1b87070d9fad5dee0a35ff014a2063a7"
      }
    }
  },
  {
    "name": "HBO",
    "category": "HBO Pack",
    "type": "mpd",
    "url": "https://qp-pldt-live-grp-03-prod.akamaized.net/out/u/cg_hbohd.mpd",
    "drm": {
      "clearkey": {
        "keyId": "279695ebe0fb1bc5787422b6b59ce8a8",
        "key": "4ddc4cd97e7016485cb6d25bc2ba3cda"
      }
    }
  },
  {
    "name": "HBO SIGNATURE",
    "category": "HBO Pack",
    "type": "mpd",
    "url": "https://qp-pldt-live-grp-01-prod.akamaized.net/out/u/cg_hbosign.mpd",
    "drm": {
      "clearkey": {
        "keyId": "e31a5a81caff5d07ea2411a571fc2e59",
        "key": "34880f56627c11ee8c990242ac120002"
      }
    }
  },
  {
    "name": "HBO HITS",
    "category": "HBO Pack",
    "type": "mpd",
    "url": "https://qp-pldt-live-grp-09-prod.akamaized.net/out/u/cg_hbohits.mpd",
    "drm": {
      "clearkey": {
        "keyId": "92834ab4a7e1499b90886c5d49220e46",
        "key": "775a654c0610811ad022329a68884de1"
      }
    }
  },
  {
    "name": "HBO FAMILY",
    "category": "HBO Pack",
    "type": "mpd",
    "url": "https://qp-pldt-live-grp-03-prod.akamaized.net/out/u/cg_hbofam.mpd",
    "drm": {
      "clearkey": {
        "keyId": "b21654621230ae21714a5cab52daeb9d",
        "key": "1917f4caf2364e6d9b1507326a85ead6"
      }
    }
  },
  {
    "name": "HBO PLUS",
    "category": "HBO Pack",
    "type": "mpd",
    "url": "https://live-atv-cdn.izzigo.tv/5/out/u/dash/HBOPLUSHD/default.mpd",
    "drm": {
      "clearkey": {
        "keyId": "31363231393131363337323232353030",
        "key": "a4d49bda8cd29ba2888c732b4e7d9d63"
      }
    }
  },
  {
    "name": "HBO POP",
    "category": "HBO Pack",
    "type": "mpd",
    "url": "https://live-atv-cdn.izzigo.tv/5/out/u/dash/HBOPOPHD/default.mpd",
    "drm": {
      "clearkey": {
        "keyId": "5458f45efedb4d6f8aa6ac76c85b621b",
        "key": "9547f9aead1237c8a3b1bf0a91ed9995"
      }
    }
  },
  {
    "name": "HBO XTREME",
    "category": "HBO Pack",
    "type": "mpd",
    "url": "https://live-atv-cdn.izzigo.tv/5/out/u/dash/HBOXTREMEHD/default.mpd",
    "drm": {
      "clearkey": {
        "keyId": "227ffaf09bec4a889e0e0988704d52a2",
        "key": "2fbdaa3bea0d0323ae011b318d1db716"
      }
    }
  },
  {
    "name": "HBO 2",
    "category": "HBO Pack",
    "type": "mpd",
    "url": "https://live-atv-cdn.izzigo.tv/5/out/u/dash/HBO2HD/default.mpd",
    "drm": {
      "clearkey": {
        "keyId": "fad936249e036830aa5bef41bec05326",
        "key": "31bb1ee9a8d088f62b0103550c301449"
      }
    }
  },
  {
    "name": "HBO 3",
    "category": "HBO Pack",
    "type": "mpd",
    "url": "https://dash2.antik.sk/stream/hisi_hbo_3/playlist_cbcs.mpd",
    "drm": {
      "clearkey": {
        "keyId": "6039ec9b213aca913821677a28bd78ae",
        "key": "4b80724d0ef86bcb2c21f7999d67739d"
      }
    }
  },
  {
    "name": "HBO MUNDI",
    "category": "HBO Pack",
    "type": "mpd",
    "url": "https://live-atv-cdn.izzigo.tv/5/out/u/dash/HBOMUNDIHD/default.mpd",
    "drm": {
      "clearkey": {
        "keyId": "b4abbee95b69b3e80a0d141272c870db",
        "key": "e8ea3a1ae6892eb76a73dc1b14d216d6"
      }
    }
  },
  {
    "name": "HBO BOXING",
    "category": "HBO Pack",
    "type": "mpd",
    "url": "https://1180885077.rsc.cdn77.org/HLS/BOXINGTV.m3u8",
    "drm": {
      "clearkey": {
        "keyId": "31363233323236373936303238393632",
        "key": "4b80724d0ef86bcb2c21f7999d67739d"
      }
    }
  },
  {
    "name": "HBO COMEDY",
    "category": "HBO Pack",
    "type": "mpd",
    "url": "https://ottb.live.cf.ww.aiv-cdn.net/pdx-nitro/live/clients/dash/enc/ejmisemcpz/out/v1/9e10d2bc67434f7d95911c3e695ce087/cenc.mpd",
    "drm": {
      "clearkey": {
        "keyId": "a7242a7026ff45609114ee1f3beb34dc",
        "key": "f2f613fb2132acd019d2a96bf1be15c1"
      }
    }
  },
  {
    "name": "HBO ZONE",
    "category": "HBO Pack",
    "type": "hls",
    "url": "https://ott.udptv.net/stream/iptv/hbozone/master.m3u8?u=discord.gg/civ4&p=b48a689eecee46d3167cbb669dddcd7f2e9f877b9ed7ee2bcc5bdfd0ca930ffd"
  },
  {
    "name": "UNIVERSAL TV",
    "category": "Universal+ Pack",
    "type": "mpd",
    "url": "https://live-atv-cdn.izzigo.tv/4/out/u/dash/UNIVERSALCHANNELHD/default.mpd",
    "drm": {
      "clearkey": {
        "keyId": "29e3d2678107f0ab0b35b6537c734f2a",
        "key": "92834ab4a7e1499b90886c5d49220e46"
      }
    }
  },
  {
    "name": "UNIVERSAL CINEMA",
    "category": "Universal+ Pack",
    "type": "mpd",
    "url": "https://live-atv-cdn.izzigo.tv/2/out/u/dash/UNIVERSALCINEMAHD/default.mpd",
    "drm": {
      "clearkey": {
        "keyId": "2b1443f33c919c89429a21259974a224",
        "key": "63ac662dde310cfb4cc6f9b43b34196d"
      }
    }
  },
  {
    "name": "UNIVERSAL PREMIERE",
    "category": "Universal+ Pack",
    "type": "mpd",
    "url": "https://live-atv-cdn.izzigo.tv/2/out/u/dash/UNIVERSALPREMIEREHD/default.mpd",
    "drm": {
      "clearkey": {
        "keyId": "31363735303934383833333131363533",
        "key": "000bd9fa95de8d88a40ba57ab09d400c"
      }
    }
  },
  {
    "name": "UNIVERSAL CRIME",
    "category": "Universal+ Pack",
    "type": "mpd",
    "url": "https://live-atv-cdn.izzigo.tv/2/out/u/dash/UNIVERSALCRIMEHD/default.mpd",
    "drm": {
      "clearkey": {
        "keyId": "8bb3f2f421f6afd025fa46c784944ad6",
        "key": "be9caaa813c5305e761c66ac63645901"
      }
    }
  },
  {
    "name": "UNIVERSAL REALITY",
    "category": "Universal+ Pack",
    "type": "mpd",
    "url": "https://live-atv-cdn.izzigo.tv/2/out/u/dash/UNIVERSALREALITYHD/default.mpd",
    "drm": {
      "clearkey": {
        "keyId": "4708dc633793632adb2287ef37b2dc79",
        "key": "3bd6688b8b44e96201e753224adfc8fb"
      }
    }
  },
  {
    "name": "UNIVERSAL COMEDY",
    "category": "Universal+ Pack",
    "type": "mpd",
    "url": "https://live-atv-cdn.izzigo.tv/2/out/u/dash/UNIVERSALCOMEDYHD/default.mpd",
    "drm": {
      "clearkey": {
        "keyId": "ec7ee27d83764e4b845c48cca31c8eef",
        "key": "86a1ed6e96caab8eb1009fe530d2cf4f"
      }
    }
  },
  {
    "name": "UNIVERSAL FAMILY",
    "category": "Universal+ Pack",
    "type": "mpd",
    "url": "https://live-atv-cdn.izzigo.tv/2/out/u/dash/UNIVERSALFAMILYHD/default.mpd",
    "drm": {
      "clearkey": {
        "keyId": "98817b144bcf19fd0ddca7fe54cee110",
        "key": "85a5835a92bd7f87faf5ffbcb8814d33"
      }
    }
  },
  {
    "name": "CINEEDGE",
    "category": "General Entertainment",
    "type": "mpd",
    "url": "https://linearjitp-playback.astro.com.my/dash-wv/linear/5110/default_ott.mpd",
    "drm": {
      "clearkey": {
        "keyId": "ce57c9490bd772b390d78b9fedaf8d36",
        "key": "fdcaf4c23899b53dee1ade954f81accd"
      }
    }
  },
  {
    "name": "THRILL",
    "category": "General Entertainment",
    "type": "mpd",
    "url": "https://qp-pldt-live-grp-06-prod.akamaized.net/out/u/cg_thrill_sd.mpd",
    "drm": {
      "clearkey": {
        "keyId": "3ab7cff1e63b9efc40aa962023b4b6b8",
        "key": "4ac6eaaf0e5e4f94987cbb5b243b54e8"
      }
    }
  },
  {
    "name": "HITS",
    "category": "General Entertainment",
    "type": "mpd",
    "url": "https://qp-pldt-live-grp-04-prod.akamaized.net/out/u/hits_hd1.mpd",
    "drm": {
      "clearkey": {
        "keyId": "ce5d18ffd68650affce1985201983ab7",
        "key": "6700a5d93203417b8585f7de7dd1a09b"
      }
    }
  },
  {
    "name": "HITS MOVIES",
    "category": "General Entertainment",
    "type": "mpd",
    "url": "https://times-ott-live.akamaized.net/moviesnow_wv_drm/index.mpd",
    "drm": {
      "clearkey": {
        "keyId": "40f019b86241d23ef075633fd7f1e927",
        "key": "297e6859591e3e7f6e2e505504746f33"
      }
    }
  },
  {
    "name": "MNX",
    "category": "General Entertainment",
    "type": "mpd",
    "url": "https://times-ott-live.akamaized.net/mnxhd_wv_drm/index.mpd",
    "drm": {
      "clearkey": {
        "keyId": "4a8607144e05b630e4af868471c98110",
        "key": "297e6859591e3e7f6e2e505504746f33"
      }
    }
  },
  {
    "name": "MN+",
    "category": "General Entertainment",
    "type": "mpd",
    "url": "https://times-ott-live.akamaized.net/mnplus_wv_drm/index.mpd",
    "drm": {
      "clearkey": {
        "keyId": "4a8607144e05b630e4af868471c98110",
        "key": "297e6859591e3e7f6e2e505504746f33"
      }
    }
  },
  {
    "name": "MOVIES NOW",
    "category": "General Entertainment",
    "type": "mpd",
    "url": "https://times-ott-live.akamaized.net/moviesnow_wv_drm/index.mpd",
    "drm": {
      "clearkey": {
        "keyId": "40f019b86241d23ef075633fd7f1e927",
        "key": "297e6859591e3e7f6e2e505504746f33"
      }
    }
  },
  {
    "name": "ROMEDY NOW",
    "category": "General Entertainment",
    "type": "mpd",
    "url": "https://times-ott-live.akamaized.net/romedynow_wv_drm/index.mpd",
    "drm": {
      "clearkey": {
        "keyId": "39cebece8b36640f9ba3f248ecfdf86a",
        "key": "297e6859591e3e7f6e2e505504746f33"
      }
    }
  },
  {
    "name": "CRAVE 1",
    "category": "General Entertainment",
    "type": "mpd",
    "url": "https://live-crave.video.9c9media.com/137c6e2e72e1bf67b82614c7c9b216d6f3a8c8281748505659713/fe/f/crave/crave1/manifest.mpd",
    "drm": {
      "clearkey": {
        "keyId": "4a107945066f45a9af2c32ea88be60f4",
        "key": "bb3e4bfa1821d2bdc25c9a0970e4e3b8"
      }
    }
  },
  {
    "name": "CRAVE 2",
    "category": "General Entertainment",
    "type": "mpd",
    "url": "https://live-crave.video.9c9media.com/ab4332c60e19b6629129eeb38a2a6ac6db5df2571721750022187/fe/f/crave/crave2/manifest.mpd",
    "drm": {
      "clearkey": {
        "keyId": "95588338ee37423e99358a6d431324b9",
        "key": "fe1219019a9f36cdef347088e592ca10"
      }
    }
  },
  {
    "name": "CRAVE 3",
    "category": "General Entertainment",
    "type": "mpd",
    "url": "https://live-crave.video.9c9media.com/58def7d65f59ffaf995238981dd0e276d5a8fe8d1748593014588/fe/f/crave/crave3/manifest.mpd",
    "drm": {
      "clearkey": {
        "keyId": "31363231323336323430303533343333",
        "key": "a97c515dbcb5dcbc432bbd09d15afd41"
      }
    }
  },
  {
    "name": "CRAVE 4",
    "category": "General Entertainment",
    "type": "mpd",
    "url": "https://live-crave.video.9c9media.com/c5875a31f178e038f7cc572b1aa0defb996ce7171748593186018/fe/f/crave/crave4/manifest.mpd",
    "drm": {
      "clearkey": {
        "keyId": "31363231393133313335323234373039",
        "key": "322d06e9326f4753a7ec0908030c13d8"
      }
    }
  },
  {
    "name": "ROCK ENTERTAINMENT",
    "category": "General Entertainment",
    "type": "mpd",
    "url": "https://qp-pldt-live-grp-13-prod.akamaized.net/out/u/dr_rockentertainment.mpd",
    "drm": {
      "clearkey": {
        "keyId": "e4ee0cf8ca9746f99af402ca6eed8dc7",
        "key": "f0e3ab943318471abc8b47027f384f5a"
      }
    }
  },
  {
    "name": "ROCK ACTION",
    "category": "General Entertainment",
    "type": "mpd",
    "url": "https://ottb.live.cf.ww.aiv-cdn.net/dub-nitro/live/clients/dash/enc/crenwml9jf/out/v1/09518f97387b4ea5a69279a1aa1daf0a/cenc.mpd",
    "drm": {
      "clearkey": {
        "keyId": "517c308ef6419b1767e9ae710c897710",
        "key": "99bd7c1ff2391244b4e40e08bef1109d"
      }
    }
  },
  {
    "name": "PARAMOUNT",
    "category": "General Entertainment",
    "type": "mpd",
    "url": "https://live-atv-cdn.izzigo.tv/2/out/u/dash/PARAMOUNTHD/default.mpd",
    "drm": {
      "clearkey": {
        "keyId": "94253cf1df2659c3ea253ba1091eca4d",
        "key": "d47ebabf7a21430b83a8c4b82d9ef6b1"
      }
    }
  },
  {
    "name": "COMEDY CENTRAL",
    "category": "General Entertainment",
    "type": "mpd",
    "url": "https://live-atv-cdn.izzigo.tv/2/out/u/dash/COMEDYCENTRALHD/default.mpd",
    "drm": {
      "clearkey": {
        "keyId": "2e53f8d8a5e94bca8f9a1e16ce67df33",
        "key": "e8ea3a1ae6892eb76a73dc1b14d216d6"
      }
    }
  },
  {
    "name": "AMC",
    "category": "General Entertainment",
    "type": "mpd",
    "url": "https://ABBFTJ3AAAAAAAAMBPTDXCMDYGR3L.ottb.live.cf.ww.aiv-cdn.net/dub-nitro/live/clients/dash/enc/6dmgizf5p5/out/v1/9a8dc2d85b6d4f9bb081d53cb26d2003/cenc.mpd",
    "drm": {
      "clearkey": {
        "keyId": "3d40f2990ec5362ca5be3a3c9bb8f8b4",
        "key": "b712c4ec307300043333a6899a402c10"
      }
    }
  },
  {
    "name": "FX",
    "category": "General Entertainment",
    "type": "hls",
    "url": "https://tr.live.clarovtrcdn.vtrplay.com/fxhdchi/vxfmt=dp/playlist.m3u8?device_profile=STB_HLS_VCAS_LIVE_HD"
  },
  {
    "name": "WARNER TV",
    "category": "General Entertainment",
    "type": "hls",
    "url": "https://cdn4.skygo.mn/live/disk1/Warner/HLSv3-FTA/Warner.m3u8"
  },
  {
    "name": "LIFETIME",
    "category": "General Entertainment",
    "type": "mpd",
    "url": "https://lott-web-opus.cdn.avp.telus.net/232006004039/vxfmt=dp/manifest.mpd?device_profile=dashvmx",
    "drm": {
      "clearkey": {
        "keyId": "1452d46b8ecd87b38310ce90d4f5209f",
        "key": "e3ce21758f33b38413d7cfecfddcb289"
      }
    }
  },
  {
    "name": "AXN",
    "category": "General Entertainment",
    "type": "mpd",
    "url": "https://linearjitp-playback.astro.com.my/dash-wv/linear/5009/default_ott.mpd",
    "drm": {
      "clearkey": {
        "keyId": "27d2061c0972931e18d43fbb3301c6f0",
        "key": "92d34a84fae8e54de0a829629941be10"
      }
    }
  },
  {
    "name": "K-PLUS",
    "category": "General Entertainment",
    "type": "mpd",
    "url": "https://fta2-cdn-flr.visionplus.id/out/v1/73b7057c72da4615888a11b02a6cbb3c/index.mpd",
    "drm": {
      "clearkey": {
        "keyId": "ca2931211c1a261f082a3a2c4fd9f91b",
        "key": "3dd22058fcb94e3790660d256655663b"
      }
    }
  },
  {
    "name": "TVN MOVIES",
    "category": "General Entertainment",
    "type": "mpd",
    "url": "https://qp-pldt-live-grp-07-prod.akamaized.net/out/u/cg_tvnmovie.mpd",
    "drm": {
      "clearkey": {
        "keyId": "a8795f3bdb8a4778b7e888ee484cc7a1",
        "key": "d4f05ce56c5231b7cdf53455bea58621"
      }
    }
  },
  {
    "name": "TCM CINEMA",
    "category": "General Entertainment",
    "type": "mpd",
    "url": "https://viamotionhsi.netplus.ch/live/eds/tcm/browser-dash/tcm.mpd",
    "drm": {
      "clearkey": {
        "keyId": "4e9d7954c2ff46759289da4fc9f018ea",
        "key": "a7724b7ca2604c33bb2e963a0319968a"
      }
    }
  },
  {
    "name": "MBC MAX",
    "category": "General Entertainment",
    "type": "mpd",
    "url": "https://uselector.cdn.intigral-ott.net/FMA/FMA.isml/manifest.mpd",
    "drm": {
      "clearkey": {
        "keyId": "1a91f2d315fb0593321ba60aa783ec2c",
        "key": "0fca71cf91b3c4931ad3cf66c631c24c"
      }
    }
  },
  {
    "name": "MBC ACTION",
    "category": "General Entertainment",
    "type": "mpd",
    "url": "https://uselector.cdn.intigral-ott.net/MBAH/MBAH.isml/manifest.mpd",
    "drm": {
      "clearkey": {
        "keyId": "ad1f003b4f0b31b75ea4593844435600",
        "key": "0f8537d8412b11edb8780242ac120002"
      }
    }
  },
  {
    "name": "OSN MOVIES FIRST",
    "category": "General Entertainment",
    "type": "mpd",
    "url": "https://uselector.cdn.intigral-ott.net/MBMH/MBMH.isml/manifest.mpd",
    "drm": {
      "clearkey": {
        "keyId": "0e7e35a07e2c12822316c0dc4873903f",
        "key": "5436395534576f7638744a43356d336e"
      }
    }
  },
  {
    "name": "CARTOON NETWORK",
    "category": "Kids & Family",
    "type": "hls",
    "url": "https://cdn4.skygo.mn/live/disk1/Cartoon_Network/HLSv3-FTA/Cartoon_Network.m3u8"
  },
  {
    "name": "NICK JR",
    "category": "Kids & Family",
    "type": "mpd",
    "url": "https://bunproxy.azurewebsites.net/api/001/2/ch00000090990000001245/manifest.mpd?virtualDomain=001.live_hls.zte.com",
    "drm": {
      "clearkey": {
        "keyId": "42d7a462640c6748371d39f23e4a18c3",
        "key": "342972045bddbc97f43cc3c841cdc6b9"
      }
    }
  },
  {
    "name": "NICK TOONS",
    "category": "Kids & Family",
    "type": "mpd",
    "url": "https://bunproxy.azurewebsites.net/api/001/2/ch00000090990000001243/manifest.mpd?virtualDomain=001.live_hls.zte.com",
    "drm": {
      "clearkey": {
        "keyId": "4e993aa8c1f295f8b94e8e9e6f6d0bfe",
        "key": "2bfc3e059a9f4176b835a15c9a0c0dac"
      }
    }
  },
  {
    "name": "NICKELODEON",
    "category": "Kids & Family",
    "type": "mpd",
    "url": "https://bunproxy.azurewebsites.net/api/001/2/ch00000090990000001250/manifest.mpd?virtualDomain=001.live_hls.zte.com",
    "drm": {
      "clearkey": {
        "keyId": "d39eb201ae494a0b98583df4d110e8dd",
        "key": "90cc957ead3f42e98b46d14e8c4b08de"
      }
    }
  },
  {
    "name": "DISNEY JR",
    "category": "Kids & Family",
    "type": "mpd",
    "url": "https://ottb.live.cf.ww.aiv-cdn.net/dub-nitro/live/clients/dash/enc/jts4tzzv1k/out/v1/8a5b29f7068c415aa371ea95743382e6/cenc.mpd",
    "drm": {
      "clearkey": {
        "keyId": "32d50635bfd05fbf8189a0e3f6c8db09",
        "key": "559da1b63eec77b5a942018f14d3f56f"
      }
    }
  },
  {
    "name": "DISNEY XD",
    "category": "Kids & Family",
    "type": "mpd",
    "url": "https://ottb.live.cf.ww.aiv-cdn.net/dub-nitro/live/clients/dash/enc/wu0ibylhtz/out/v1/020953cc1b63428181fa569223470e1a/cenc.mpd",
    "drm": {
      "clearkey": {
        "keyId": "8ce20e2a4b3dd04e0a6e5469b7cb47be",
        "key": "6169dd042bb5e59d709272b614011bbb"
      }
    }
  },
  {
    "name": "DISNEY CHANNEL",
    "category": "Kids & Family",
    "type": "mpd",
    "url": "https://ottb.live.cf.ww.aiv-cdn.net/gru-nitro/live/clients/dash/enc/1hz9ifohl2/out/v1/ac9abc088bfa42d49218644005535e02/cenc.mpd",
    "drm": {
      "clearkey": {
        "keyId": "2e2ac52cadf843459915eaa1a9b95e48",
        "key": "96c5ef69479732ae734f962748c19729"
      }
    }
  },
  {
    "name": "DISCOVERY KIDS",
    "category": "Kids & Family",
    "type": "mpd",
    "url": "https://live-atv-cdn.izzigo.tv/1/out/u/dash/DISCOVERYKIDSHD/default.mpd",
    "drm": {
      "clearkey": {
        "keyId": "ae26845bd33038a9c0774a0981007294",
        "key": "07c7f996b1734ea288641a68e1cfdc4d"
      }
    }
  },
  {
    "name": "PBS KIDS",
    "category": "Kids & Family",
    "type": "mpd",
    "url": "https://bunproxy.azurewebsites.net/api/001/2/ch00000090990000001179/manifest.mpd?virtualDomain=001.live_hls.zte.com",
    "drm": {
      "clearkey": {
        "keyId": "16ecd238c0394592b8d3559c06b1faf5",
        "key": "f3266bec607f25879f48640f30f1c888"
      }
    }
  },
  {
    "name": "MOONBUG",
    "category": "Kids & Family",
    "type": "mpd",
    "url": "https://bunproxy.azurewebsites.net/api/001/2/ch00000090990000001234/manifest.mpd?virtualDomain=001.live_hls.zte.com",
    "drm": {
      "clearkey": {
        "keyId": "bee1066160c0424696d9bf99ca0645e3",
        "key": "4ddc4cd97e7016485cb6d25bc2ba3cda"
      }
    }
  },
  {
    "name": "JIMJAM",
    "category": "Kids & Family",
    "type": "mpd",
    "url": "https://dash2.antik.sk/stream/hisi_jimjam/playlist_cbcs.mpd",
    "drm": {
      "clearkey": {
        "keyId": "971ebbe2d887476398e97c37e0c5c591",
        "key": "6a9fcc2f94258cee0f2108687c42e710"
      }
    }
  },
  {
    "name": "DREAMWORKS CHANNEL",
    "category": "Kids & Family",
    "type": "mpd",
    "url": "https://qp-pldt-live-grp-02-prod.akamaized.net/out/u/cg_dreamworks_hd1.mpd",
    "drm": {
      "clearkey": {
        "keyId": "4ab9645a2a0a47edbd65e8479c2b9669",
        "key": "50c699c444e5f80dacafc4c99667d810"
      }
    }
  },
  {
    "name": "DREAMWORKS (TAG)",
    "category": "Kids & Family",
    "type": "mpd",
    "url": "https://qp-pldt-live-grp-07-prod.akamaized.net/out/u/cg_dreamworktag.mpd",
    "drm": {
      "clearkey": {
        "keyId": "d39eb201ae494a0b98583df4d110e8dd",
        "key": "90cc957ead3f42e98b46d14e8c4b08de"
      }
    }
  },
  {
    "name": "CBEEBIES",
    "category": "Kids & Family",
    "type": "mpd",
    "url": "https://linearjitp-playback.astro.com.my/dash-wv/linear/5054/default_ott.mpd",
    "drm": {
      "clearkey": {
        "keyId": "39c175581e237eff9559607eb9b23c10",
        "key": "3a908a5d38a9c496ced27faa6bf5ff8e"
      }
    }
  },
  {
    "name": "ZOOMOO",
    "category": "Kids & Family",
    "type": "hls",
    "url": "https://amg01553-blueantmediaasi-zoomoonz-samsungnz-rdufn.amagi.tv/playlist/amg01553-blueantmediaasi-zoomoonz-samsungnz/playlist.m3u8"
  },
  {
    "name": "BABY TV",
    "category": "Kids & Family",
    "type": "mpd",
    "url": "https://ottb.live.cf.ww.aiv-cdn.net/dub-nitro/live/clients/dash/enc/k0duzgfejg/out/v1/70a50b1bda944628b8e7e66ab4069419/cenc.mpd",
    "drm": {
      "clearkey": {
        "keyId": "2fb39ab3f55333d5fa3e830ebf99ec16",
        "key": "e31a5a81caff5d07ea2411a571fc2e59"
      }
    }
  },
  {
    "name": "BABYFIRST",
    "category": "Kids & Family",
    "type": "hls",
    "url": "https://streams2.sofast.tv/ptnr-yupptv/title-BABYFIRST-ENG_YuppTV/v1/master/611d79b11b77e2f571934fd80ca1413453772ac7/c8d16110-566c-4e95-a1df-55d175e9e201/manifest.m3u8"
  },
  {
    "name": "DA VINCI",
    "category": "Kids & Family",
    "type": "mpd",
    "url": "https://linearjitp-playback.astro.com.my/dash-wv/linear/5093/default_ott.mpd",
    "drm": {
      "clearkey": {
        "keyId": "31363231393132373735323234353438",
        "key": "33564d7a447073443333773974633739"
      }
    }
  },
  {
    "name": "KAPAMILYA CHANNEL HD",
    "category": "General Entertainment",
    "type": "mpd",
    "url": "https://cdn-ue1-prod.tsv2.amagi.tv/linear/amg01006-abs-cbn-anc-global-dash-abscbnono/index.mpd",
    "drm": {
      "clearkey": {
        "keyId": "2fbdaa3bea0d0323ae011b318d1db716",
        "key": "18827aad7e2e79e526f529fd5027cb47"
      }
    }
  },
  {
    "name": "PHOENIX CHINESE",
    "category": "International",
    "type": "mpd",
    "url": "https://linearjitp-playback.astro.com.my/dash-wv/linear/5060/default_ott.mpd",
    "drm": {
      "clearkey": {
        "keyId": "fa806baddc384a168eff4f95f06ad289",
        "key": "9f327d24c66fbd84e15ab5c9ead7c7a4"
      }
    }
  },
  {
    "name": "ANIME X HIDIVE",
    "category": "International",
    "type": "hls",
    "url": "https://amc-anime-x-hidive-1-us.tablo.wurl.tv/playlist.m3u8"
  },
  {
    "name": "ANIONE",
    "category": "International",
    "type": "hls",
    "url": "https://ottb.live.cf.ww.aiv-cdn.net/dub-nitro/live/clients/dash/enc/u142pfptsm/out/v1/1caa3b2dfa9e448d8f61209bdfc1acdc/cenc.mpd"
  },
  {
    "name": "ANIPLUS",
    "category": "International",
    "type": "mpd",
    "url": "https://ott.udptv.net/stream/iptv/aniplus/master.m3u8?u=discord.gg/civ4&p=b48a689eecee46d3167cbb669dddcd7f2e9f877b9ed7ee2bcc5bdfd0ca930ffd",
    "drm": {
      "clearkey": {
        "keyId": "bfbcfcb8137dd565a7f4b5ce7800c1f0",
        "key": "ad2371259d34404cb89d54a4dc88dcd3"
      }
    }
  },
  {
    "name": "ASTRO BOO",
    "category": "International",
    "type": "mpd",
    "url": "http://linearjitp-playback.astro.com.my/dash-wv/linear/501/default_ott.mpd",
    "drm": {
      "clearkey": {
        "keyId": "c7b3852d9c84418f942923e41c31e633",
        "key": "fe71aea346db08f8c6fbf0592209f955"
      }
    }
  },
  {
    "name": "ASTRO SHOWCASE",
    "category": "International",
    "type": "mpd",
    "url": "https://linearjitp-playback.astro.com.my/dash-wv/linear/5015/default_ott.mpd",
    "drm": {
      "clearkey": {
        "keyId": "95588338ee37423e99358a6d431324b9",
        "key": "fe1219019a9f36cdef347088e592ca10"
      }
    }
  },
  {
    "name": "KOREAN BLOCKBUSTERS",
    "category": "International",
    "type": "mpd",
    "url": "https://linearjitp-playback.astro.com.my/dash-wv/linear/5171/default_ott.mpd",
    "drm": {
      "clearkey": {
        "keyId": "33333f38930949b1af65b3361ad80d1d",
        "key": "ad1f003b4f0b31b75ea4593844435600"
      }
    }
  },
  {
    "name": "ARIRANG",
    "category": "International",
    "type": "hls",
    "url": "https://amdlive-ch01-ctnd-com.akamaized.net/arirang_1ch/smil:arirang_1ch.smil/playlist.m3u8"
  },
  {
    "name": "KBS WORLD",
    "category": "International",
    "type": "hls",
    "url": "https://d7x8z4yuq42qn.cloudfront.net/index_7.m3u8"
  },
  {
    "name": "NHK WORLD PREMIUM",
    "category": "International",
    "type": "mpd",
    "url": "https://bunproxy.azurewebsites.net/api/001/2/ch00000090990000001090/manifest.mpd?virtualDomain=001.live_hls.zte.com",
    "drm": {
      "clearkey": {
        "keyId": "94bc19ad9cb04a7e6871e650a7f6529c",
        "key": "0f856fa0412b11edb8780242ac120002"
      }
    }
  },
  {
    "name": "NHK BS",
    "category": "International",
    "type": "hls",
    "url": "https://vthanh.utako.moe/NHK_BS/tracks-v1a1/mono.m3u8"
  },
  {
    "name": "NHK BSP4K",
    "category": "International",
    "type": "hls",
    "url": "https://vthanh.utako.moe/bsp4k/tracks-v1a1/mono.m3u8"
  },
  {
    "name": "BS10",
    "category": "International",
    "type": "hls",
    "url": "https://vthanh.utako.moe/bs10/tracks-v1a1/mono.m3u8"
  },
  {
    "name": "BS10 STAR CHANNEL",
    "category": "International",
    "type": "hls",
    "url": "https://vthanh.utako.moe/bs10_star/tracks-v1a1/mono.m3u8"
  },
  {
    "name": "BS11",
    "category": "International",
    "type": "hls",
    "url": "https://vthanh.utako.moe/BS11/tracks-v1a1/mono.m3u8"
  },
  {
    "name": "BS12 TWELLV",
    "category": "International",
    "type": "hls",
    "url": "https://vthanh.utako.moe/bs12/tracks-v1a1/mono.m3u8"
  },
  {
    "name": "ONE",
    "category": "International",
    "type": "mpd",
    "url": "https://bunproxy.azurewebsites.net/api/001/2/ch00000090990000001245/manifest.mpd?virtualDomain=001.live_hls.zte.com",
    "drm": {
      "clearkey": {
        "keyId": "d8fe398c79065173fa9788f226056510",
        "key": "8a7e801dbc275e3f4e1f43cba648906a"
      }
    }
  },
  {
    "name": "ONE SPORTS",
    "category": "International",
    "type": "mpd",
    "url": "https://qp-pldt-live-grp-07-prod.akamaized.net/out/u/cg_onesports_hd.mpd",
    "drm": {
      "clearkey": {
        "keyId": "0355f64277082b903022985035c498ca",
        "key": "1da2977f5fed3acb602cc2c8b57c41c1"
      }
    }
  },
  {
    "name": "ONE SPORTS +",
    "category": "International",
    "type": "mpd",
    "url": "https://qp-pldt-live-grp-03-prod.akamaized.net/out/u/cg_onesportsplus_hd1.mpd",
    "drm": {
      "clearkey": {
        "keyId": "fd2e8019f37211ca8b78a8b656f1b83a",
        "key": "c23677c829bb244b79a3dc09ffd88ca0"
      }
    }
  },
  {
    "name": "WOWOW PRIME",
    "category": "International",
    "type": "hls",
    "url": "https://vthanh.utako.moe/wprime/tracks-v1a1/mono.m3u8"
  },
  {
    "name": "WOWOW CINEMA",
    "category": "International",
    "type": "hls",
    "url": "https://vthanh.utako.moe/wcinema/tracks-v1a1/mono.m3u8"
  },
  {
    "name": "WOWOW LIVE",
    "category": "International",
    "type": "hls",
    "url": "https://vthanh.utako.moe/wlive/tracks-v1a1/mono.m3u8"
  },
  {
    "name": "LOTUS MACAU",
    "category": "International",
    "type": "mpd",
    "url": "https://qp-pldt-live-grp-07-prod.akamaized.net/out/u/lotusmacau_prd.mpd",
    "drm": {
      "clearkey": {
        "keyId": "02a02bce7a3c518386e0da4e5ec0188d",
        "key": "3ff02fcd80c2e3230c52ae70fe903410"
      }
    }
  },
  {
    "name": "TBS CHANNEL 1",
    "category": "International",
    "type": "hls",
    "url": "https://vthanh.utako.moe/tbsch1/tracks-v1a1/mono.m3u8"
  },
  {
    "name": "TBS CHANNEL 2",
    "category": "International",
    "type": "hls",
    "url": "https://vthanh.utako.moe/tbsch2/tracks-v1a1/mono.m3u8"
  },
  {
    "name": "NIHON EIGA SENMON",
    "category": "International",
    "type": "hls",
    "url": "https://vthanh.utako.moe/nihon_eiga/tracks-v1a1/mono.m3u8"
  },
  {
    "name": "FAMILY GEKIJYO",
    "category": "International",
    "type": "hls",
    "url": "https://vthanh.utako.moe/familygeki/tracks-v1a1/mono.m3u8"
  },
  {
    "name": "AT-X",
    "category": "International",
    "type": "hls",
    "url": "https://vthanh.utako.moe/AT-X/tracks-v1a1/mono.m3u8"
  },
  {
    "name": "FUJI TV ONE",
    "category": "International",
    "type": "hls",
    "url": "https://vthanh.utako.moe/fuji_one/tracks-v1a1/mono.m3u8"
  },
  {
    "name": "FUJI TV TWO",
    "category": "International",
    "type": "hls",
    "url": "https://vthanh.utako.moe/fuji_two/tracks-v1a1/mono.m3u8"
  },
  {
    "name": "FUJI TV NEXT",
    "category": "International",
    "type": "hls",
    "url": "https://vthanh.utako.moe/fuji_next/tracks-v1a1/mono.m3u8"
  },
  {
    "name": "TV ASAHI CHANNEL 1",
    "category": "International",
    "type": "hls",
    "url": "https://vthanh.utako.moe/ex_ch1/tracks-v1a1/mono.m3u8"
  },
  {
    "name": "TV ASAHI CHANNEL 2",
    "category": "International",
    "type": "hls",
    "url": "https://vthanh.utako.moe/ex_ch2/tracks-v1a1/mono.m3u8"
  },
  {
    "name": "TOKYO MX1",
    "category": "International",
    "type": "hls",
    "url": "https://vthanh.utako.moe/Tokyo_MX1/tracks-v1a1/mono.m3u8"
  },
  {
    "name": "TOKYO MX2",
    "category": "International",
    "type": "hls",
    "url": "https://vthanh.utako.moe/Tokyo_MX2/tracks-v1a1/mono.m3u8"
  },
  {
    "name": "CHANNEL NECO",
    "category": "International",
    "type": "hls",
    "url": "https://vthanh.utako.moe/neco/tracks-v1a1/mono.m3u8"
  },
  {
    "name": "TOEI CHANNEL",
    "category": "International",
    "type": "hls",
    "url": "https://vthanh.utako.moe/toei/tracks-v1a1/mono.m3u8"
  },
  {
    "name": "DLIFE",
    "category": "International",
    "type": "hls",
    "url": "https://vthanh.utako.moe/dlife/tracks-v1a1/mono.m3u8"
  },
  {
    "name": "TVN PREMIUM",
    "category": "International",
    "type": "mpd",
    "url": "https://qp-pldt-live-grp-09-prod.akamaized.net/out/u/cg_tvnpre.mpd",
    "drm": {
      "clearkey": {
        "keyId": "e1bde543e8a140b38d3f84ace746553e",
        "key": "31363231383438333031323033393138"
      }
    }
  },
  {
    "name": "OCN MOVIES",
    "category": "International",
    "type": "mpd",
    "url": "https://ocnmovies-drm2-mcdn.tving.com/ocnmovies_drm/live5000.smil/manifest.mpd",
    "drm": {
      "clearkey": {
        "keyId": "817839de27764deb879c65c571c19226",
        "key": "fecaa3486d9deef3f7f0e1a95b662cb7"
      }
    }
  },
  {
    "name": "OCN MOVIES 2",
    "category": "International",
    "type": "mpd",
    "url": "https://ocnmovies2-drm2-mcdn.tving.com/ocnmovies2_drm/live5000.smil/manifest.mpd",
    "drm": {
      "clearkey": {
        "keyId": "900c43f0e02742dd854148b7a75abbec",
        "key": "22fc5baf47ae3b6322bc244206bbb210"
      }
    }
  },
  {
    "name": "CELESTIAL MOVIES",
    "category": "International",
    "type": "mpd",
    "url": "https://linearjitp-playback.astro.com.my/dash-wv/linear/506/default_ott.mpd",
    "drm": {
      "clearkey": {
        "keyId": "c5c1ba26907291afec11a9a78d513410",
        "key": "bcf36f412fa3d735cea04f7443fbf77c"
      }
    }
  },
  {
    "name": "CCM",
    "category": "International",
    "type": "mpd",
    "url": "https://linearjitp-playback.astro.com.my/dash-wv/linear/5018/default_ott.mpd",
    "drm": {
      "clearkey": {
        "keyId": "0e2a2117d705613542618f58bf26fc8e",
        "key": "31e752b441bd2972f2b98a4b1bc1c7a1"
      }
    }
  },
  {
    "name": "RAI ITALIA",
    "category": "International",
    "type": "hls",
    "url": "https://ilglobotv-live.akamaized.net/channels/RAIItaliaSudAfrica/Live.m3u8"
  },
  {
    "name": "RAI NEWS 24",
    "category": "International",
    "type": "mpd",
    "url": "https://viamotionhsi.netplus.ch/live/eds/rainews/browser-dash/rainews.mpd",
    "drm": {
      "clearkey": {
        "keyId": "3f4423fecb09438c8782af0a7bcb2204",
        "key": "183b3eafa4c82e68f74c4244d54906b0"
      }
    }
  },
  {
    "name": "DAS ERSTE",
    "category": "International",
    "type": "mpd",
    "url": "https://viamotionhsi.netplus.ch/live/eds/daserstehd/browser-dash/daserstehd.mpd",
    "drm": {
      "clearkey": {
        "keyId": "edf1a715de9748638dd2fad75a419af2",
        "key": "3567746e30367a714e3346344f415947"
      }
    }
  },
  {
    "name": "TF1",
    "category": "International",
    "type": "mpd",
    "url": "https://viamotionhsi.netplus.ch/live/eds/tf1hd/browser-dash/tf1hd.mpd"
  },
  {
    "name": "3SAT",
    "category": "International",
    "type": "mpd",
    "url": "https://viamotionhsi.netplus.ch/live/eds/3sathd/browser-dash/3sathd.mpd"
  },
  {
    "name": "VOX",
    "category": "International",
    "type": "mpd",
    "url": "https://viamotionhsi.netplus.ch/live/eds/vox/browser-dash/vox.mpd"
  },
  {
    "name": "RTL",
    "category": "International",
    "type": "mpd",
    "url": "https://viamotionhsi.netplus.ch/live/eds/rtl/browser-dash/rtl.mpd"
  },
  {
    "name": "ORF 1",
    "category": "International",
    "type": "mpd",
    "url": "https://cachehsi1a.netplus.ch/live/eds/orf1/browser-dash/orf1.mpd"
  },
  {
    "name": "TVB XING HE",
    "category": "International",
    "type": "mpd",
    "url": "https://linearjitp-playback.astro.com.my/dash-wv/linear/2303/default_ott.mpd",
    "drm": {
      "clearkey": {
        "keyId": "e36e0cbdef0677b48dba5c63e8caaf10",
        "key": "620e51b82596475517a27aa425c52280"
      }
    }
  },
  {
    "name": "TVB JADE",
    "category": "International",
    "type": "mpd",
    "url": "https://linearjitp-playback.astro.com.my/dash-wv/linear/2306/default_ott.mpd",
    "drm": {
      "clearkey": {
        "keyId": "b336c8c6bb249b1a5f89dace8d9889e5",
        "key": "bc8d4369fcff86db765db82356b4797c"
      }
    }
  },
  {
    "name": "TVB CLASSIC",
    "category": "International",
    "type": "hls",
    "url": "https://vthanh.utako.moe/wcinema/tracks-v1a1/mono.m3u8"
  },
  {
    "name": "TVB ENTERTAINMENT NEWS",
    "category": "International",
    "type": "mpd",
    "url": "https://linearjitp-playback.astro.com.my/dash-wv/linear/2305/default_ott.mpd",
    "drm": {
      "clearkey": {
        "keyId": "5bfb374d644703550f0637532bca0491",
        "key": "fe71aea346db08f8c6fbf0592209f955"
      }
    }
  },
  {
    "name": "KAPAMILYA CHANNEL",
    "category": "International",
    "type": "mpd",
    "url": "https://cdn-ue1-prod.tsv2.amagi.tv/linear/amg01006-abs-cbn-anc-global-dash-abscbnono/index.mpd",
    "drm": {
      "clearkey": {
        "keyId": "2fbdaa3bea0d0323ae011b318d1db716",
        "key": "18827aad7e2e79e526f529fd5027cb47"
      }
    }
  },
  {
    "name": "ANC",
    "category": "International",
    "type": "mpd",
    "url": "https://cdn-ue1-prod.tsv2.amagi.tv/linear/amg01006-abs-cbn-anc-global-dash-abscbnono/index.mpd",
    "drm": {
      "clearkey": {
        "keyId": "2fbdaa3bea0d0323ae011b318d1db716",
        "key": "18827aad7e2e79e526f529fd5027cb47"
      }
    }
  },
  {
    "name": "METRO CHANNEL",
    "category": "International",
    "type": "mpd",
    "url": "https://linearjitp-playback.astro.com.my/dash-wv/linear/5016/default_ott.mpd",
    "drm": {
      "clearkey": {
        "keyId": "31363331313738363633373739363234",
        "key": "c48c8e48dba24420b5dcef9f5b847b12"
      }
    }
  },
  {
    "name": "TMC",
    "category": "International",
    "type": "mpd",
    "url": "https://cors.jugorder.de/https://tr.live.cdn.cgates.lt/live/dash/560908/index.mpd",
    "drm": {
      "clearkey": {
        "keyId": "dac605bc197e442c93f4f08595a95100",
        "key": "cacc2086a1ac693d6173084b942e751d"
      }
    }
  },
  {
    "name": "ZEE SINE",
    "category": "International",
    "type": "mpd",
    "url": "https://amg17931-zee-amg17931c9-samsung-ph-6528.playouts.now.amagi.tv/playlist/amg17931-asiatvusaltdfast-zeesine-samsungph/playlist.m3u8",
    "drm": {
      "clearkey": {
        "keyId": "50547394045b3d047dc7d92f57b5fb33",
        "key": "31363331363737343637333533323837"
      }
    }
  },
  {
    "name": "GMA",
    "category": "International",
    "type": "mpd",
    "url": "https://fta1-cdn-flr.visionplus.id/out/v1/45c0752c6b6b4397b80243ac9fed96fd/index.mpd",
    "drm": {
      "clearkey": {
        "keyId": "2d2e14ae2d7e43679f22c1e4c798782a",
        "key": "30304533b5008ad7f33c25f225506bc0"
      }
    }
  },
  {
    "name": "MOVIES NOW",
    "category": "International",
    "type": "mpd",
    "url": "https://times-ott-live.akamaized.net/moviesnow_wv_drm/index.mpd",
    "drm": {
      "clearkey": {
        "keyId": "40f019b86241d23ef075633fd7f1e927",
        "key": "297e6859591e3e7f6e2e505504746f33"
      }
    }
  },
  {
    "name": "MNX",
    "category": "International",
    "type": "mpd",
    "url": "https://times-ott-live.akamaized.net/mnxhd_wv_drm/index.mpd",
    "drm": {
      "clearkey": {
        "keyId": "4a8607144e05b630e4af868471c98110",
        "key": "297e6859591e3e7f6e2e505504746f33"
      }
    }
  },
  {
    "name": "MN+",
    "category": "International",
    "type": "mpd",
    "url": "https://times-ott-live.akamaized.net/mnplus_wv_drm/index.mpd",
    "drm": {
      "clearkey": {
        "keyId": "4a8607144e05b630e4af868471c98110",
        "key": "297e6859591e3e7f6e2e505504746f33"
      }
    }
  },
  {
    "name": "ROMEDY NOW",
    "category": "International",
    "type": "mpd",
    "url": "https://times-ott-live.akamaized.net/romedynow_wv_drm/index.mpd",
    "drm": {
      "clearkey": {
        "keyId": "39cebece8b36640f9ba3f248ecfdf86a",
        "key": "297e6859591e3e7f6e2e505504746f33"
      }
    }
  },
  {
    "name": "CRAVE 1",
    "category": "International",
    "type": "mpd",
    "url": "https://live-crave.video.9c9media.com/137c6e2e72e1bf67b82614c7c9b216d6f3a8c8281748505659713/fe/f/crave/crave1/manifest.mpd",
    "drm": {
      "clearkey": {
        "keyId": "4a107945066f45a9af2c32ea88be60f4",
        "key": "bb3e4bfa1821d2bdc25c9a0970e4e3b8"
      }
    }
  },
  {
    "name": "CRAVE 2",
    "category": "International",
    "type": "mpd",
    "url": "https://live-crave.video.9c9media.com/ab4332c60e19b6629129eeb38a2a6ac6db5df2571721750022187/fe/f/crave/crave2/manifest.mpd",
    "drm": {
      "clearkey": {
        "keyId": "95588338ee37423e99358a6d431324b9",
        "key": "fe1219019a9f36cdef347088e592ca10"
      }
    }
  },
  {
    "name": "CRAVE 3",
    "category": "International",
    "type": "mpd",
    "url": "https://live-crave.video.9c9media.com/58def7d65f59ffaf995238981dd0e276d5a8fe8d1748593014588/fe/f/crave/crave3/manifest.mpd",
    "drm": {
      "clearkey": {
        "keyId": "31363231323336323430303533343333",
        "key": "a97c515dbcb5dcbc432bbd09d15afd41"
      }
    }
  },
  {
    "name": "CRAVE 4",
    "category": "International",
    "type": "mpd",
    "url": "https://live-crave.video.9c9media.com/c5875a31f178e038f7cc572b1aa0defb996ce7171748593186018/fe/f/crave/crave4/manifest.mpd",
    "drm": {
      "clearkey": {
        "keyId": "31363231393133313335323234373039",
        "key": "322d06e9326f4753a7ec0908030c13d8"
      }
    }
  },
  {
    "name": "ROCK ENTERTAINMENT",
    "category": "International",
    "type": "mpd",
    "url": "https://qp-pldt-live-grp-13-prod.akamaized.net/out/u/dr_rockentertainment.mpd",
    "drm": {
      "clearkey": {
        "keyId": "e4ee0cf8ca9746f99af402ca6eed8dc7",
        "key": "f0e3ab943318471abc8b47027f384f5a"
      }
    }
  },
  {
    "name": "ROCK ACTION",
    "category": "International",
    "type": "mpd",
    "url": "https://ottb.live.cf.ww.aiv-cdn.net/dub-nitro/live/clients/dash/enc/crenwml9jf/out/v1/09518f97387b4ea5a69279a1aa1daf0a/cenc.mpd",
    "drm": {
      "clearkey": {
        "keyId": "517c308ef6419b1767e9ae710c897710",
        "key": "99bd7c1ff2391244b4e40e08bef1109d"
      }
    }
  },
  {
    "name": "PARAMOUNT",
    "category": "International",
    "type": "mpd",
    "url": "https://live-atv-cdn.izzigo.tv/2/out/u/dash/PARAMOUNTHD/default.mpd",
    "drm": {
      "clearkey": {
        "keyId": "94253cf1df2659c3ea253ba1091eca4d",
        "key": "d47ebabf7a21430b83a8c4b82d9ef6b1"
      }
    }
  },
  {
    "name": "COMEDY CENTRAL",
    "category": "International",
    "type": "mpd",
    "url": "https://live-atv-cdn.izzigo.tv/2/out/u/dash/COMEDYCENTRALHD/default.mpd",
    "drm": {
      "clearkey": {
        "keyId": "2e53f8d8a5e94bca8f9a1e16ce67df33",
        "key": "e8ea3a1ae6892eb76a73dc1b14d216d6"
      }
    }
  },
  {
    "name": "AMC",
    "category": "International",
    "type": "mpd",
    "url": "https://ABBFTJ3AAAAAAAAMBPTDXCMDYGR3L.ottb.live.cf.ww.aiv-cdn.net/dub-nitro/live/clients/dash/enc/6dmgizf5p5/out/v1/9a8dc2d85b6d4f9bb081d53cb26d2003/cenc.mpd",
    "drm": {
      "clearkey": {
        "keyId": "3d40f2990ec5362ca5be3a3c9bb8f8b4",
        "key": "b712c4ec307300043333a6899a402c10"
      }
    }
  },
  {
    "name": "WARNER TV",
    "category": "International",
    "type": "hls",
    "url": "https://cdn4.skygo.mn/live/disk1/Warner/HLSv3-FTA/Warner.m3u8"
  },
  {
    "name": "LIFETIME",
    "category": "International",
    "type": "mpd",
    "url": "https://lott-web-opus.cdn.avp.telus.net/232006004039/vxfmt=dp/manifest.mpd?device_profile=dashvmx",
    "drm": {
      "clearkey": {
        "keyId": "1452d46b8ecd87b38310ce90d4f5209f",
        "key": "e3ce21758f33b38413d7cfecfddcb289"
      }
    }
  },
  {
    "name": "AXN",
    "category": "International",
    "type": "mpd",
    "url": "https://linearjitp-playback.astro.com.my/dash-wv/linear/5009/default_ott.mpd",
    "drm": {
      "clearkey": {
        "keyId": "27d2061c0972931e18d43fbb3301c6f0",
        "key": "92d34a84fae8e54de0a829629941be10"
      }
    }
  },
  {
    "name": "K-PLUS",
    "category": "International",
    "type": "mpd",
    "url": "https://fta2-cdn-flr.visionplus.id/out/v1/73b7057c72da4615888a11b02a6cbb3c/index.mpd",
    "drm": {
      "clearkey": {
        "keyId": "ca2931211c1a261f082a3a2c4fd9f91b",
        "key": "3dd22058fcb94e3790660d256655663b"
      }
    }
  },
  {
    "name": "TVN MOVIES",
    "category": "International",
    "type": "mpd",
    "url": "https://qp-pldt-live-grp-07-prod.akamaized.net/out/u/cg_tvnmovie.mpd",
    "drm": {
      "clearkey": {
        "keyId": "a8795f3bdb8a4778b7e888ee484cc7a1",
        "key": "d4f05ce56c5231b7cdf53455bea58621"
      }
    }
  },
  {
    "name": "TCM CINEMA",
    "category": "International",
    "type": "mpd",
    "url": "https://viamotionhsi.netplus.ch/live/eds/tcm/browser-dash/tcm.mpd",
    "drm": {
      "clearkey": {
        "keyId": "4e9d7954c2ff46759289da4fc9f018ea",
        "key": "a7724b7ca2604c33bb2e963a0319968a"
      }
    }
  },
  {
    "name": "MBC MAX",
    "category": "International",
    "type": "mpd",
    "url": "https://uselector.cdn.intigral-ott.net/FMA/FMA.isml/manifest.mpd",
    "drm": {
      "clearkey": {
        "keyId": "1a91f2d315fb0593321ba60aa783ec2c",
        "key": "0fca71cf91b3c4931ad3cf66c631c24c"
      }
    }
  },
  {
    "name": "MBC ACTION",
    "category": "International",
    "type": "mpd",
    "url": "https://uselector.cdn.intigral-ott.net/MBAH/MBAH.isml/manifest.mpd",
    "drm": {
      "clearkey": {
        "keyId": "ad1f003b4f0b31b75ea4593844435600",
        "key": "0f8537d8412b11edb8780242ac120002"
      }
    }
  },
  {
    "name": "OSN MOVIES FIRST",
    "category": "International",
    "type": "mpd",
    "url": "https://uselector.cdn.intigral-ott.net/MBMH/MBMH.isml/manifest.mpd",
    "drm": {
      "clearkey": {
        "keyId": "0e7e35a07e2c12822316c0dc4873903f",
        "key": "5436395534576f7638744a43356d336e"
      }
    }
  },
  {
    "name": "INVESTIGATION DISCOVERY",
    "category": "Factual & Lifestyle",
    "type": "mpd",
    "url": "https://linearjitp-playback.astro.com.my/dash-wv/linear/2111/default_ott.mpd",
    "drm": {
      "clearkey": {
        "keyId": "4bf778b0f74a001140656a9fa21927e3",
        "key": "db1ee2b8994b91aac65049ef3e493787"
      }
    }
  },
  {
    "name": "ANIMAL PLANET",
    "category": "Factual & Lifestyle",
    "type": "mpd",
    "url": "https://qp-pldt-live-grp-02-prod.akamaized.net/out/u/cg_animal_planet_sd.mpd",
    "drm": {
      "clearkey": {
        "keyId": "adf163c6c1729e6f77668d4e49f32352",
        "key": "b4a7b3289eff493d8700becf2e2a1157"
      }
    }
  },
  {
    "name": "DISCOVERY SCIENCE",
    "category": "Factual & Lifestyle",
    "type": "mpd",
    "url": "https://d1g8wgjurz8via.cloudfront.net/bpk-tv/Discoveryscience2/default/manifest.mpd",
    "drm": {
      "clearkey": {
        "keyId": "335511dfdf0d03bc06f1fdead5870b5a",
        "key": "dbf8a0a306a64525ba3012fd225370c0"
      }
    }
  },
  {
    "name": "DISCOVERY TURBO",
    "category": "Factual & Lifestyle",
    "type": "mpd",
    "url": "https://d1g8wgjurz8via.cloudfront.net/bpk-tv/Discoveryturbo2/default/manifest.mpd",
    "drm": {
      "clearkey": {
        "keyId": "34ce95b60c424e169619816c5181aded",
        "key": "20b91609967e472c27040716ef6a8b9a"
      }
    }
  },
  {
    "name": "DISCOVERY ASIA",
    "category": "Factual & Lifestyle",
    "type": "mpd",
    "url": "https://linearjitp-playback.astro.com.my/dash-wv/linear/2110/default_ott.mpd",
    "drm": {
      "clearkey": {
        "keyId": "11223344556677889900112233445566",
        "key": "31363231393132323937323234333139"
      }
    }
  },
  {
    "name": "DISCOVERY CHANNEL",
    "category": "Factual & Lifestyle",
    "type": "mpd",
    "url": "https://ottb.live.cf.ww.aiv-cdn.net/dub-nitro/live/clients/dash/enc/xfixnh8glr/out/v1/7bd3f3b9e3f94d15bc0a52878c067d60/cenc.mpd",
    "drm": {
      "clearkey": {
        "keyId": "6169dd042bb5e59d709272b614011bbb",
        "key": "de6c5feaae5f6963b4b392ddc8b6a778"
      }
    }
  },
  {
    "name": "DISCOVERY FAMILY",
    "category": "Factual & Lifestyle",
    "type": "mpd",
    "url": "https://ottb.live.cf.ww.aiv-cdn.net/dub-nitro/live/clients/dash/enc/fdx74zqzhu/out/v1/7d7a8c6981a842b98a683e9fbfe51d17/cenc.mpd",
    "drm": {
      "clearkey": {
        "keyId": "bce56c8de2f1b27b16dd7d3abc2409b6",
        "key": "183b3eafa4c82e68f74c4244d54906b0"
      }
    }
  },
  {
    "name": "NATIONAL GEOGRAPHIC",
    "category": "Factual & Lifestyle",
    "type": "mpd",
    "url": "https://ottb.live.cf.ww.aiv-cdn.net/fra-nitro/live/clients/dash/enc/vcog5dpiby/out/v1/62521b63232844669628ad2c35776bd1/cenc.mpd",
    "drm": {
      "clearkey": {
        "keyId": "e6e1173c892f7fbd60a37a76a78935cb",
        "key": "a1340a251a5aa63a9b0ea5d9d7f67595"
      }
    }
  },
  {
    "name": "NATIONAL GEOGRAPHIC WILD",
    "category": "Factual & Lifestyle",
    "type": "mpd",
    "url": "https://ottb.live.cf.ww.aiv-cdn.net/gru-nitro/live/clients/dash/enc/s818vishap/out/v1/7a63dfa162b443ceb195075092adbb21/cenc.mpd",
    "drm": {
      "clearkey": {
        "keyId": "90e2e491c850a49a5ab21bb6fa6b4d24",
        "key": "fa65220c9f76e424173899df533a6d10"
      }
    }
  },
  {
    "name": "TRAVEL CHANNEL",
    "category": "Factual & Lifestyle",
    "type": "mpd",
    "url": "https://qp-pldt-live-grp-08-prod.akamaized.net/out/u/travel_channel_sd.mpd",
    "drm": {
      "clearkey": {
        "keyId": "367662564c69425947353948374f4553",
        "key": "783374273ef97ad3bc992c1d63e091e7"
      }
    }
  },
  {
    "name": "HISTORY",
    "category": "Factual & Lifestyle",
    "type": "mpd",
    "url": "https://qp-pldt-live-grp-11-prod.akamaized.net/out/u/dr_historyhd.mpd",
    "drm": {
      "clearkey": {
        "keyId": "b11a040f74a5e81b06b5f771cf1f7567",
        "key": "1ba155e345c4456ba891cbee9b3e1c4c"
      }
    }
  },
  {
    "name": "HISTORY2",
    "category": "Factual & Lifestyle",
    "type": "mpd",
    "url": "https://dash2.antik.sk/stream/hisi_h2/playlist_cbcs.mpd",
    "drm": {
      "clearkey": {
        "keyId": "bcf36f412fa3d735cea04f7443fbf77c",
        "key": "5713350KvZGUi"
      }
    }
  },
  {
    "name": "BBC EARTH",
    "category": "Factual & Lifestyle",
    "type": "mpd",
    "url": "https://qp-pldt-live-grp-03-prod.akamaized.net/out/u/cg_bbcearth_hd1.mpd",
    "drm": {
      "clearkey": {
        "keyId": "8ab093adabdc343b8734b7ecf0aea11a",
        "key": "6ff29fb2d6b7d825eb06004650a0a4ea"
      }
    }
  },
  {
    "name": "BBC LIFESTYLE",
    "category": "Factual & Lifestyle",
    "type": "mpd",
    "url": "https://qp-pldt-live-grp-09-prod.akamaized.net/out/u/cg_bbclifestyle.mpd",
    "drm": {
      "clearkey": {
        "keyId": "8a7e801dbc275e3f4e1f43cba648906a",
        "key": "071c7cc4c2f33e1e2d3fa3807d1bbbcc"
      }
    }
  },
  {
    "name": "TLC",
    "category": "Factual & Lifestyle",
    "type": "mpd",
    "url": "https://ottb.live.cf.ww.aiv-cdn.net/dub-nitro/live/clients/dash/enc/zuf794yutz/out/v1/ca3534bfe4f148298b36719204d108e0/cenc.mpd",
    "drm": {
      "clearkey": {
        "keyId": "bc006e72e9aab57aca8ae75a83e8f20e",
        "key": "cb9e1a122ed1c6445f7d3fd2162358f1"
      }
    }
  },
  {
    "name": "ASIAN FOOD NETWORK",
    "category": "Factual & Lifestyle",
    "type": "mpd",
    "url": "https://linearjitp-playback.astro.com.my/dash-wv/linear/5096/default_ott.mpd",
    "drm": {
      "clearkey": {
        "keyId": "673478506852336979544a4f38475479",
        "key": "51646d5e500648c6a4e319c7861e963f"
      }
    }
  },
  {
    "name": "FOOD NETWORK",
    "category": "Factual & Lifestyle",
    "type": "mpd",
    "url": "https://qp-pldt-live-grp-09-prod.akamaized.net/out/u/cg_foodnetwork_hd1.mpd",
    "drm": {
      "clearkey": {
        "keyId": "933ae273b166baa8fb203eef1a7adbdf",
        "key": "7a8ed20a4958398677e2c9ccd5a53a00"
      }
    }
  },
  {
    "name": "HGTV",
    "category": "Factual & Lifestyle",
    "type": "mpd",
    "url": "https://qp-pldt-live-grp-08-prod.akamaized.net/out/u/cg_hgtv_hd1.mpd",
    "drm": {
      "clearkey": {
        "keyId": "d39eb201ae494a0b98583df4d110e8dd",
        "key": "90cc957ead3f42e98b46d14e8c4b08de"
      }
    }
  },
  {
    "name": "KNOWLEDGE CHANNEL",
    "category": "Factual & Lifestyle",
    "type": "mpd",
    "url": "https://qp-pldt-live-grp-13-prod.akamaized.net/out/u/dr_knowledgechannel.mpd",
    "drm": {
      "clearkey": {
        "keyId": "887d3f9e52b3432c8b1a79b1d44ab3fe",
        "key": "ff1febd7018d0dd711601e795e0d6210"
      }
    }
  },
  {
    "name": "LOVE NATURE",
    "category": "Factual & Lifestyle",
    "type": "mpd",
    "url": "https://linearjitp-playback.astro.com.my/dash-wv/linear/2406/default_ott.mpd",
    "drm": {
      "clearkey": {
        "keyId": "e3ce21758f33b38413d7cfecfddcb289",
        "key": "bb3e4bfa1821d2bdc25c9a0970e4e3b8"
      }
    }
  },
  {
    "name": "OUTDOOR CHANNEL",
    "category": "Factual & Lifestyle",
    "type": "hls",
    "url": "https://cdn-apse1-prod.tsv2.amagi.tv/linear/amg00718-outdoorchannela-outdoortvnz-samsungnz/playlist.m3u8"
  },
  {
    "name": "E!",
    "category": "Factual & Lifestyle",
    "type": "mpd",
    "url": "https://fl1.moveonjoy.com/E_ENTERTAINMENT_TELEVISION/manifest.mpd",
    "drm": {
      "clearkey": {
        "keyId": "3ca2eb502e8746168c77ad9a506bb293",
        "key": "4e9d7954c2ff46759289da4fc9f018ea"
      }
    }
  },
  {
    "name": "GLOBAL TREKKER",
    "category": "Factual & Lifestyle",
    "type": "mpd",
    "url": "https://linearjitp-playback.astro.com.my/dash-wv/linear/5067/default_ott.mpd",
    "drm": {
      "clearkey": {
        "keyId": "971ebbe2d887476398e97c37e0c5c591",
        "key": "6a9fcc2f94258cee0f2108687c42e710"
      }
    }
  },
  {
    "name": "LIVING ASIA CHANNEL",
    "category": "Factual & Lifestyle",
    "type": "hls",
    "url": "https://linearjitp-playback.astro.com.my/dash-wv/linear/9983/default_ott.mpd"
  },
  {
    "name": "MTV",
    "category": "Music",
    "type": "mpd",
    "url": "https://live-atv-cdn.izzigo.tv/4/out/u/dash/MTVHD/default.mpd",
    "drm": {
      "clearkey": {
        "keyId": "3551344768323677674c32704a713249",
        "key": "29e3d2678107f0ab0b35b6537c734f2a"
      }
    }
  },
  {
    "name": "MTV HITS",
    "category": "Music",
    "type": "mpd",
    "url": "https://live-atv-cdn.izzigo.tv/4/out/u/dash/MTVHITSSD/default.mpd",
    "drm": {
      "clearkey": {
        "keyId": "3471b2464b5c7b033a03bb8307d9fa35",
        "key": "0e2a2117d705613542618f58bf26fc8e"
      }
    }
  },
  {
    "name": "MTV LIVE",
    "category": "Music",
    "type": "mpd",
    "url": "https://live-atv-cdn.izzigo.tv/4/out/u/dash/MTVLIVEHD/default.mpd",
    "drm": {
      "clearkey": {
        "keyId": "47c093e0c9fd4f80839a0337da3dd876",
        "key": "1a022fb33ad3de4d4579b04966551488"
      }
    }
  },
  {
    "name": "MTV 80S",
    "category": "Music",
    "type": "mpd",
    "url": "https://live-atv-cdn.izzigo.tv/4/out/u/dash/MTV80SSD/default.mpd",
    "drm": {
      "clearkey": {
        "keyId": "b8ae7679cf187261303313b18ba7a14",
        "key": "058dec845bd340178a388edd104a015e"
      }
    }
  },
  {
    "name": "MTV 00S",
    "category": "Music",
    "type": "mpd",
    "url": "https://live-atv-cdn.izzigo.tv/3/out/u/dash/MTV00HD/default.mpd",
    "drm": {
      "clearkey": {
        "keyId": "ac0936acc0036fad2273efaa42b1fafd",
        "key": "d0c76237c5ee38e7a420e9c83323023e"
      }
    }
  },
  {
    "name": "CLUB MTV",
    "category": "Music",
    "type": "mpd",
    "url": "https://live-atv-cdn.izzigo.tv/4/out/u/dash/CLUBMTVSD/default.mpd",
    "drm": {
      "clearkey": {
        "keyId": "0d067e22a727ae9f264478f5c2ed903a",
        "key": "c3f2aa420b8908ab8761571c01899460"
      }
    }
  },
  {
    "name": "MTV 90S",
    "category": "Music",
    "type": "mpd",
    "url": "https://bunproxy.azurewebsites.net/api/001/2/ch00000090990000001254/manifest.mpd?virtualDomain=001.live_hls.zte.com",
    "drm": {
      "clearkey": {
        "keyId": "31363232353335323435353337353331",
        "key": "544962686d3165306836346e73673346"
      }
    }
  },
  {
    "name": "MYX",
    "category": "Music",
    "type": "mpd",
    "url": "https://bunproxy.azurewebsites.net/api/001/2/ch00000090990000001252/manifest.mpd?virtualDomain=001.live_hls.zte.com",
    "drm": {
      "clearkey": {
        "keyId": "31363232353335323435353337353331",
        "key": "544962686d3165306836346e73673346"
      }
    }
  },
  {
    "name": "NOW 70S",
    "category": "Music",
    "type": "mpd",
    "url": "https://amg19223-amg19223c1-amgplt0351.playout.now3.amagi.tv/playlist/amg19223-amg19223c1-amgplt0351/playlist.m3u8",
    "drm": {
      "clearkey": {
        "keyId": "a06ca6c275744151895762e0346380f5",
        "key": "276767a578aae2eacb284247ccd9eb10"
      }
    }
  },
  {
    "name": "NOW 80S",
    "category": "Music",
    "type": "mpd",
    "url": "https://amg19223-amg19223c5-amgplt0351.playout.now3.amagi.tv/playlist/amg19223-amg19223c5-amgplt0351/playlist.m3u8",
    "drm": {
      "clearkey": {
        "keyId": "a642dd4bf3ea782e19202adefb604b10",
        "key": "49a9bf0cfba1cb4e52de3d458f6fb3a2"
      }
    }
  },
  {
    "name": "NOW ROCK",
    "category": "Music",
    "type": "mpd",
    "url": "https://amg19223-amg19223c12-amgplt0352.playout.now3.amagi.tv/playlist/amg19223-amg19223c12-amgplt0352/playlist.m3u8",
    "drm": {
      "clearkey": {
        "keyId": "4591bf63837b4b342058c5e11a51744a",
        "key": "602827a870d49862d1a23f2912957b4c"
      }
    }
  },
  {
    "name": "STINGRAY CMUSIC",
    "category": "Music",
    "type": "hls",
    "url": "https://lotus.stingray.com/manifest/cmusic-cme004-montreal/samsungtvplus/master.m3u8"
  },
  {
    "name": "STINGRAY CLASSICA",
    "category": "Music",
    "type": "hls",
    "url": "https://lotus.stingray.com/manifest/classica-cla008-montreal/samsungtvplus/master.m3u8"
  },
  {
    "name": "STINGRAY DJAZZ",
    "category": "Music",
    "type": "hls",
    "url": "https://lotus.stingray.com/manifest/djazz-djaads-montreal/samsungtvplus/master.m3u8"
  },
  {
    "name": "STINGRAY ICONCERTS",
    "category": "Music",
    "type": "mpd",
    "url": "https://cors.jugorder.de/https://tr.live.cdn.cgates.lt/live/dash/561101/index.mpd",
    "drm": {
      "clearkey": {
        "keyId": "2cb3b9a7c36a445f483c6b216c59b20e",
        "key": "15b830e0b73b0b8ef99786121997d5f5"
      }
    }
  },
  {
    "name": "SPACE SHOWER TV",
    "category": "Music",
    "type": "hls",
    "url": "https://vthanh.utako.moe/spaceshower/tracks-v1a1/mono.m3u8"
  },
  {
    "name": "TRACE URBAN",
    "category": "Music",
    "type": "hls",
    "url": "https://cdn-apse1-prod.tsv2.amagi.tv/linear/amg01076-lightningintern-traceurban-samsungnz/playlist.m3u8"
  },
  {
    "name": "NEW KPOP",
    "category": "Music",
    "type": "hls",
    "url": "https://giatv.bozztv.com/giatv/giatv-kpoptvplay/kpoptvplay/chunks.m3u8"
  },
  {
    "name": "KPOP TV PLAY",
    "category": "Music",
    "type": "hls",
    "url": "https://giatv.bozztv.com/giatv/giatv-kpoptvplay/kpoptvplay/chunks.m3u8"
  },
  {
    "name": "PREMIER SPORTS",
    "category": "Sports",
    "type": "mpd",
    "url": "https://qp-pldt-live-grp-03-prod.akamaized.net/out/u/cg_ps_hd1.mpd",
    "drm": {
      "clearkey": {
        "keyId": "47c03f29f04747d2a298c0ad63f3b2c1",
        "key": "92b162b0b1d0dbb1e401f5845b4ce109"
      }
    }
  },
  {
    "name": "PREMIER SPORTS 2",
    "category": "Sports",
    "type": "mpd",
    "url": "https://cors.jugorder.de/https://tr.live.cdn.cgates.lt/live/dash/561306/index.mpd",
    "drm": {
      "clearkey": {
        "keyId": "31363331363735363832333531363036",
        "key": "227ffaf09bec4a889e0e0988704d52a2"
      }
    }
  },
  {
    "name": "PREMIER SPORTS ASIA",
    "category": "Sports",
    "type": "mpd",
    "url": "https://linearjitp-playback.astro.com.my/dash-wv/linear/401/default_ott.mpd",
    "drm": {
      "clearkey": {
        "keyId": "1a655189ab5c49eb235308c2b1a9e710",
        "key": "322d06e9326f4753a7ec0908030c13d8"
      }
    }
  },
  {
    "name": "PREMIER FOOTBALL",
    "category": "Sports",
    "type": "mpd",
    "url": "https://linearjitp-playback.astro.com.my/dash-wv/linear/400/default_ott.mpd",
    "drm": {
      "clearkey": {
        "keyId": "fa49373ddac7b0e9079e62a1ab55807c",
        "key": "af573556d33ef2f094b98c7d22e9ffce"
      }
    }
  },
  {
    "name": "PREMIERE 1",
    "category": "Sports",
    "type": "mpd",
    "url": "https://cors.jugorder.de/https://tr.live.cdn.cgates.lt/live/dash/561201/index.mpd",
    "drm": {
      "clearkey": {
        "keyId": "31363231393132373735323234353438",
        "key": "a7242a7026ff45609114ee1f3beb34dc"
      }
    }
  },
  {
    "name": "PREMIERE 2",
    "category": "Sports",
    "type": "mpd",
    "url": "https://cors.jugorder.de/https://tr.live.cdn.cgates.lt/live/dash/561206/index.mpd",
    "drm": {
      "clearkey": {
        "keyId": "ba4052ca5eb6f8ff6b98d47d098b2dec",
        "key": "31363331313738363633373739363234"
      }
    }
  },
  {
    "name": "PREMIERE 3",
    "category": "Sports",
    "type": "mpd",
    "url": "https://cors.jugorder.de/https://tr.live.cdn.cgates.lt/live/dash/561208/index.mpd",
    "drm": {
      "clearkey": {
        "keyId": "472aa631b1e671070a4bf198f43da0c7",
        "key": "fdcaf4c23899b53dee1ade954f81accd"
      }
    }
  },
  {
    "name": "PREMIERE 4",
    "category": "Sports",
    "type": "mpd",
    "url": "https://cors.jugorder.de/https://tr.live.cdn.cgates.lt/live/dash/561305/index.mpd",
    "drm": {
      "clearkey": {
        "keyId": "31363331363734363432333339393538",
        "key": "373648504f5155373054657665783851"
      }
    }
  },
  {
    "name": "PREMIERE 5",
    "category": "Sports",
    "type": "mpd",
    "url": "https://cors.jugorder.de/https://tr.live.cdn.cgates.lt/live/dash/561901/index.mpd",
    "drm": {
      "clearkey": {
        "keyId": "6d647aff767c453daa5fb54a44c783c6",
        "key": "3f59355e15eed1bb219ea1687d55cfbb"
      }
    }
  },
  {
    "name": "PREMIERE 6",
    "category": "Sports",
    "type": "mpd",
    "url": "https://cors.jugorder.de/https://tr.live.cdn.cgates.lt/live/dash/561504/index.mpd",
    "drm": {
      "clearkey": {
        "keyId": "246c4f74d0e2417e914a51e5e6e87f22",
        "key": "26d7f918e7d24d0889c2ce2e623b3206"
      }
    }
  },
  {
    "name": "PREMIERE 7",
    "category": "Sports",
    "type": "mpd",
    "url": "https://cors.jugorder.de/https://linear210-de-dash1-prd-cf.cdn12.skycdp.com/bced/033341/index.mpd?c3.ri=13629687177772365970",
    "drm": {
      "clearkey": {
        "keyId": "f812aeae6be5b924a8181b512d5d7910",
        "key": "e6daacaced7eba147d2b667441060a4f"
      }
    }
  },
  {
    "name": "SPOTV",
    "category": "Sports",
    "type": "mpd",
    "url": "https://qp-pldt-live-grp-11-prod.akamaized.net/out/u/dr_spotvhd.mpd",
    "drm": {
      "clearkey": {
        "keyId": "aa00f320f06247dcaf8e3cea1fb07f44",
        "key": "1dc30f49888c4652897d9c998aa2cac1"
      }
    }
  },
  {
    "name": "SPOTV 2",
    "category": "Sports",
    "type": "mpd",
    "url": "https://qp-pldt-live-grp-13-prod.akamaized.net/out/u/dr_spotv2hd.mpd",
    "drm": {
      "clearkey": {
        "keyId": "362202eefc5d9e42eec6450998cce9e8",
        "key": "bb43112b7b72e9c287da0ecdec8606a7"
      }
    }
  },
  {
    "name": "FOX SPORTS",
    "category": "Sports",
    "type": "mpd",
    "url": "https://linearjitp-playback.astro.com.my/dash-wv/linear/900/default_ott.mpd",
    "drm": {
      "clearkey": {
        "keyId": "31363231393132323937323234333139",
        "key": "a7242a7026ff45609114ee1f3beb34dc"
      }
    }
  },
  {
    "name": "FOX SPORTS 2",
    "category": "Sports",
    "type": "mpd",
    "url": "https://linearjitp-playback.astro.com.my/dash-wv/linear/9983/default_ott.mpd",
    "drm": {
      "clearkey": {
        "keyId": "31363232313037353439323837363235",
        "key": "96701d297d1241e492d41c397631d857"
      }
    }
  },
  {
    "name": "FOX SPORTS 3",
    "category": "Sports",
    "type": "mpd",
    "url": "https://linearjitp-playback.astro.com.my/dash-wv/linear/5052/default_ott.mpd",
    "drm": {
      "clearkey": {
        "keyId": "fa65220c9f76e424173899df533a6d10",
        "key": "397c64e42507d95e5460830918c22a98"
      }
    }
  },
  {
    "name": "FOX SPORTS PREMIUM",
    "category": "Sports",
    "type": "mpd",
    "url": "https://linearjitp-playback.astro.com.my/dash-wv/linear/5066/default_ott.mpd",
    "drm": {
      "clearkey": {
        "keyId": "4a4f75336e6e30764575624855326937",
        "key": "544962686d3165306836346e73673346"
      }
    }
  },
  {
    "name": "TNT SPORTS 1",
    "category": "Sports",
    "type": "mpd",
    "url": "https://ottb.live.cf.ww.aiv-cdn.net/lhr-nitro/live/clients/dash/enc/wf8usag51e/out/v1/bd3b0c314fff4bb1ab4693368f3cd2d3/cenc.mpd",
    "drm": {
      "clearkey": {
        "keyId": "5769730ffbdc4b2fd8945929d9ace063",
        "key": "217624a3983b3593ca7d1f3b01042d4f"
      }
    }
  },
  {
    "name": "TNT SPORTS 2",
    "category": "Sports",
    "type": "mpd",
    "url": "https://ottb.live.cf.ww.aiv-cdn.net/lhr-nitro/live/clients/dash/enc/i2pcjr4pe5/out/v1/912e9db56d75403b8a9ac0a719110f36/cenc.mpd",
    "drm": {
      "clearkey": {
        "keyId": "a1340a251a5aa63a9b0ea5d9d7f67595",
        "key": "11223344556677889900112233445566"
      }
    }
  },
  {
    "name": "TNT SPORTS 3",
    "category": "Sports",
    "type": "mpd",
    "url": "https://ottb.live.cf.ww.aiv-cdn.net/dub-nitro/live/clients/dash/enc/4zkafrcxji/out/v1/810ebca1aff0443da717da4acdeda158/cenc.mpd",
    "drm": {
      "clearkey": {
        "keyId": "e6e1173c892f7fbd60a37a76a78935cb",
        "key": "a1340a251a5aa63a9b0ea5d9d7f67595"
      }
    }
  },
  {
    "name": "TNT SPORTS 4",
    "category": "Sports",
    "type": "mpd",
    "url": "https://ottb.live.cf.ww.aiv-cdn.net/dub-nitro/live/clients/dash/enc/crenwml9jf/out/v1/09518f97387b4ea5a69279a1aa1daf0a/cenc.mpd",
    "drm": {
      "clearkey": {
        "keyId": "517c308ef6419b1767e9ae710c897710",
        "key": "99bd7c1ff2391244b4e40e08bef1109d"
      }
    }
  },
  {
    "name": "ESPN",
    "category": "Sports",
    "type": "mpd",
    "url": "https://live-atv-cdn.izzigo.tv/1/out/u/dash/ESPNHD/default.mpd",
    "drm": {
      "clearkey": {
        "keyId": "fad936249e036830aa5bef41bec05326",
        "key": "31bb1ee9a8d088f62b0103550c301449"
      }
    }
  },
  {
    "name": "ESPN 2",
    "category": "Sports",
    "type": "mpd",
    "url": "https://live-atv-cdn.izzigo.tv/1/out/u/dash/ESPN2HD/default.mpd",
    "drm": {
      "clearkey": {
        "keyId": "05b47ae3be1368912ebe28f87480fc84",
        "key": "168bd815468639fe4528b4bf0141f310"
      }
    }
  },
  {
    "name": "ESPN 3",
    "category": "Sports",
    "type": "mpd",
    "url": "https://live-atv-cdn.izzigo.tv/1/out/u/dash/ESPN3HD/default.mpd",
    "drm": {
      "clearkey": {
        "keyId": "22312FtIwGG",
        "key": "31363735313530343938343234373739"
      }
    }
  },
  {
    "name": "NBA TV",
    "category": "Sports",
    "type": "mpd",
    "url": "https://live-atv-cdn.izzigo.tv/2/out/u/dash/NBAHD/default.mpd",
    "drm": {
      "clearkey": {
        "keyId": "44b423a77dd34ace162db35cbb0fb6a3",
        "key": "aa48b28bd723f91214887df6ed9fad10"
      }
    }
  },
  {
    "name": "NBA TV PHILIPPINES",
    "category": "Sports",
    "type": "mpd",
    "url": "https://qp-pldt-live-grp-02-prod.akamaized.net/out/u/cgnl_nba.mpd",
    "drm": {
      "clearkey": {
        "keyId": "45e77e6a8ba767b63cacfdb01ef2ac29",
        "key": "933ae273b166baa8fb203eef1a7adbdf"
      }
    }
  },
  {
    "name": "EUROSPORT",
    "category": "Sports",
    "type": "mpd",
    "url": "https://atemeshield1-voe.sysln.id/live/eds/EUROSPORTHD/mpd/EUROSPORTHD.mpd",
    "drm": {
      "clearkey": {
        "keyId": "dac6cbd9d17a451bb76386f52469e0e9",
        "key": "d0c76237c5ee38e7a420e9c83323023e"
      }
    }
  },
  {
    "name": "EUROSPORT 1",
    "category": "Sports",
    "type": "mpd",
    "url": "https://ottb.live.cf.ww.aiv-cdn.net/gru-nitro/live/clients/dash/enc/phxwb8s3u9/out/v1/45162b5b3c62402aa2e763b38517be9d/cenc.mpd",
    "drm": {
      "clearkey": {
        "keyId": "5a6668f3a5d64338bce13307e5c570be",
        "key": "f5b72bf3b89b9848de5616f37de040b7"
      }
    }
  },
  {
    "name": "EUROSPORT 2",
    "category": "Sports",
    "type": "mpd",
    "url": "https://ottb.live.cf.ww.aiv-cdn.net/gru-nitro/live/clients/dash/enc/wwinlbo2f3/out/v1/3f77baf7841a4fdeb9001961b9541a08/cenc.mpd",
    "drm": {
      "clearkey": {
        "keyId": "c63d5b0d7e52335b61aeba4f6537d54d",
        "key": "9ccd5dd0c86a40ed719b83e1801bcd88"
      }
    }
  },
  {
    "name": "BEIN SPORTS 1",
    "category": "Sports",
    "type": "mpd",
    "url": "https://ottb.live.cf.ww.aiv-cdn.net/dub-nitro/live/clients/dash/enc/tepjqej1ys/out/v1/c9c9159baee749a19612b1598495859a/cenc.mpd",
    "drm": {
      "clearkey": {
        "keyId": "b8ae7679cf187261303313b18ba7a14",
        "key": "183b3eafa4c82e68f74c4244d54906b0"
      }
    }
  },
  {
    "name": "BEIN SPORTS 2",
    "category": "Sports",
    "type": "mpd",
    "url": "https://ottb.live.cf.ww.aiv-cdn.net/dub-nitro/live/clients/dash/enc/wybgz0orr8/out/v1/2f6d1612abd44f5883917f8a585b955f/cenc.mpd",
    "drm": {
      "clearkey": {
        "keyId": "b5a3a800848120c843ae0fa68c09c261",
        "key": "3ab7cff1e63b9efc40aa962023b4b6b8"
      }
    }
  },
  {
    "name": "BEIN SPORTS 3",
    "category": "Sports",
    "type": "mpd",
    "url": "https://ottb.live.cf.ww.aiv-cdn.net/dub-nitro/live/clients/dash/enc/at8teepvrn/out/v1/ab8d59a847f046c88f07a7f3d115d7fe/cenc.mpd",
    "drm": {
      "clearkey": {
        "keyId": "1c8c50d4f29a44e5b7c1a8a25d20f3b4",
        "key": "4b44557035556777346e4b3745613651"
      }
    }
  },
  {
    "name": "BEIN SPORTS 4",
    "category": "Sports",
    "type": "mpd",
    "url": "https://fta3-cdn-flr.visionplus.id/out/v1/fe4d00f07e2f43b789102b84b4d243a9/index.mpd",
    "drm": {
      "clearkey": {
        "keyId": "1571520e0e0f4675b34d28913b0c51b9",
        "key": "daad0aeb165b9a26b706f2a261b8fafe"
      }
    }
  },
  {
    "name": "BEIN SPORTS 5",
    "category": "Sports",
    "type": "mpd",
    "url": "https://ottb.live.cf.ww.aiv-cdn.net/dub-nitro/live/clients/dash/enc/fdx74zqzhu/out/v1/7d7a8c6981a842b98a683e9fbfe51d17/cenc.mpd",
    "drm": {
      "clearkey": {
        "keyId": "7e99f734748d098cbfa2f7bde968dd44",
        "key": "ffa7c3ca6020428c919e13b817b7e31b"
      }
    }
  },
  {
    "name": "ASTRO SPORTS PLUS",
    "category": "Sports",
    "type": "mpd",
    "url": "https://linearjitp-playback.astro.com.my/dash-wv/linear/800/default_ott.mpd",
    "drm": {
      "clearkey": {
        "keyId": "c7b3852d9c84418f942923e41c31e633",
        "key": "7eea72d6075245a99ee3255603d58853"
      }
    }
  },
  {
    "name": "ASTRO FOOTBALL",
    "category": "Sports",
    "type": "mpd",
    "url": "https://linearjitp-playback.astro.com.my/dash-wv/linear/440/default_ott.mpd",
    "drm": {
      "clearkey": {
        "keyId": "3bdf94f9fc1888529f8d27d070d38566",
        "key": "a5cd47bba986b233d3731297cb62fdf9"
      }
    }
  },
  {
    "name": "STARZPLAY SPORTS",
    "category": "Sports",
    "type": "mpd",
    "url": "https://uselector.cdn.intigral-ott.net/SPZ/SPZ.isml/manifest.mpd",
    "drm": {
      "clearkey": {
        "keyId": "eb65e4b92473ed6e33ff05a56343dbab",
        "key": "c48c8e48dba24420b5dcef9f5b847b12"
      }
    }
  },
  {
    "name": "ONE SPORTS",
    "category": "Sports",
    "type": "mpd",
    "url": "https://qp-pldt-live-grp-07-prod.akamaized.net/out/u/cg_onesports_hd.mpd",
    "drm": {
      "clearkey": {
        "keyId": "0355f64277082b903022985035c498ca",
        "key": "1da2977f5fed3acb602cc2c8b57c41c1"
      }
    }
  },
  {
    "name": "ONE SPORTS +",
    "category": "Sports",
    "type": "mpd",
    "url": "https://qp-pldt-live-grp-03-prod.akamaized.net/out/u/cg_onesportsplus_hd1.mpd",
    "drm": {
      "clearkey": {
        "keyId": "fd2e8019f37211ca8b78a8b656f1b83a",
        "key": "c23677c829bb244b79a3dc09ffd88ca0"
      }
    }
  },
  {
    "name": "TAP SPORTS",
    "category": "Sports",
    "type": "mpd",
    "url": "https://qp-pldt-live-grp-11-prod.akamaized.net/out/u/dr_tapsports.mpd",
    "drm": {
      "clearkey": {
        "keyId": "8836fb04d62dc64c9f8a39ef8640d5eb",
        "key": "d8520e96a1283ab6e5be538474bfa810"
      }
    }
  },

  {
    "name": "PREMIERE 8",
    "category": "Local",
    "type": "mpd",
    "url": "https://bunproxy.azurewebsites.net/api/001/2/ch00000090990000001098/manifest.mpd?virtualDomain=001.live_hls.zte.com",
    "drm": {
      "clearkey": {
        "keyId": "31363331363734363432333339393538",
        "key": "475d6dd40eaba6896e02b26a6cf34d95"
      }
    }
  },
  {
    "name": "RPTV",
    "category": "Local",
    "type": "mpd",
    "url": "https://bunproxy.azurewebsites.net/api/001/2/ch00000090990000001093/manifest.mpd?virtualDomain=001.live_hls.zte.com",
    "drm": {
      "clearkey": {
        "keyId": "1dc30f49888c4652897d9c998aa2cac1",
        "key": "273189c214e85b43ac36298d1c422330"
      }
    }
  },
  {
    "name": "NET25",
    "category": "Local",
    "type": "mpd",
    "url": "https://uselector.cdn.intigral-ott.net/MBMH/MBMH.isml/manifest.mpd",
    "drm": {
      "clearkey": {
        "keyId": "5436395534576f7638744a43356d336e",
        "key": "0e7e35a07e2c12822316c0dc4873903f"
      }
    }
  },
  {
    "name": "TV5",
    "category": "Local",
    "type": "mpd",
    "url": "https://qp-pldt-live-grp-02-prod.akamaized.net/out/u/tv5_hd.mpd",
    "drm": {
      "clearkey": {
        "keyId": "b04ae8017b5b4601a5a0c9060f6d5b7d",
        "key": "53a3776a034dbe5f483d0f3a46f5fddf"
      }
    }
  },
  {
    "name": "IBC 13",
    "category": "Local",
    "type": "mpd",
    "url": "https://qp-pldt-live-grp-07-prod.akamaized.net/out/u/ibc13_sd_new.mpd",
    "drm": {
      "clearkey": {
        "keyId": "386f3337674c36666e3861713930726f",
        "key": "2bfc3e059a9f4176b835a15c9a0c0dac"
      }
    }
  },
  {
    "name": "PTV",
    "category": "Local",
    "type": "mpd",
    "url": "https://qp-pldt-live-grp-02-prod.akamaized.net/out/u/cg_ptv4_sd.mpd",
    "drm": {
      "clearkey": {
        "keyId": "4d09e48cae8061ed7612c1c969804922",
        "key": "83e7dc469eb303c4237db6750225f6be"
      }
    }
  },
  {
    "name": "A2Z",
    "category": "Local",
    "type": "mpd",
    "url": "https://qp-pldt-live-grp-02-prod.akamaized.net/out/u/cg_a2z.mpd",
    "drm": {
      "clearkey": {
        "keyId": "f703e4c8ec9041eeb5028ab4248fa094",
        "key": "7a98f8e748e2e14057e9f99ac8e3a025"
      }
    }
  },
  {
    "name": "ALL TV",
    "category": "Local",
    "type": "mpd",
    "url": "https://bunproxy.azurewebsites.net/api/001/2/ch00000090990000001109/manifest.mpd?virtualDomain=001.live_hls.zte.com",
    "drm": {
      "clearkey": {
        "keyId": "31363232303137373937323535313836",
        "key": "38346b5732353165303954347677476e"
      }
    }
  },
  {
    "name": "CNN Philippines",
    "category": "Local",
    "type": "mpd",
    "url": "https://qp-pldt-live-grp-03-prod.akamaized.net/out/u/cnn_rptv_prod_hd.mpd",
    "drm": {
      "clearkey": {
        "keyId": "436157316d374c314e56667576363272",
        "key": "39c175581e237eff9559607eb9b23c10"
      }
    }
  },
  {
    "name": "DZRH TV",
    "category": "Local",
    "type": "mpd",
    "url": "https://cdn4.skygo.mn/live/disk1/DW/HLSv3-FTA/DW.m3u8",
    "drm": {
      "clearkey": {
        "keyId": "436b69f987924fcbbc06d40a69c2799a",
        "key": "74576436426946764a6b4e5734456e37"
      }
    }
  },
  {
    "name": "RJ TV",
    "category": "Local",
    "type": "mpd",
    "url": "https://vthanh.utako.moe/Tokyo_MX2/tracks-v1a1/mono.m3u8",
    "drm": {
      "clearkey": {
        "keyId": "184f94303d3357b9a7381ccdeee9b611",
        "key": "3161c6c45076419fbbc333c277a22f65"
      }
    }
  },
  {
    "name": "RADYO BANDIDO TV",
    "category": "Local",
    "type": "mpd",
    "url": "https://vthanh.utako.moe/bs10/tracks-v1a1/mono.m3u8",
    "drm": {
      "clearkey": {
        "keyId": "22312FtIwGG",
        "key": "723548436f6e34333961586150756649"
      }
    }
  },
  {
    "name": "CLTV 36",
    "category": "Local",
    "type": "mpd",
    "url": "https://bunproxy.azurewebsites.net/api/001/2/ch00000090990000001159/manifest.mpd?virtualDomain=001.live_hls.zte.com",
    "drm": {
      "clearkey": {
        "keyId": "4bbdc78024a54662854b412d01fafa16",
        "key": "361197805d0149c29801946cf2dde67c"
      }
    }
  },
  {
    "name": "DZMM TELERADYO",
    "category": "Local",
    "type": "mpd",
    "url": "https://bunproxy.azurewebsites.net/api/001/2/ch00000090990000001174/manifest.mpd?virtualDomain=001.live_hls.zte.com",
    "drm": {
      "clearkey": {
        "keyId": "31363233323237323935303332363334",
        "key": "279695ebe0fb1bc5787422b6b59ce8a8"
      }
    }
  },
  {
    "name": "ONE NEWS",
    "category": "Local",
    "type": "mpd",
    "url": "https://qp-pldt-live-grp-04-prod.akamaized.net/out/u/onenews_hd1.mpd",
    "drm": {
      "clearkey": {
        "keyId": "77d98ed71db7524c27875a09a975f9e6",
        "key": "1aace05f58d8edef9697fd52cb09f441"
      }
    }
  },
  {
    "name": "ONE PH",
    "category": "Local",
    "type": "mpd",
    "url": "https://qp-pldt-live-grp-04-prod.akamaized.net/out/u/oneph_sd.mpd",
    "drm": {
      "clearkey": {
        "keyId": "397c64e42507d95e5460830918c22a98",
        "key": "29e3d2678107f0ab0b35b6537c734f2a"
      }
    }
  },
  {
    "name": "INC TV",
    "category": "Local",
    "type": "mpd",
    "url": "https://bunproxy.azurewebsites.net/api/001/2/ch00000090990000001183/manifest.mpd?virtualDomain=001.live_hls.zte.com",
    "drm": {
      "clearkey": {
        "keyId": "32d50635bfd05fbf8189a0e3f6c8db09",
        "key": "071448690a0ec9b27eb2c1a7d5e03010"
      }
    }
  },
  {
    "name": "TVUP",
    "category": "Local",
    "type": "mpd",
    "url": "https://qp-pldt-live-grp-09-prod.akamaized.net/out/u/tvup_prd.mpd",
    "drm": {
      "clearkey": {
        "keyId": "d8520e96a1283ab6e5be538474bfa810",
        "key": "6d5e62525837ba9b7e09cfb8716116ba"
      }
    }
  },
  {
    "name": "ALIW CHANNEL 23",
    "category": "Local",
    "type": "mpd",
    "url": "https://bunproxy.azurewebsites.net/api/001/2/ch00000090990000001103/manifest.mpd?virtualDomain=001.live_hls.zte.com",
    "drm": {
      "clearkey": {
        "keyId": "31363232303230383430323537313039",
        "key": "91febe843c08c7cc523efd827292e40e"
      }
    }
  },
  {
    "name": "ORAS NG HIMALA TV",
    "category": "Local",
    "type": "mpd",
    "url": "https://bunproxy.azurewebsites.net/api/001/2/ch00000090990000001175/manifest.mpd?virtualDomain=001.live_hls.zte.com",
    "drm": {
      "clearkey": {
        "keyId": "31363233323237303338303332343538",
        "key": "e6e1173c892f7fbd60a37a76a78935cb"
      }
    }
  },
  {
    "name": "GOLDEN NATION NETWORK",
    "category": "Local",
    "type": "mpd",
    "url": "https://bunproxy.azurewebsites.net/api/001/2/ch00000090990000001081/manifest.mpd?virtualDomain=001.live_hls.zte.com",
    "drm": {
      "clearkey": {
        "keyId": "37fdee8b6eef5c96001e8c6fc47bfc08",
        "key": "2f971e6a1cc58e7085afc761a3f13162"
      }
    }
  },
  {
    "name": "PBA RUSH",
    "category": "Local",
    "type": "mpd",
    "url": "https://qp-pldt-live-grp-01-prod.akamaized.net/out/u/cg_pbarush_hd1.mpd",
    "drm": {
      "clearkey": {
        "keyId": "95588338ee37423e99358a6d431324b9",
        "key": "559da1b63eec77b5a942018f14d3f56f"
      }
    }
  },
  {
    "name": "UAAP VARSITY",
    "category": "Local",
    "type": "mpd",
    "url": "https://qp-pldt-live-grp-10-prod.akamaized.net/out/u/cg_uaap_cplay_sd.mpd",
    "drm": {
      "clearkey": {
        "keyId": "362202eefc5d9e42eec6450998cce9e8",
        "key": "559da1b63eec77b5a942018f14d3f56f"
      }
    }
  },
  {
    "name": "CINEMA ONE",
    "category": "Local Entertainment",
    "type": "mpd",
    "url": "https://bunproxy.azurewebsites.net/api/001/2/ch00000090990000001283/manifest.mpd?virtualDomain=001.live_hls.zte.com",
    "drm": {
      "clearkey": {
        "keyId": "31363331363736373234333532363730",
        "key": "684b6853695333444a6b345579376a61"
      }
    }
  },
  {
    "name": "CELESTIAL MOVIES PINOY",
    "category": "Local Entertainment",
    "type": "mpd",
    "url": "https://qp-pldt-live-grp-01-prod.akamaized.net/out/u/celmovie_pinoy_sd.mpd",
    "drm": {
      "clearkey": {
        "keyId": "b21654621230ae21714a5cab52daeb9d",
        "key": "4ddc4cd97e7016485cb6d25bc2ba3cda"
      }
    }
  },
  {
    "name": "JEEPNEY TV",
    "category": "Local Entertainment",
    "type": "mpd",
    "url": "https://bunproxy.azurewebsites.net/api/001/2/ch00000090990000001286/manifest.mpd?virtualDomain=001.live_hls.zte.com",
    "drm": {
      "clearkey": {
        "keyId": "27662063ZATMqp",
        "key": "07c7f996b1734ea288641a68e1cfdc4d"
      }
    }
  },
  {
    "name": "PBO",
    "category": "Local Entertainment",
    "type": "mpd",
    "url": "https://qp-pldt-live-grp-04-prod.akamaized.net/out/u/pbo_sd.mpd",
    "drm": {
      "clearkey": {
        "keyId": "2fb39ab3f55333d5fa3e830ebf99ec16",
        "key": "53a3776a034dbe5f483d0f3a46f5fddf"
      }
    }
  },
  {
    "name": "SOLARFLIX",
    "category": "Local Entertainment",
    "type": "mpd",
    "url": "https://fta1-cdn-flr.visionplus.id/out/v1/dc63bd198bc44193b570e0567ff5b22c/index.mpd",
    "drm": {
      "clearkey": {
        "keyId": "b8ae7679cf18e7261303313b18ba7a14",
        "key": "35416a68643065697575493337566135"
      }
    }
  },
  {
    "name": "SARI-SARI",
    "category": "Local Entertainment",
    "type": "mpd",
    "url": "https://qp-pldt-live-grp-06-prod.akamaized.net/out/u/cg_sari_sari_sd.mpd",
    "drm": {
      "clearkey": {
        "keyId": "34c1715a9fd24e7d8497da043669ad66",
        "key": "900c43f0e02742dd854148b7a75abbec"
      }
    }
  },
  {
    "name": "BUKO",
    "category": "Local Entertainment",
    "type": "mpd",
    "url": "https://qp-pldt-live-grp-06-prod.akamaized.net/out/u/cg_buko_sd.mpd",
    "drm": {
      "clearkey": {
        "keyId": "d273c085f2ab4a248e7bfc375229007d",
        "key": "7932354c3a84f7fc1b80efa6bcea0615"
      }
    }
  },
  {
    "name": "TAP ACTION FLIX",
    "category": "Local Entertainment",
    "type": "mpd",
    "url": "https://qp-pldt-live-grp-06-prod.akamaized.net/out/u/cg_tapactionflix_hd1.mpd",
    "drm": {
      "clearkey": {
        "keyId": "44a9e6477651b3b47f3a2b727d562835",
        "key": "8ccb6857157c1a01c5a47eb853f51aa2"
      }
    }
  },
  {
    "name": "TVN MOVIES PINOY",
    "category": "Local Entertainment",
    "type": "mpd",
    "url": "https://qp-pldt-live-grp-07-prod.akamaized.net/out/u/cg_tvnmovie.mpd",
    "drm": {
      "clearkey": {
        "keyId": "a8795f3bdb8a4778b7e888ee484cc7a1",
        "key": "ce5d18ffd68650affce1985201983ab7"
      }
    }
  },
  {
    "name": "PINOY XTREME",
    "category": "Local Entertainment",
    "type": "hls",
    "url": "https://qp-pldt-live-grp-07-prod.akamaized.net/out/u/cg_tagalogmovie.mpd"
  },
  {
    "name": "ANIONE",
    "category": "General Entertainment",
    "type": "hls",
    "url": "https://amg02188-amg02188c2-jungotv-northamerica-5717.playouts.now.amagi.tv/playlist1080p.m3u8"
  },
  {
    "name": "HALLYPOP",
    "category": "General Entertainment",
    "type": "hls",
    "url": "https://jungotvstream.chanall.tv/jungotv/hallypop/stream.m3u8"
  },
  {
    "name": "JUNGO PINOY TV",
    "category": "General Entertainment",
    "type": "hls",
    "url": "https://jungotvstream.chanall.tv/jungotv/jungopinoytv/stream.m3u8"
  },
  {
    "name": "JUNGO TV",
    "category": "Jungo TV",
    "type": "hls",
    "url": "https://jungotvstream.chanall.tv/jungotv/frontrow/stream.m3u8"
  },
  {
    "name": "SCREAMFLIX",
    "category": "General Entertainment",
    "type": "hls",
    "url": "https://jungotvstream.chanall.tv/jungotv/screamflix/stream.m3u8"
  },
  {
    "name": "COMBATGO",
    "category": "Jungo TV",
    "type": "hls",
    "url": "https://jungotvstream.chanall.tv/jungotv/combatgo/stream.m3u8"
  },
  {
    "name": "AL JAZEERA",
    "category": "News",
    "type": "mpd",
    "url": "https://cdn4.skygo.mn/live/disk1/CGTN_Doc/HLSv3-FTA/CGTN_Doc.m3u8",
    "drm": {
      "clearkey": {
        "keyId": "b336c8c6bb249b1a5f89dace8d9889e5",
        "key": "22fc5baf47ae3b6322bc244206bbb210"
      }
    }
  },
  {
    "name": "BLOOMBERG",
    "category": "News",
    "type": "hls",
    "url": "https://www.bloomberg.com/media-manifest/streams/asia.m3u8"
  },
  {
    "name": "CNN",
    "category": "News",
    "type": "mpd",
    "url": "https://qp-pldt-live-grp-12-prod.akamaized.net/out/u/dr_cnnhd.mpd",
    "drm": {
      "clearkey": {
        "keyId": "af573556d33ef2f094b98c7d22e9ffce",
        "key": "e4293507d592df040f2186f1ce82a712"
      }
    }
  },
  {
    "name": "DW",
    "category": "News",
    "type": "hls",
    "url": "https://dwamdstream102.akamaized.net/hls/live/2015525/dwstream102/index.m3u8"
  },
  {
    "name": "FOX NEWS",
    "category": "News",
    "type": "hls",
    "url": "https://d7x8z4yuq42qn.cloudfront.net/index_7.m3u8"
  },
  {
    "name": "FRANCE 24",
    "category": "News",
    "type": "hls",
    "url": "https://a-cdn.klowdtv.com/live2/france24_720p/chunks.m3u8"
  },
  {
    "name": "GTV",
    "category": "News",
    "type": "mpd",
    "url": "https://bunproxy.azurewebsites.net/api/001/2/ch00000090990000001112/manifest.mpd?virtualDomain=001.live_hls.zte.com",
    "drm": {
      "clearkey": {
        "keyId": "a06ca6c275744151895762e0346380f5",
        "key": "49a9bf0cfba1cb4e52de3d458f6fb3a2"
      }
    }
  },
  {
    "name": "NHK WORLD JAPAN",
    "category": "News",
    "type": "hls",
    "url": "https://nhkwlive-ojp.akamaized.net/hls/live/2003459/nhkwlive-ojp-en/index.m3u8"
  },
  {
    "name": "RUSSIA TODAY",
    "category": "News",
    "type": "hls",
    "url": "https://rt-rtd.rttv.com/dvr/rtdoc/playlist.m3u8"
  },
  {
    "name": "SKY NEWS",
    "category": "News",
    "type": "hls",
    "url": "https://linear417-gb-hls1-prd-ak.cdn.skycdp.com/100e/Content/HLS_001_1080_30/Live/channel(skynews)/index_1080-30.m3u8"
  },
  {
    "name": "TRT WORLD",
    "category": "News",
    "type": "hls",
    "url": "https://tv-trtworld.medya.trt.com.tr/master.m3u8"
  },
  {
    "name": "REUTERS",
    "category": "News",
    "type": "hls",
    "url": "https://jmp2.uk/sam-DEBD4900001QV.m3u8"
  },
  {
    "name": "WION",
    "category": "News",
    "type": "hls",
    "url": "https://amg01006-abs-cbn-anc-global-dash-abscbnono/index.mpd"
  },
  {
    "name": "ANC",
    "category": "News",
    "type": "mpd",
    "url": "https://cdn-ue1-prod.tsv2.amagi.tv/linear/amg01006-abs-cbn-anc-global-dash-abscbnono/index.mpd",
    "drm": {
      "clearkey": {
        "keyId": "9729558a9bff8d94774bfa2f019a1310",
        "key": "8b9eb7ab7196a425d9ab618a5c9f99d9"
      }
    }
  },
  {
    "name": "HBO",
    "category": "HBO Pack",
    "type": "mpd",
    "url": "https://qp-pldt-live-grp-03-prod.akamaized.net/out/u/cg_hbohd.mpd",
    "drm": {
      "clearkey": {
        "keyId": "279695ebe0fb1bc5787422b6b59ce8a8",
        "key": "4ddc4cd97e7016485cb6d25bc2ba3cda"
      }
    }
  },
  {
    "name": "HBO SIGNATURE",
    "category": "HBO Pack",
    "type": "mpd",
    "url": "https://qp-pldt-live-grp-01-prod.akamaized.net/out/u/cg_hbosign.mpd",
    "drm": {
      "clearkey": {
        "keyId": "e31a5a81caff5d07ea2411a571fc2e59",
        "key": "34880f56627c11ee8c990242ac120002"
      }
    }
  },
  {
    "name": "HBO HITS",
    "category": "HBO Pack",
    "type": "mpd",
    "url": "https://qp-pldt-live-grp-09-prod.akamaized.net/out/u/cg_hbohits.mpd",
    "drm": {
      "clearkey": {
        "keyId": "2fbdaa3bea0d0323ae011b318d1db716",
        "key": "ce5d18ffd68650affce1985201983ab7"
      }
    }
  },
  {
    "name": "HBO FAMILY",
    "category": "HBO Pack",
    "type": "mpd",
    "url": "https://qp-pldt-live-grp-03-prod.akamaized.net/out/u/cg_hbofam.mpd872910c843294319800d85f9a0940607",
    "drm": {
      "clearkey": {
        "keyId": "1917f4caf2364e6d9b1507326a85ead6",
        "key": "872910c843294319800d85f9a0940607"
      }
    }
  },
  {
    "name": "HBO PLUS",
    "category": "HBO Pack",
    "type": "mpd",
    "url": "https://live-atv-cdn.izzigo.tv/5/out/u/dash/HBOPLUSHD/default.mpd",
    "drm": {
      "clearkey": {
        "keyId": "02a02bce7a3c518386e0da4e5ec0188d",
        "key": "31363231393131363337323232353030"
      }
    }
  },
  {
    "name": "HBO POP",
    "category": "HBO Pack",
    "type": "mpd",
    "url": "https://live-atv-cdn.izzigo.tv/5/out/u/dash/HBOPOPHD/default.mpd",
    "drm": {
      "clearkey": {
        "keyId": "9547f9aead1237c8a3b1bf0a91ed9995",
        "key": "20c884ef8ed26b2762f8b1a78f2d1910"
      }
    }
  },
  {
    "name": "HBO XTREME",
    "category": "HBO Pack",
    "type": "mpd",
    "url": "https://live-atv-cdn.izzigo.tv/5/out/u/dash/HBOXTREMEHD/default.mpd",
    "drm": {
      "clearkey": {
        "keyId": "f0e3ab943318471abc8b47027f384f5a",
        "key": "40d8bb2a46ffd03540e0c6210ece57ce"
      }
    }
  },
  {
    "name": "HBO 2",
    "category": "HBO Pack",
    "type": "mpd",
    "url": "https://live-atv-cdn.izzigo.tv/5/out/u/dash/HBO2HD/default.mpd",
    "drm": {
      "clearkey": {
        "keyId": "fad936249e036830aa5bef41bec05326",
        "key": "de6c5feaae5f6963b4b392ddc8"
             }
    }
  }
  ];
