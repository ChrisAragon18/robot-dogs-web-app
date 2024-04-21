import face_recognition
import os
import pickle

def encode_faces(images_dir):
    encodings = {"names": [], "encodings": []}

    # Iterate over files in the input images directory
    for root, dirs, files in os.walk(images_dir):
        for file in files:
            if file.endswith('.jpg') or file.endswith('.png'):
                image_path = os.path.join(root, file)

                # Load the image and encode the face
                image = face_recognition.load_image_file(image_path)
                face_encodings = face_recognition.face_encodings(image)

                if len(face_encodings) > 0:
                    # Store the encoding and the corresponding filename
                    encodings["names"].append(file)
                    encodings["encodings"].append(face_encodings[0])

    return encodings

def save_encodings(encodings, filename):
    with open(filename, 'wb') as f:
        pickle.dump(encodings, f)

# Path to the directory containing input images
input_images_dir = 'inputted_images'

# Path to the directory containing dataset images
dataset_images_dir = 'dataset_images'

# Encode faces in both input images and dataset images directories
input_encodings = encode_faces(input_images_dir)
dataset_encodings = encode_faces(dataset_images_dir)

# Combine the encodings dictionaries
combined_encodings = {
    "names": input_encodings["names"] + dataset_encodings["names"],
    "encodings": input_encodings["encodings"] + dataset_encodings["encodings"]
}

# Path to save the combined encodings
combined_encodings_output_path = 'output/combined_encodings.pkl'

# Save the combined encodings to file
save_encodings(combined_encodings, combined_encodings_output_path)
