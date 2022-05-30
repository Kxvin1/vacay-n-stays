from flask_wtf import FlaskForm
from wtforms import StringField


class NewSearch(FlaskForm):
    city = StringField("city")
    state = StringField("state")
