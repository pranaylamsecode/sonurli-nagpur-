import React from 'react';

export const WhatsAppButton: React.FC = () => {
    const phoneNumber = "91937105662"; // Using the India number from constants
    const message = "Hello, I would like to discuss a project.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    return (
        <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 group"
            aria-label="Chat on WhatsApp"
        >
            <div className="relative flex items-center justify-center">
                {/* Tooltip/Label */}
                <div className="absolute right-full mr-4 bg-slate-900 text-white px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg hidden md:block border border-slate-800">
                    WhatsApp us
                    <div className="absolute top-1/2 -right-1 -translate-y-1/2 border-4 border-transparent border-l-slate-900"></div>
                </div>

                {/* Icon Container */}
                <div className="w-14 h-14 bg-slate-950 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300 animate-bounce-slow border border-slate-800 group-hover:border-brand-500/50">
                    <svg
                        width="30"
                        height="30"
                        viewBox="0 0 1024 1024"
                        className="fill-white"
                    >
                        <path d="M512.001 0C229.096 0 0 229.096 0 512.001c0 90.237 23.456 177.108 68.104 254.41L23.23 930.77l164.33-43.104c77.302 44.648 164.173 68.104 254.41 68.104 282.905 0 512.001-229.096 512.001-512.001S794.906 0 512.001 0z" fill="currentColor" opacity="0" />
                        <path d="M866.566 157.434C771.84 62.708 645.926 10.544 512.001 10.544c-276.544 0-501.457 224.913-501.457 501.457 0 88.356 23.064 174.62 66.92 250.604L6.82 950.18l192.204-50.412c73.256 39.948 155.736 61.004 239.676 61.004h.212c276.508 0 501.492-224.913 501.492-501.457.052-133.98-52.06-259.893-146.838-354.66zM512.001 827.668h-.176c-74.804 0-148.164-20.12-212.16-58.084l-15.224-9.032-157.772 41.38 42.116-153.78-9.916-15.768C117.14 566.236 95.1 489.548 95.1 412.001c0-229.764 187.136-416.7 417.076-416.7 111.344 0 216.012 43.444 294.736 122.216 78.724 78.772 122.06 183.496 122.016 294.824-.088 229.78-187.108 416.728-416.928 416.728zM740.645 515.54c-12.536-6.272-74.148-36.584-85.636-40.764-11.488-4.18-19.844-6.272-28.2 6.272-8.352 12.536-32.372 40.764-39.68 49.12-7.308 8.36-14.616 9.408-27.152 3.136-12.536-6.272-52.908-19.5-100.78-62.18-37.252-33.216-62.404-74.244-69.712-86.78-7.308-12.544-.78-19.32 5.496-25.568 5.636-5.612 12.536-14.632 18.8-21.944 6.264-7.316 8.352-12.544 12.536-20.9 4.18-8.36 2.088-15.676-1.044-21.944-3.132-6.272-28.2-67.932-38.64-93.016-10.172-24.428-20.504-21.124-28.2-21.508-7.304-.364-15.66-.44-24.016-.44-8.356 0-21.932 3.136-33.42 15.676-11.488 12.544-43.86 42.856-43.86 104.512 0 61.656 44.904 121.24 51.168 129.6 6.264 8.36 88.368 134.904 214.08 189.172 29.9 12.908 53.24 20.616 71.444 26.392 30.024 9.532 57.34 8.188 78.932 4.964 24.076-3.596 74.148-30.308 84.588-59.572 10.44-29.264 10.44-54.348 7.308-59.572-3.132-5.224-11.488-8.36-24.024-14.632z" fill="#FFFFFF" />
                    </svg>
                </div>

                {/* Pulse Effect */}
                <div className="absolute inset-0 rounded-full bg-slate-800 animate-ping opacity-20"></div>
            </div>
        </a>
    );
};
