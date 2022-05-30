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

    booking11 = Booking(
        user_id=1,
        spot_id=1,
        check_in=date(2021, 7, 24),
        check_out=date(2021, 8, 24),
    )
    booking12 = Booking(
        user_id=2,
        spot_id=2,
        check_in=date(2021, 7, 24),
        check_out=date(2021, 8, 24),
    )
    booking13 = Booking(
        user_id=3,
        spot_id=3,
        check_in=date(2021, 7, 24),
        check_out=date(2021, 8, 24),
    )
    booking14 = Booking(
        user_id=4,
        spot_id=4,
        check_in=date(2021, 7, 24),
        check_out=date(2021, 8, 24),
    )
    booking15 = Booking(
        user_id=5,
        spot_id=5,
        check_in=date(2021, 7, 24),
        check_out=date(2021, 8, 24),
    )
    booking16 = Booking(
        user_id=6,
        spot_id=6,
        check_in=date(2021, 7, 24),
        check_out=date(2021, 8, 24),
    )
    booking17 = Booking(
        user_id=7,
        spot_id=7,
        check_in=date(2021, 7, 24),
        check_out=date(2021, 8, 24),
    )
    booking18 = Booking(
        user_id=8,
        spot_id=8,
        check_in=date(2021, 7, 24),
        check_out=date(2021, 8, 24),
    )
    booking19 = Booking(
        user_id=9,
        spot_id=9,
        check_in=date(2021, 7, 24),
        check_out=date(2021, 8, 24),
    )
    booking20 = Booking(
        user_id=10,
        spot_id=10,
        check_in=date(2021, 7, 24),
        check_out=date(2021, 8, 24),
    )
    booking21 = Booking(
        user_id=1,
        spot_id=1,
        check_in=date(2020, 7, 24),
        check_out=date(2020, 8, 24),
    )
    booking22 = Booking(
        user_id=2,
        spot_id=2,
        check_in=date(2020, 7, 24),
        check_out=date(2020, 8, 24),
    )
    booking23 = Booking(
        user_id=3,
        spot_id=3,
        check_in=date(2020, 7, 24),
        check_out=date(2020, 8, 24),
    )
    booking24 = Booking(
        user_id=4,
        spot_id=4,
        check_in=date(2020, 7, 24),
        check_out=date(2020, 8, 24),
    )
    booking25 = Booking(
        user_id=5,
        spot_id=5,
        check_in=date(2020, 7, 24),
        check_out=date(2020, 8, 24),
    )
    booking26 = Booking(
        user_id=6,
        spot_id=6,
        check_in=date(2020, 7, 24),
        check_out=date(2020, 8, 24),
    )
    booking27 = Booking(
        user_id=7,
        spot_id=7,
        check_in=date(2020, 7, 24),
        check_out=date(2020, 8, 24),
    )
    booking28 = Booking(
        user_id=8,
        spot_id=8,
        check_in=date(2020, 7, 24),
        check_out=date(2020, 8, 24),
    )
    booking29 = Booking(
        user_id=9,
        spot_id=9,
        check_in=date(2020, 7, 24),
        check_out=date(2020, 8, 24),
    )
    booking30 = Booking(
        user_id=10,
        spot_id=10,
        check_in=date(2020, 7, 24),
        check_out=date(2020, 8, 24),
    )
    booking31 = Booking(
        user_id=1,
        spot_id=1,
        check_in=date(2023, 7, 24),
        check_out=date(2023, 8, 24),
    )
    booking32 = Booking(
        user_id=2,
        spot_id=2,
        check_in=date(2023, 7, 24),
        check_out=date(2023, 8, 24),
    )
    booking33 = Booking(
        user_id=3,
        spot_id=3,
        check_in=date(2023, 7, 24),
        check_out=date(2023, 8, 24),
    )
    booking34 = Booking(
        user_id=4,
        spot_id=4,
        check_in=date(2023, 7, 24),
        check_out=date(2023, 8, 24),
    )
    booking35 = Booking(
        user_id=5,
        spot_id=5,
        check_in=date(2023, 7, 24),
        check_out=date(2023, 8, 24),
    )
    booking36 = Booking(
        user_id=6,
        spot_id=6,
        check_in=date(2023, 7, 24),
        check_out=date(2023, 8, 24),
    )
    booking37 = Booking(
        user_id=7,
        spot_id=7,
        check_in=date(2023, 7, 24),
        check_out=date(2023, 8, 24),
    )
    booking38 = Booking(
        user_id=8,
        spot_id=8,
        check_in=date(2023, 7, 24),
        check_out=date(2023, 8, 24),
    )
    booking39 = Booking(
        user_id=9,
        spot_id=9,
        check_in=date(2023, 7, 24),
        check_out=date(2023, 8, 24),
    )
    booking40 = Booking(
        user_id=10,
        spot_id=10,
        check_in=date(2023, 7, 24),
        check_out=date(2023, 8, 24),
    )
    booking41 = Booking(
        user_id=1,
        spot_id=1,
        check_in=date(2023, 12, 24),
        check_out=date(2023, 12, 31),
    )
    booking42 = Booking(
        user_id=2,
        spot_id=2,
        check_in=date(2023, 12, 24),
        check_out=date(2023, 12, 31),
    )
    booking43 = Booking(
        user_id=3,
        spot_id=3,
        check_in=date(2023, 12, 24),
        check_out=date(2023, 12, 31),
    )
    booking44 = Booking(
        user_id=4,
        spot_id=4,
        check_in=date(2023, 12, 24),
        check_out=date(2023, 12, 31),
    )
    booking45 = Booking(
        user_id=5,
        spot_id=5,
        check_in=date(2023, 12, 24),
        check_out=date(2023, 12, 31),
    )
    booking46 = Booking(
        user_id=6,
        spot_id=6,
        check_in=date(2023, 12, 24),
        check_out=date(2023, 12, 31),
    )
    booking47 = Booking(
        user_id=7,
        spot_id=7,
        check_in=date(2023, 12, 24),
        check_out=date(2023, 12, 31),
    )
    booking48 = Booking(
        user_id=8,
        spot_id=8,
        check_in=date(2023, 12, 24),
        check_out=date(2023, 12, 31),
    )
    booking49 = Booking(
        user_id=9,
        spot_id=9,
        check_in=date(2023, 12, 24),
        check_out=date(2023, 12, 31),
    )
    booking50 = Booking(
        user_id=10,
        spot_id=10,
        check_in=date(2023, 12, 24),
        check_out=date(2023, 12, 31),
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
    db.session.add(booking11)
    db.session.add(booking12)
    db.session.add(booking13)
    db.session.add(booking14)
    db.session.add(booking15)
    db.session.add(booking16)
    db.session.add(booking17)
    db.session.add(booking18)
    db.session.add(booking19)
    db.session.add(booking20)
    db.session.add(booking21)
    db.session.add(booking22)
    db.session.add(booking23)
    db.session.add(booking24)
    db.session.add(booking25)
    db.session.add(booking26)
    db.session.add(booking27)
    db.session.add(booking28)
    db.session.add(booking29)
    db.session.add(booking30)
    db.session.add(booking31)
    db.session.add(booking32)
    db.session.add(booking33)
    db.session.add(booking34)
    db.session.add(booking35)
    db.session.add(booking36)
    db.session.add(booking37)
    db.session.add(booking38)
    db.session.add(booking39)
    db.session.add(booking40)
    db.session.add(booking41)
    db.session.add(booking42)
    db.session.add(booking43)
    db.session.add(booking44)
    db.session.add(booking45)
    db.session.add(booking46)
    db.session.add(booking47)
    db.session.add(booking48)
    db.session.add(booking49)
    db.session.add(booking50)

    db.session.commit()


def undo_bookings():
    db.session.execute("TRUNCATE bookings RESTART IDENTITY CASCADE;")
    db.session.commit()
