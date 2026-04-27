import speech_recognition as sr

def speech_to_text():
    r = sr.Recognizer()

    with sr.Microphone() as source:
        print("Speak now...")
        audio = r.listen(source)

    try:
        text = r.recognize_google(audio, language="hi-IN")
        return text
    except sr.UnknownValueError:
        return "Could not understand audio"
    except sr.RequestError:
        return "API error"