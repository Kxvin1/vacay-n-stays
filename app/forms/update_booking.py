from flask_wtf import FlaskForm
from wtforms import DateField
from wtforms.validators import DataRequired


class UpdateBooking(FlaskForm):
    check_in = DateField("check_in", validators=[DataRequired()])
    check_out = DateField("check_out", validators=[DataRequired()])
