@"
# ✅ LoginScreen App - React Native CLI

A sleek, responsive **Login + Welcome UI** app built using **React Native CLI**.  
This app features a local credential check using `user.js`, clean design, and responsive styling.

---

## 🧑‍💻 How to Run This App

### ✅ Requirements

- Node.js
- Android Studio / Emulator
- React Native CLI
- Git

---

### 📦 Steps

\`\`\`bash
# 1. Clone the repo
git clone https://github.com/itzfaijann/LoginScreen
cd LoginScreen

# 2. Install dependencies
npm install

# 3. Start Metro
npm start

# 4. Run on Android
npm run android
\`\`\`

---

## 🚀 Features

- 🖼️ Welcome screen with logo  
- 🔐 Login screen with email/password input  
- ✅ Hardcoded credential validation  
- 📏 Responsive layout using \`moderateScale()\` and \`fontSize()\`  
- 🧭 Navigation configured via \`src/Navigation.js\`  
- 🎨 Modern UI with rounded inputs and blue primary theme  

---

## 📁 Folder Structure

\`\`\`
.
├── App.js
├── logo/
│   └── logo.png
├── screens/
│   ├── Welcome.js
│   └── Login.js
├── src/
│   ├── Navigation.js
│   └── data/
│       └── user.js
├── utils/
│   └── metrix.js
\`\`\`

---

## 🔑 Test Credentials

\`\`\`txt
email:    faijan@gmail.com  
password: faijan@123
\`\`\`

---

## 📌 Navigation Setup

Navigation is handled inside:

\`\`\`js
// src/Navigation.js
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Welcome from '../screens/Welcome';
import Login from '../screens/Login';

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
\`\`\`

---

## ⚠️ Common Errors

| Error                   | Solution                        |
|------------------------|----------------------------------|
| Metro not starting     | Run: \`npm start\`                 |
| Build fails on android | Ensure emulator is running       |
| Credentials not working| Check your \`user.js\` file values |

---

## 🧑‍💻 Author

**Mohmmed Faijan**  
🔗 GitHub: [https://github.com/itzfaijann](https://github.com/itzfaijann)

---

## 📄 License

This project is for personal learning and UI practice.
"@ > README.md
