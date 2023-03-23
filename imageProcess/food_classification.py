import tensorflow.python.keras
import tensorflow as tf
from tensorflow import keras
from keras.models import load_model
from keras.preprocessing import image
import numpy as np

best_model = load_model("./imageProcess/best_model_11class.hdf5")

food_list = ['baklava', 'beet_salad', 'chicken_quesadilla', 'crab_cakes', 'donuts', 'falafel', 'fish_and_chips', 'pho', 'shrimp_and_grits', 'steak', 'tacos']

def predict_class(model=best_model, images = [], show=True):
    for img in images:
        # turning the image into an array for the model.predict() function
        img = tf.keras.utils.load_img(img, target_size=(299, 299))

        img = tf.keras.utils.img_to_array(img)
        img = np.expand_dims(img, axis=0)
        img /= 255.

        pred = model.predict(img)
        index = np.argmax(pred)
        food_list.sort()
        pred_value = food_list[index]
        return pred_value
 
if __name__ == "__main__":
    images = []
    images.append('./images/steak.jpg')
    images.append('./images/baklava.jpg')
    images.append('ph0.jpg')
    images.append('d0nut.jpg')
    
    predict_class(images)
