import Card from "../components/Card";
import { eventsData } from "../constants/eventData";

export default function Events() {
    return (
        <section className="px-4 py-12 mx-auto md:px-10">
            <div className="mb-10">
                <h1 className="text-3xl font-bold text-gray-900 md:text-4xl">
                    Events
                </h1>
            </div>
            
            <div className="grid grid-cols-1 gap-3 mx-auto sm:grid-cols-2 lg:grid-cols-3">
                {eventsData.map((event) => (
                    <Card
                        key={event.id}
                        title={event.name}
                        {...event}  
                    />
                ))} 
            </div>
        </section>
    )
}