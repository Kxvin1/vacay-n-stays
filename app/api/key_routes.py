from flask import Flask, Blueprint
import os

key_routes = Blueprint('key', __name__)

@key_routes.route('/')
def key():
    return {"api_key": os.environ.get("REACT_GOOGLE_API_KEY")}

#TODO
# Add REACT_GOOGLE_API_KEY
# from .routes import key
# app.register_blueprint(key.bp, url_prefix='/api/key)
