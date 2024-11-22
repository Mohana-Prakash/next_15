import React, { useState } from "react";
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const DateRangePicker = ({ dateRange, setDateRange }) => {
    return (
        <div className="w-1/5 max-w-md mx-auto">
            <Flatpickr
                value={
                    dateRange || [
                        new Date(new Date().setDate(new Date().getDate() - 7)).toISOString(),
                        new Date()
                    ]
                }
                onChange={dates => setDateRange(dates)}
                options={{
                    mode: "range",
                    dateFormat: "d-m-Y"
                }}
                render={({ defaultValue, value, ...props }, ref) => (
                    <input
                        {...props}
                        ref={ref}
                        className="w-full border border-gray-300 rounded-lg shadow-sm px-3 py-2 text-sm text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        placeholder="Select date range"
                    />
                )}
            />
        </div>
    );
};

export default DateRangePicker;
