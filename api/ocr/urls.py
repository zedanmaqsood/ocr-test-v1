from django.urls import path

from . import views

app_name = "ocr"
urlpatterns = [
    path("", view=views.index, name="index"),
    path("read-image-text/", view=views.read_image_text, name="read_image_text"),
]