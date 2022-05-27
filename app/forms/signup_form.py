# fmt: off
from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired, Email, ValidationError
from app.models import User


def user_exists(form, field):
    # Checking if user exists
    email = field.data
    user = User.query.filter(User.email == email).first()
    if user:
        raise ValidationError('Email address is already in use.')


class SignUpForm(FlaskForm):
    first_name = StringField('First Name', validators=[DataRequired(message="First Name Required")])
    last_name = StringField('Last Name', validators=[DataRequired(message="Last Name Required")])
    email = StringField('Email', validators=[DataRequired(message="Email Required"), user_exists])
    password = StringField('Password', validators=[DataRequired(message="Password Required")])
