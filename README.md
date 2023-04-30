### `npm start`

use this command to run project./

### folders

(Components) => two component that defined two type of chart to show USD.\

(Redux) => state managment form manage current price, save it and use in charts.\

(Utils) => in this forled we have one class that manage the webSocket (connect, reconnect, close, opopen, ...).\

## app file

in this file we call (ClientClass) and connect to web socket, and use the saved price in here and pass to chartComponents. with (responsivePointsSlicer) We made a small change in the number of chart points so that it can be displayed better on mobile and tablet devices.\
