from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt
import pytesseract
from PIL import Image

pytesseract.pytesseract.tesseract_cmd = 'C:\\Program Files\\Tesseract-OCR\\tesseract.exe'

def index(request):
    return HttpResponse("You're at the OCR index")

@csrf_exempt
def read_image_text(request):
    """
      Receives image for the request and returns the texts extracted from it.
    """
    if request.method == 'POST' and request.FILES.get('image'):
        image = request.FILES['image']

        extracted_text = pytesseract.image_to_string(Image.open(image))

        response = {
            'status': 0,
            'data': extracted_text if extracted_text else "No texts found in this image :("
        }

        return JsonResponse(response)
    else:
        response = {
          "status": -1,
          "data": "",
          "message": "No image file provided"
        }
        return JsonResponse(response, status=400)
