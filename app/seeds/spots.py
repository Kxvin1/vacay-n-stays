from re import S
from app.models import db, Spot


def seed_spots():
    spot1 = Spot(
        user_id=1,
        name="Still Bend",
        description="Featured on Netflix's THE WORLDS MOST AMAZING VACATION RENTALS Season 2, ep. 1. Still Bend/Bernard Schwartz House is Frank Lloyd Wright's built version of his Life Magazine design from 1938. The house is located on the East Twin River about a mile from Lake Michigan.",
        address="3425 Adams St, Two Rivers, WI 54241",
        city="Two Rivers",
        state="WI",
        country="USA",
        price=574,
        lat=44.16682431841151,
        lng=-87.57635866118886,
    )
    spot2 = Spot(
        user_id=1,
        name="Taliesin West",
        description="The only Frank Lloyd Wright home built in Hawaii is now available for your next vacation. This 3 bedroom, 3.5 bathroom architecturally significant residence will comfortably accommodate a family in a setting that is truly one-of-a-kind. Features of the home include a complete kitchen with upgraded appliances, an expansive living area (with a fireplace) and an outdoor lava-rock hot tub overlooking a seasonal stream and breathtaking mountain views. The bedrooms are located upstairs and float over the main level of the house. The master bedroom has superior views with a private bathroom, walk-in closet and private outdoor balcony. The second bedroom has it's own private bathroom with a queen size bed. The third bedroom has two twin beds and the fourth bedroom is currently being used as an office and/or playroom. There is a grass yard in front of the home that is shaded in the morning, making for the perfect space to have an outdoor breakfast or to practice yoga.",
        address="12621 N Frank Lloyd Wright Blvd, Scottsdale, AZ 85259",
        city="Scottsdale",
        state="AZ",
        country="USA",
        price=950,
        lat=33.60636296940446,
        lng=-111.84514531937678,
    )
    spot3 = Spot(
        user_id=3,
        name="Venetian Chairman",
        description="The Venetian tower is the bustling epicenter and the beating heart of the resort. Take in the beauty of old world Italy while you enjoy all the comforts and excitement of modern day Las Vegas. Refinement doesn't mean having less, it means having more of the things you want. The Palazzo tower is classic Italian luxury, refined for your modern tastes.",
        address="3355 S Las Vegas Blvd, Las Vegas, NV 89109",
        city="Las Vegas",
        state="NV",
        country="USA",
        price=16000,
        lat=36.12117552813887,
        lng=-115.16964547176643,
    )
    spot4 = Spot(
        user_id=3,
        name="Albert 5 BDM Townhouse",
        description="The luxurious interior boasts just over 7,000-square feet of living space with five bedrooms, five full and three half baths thoughtfully arranged on six floors. This rare townhouse has been lovingly rebuilt from the inside out by a highly respected home builder and boasts structural detail and impeccable appointments that will delight at every turn. More than 1,750-square feet of prized outdoor space includes a private garden, two private terraces and a landscaped roof deck that is steel enforced, affording the option of installing a Jacuzzi.",
        address="425 W 50th St, New York, NY 10019",
        city="New York",
        state="NY",
        country="USA",
        price=15000,
        lat=40.76427958351602,
        lng=-73.99048857288405,
    )
    spot5 = Spot(
        user_id=3,
        name="Malibu",
        description="Relax in a luxurious 3-story Malibu getaway with spectacular ocean & mountain views. Our newly-built mid-century modern 4 bedroom, 3.5 bath home is nestled in the peaceful Santa Monica mountains just minutes from Southern California's most famous beaches. Enjoy a stylish space and wall to wall open views to the ocean. Every bedroom has ocean views. This truly unique home was custom built and furnished with the greatest attention to detail.",
        address="3237 Sumac Ridge Rd, Malibu, CA 90265",
        city="Malibu",
        state="CA",
        country="USA",
        price=8000,
        lat=34.043638794025,
        lng=-118.64456590998685,
    )
    spot6 = Spot(
        user_id=2,
        name="Modern Hillside Retreat",
        description="Enjoy the spectacular natural setting of this 1/4-acre, modern, hillside property in the desirable Mesa neighborhood known as a “wind free” zone with great walkability. This modern retreat is simply magical with its magnificent, established landscape and gorgeous outcroppings of rock formations set against the stark white mid-century styling of the home. Experience a relaxed and comfortable modern living environment with a level in/out, open floor plan perfect for seamless indoor/outdoor Palm Springs living. The large bedrooms have private baths and patios leading to the UV-filtered private pool (30’x10’) and built-in spa (7’x7’) tucked into the mountain landscape with amazing and ever-changing dramatic views. There's a professional kitchen, classic contemporary furnishings, original artwork, concrete/ceramic/granite surfaces, HDTV, gas grill, wireless internet and garage. Enjoy your retreat or explore other local desert activities: hike, golf, shop, eat, spa, art/music.",
        address="2145 Cam Barranca, Palm Springs, CA 92264",
        city="Palm Springs",
        state="CA",
        country="USA",
        price=400,
        lat=33.79204689882036,
        lng=-116.54855276737403,
    )
    spot7 = Spot(
        user_id=2,
        name="The ART House",
        description="The ART House has been Published in DWELL, TRIBEZA, AUSTIN HOME, Urban Home, San Antonio Magazine, and San Antonio Express News! And recently received a NATIONAL AWARD at Best In America Living, in Las Vegas!",
        address="Angela K. Cross, OTR, 518 W Peach St, Fredericksburg, TX 78624",
        city="Fredericksburg",
        state="TX",
        country="USA",
        price=1500,
        lat=30.277939365266572,
        lng=-98.88290838949789,
    )
    spot8 = Spot(
        user_id=2,
        name="Modern Luxury House",
        description="Enjoy your Alaskan adventure in style. This Newly constructed 4100 SqFt private retreat is located on 26 acres. Take in the stunning views from the home and all the amenities the home has to offer. This one of a kind property features two luxurious master suites and three living areas (two of which have amenities to sleep two) and a loft area that will comfortably sleep two more.",
        address="856 Timberline Dr, Girdwood, AK 99587",
        city="Girdwood",
        state="AK",
        country="USA",
        price=850,
        lat=60.95209601452879,
        lng=-149.12795326187432,
    )
    spot9 = Spot(
        user_id=4,
        name="Villa",
        description="Enjoy your Alaskan adventure in style. This Newly constructed 4100 SqFt private retreat is located on 26 acres. Take in the stunning views from the home and all the amenities the home has to offer. This one of a kind property features two luxurious master suites and three living areas (two of which have amenities to sleep two) and a loft area that will comfortably sleep two more.",
        address="1761 Colgate Cir",
        city="La Jolla",
        state="CA",
        country="USA",
        price=1250,
        lat=32.82378212294087,
        lng=-117.25252449858948,
    )
    spot10 = Spot(
        user_id=4,
        name="Viaggo On The River Estate",
        description="Viaggio Estate & Winery is located in the heart Lodi Wine Country, nestled among lush vineyards and walnut orchards who share one stunning backdrop, the pristine Mokelumne River. A family-owned destination for wine lovers, Viaggio combines unparalleled natural beauty and meticulously handcrafted wines with comfortable elegance and gracious hospitality.",
        address="100 E Taddei Rd, Acampo, CA 95220",
        city="Acampo",
        state="CA",
        country="USA",
        price=750,
        lat=38.18524759213127,
        lng=-121.31822975228833,
    )
    spot11 = Spot(
        user_id=4,
        name="Dunlap Hollow",
        description="The Dunlap Hollow A-Frame is a new build that will be completed in mid-March 2021. We are offering prebooking now with reservation dates beginning April 1, 2021. The A-Frame sleeps up to 10 guests with 3 bedrooms and a picturesque loft filled with windows that sleeps 4. Here is a list of the beds in each room",
        address="24190 Dunlap Rd, Rockbridge, OH 43149",
        city="Rockbridge",
        state="OH",
        country="USA",
        price=627,
        lat=39.50924186936166,
        lng=-82.58167981523798,
    )
    spot12 = Spot(
        user_id=5,
        name="Saddle Peak",
        description="Located in the boho heart of Los Angeles, this secluded home is surrounded by nothing but wild, wide-open space. The ultra modern structure, perched at the edge of a lush escarpment, features an unimpeded view of the rugged countryside from its abundance of full-length windows. The iconic Santa Monica Pier and sprawling seaside at Venice Beach, as well as The Getty Villa, are a short drive away.",
        address="575 Sadie Rd, Topanga, CA 90290",
        city="Topanga",
        state="CA",
        country="USA",
        price=1296,
        lat=34.0802365932389,
        lng=-118.63507847147129,
    )
    spot13 = Spot(
        user_id=5,
        name="Kuono",
        description="Set out on an adventure and return to a retreat of peace and relaxation just five minutes from Volcano National Park. Open the red front door to Kūono at Volcano to find 14 foot floor to ceiling windows connecting you to the outdoors. Nestled in a forest of beautiful Ohia trees, you will be immersed in natural beauty both inside and outside.",
        address="11-3978 Liona St, Mountain View, HI 96771",
        city="Mountain View",
        state="HI",
        country="USA",
        price=1296,
        lat=19.43755940988395,
        lng=-155.21739822466643,
    )
    spot14 = Spot(
        user_id=6,
        name="Palmer House",
        description="The Palmer House is a multilevel brick and cypress late period Frank Lloyd Wright house, the plan and design of which is based on the equilateral triangle. The house is situated on 2 heavily wooded acres in a secluded Ann Arbor neighborhood.",
        address="227 Orchard Hills Dr, Ann Arbor, MI 48104",
        city="Ann Arbor",
        state="MI",
        country="USA",
        price=770,
        lat=42.27845985064571,
        lng=-83.71585498819563,
    )
    spot15 = Spot(
        user_id=6,
        name="Canyon Creek",
        description="Perched high on a granite ledge, you will find this cabin overlooking a rushing river that weaves its way through the dense, lush forest of the North Cascade mountains. The unique asymmetrical A-frame structure is both unexpected and familiar, with its wood-clad walls, exposed beams, and large geometric windows. Whether you are playing whiskey-fueled card game by the fire, or lounging in the hottub while listening to the nearby rushing creek, this cabin offers the ultimate cabin experience.",
        address="12802 Crystal Springs Rd, Granite Falls, WA 98252",
        city="Granite Falls",
        state="WA",
        country="USA",
        price=386,
        lat=48.11221873833905,
        lng=-121.968737551507,
    )

    spot16 = Spot(
        user_id=1,
        name="Star Wars: Galactic Starcruiser",
        description="Star Wars: Galactic Starcruiser is a revolutionary new 2-night experience where you are the hero. You and your group will embark on a first-of-its-kind Star Wars adventure that's your own. It's the most immersive Star Wars story ever created—one where you live a bespoke experience and journey further into a Star Wars adventure than you ever dreamed possible. Arrive at the Walt Disney World Resort terminal, board a launch pod and rendezvous with the magnificent Halcyon starcruiser. Stay in a cabin or suite with an exquisite view of space. Throughout the ship, you'll interact with an eclectic collection of characters, sit down to exotic galactic cuisine and perhaps even plot a secret mission together. As the itinerary continues, you'll take the story further and deeper. Choose your path. Seek out the inner workings of the legendary starship, learn the traditional art of wielding a lightsaber and even jump on a transport to the planet Batuu—where your mission continues at Star Wars: Galaxy's Edge!",
        address="201 S Studio Dr",
        city="Lake Bueno Vista",
        state="FL",
        country="USA",
        price=1209,
        lat=28.350815,
        lng=-81.561354,
    )
    spot17 = Spot(
        user_id=1,
        name="The Stanley Hotel",
        description="Widely regarded as one of the most 'spirited' hotels in America, The Stanley Hotel is best known as the inspiration for Stephen King's The Shining—the author stayed there for one winter night. Originally built in 1909 to house traveling bourgeois, providing cars and servants to all visitors, today it's thought that some of their spirits still remain... Modern day guests report that you can hear the sounds of untraceable piano music and maniacal laughs throughout the hotel. These happenings are attributed to the playful spirits of deceased employees and guests. Tip: Make sure you book one of Stanley's night spirit tours. Out of everyone, the staff is likely most familiar with supernatural goings on and they will have many stories to share. stanleyhotel.com",
        address="333 E Wonderview Ave",
        city="Estes Park",
        state="CO",
        country="USA",
        price=329,
        lat=40.380684,
        lng=-105.520464,
    )
    spot18 = Spot(
        user_id=3,
        name="Clear Sky Resorts' Luxury Domes",
        description="At Clear Sky Resorts, your stay near Grand Canyon National Park goes to the next level. Venture through rocky paths to reach your comfortable hideaway amid the desert landscape. When you walk into the room prepare yourself to be wowed by the views from the large panoramic window. With the homemade log bed set in front of a beautiful Grand Canyon picture backdrop, this romantic room will be just the getaway you need. While laying in bed you can take in amazing views of the night sky through the skylight. Bring your camera because you'll want to catch some falling stars! This climate controlled room also  includes privacy curtains, unique furniture, a telescope, a clean burning fireplace,  luxury linens, plush towels, a private modern bathroom with rain shower, and more.",
        address="629 Highgrove Rd",
        city="Grand Canyon Junction",
        state="AZ",
        country="USA",
        price=375,
        lat=36.069637,
        lng=-111.875153,
    )
    spot19 = Spot(
        user_id=3,
        name="Madonna Inn",
        description="Located in San Luis Obispo, this luxury hotel features an outdoor pool, 2 restaurants, a bakery and 2 bars. Each themed guest room is uniquely-decorated. Free Wi-Fi is offered in all rooms. Featuring a pillow-top mattress, each guest room at Madonna Inn offers premium bedding, custom furnishings and a flat-screen satellite TV with pay options. Plush bathrobes, free spa toiletries and a free bottle of water are also provided in the private bathroom. The famous Bakery and Pastry Shop features a variety of delectable treats daily at San Luis Obispo Madonna Inn. Copper Café & Coffee Bar offers fresh coffee daily. Styled in lavish pink accents, Alex Madonna's Gold Rush Steak House offers fresh steaks and seafood in an elegant atmosphere. Located adjacent, guests can enjoy cocktails at Silver Bar Cocktail & Lounge. A fitness center, tennis and basketball courts, hiking and biking are available on site. The Spa at the Madonna Inn offers massage therapy and beauty treatments. Historic California Mission is just 2 miles away. Hearst Castle is 1 hours' drive from Madonna Inn. Couples in particular like the location – they rated it 9.0 for a two-person trip.",
        address="100 Madonna Road",
        city="San Luis Obispo",
        state="CA",
        country="USA",
        price=219,
        lat=35.267327,
        lng=-120.674588,
    )
    spot20 = Spot(
        user_id=3,
        name="Out 'n' About Treehouse Treesort",
        description="Out'n'About is a truly unique place. Part of it's uniqueness has to do with that it is a home grown and based business. There are no locks on the treehouse doors. It is not a Ramada or Hilton in the trees, but is a genuine four star Treesort catering to both the timid and adventurous, locals and travelers. The Treehouses are only part of the 36 private acres of pasture and woods, right next to Siskiyou National Forest land & old growth wilderness close by. We have a Morgan Horse breeding ranch along with our riding horse stable, two rocking horses, 4 dogs, & 1 cat usually running around the property. Very family oriented and friendly you can find everything from a calm peacefull solitude, to a sceaming ride on the ziplines or giant Tarzan Swing.",
        address="300 Page Creek Rd",
        city="Cave Junction",
        state="OR",
        country="USA",
        price=325,
        lat=42.032742,
        lng=--123.626199,
    )
    spot21 = Spot(
        user_id=2,
        name="Kakslauttanen Arctic Resort",
        description="Surrounded by nature, this unique property is located in the Saariselkä Fell region of Finnish Lapland. The property offers glass igloos and traditional wood chalets and has the world's largest smoke sauna. Free WiFi and free parking are available. The thermal glass igloos feature a bedroom with a glass roof and luxury beds. Some igloos include a bathroom with sauna, while others have shared shower facilities. The chalets feature cooking facilities, a seating area and fireplace. A private sauna is also included. Kakslauttanen Arctic Resort offers 2 à la carte restaurants, which serve Laplandic specialties such as reindeer and char-grilled salmon. The hotel's smoke sauna even has its own restaurant, Savusauna. 6 saunas are available, each has a relaxation room with an open fireplace. A nearby ice hole is ideal for cooling off. Husky and reindeer safaris can be arranged, and snowmobiling is also possible. Guests can also rent cross-country skis, Nordic walking sticks and snow shoes.",
        address="Kiilopääntie 9",
        city="Saariselkä",
        state="OK",
        country="Finland",
        price=129,
        lat=68.420278,
        lng=27.408056,
    )
    spot22 = Spot(
        user_id=2,
        name="Abali' Gran Sultanato",
        description="Centrally located in Palermo, Abali' Gran Sultanato offers free WiFi and individually furnished rooms with original, dreamlike-style décor. With refined textiles, rooms at the Abali' Gran Sultanato feature a mini-bar. The bathroom comes with a shower. Breakfast is available at a cafè nearby.",
        address="Via Sant'Agostino, 5, 90134",
        city="Palermo PA",
        state="OK",
        country="Italy",
        price=86,
        lat=38.115748,
        lng=13.36165,
    )
    spot23 = Spot(
        user_id=2,
        name="The Firebrand Hotel",
        description="The Firebrand Hotel brings urban sophistication and service combined with the atmosphere and adventurous style of Northwest Montana's rugged landscapes. The Firebrand's premier location in downtown Whitefish positions you steps away from world-class dining and nightlife options and within easy access to golfing, Whitefish Lake, trails, and skiing at Whitefish Mountain Resort, and it's a short drive to the West Glacier entrance to Glacier National Park.",
        address="650 E 3rd St",
        city="Whitefish",
        state="MO",
        country="USA",
        price=299,
        lat=48.410364,
        lng=-114.334553,
    )
    spot24 = Spot(
        user_id=1,
        name="Black Swan Inn Luxurious Theme Rooms",
        description="This downtown Pocatello hotel is located just off I-15. It serves a continental breakfast and offers free Wi-Fi access. Suites are decorated in a variety of exciting and romantic themes. Free Wi-Fi access and cable TV are available in all of the soundproof rooms at Black Swan Inn Luxurious Theme Rooms. Each is individually decorated in themes ranging from a Rocky Mountain Cabin to Romeo and Juliet. The Highland Golf Course is 3 miles away from Black Swan Inn Luxurious Theme Rooms. The Pocatello Regional Airport is 11.5 miles away.",
        address="746 E Center St",
        city="Pocatello",
        state="ID",
        country="USA",
        price=179,
        lat=42.875168,
        lng=-112.450629,
    )
    spot25 = Spot(
        user_id=9,
        name="Adventure Suites",
        description="This theme hotel features uniquely decorated suites with spa baths, flat-screen cable TVs and DVD players. Adventure Suites, located just 1 miless from Conway Scenic Railroad, offers a restaurant and bar called White Horse Saloon. Cranmore Mountain is 2 miles away. The suites, which include a motorcycle suite, provide free Wi-Fi, a CD player and seating area. There is also a refrigerator. The bathrooms feature robes and a hairdryer. During their stay, guests can purchase breakfast that includes waffles and muffins. Complimentary popcorn is offered each evening. The hotel has a DVD library with over 1,500 movies and a gift shop. There is also a game room with billiards and a horseshoe pit.",
        address="3440 White Mountain Hwy",
        city="North Conway",
        state="NH",
        country="USA",
        price=199,
        lat=44.051900,
        lng=-71.12888,
    )
    spot26 = Spot(
        user_id=4,
        name="The Roxbury",
        description="Welcome to The Roxbury. Our mission is to give you a one-of-a-kind destination where you can relax, recharge, and reconnect with your sense of wonder. But most of all, we want you to have FUN. Our bespoke theme-rooms, suites, and cottages are constructed with details designed to delight and our setting in the lush Catskill Mountains of New York provides the continuing restorative power of nature in every season.",
        address="667 Co Rd 41",
        city="Roxbury",
        state="NY",
        country="USA",
        price=500,
        lat=42.300417,
        lng=-74.554722,
    )
    spot27 = Spot(
        user_id=5,
        name="Victorian Mansion",
        description="Situated in the heart of the Santa Ynez wine country, just off Highway 101, this beautifully renovated bed and breakfast offers unrivaled accommodations and exceptional service. The Victorian Mansion at Los Alamos offers guests a unique and romantic experience. With each of the 6 guestrooms individually decorated and themed, including a pirate and Egyptian suite, and a delicious free breakfast delivered daily to each guestroom, every stay is sure to be unforgettable. Originally built in 1864, the Victorian Mansion also provides guests with luxurious linens and soft robes upon arrival. Guests can also relax in front of in-room fireplaces, soak in their private hot tub, or explore nearby scenic hiking trails.",
        address="326 Bell St",
        city="Los Alamos",
        state="CA",
        country="USA",
        price=255,
        lat=35.885745,
        lng=-106.303902,
    )
    spot28 = Spot(
        user_id=3,
        name="Legoland Resort",
        description="LEGOLAND® Florida Resort offers three themed accommodation options: the LEGOLAND® Florida Hotel, located 130 steps from the LEGOLAND® Florida theme park entrance, and the LEGOLAND® Beach Retreat, with beach-themed, village-style bungalows located on nearby Lake Dexter. A complimentary breakfast buffet is available for all resort guests. Free self-parking at the resort and complimentary WiFi are offered. Scheduled shuttle service is provided to and from LEGOLAND ® Florida. The LEGOLAND® Hotel offers rooms that feature a treasure hunt, LEGO® models, and a separate children's sleeping area. Rooms at the hotel are pirate, kingdom, or adventure-themed. The hotel features a zero-entry heated outdoor pool. A castle play area with a pirate ship and LEGO®-filled moat is included, as well. Also located at the hotel is the Skyline Lounge, which features a LEGO® skyline and over 20 LEGO®-themed scenes. A children's Master Model Builder Session is included with every stay at the LEGOLAND® Hotel. The LEGOLAND® Pirate Island Hotel offers pirate-themed rooms that feature an in-room treasure hunt with LEGO® prizes each day and a separate children's sleeping area. The hotel features a family-style Shipwreck Restaurant, a resort-style pool, nightly kid's entertainment and free LEGO Master Model Builder workshops. The LEGOLAND® Beach Retreat features beach-themed guest rooms in a village-style beach bungalow setting. The property offers a zero-entry heated outdoor pool. Guests can purchase snacks and drinks at Bricks Beach Bar. Historic Bok Tower Gardens is 11.2 miles from the hotel, while Eagle Ridge Mall is a 12 minutes' drive away. Davidson of Dundee candy factory is 6.8 miles from the property. Orlando International Airport is 37.9 miles away.",
        address="1 Legoland Way",
        city="Winter Haven",
        state="FL",
        country="USA",
        price=180,
        lat=27.989064,
        lng=-81.684081,
    )
    spot29 = Spot(
        user_id=7,
        name="Chateau Avalon",
        description="Situated on 28 wooded acres, guests of this French chateau are greeted by one of Kansas City's largest fountains. Each uniquely designed guest room features a 2-person spa bath and free Wi-Fi. A large flat-screen TV is included in every elaborately themed and furnished guest room at Chateau Avalon Hotel. Luxury bathrobes and amenities are provided in every room. Guests can enjoy a massage in the on-site spa at Hotel Chateau Avalon. Avalon Hotel Chateau offers free weekend transport to Village West, home to various shopping, entertainment and dining options.The Kansas Speedway is less than 10 minutes' walk from this hotel. The Community America Ballpark, home to the Kansas City T-Bones, is a 5 minutes' drive away.",
        address="701 Village West Pkwy",
        city="Kansas City",
        state="KS",
        country="USA",
        price=178,
        lat=39.111335,
        lng=-94.818228,
    )
    spot30 = Spot(
        user_id=8,
        name="The Inn at Christmas Place",
        description="The Bavarian-inspired The Inn at Christmas Place is opposite Christmas Place holiday store and 0.8 miles from The Island in Pigeon Forge family entertainment centre. An outdoor pool with a 100 feet waterslide and large garden are on site. The daily breakfast buffet includes made-to-order omelets, fresh Belgian waffles, and breakfast meats like sausage and ham. Pastries, fresh fruits, and hot/cold cereals are offered as well as fresh coffee. Santa Claus sings Christmas songs and tells holiday stories from Summer through December, and a glockenspiel art installation with bronze bells is on display in the lobby. Extras include a fitness centre and concierge services. A flat-screen TV with a DVD player, microwave, and refrigerator are standard in every room as well as a coffee machine. Suites include a gas fireplace, 2-person spa bath, and private balcony. Smoky Mountain Alpine Coaster is 5 minutes' drive from this Pigeon Forge Inn at The Christmas Place, while Dollywood theme park is 5.3 miles away. The inn is 12.5 miles from the Great Smoky Mountains National Park.",
        address="119 Christmas Tree Ln",
        city="Pigeon Forge",
        state="TN",
        country="USA",
        price=246,
        lat=35.800594,
        lng=-83.570008,
    )

    spot31 = Spot(
        user_id=1,
        name="Bandon Beach",
        description="Coastal retreat on a bluff overlooking the Pacific Ocean with a private path to the Bandon beaches and access to nearby world-renowned golf courses.",
        address="87052 Vesta Ln, Bandon, OR 97411",
        city="Bandon",
        state="OR",
        country="USA",
        price=990,
        lat=43.0899037046376,
        lng=-124.432851641235,
    )

    spot32 = Spot(
        user_id=2,
        name="Anchor Bay",
        description="5-acre retreat in Mendocino County with 180 degree views of the California Coast, your own private fitness center, and oceanview workstations.",
        address="35800 CA-1, Gualala, CA 95445",
        city="Gualala",
        state="CA",
        country="USA",
        price=1100,
        lat=38.7987675135031,
        lng=-123.573080236779,
    )

    spot33 = Spot(
        user_id=3,
        name="Tahoe Slopes",
        description="A luxury mountain escape in Tahoe with gorgeous interior finishes, hot tub, sauna, gym, and access to the world-class amenities at Northstar Resort. Whether you're craving adventure, or just looking for rest and relaxation, this property has it all-from a Tesla in the garage to Eight Sleep Pod Pros to sleep on.",
        address="19140 Glades Pl, Truckee, CA 96161",
        city="Truckee",
        state="CA",
        country="USA",
        price=900,
        lat=39.2722991225592,
        lng=-120.129767387731,
    )

    spot34 = Spot(
        user_id=4,
        name="Orford Cliffs",
        description="Super modern, solid concrete oceanfront home set atop cantilevered I-beams with stunning, floor-to-ceiling views of the Oregon coast.",
        address="1425 King St S, Port Orford, OR 97465",
        city="Port Orford",
        state="OR",
        country="USA",
        price=693,
        lat=42.7429980150855,
        lng=-124.510526404923,
    )

    spot35 = Spot(
        user_id=5,
        name="Joshua Tree",
        description="Modern architectural home nestled in the Southern California desert on a hilltop acre in beautiul Joshua Tree with bright, open living space and breathtaking views.",
        address="8141 Fox Trail, Yucca Valley, CA 92284",
        city="Yucca Valley",
        state="CA",
        country="USA",
        price=1507,
        lat=34.1035502506009,
        lng=-116.448321550924,
    )

    spot36 = Spot(
        user_id=6,
        name="Hudson Valley",
        description="Escape New York City and be transported to your own private Hudson Valley retreat perched on a beautiful hilltop overlooking the Catskills and Esopus Creek. Whether you're planning a workcation or want to unplug entirely, this brand new modern house has it all and blends seamlessly into the natural landscape.",
        address="1083 Ashokan Rd, Kingston, NY 12401",
        city="Hudson Valley",
        state="NY",
        country="USA",
        price=1200,
        lat=41.9278419552869,
        lng=-74.167892813502,
    )

    spot37 = Spot(
        user_id=7,
        name="Cave Creek",
        description="Cave Creek is located in a small desert town just outside of Phoenix, Arizona. Positioned on a hilly site dotted with saguaro and teddy bear cholla cacti, the residence offers views of the mountains and the sprawling city in the distance.",
        address="6083 E Knolls Way S, Cave Creek, AZ 85331",
        city="Cave Creek",
        state="AZ",
        country="USA",
        price=1122,
        lat=33.8339842568624,
        lng=-111.949687206048,
    )

    spot38 = Spot(
        user_id=8,
        name="Surfside Beach",
        description="Spacious oceanfront home in Surfside, South Carolina, with private beach access and breathtaking views of the Atlantic Ocean from nearly every angle. Perfect for your next large gathering, the home comfortably accommodates up to 26 guests with 8 bedrooms, 3 floors and an elevator. Brand-new.",
        address="219 S Seaside Dr, Surfside Beach, SC 29575",
        city="Surfside Beach",
        state="SC",
        country="USA",
        price=2000,
        lat=33.6029871213420,
        lng=-78.9741161631935,
    )

    spot39 = Spot(
        user_id=9,
        name="Crest",
        description="This 5 bedroom 7 bathroom villa by Harrison Design is located in the coveted Crest Streets on a pseudo-cul-de-sac in Beverly Hills. Every en-suite bedroom offers ultimate privacy and panoramic city, ocean, and hillside views.",
        address="9431 Sunset Blvd, Beverly Hills, CA 90210",
        city="Crest",
        state="CA",
        country="USA",
        price=2500,
        lat=34.0869125501620,
        lng=-118.400274730462,
    )

    spot40 = Spot(
        user_id=10,
        name="Villa Chepita",
        description="Villa Chepita is an ultra-modern estate with a 40-foot high foyer and stunning 30-foot water wall. Villa Chepita is the ideal choice for large families or groups of friends. There are 3 floors with entertaining spaces, spacious bedrooms and luxury bathrooms, a large fully-equipped kitchen, media room, theater, bowling alley, lap pool, gym and sauna, wine room and a recreation room with a billiards table, a bar and an arcade.",
        address="8 Ute Pl, Aspen, CO 81611",
        city="Aspen",
        state="CO",
        country="USA",
        price=18900,
        lat=39.1828034230909,
        lng=-106.813679082902,
    )

    spot41 = Spot(
        user_id=1,
        name="Chalet Elisa",
        description="Chalet Elisa is a beautiful ultra luxury ski chalet situated just outside the iconic skin resort of Aspen in Colorado. The property is located just on the outskirts of Aspen overlooking Red Mountain and the Hunter Creek Valley, yet just six minuted from the action in downtown Aspen and the area's ski resorts.",
        address="1290 Owl Creek Ranch Rd, Aspen, CO 81611",
        city="Aspen",
        state="CO",
        country="USA",
        price=16000,
        lat=39.2172129944534,
        lng=-106.899889086488,
    )

    spot42 = Spot(
        user_id=2,
        name="Golden",
        description="Welcome to one of Santa Monica's most extraordinary gated beach villas. Enjoy breathtaking, unobstructed 180 degree sand and water views all day, and the twinkling lights of the world famous pier every night. This architectural modern masterpiece is newly remodeled from top to bottom with no expense spared.",
        address="1421 Ocean Front Walk, Santa Monica, CA 90401",
        city="Santa Monica",
        state="CA",
        country="USA",
        price=2500,
        lat=34.0132547121525,
        lng=-118.498773040500,
    )

    spot43 = Spot(
        user_id=3,
        name="Chantilly Estate",
        description="Welcome to Chantilly Estate! Modern architectural masterpiece in prime lower Bel Air. Nestled behind gates in a lush canyon setting, this exquisite contemporary is an entertainer's paradise with over 10,000 square feet of meticulously crafted living space.",
        address="10730 Bellagio Rd, Los Angeles, CA 90077",
        city="Bel Air",
        state="CA",
        country="USA",
        price=4500,
        lat=34.0796159985859,
        lng=-118.448778954176,
    )

    spot44 = Spot(
        user_id=4,
        name="Beachview Malibu",
        description="Villa Beachview Malibu is a modern villa perched above the crashing surf in Marisol, California. Secluded amidst the cliff side, the home has uninterrupted ocean views and is just moments from restaurants, shopping, and a private airport. This Berry Berkus designed home is accented with a zero-edge infinity pool and spa, patio with a covered gazebo, a fireplace, and a water fountain.",
        address="11300 Yerba Buena Rd, Malibu, CA 90265",
        city="Malibu",
        state="CA",
        country="USA",
        price=5900,
        lat=34.0546403666168,
        lng=-118.962755200820,
    )

    spot45 = Spot(
        user_id=1,
        name="Strat House",
        description="The Strat House is set at Bird Streets area, Los Angeles. Perched atop one of Los Angeles's most beautiful hillsides, the Strat House is an architectural masterpiece of iron beams, soaring ceilings, natural stone and wood that creates an extraordinary experience. Part of the structure is carved into the hillside. Strat House yields a striking, panoramic view from the skyscrapers of Downtown Los Angeles to the Pacific coastline of Santa Monica.",
        address="8640 Fennell Pl, Los Angeles, CA 90069",
        city="Los Angeles",
        state="CA",
        country="USA",
        price=5500,
        lat=34.0953301465858,
        lng=-118.379667171713,
    )

    # for i in range(1, 46):
    #     db.session.add(f"spot{i}")

    # josh spots
    db.session.add(spot1)
    db.session.add(spot2)
    db.session.add(spot3)
    db.session.add(spot4)
    db.session.add(spot5)
    db.session.add(spot6)
    db.session.add(spot7)
    db.session.add(spot8)
    db.session.add(spot9)
    db.session.add(spot10)
    db.session.add(spot11)
    db.session.add(spot12)
    db.session.add(spot13)
    db.session.add(spot14)
    db.session.add(spot15)

    # beau spots
    db.session.add(spot16)
    db.session.add(spot17)
    db.session.add(spot18)
    db.session.add(spot19)
    db.session.add(spot20)
    db.session.add(spot21)
    db.session.add(spot22)
    db.session.add(spot23)
    db.session.add(spot24)
    db.session.add(spot25)
    db.session.add(spot26)
    db.session.add(spot27)
    db.session.add(spot28)
    db.session.add(spot29)
    db.session.add(spot30)

    # kevin spots
    db.session.add(spot31)
    db.session.add(spot32)
    db.session.add(spot33)
    db.session.add(spot34)
    db.session.add(spot35)
    db.session.add(spot36)
    db.session.add(spot37)
    db.session.add(spot38)
    db.session.add(spot39)
    db.session.add(spot40)
    db.session.add(spot41)
    db.session.add(spot42)
    db.session.add(spot43)
    db.session.add(spot44)
    db.session.add(spot45)


def undo_spots():
    db.session.execute("TRUNCATE spots RESTART IDENTITY CASCADE;")
    db.session.commit()
