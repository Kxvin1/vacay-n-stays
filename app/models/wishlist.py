# fmt: off
from .db import db

class Wishlist(db.Model):
    __tablename__ = "wishlists"

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False) # fk to User
    spot_id = db.Column(db.Integer, db.ForeignKey("spots.id"), nullable=False) # fk to Spot

    # Many to Many join Table for: Users <--> Spots
    def to_dict(self):
        return {
            "id": self.id,
            "user_id": self.user_id,
            "spot_id": self.spot_id,
        }
