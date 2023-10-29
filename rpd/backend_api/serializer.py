from rest_framework import serializers
from .models import contactForm


class contactFormSerializer(serializers.ModelSerializer):
    class Meta:
        model = contactForm
        fields = ["name", "phone", "comments", "privacyPolicy"]
