from django.shortcuts import render
from rest_framework.views import APIView
from .models import contactForm
from .serializer import contactFormSerializer
from rest_framework.response import Response


class contactFormView(APIView):
    def get(self, request):
        output = [
            {
                "name": output.name,
                "phone": output.phone,
                "comments": output.comments,
                "privacyPolicy": output.privacyPolicy,
            }
            for output in contactForm.objects.all()
        ]
        return Response(output)

    def post(self, request):
        serializer = contactFormSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data)
