from flask_wtf import FlaskForm
from wtforms.validators import DataRequired
from wtforms import StringField, IntegerField


class EditReview(FlaskForm):
  comment = StringField("comment", validators=[DataRequired()])
  cleanliness = IntegerField("cleanliness", validators=[DataRequired()])
  location = IntegerField("location", validators=[DataRequired()])
  value = IntegerField("value", validators=[DataRequired()])