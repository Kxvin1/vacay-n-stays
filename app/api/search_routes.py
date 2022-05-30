from flask import Blueprint, request

from app.models import db, Spot
from app.forms import NewSearch
from .auth_routes import validation_errors_to_error_messages

search_routes = Blueprint("search", __name__)

# get search results
@search_routes.route("/", methods=["POST"])
def search_results():
    form = NewSearch()

    form["csrf_token"].data = request.cookies["csrf_token"]
    data = form.data

    search_query = []

    if data["city"]:
        search_query.append(Spot.city.ilike(f'%{data["city"]}%'))
    if data["state"]:
        search_query.append(Spot.state.ilike(f'%{data["state"]}'))

    specific_spots = Spot.query.filter(*search_query)

    search_results = [spot.to_dict() for spot in specific_spots]
    return {"spots": search_results}
