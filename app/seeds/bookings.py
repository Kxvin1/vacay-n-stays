from app.models import db, Booking
from datetime import datetime, timedelta, date


def seed_bookings():

    booking1 = Booking(
        user_id=1,
        spot_id=1,
        check_in=date(2022, 7, 24),
        check_out=date(2022, 8, 24),
    )
    booking2 = Booking(
        user_id=2,
        spot_id=2,
        check_in=date(2022, 7, 24),
        check_out=date(2022, 8, 24),
    )
    booking3 = Booking(
        user_id=3,
        spot_id=3,
        check_in=date(2022, 7, 24),
        check_out=date(2022, 8, 24),
    )
    booking4 = Booking(
        user_id=4,
        spot_id=4,
        check_in=date(2022, 7, 24),
        check_out=date(2022, 8, 24),
    )
    booking5 = Booking(
        user_id=5,
        spot_id=5,
        check_in=date(2022, 7, 24),
        check_out=date(2022, 8, 24),
    )
    booking6 = Booking(
        user_id=6,
        spot_id=6,
        check_in=date(2022, 7, 24),
        check_out=date(2022, 8, 24),
    )
    booking7 = Booking(
        user_id=7,
        spot_id=7,
        check_in=date(2022, 7, 24),
        check_out=date(2022, 8, 24),
    )
    booking8 = Booking(
        user_id=8,
        spot_id=8,
        check_in=date(2022, 7, 24),
        check_out=date(2022, 8, 24),
    )
    booking9 = Booking(
        user_id=9,
        spot_id=9,
        check_in=date(2022, 7, 24),
        check_out=date(2022, 8, 24),
    )
    booking10 = Booking(
        user_id=10,
        spot_id=10,
        check_in=date(2022, 7, 24),
        check_out=date(2022, 8, 24),
    )

    # for i in range(1, 11):
    #     db.session.add(f"booking{i}")

    db.session.add(booking1)
    db.session.add(booking2)
    db.session.add(booking3)
    db.session.add(booking4)
    db.session.add(booking5)
    db.session.add(booking6)
    db.session.add(booking7)
    db.session.add(booking8)
    db.session.add(booking9)
    db.session.add(booking10)

    db.session.commit()


def undo_bookings():
    db.session.execute("TRUNCATE bookings RESTART IDENTITY CASCADE;")
    db.session.commit()
