import face_recognition
import trio
import cv2
import subprocess
import pickle
import requests

# Constants
DEFAULT_ENCODINGS_PATH = 'output/combined_encodings.pkl'

# FACELIGHT STUFF SETUP
# Replace 'your_command_here' with the actual command you want to run
command = 'cd /home/unitree/Unitree/sdk/faceLightSDK_Nano && ./bin/faceLightBlue'
command2 = 'cd /home/unitree/Unitree/sdk/faceLightSDK_Nano && ./bin/faceLightOff'
command3 = 'cd /home/unitree/Unitree/sdk/faceLightSDK_Nano && ./bin/faceLightRed'
command_yellow = 'cd /home/unitree/Unitree/sdk/faceLightSDK_Nano && ./bin/faceLightYellow'
command_talk = 'cd /home/unitree/Unitree/sdk/UnitreecameraSDK-main/face_recognizer && python3 audio.py --source '

async def run_talk(cmd):
    result = subprocess.run(cmd, shell=True, stdout=subprocess.PIPE, stderr=subprocess.PIPE)

def load_known_encodings(filename):
    with open(filename, 'rb') as f:
        return pickle.load(f)

def _recognize_face(unknown_encoding, loaded_encodings):
    matches = face_recognition.compare_faces(
        loaded_encodings["encodings"], unknown_encoding, tolerance=0.6
    )
    names = loaded_encodings["names"]
    confidences = face_recognition.face_distance(loaded_encodings["encodings"], unknown_encoding)
    matches_with_confidence = [(name, confidence) for name, match, confidence in zip(names, matches, confidences) if match]
    
    if matches_with_confidence:
        guessed_name, confidence = max(matches_with_confidence, key=lambda x: x[1])
        print(f"{guessed_name}, Confidence: {confidence:.2f}")

        if confidence > 0.9:
            return guessed_name, confidence * 100

async def recognize_faces(image_location, encodings_location=DEFAULT_ENCODINGS_PATH):
    loaded_encodings = load_known_encodings(encodings_location)

    try:
        input_image = face_recognition.load_image_file(image_location)
    except Exception as e:
        print(f"Couldn't open image: {e}")
        return

    input_face_locations = face_recognition.face_locations(input_image)
    input_face_encodings = face_recognition.face_encodings(input_image, input_face_locations)

    for unknown_encoding in input_face_encodings:
        result = _recognize_face(unknown_encoding, loaded_encodings)

        if result is not None:
            name, confidence = result
            print(f"Found face: {name} with confidence: {confidence:.2f}%")
            # Perform further actions as needed
        else:
            print("Face not found with sufficient confidence.")

async def main():
    # Start capture process in the background
    subprocess.Popen("cd /home/unitree/Unitree/sdk/UnitreecameraSDK-main && sh start_capture.sh &", shell=True, stdout=subprocess.PIPE, stderr=subprocess.PIPE)

    # Specify the device ID of the camera you want to use
    camera_device_id = 1

    # Initialize video capture object
    video_capture = cv2.VideoCapture(camera_device_id)

    # Load known encodings
    known_encodings = load_known_encodings(DEFAULT_ENCODINGS_PATH)

    while True:
        # Capture frame-by-frame
        ret, frame = video_capture.read()

        # Perform facial recognition on the frame
        rgb_frame = frame[:, :, ::-1]
        face_locations = face_recognition.face_locations(rgb_frame)
        face_encodings = face_recognition.face_encodings(rgb_frame, face_locations)

        for face_encoding in face_encodings:
            result = _recognize_face(face_encoding, known_encodings)
            if result is not None:
                name, confidence = result
                print(f"Found face: {name} with confidence: {confidence:.2f}%")

                # Send the results to your server
                url = "http://10.12.42.22:3000/api/results"  # Replace with your server's URL
                data = {"name": name, "confidence": confidence}
                response = requests.post(url, json=data)

                if response.status_code == 200:
                    print("Results successfully sent to the server.")
                else:
                    print("Failed to send results to the server.")

                video_capture.release()
                cv2.destroyAllWindows()
                exit(0)  # Exit the script

    # Release the video capture object and close all windows
    video_capture.release()
    cv2.destroyAllWindows()

# Start the trio event loop
trio.run(main)
