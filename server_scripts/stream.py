from flask import Flask, request, send_file
from PIL import Image
import io

app = Flask(__name__)

@app.route('/image', methods=['GET', 'POST'])
def serve_image():
    if request.method == 'POST':
        # Get the image file from the POST request
        file = request.files['image']

        # Convert the file to an image
        image = Image.open(file.stream)

        # Get the dimensions of the image
        width, height = image.size

        # Calculate the dimensions for the half of the image
        half_width = width // 2
        half_height = height

        # Crop the image to get only the left half
        left_half_image = image.crop((0, 0, half_width, half_height))

        # Create a BytesIO object to store the cropped image
        cropped_image_io = io.BytesIO()

        # Save the cropped image to the BytesIO object as JPEG
        left_half_image.save(cropped_image_io, format='JPEG')

        # Set the BytesIO object position to the beginning
        cropped_image_io.seek(0)

        return 'Image received and processed'
    else:
        # Provide the path to the original image here
        image_path = "MyImage.jpg"

        # Open the image using PIL
        image = Image.open(image_path)

        # Get the dimensions of the image
        width, height = image.size

        # Calculate the dimensions for the half of the image
        half_width = width // 2
        half_height = height

        # Crop the image to get only the left half
        left_half_image = image.crop((0, 0, half_width, half_height))

        # Create a BytesIO object to store the cropped image
        cropped_image_io = io.BytesIO()

        # Save the cropped image to the BytesIO object as JPEG
        left_half_image.save(cropped_image_io, format='JPEG')

        # Set the BytesIO object position to the beginning
        cropped_image_io.seek(0)

        return send_file(cropped_image_io, mimetype='image/jpeg')

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)