import React, { useState, useEffect } from "react";
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, Tooltip } from "recharts";
import "./Live.css";
import debounce from "lodash.debounce";

const historicalData = [
  { time: 2, value: 5 },
  { time: 4, value: 4 },
  { time: 6, value: 24 },
  { time: 8, value: 15 },
  { time: 10, value: 20 },
  { time: 12, value: 18 },
  { time: 14, value: 32 },
  { time: 16, value: 30 },
  { time: 18, value: 35 },
  { time: 20, value: 25 },
  { time: 22, value: 32 },
  { time: 24, value: 30 }
];

const Live = () => {
  const [isMounted, setIsMounted] = useState(false);
  const currentDate = new Date().toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric"
  });

  useEffect(() => {
    const handleResize = debounce(() => {}, 300);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

  return (
    <div className="live-dashboard">
      <div className="live-container">
        {/* Side-by-side container */}
        <div className="flex-container">
          {/* Historical Data Chart */}
          <div className="card chart-card">
            <div className="chart-header">
              <h2 className="chart-title">HISTORICAL SENSOR DATA</h2>
              <span className="date">{currentDate}</span>
            </div>
            <div className="chart-container">
              {isMounted && (
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart
                    data={historicalData}
                    margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                  >
                    <XAxis
                      dataKey="time"
                      stroke="#8b92a5"
                      axisLine={false}
                      tickLine={false}
                    />
                    <YAxis
                      stroke="#8b92a5"
                      axisLine={false}
                      tickLine={false}
                      ticks={[0, 10, 20, 30, 40]}
                    />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "#252b3b",
                        border: "none",
                        borderRadius: "4px",
                        color: "#fff"
                      }}
                    />
                    <Line
                      type="monotone"
                      dataKey="value"
                      stroke="#3b82f6"
                      strokeWidth={2}
                      dot={true}
                      activeDot={{ r: 6 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              )}
            </div>
          </div>

          {/* Temperature Gauge */}
          <div className="card gauge-card">
            <div className="temperature-gauge">
              <div className="gauge-circle">
                <div className="gauge-border">
                  <div className="gauge-content">
                    <div className="temperature">77.53 F</div>
                    <div className="temperature-label">Temperature</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Live;