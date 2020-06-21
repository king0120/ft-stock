
export default function startWebSocket(symbol: string){
  const socket = new WebSocket('wss://ws.finnhub.io?token=brmjibvrh5re15om5k70');

  // Connection opened -> Subscribe
  socket.addEventListener('open', function (event) {
      socket.send(JSON.stringify({'type':'subscribe', 'symbol': symbol}))
      socket.send(JSON.stringify({'type':'subscribe', 'symbol': 'BINANCE:BTCUSDT'}))
      // socket.send(JSON.stringify({'type':'subscribe', 'symbol': 'IC MARKETS:1'}))
  });
  
  // Listen for messages
  socket.addEventListener('message', function (event) {
      console.log('Message from server ', event.data);
  });
  
  // Unsubscribe
   var unsubscribe = function() {
      socket.send(JSON.stringify({'type':'unsubscribe','symbol': symbol}))
  }
  
}
