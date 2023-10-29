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
                "number": output.number,
                "text": output.text,
            }
            for output in contactForm.objects.all()
        ]
        return Response(output)

    def post(self, request):
        serializer = contactFormSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data)
