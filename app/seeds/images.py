from app.models import db, Image


def seed_images():

    # josh images
    image1 = Image(
        spot_id=1,
        url="https://a0.muscache.com/im/pictures/c41a876f-83bf-419d-833f-83b973ee48b2.jpg?im_w=720",
    )
    image2 = Image(
        spot_id=1,
        url="https://a0.muscache.com/im/pictures/miso/Hosting-13783/original/fc12b9de-be10-4166-9666-159e78888c31.jpeg?im_w=720",
    )
    image3 = Image(
        spot_id=1,
        url="https://a0.muscache.com/im/pictures/b17f9fa5-6be7-44b8-8eb5-566aa24e7777.jpg?im_w=720",
    )

    image4 = Image(
        spot_id=2,
        url="https://www.visitarizona.com/imager/files_idss_com/C375/AccountFiles/segvu8k28twqdyu4mh1o_bc0d2157d501d4729a3d5631708a6b2e.jpg",
    )
    image5 = Image(
        spot_id=2,
        url="https://3z8wqu1rz6hb3n2u7s2u0krh-wpengine.netdna-ssl.com/wp-content/uploads/2010/05/Taliesin-West.jpg",
    )
    image6 = Image(
        spot_id=2,
        url="https://cdnassets.hw.net/04/6c/95a3db134eba990870df4db79a39/godinez-4.jpg",
    )

    image7 = Image(
        spot_id=3,
        url="https://www.rentalescapes.com/images/properties/125403/original/125403_15881733220005_original.jpg",
    )
    image8 = Image(
        spot_id=3,
        url="https://www.rentalescapes.com/images/properties/125403/original/125403_15881733200004_original.jpg",
    )
    image9 = Image(
        spot_id=3,
        url="https://www.rentalescapes.com/images/properties/125403/original/125403_15881733140001_original.jpg",
    )

    image10 = Image(
        spot_id=4,
        url="https://www.rentalescapes.com/images/properties/122435/original/122435_15532713970001_original.jpg",
    )
    image11 = Image(
        spot_id=4,
        url="https://www.rentalescapes.com/images/properties/122435/original/122435_15532714000003_original.jpg",
    )
    image12 = Image(
        spot_id=4,
        url="https://www.rentalescapes.com/images/properties/122435/original/122435_15532714080010_original.jpg",
    )

    image13 = Image(
        spot_id=5,
        url="https://a0.muscache.com/im/pictures/8255bdb1-1d65-4325-a744-6487dc51453b.jpg?im_w=1200",
    )
    image14 = Image(
        spot_id=5,
        url="https://a0.muscache.com/im/pictures/miso/Hosting-34577812/original/2b3a625e-3fab-4213-8331-2f996c94d0ad.jpeg?im_w=1440",
    )
    image15 = Image(
        spot_id=5,
        url="https://a0.muscache.com/im/pictures/7252d4e2-2da4-4f16-8882-0bd72af0fa52.jpg?im_w=1440",
    )

    image16 = Image(
        spot_id=6,
        url="https://media.vrbo.com/lodging/34000000/33570000/33562300/33562212/08a3e9f5.f10.jpg",
    )
    image17 = Image(
        spot_id=6,
        url="https://media.vrbo.com/lodging/34000000/33570000/33562300/33562212/af20f9e8.f10.jpg",
    )
    image18 = Image(
        spot_id=6,
        url="https://media.vrbo.com/lodging/34000000/33570000/33562300/33562212/a84c2923.f10.jpg",
    )

    image19 = Image(
        spot_id=7,
        url="https://media.vrbo.com/lodging/19000000/18980000/18978400/18978351/096367c3.f10.jpg",
    )
    image20 = Image(
        spot_id=7,
        url="https://media.vrbo.com/lodging/19000000/18980000/18978400/18978351/2c1038ac.f10.jpg",
    )
    image21 = Image(
        spot_id=7,
        url="https://media.vrbo.com/lodging/19000000/18980000/18978400/18978351/7c844738.f10.jpg",
    )

    image22 = Image(
        spot_id=8,
        url="https://media.vrbo.com/lodging/34000000/33490000/33485600/33485570/cf86b0a6.f10.jpg",
    )
    image23 = Image(
        spot_id=8,
        url="https://media.vrbo.com/lodging/34000000/33490000/33485600/33485570/016524ba.f10.jpg",
    )
    image24 = Image(
        spot_id=8,
        url="https://media.vrbo.com/lodging/34000000/33490000/33485600/33485570/c1b0f670.f10.jpg",
    )

    image25 = Image(spot_id=9, url="https://i.imgur.com/8l3MCRi.jpeg")
    image26 = Image(spot_id=9, url="https://i.imgur.com/OLY6Fpc.jpeg")
    image27 = Image(spot_id=9, url="https://i.imgur.com/JNnWRjB.jpeg")

    image28 = Image(
        spot_id=10,
        url="https://media.vrbo.com/lodging/24000000/23040000/23031500/23031487/c8277231.f10.jpg",
    )
    image29 = Image(
        spot_id=10,
        url="https://media.vrbo.com/lodging/24000000/23040000/23031500/23031487/0fbc877a.f10.jpg",
    )
    image30 = Image(
        spot_id=10,
        url="https://media.vrbo.com/lodging/24000000/23040000/23031500/23031487/acd6ad39.f10.jpg",
    )

    image31 = Image(
        spot_id=11,
        url="https://a0.muscache.com/im/pictures/prohost-api/Hosting-48509375/original/0862735b-4abc-4d87-a8d1-f2fb6053adc8.jpeg?im_w=960",
    )
    image32 = Image(
        spot_id=11,
        url="https://a0.muscache.com/im/pictures/prohost-api/Hosting-48509375/original/4e911a89-23ca-4c53-afbf-6783b998bdbb.jpeg?im_w=1200",
    )
    image33 = Image(
        spot_id=11,
        url="https://a0.muscache.com/im/pictures/prohost-api/Hosting-48509375/original/dc32cc0f-0596-40b5-8700-83d9389f0caf.jpeg?im_w=1200",
    )

    image34 = Image(
        spot_id=12,
        url="https://a0.muscache.com/im/pictures/5f2f8e5e-5cb2-4171-a15a-3c2542c42ab8.jpg?im_w=1200",
    )
    image35 = Image(
        spot_id=12,
        url="https://a0.muscache.com/im/pictures/4c69ab90-38f9-4713-a0b6-e9a57628ce13.jpg?im_w=1200",
    )
    image36 = Image(
        spot_id=12,
        url="https://a0.muscache.com/im/pictures/69d1702c-6f3b-40d7-b928-93d9e97f3042.jpg?im_w=1200",
    )

    image37 = Image(
        spot_id=13,
        url="https://a0.muscache.com/im/pictures/40ad3ba5-fab2-4d36-8586-d56fe70a8b85.jpg?im_w=960",
    )
    image38 = Image(
        spot_id=13,
        url="https://a0.muscache.com/im/pictures/9713faa3-366c-49e2-a005-edd58ed19c34.jpg?im_w=1200",
    )
    image39 = Image(
        spot_id=13,
        url="https://a0.muscache.com/im/pictures/52c069c6-f43a-4d1f-abb6-e6e2e3c97059.jpg?im_w=1200",
    )

    image40 = Image(
        spot_id=14,
        url="https://a0.muscache.com/im/pictures/708769e2-436e-4285-b823-95b4daa40a9c.jpg?im_w=1200",
    )
    image41 = Image(
        spot_id=14,
        url="https://a0.muscache.com/im/pictures/miso/Hosting-639188/original/88955bcd-2c0e-47db-848f-30f86fa6ff83.jpeg?im_w=960",
    )
    image42 = Image(
        spot_id=14,
        url="https://a0.muscache.com/im/pictures/miso/Hosting-639188/original/7ff21dc8-b164-4faf-a14c-e2af6f0531cd.jpeg?im_w=1200",
    )

    image43 = Image(
        spot_id=15,
        url="https://a0.muscache.com/im/pictures/miso/Hosting-30109719/original/0dedda9a-7094-44c0-971c-977870d432d6.jpeg?im_w=1200",
    )
    image44 = Image(
        spot_id=15,
        url="https://a0.muscache.com/im/pictures/miso/Hosting-30109719/original/7dd683b8-f85b-4f31-927a-c3222a45bdbe.jpeg?im_w=1200",
    )
    image45 = Image(
        spot_id=15,
        url="https://a0.muscache.com/im/pictures/03d278dc-da9d-4802-8aa4-5a7bde0551af.jpg?im_w=1200",
    )

    # beau images
    image46 = Image(
        spot_id=16,
        url="https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/1600/900/75/vision-dam/digital/parks-platform/parks-standard-assets/star-wars-galactic-starcruiser/addon-actiivities-page/activies-chewy-family-desktop-01.png?2022-02-28T20:25:10+00:00",
    )
    image47 = Image(
        spot_id=16,
        url="https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/1300/544/75/vision-dam/digital/parks-platform/parks-standard-assets/star-wars-galactic-starcruiser/overview-page/gsc-about-chandrila-desktop.png?2022-02-22T17:06:33+00:00",
    )
    image48 = Image(
        spot_id=16,
        url="https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/1600/900/75/vision-dam/digital/parks-platform/parks-standard-assets/star-wars-galactic-starcruiser/overview-page/gsc-experience-story-desktop.png?2022-02-22T17:06:32+00:00",
    )
    image49 = Image(
        spot_id=17,
        url="https://www.stanleyhotel.com/uploads/9/8/6/9/98696462/thestanleyhotel-exterior_orig.jpg",
    )
    image50 = Image(
        spot_id=17,
        url="https://www.stanleyhotel.com/uploads/9/8/6/9/98696462/published/aspire-kingsuite-kingste-room304-jul16-02.jpg?1583973104",
    )
    image51 = Image(
        spot_id=17,
        url="https://www.stanleyhotel.com/uploads/9/8/6/9/98696462/theresidences-320-jun2018-travelclick-664x386px-02_orig.jpg",
    )
    image52 = Image(
        spot_id=18,
        url="https://grandcanyon.clearskyresorts.com/wp-content/uploads/2021/06/GC-Web-Front.jpg",
    )
    image53 = Image(
        spot_id=18,
        url="https://www.traveloffpath.com/wp-content/uploads/2021/03/clear-sky-domes-resort-mountains-montana.jpg.webp",
    )
    image54 = Image(
        spot_id=18,
        url="https://grandcanyon.clearskyresorts.com/wp-content/uploads/2021/01/web-Dome-Darrell-Loft-View-web.jpeg",
    )
    image55 = Image(
        spot_id=19,
        url="https://www.traveloffpath.com/wp-content/uploads/2021/03/madonna-inn-california-hotel.jpg.webp",
    )
    image56 = Image(
        spot_id=19,
        url="https://www.traveloffpath.com/wp-content/uploads/2021/03/madonna-inn-california-hotel-rock-room.jpg.webp",
    )
    image57 = Image(
        spot_id=19,
        url="https://cf.bstatic.com/xdata/images/hotel/max1024x768/117732455.jpg?k=cd6940890733699f7fd394d1d78f26ebcd76a1e89d71c845fbf9577f31399cbf&o=&hp=1",
    )
    image58 = Image(
        spot_id=20,
        url="https://i0.wp.com/files.tripstodiscover.com/files/2014/07/OutnAbout-Treehouses-Treesort-Takilma-Oregon.jpg?resize=784%2c588",
    )
    image59 = Image(
        spot_id=20, url="https://treehouses.com/images/TreeHouses/Forestree_10tn.jpg"
    )
    image60 = Image(
        spot_id=20,
        url="https://static.wixstatic.com/media/79b5cb_b3b0a2288692446eab94d0cff97ec25a~mv2.jpg/v1/fill/w_389,h_292,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/79b5cb_b3b0a2288692446eab94d0cff97ec25a~mv2.jpg",
    )
    image61 = Image(
        spot_id=21,
        url="https://cf.bstatic.com/xdata/images/hotel/max1024x768/10163501.jpg?k=4fe41c6f7559ed95bff233e2117517af47371359404062964d5b03452697753d&o=&hp=1",
    )
    image62 = Image(
        spot_id=21,
        url="https://cf.bstatic.com/xdata/images/hotel/max1024x768/250525929.jpg?k=e6e17cdb0c9e1da8babfe24c7eff6f020093199e05bd53628c3edeea2e811786&o=&hp=1",
    )
    image63 = Image(
        spot_id=21,
        url="https://cf.bstatic.com/xdata/images/hotel/max1024x768/250525959.jpg?k=6fc0a6757550f3e1ab1d2c5b9333520c81b6d2666f205dae07fc47178597808c&o=&hp=1",
    )
    image64 = Image(
        spot_id=22,
        url="https://cf.bstatic.com/xdata/images/hotel/max1024x768/67588457.jpg?k=ed76905c6d74a88f060a177293890eb11d838eec31d0586cbf3f3b2dadeffae2&o=&hp=1",
    )
    image65 = Image(
        spot_id=22,
        url="https://cf.bstatic.com/xdata/images/hotel/max1024x768/153722787.jpg?k=263c7a1fe7a1d97e05554f92e5378dbf4a9abb54107e94a8fbd176453a33c252&o=&hp=1",
    )
    image66 = Image(
        spot_id=22,
        url="https://cf.bstatic.com/xdata/images/hotel/max1024x768/215040827.jpg?k=df2024e018d9898ca4a79a618bed2a3bcc1a3a57d365c18bbb9557d5f8608ea7&o=&hp=1",
    )
    image67 = Image(
        spot_id=23,
        url="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/f5/c9/8f/welcome-to-the-firebrand.jpg?w=1000&h=-1&s=1",
    )
    image68 = Image(
        spot_id=23,
        url="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/f5/d5/15/rooftop-patio.jpg?w=1000&h=-1&s=1",
    )
    image69 = Image(
        spot_id=23,
        url="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/f5/d5/1f/deluxe-room-with-king.jpg?w=1000&h=-1&s=1",
    )
    image70 = Image(
        spot_id=24,
        url="https://www.oyster.com/wp-content/uploads/sites/35/2021/03/Under-the-Sea-Sweet-1024x512.png",
    )
    image71 = Image(
        spot_id=24,
        url="https://cf.bstatic.com/xdata/images/hotel/max1024x768/251543901.jpg?k=2b3c366eca606893257cb45db80802617d2632694286e3596a80ec9d6179008e&o=&hp=1",
    )
    image72 = Image(
        spot_id=24,
        url="https://cf.bstatic.com/xdata/images/hotel/max1024x768/251543904.jpg?k=8d5b350a93324b18e9cd0d0d03e3e16185425ac4e1e9e6af8e13f999b2079155&o=&hp=1",
    )
    image73 = Image(
        spot_id=25,
        url="https://cf.bstatic.com/xdata/images/hotel/max1024x768/158102989.jpg?k=a8209e1eb8546b96cb1d98f3933f68fb032d56e630cabfd7bef170350a4e4e6a&o=&hp=1",
    )
    image74 = Image(
        spot_id=25,
        url="https://cf.bstatic.com/xdata/images/hotel/max1024x768/154807114.jpg?k=96fafa42ad3277fc58a782b779e8a58c0554fdc1823e9acd1af0eda3d961a874&o=&hp=1",
    )
    image75 = Image(
        spot_id=25,
        url="https://cf.bstatic.com/xdata/images/hotel/max1024x768/154527268.jpg?k=16e7507da6bf820b754cc1e968ef615da0770724a9be57112ddf55bbccb5a9c6&o=&hp=1",
    )
    image76 = Image(
        spot_id=26,
        url="https://theroxburyexperience.com/wp-content/uploads/mansion-exterior-14-min-1.jpg",
    )
    image77 = Image(
        spot_id=26,
        url="https://theroxburyexperience.com/wp-content/uploads/cabana-05-min-1.jpg",
    )
    image78 = Image(
        spot_id=26,
        url="https://theroxburyexperience.com/wp-content/uploads/mansion-hallway-02.jpg",
    )
    image79 = Image(
        spot_id=27,
        url="https://cf.bstatic.com/xdata/images/hotel/max1024x768/25416401.jpg?k=a5200186188753e109342faeca6927dc7e1948ef6bf10996c47506314f91b986&o=&hp=1",
    )
    image80 = Image(
        spot_id=27,
        url="https://cf.bstatic.com/xdata/images/hotel/max1024x768/25414969.jpg?k=2ca913edec0217c20737354daa8f2869ef4c4b4c16ab5a7fd443552c33134c14&o=&hp=1",
    )
    image81 = Image(
        spot_id=27,
        url="https://cf.bstatic.com/xdata/images/hotel/max1024x768/25416220.jpg?k=7f98da8bb1ae7933131a13950e52234e18a5e0bc8a6cd10db1ab08bae67182d6&o=&hp=1",
    )
    image82 = Image(
        spot_id=28,
        url="https://cf.bstatic.com/xdata/images/hotel/max1024x768/53204489.jpg?k=4006a7621405b3df08d74bbf0262d26068fef0d4c035d36fe68dc668893af125&o=&hp=1",
    )
    image83 = Image(
        spot_id=28,
        url="https://cf.bstatic.com/xdata/images/hotel/max1024x768/51919931.jpg?k=e0b07a4df61e1e56f8f56ef7ce9fdb6c5a564b47aa34da50d6e014ec793916d1&o=&hp=1",
    )
    image84 = Image(
        spot_id=28,
        url="https://cf.bstatic.com/xdata/images/hotel/max1024x768/53165808.jpg?k=361acb41b7fbbdf016596d43ab7d11aadc3ead60ab1d813daa4c91310d64c670&o=&hp=1",
    )
    image85 = Image(
        spot_id=29,
        url="https://cf.bstatic.com/xdata/images/hotel/max1024x768/208380176.jpg?k=ac530f6b4dc019639093f7c03dcf4e31e72114e75722995f411c57f8a06d8847&o=&hp=1",
    )
    image86 = Image(
        spot_id=29,
        url="https://cf.bstatic.com/xdata/images/hotel/max1024x768/327965644.jpg?k=2ecf7aa2c0b585c4b9663ae88ee8d996952812b7116aab691d1e53093ae8250f&o=&hp=1",
    )
    image87 = Image(
        spot_id=29,
        url="https://cf.bstatic.com/xdata/images/hotel/max1024x768/327965661.jpg?k=f7eeb2f991697c2ced9867e0d106b31e6d9b78f568b76d84dd1464a4671e3807&o=&hp=1",
    )
    image88 = Image(
        spot_id=30,
        url="https://cf.bstatic.com/xdata/images/hotel/max1024x768/95839438.jpg?k=5996daaeffb7689b0340d81170b7aadd835cc54a31e07999ecfe7dd7fcb26a4f&o=&hp=1",
    )
    image89 = Image(
        spot_id=30,
        url="https://img.buzzfeed.com/buzzfeed-static/static/2021-04/28/20/asset/b22b1a654b93/sub-buzz-392-1619642871-20.jpg?downsize=600:*&output-format=auto&output-quality=auto",
    )
    image90 = Image(
        spot_id=30,
        url="https://cf.bstatic.com/xdata/images/hotel/max1024x768/95839688.jpg?k=7c1315319dd033728cb637e6a40d02f0024b1864f37be2a9550579eed3b35df0&o=&hp=1",
    )

    # kevin images
    image91 = Image(spot_id=31, url="https://i.imgur.com/qUAMG03.jpg")
    image92 = Image(spot_id=31, url="https://i.imgur.com/M1hRUT3.jpg")
    image93 = Image(spot_id=31, url="https://i.imgur.com/oJwMIoZ.jpg")
    image94 = Image(spot_id=32, url="https://i.imgur.com/8ETewKV.jpg")
    image95 = Image(spot_id=32, url="https://i.imgur.com/9SoNQlQ.jpg")
    image96 = Image(spot_id=32, url="https://i.imgur.com/yBLOogq.jpg")
    image97 = Image(spot_id=33, url="https://i.imgur.com/pVP38Xb.jpg")
    image98 = Image(spot_id=33, url="https://i.imgur.com/ZHsfMcA.jpg")
    image99 = Image(spot_id=33, url="https://i.imgur.com/WeYO6Sw.jpg")
    image100 = Image(spot_id=34, url="https://i.imgur.com/MJ5yHQw.jpg")
    image101 = Image(spot_id=34, url="https://i.imgur.com/iVi5494.jpg")
    image102 = Image(spot_id=34, url="https://i.imgur.com/YKNXgwa.jpg")
    image103 = Image(spot_id=35, url="https://i.imgur.com/kEE5LMY.jpg")
    image104 = Image(spot_id=35, url="https://i.imgur.com/Ae0jUKp.jpg")
    image105 = Image(spot_id=35, url="https://i.imgur.com/1oSchmZ.jpg")
    image106 = Image(spot_id=35, url="https://i.imgur.com/hXrFAqw.jpg")
    image107 = Image(spot_id=35, url="https://i.imgur.com/n4qhq3Y.jpg")
    image108 = Image(spot_id=35, url="https://i.imgur.com/AMtVN5B.jpg")
    image109 = Image(spot_id=36, url="https://i.imgur.com/Ao1Vqqk.jpg")
    image110 = Image(spot_id=36, url="https://i.imgur.com/TyvAoHY.jpg")
    image111 = Image(spot_id=36, url="https://i.imgur.com/ZhwJ5qc.jpg")
    image112 = Image(spot_id=37, url="https://i.imgur.com/JGrNbOS.jpg")
    image113 = Image(spot_id=37, url="https://i.imgur.com/0RXPqEC.jpg")
    image114 = Image(spot_id=37, url="https://i.imgur.com/NR5biTV.jpg")
    image115 = Image(spot_id=38, url="https://i.imgur.com/RrvzHSr.jpg")
    image116 = Image(spot_id=38, url="https://i.imgur.com/8b88mYx.jpg")
    image117 = Image(spot_id=38, url="https://i.imgur.com/da5wGiy.jpg")
    image118 = Image(spot_id=39, url="https://i.imgur.com/qy4qCUb.jpeg")
    image119 = Image(spot_id=39, url="https://i.imgur.com/YIgBrkc.jpeg")
    image120 = Image(spot_id=39, url="https://i.imgur.com/0Sub39X.jpeg")
    image121 = Image(spot_id=39, url="https://i.imgur.com/4tUoHoL.jpeg")
    image122 = Image(spot_id=40, url="https://i.imgur.com/5GKuCHS.png")
    image123 = Image(spot_id=40, url="https://i.imgur.com/080Q2AH.png")
    image124 = Image(spot_id=40, url="https://i.imgur.com/KapnIZ5.png")
    image125 = Image(spot_id=41, url="https://i.imgur.com/GsoDUEP.png")
    image126 = Image(spot_id=41, url="https://i.imgur.com/nYOWvxM.jpeg")
    image127 = Image(spot_id=41, url="https://i.imgur.com/hpcr4kk.jpeg")
    image128 = Image(spot_id=42, url="https://i.imgur.com/aH0UrdK.jpeg")
    image129 = Image(spot_id=42, url="https://i.imgur.com/0mWhBxb.jpeg")
    image130 = Image(spot_id=42, url="https://i.imgur.com/rOF1ETf.jpeg")
    image131 = Image(spot_id=43, url="https://i.imgur.com/wBh89rV.jpeg")
    image132 = Image(spot_id=43, url="https://i.imgur.com/dnyZI9z.jpeg")
    image133 = Image(spot_id=43, url="https://i.imgur.com/6SZIQzn.jpeg")
    image134 = Image(spot_id=44, url="https://i.imgur.com/jUj33WK.jpeg")
    image135 = Image(spot_id=44, url="https://i.imgur.com/PPOFvPv.jpeg")
    image136 = Image(spot_id=44, url="https://i.imgur.com/kmMNVjM.png")
    image137 = Image(spot_id=45, url="https://i.imgur.com/5Yl93r0.jpeg")
    image138 = Image(spot_id=45, url="https://i.imgur.com/NkLxPfD.jpeg")
    image139 = Image(spot_id=45, url="https://i.imgur.com/zPGr3Tt.jpeg")

    # for i in range(1, 140):
    #     db.session.add(f"image{i}")

    db.session.add(image1)
    db.session.add(image2)
    db.session.add(image3)
    db.session.add(image4)
    db.session.add(image5)
    db.session.add(image6)
    db.session.add(image7)
    db.session.add(image8)
    db.session.add(image9)
    db.session.add(image10)
    db.session.add(image11)
    db.session.add(image12)
    db.session.add(image13)
    db.session.add(image14)
    db.session.add(image15)
    db.session.add(image16)
    db.session.add(image17)
    db.session.add(image18)
    db.session.add(image19)
    db.session.add(image20)
    db.session.add(image21)
    db.session.add(image22)
    db.session.add(image23)
    db.session.add(image24)
    db.session.add(image25)
    db.session.add(image26)
    db.session.add(image27)
    db.session.add(image28)
    db.session.add(image29)
    db.session.add(image30)
    db.session.add(image31)
    db.session.add(image32)
    db.session.add(image33)
    db.session.add(image34)
    db.session.add(image35)
    db.session.add(image36)
    db.session.add(image37)
    db.session.add(image38)
    db.session.add(image39)
    db.session.add(image40)
    db.session.add(image41)
    db.session.add(image42)
    db.session.add(image43)
    db.session.add(image44)
    db.session.add(image45)

    db.session.add(image46)
    db.session.add(image47)
    db.session.add(image48)
    db.session.add(image49)
    db.session.add(image50)
    db.session.add(image51)
    db.session.add(image52)
    db.session.add(image53)
    db.session.add(image54)
    db.session.add(image55)
    db.session.add(image56)
    db.session.add(image57)
    db.session.add(image58)
    db.session.add(image59)
    db.session.add(image60)
    db.session.add(image61)
    db.session.add(image62)
    db.session.add(image63)
    db.session.add(image64)
    db.session.add(image65)
    db.session.add(image66)
    db.session.add(image67)
    db.session.add(image68)
    db.session.add(image69)
    db.session.add(image70)
    db.session.add(image71)
    db.session.add(image72)
    db.session.add(image73)
    db.session.add(image74)
    db.session.add(image75)
    db.session.add(image76)
    db.session.add(image77)
    db.session.add(image78)
    db.session.add(image79)
    db.session.add(image80)
    db.session.add(image81)
    db.session.add(image82)
    db.session.add(image83)
    db.session.add(image84)
    db.session.add(image85)
    db.session.add(image86)
    db.session.add(image87)
    db.session.add(image88)
    db.session.add(image89)
    db.session.add(image90)

    db.session.add(image91)
    db.session.add(image92)
    db.session.add(image93)
    db.session.add(image94)
    db.session.add(image95)
    db.session.add(image96)
    db.session.add(image97)
    db.session.add(image98)
    db.session.add(image99)
    db.session.add(image100)
    db.session.add(image101)
    db.session.add(image102)
    db.session.add(image103)
    db.session.add(image104)
    db.session.add(image105)
    db.session.add(image106)
    db.session.add(image107)
    db.session.add(image108)
    db.session.add(image109)
    db.session.add(image110)
    db.session.add(image111)
    db.session.add(image112)
    db.session.add(image113)
    db.session.add(image114)
    db.session.add(image115)
    db.session.add(image116)
    db.session.add(image117)
    db.session.add(image118)
    db.session.add(image119)
    db.session.add(image120)
    db.session.add(image121)
    db.session.add(image122)
    db.session.add(image123)
    db.session.add(image124)
    db.session.add(image125)
    db.session.add(image126)
    db.session.add(image127)
    db.session.add(image128)
    db.session.add(image129)
    db.session.add(image130)
    db.session.add(image131)
    db.session.add(image132)
    db.session.add(image133)
    db.session.add(image134)
    db.session.add(image135)
    db.session.add(image136)
    db.session.add(image137)
    db.session.add(image138)
    db.session.add(image139)

    db.session.commit()


def undo_images():
    db.session.execute("TRUNCATE images RESTART IDENTITY CASCADE;")
    db.session.commit()
