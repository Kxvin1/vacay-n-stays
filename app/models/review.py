# fmt: off
from .db import db

class Review(db.Model):
    __tablename__ = "reviews"

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False) # user foreign key
    spot_id = db.Column(db.Integer, db.ForeignKey("spots.id"), nullable=False) # spot foreign key
    comment = db.Column(db.Text, nullable=False)
    date = db.Column(db.Date, nullable=False, unique=False)
    cleanliness = db.Column(db.Integer, nullable=False)
    location = db.Column(db.Integer, nullable=False)
    value = db.Column(db.Integer, nullable=False)

    # many to one: review belongsTo user (line 8)
    user = db.relationship("User", back_populates="review")

    # many to one: review belongsTo spot (line 9)
    spot = db.relationship("Spot", back_populates="review")

    def to_dict(self):
        return {
            "id": self.id,
            "user_id": self.user_id,
            "spot_id": self.spot_id,
            "comment": self.comment,
            "date": self.date,
            "cleanliness": self.cleanliness,
            "location": self.location,
            "value": self.value,
        }
