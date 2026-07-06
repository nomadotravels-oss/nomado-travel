"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface WeatherWidgetProps {
  lat: number;
  lng: number;
  name: string;
}

interface WeatherData {
  temp: number;
  condition: string;
  isDay: boolean;
}

// Maps WMO codes to simple conditions
function getWeatherCondition(code: number): string {
  if (code === 0) return "Clear Sky";
  if (code === 1 || code === 2 || code === 3) return "Partly Cloudy";
  if (code === 45 || code === 48) return "Foggy";
  if (code >= 51 && code <= 67) return "Rainy";
  if (code >= 71 && code <= 77) return "Snowy";
  if (code >= 80 && code <= 82) return "Rain Showers";
  if (code >= 85 && code <= 86) return "Snow Showers";
  if (code >= 95 && code <= 99) return "Thunderstorm";
  return "Clear";
}

export default function WeatherWidget({ lat, lng, name }: WeatherWidgetProps) {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchWeather() {
      try {
        const res = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lng}&current=temperature_2m,is_day,weather_code&timezone=auto`);
        if (!res.ok) throw new Error("Failed to fetch weather");
        
        const data = await res.json();
        const current = data.current;
        
        setWeather({
          temp: Math.round(current.temperature_2m),
          condition: getWeatherCondition(current.weather_code),
          isDay: current.is_day === 1
        });
      } catch (error) {
        console.error("Error fetching weather:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchWeather();
  }, [lat, lng]);

  if (loading || !weather) {
    return (
      <div className="bg-white/10 backdrop-blur-md rounded-[2rem] p-6 w-48 h-48 flex items-center justify-center animate-pulse border border-white/20">
        <div className="w-8 h-8 border-4 border-white/30 border-t-white rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="bg-white/10 backdrop-blur-md rounded-[2rem] p-6 w-48 shadow-2xl border border-white/20 text-white flex flex-col justify-between"
    >
      <div className="flex items-center justify-between mb-4">
        <span className="text-sm font-600 tracking-wider uppercase text-white/80">{name}</span>
        {weather.isDay ? (
          <svg className="w-6 h-6 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
        ) : (
          <svg className="w-6 h-6 text-blue-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
          </svg>
        )}
      </div>
      
      <div>
        <div className="text-5xl font-clash font-700 tracking-tighter mb-1">
          {weather.temp}°<span className="text-3xl text-white/70">C</span>
        </div>
        <div className="text-white/80 font-medium">
          {weather.condition}
        </div>
      </div>
    </motion.div>
  );
}
