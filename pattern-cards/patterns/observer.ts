// ==== Type Definition ====

type Observer<T> = (data: T) => void;

// ==== Interface Definition ====

interface WeatherData {
  temperature: number;
  condition: string;
}

// ==== Factory function ====

function createWeatherService() {
  let observers: Observer<WeatherData>[] = [];

  return {
    // Method for observers (e.g., TV programs) to subscribe and receive updates
    subscribe: (observer: Observer<WeatherData>) => {
      observers.push(observer);
      // Return an unsubscribe function to allow observers to stop receiving updates
      return () => {
        observers = observers.filter(obs => obs !== observer);
      };
    },

    // Method to update weather data and notify all subscribed observers
    updateWeather: (data: WeatherData) => {
      console.log("WeatherService: Updating weather data:", data);
      // Notify each observer by calling their function with the new data
      observers.forEach(observer => observer(data));
    }
  };
}

const weatherService = createWeatherService();

// ==== Creating Observers ====

const morningShow = (data: WeatherData) => {
  console.log(`[Morning Show] Temperature: ${data.temperature}°C, Condition: ${data.condition}`);
};

const eveningNews = (data: WeatherData) => {
  console.log(`[Evening News] Weather: ${data.condition} with ${data.temperature}°C`);
};

// ==== Client Code ====

const unsubscribeMorning = weatherService.subscribe(morningShow);
const unsubscribeEvening = weatherService.subscribe(eveningNews);

// ==== Usage ====

weatherService.updateWeather({ temperature: 25, condition: "Sunny" });

unsubscribeMorning();
unsubscribeEvening();

// Send another weather update; only Evening News receives it now
weatherService.updateWeather({ temperature: 18, condition: "Rainy" });
