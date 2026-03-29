import { ProfileCard } from '../components/ProfileCard'
import { managementData } from '../constants/management'

export default function Management() {
    return (
        <section className="px-4 py-12 md:px-10">

            <div className="mb-10">                
                <h1 className="text-3xl font-bold text-gray-900 md:text-4xl">
                    Management Team
                </h1>
            </div>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                {managementData.map((member) => (
                    <ProfileCard key={member.id} {...member} />
                ))}
            </div>

        </section>
    )
}