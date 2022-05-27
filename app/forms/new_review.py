from flask_wtf import FlaskForm
from wtforms.validators import DataRequired
from wtforms import StringField, IntegerField


class NewReview(FlaskForm):
  user_id = IntegerField("user_id", validators=[DataRequired()])
  spot_id = IntegerField("spot_id", validators=[DataRequired()])
  comment = StringField("comment", validators=[DataRequired()])
  cleanliness = IntegerField("cleanliness", validators=[DataRequired()])
  location = IntegerField("location", validators=[DataRequired()])
  value = IntegerField("value", validators=[DataRequired()])