from flask import Blueprint, request
from flask_login import login_required

from app.models import db, Booking
from app.forms import NewBooking, UpdateBooking
from .auth_routes import validation_errors_to_error_messages

booking_routes = Blueprint("bookings", __name__)


# get all upcoming bookings for a spot
@booking_routes("/spot/<int:spotId>")
def spot_bookings(spotId):
    bookings = Booking.query.filter(Booking.spot_id == spotId).all()
    res = [booking.to_dict() for booking in bookings]
    return {"bookings": res}


# get all upcoming bookings for a user
@booking_routes("/user/<int:userId>")
@login_required
def user_bookings(userId):
    bookings = Booking.query.filter(Booking.user_id == userId).all()
    res = [booking.booking_info() for booking in bookings]
    return {"bookings": res}


# post a booking
@booking_routes("/", methods=["POST"])
@login_required
def add_booking():
    form = NewBooking()

    form["csrf_token"].data = request.cookies["csrf_token"]
    if form.validate_on_submit():
        data = form.data
        booking = Booking(
            user_id=data["user_id"],
            spot_id=data["spot_id"],
            check_in=data["check_in"],
            check_out=data["check_out"],
        )

        db.session.add(booking)
        db.session.commit()

        return booking.to_dict()
    return {"errors": validation_errors_to_error_messages(form.errors)}, 401


# update a booking
@booking_routes("/<int:bookingId>", methods=["PUT"])
@login_required
def update_booking(bookingId):
    form = UpdateBooking()

    form["csrf_token"].data = request.cookies["csrf_token"]
    if form.validate_on_submit():
        data = form.data

        booking = Booking.query.filter(Booking.id == bookingId).first()
        booking.check_in = data["check_in_date"]
        booking.check_out = data["check_out_date"]

        db.session.commit()

        return booking.booking_info()
    return {"errors": validation_errors_to_error_messages(form.errors)}, 401


# delete a booking
@booking_routes("/<int:bookingId>", methods=["DELETE"])
@login_required
def delete_booking(bookingId):
    booking = Booking.query.filter(Booking.id == bookingId).first()
    if booking:
        db.session.delete(booking)
        db.session.commit()
        return {"id": booking.id}
