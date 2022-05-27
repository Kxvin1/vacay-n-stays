from flask_wtf import FlaskForm
from wtforms.validators import DataRequired
from wtforms import StringField, IntegerField


class EditReview(FlaskForm):
  comment = StringField("comment", validators=[DataRequired()])
  cleanliness = StringField("cleanliness", validators=[DataRequired()])
  location = StringField("location", validators=[DataRequired()])
  value = StringField("value", validators=[DataRequired()])