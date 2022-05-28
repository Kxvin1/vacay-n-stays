# fmt: off
from .db import db

class Spot(db.Model):
    __tablename__ = "spots"

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False) # user foreign key
    name = db.Column(db.String(80), nullable=False)
    description = db.Column(db.Text, nullable=False)
    address = db.Column(db.String(255), nullable=False)
    city = db.Column(db.String(80), nullable=False)
    state = db.Column(db.String(80), nullable=False)
    country = db.Column(db.String(80), nullable=False)
    price = db.Column(db.Float, nullable=False)
    lat = db.Column(db.Float, nullable=False)
    lng = db.Column(db.Float, nullable=False)


    # many to many: user hasmany spots <--> spots has many users
    # tables: user and spots, secondary = wishlist
    # spot_wishlist = db.relationship("User", secondary="wishlists", back_populates="user_wishlist")

    # many to one: spot belongsTo user (line 8 + this below connects)
    user = db.relationship("User", back_populates="spot")

    # one to many: spot hasMany bookings
    booking = db.relationship("Booking", back_populates="spot", cascade="all, delete")

    # one to many: spot hasMany reviews
    review = db.relationship("Review", back_populates="spot", cascade="all, delete")

    # one to many: spot hasMany images
    images = db.relationship("Image", back_populates="spot", cascade="all, delete")

    def to_dict(self):
        return {
            "id": self.id,
            "user_id": self.user_id,
            "name": self.name,
            "description": self.description,
            "address": self.address,
            "city": self.city,
            "state": self.state,
            "country": self.country,
            "lat": self.lat,
            "lng": self.lng,
            "price": self.price,
            "user": self.user.owner_info(),
            "images": [image.image_info() for image in self.images],
        }

    def booking_info(self):
        return {
            "id": self.id,
            "user_id": self.user_id,
            "name": self.name,
            "description": self.description,
            "address": self.address,
            "city": self.city,
            "state": self.state,
            "images": [image.image_info() for image in self.images],
        }
