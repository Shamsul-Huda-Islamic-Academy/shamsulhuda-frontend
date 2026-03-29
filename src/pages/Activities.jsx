import Card from "../components/Card";
import { eventsData } from "../constants/eventData";
import { useEffect, useRef } from "react";

export default function Activities() {
    const cardRef = useRef([]);
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.remove(
                            "opacity-0",
                            "translate-y-8",
                            "scale-95"
                        );
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.15 }
        );

        cardRef.current.forEach((el) => {
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);
    return (
        <section className="px-4 py-12 mx-auto -12 md:px-10">
            <div className="mb-10">
                <h1 className="text-3xl font-bold text-gray-900 md:text-4xl">
                    Activities
                </h1>
            </div>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {eventsData.map((event, i) => (
                    <div
                    key={event.id}
                    className="transition-all duration-700 ease-out scale-95 translate-y-8 opacity-0"
                    ref={(el) => (cardRef.current[i] = el)}
                    style={{ transitionDelay: `${i * 120}ms`}}
                    >
                        <Card
                            key={event.id}
                            title={event.name}
                            {...event}  
                        />
                    </div>
                ))} 
            </div>
        </section>
    )
}