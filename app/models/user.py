# fmt: off
from .db import db
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin


class User(db.Model, UserMixin):
    __tablename__ = "users"

    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String(80), nullable=False, unique=False)
    last_name = db.Column(db.String(80), nullable=False, unique=False)
    address = db.Column(db.String(255), nullable=True)
    lat = db.Column(db.Float, nullable=True)
    lng = db.Column(db.Float, nullable=True)
    email = db.Column(db.String(255), nullable=False, unique=True)
    hashed_password = db.Column(db.String(255), nullable=False)

    # many to many: user hasmany spots <--> spots has many users
    # tables: user and spots, secondary = wishlist
    # user_wishlist = db.relationship("Spot", secondary="wishlists", back_populates="spot_wishlist")

    # one to many: user hasMany spots
    spot = db.relationship("Spot", back_populates="user")

    # one to many: user hasMany bookings
    booking = db.relationship("Booking", back_populates="user")

    # one to many: user hasMany reviews
    review = db.relationship("Review", back_populates="user")

    @property
    def password(self):
        return self.hashed_password

    @password.setter
    def password(self, password):
        self.hashed_password = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password, password)

    def to_dict(self):
        return {
            "id": self.id,
            "first_name": self.first_name,
            "last_name": self.last_name,
            "email": self.email,
        }

    def owner_info(self):
        return {
            "first_name": self.first_name,
            "last_name": self.last_name,
        }
