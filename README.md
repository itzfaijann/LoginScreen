echo. > README.md && (
echo # 🚀 React Native Login & Welcome App
echo.
echo ## 📖 How to Get Started
echo.
echo This project was built with [React Native CLI](https://github.com/itzfaijann/LoginScreen). Follow the steps below to set it up and run locally:
echo.
echo ### 1. Install dependencies
echo ^```
echo npm install
echo ^```
echo.
echo ### 2. Start Metro Bundler
echo ^```
echo npm start
echo ^```
echo.
echo ### 3. Run the app
echo.
echo For Android:
echo ^```
echo npm run android
echo ^```
echo.
echo For iOS (macOS only):
echo ^```
echo cd ios
echo pod install
echo cd ..
echo npm run ios
echo ^```
echo.
echo ---
echo.
echo ## 📱 Features
echo - 🎨 Clean ^& modern UI (Welcome + Login screens)
echo - 🔐 Local credential check using `user.js`
echo - 📐 Responsive design with `moderateScale()` and `fontSize()`
echo - 🚀 Built using React Native CLI (not Expo)
echo.
echo ---
echo.
echo ## 📂 Folder Structure
echo ^```
echo .
echo ├── App.js
     |__ Navigation.js
echo ├── screens/
echo │   ├── intro.js
echo │   └── Login.js
echo ├── src/
echo │   └── data/
echo │       └── user.js
echo ├── logo/
echo │   └── logo.png
echo ├── utils/
echo │   └── metrix.js
echo ^```
echo.
echo ---
echo.
echo ## 🔑 Test Credentials
echo.
echo Use the following email ^& password on the Login screen:
echo ^```
echo Email:    faijan@gmail.com
echo Password: faijan@123
echo ^```
echo.
echo ---
echo.
echo ## 📌 Navigation Setup
echo.
echo Your `App.js` should include navigation like:
echo ^```
echo <NavigationContainer>
echo   <Stack.Navigator initialRouteName="Welcome" screenOptions={{ headerShown: false }}>
echo     <Stack.Screen name="Welcome" component={Welcome} />
echo     <Stack.Screen name="Login" component={Login} />
echo   </Stack.Navigator>
echo </NavigationContainer>
echo ^```
echo.
echo ---
echo.
echo ## 🧠 Learn More
echo - [React Native Docs](https://reactnative.dev)
echo - [Navigation Docs](https://reactnavigation.org)
echo - [StyleSheet API](https://reactnative.dev/docs/stylesheet)
echo.
echo ---
echo.
echo ## 🙌 Acknowledgements
echo - Built with ❤️ by Mohmmed Faijan
echo - UI inspired by assessment tasks
echo.
echo ---
echo.
echo ## 📄 License
echo This project is for learning and practice purposes only.
) >> README.md
