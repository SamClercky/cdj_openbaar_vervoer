# CDJ Server

Deze repo bevat alle code voor de website en server voor
het coderdojo project: **Openbaar Vervoer**

## 0. Klaar maken voor gebruik
Voordat je ook maar iets kunt doen moet je zien dat je zowel `git` als `nodejs (v10+)` hebt geïnstalleerd.

Vervolgens moet je al de juiste packetten installeren via volgend commando.
```
$> npm i
```
Dit commando zal je waarschijnlijk nog eens moeten herhalen als de code niet meer wil compileren.

## 1. Code wijzigen
Het project is zo opgebouwd dat de enige bestanden die je mag wijzigen, eindigen op `*.ts`. Deze kun je zonder al te veel problemen veranderen.

Code kun je terug naar de raspberry sturen via het volgend commando:
```
$> git push
```
Om de laatste wijzigingen te ontvangen, voer je volgend commando in.
```
$> git pull
```
## 2. De website programmeren
De website is gemaakt met `ReactJs` en komt daarom ook met de juiste tools. De code bevindt zich in `/src/`.

Om het resultaat in je eigen browser te zien, voer je volgend commando uit.
```
$> npm run start_website
```
Dit commando zal onmiddellijk een lokale server starten en de website openen in je favoriete browser.
## 3. De server programmeren
Voordat je dit kunt doen, moet je eerst een werkende versie van de website hebben gebouwd en moet je de servercode compileren. Dit kun je met volgende commando's.
```
$> npm run build_website
$> npm run watch_server
```
Als je dit gedaan hebt, open je een nieuwe terminal en voer je volgend commando uit om de server te starten.
```
$> npm run start_server
```
## 4. Overige website commando's
### 4.1 `npm run start_website`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### 4.2 `npm run test_website`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### 4.3 `npm run build_website`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### 4.4 `npm run eject_website`
**GEVAAR: Dit commando mag niet worden uitgevoerd zonder goedkeuring van één van de CoderDojo begeleiders!**

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## 5. Meer info

Gedetaileerde informatie over hoe de server te gebruiken op de raspberry, kan men vinden in de home-directory van de raspberry pi zelf (met de juiste accounts: `pi`, `server` en `git`).

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
