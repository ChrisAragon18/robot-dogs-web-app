import Navbar from '../components/Navbar'

const group17 = [
    {
        name: 'Francisco Guerrero',
        role: 'Collaborative Mission Control Specialist',
        image: '/assets/images/francisco-image.jpg',
        description: 'Current Senior Undergraduate',
        major: 'Computer Science'
    },
    {
        name: 'Christopher Aragon',
        role: 'Collaborative Mission Control Specialist',
        image: '/assets/images/christopher-aragon.png',
        description: 'Current Senior Undergraduate',
        major: 'Computer Science'
    },
    {
        name: "Bryan Cooke",
        role: 'LIDAR Navigation Specialist',
        image: '/assets/images/bryan-cooke.png',
        description: 'Current Senior Undergraduate',
        major: 'Computer Science'
    },
    {
        name: "Christopher Anastasis",
        role: 'LIDAR Navigation Specialist',
        image: '/assets/images/christopher-anastasis.png',
        description: 'Current Senior Undergraduate',
        major: 'Computer Science'
    },
    {
        name: "Charles Fernandez-Hamoui",
        role: 'LIDAR Navigation Specialist',
        image: '/assets/images/charles-fernandez-hamoui-pic.png',
        description: 'Current Senior Undergraduate',
        major: 'Electrical Engineering'
    }
]



function About() {
    return (
        <>
            <Navbar />
            <div className="">
                <div className="container mx-auto">

                    <div className="py-2 flex flex-col justify-center text-center">

                        <h2 className="text-3xl font-bold  text-white sm:text-4xl">Meet our Team</h2>

                        <p className="mt-2 text-lg text-lime-300 ">
                            We are group of undergraduate seniors working with Unitree Go1 Edu robots and having them work collaboratively for possible search and rescue situations.
                            In a search and rescue situation, every moment is important and can be the difference between life and death.
                            Utilizing technology to the fullest to achieve a step in making sure that every life is saved is one of the hallmarks of progress as a species.
                            This type of collaborative searching can be applied in various ways, such as searching for patients in a lobby using facial recognition or delivering goods to hotel patrons.
                            This project expects to expand the field of search and rescue while simultaneously providing a framework for other unique solutions to service problems.
                        </p>
                    </div>


                    <ul role="list" className="py-2 flex justify-center text-center">
                        {group17.map((member) => (
                            <li key={member.name} className="">
                                <div className="items-center text-center p-2" id='member-element'>
                                    <img className="h-48 w-48 rounded-xl mx-auto" src={member.image} alt="group member 17" />
                                    <div>
                                        <h3 className="text-base font-semibold leading-7 tracking-tight text-white">{member.name}</h3>
                                        <p className="text-sm font-semibold leading-6 text-cyan-400">{member.role}</p>

                                        <p className="text-xs font-semibold leading-6 text-white">{member.description}</p>
                                        <p className="text-xs font-semibold leading-6 text-white">Major: {member.major}</p>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default About