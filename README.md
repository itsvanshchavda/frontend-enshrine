# Enshrine 

## Tech Stack

- React JS
- Tailwind CSS
- Web Speech API
- Framer Motion
- useSound Hook

## Implemented Features

- **Home Page**: The home page is fully animated and responsive, inspired by clearcut.design.
- **Grid System**: The grid system is implemented using Tailwind CSS, providing a responsive and mobile-friendly layout.
- **Text to Speech**: The text to speech feature is implemented using the Web Speech API, allowing text to be converted into speech.
- **Voice Language Support**: The voice language support feature is implemented using the Web Speech API, enabling text to be converted into different languages such as English and Hindi.
- **Sound Effects**: The sound effects are implemented using the useSound hook, providing an interactive user experience.

## How to Run the App

1. **Clone the Repository**

    ```bash
    git clone <repository-url>
    ```

2. **Install Dependencies**

    Navigate to the `client` and `server` directories and install the necessary dependencies:

    ```bash
    cd client
    npm install
    ```

    ```bash
    cd server
    npm install
    ```

3. **Run the Server and Client**

    Start both the client and server:

    ```bash
    cd client
    npm start
    ```

    ```bash
    cd server
    npm start
    ```

4. **Open in Browser**

    Open your browser and navigate to `http://localhost:5173`.

## Code Identification

- **Well-Written Code**: The code is clean, well-structured, and follows best practices.
- **Commenting**: Adequate comments are provided to enhance code understanding.
- **Folder Structure**: The folder structure is logical and easy to navigate.

## How The Web Speech API Works

The Web Speech API is a JavaScript API that allows voice data to be incorporated into web applications. It consists of two components: speech recognition and speech synthesis.

### Speech Recognition

The SpeechRecognition interface of the Web Speech API is used to control the recognition service and recognize speech in the browser.

```javascript   
const recognition = new window.SpeechRecognition();
recognition.lang = "en-US";
recognition.interimResults = false;
recognition.maxAlternatives = 1;
recognition.start();
```

## Developed By

👤 **Vansh Chavda**

- **Email**: [vanshchavda111@gmail.com](mailto:vanshchavda328@gmail.com)
- **Twitter**: [@vansh_chavda_](https://twitter.com/vansh_chavda_)
- **LinkedIn**: [Vansh Chavda](https://www.linkedin.com/in/vanshchavda07)
- **Portfolio**: [vanshchavda.me](https://www.vanshchavda.me)

Keep Coding! 🚀

