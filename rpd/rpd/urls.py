from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import path, include
from django.urls import re_path as url
from backend_api.views import *

urlpatterns = [
    path("admin/", admin.site.urls),
    path("", contactFormView.as_view(), name="oh shit"),
] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
