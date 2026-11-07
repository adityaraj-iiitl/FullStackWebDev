
import React from "react";

const Card = ({ id, title, description, status, color, image }) => {
    return (
        <div className="relative h-11/12 w-1/4 shrink-0 rounded-3xl overflow-hidden ml-5">

            {/* Background Image */}
            <img
                src={image}
                alt={title}
                className="absolute inset-0 h-full w-full object-cover"
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/30 to-black/80"></div>

            {/* Number */}
            <div className="absolute top-4 left-4 flex items-center justify-center
                h-8 w-8 rounded-full bg-white text-black font-bold">
                {id}
            </div>

            {/* Description */}
            <div className="absolute bottom-20 left-4 right-4 text-white">
                <h2 className="text-sm font-bold mb-2">{title}</h2>
                <p className="text-sm leading-5 font-medium">
                    {description}
                </p>
            </div>

            {/* Bottom Status */}
            <div className="absolute bottom-3 left-3 right-3">
                <div className={`${color} flex items-center justify-between
                    rounded-full px-3 py-2 text-white text-xs font-semibold`}>
                    {status}
                    <span className="h-7 w-7 rounded-full bg-white/20
                        flex items-center justify-center text-lg">
                        →
                    </span>
                </div>
            </div>

        </div>
    );
};

export default Card;
