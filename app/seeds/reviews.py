from app.models import db, Review
import datetime
import random


def seed_reviews():
    reviewComments = [
        "I guess it is an island thing but they make you wait until 4:00 pm to check in even if the rooms are ready not realizing you have travelled a long way and are exhausted. Staff very helpful and accommodating. Rooms very clean but in need of repairs and updates.",
        "The staff were very nice and accommodating. The rooms were clean..beds comfortable. Granted it is a boutique hotel but it was run down/dated. Old curtains, trim work rusted, stains on ceiling etc..",
        "Awesome location, great staff and loved the small details they do for you as for giving you 2 welcome drink coupons. Breakfast was pretty too",
        "Perfect for a lower budget. Reserved beach chairs a huge plus. Very clean, friendly staff, perfect location walking distance to amazing restaurants and shops. Loved our stay!",
        "The only problem that I had was my cooling system kept shutting down the place was clean definitely could use some updating but was close to a lot of restaurants, shops, casinos, and beaches",
        "Friendly and well located hotel. Stuck in the 1980's but kept clean. Broken bathroom cupboard door but those little things dont bother me. What matters is the cleanliness, price and whats around the hotel to do. Brickell Bay has all 3 execellently provided and not to mention the free breakfast. Will definitely return.",
        "Everyone was so friendly and accommodating. We loved the pool bar and spa and how close the hotel was to the beach, shops, and restaurants. The beach and water sport staff were especially helpful!",
        "Great centralized location. Friendly staff. Breakfast was decent. Hotel can benefit from some upgrades, nothing major and a larger trash can.",
        "I love the location of the property everything is right there in town, pool is beautiful along with the lounge chairs. Staff is friendly always there to serve. One thing that I disliked was that sometimes there was no towels in the room.",
    ]
    # Loop thru the spots and assign a review to each one 1 - 45
    for j in range(1, 46):
      # for each spot assigned a review assign a user id 1-10
        for i in range(1, 11):
          # assign a random number 1 - 500 to the reviewDays variable to use later
            reviewDays = random.randint(0, 500)
            db.session.add(
                Review(
                  # calls the user_id variable
                    user_id=i,
                    # calls the spot_id variable
                    spot_id=j,
                    # uses the reviewComments variable above to assign a comment two less than the user id variable
                    comment=reviewComments[i - 2],
                    # deducts the day duration of days in the above reviewdays variable from the current date and time
                    date=(
                        datetime.datetime.now() - datetime.timedelta(days=reviewDays)
                    ).date(),
                    # the next 3 assign a random star value from 3 to 5 stars for each of the ratings
                    cleanliness=random.randint(3, 5),
                    location=random.randint(3, 5),
                    value=random.randint(3, 5),
                )
            )

    db.session.commit()


def undo_reviews():
    db.session.execute("TRUNCATE reviews RESTART IDENTITY CASCADE;")
    db.session.commit()
