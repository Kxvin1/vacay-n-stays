from app.models import db, User


# Adds a demo user, you can add other users here if you want
def seed_users():
    demo = User(
        first_name="Demo",
        last_name="User",
        email="dmo@dmo.com",
        address="210 Industrial Rd, San Carlos, CA 94070",
        lat=37.51812801028579,
        lng=-122.26468130207536,
        hashed_password="password",
    )
    user2 = User(
        first_name="Eduardo",
        last_name="Valdes",
        email="Ed@ed.com",
        address="4502 E Desert Park Pl, Paradise Valley, AZ 85253",
        lat=33.55214833306677,
        lng=-111.98368217279491,
        hashed_password="password1",
    )
    user3 = User(
        first_name="Richard",
        last_name="Clements",
        email="Rch@rch.com",
        address="104 Perry St, New York, NY 10014",
        lat=40.73506681973066,
        lng=-74.0055770519573,
        hashed_password="password2",
    )
    user4 = User(
        first_name="Leigh",
        last_name="Halliday",
        email="Le@ggle.com",
        address="1 Brewers Way, Milwaukee, WI 53214",
        lat=43.02798041528339,
        lng=-87.97114839320365,
        hashed_password="password3",
    )
    user5 = User(
        first_name="Peter",
        last_name="Pichler",
        email="Pe@pe.com",
        address="7000 Coliseum Way, Oakland, CA 94621",
        lat=37.750330742389174,
        lng=-122.20305682663655,
        hashed_password="password4",
    )
    user6 = User(
        first_name="Sofia",
        last_name="Morales",
        email="So@so.com",
        address="Orlando, FL",
        lat=28.377166803244865,
        lng=-81.57071854450346,
        hashed_password="password5",
    )
    user7 = User(
        first_name="Steven",
        last_name="Holl",
        email="Ste@ste.com",
        address="1601 E NASA Pkwy, Houston, TX 77058",
        lat=29.551826186919556,
        lng=-95.09811964880747,
        hashed_password="password6",
    )
    user8 = User(
        first_name="Ludwig",
        last_name="Godefroy",
        email="Lud@lud.com",
        address="Chicago, IL 60601",
        lat=41.88251625478868,
        lng=-87.62330951535294,
        hashed_password="password7",
    )
    user9 = User(
        first_name="Andres",
        last_name="Quinonez",
        email="An@an.com",
        address="400 Broad St, Seattle, WA 98109",
        lat=47.62050955039333,
        lng=-122.34928253607458,
        hashed_password="password8",
    )
    user10 = User(
        first_name="John",
        last_name="Carnachan",
        email="Joh@joh.com",
        address="New York, NY 10001",
        lat=40.748540642047395,
        lng=-73.98576282234029,
        hashed_password="password9",
    )

    db.session.add(demo)
    db.session.add(user2)
    db.session.add(user3)
    db.session.add(user4)
    db.session.add(user5)
    db.session.add(user6)
    db.session.add(user7)
    db.session.add(user8)
    db.session.add(user9)
    db.session.add(user10)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_users():
    db.session.execute("TRUNCATE users RESTART IDENTITY CASCADE;")
    db.session.commit()
