from tokenize import String
from wsgiref.validate import validator
from flask_wtf import FlaskForm
from wtforms.fields import StringField, SelectField, BooleanField, SubmitField, IntegerField, TextAreaField, DecimalField
from wtforms.validators import DataRequired, ValidationError

class NewSpotForm(FlaskForm):
    user_id = IntegerField("UserId", validators=[DataRequired()])
    name = StringField("Name", validators=[DataRequired()])
    description = TextAreaField("Description", validators=[DataRequired()])
    address = StringField("Address", validators=[DataRequired()])
    city = StringField("City", validators=[DataRequired()])
    state = StringField("State", validators=[DataRequired()])
    country = StringField("Country", validators=[DataRequired()])
    lat = DecimalField("Latitude", validators=[DataRequired()])
    lng = DecimalField("Longitude", validators=[DataRequired()])
    price = DecimalField("Price", validators=[DataRequired()])
