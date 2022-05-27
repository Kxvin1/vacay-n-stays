from flask import Blueprint, jsonify, request
from flask_login import login_required
from .auth_routes import validation_errors_to_error_messages
from app.forms import NewSpotForm
from app.models import db, Spot

spot_routes = Blueprint('spots', __name__)

#Get all spots.
#prefix
#/api/spots

@spot_routes.route("/")
def get():
    spots = Spot.query.all()
    # list of objects pertaining to each spot.
    results = [spot.to_dict() for spot in spots]

    return {"spots": results}


#Create a spot.
@spot_routes.route("", methods=["POST"])
@login_required
def add_spot():
    form = NewSpotForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    print(form.validate_on_submit(), "LOOK HEEEEERRREE")
    if form.validate_on_submit():
        data = form.data
        spot = Spot(
            user_id = data['user_id'],
            name = data['name'],
            description = data['description'],
            address = data['address'],
            city = data['city'],
            state = data['state'],
            country = data['country'],
            lat = data['lat'],
            lng = data['lng'],
            price = data['price']
        )

        # create a session and add to db.
        db.session.add(spot)
        db.session.commit()
        # return json object
        return spot.to_dict()
    return {"errors": validation_errors_to_error_messages(form.errors)}, 401

#Update a spot.
@spot_routes.route("/<int:spotId>", methods=["PUT"])
@login_required
def update(spotId):
    form = NewSpotForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        data = form.data

        spot = Spot.query.filter(Spot.id == spotId).first()

        spot.user_id = data['user_id']
        spot.name = data['name']
        spot.description = data['description']
        spot.address = data['address']
        spot.city = data['city']
        spot.state = data['state']
        spot.country = data['country']
        spot.lat = data['lat']
        spot.lng = data['lng']
        spot.price = data['price']

        db.session.commit()

        return {
            "id": spot.id,
            "user_id": spot.userId,
            "name": spot.name,
            "description": spot.description,
            "address": spot.address,
            "city": spot.city,
            "state": spot.state,
            "country": spot.country,
            "lat": spot.lat,
            "lng": spot.lng,
            "price": spot.price
        }
    return {"errors": validation_errors_to_error_messages(form.errors)}, 401

@spot_routes.route("/<int:spotId>", methods=["DELETE"])
@login_required
def delete_spot(spotId):
    spotToDelete = Spot.query.filter(Spot.id == spotId).first()

    if spotToDelete:
        db.session.delete(spotToDelete)
        db.session.commit()
        return {
            "id": spotToDelete.id,
            "user_id": spotToDelete.userId,
            "name": spotToDelete.name,
            "description": spotToDelete.description,
            "address": spotToDelete.address,
            "city": spotToDelete.city,
            "state": spotToDelete.state,
            "country": spotToDelete.country,
            "lat": spotToDelete.lat,
            "lng": spotToDelete.lng,
            "price": spotToDelete.price
        }

@spot_routes.route("/user/<int:userId>")
@login_required
def get_spot(userId):

    userSpots = Spot.query.filter(Spot.user_id == userId).all()

    results = [spot.to_dict() for spot in userSpots]

    return {'spots': results}





############Will add to root __init__ ##
# from .routes import spots
# app.register_blueprint(spots.bp, url_prefix='/api/spots)
