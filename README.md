# ABOUT THE PROJECT
## 1. Features of the chatbot:
* Giving recipes based on users' requests / leftover ingredients.
* Giving recipes based on food image (Food recognition).
* Generating image of food based on text (Image generation).
* Communicate through speech (Speech recognition - Speech synthesis).
* Multi-language text communication (Vietnamese and English).




## 2. Install environment for the chatbot

* IMPORTANT: Python version: 3.8.7

* FOR WINDOWS 

    * Before trying to run anything, use "pip install virtualenv" to install virtualenv, a tool to create isolated Python environments.

    *   Then, inside the folder in which you put all of these files, type "virtualenv your_env_name". This would create a your_env_name folder inside the the folder. Activate the environment by running ".\your_env_name\Scripts\activate.bat". To exit the virtual environment, run "deactivate"

    * Next, inside your virtual environment, run "pip install -r ./requirements.txt" to install all necessary modules

### Note
* This repo does not contain the APIKEY to use OpenAI's API so create a .env file in the bot folder that contains "OPENAI_API_KEY=<YOUR_OWN_API_KEY>".
* If does not see the model to classify the food image, use the following link to download the hdf5 file that contains the model and place it in the imageProcess folder. (https://studenthcmusedu-my.sharepoint.com/:u:/g/personal/21120378_student_hcmus_edu_vn/ESROI5VCz09Cn2ydpTOpvCYBKaHbku99Fl20JHjS3iw4Fw?e=LUkHgU)
* To host the website to your local host, just run app.py in the command line.
