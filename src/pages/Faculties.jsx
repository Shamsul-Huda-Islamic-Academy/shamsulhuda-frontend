import { ProfileCard } from '../components/ProfileCard'
import { facultiesData } from '../constants/faculties'

export default function Faculties() {
    return (
        <section className="px-4 py-12 md:px-10">

            <div className="mb-10">
                
                <h1 className="text-3xl font-bold text-gray-900 md:text-4xl">
                    Faculty Members
                </h1>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
                {facultiesData.map((faculty) => (
                    <ProfileCard key={faculty.id} {...faculty} />
                ))}
            </div>

        </section>
    )
}