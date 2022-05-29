from flask import Blueprint, jsonify, session, request
from flask_login import login_required
from app.models import Review, db
from app.forms import NewReview, EditReview
from .auth_routes import validation_errors_to_error_messages
import datetime


review_routes = Blueprint("review", __name__)


@review_routes.route("/<int:id>")
def get_reviews(id):
    reviews = Review.query.filter(Review.spot_id == id)
    return {"reviews": [review.to_dict() for review in reviews]}


@review_routes.route("/", methods=["POST"])
@login_required
def new_review():
    form = NewReview()
    form["csrf_token"].data = request.cookies["csrf_token"]
    if form.validate_on_submit():
        review = Review(
            user_id=form.data["user_id"],
            spot_id=form.data["spot_id"],
            comment=form.data["comment"],
            cleanliness=form.data["cleanliness"] / 2 / 10,
            location=form.data["location"] / 2 / 10,
            value=form.data["value"] / 2 / 10,
            date=datetime.datetime.now().date(),
        )
        db.session.add(review)
        db.session.commit()
        return review.to_dict()
    return {"errors": validation_errors_to_error_messages(form.errors)}


@review_routes.route("/<int:id>", methods=["PUT"])
def edit_review(id):
    form = EditReview()
    form["csrf_token"].data = request.cookies["csrf_token"]
    if form.validate_on_submit():
        review = Review.query.filter(Review.id == id).first()
        review.comment = (form.data["comment"],)
        review.cleanliness = (form.data["cleanliness"],)
        review.location = (form.data["location"],)
        review.value = (form.data["value"],)
        # review.date = (form.data["date"],)
        db.session.commit()
        return review.to_dict()
    return {"errors": validation_errors_to_error_messages(form.errors)}


@review_routes.route("/<int:id>", methods=["DELETE"])
@login_required
def delete_review(id):
    deleteReview = Review.query.filter(Review.id == id).first()

    if deleteReview:
        db.session.delete(deleteReview)
        db.session.commit()
        return {"id": deleteReview.id}
