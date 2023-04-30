import { toast } from "react-toastify";
import { Store } from "redux";
import { savePrices } from "../redux/prices/priceAction";
import store from "../redux/store";

export default class Client {
  static clientSingleton: Client;
  public socket?: WebSocket;
  public store: Store = store;

  public constructor() {
    this.init();
  }

  static get instance() {
    if (!this.clientSingleton) {
      this.clientSingleton = new Client();
    }

    return this.clientSingleton;
  }

  async init() {
    try {
      await this.connect();
    } catch (e) {}
  }

  connect(): Promise<boolean> {
    return new Promise((resolve: Function, reject: Function) => {
      this.socket = new WebSocket("ws://socket.dmiot.ir:8765");

      this.socket.onopen = () => {
        this.sendRequest(
          JSON.stringify({
            topic: "prices",
          })
        );
        toast.success("webSocket connected");
        resolve(true);
      };

      this.socket.onmessage = this.onMessage;

      this.socket.onerror = (error) => {
        toast.error("socket got  an error");
        console.error(error);
        reject(error);
      };

      this.socket.onclose = this.onClose.bind(this);
    });
  }

  onMessage = (response: MessageEvent): void => {
    try {
      const message = JSON.parse(response.data);
      store.dispatch(savePrices(message));
    } catch (e) {
      console.error(`error`, e);
    }
  };

  sendRequest(pack: string) {
    if (this.socket?.readyState) this.socket?.send(pack);
  }

  onClose() {
    if (this.socket?.readyState !== this.socket?.OPEN) {
      toast.warning("websocket disconnected, trying to reconnect");
      setTimeout(() => {
        this.init();
      }, 1000);
    }
  }

  close() {
    if (this?.socket) {
      this.socket.close();
    }
  }
}
